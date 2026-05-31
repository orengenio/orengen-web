"use client";

import { useEffect } from "react";

/**
 * Ports the original homepage's vanilla-JS behavior into a single client effect:
 * theme toggle, mega/mobile/lang/login menus, FAQ + footer accordions, back-to-top,
 * scroll-reveal observer, section-head parallax, and the footer fuse-ignition fire
 * (kept close to verbatim — it is a Web-Animations particle engine).
 *
 * All listeners/observers/timers are tracked and torn down on unmount, and a guard
 * prevents the fire from double-igniting under React StrictMode's double-effect.
 */
export default function SiteRuntime() {
  useEffect(() => {
    const root = document.documentElement;
    const cleanups: Array<() => void> = [];
    const on = (
      el: EventTarget | null,
      type: string,
      handler: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions,
    ) => {
      if (!el) return;
      el.addEventListener(type, handler, opts);
      cleanups.push(() => el.removeEventListener(type, handler, opts));
    };

    /* ===== Theme ===== */
    const themeToggle = document.getElementById("themeToggle");
    const setTheme = (next: string) => {
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("orengen-theme", next);
      } catch {}
      if (themeToggle) themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
    };
    let saved = "dark";
    try {
      saved = localStorage.getItem("orengen-theme") || root.getAttribute("data-theme") || "dark";
    } catch {}
    setTheme(saved);
    on(themeToggle, "click", () =>
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark"),
    );

    /* ===== Mobile panel ===== */
    const mobileToggle = document.getElementById("mobileToggle");
    const mobilePanel = document.getElementById("mobilePanel");
    if (mobileToggle && mobilePanel) {
      on(mobileToggle, "click", () => {
        const open = mobilePanel.classList.toggle("open");
        mobilePanel.setAttribute("aria-hidden", String(!open));
        mobileToggle.setAttribute("aria-expanded", String(open));
      });
      mobilePanel.querySelectorAll("a").forEach((link) =>
        on(link, "click", () => {
          mobilePanel.classList.remove("open");
          mobilePanel.setAttribute("aria-hidden", "true");
          mobileToggle.setAttribute("aria-expanded", "false");
        }),
      );
    }

    /* ===== Mega submenu toggles ===== */
    document.querySelectorAll<HTMLElement>(".mega-toggle").forEach((toggle) => {
      on(toggle, "click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const parent = toggle.closest(".mega-parent");
        if (!parent) return;
        const container = parent.parentElement;
        container?.querySelectorAll(".mega-parent.open").forEach((item) => {
          if (item !== parent) {
            item.classList.remove("open");
            item.querySelector(".mega-toggle")?.setAttribute("aria-expanded", "false");
          }
        });
        const open = parent.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    });

    /* ===== Mobile accordions ===== */
    document.querySelectorAll<HTMLElement>(".mobile-acc").forEach((toggle) => {
      on(toggle, "click", () => {
        const open = toggle.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    });

    /* ===== FAQ ===== */
    document.querySelectorAll<HTMLElement>(".faq-q").forEach((button) => {
      on(button, "click", () => button.closest(".faq-item")?.classList.toggle("open"));
    });

    /* ===== Footer accordions (inline onclick replaced by listeners) ===== */
    document.querySelectorAll<HTMLElement>(".og-accordion-btn").forEach((btn) => {
      on(btn, "click", () => {
        const content = btn.nextElementSibling?.nextElementSibling;
        const isOpen = content?.classList.contains("open");
        document.querySelectorAll(".og-col-body").forEach((el) => el.classList.remove("open"));
        document.querySelectorAll(".og-accordion-btn").forEach((el) => {
          el.classList.remove("active");
          el.setAttribute("aria-expanded", "false");
        });
        if (!isOpen && content) {
          content.classList.add("open");
          btn.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });

    /* ===== Language menu ===== */
    const langToggle = document.getElementById("langToggle");
    const langOptions = document.getElementById("langOptions");
    if (langToggle && langOptions) {
      const setLangOpen = (open: boolean) => {
        langOptions.classList.toggle("open", open);
        (langOptions as HTMLElement).hidden = !open;
        langToggle.setAttribute("aria-expanded", String(open));
      };
      on(langToggle, "click", (e) => {
        e.stopPropagation();
        setLangOpen(!langOptions.classList.contains("open"));
      });
      on(document, "click", () => setLangOpen(false));
    }

    /* ===== Login menu ===== */
    const loginToggle = document.getElementById("loginToggle");
    const loginOptions = document.getElementById("loginOptions");
    if (loginToggle && loginOptions) {
      const setLoginOpen = (open: boolean) => {
        loginOptions.classList.toggle("open", open);
        (loginOptions as HTMLElement).hidden = !open;
        loginToggle.setAttribute("aria-expanded", String(open));
      };
      on(loginToggle, "click", (e) => {
        e.stopPropagation();
        setLoginOpen(loginOptions.hidden);
      });
      on(document, "click", () => setLoginOpen(false));
    }

    /* ===== Reveal-on-scroll ===== */
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    document
      .querySelectorAll(
        ".reveal, .reveal-stagger, .sector-card, .cost-card, .signal-card, .signal-feature, .kpi, .cap, .journey-card",
      )
      .forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    /* ===== Section-head parallax ===== */
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parallaxHeaders = Array.from(document.querySelectorAll<HTMLElement>(".section-head"));
    if (!prefersReduced && parallaxHeaders.length) {
      let ticking = false;
      const updateParallax = () => {
        parallaxHeaders.forEach((header) => {
          const rect = header.getBoundingClientRect();
          const midpoint = window.innerHeight * 0.52;
          const offset = (rect.top - midpoint) * -0.03;
          const move = Math.max(-12, Math.min(12, offset));
          const title = header.querySelector<HTMLElement>("h2");
          const text = header.querySelector<HTMLElement>("p");
          if (title) title.style.transform = `translate3d(0, ${move}px, 0)`;
          if (text) text.style.transform = `translate3d(0, ${move * 0.55}px, 0)`;
        });
        ticking = false;
      };
      on(window, "scroll", () => {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }, { passive: true });
      updateParallax();
    }

    /* ===== Back to top ===== */
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      const onScroll = () => backToTop.classList.toggle("show", window.scrollY > 600);
      on(window, "scroll", onScroll, { passive: true });
      onScroll();
      on(backToTop, "click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    /* ===== Footer fuse ignition (verbatim particle engine) ===== */
    const timers: number[] = [];
    let ambientSparkInterval: number | null = null;
    let fuseObserver: IntersectionObserver | null = null;
    (() => {
      const taglineEl = document.getElementById("fuseTagline");
      const taglineBox = document.getElementById("taglineBox");
      const fuseContainer = document.getElementById("fuseContainer");
      if (!taglineEl || !taglineBox || !fuseContainer) return;
      const chars = taglineEl.querySelectorAll<HTMLElement>(".tl-char");

      const spawnAmbientSpark = (x: number, y: number, edge: number) => {
        const spark = document.createElement("div");
        spark.className = "og-spark";
        spark.style.left = x + "px";
        spark.style.top = y + "px";
        fuseContainer.appendChild(spark);
        let dx = 0, dy = 0;
        switch (edge) {
          case 0: dx = (Math.random() - 0.5) * 20; dy = -(10 + Math.random() * 20); break;
          case 1: dx = 10 + Math.random() * 15; dy = (Math.random() - 0.5) * 20; break;
          case 2: dx = (Math.random() - 0.5) * 20; dy = 10 + Math.random() * 20; break;
          case 3: dx = -(10 + Math.random() * 15); dy = (Math.random() - 0.5) * 20; break;
        }
        const size = 2 + Math.random() * 3;
        const colors = ["#FFD700", "#FF6A00", "#FF4500", "#FFA500", "#FFFFFF"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        spark.animate(
          [
            { opacity: 1, transform: "translate(0, 0) scale(1)", background: color, width: size + "px", height: size + "px", boxShadow: "0 0 4px " + color },
            { opacity: 0, transform: `translate(${dx}px, ${dy}px) scale(0.2)`, background: "#FF4500", width: size + "px", height: size + "px", boxShadow: "0 0 0px transparent" },
          ],
          { duration: 300 + Math.random() * 500, easing: "ease-out", fill: "forwards" },
        ).onfinish = () => spark.remove();
      };

      const spawnIgnitionSpark = (anchor: HTMLElement) => {
        const spark = document.createElement("div");
        spark.className = "og-spark";
        const rect = anchor.getBoundingClientRect();
        const containerRect = fuseContainer.getBoundingClientRect();
        spark.style.left = rect.left - containerRect.left + rect.width / 2 + "px";
        spark.style.top = rect.top - containerRect.top + "px";
        const angleVal = -30 - Math.random() * 120;
        const distance = 15 + Math.random() * 30;
        const rad = (angleVal * Math.PI) / 180;
        const dx = Math.cos(rad) * distance;
        const dy = Math.sin(rad) * distance;
        fuseContainer.appendChild(spark);
        spark.animate(
          [
            { opacity: 1, transform: "translate(0, 0) scale(1)", background: "#FFD700", boxShadow: "0 0 4px #FFD700" },
            { opacity: 0, transform: `translate(${dx}px, ${dy}px) scale(0.3)`, background: "#FF4500", boxShadow: "0 0 0px transparent" },
          ],
          { duration: 400 + Math.random() * 300, easing: "ease-out", fill: "forwards" },
        ).onfinish = () => spark.remove();
      };

      const startAmbientSparks = () => {
        ambientSparkInterval = window.setInterval(() => {
          const boxRect = taglineBox.getBoundingClientRect();
          const containerRect = fuseContainer.getBoundingClientRect();
          const edge = Math.floor(Math.random() * 4);
          let x = 0, y = 0;
          switch (edge) {
            case 0: x = Math.random() * boxRect.width; y = -4; break;
            case 1: x = boxRect.width + 4; y = Math.random() * boxRect.height; break;
            case 2: x = Math.random() * boxRect.width; y = boxRect.height + 4; break;
            case 3: x = -4; y = Math.random() * boxRect.height; break;
          }
          spawnAmbientSpark(boxRect.left - containerRect.left + x, boxRect.top - containerRect.top + y, edge);
        }, 150);
      };

      const startFuseAnimation = () => {
        const fuseBurnEl = document.getElementById("fuseBurn");
        if (fuseBurnEl) fuseBurnEl.style.animationPlayState = "running";
        const fuseDelay = 3000;
        const charDelay = 60;
        timers.push(
          window.setTimeout(() => {
            chars.forEach((char, idx) => {
              timers.push(
                window.setTimeout(() => {
                  char.classList.add("lit");
                  if (idx % 2 === 0) spawnIgnitionSpark(char);
                  if (idx % 4 === 0) {
                    spawnIgnitionSpark(char);
                    spawnIgnitionSpark(char);
                  }
                }, idx * charDelay),
              );
            });
            timers.push(
              window.setTimeout(() => {
                taglineBox.classList.add("ignited");
                startAmbientSparks();
              }, chars.length * charDelay + 200),
            );
          }, fuseDelay),
        );
      };

      let fuseStarted = false;
      const ignite = () => {
        if (fuseStarted) return;
        fuseStarted = true;
        startFuseAnimation();
        fuseObserver?.disconnect();
      };
      fuseObserver = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && ignite()),
        { threshold: 0.3 },
      );
      fuseObserver.observe(fuseContainer);
      timers.push(window.setTimeout(ignite, 2000));
    })();

    return () => {
      cleanups.forEach((fn) => fn());
      timers.forEach((t) => clearTimeout(t));
      if (ambientSparkInterval) clearInterval(ambientSparkInterval);
      fuseObserver?.disconnect();
    };
  }, []);

  return null;
}
