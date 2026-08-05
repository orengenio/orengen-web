"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Interactive, self-running product demo for OrenNexus. Everything here is a
 * client-side simulation with clearly-labeled *sample* data — no real account
 * data and no backend calls. It's meant to feel alive: metrics tick up, an
 * activity feed streams, deals auto-advance through the pipeline, an AI agent
 * types and replies, automations run, and toasts fire. Fully keyboard/click
 * interactive (tabs), and respects prefers-reduced-motion (no autoplay).
 */

type Tab = "dashboard" | "pipeline" | "inbox" | "automations" | "reports";

const NAV: { id: Tab; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "pipeline", label: "Pipeline" },
  { id: "inbox", label: "Inbox" },
  { id: "automations", label: "Automations" },
  { id: "reports", label: "Reports" },
];

const COMPANIES = [
  "Northwind Traders", "Acme Robotics", "Vertex Health", "BlueRiver Legal",
  "Cobalt Freight", "Summit Dental", "Ironclad Security", "Harbor Point CPA",
  "Redwood Realty", "Lumen Logistics",
];
const NAMES = ["Marcus", "Priya", "Dana", "Luis", "Aisha", "Tom", "Grace", "Noah"];

const STAGES = ["New", "Qualified", "Proposal", "Won"] as const;
type Stage = (typeof STAGES)[number];

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const rand = (min: number, max: number) => Math.floor(min + Math.random() * (max - min + 1));

// ---- Activity feed ----------------------------------------------------------
type FeedItem = { id: number; icon: string; text: string; tag: string };
const SEED_FEED: FeedItem[] = [
  { id: -1, icon: "✦", text: "Northwind Traders auto-qualified by AI", tag: "New" },
  { id: -2, icon: "◆", text: "AI booked a meeting with Priya", tag: "Booked" },
  { id: -3, icon: "▲", text: "Deal won — Vertex Health · $18.4k", tag: "Won" },
  { id: -4, icon: "✉", text: "SMS reactivation sent · 340 contacts", tag: "Sent" },
];
function makeFeed(): Omit<FeedItem, "id"> {
  const roll = rand(0, 5);
  if (roll === 0) return { icon: "✦", text: `${pick(COMPANIES)} auto-qualified by AI`, tag: "New" };
  if (roll === 1) return { icon: "◆", text: `AI booked a meeting with ${pick(NAMES)}`, tag: "Booked" };
  if (roll === 2) return { icon: "▲", text: `Deal won — ${pick(COMPANIES)} · $${rand(6, 42)}.${rand(0, 9)}k`, tag: "Won" };
  if (roll === 3) return { icon: "✉", text: `SMS reactivation sent · ${rand(120, 900)} contacts`, tag: "Sent" };
  if (roll === 4) return { icon: "↺", text: "Missed call recovered — callback scheduled", tag: "Recovered" };
  return { icon: "☺", text: `${pick(NAMES)} replied — routed to Sales`, tag: "Routed" };
}

// ---- Pipeline ---------------------------------------------------------------
type Deal = { id: number; company: string; value: number; stage: Stage };
const SEED_DEALS: Deal[] = [
  { id: -1, company: "Acme Robotics", value: 24, stage: "New" },
  { id: -2, company: "Summit Dental", value: 9, stage: "New" },
  { id: -3, company: "Cobalt Freight", value: 31, stage: "Qualified" },
  { id: -4, company: "BlueRiver Legal", value: 14, stage: "Qualified" },
  { id: -5, company: "Vertex Health", value: 18, stage: "Proposal" },
  { id: -6, company: "Redwood Realty", value: 27, stage: "Won" },
];

// ---- Inbox conversation script ---------------------------------------------
type Msg = { id: number; from: "them" | "ai"; text: string };
const SCRIPTS: { from: "them" | "ai"; text: string }[][] = [
  [
    { from: "them", text: "Hi — do you handle bilingual support?" },
    { from: "ai", text: "We do — 100+ languages, voice and chat. Want a quick walkthrough?" },
    { from: "them", text: "Yes, tomorrow afternoon works." },
    { from: "ai", text: "Booked you for 2:30 PM CST. Confirmation + calendar invite sent ✅" },
  ],
  [
    { from: "them", text: "How fast can you follow up on new leads?" },
    { from: "ai", text: "Instantly — I qualify and reply in under 4 seconds, 24/7." },
    { from: "them", text: "Can you push it into our CRM?" },
    { from: "ai", text: "Already done — contact created, deal opened, team notified 🔔" },
  ],
];

