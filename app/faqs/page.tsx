import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * FAQs page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from Footer-pages/faqs/page.html —
 * only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "FAQs | OrenGen Worldwide — AI-Driven Innovations",
  description:
    "Frequently asked questions about OrenGen AI solutions, pricing, deployment, and capabilities. Get answers about AI automation for your business.",
  keywords: "faqs, OrenGen, OrenGen Worldwide, AI infrastructure, faqs",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "Frequently asked questions about OrenGen AI solutions, pricing, deployment, and capabilities. Get answers about AI automation for your business.",
    url: "https://orengen.io/faqs",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function FaqsPage() {
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
            aria-label="Counterpart Briefing"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Counterpart Briefing</div>
                <h1>
                  Answers Procurement, Security, and Operations Teams{" "}
                  <span className="gradient-word shimmer">Actually Ask.</span>
                </h1>
                <p className="lead">
                  Frequently asked questions about OrenGen AI solutions,
                  pricing, deployment, and capabilities. Get answers about AI
                  automation for your business.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">Updated May 2026</span>
                  <span className="chip">Founder-vetted</span>
                  <span className="chip">Procurement-ready</span>
                </div>
              </header>
            </div>
          </section>

          {/* FAQ */}
          <section
            className="section alt section-brand-white"
            id="faq"
            aria-label="Frequently asked questions"
          >
            <div className="container">
              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>What does OrenGen Worldwide do?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGen Worldwide is a Claude-first enterprise AI
                    infrastructure firm. We architect sovereign, self-hosted,
                    NIST-aligned AI ecosystems for high-stakes industries
                    including public sector, healthcare, and mid-market
                    enterprise — eliminating per-seat SaaS dependency and giving
                    the enterprise total ownership of its intelligence.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is OrenGen Worldwide minority-owned?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenGen Worldwide LLC is a minority-owned, small
                    disadvantaged business (SDB) certified, SAM.gov-registered
                    firm. Federal identifiers include UEI RX16QFYT6YM5, CAGE
                    12XC1, and EIN 33-3245798.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What credentials does OrenGen hold for federal
                      procurement?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGen holds active SAM.gov registration, MBE
                    certification, CAGE code 12XC1, UEI RX16QFYT6YM5, and
                    registrations with Grants.gov, TAMUS, Texas CMBL (Vendor
                    550248), and Texas DIR Tech 4 TX. The founder holds NIST
                    800-53, 53A, 53B, and NIST CSRC Risk Management Framework
                    training credentials plus seven Anthropic Claude
                    certifications.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>What industries does OrenGen serve?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Three target domains: Public Sector &amp; Federal (defense,
                    state and local government, public utilities), Healthcare
                    &amp; Life Sciences (mid-market hospitals, specialty clinics,
                    research firms), and Mid-Market Enterprise ($50M to $500M B2B
                    services, manufacturing, logistics). The firm also operates
                    OrenNexus and the rest of the OrenGen SaaS suite for
                    growth-stage operators.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Where is OrenGen Worldwide based?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGen Worldwide LLC is headquartered in Mansfield, Texas.
                    The firm operates nationally and serves federal, state,
                    local, tribal, and commercial Counterparts across the United
                    States. Reach the firm directly at 833-ORENGEN or via
                    orengen.io.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How does OrenGen deliver enterprise AI infrastructure?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Self-hosted Claude environments, enterprise n8n workflow
                    orchestration, and Sovereign Brain RAG systems on
                    Counterpart-owned infrastructure. Every deployment is
                    NIST-aligned, vetted under our Sovereign AI Security
                    Framework, and engineered for total data sovereignty without
                    third-party model training exposure.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is OrenGen HIPAA-ready for healthcare engagements?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenGen operates a HIPAA-enabled deployment architecture
                    with an executed Business Associate Agreement chain. The
                    founder holds HIPAA Compliance Training certification, and the
                    organization maintains a HIPAA Workforce Training Attestation
                    covering 30 workforce members for calendar year 2026.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>What is the OrenGen no-rent methodology?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Our no-rent methodology eliminates per-seat SaaS dependency
                    by architecting owned AI infrastructure. Counterparts receive
                    self-hosted Claude instances, enterprise n8n orchestration,
                    and Sovereign Brain RAG systems they fully control —
                    converting recurring SaaS spend into an owned operational
                    asset.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>How does pricing work across the OrenGen suite?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Per-product or per-suite. Bundle discounts apply when
                    multiple products are deployed together. OrenAgents starts at
                    $97/mo, OrenNexus at $97/mo, OrenWeb at $247/mo, OrenSocial at
                    $47/mo. See the pricing page or open OrenKanBuilder™ for live
                    configuration with bundle pricing.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>What is Buy-Lingual™?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Buy-Lingual™ is OrenAgents&apos; proprietary multi-language AI
                    technology. Every OrenAgents deployment includes capability
                    across 100+ world languages at no extra cost — from English
                    and Spanish to Mandarin, Arabic, French, Portuguese, German,
                    and every other major business tongue.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>How quickly can engagements deploy?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenAgents and OrenNexus typically go live within days.
                    Custom enterprise engagements (OrenConsulting, OrenAutomations
                    white-glove) deploy in 2–4 weeks for initial scope. Federal
                    and healthcare engagements include longer governance phases
                    per compliance requirements.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is there a long-term contract?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Monthly plans on SaaS products have no long-term commitment —
                    cancel anytime. Annual plans are monthly × 10 (Save 17%).
                    OrenConsulting fractional engagements can be cancelled at any
                    time. Enterprise custom engagements are scoped per statement
                    of work.
                  </div>
                </div>
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
                <h2>Have a question that&apos;s not here?</h2>
                <p>
                  Reach the OrenGen team directly. Founder-direct response within
                  four hours.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="mailto:briefing@orengen.io">
                    Contact OrenGen
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
