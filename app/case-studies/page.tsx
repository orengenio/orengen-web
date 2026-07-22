import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import CaseStudyGrid from "@/components/site/CaseStudyGrid";
import JsonLd from "@/components/seo/JsonLd";
import { CASE_STUDIES, CASE_STUDY_SUMMARY_METRICS } from "@/lib/caseStudies";
import { SITE_URL } from "@/lib/seo/constants";
import {
  buildBreadcrumbList,
  buildCaseStudyItemList,
  buildPageGraph,
  buildWebPage,
} from "@/lib/seo/jsonLd";

export const metadata: Metadata = {
  title: "Case Studies | OrenGen Worldwide — AI-Driven Innovations",
  description:
    "Documented outcomes from OrenGen engagements: 500% YoY growth, $13M+ savings, 30+ workforce buildouts, and regulated-sector pilots — quantified results with counterpart confidentiality.",
  keywords:
    "case-studies, OrenGen, OrenGen Worldwide, AI infrastructure, case studies, past performance",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "Documented outcomes from OrenGen engagements: 500% YoY growth, $13M+ savings, 30+ workforce buildouts, and regulated-sector pilots.",
    url: "https://orengen.io/case-studies",
  },
};

const CASE_STUDIES_JSON_LD = buildPageGraph(
  buildWebPage({
    name: "OrenGen Case Studies — Documented Outcomes",
    description:
      "Quantified outcomes from OrenGen engagements: 500% YoY growth, $13M+ savings, 30+ workforce buildouts, and regulated-sector pilots.",
    path: "/case-studies",
  }),
  buildBreadcrumbList([
    { name: "Home", path: "" },
    { name: "Case Studies", path: "/case-studies" },
  ]),
  buildCaseStudyItemList(),
);

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={CASE_STUDIES_JSON_LD} />
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          <section
            className="section section-brand-blue"
            aria-label="Documented Outcomes"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Documented Outcomes</div>
                <h1>
                  Engineering-Grade Results, Not{" "}
                  <span className="gradient-word shimmer">
                    Consulting Deliverables.
                  </span>
                </h1>
                <p className="lead">
                  Quantified outcomes from commercial, healthcare, legal, and
                  public-sector engagements. Every card includes a primary metric,
                  timeframe, and stack — full detail under NDA.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  {CASE_STUDY_SUMMARY_METRICS.map((m) => (
                    <span className="chip" key={m.label}>
                      {m.value} {m.label}
                    </span>
                  ))}
                </div>
              </header>
            </div>
          </section>

          <section
            className="section alt section-brand-white"
            aria-label="Summary metrics"
          >
            <div className="container">
              <div className="case-study-summary reveal">
                {CASE_STUDY_SUMMARY_METRICS.map((m) => (
                  <div className="case-study-summary__item" key={m.label}>
                    <div className="case-study-summary__value">{m.value}</div>
                    <div className="case-study-summary__label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            className="section section-brand-white"
            id="studies"
            aria-label="Case studies"
          >
            <div className="container">
              <header className="section-head reveal">
                <h2>Documented Past Performance</h2>
                <p>
                  Every OrenGen engagement closes with a quantified outcome the
                  counterpart owns. Below are {CASE_STUDIES.length} representative
                  results from active and completed engagements (identities redacted
                  for confidentiality).
                </p>
              </header>

              <CaseStudyGrid studies={CASE_STUDIES} />

              <p className="case-study-disclaimer reveal">
                <strong>Counterpart confidentiality:</strong> OrenGen does not
                publish named case studies without explicit written authorization.
                Engagement details, financial outcomes, and architectural specifics
                are shared under NDA during the discovery phase.
              </p>
            </div>
          </section>

          <section
            className="section section-brand-blue"
            aria-label="Contact OrenGen"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Architect a documented result.</h2>
                <p>
                  Open the briefing. Founder-direct response within four hours.
                  No discovery calls with intake associates.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="mailto:briefing@orengen.io">
                    Architect the Briefing
                  </a>
                  <a className="btn btn-secondary" href="/capability-statement">
                    View capability statement
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
