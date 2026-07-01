import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Affiliate Program page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from the source body fragment
 * Footer-pages/affiliate-program/page.html — only presentation/layout changed.
 *
 * The source is a GoHighLevel-style body fragment whose <head> carries
 * <meta>/<link rel="canonical"> tags but no <title>, so the metadata below is
 * built from those head tags + og:title (head data, not visible body wording).
 *
 * Commission Structure previously rendered literal, unrendered template
 * artifacts ({t.pct}/{t.label}/{t.desc}) left over from the source's
 * un-expanded .map(); replaced with the actual tiers stated in the intro
 * copy above (15% direct / 5% network) instead of reproducing the bug.
 */
export const metadata: Metadata = {
  title: "Affiliate Program — OrenGen Worldwide",
  description:
    "Earn recurring commissions by referring businesses to OrenGen AI. 120-day cookie, monthly payouts, full marketing kit included.",
  keywords:
    "affiliate-program, OrenGen, OrenGen Worldwide, AI infrastructure, affiliate program",
  alternates: { canonical: "/affiliate-program" },
  openGraph: {
    title: "Affiliate Program — OrenGen Worldwide",
    description:
      "Earn recurring commissions by referring businesses to OrenGen AI. 120-day cookie, monthly payouts, full marketing kit included.",
    url: "https://orengen.io/affiliate-program",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

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
                  Turn Your Network Into{" "}
                  <span className="gradient-word shimmer">
                    Recurring Revenue
                  </span>
                </h1>
                <p className="lead">
                  Earn recurring commissions by referring businesses to OrenGen
                  AI. 120-day cookie, monthly payouts, full marketing kit
                  included.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">Recurring commissions</span>
                  <span className="chip">Real-time dashboard</span>
                  <span className="chip">Founder-direct payouts</span>
                </div>
              </header>
            </div>
          </section>

          {/* DOCUMENT CONTENT */}
          <section
            className="section alt section-brand-white"
            aria-label="Document content"
          >
            <div className="container">
              <p>
                Join OrenGen&apos;s affiliate program and earn{" "}
                <strong>
                  15% recurring commissions on every referral + 5% on your
                  network
                </strong>{" "}
                &mdash; with a full marketing kit and AI coach included.
              </p>
              <p>
                120-day cookie &middot; Monthly payouts &middot; $50 minimum
                &middot; Powered by WeShare
              </p>
              <h2>
                Commission <span style={ACCENT}>Structure</span>
              </h2>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">15%</div>
                  <h3>Direct Referral</h3>
                  <p>Recurring commission on every business you refer to OrenGen.</p>
                </article>
                <article className="sector-card">
                  <div className="step">5%</div>
                  <h3>Network Tier</h3>
                  <p>Recurring commission on referrals made by your network.</p>
                </article>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Contact OrenGen"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Ready to monetize your network?</h2>
                <p>
                  Apply for the OrenGen affiliate program. Approval typically
                  within one business day.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://weshare.orengen.io/register"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
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
