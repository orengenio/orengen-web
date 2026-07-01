import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Affiliate Program page.
 * Rebuilt from the real, published program terms on weshare.orengen.io (the
 * platform that actually runs this program) — commissions, payout schedule,
 * and package pricing below are the live figures, not estimates. Do not
 * add numbers that aren't published there; weshare has no public cookie
 * duration, FAQ, or terms page, so none is stated here either.
 */
export const metadata: Metadata = {
  title: "Affiliate Program — OrenGen Worldwide",
  description:
    "Earn 10-25% setup commission and 5-10% monthly residual (rank-based) referring OrenGen website packages. Free to join, weekly payouts via Stripe. Powered by WeShare.",
  keywords:
    "affiliate-program, OrenGen, OrenGen Worldwide, website referral program, affiliate commissions",
  alternates: { canonical: "/affiliate-program" },
  openGraph: {
    title: "Affiliate Program — OrenGen Worldwide",
    description:
      "Earn 10-25% setup commission and 5-10% monthly residual (rank-based) referring OrenGen website packages. Powered by WeShare.",
    url: "https://orengen.io/affiliate-program",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

const PACKAGES = [
  { name: "Standard", monthly: "$247/mo", setup: "$997 setup" },
  { name: "Professional", monthly: "$497/mo", setup: "$2,497 setup", featured: true },
  { name: "Premium", monthly: "$997/mo", setup: "$4,997 setup" },
];

export default function AffiliateProgramPage() {
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
            aria-label="Affiliate Program"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Affiliate Program</div>
                <h1>
                  Get Paid to{" "}
                  <span className="gradient-word shimmer">
                    Refer OrenGen Websites
                  </span>
                </h1>
                <p className="lead">
                  Refer clients to OrenGen&apos;s website packages and earn a
                  setup commission upfront, then a monthly residual for as
                  long as they stay active. Free to join — no credit card
                  required.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">10–25% setup commission</span>
                  <span className="chip">5–10% monthly residual</span>
                  <span className="chip">Weekly payouts via Stripe</span>
                </div>
              </header>
            </div>
          </section>

          {/* WHAT YOU'RE REFERRING */}
          <section
            className="section alt section-brand-white"
            aria-label="Website packages"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">What You&apos;re Referring</div>
                <h2>
                  Three website packages.{" "}
                  <span style={ACCENT}>One commission on every one.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                {PACKAGES.map((p) => (
                  <article className="sector-card" key={p.name}>
                    {p.featured ? <div className="sector-trust">Most Popular</div> : null}
                    <h3>{p.name}</h3>
                    <p>{p.monthly} + {p.setup}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* COMMISSION STRUCTURE */}
          <section
            className="section section-brand-blue"
            aria-label="Commission structure"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Commission Structure</div>
                <h2>
                  Rank-based commissions.{" "}
                  <span style={ACCENT}>The more you refer, the higher your rate.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">10–25%</div>
                  <h3>Setup Commission</h3>
                  <p>Paid once, upfront, on every package setup fee. Rate increases with rank.</p>
                </article>
                <article className="sector-card">
                  <div className="step">5–10%</div>
                  <h3>Monthly Residual</h3>
                  <p>Recurring commission on the monthly package fee for as long as the client stays active. Rate increases with rank.</p>
                </article>
                <article className="sector-card">
                  <div className="step">$50</div>
                  <h3>Fast-Start Bonus</h3>
                  <p>One-time bonus for your first successful referral.</p>
                </article>
                <article className="sector-card">
                  <h3>Army Builder</h3>
                  <p>Recruit other affiliates to your team and earn additional income as they refer clients.</p>
                </article>
              </div>
              <p className="reveal" style={{ textAlign: "center", marginTop: "24px" }}>
                Example at the top affiliate rank: referring a Professional
                package ($2,497 setup / $497 mo) earns up to <strong>$624.25</strong> upfront
                and up to <strong>$49.70/mo</strong> for as long as the client stays active.
              </p>
            </div>
          </section>

          {/* PAYOUTS */}
          <section
            className="section alt section-brand-white"
            aria-label="Payouts"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Payouts</div>
                <h2>Paid every Friday. No chasing invoices.</h2>
              </header>
              <div className="sector-grid reveal">
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
                <article className="sector-card">
                  <h3>Real-Time Dashboard</h3>
                  <p>Track clicks, leads, earnings, and payout history from your own dashboard.</p>
                </article>
              </div>
              <p className="reveal" style={{ textAlign: "center", marginTop: "24px", color: "var(--og-text-muted)", fontStyle: "italic" }}>
                Earnings shown are illustrative projections, not guarantees.
                Individual results vary based on effort and client retention.
              </p>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Join the affiliate program"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Ready to start referring?</h2>
                <p>
                  Sign up free — no credit card required. You&apos;ll get your
                  referral link and partner code immediately.
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
