"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  productName: string;
  description: string;
  demoHref?: string;
  portalHref?: string;
  sectionId?: string;
};

/**
 * Animated product preview shown when a live embed isn't available. Renders a
 * stylized "command center" dashboard (illustrative sample data, not real
 * account figures) that animates into view — count-up metrics, growing chart
 * bars, staggered inbox rows, and a pulsing LIVE indicator — powered by motion.
 * Respects prefers-reduced-motion (everything renders in its final state).
 */

const NAV = ["Dashboard", "Pipeline", "Inbox", "Automations", "Reports"];

const STATS: { label: string; value: number; suffix?: string }[] = [
  { label: "Open Deals", value: 128 },
  { label: "Reply Rate", value: 92, suffix: "%" },
  { label: "Automations", value: 24 },
];

// Chart column heights (%) — purely illustrative.
const BARS = [42, 63, 51, 78, 60, 91, 72];

const INBOX = [
  { tag: "New", who: "Inbound lead", note: "Requested a demo — auto-qualified" },
  { tag: "Auto", who: "Pipeline", note: "Deal advanced to Proposal" },
  { tag: "Sent", who: "SMS campaign", note: "Reactivation sequence delivered" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    let raf = 0;
    const duration = 1100;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function ProductPreview({
  productName,
  description,
  demoHref = "https://api.orengen.io/booking/coffeechat",
  portalHref = "https://app.orengen.io",
  sectionId = "preview",
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      className="section alt section-brand-white"
      id={sectionId}
      aria-label={`${productName} preview`}
    >
      <div className="container">
        <header className="section-head center reveal">
          <div className="eyebrow">Live preview</div>
          <h2>See {productName} in action</h2>
          <p className="lead">{description}</p>
        </header>

        <div className="product-preview reveal">
          <motion.div
            className="product-preview__frame"
            role="img"
            aria-label={`${productName} command center preview`}
            initial={reduce ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="product-preview__chrome">
              <div className="product-preview__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="product-preview__title">
                {productName} · Command Center
              </div>
              <div className="product-preview__live" aria-hidden="true">
                <span className="product-preview__pulse" />
                Live
              </div>
            </div>

            <div className="product-preview__layout">
              <aside className="product-preview__sidebar" aria-hidden="true">
                {NAV.map((item, i) => (
                  <div
                    key={item}
                    className={`product-preview__nav-item${i === 0 ? " is-active" : ""}`}
                  >
                    <span className="product-preview__nav-dot" />
                    {item}
                  </div>
                ))}
              </aside>

              <div className="product-preview__main" aria-hidden="true">
                <div className="product-preview__metrics">
                  {STATS.map((s, i) => (
                    <motion.div
                      key={s.label}
                      className="product-preview__metric"
                      initial={reduce ? false : { opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.1 }}
                    >
                      <span className="product-preview__metric-label">
                        {s.label}
                      </span>
                      <span className="product-preview__metric-value">
                        <CountUp value={s.value} suffix={s.suffix} />
                      </span>
                      <span className="product-preview__metric-trend" />
                    </motion.div>
                  ))}
                </div>

                <div className="product-preview__panel">
                  <div className="product-preview__panel-head">
                    <span className="product-preview__panel-title">
                      Pipeline this month
                    </span>
                    <span className="product-preview__panel-tag">+18%</span>
                  </div>
                  <div className="product-preview__chart">
                    {BARS.map((h, i) => (
                      <motion.span
                        key={i}
                        className={`product-preview__bar${i === 5 ? " is-peak" : ""}`}
                        style={{ height: `${h}%` }}
                        initial={reduce ? false : { scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.6,
                          ease: EASE,
                          delay: 0.35 + i * 0.06,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="product-preview__panel product-preview__panel--list">
                  {INBOX.map((row, i) => (
                    <motion.div
                      key={row.note}
                      className="product-preview__row"
                      initial={reduce ? false : { opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.45, ease: EASE, delay: 0.5 + i * 0.12 }}
                    >
                      <span className="product-preview__row-dot" />
                      <div className="product-preview__row-text">
                        <span className="product-preview__row-who">{row.who}</span>
                        <span className="product-preview__row-note">{row.note}</span>
                      </div>
                      <span className="product-preview__row-tag">{row.tag}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="product-preview__actions">
            <a
              className="btn btn-primary"
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a live demo
            </a>
            <a
              className="btn btn-secondary"
              href={portalHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open client portal
            </a>
          </div>
          <p className="product-preview__note">
            Preview shown with sample data. Interactive tenant access is provided
            after onboarding — procurement teams can request a guided walkthrough
            on the architecture brief.
          </p>
        </div>
      </div>
    </section>
  );
}
