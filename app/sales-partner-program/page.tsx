import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Sales Partner Program page.
 * Rebuilt from the real, published program terms on weshare.orengen.io (the
 * platform that actually runs this program) — commissions, payout schedule,
 * and package pricing below are the live figures, not estimates. Do not
 * add numbers that aren't published there; weshare has no public cookie
 * duration, FAQ, or terms page, so none is stated here either.
 */
export const metadata: Metadata = {
  title: "Sales Partner Program — OrenGen Worldwide",
  description:
    "Earn a flat 25% of the setup fee and 25% monthly residual, for life, referring OrenGen website packages. Free to join, weekly payouts via Stripe. Powered by WeShare.",
  keywords:
    "sales-partner-program, OrenGen, OrenGen Worldwide, website referral program, sales partner commissions",
  alternates: { canonical: "/sales-partner-program" },
  openGraph: {
    title: "Sales Partner Program — OrenGen Worldwide",
    description:
      "Earn a flat 25% of the setup fee and 25% monthly residual, for life, referring OrenGen website packages. Powered by WeShare.",
    url: "https://orengen.io/sales-partner-program",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

const PACKAGES = [
  { name: "Standard", monthly: "$247/mo", setup: "$997 setup", partnerSetup: "$249.25", partnerMonthly: "$61.75/mo" },
  { name: "Professional", monthly: "$497/mo", setup: "$2,497 setup", partnerSetup: "$624.25", partnerMonthly: "$124.25/mo", featured: true },
  { name: "Premium", monthly: "$997/mo", setup: "$4,997 setup", partnerSetup: "$1,249.25", partnerMonthly: "$249.25/mo" },
];

export default function SalesPartnerProgramPage() {
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          {/* HERO */}
          <section
            className="section section-brand-blue"
            aria-label="Sales Partner Program"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Sales Partner Program</div>
                <h1>
                  Sell OrenGen Websites.{" "}
                  <span className="gradient-word shimmer">Keep 25%, For Life.</span>
                </h1>
                <p className="lead">
                  A flat 25% of every setup fee, plus 25% of the monthly fee
                  for as long as the client stays active — no ranks, no
                  tiers. Free to join, no credit card required.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">25% of setup fee</span>
                  <span className="chip">25% monthly residual, for life</span>
                  <span className="chip">Weekly payouts via Stripe</span>
                </div>
              </header>
            </div>
          </section>

          {/* WHAT YOU'RE REFERRING */}
          <section
            className="section alt section-brand-white"
            aria-label="Website packages and commissions"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">What You Earn, Per Package</div>
                <h2>
                  25% of the setup fee.{" "}
                  <span style={ACCENT}>25% of the monthly fee, for life.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                {PACKAGES.map((p) => (
                  <article className="sector-card" key={p.name}>
                    {p.featured ? <div className="sector-trust">Most Popular</div> : null}
                    <h3>{p.name}</h3>
                    <p>{p.monthly} + {p.setup}</p>
                    <p><strong>You earn: {p.partnerSetup} setup + {p.partnerMonthly}</strong></p>
                  </article>
                ))}
              </div>
              <p className="reveal" style={{ textAlign: "center", marginTop: "16px", color: "var(--og-text-muted)", fontStyle: "italic" }}>
                Earnings shown are illustrative projections, not guarantees.
                Individual results vary based on effort and client retention.
              </p>
            </div>
          </section>

          {/* PAYOUTS */}
          <section
            className="section section-brand-blue"
            aria-label="Payouts"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Payouts</div>
                <h2>Paid every Friday. No chasing invoices.</h2>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">$50</div>
                  <h3>Fast-Start Bonus</h3>
                  <p>One-time bonus for your first successful referral.</p>
                </article>
                <article className="sector-card">
                  <h3>Weekly, via Stripe</h3>
                  <p>Payouts run every Friday by direct deposit through Stripe.</p>
                </article>
                <article className="sector-card">
                  <h3>$25 Minimum Balance</h3>
                  <p>Payouts process once your balance reaches $25.</p>
                </article>
                <article className="sector-card">
                  <h3>30-Day Clawback Only</h3>
                  <p>After 30 days your referred client is locked in — no retroactive commission reversals after that window.</p>
                </article>
              </div>
              <div className="cap reveal" style={{ marginTop: "24px" }}>
                <p>
                  <strong>Grow Into Partner Leader.</strong> Partner Leader is
                  an earned status, not something you sign up for directly —
                  it&apos;s awarded as you build a team. Leaders keep their
                  own commission plus an additional 5% of every team
                  member&apos;s setup fee and 5% of their monthly residual.
                </p>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section alt section-brand-white"
            aria-label="Join the sales partner program"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Ready to start selling?</h2>
                <p>
                  Sign up free — no credit card required. You&apos;ll get
                  your referral link, partner code, and dashboard access
                  immediately.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://weshare.orengen.io/register"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign Up Free
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="https://weshare.orengen.io/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Already a Partner? Sign In
                  </a>
                </div>
              </header>
            </div>
          </section>
        </main>
        <SiteFooter />
        <SiteRuntime />
      </div>
    </>
  );
}
