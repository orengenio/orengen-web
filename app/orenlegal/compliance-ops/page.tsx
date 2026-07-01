import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenLegal Compliance Ops page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orenlegal-compliance-ops.html — only presentation/layout
 * changed. The source is a body fragment with no <title>/<meta>/canonical tags,
 * so metadata is constructed from the hero headline.
 */
export const metadata: Metadata = {
  title: "OrenLegal Compliance Ops | OrenGen",
  description:
    "Compliance operations that execute in the real world. Translate policy and legal requirements into practical workflow orchestration, intake controls, escalation logic, and evidence-ready process trails.",
  alternates: { canonical: "/orenlegal/compliance-ops" },
};

export default function OrenLegalComplianceOpsPage() {
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
            aria-label="OrenLegal / Compliance Ops"
          >
            <div className="container">
              <header className="section-head reveal">
                <div className="eyebrow">OrenLegal / Compliance Ops</div>
                <h1>Compliance operations that execute in the real world.</h1>
                <p className="lead">
                  Translate policy and legal requirements into practical
                  workflow orchestration, intake controls, escalation logic, and
                  evidence-ready process trails.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="/contact-us">
                    Book Compliance Ops Briefing
                  </a>
                  <a className="btn btn-secondary" href="/orenlegal">
                    Back to OrenLegal
                  </a>
                </div>
              </header>
            </div>
          </section>

          {/* BODY */}
          <section
            className="section alt section-brand-white"
            aria-label="Compliance operations capabilities"
          >
            <div className="container">
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Policy-to-workflow translation</h3>
                  <p>
                    Convert legal/compliance requirements into operational steps
                    with clear owner routing.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Escalation pathways</h3>
                  <p>
                    Structured risk routing and escalation events for
                    legal-sensitive operational actions.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Evidence-oriented process logs</h3>
                  <p>
                    Supportable activity histories for internal governance
                    reviews and audit preparation.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Cross-team implementation</h3>
                  <p>
                    Operational alignment between legal, compliance, operations,
                    and executive leadership.
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