const AUTOMATION_STEPS = ["New lead", "AI qualifies", "Books meeting", "Updates CRM", "Notifies team"];
const REPORT_BARS = [46, 58, 52, 71, 64, 83, 77];

const money = (n: number) => n.toLocaleString("en-US");
const EASE = [0.16, 1, 0.3, 1] as const;

export default function NexusLiveDemo({
  demoHref = "https://api.orengen.io/booking/coffeechat",
  portalHref = "https://app.orengen.io",
}: {
  demoHref?: string;
  portalHref?: string;
}) {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<Tab>("dashboard");
  const [live, setLive] = useState(false); // becomes true after mount → drives simulation
  const idRef = useRef(1);
  const nextId = () => idRef.current++;

  // metrics
  const [revenue, setRevenue] = useState(248200);
  const [qualified, setQualified] = useState(47);
  const [reply, setReply] = useState(3.2);
  const [watching, setWatching] = useState(8);

  // feed / pipeline / inbox / automations
  const [feed, setFeed] = useState<FeedItem[]>(SEED_FEED);
  const [deals, setDeals] = useState<Deal[]>(SEED_DEALS);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [autoStep, setAutoStep] = useState(0);
  const [toasts, setToasts] = useState<{ id: number; text: string }[]>([]);

  const fireToast = useCallback((text: string) => {
    const id = idRef.current++;
    setToasts((t) => [...t, { id, text }]);
    window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4200);
  }, []);

  useEffect(() => {
    setLive(true);
    if (reduce) return; // reduced-motion: static snapshot, no autoplay
    const timers: number[] = [];

    // metrics tick
    timers.push(
      window.setInterval(() => {
        setRevenue((v) => v + rand(400, 3400));
        setReply(() => Number((2.7 + Math.random() * 0.9).toFixed(1)));
        setWatching(() => rand(6, 15));
        if (rand(0, 2) === 0) setQualified((v) => v + 1);
      }, 2500),
    );

    // activity feed stream
    timers.push(
      window.setInterval(() => {
        setFeed((f) => [{ id: nextId(), ...makeFeed() }, ...f].slice(0, 6));
      }, 2800),
    );

    // pipeline auto-advance
    timers.push(
      window.setInterval(() => {
        setDeals((prev) => {
          const movable = prev.filter((d) => d.stage !== "Won");
          if (!movable.length) return prev;
          const target = movable[rand(0, movable.length - 1)];
          const nextStage = STAGES[STAGES.indexOf(target.stage) + 1];
          const updated = prev.map((d) => (d.id === target.id ? { ...d, stage: nextStage } : d));
          if (nextStage === "Won") {
            fireToast(`💰 Deal won — ${target.company} · $${target.value}k`);
            // retire the won deal shortly and spawn a fresh lead
            window.setTimeout(() => {
              setDeals((cur) => {
                const trimmed = cur.filter((d) => d.id !== target.id).slice(-7);
                return [...trimmed, { id: nextId(), company: pick(COMPANIES), value: rand(8, 40), stage: "New" }];
              });
            }, 1600);
          }
          return updated;
        });
      }, 3600),
    );

    return () => timers.forEach((t) => window.clearInterval(t));
  }, [reduce, fireToast]);

  // Inbox conversation loop (runs while the Inbox tab is open)
  useEffect(() => {
    if (!live || reduce || tab !== "inbox") return;
    let cancelled = false;
    const timers: number[] = [];
    let scriptIdx = 0;

    const runScript = () => {
      if (cancelled) return;
      const script = SCRIPTS[scriptIdx % SCRIPTS.length];
      setMessages([]);
      let delay = 500;
      script.forEach((line) => {
        if (line.from === "ai") {
          timers.push(
            window.setTimeout(() => !cancelled && setTyping(true), delay),
          );
          delay += 1300;
          timers.push(
            window.setTimeout(() => {
              if (cancelled) return;
              setTyping(false);
              setMessages((m) => [...m, { id: idRef.current++, ...line }]);
            }, delay),
          );
          delay += 900;
        } else {
          timers.push(
            window.setTimeout(() => !cancelled && setMessages((m) => [...m, { id: idRef.current++, ...line }]), delay),
          );
          delay += 1300;
        }
      });
      // restart with the next script
      timers.push(
        window.setTimeout(() => {
          scriptIdx++;
          runScript();
        }, delay + 2600),
      );
    };
    runScript();

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
      setTyping(false);
    };
  }, [live, reduce, tab]);

  // Automations step loop (runs while the Automations tab is open)
  useEffect(() => {
    if (!live || reduce || tab !== "automations") return;
    setAutoStep(0);
    const t = window.setInterval(() => {
      setAutoStep((s) => {
        const next = (s + 1) % (AUTOMATION_STEPS.length + 1);
        if (next === AUTOMATION_STEPS.length) fireToast("⚡ Automation completed — lead → booked");
        return next;
      });
    }, 1100);
    return () => window.clearInterval(t);
  }, [live, reduce, tab, fireToast]);

  const dealsByStage = (s: Stage) => deals.filter((d) => d.stage === s);

  return (
    <section className="section alt section-brand-white" id="preview" aria-label="OrenNexus live demo">
      <div className="container">
        <header className="section-head center reveal">
          <div className="eyebrow">Live demo · no signup</div>
          <h2>OrenNexus, running live</h2>
          <p className="lead">
            This isn&apos;t a screenshot — it&apos;s the command center working in
            real time. Watch leads qualify, deals close, and the AI reply on its
            own. Click around.
          </p>
        </header>

        <motion.div
          className="nx-demo"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* chrome */}
          <div className="nx-chrome">
            <div className="nx-dots" aria-hidden="true"><span /><span /><span /></div>
            <div className="nx-chrome-title">app.orengen.io / nexus</div>
            <div className="nx-live-badges">
              <span className="nx-watching">
                <span className="nx-eye" aria-hidden="true" /> {watching} watching now
              </span>
              <span className="nx-live"><span className="nx-pulse" aria-hidden="true" /> Live</span>
            </div>
          </div>

          <div className="nx-body">
            {/* sidebar */}
            <nav className="nx-side" aria-label="Demo navigation">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className={`nx-nav${tab === n.id ? " is-active" : ""}`}
                  onClick={() => setTab(n.id)}
                  aria-pressed={tab === n.id}
                >
                  <span className="nx-nav-dot" aria-hidden="true" />
                  {n.label}
                </button>
              ))}
              <div className="nx-side-foot" aria-hidden="true">
                <span className="nx-pulse" /> AI agent online
              </div>
            </nav>

            {/* main */}
            <div className="nx-main">
              {/* metrics strip (always visible) */}
              <div className="nx-metrics">
                <div className="nx-metric">
                  <span className="nx-metric-l">Pipeline value</span>
                  <span className="nx-metric-v">${money(revenue)}</span>
                </div>
                <div className="nx-metric">
                  <span className="nx-metric-l">Qualified today</span>
                  <span className="nx-metric-v">{qualified}</span>
                </div>
                <div className="nx-metric">
                  <span className="nx-metric-l">Avg AI reply</span>
                  <span className="nx-metric-v">{reply.toFixed(1)}s</span>
                </div>
              </div>

              <div className="nx-view">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: EASE }}
                    className="nx-view-inner"
                  >
                    {tab === "dashboard" && (
                      <div className="nx-feed" aria-label="Live activity">
                        <div className="nx-feed-head">Live activity</div>
                        <AnimatePresence initial={false}>
                          {feed.map((it, i) => (
                            <motion.div
                              key={it.id}
                              layout
                              initial={reduce ? false : { opacity: 0, height: 0, y: -6 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={reduce ? undefined : { opacity: 0, height: 0 }}
                              transition={{ duration: 0.35, ease: EASE }}
                              className="nx-feed-row"
                            >
                              <span className="nx-feed-icon">{it.icon}</span>
                              <span className="nx-feed-text">{it.text}</span>
                              <span className="nx-feed-tag">{it.tag}</span>
                              <span className="nx-feed-time">{i === 0 ? "just now" : `${i * 3}s`}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    )}

                    {tab === "pipeline" && (
                      <div className="nx-kanban">
                        {STAGES.map((s) => (
                          <div className="nx-col" key={s}>
                            <div className="nx-col-head">
                              <span>{s}</span>
                              <span className="nx-col-count">{dealsByStage(s).length}</span>
                            </div>
                            <div className="nx-col-body">
                              <AnimatePresence initial={false}>
                                {dealsByStage(s).map((d) => (
                                  <motion.div
                                    key={d.id}
                                    layout
                                    initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={reduce ? undefined : { opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.35, ease: EASE }}
                                    className={`nx-deal${s === "Won" ? " is-won" : ""}`}
                                  >
                                    <span className="nx-deal-co">{d.company}</span>
                                    <span className="nx-deal-val">${d.value}k</span>
                                  </motion.div>
                                ))}
                              </AnimatePresence>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {tab === "inbox" && (
                      <div className="nx-chat">
                        <div className="nx-chat-head">
                          <span className="nx-avatar" aria-hidden="true">AI</span>
                          <div>
                            <div className="nx-chat-name">OrenNexus AI Agent</div>
                            <div className="nx-chat-sub"><span className="nx-pulse" /> replying in real time</div>
                          </div>
                        </div>
                        <div className="nx-chat-body">
                          <AnimatePresence initial={false}>
                            {messages.map((m) => (
                              <motion.div
                                key={m.id}
                                layout
                                initial={reduce ? false : { opacity: 0, y: 8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3, ease: EASE }}
                                className={`nx-bubble ${m.from === "ai" ? "is-ai" : "is-them"}`}
                              >
                                {m.text}
                              </motion.div>
                            ))}
                          </AnimatePresence>
                          {typing && (
                            <div className="nx-bubble is-ai nx-typing" aria-label="AI is typing">
                              <span /><span /><span />
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {tab === "automations" && (
                      <div className="nx-flow" aria-label="Automation running">
                        {AUTOMATION_STEPS.map((step, i) => (
                          <div key={step} className="nx-flow-item">
                            <div className={`nx-node${i < autoStep ? " is-done" : ""}${i === autoStep ? " is-active" : ""}`}>
                              <span className="nx-node-i">{i < autoStep ? "✓" : i + 1}</span>
                              <span className="nx-node-l">{step}</span>
                            </div>
                            {i < AUTOMATION_STEPS.length - 1 && (
                              <div className={`nx-wire${i < autoStep ? " is-lit" : ""}`} aria-hidden="true" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {tab === "reports" && (
                      <div className="nx-reports">
                        <div className="nx-report-kpis">
                          <div className="nx-report-kpi"><b>+18%</b><span>Win rate MoM</span></div>
                          <div className="nx-report-kpi"><b>4.1x</b><span>Faster follow-up</span></div>
                          <div className="nx-report-kpi"><b>−63%</b><span>Manual work</span></div>
                        </div>
                        <div className="nx-chart">
                          {REPORT_BARS.map((h, i) => (
                            <motion.span
                              key={i}
                              className={`nx-bar${i === 5 ? " is-peak" : ""}`}
                              style={{ height: `${h}%` }}
                              initial={reduce ? false : { scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* toasts */}
            <div className="nx-toasts" aria-live="polite">
              <AnimatePresence>
                {toasts.map((t) => (
                  <motion.div
                    key={t.id}
                    initial={reduce ? false : { opacity: 0, x: 40, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={reduce ? undefined : { opacity: 0, x: 40 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="nx-toast"
                  >
                    {t.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="product-preview__actions">
          <a className="btn btn-primary" href={portalHref} target="_blank" rel="noopener noreferrer">
            Open your command center
          </a>
          <a className="btn btn-secondary" href={demoHref} target="_blank" rel="noopener noreferrer">
            Talk to us
          </a>
        </div>
        <p className="product-preview__note">
          Interactive demo with simulated sample data. Your live account mirrors
          this in real time once you&apos;re onboarded.
        </p>
      </div>
    </section>
  );
}
