import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenLegal Law Firms page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orenlegal-law-firms.html — only presentation/layout changed.
 *
 * Metadata note: the source is a GoHighLevel body fragment with no
 * <title>/<meta>/<link rel="canonical"> tags, so metadata below is constructed
 * concisely from the hero headline + eyebrow (head data, not visible body
 * wording).
 */
export const metadata: Metadata = {
  title: "OrenLegal Law Firms — Legal Operations Infrastructure | OrenGen",
  description:
    "Purpose-built workflow architecture for intake systems, document routing, communications logic, and operational consistency across legal teams.",
  keywords:
    "orenlegal, law firms, legal operations, intake orchestration, document routing, orengen",
  alternates: { canonical: "/orenlegal/law-firms" },
  openGraph: {
    title: "OrenLegal Law Firms — Legal Operations Infrastructure | OrenGen",
    description:
      "Law-firm legal operations infrastructure. Purpose-built workflow architecture for intake, document routing, communications logic, and operational consistency.",
    url: "https://orengen.io/orenlegal/law-firms",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenLegalLawFirmsPage() {
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
            id="overview"
            aria-label="OrenLegal / Law Firms"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">OrenLegal / Law Firms</div>
                <h1>
                  Law-firm legal operations{" "}
                  <span className="gradient-word shimmer">infrastructure.</span>
                </h1>
                <p className="lead">
                  Purpose-built workflow architecture for intake systems,
                  document routing, communications logic, and operational
                  consistency across legal teams.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="/contact">
                    Book Firm Operations Briefing
                  </a>
                  <a className="btn btn-secondary" href="/orenlegal">
                    Back to OrenLegal
                  </a>
                </div>
              </header>
            </div>
          </section>

          {/* CAPABILITIES */}
          <section
            className="section alt section-brand-white"
            aria-label="Law-firm legal operations capabilities"
          >
            <div className="container">
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Intake orchestration</h3>
                  <p>
                    Structured intake pathways, qualification logic, and
                    follow-up triggers.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Case-adjacent workflows</h3>
                  <p>
                    Automated routing for non-legal-advice operational steps and
                    team handoffs.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Document process support</h3>
                  <p>
                    Workflow support for document preparation queues and internal
                    approvals.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Governance visibility</h3>
                  <p>
                    Operational tracking surfaces for workload, response windows,
                    and process controls.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
        <SiteRuntime />
      </div>
    </>
  );
}
