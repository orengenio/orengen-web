import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Case Studies page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * Footer-pages/case-studies/page.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "Case Studies | OrenGen Worldwide — AI-Driven Innovations",
  description:
    "Real results from real businesses. See how OrenGen AI automation drives ROI, cuts costs, and transforms operations across industries.",
  keywords:
    "case-studies, OrenGen, OrenGen Worldwide, AI infrastructure, case studies",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "Real results from real businesses. See how OrenGen AI automation drives ROI, cuts costs, and transforms operations across industries.",
    url: "https://orengen.io/case-studies",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function CaseStudiesPage() {
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
                  Real results from real businesses. See how OrenGen AI
                  automation drives ROI, cuts costs, and transforms operations
                  across industries.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">500% YoY growth</span>
                  <span className="chip">$13M+ savings captured</span>
                  <span className="chip">30+ virtual workforce buildouts</span>
                  <span className="chip">7 Anthropic certs</span>
                </div>
              </header>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section
            className="section alt section-brand-white"
            aria-label="Case studies"
          >
            <div className="container">
              <header className="section-head reveal">
                <h2>Documented Past Performance</h2>
                <p>
                  Every OrenGen engagement closes with a quantified outcome the
                  Counterpart owns. Below are representative results from active
                  engagements (Counterpart identities redacted for
                  confidentiality).
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Mid-Market · B2B Services</div>
                  <h3>500% YoY revenue growth</h3>
                  <p>
                    Self-hosted Claude environment plus n8n orchestration
                    replaced four SaaS subscriptions and lifted sales-cycle
                    velocity by 3.4x across multi-state operations.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Mid-Market · Operations</div>
                  <h3>$13M+ operational savings captured</h3>
                  <p>
                    Workflow consolidation, SaaS sprawl elimination, and
                    AI-augmented operations across multi-state enterprise —
                    documented over 18 months of measured cost reduction.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Healthcare · Specialty Clinic</div>
                  <h3>HIPAA-enabled clinical workflow offload</h3>
                  <p>
                    BAA-ready architecture deployed on Counterpart
                    infrastructure. Administrative burden reduced for clinical
                    staff; zero PHI exposure to third-party AI vendors.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Public Sector · State Agency</div>
                  <h3>NIST-aligned AI pilot, on-time delivery</h3>
                  <p>
                    Self-hosted Claude pilot deployed against state-agency
                    procurement specs with documented controls. Foundation for a
                    multi-year set-aside engagement.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Mid-Market · Logistics</div>
                  <h3>30+ virtual workforce buildouts</h3>
                  <p>
                    AI-augmented operations teams architected, deployed, and
                    operationalized end-to-end across logistics, dispatch, and
                    support functions.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Federal Subcontracting</div>
                  <h3>SDB set-aside positioning under FAR 19.704</h3>
                  <p>
                    Active subcontracting posture under existing federal
                    vehicles. SDB / Minority-Owned Small Business eligibility
                    supports prime contractor scorecard obligations.
                  </p>
                </article>
              </div>

              <p>
                <strong>Counterpart confidentiality:</strong> OrenGen does not
                publish named case studies without explicit written
                authorization. Engagement details, financial outcomes, and
                architectural specifics are shared under NDA during the
                discovery phase.
              </p>
            </div>
          </section>

          {/* FINAL CTA */}
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
