import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Blog index (OrenGen Field Brief).
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from Footer-pages/blog/page.html —
 * only presentation/layout changed.
 */
export const metadata: Metadata = {
  title:
    "OrenGen Insights | AI Automation, Fractional Leadership & Business Strategy",
  description:
    "Executive-level analysis on fractional C-suite leadership, AI automation, government contracting, email deliverability, and CRM strategy from OrenGen Worldwide.",
  keywords: "blog, OrenGen, OrenGen Worldwide, AI infrastructure, blog",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title:
      "OrenGen Insights | AI Automation, Fractional Leadership & Business Strategy",
    description:
      "Executive-level analysis on fractional C-suite leadership, AI automation, government contracting, email deliverability, and CRM strategy from OrenGen Worldwide.",
    url: "https://orengen.io/blog",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function BlogPage() {
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
            aria-label="Insights"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Insights</div>
                <h1>
                  The OrenGen{" "}
                  <span className="gradient-word shimmer">Field Brief.</span>
                </h1>
                <p className="lead">
                  Executive-level analysis on fractional C-suite leadership, AI
                  automation, government contracting, email deliverability, and
                  CRM strategy from OrenGen Worldwide.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">Sovereign AI architecture</span>
                  <span className="chip">NIST &amp; HIPAA</span>
                  <span className="chip">No-rent methodology</span>
                  <span className="chip">Founder commentary</span>
                </div>
              </header>
            </div>
          </section>

          {/* BLOG CONTENT */}
          <section
            className="section alt section-brand-white"
            aria-label="Blog content"
          >
            <div className="container">
              <header className="section-head reveal">
                <h2>Latest Insights</h2>
                <p>
                  OrenGen publishes operator-grade writing on enterprise AI
                  infrastructure, federal procurement, healthcare compliance,
                  and the mechanics of sovereign deployments. Every post is
                  grounded in active engagements &mdash; no theory, no fluff.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Methodology</div>
                  <h3>The No-Rent Methodology Explained</h3>
                  <p>
                    Why per-seat SaaS dependency is the silent margin killer of
                    mid-market enterprise &mdash; and how to convert
                    subscription spend into owned operational assets.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Federal</div>
                  <h3>Subcontracting Under FAR 19.704</h3>
                  <p>
                    How SDB-certified firms (like OrenGen) plug into defense and
                    civilian primes&apos; small business utilization scorecards.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Healthcare</div>
                  <h3>HIPAA-Enabled AI Without Third-Party Exposure</h3>
                  <p>
                    Why self-hosted Claude environments with executed BAA chains
                    are the only credible architecture for clinical AI workflows
                    in 2026.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Observability</div>
                  <h3>AI Cost Attribution Beyond the Dashboard</h3>
                  <p>
                    Six trace patterns every team should run before approving an
                    LLM production rollout &mdash; and the alerting that catches
                    drift early.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Voice</div>
                  <h3>Buy-Lingual&trade; at Scale</h3>
                  <p>
                    Lessons from deploying multi-language AI voice agents across
                    30+ workforce buildouts. What works, what fails, what to
                    insist on in your stack.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Governance</div>
                  <h3>NIST 800-53 Aligned AI Deployments</h3>
                  <p>
                    The control framework checklist OrenGen runs against every
                    enterprise engagement &mdash; and how it maps to federal RMF
                    requirements.
                  </p>
                </article>
              </div>

              <div className="cta-row reveal">
                <p>
                  <strong>Want every new post?</strong> Subscribe to the OrenGen
                  Field Brief &mdash; one operator-grade essay per week, no
                  fluff, no upsells.{" "}
                  <a href="mailto:briefing@orengen.io?subject=Subscribe%20to%20Field%20Brief">
                    briefing@orengen.io
                  </a>
                </p>
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
                <h2>Ready to architect your own sovereign stack?</h2>
                <p>
                  Founder-direct response within four hours. The first
                  conversation is with the architect.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="mailto:briefing@orengen.io"
                  >
                    Architect the Briefing
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
