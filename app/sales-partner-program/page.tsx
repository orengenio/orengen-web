import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Sales Partner Program page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from the source body fragment
 * Footer-pages/sales-partner-program/page.html — only presentation/layout
 * changed.
 *
 * The source is a GoHighLevel-style body fragment with no <title> tag, so the
 * metadata below is constructed from the source's <meta>/<link rel="canonical">
 * head tags (head data, not visible body wording).
 *
 * Commission Structure previously rendered literal, unrendered template
 * artifacts ({t.pct}/{t.label}/{t.desc}) left over from the source's
 * un-expanded .map(); replaced with the actual tiers stated in the intro
 * copy above (30% direct / 10% downline) instead of reproducing the bug.
 */
export const metadata: Metadata = {
  title: "Sales Partner Program — OrenGen Worldwide",
  description:
    "1099 Sales Partners. Earn 30% direct + 10% on your downline in recurring commissions. Full marketing kit and AI coach included.",
  keywords:
    "sales-partner-program, OrenGen, OrenGen Worldwide, AI infrastructure, sales partner program",
  alternates: { canonical: "/sales-partner-program" },
  openGraph: {
    title: "Sales Partner Program — OrenGen Worldwide",
    description:
      "1099 Sales Partners. Earn 30% direct + 10% on your downline in recurring commissions. Full marketing kit and AI coach included.",
    url: "https://orengen.io/sales-partner-program",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

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
                  Sell AI.{" "}
                  <span className="gradient-word shimmer">Build Your Book.</span>
                </h1>
                <p className="lead">
                  1099 Sales Partners. Earn 30% direct + 10% on your downline in
                  recurring commissions. Full marketing kit and AI coach
                  included.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">Enterprise referrals</span>
                  <span className="chip">White-glove handoff</span>
                  <span className="chip">Recurring revenue</span>
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
                Join OrenGen&apos;s Sales Partner Program as a{" "}
                <strong>1099 independent contractor</strong> and earn{" "}
                <strong>30% direct commissions + 10% on your downline</strong>{" "}
                &mdash; with a full marketing kit, AI coach, and real-time
                dashboard included.
              </p>
              <p>
                1099 contractor &middot; 120-day cookie &middot; Monthly payouts
                &middot; Powered by WeShare
              </p>
              <h2>
                Commission <span style={ACCENT}>Structure</span>
              </h2>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">30%</div>
                  <h3>Direct Commission</h3>
                  <p>Recurring commission on every engagement you close directly.</p>
                </article>
                <article className="sector-card">
                  <div className="step">10%</div>
                  <h3>Downline</h3>
                  <p>Recurring commission on engagements closed by your downline.</p>
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
                <h2>Refer enterprise AI engagements.</h2>
                <p>
                  Apply for the OrenGen sales partner program. Founder-direct
                  intake within four hours.
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
