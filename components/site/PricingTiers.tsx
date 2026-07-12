"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Brand-native pricing table with a Monthly/Yearly toggle.
 *
 * Adapts the requested pricing-section-4 concept (period toggle, animated
 * price, "most popular" highlight) into the existing plain-CSS brand system —
 * no Tailwind/shadcn/NumberFlow dependency.
 *
 * Pricing rule: annual = monthly × 10 ("save 17%"), which is OrenGen's real,
 * account-wide policy verified against the live site in the 2026 catalog. It is
 * derived from each tier's monthly price, so existing monthly prices are the
 * single source of truth and are never altered here. Pass an explicit `annual`
 * only to override a specific tier.
 */

const BOOKING_URL = "https://api.orengen.io/booking/coffeechat";
const ANNUAL_MULTIPLIER = 10; // 12 months billed at 10× monthly = 2 months free (~17% off)

export type PricingPlan = {
  name: string;
  monthly: number;
  /** Annual total. Defaults to monthly × 10. */
  annual?: number;
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
  ctaHref?: string;
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
            Yearly
          </button>
        </div>
        <span className="price-save" data-on={yearly}>
          Save 17%
        </span>
      </div>

      <div className="price-grid" data-cols={cols}>
        {plans.map((plan) => {
          const annual = plan.annual ?? plan.monthly * ANNUAL_MULTIPLIER;
          const featured = !!plan.featured;
          return (
            <article
              key={plan.name}
              className={`price-card${featured ? " is-featured" : ""}`}
            >
              {(featured || plan.badge) && (
                <div className="price-badge">
                  {plan.badge ?? "Most Popular"}
                </div>
              )}
              <h3 className="price-name">{plan.name}</h3>
              <div className="price-amount">
                <span className="price-cur">$</span>
                <span className="price-num">
                  <AnimatedPrice value={yearly ? annual : plan.monthly} />
                </span>
                <span className="price-per">/{yearly ? "yr" : "mo"}</span>
              </div>
              {plan.unit && <div className="price-unit">{plan.unit}</div>}
              {plan.setup && <div className="price-setup">{plan.setup}</div>}
              {plan.description && (
                <p className="price-desc">{plan.description}</p>
              )}
              {plan.features && plan.features.length > 0 && (
                <ul className="price-feat">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              <a
                className={`btn ${featured ? "btn-primary" : "btn-secondary"} price-cta`}
                href={plan.ctaHref ?? BOOKING_URL}
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
