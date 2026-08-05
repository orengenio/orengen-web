"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Brand-native pricing table with a Monthly/Yearly toggle.
 *
 * Adapts the requested pricing-section-4 concept (period toggle, animated
 * price, "most popular" highlight) into the existing plain-CSS brand system —
 * no Tailwind/shadcn/NumberFlow dependency.
 *
 * Every plan receives explicit monthly and annual totals from the approved
 * pricing catalog. Nothing is derived inside this presentation component.
 */

const BOOKING_URL = "https://api.orengen.io/widget/bookings/locked-in";

export type PricingPlan = {
  name: string;
  monthly: number;
  /** Final annual total from the approved commercial catalog. */
  annual: number;
  /** Small qualifier under the price, e.g. "3 AI Employees". */
  unit?: string;
  /** One-time setup line, shown verbatim, e.g. "+ $997 one-time setup". */
  setup?: string;
  /** Short descriptive paragraph. */
  description?: string;
  /** Optional bullet feature list. */
  features?: string[];
  /** Marks the highlighted / "Most Popular" plan. */
  featured?: boolean;
  /** Override the badge label (defaults to "Most Popular" when featured). */
  badge?: string;
  ctaLabel?: string;
  /** CTA link for monthly billing (falls back to the booking link). */
  ctaHref?: string;
  /** CTA link used when Yearly is active (falls back to ctaHref). */
  ctaHrefAnnual?: string;
};

/** Tweens the displayed integer between values so the price "rolls" on toggle. */
function AnimatedPrice({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = prev.current;
    const to = value;
    if (from === to) return;

    // Respect reduced-motion: jump straight to the value.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(to);
      prev.current = to;
      return;
    }

    const duration = 480;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    let start: number | null = null;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setDisplay(Math.round(from + (to - from) * easeOutCubic(p)));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        prev.current = to;
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      prev.current = to;
    };
  }, [value]);

  return <>{display.toLocaleString("en-US")}</>;
}

export default function PricingTiers({
  plans,
  columns,
}: {
  plans: PricingPlan[];
  columns?: 2 | 3;
}) {
  const [yearly, setYearly] = useState(false);
  const cols = columns ?? (plans.length === 2 ? 2 : 3);

  // Largest annual saving across tiers, for the toggle's "Save up to N%" pill.
  const maxSavePct = Math.max(
    0,
    ...plans.map((p) => {
      const a = p.annual;
      const full = p.monthly * 12;
      return full > 0 ? Math.round(((full - a) / full) * 100) : 0;
    }),
  );

  return (
    <div className="pricing-block reveal">
      <div className="price-toggle-row">
        <div
          className="price-toggle"
          data-year={yearly}
          role="group"
          aria-label="Billing period"
        >
          <span className="toggle-pill" aria-hidden="true" />
          <button
            type="button"
            aria-pressed={!yearly}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={yearly}
            onClick={() => setYearly(true)}
          >
            Annual
          </button>
        </div>
        <span className="price-save" data-on={yearly}>
          Save up to {maxSavePct}%
        </span>
      </div>

      <div className="price-grid" data-cols={cols}>
        {plans.map((plan) => {
          const annual = plan.annual;
          const featured = !!plan.featured;
          const ctaHref =
            (yearly && plan.ctaHrefAnnual) ||
            plan.ctaHref ||
            BOOKING_URL;
          return (
            <article
              key={plan.name}
              className={`price-card${featured ? " is-featured" : ""}`}
            >
              <div className="price-plan-heading">
                {(featured || plan.badge) && (
                  <div className="price-badge">
                    {plan.badge ?? "Most Popular"}
                  </div>
                )}
                <h3 className="price-name">{plan.name}</h3>
              </div>
              <div className="price-plan-rate">
                <div className="price-amount">
                  <span className="price-cur">$</span>
                  <span className="price-num">
                    <AnimatedPrice value={yearly ? annual : plan.monthly} />
                  </span>
                  <span className="price-per">/{yearly ? "yr" : "mo"}</span>
                </div>
                {yearly && annual < plan.monthly * 12 && (
                  <div className="price-save-line">
                    Save ${(plan.monthly * 12 - annual).toLocaleString("en-US")}/yr
                  </div>
                )}
              </div>
              <div className="price-plan-terms">
                {plan.unit && <div className="price-unit">{plan.unit}</div>}
                {plan.setup && <div className="price-setup">{plan.setup}</div>}
                {plan.description && (
                  <p className="price-desc">{plan.description}</p>
                )}
              </div>
              {plan.features && plan.features.length > 0 && (
                <ul className="price-feat">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              <a
                className={`btn ${featured ? "btn-primary" : "btn-secondary"} price-cta`}
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.ctaLabel ?? "Get Started"}
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
