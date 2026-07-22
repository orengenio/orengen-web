import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import HeroMedia from "@/components/site/HeroMedia";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenLegal domain page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from main-core-pages/orenlegal.html —
 * only presentation/layout changed. The source is a GoHighLevel body fragment
 * with no <head> tags, so metadata below is constructed from the hero headline /
 * visible copy (metadata is <head> data, not visible body wording).
 */
export const metadata: Metadata = {
  title: "OrenLegal — AI-Enabled Legal Operations, Done With Governance | OrenGen",
  description:
    "OrenLegal supports legal teams with structured intake, workflow orchestration, document routing, compliance-ready process logic, and accountable implementation architecture.",
  keywords:
    "orenlegal, legal operations, legal intake, compliance ops, law firms, orengen",
  alternates: { canonical: "/orenlegal" },
  openGraph: {
    title:
      "OrenLegal — AI-Enabled Legal Operations, Done With Governance | OrenGen",
    description:
      "AI-enabled legal operations, done with governance. Structured intake, workflow orchestration, document routing, and compliance-ready process logic.",
    url: "https://orengen.io/orenlegal",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenLegalPage() {
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
            className="section section-brand-blue has-media"
            aria-label="OrenLegal / Legal"
          >
            <HeroMedia src="/images/orenlegal-hero.webp" />
            <div className="container">
              <header className="section-head reveal">
                <div className="eyebrow">OrenLegal / Legal</div>
                <h1>
                  <span className="gradient-word shimmer">
                    AI-enabled legal operations,
                  </span>
                  <br />
                  done with governance.
                </h1>
                <p className="lead">
                  OrenLegal supports legal teams with structured intake, workflow
                  orchestration, document routing, compliance-ready process
                  logic, and accountable implementation architecture.
                </p>
              </header>
              <div className="cost-grid reveal">
                <article className="sector-card">
                  <div className="step">Path 01</div>
                  <h3>Law Firms</h3>
                  <p>
                    Client intake routing, case-adjacent automation, and legal
                    operations structure designed for firm velocity and control.
                  </p>
                  <a className="card-link" href="/orenlegal/law-firms">
                    View Law Firm Path →
                  </a>
                </article>
                <article className="sector-card">
                  <div className="step">Path 02</div>
                  <h3>Compliance Ops</h3>
                  <p>
                    Policy-to-workflow translation for legal, compliance, and
                    contract-heavy organizations that need audit-ready execution.
                  </p>
                  <a className="card-link" href="/orenlegal/compliance-ops">
                    View Compliance Path →
                  </a>
                </article>
                <article className="sector-card">
                  <div className="step">Path 03</div>
                  <h3>Enterprise Legal Support</h3>
                  <p>
                    Cross-functional legal intake, document automation support,
                    and operational governance across enterprise teams.
                  </p>
                  <a className="card-link" href="#engage">
                    Engage OrenLegal →
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            className="section alt section-brand-white"
            id="engage"
            aria-label="Engage OrenLegal"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="cta-row">
                  <a className="btn btn-primary" href="/contact-us">
                    Book OrenLegal Briefing
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
