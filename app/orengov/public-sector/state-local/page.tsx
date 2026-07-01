import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenGov State & Local sub-vertical page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orengov-state-local.html — only presentation/layout changed.
 *
 * The source is a GoHighLevel body fragment with no <title>/<meta>/<link
 * rel="canonical"> head tags. Metadata below is constructed from the hero
 * headline and JSON-LD Service block (metadata is <head> data, not visible
 * body wording).
 */
export const metadata: Metadata = {
  title:
    "OrenGov State & Local — Civic AI Infrastructure | OrenGen",
  description:
    "OrenGov's State & Local practice architects governed AI systems for state agencies, county governments, municipal IT, and quasi-public entities. Texas-native operations. Cooperative-purchasing-ready.",
  keywords:
    "orengov, state and local, civic ai, cooperative purchasing, texas dir, cmbl, sled, orengen",
  alternates: { canonical: "/orengov/public-sector/state-local" },
  openGraph: {
    title:
      "OrenGov State & Local — Civic AI Infrastructure | OrenGen",
    description:
      "Civic AI infrastructure for state and local governments that refuse to rent their constituent intelligence.",
    url: "https://orengen.io/orengov/public-sector/state-local",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenGovStateLocalPage() {
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
            aria-label="OrenGov State & Local"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">
                  <a href="/orengov" style={{ color: "inherit" }}>
                    OrenGov <span>/</span>{" "}
                    <span style={ACCENT}>State &amp; Local</span>
                  </a>
                </div>
                <div className="eyebrow">
                  Sub-Sector · State, Local &amp; Cooperative Government
                </div>
                <h1>
                  Civic AI infrastructure for state and local governments that{" "}
                  <span className="gradient-word shimmer">
                    refuse to rent their constituent intelligence.
                  </span>
                </h1>
                <p className="lead">
                  OrenGov&apos;s State &amp; Local practice architects governed
                  AI systems for state agencies, county governments, municipal
                  IT, and quasi-public entities. Texas-native operations.
                  Cooperative-purchasing-ready. Sovereign by design for civic
                  deployments where constituent data does not leave the
                  perimeter.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="https://api.orengen.io/widget/booking/EvvNIyeXdLksQikeO6en" target="_blank" rel="noopener noreferrer">
                    Open a Capability Briefing
                  </a>
                  <a className="btn btn-secondary" href="/capability-statement">
                    Download Capability Statement
                  </a>
                </div>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">
                    <strong>Texas DIR</strong> Tech 4 TX
                  </span>
                  <span className="chip">
                    <strong>CMBL Vendor</strong> 550248
                  </span>
                  <span className="chip">
                    <strong>MBE</strong> Certified
                  </span>
                  <span className="chip">
                    <strong>SAM.gov</strong> Active
                  </span>
                </div>
              </header>
            </div>
          </section>

          {/* MANDATE */}
          <section
            className="section alt section-brand-white"
            aria-label="The State & Local Mandate"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The State &amp; Local Mandate</div>
                <h2>
                  Four conditions civic Counterparts require.{" "}
                  <span style={ACCENT}>All four addressed by default.</span>
                </h2>
                <p>
                  State, county, and municipal buyers operate under different
                  pacing, certification, and procurement vehicle requirements
                  than federal. OrenGov&apos;s State &amp; Local practice was
                  built with those distinctions in view.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Texas-Native Operations</h3>
                  <p>
                    Headquartered in Mansfield. Texas DIR Tech 4 TX positioning.
                    CMBL Vendor 550248. Fast entry for Texas state agencies,
                    counties, and municipalities without onboarding delay.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Cooperative Purchasing Aware</h3>
                  <p>
                    Engagement-ready through TIPS, Sourcewell, OMNIA Partners,
                    and NASPO ValuePoint cooperative vehicles for out-of-state
                    agencies that hold cooperative membership.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>SLED Compliance Posture</h3>
                  <p>
                    NIST 800-53 trained, Securiti AI Governance certified, EU-US
                    and Swiss-US DPF aligned. State cybersecurity requirements
                    addressed at the architecture stage, not retrofitted.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Quick-Procure Capability</h3>
                  <p>
                    Founder-direct engagement with no sales layer. State and
                    local procurement cycles compressed where the cooperative
                    vehicle exists. Deployment in days, not multi-quarter
                    waterfalls.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* PROCUREMENT VEHICLES STRIP */}
          <section
            className="section section-brand-blue"
            aria-label="Procurement Vehicles"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Procurement Vehicles</div>
                <h2>
                  Six paths to <span style={ACCENT}>civic engagement.</span>
                </h2>
                <p>
                  OrenGov is positioned to engage through the procurement
                  vehicle the agency already holds. Cooperative membership
                  compresses procurement timelines from months to weeks.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Texas DIR</h3>
                  <div className="sector-trust">Tech 4 TX</div>
                </article>
                <article className="sector-card">
                  <h3>Texas CMBL</h3>
                  <div className="sector-trust">Vendor 550248</div>
                </article>
                <article className="sector-card">
                  <h3>TIPS</h3>
                  <div className="sector-trust">Cooperative</div>
                </article>
                <article className="sector-card">
                  <h3>Sourcewell</h3>
                  <div className="sector-trust">Cooperative</div>
                </article>
                <article className="sector-card">
                  <h3>OMNIA Partners</h3>
                  <div className="sector-trust">Cooperative</div>
                </article>
                <article className="sector-card">
                  <h3>NASPO ValuePoint</h3>
                  <div className="sector-trust">Multi-State</div>
                </article>
              </div>
            </div>
          </section>

          {/* CAPABILITY STACK */}
          <section
            className="section alt section-brand-white"
            aria-label="The State & Local Capability Stack"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">
                  The State &amp; Local Capability Stack
                </div>
                <h2>
                  Six pillars. <span style={ACCENT}>All sovereign by default.</span>
                </h2>
                <p>
                  The OrenGov capability stack adapted for state agencies,
                  county governments, and municipal IT environments. Every
                  pillar respects civic data boundaries and supports cooperative
                  purchasing engagement.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Pillar 01</div>
                  <h3>Constituent Service Automation</h3>
                  <p>
                    AI-driven constituent intake, request routing, and status
                    communication for state agencies and municipal services.
                    Reduce wait times without exposing constituent records to
                    commercial AI products.
                  </p>
                  <ul>
                    <li>Intake form automation</li>
                    <li>Multilingual constituent support</li>
                    <li>Request routing &amp; SLA tracking</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 02</div>
                  <h3>Inter-Agency Workflow Orchestration</h3>
                  <p>
                    Automated workflow engines that route approval chains,
                    inter-departmental requests, and cross-agency coordination
                    tasks across legacy state and county systems without
                    rip-and-replace.
                  </p>
                  <ul>
                    <li>Cross-agency task routing</li>
                    <li>Legacy system API integration</li>
                    <li>Audit-trail-ready architecture</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 03</div>
                  <h3>Civic Intelligence Dashboards</h3>
                  <p>
                    Operational dashboards, service-level reporting, and
                    predictive analytics surfaces designed for state CIOs, county
                    IT directors, and municipal leadership accountability.
                  </p>
                  <ul>
                    <li>Service-level reporting</li>
                    <li>Cross-system data unification</li>
                    <li>Leadership accountability surfaces</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 04</div>
                  <h3>Legacy Government Modernization</h3>
                  <p>
                    Wrap existing state agency, county, or municipal systems with
                    AI capability. Extend lifespan of decade-old civic technology
                    investments without disrupting service continuity.
                  </p>
                  <ul>
                    <li>Document processing automation</li>
                    <li>Records system augmentation</li>
                    <li>Forms-to-workflow conversion</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 05</div>
                  <h3>Public Communication Infrastructure</h3>
                  <p>
                    Mass communication infrastructure for emergency
                    notifications, public service announcements, and constituent
                    outreach at scale with deliverability monitoring and
                    compliance logging.
                  </p>
                  <ul>
                    <li>High-volume civic messaging</li>
                    <li>Multi-channel public outreach</li>
                    <li>Compliance-logged records</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 06</div>
                  <h3>State &amp; Local Strategic Advisory</h3>
                  <p>
                    Fractional CTO and architectural consulting for state CIO
                    offices, county IT leadership, and municipal technology
                    committees navigating AI adoption, vendor evaluation, and
                    modernization planning.
                  </p>
                  <ul>
                    <li>AI procurement strategy</li>
                    <li>Vendor evaluation support</li>
                    <li>Multi-year modernization roadmap</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* ENGAGEMENT SCENARIOS */}
          <section
            className="section section-brand-blue"
            aria-label="Engagement Scenarios"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Engagement Scenarios</div>
                <h2>
                  How civic Counterparts{" "}
                  <span style={ACCENT}>actually deploy OrenGov.</span>
                </h2>
                <p>
                  Four realistic engagement patterns. State and local entry
                  typically flows through cooperative purchasing, Texas DIR
                  positioning, or direct municipal pilot rather than multi-year
                  RFP cycles.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Scenario 01</div>
                  <h3>Texas DIR Tech 4 TX Engagement</h3>
                  <p>
                    Texas state agencies, counties, and municipalities engage
                    OrenGov directly through DIR Tech 4 TX positioning and CMBL
                    Vendor 550248. Texas-native operations compress onboarding
                    from months to weeks.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Texas DIR</span>
                    <span className="chip">CMBL</span>
                    <span className="chip">Same-State</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 02</div>
                  <h3>Cooperative Purchasing Engagement</h3>
                  <p>
                    Out-of-state agencies engage OrenGov through existing
                    cooperative memberships: TIPS, Sourcewell, OMNIA Partners, or
                    NASPO ValuePoint. Cooperative vehicles compress procurement
                    substantially.
                  </p>
                  <div className="trust-row">
                    <span className="chip">TIPS</span>
                    <span className="chip">Sourcewell</span>
                    <span className="chip">OMNIA</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 03</div>
                  <h3>Direct Municipal Pilot</h3>
                  <p>
                    City or county IT leadership engages OrenGov directly for
                    scoped pilot — typically a single workflow automation,
                    constituent service surface, or legacy modernization wrapper
                    — to demonstrate capability before broader rollout.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Municipal</span>
                    <span className="chip">Pilot Scope</span>
                    <span className="chip">County</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 04</div>
                  <h3>State CIO Office Advisory</h3>
                  <p>
                    Fractional CTO engagement for state CIO offices and county IT
                    leadership evaluating AI strategy, vendor consolidation, or
                    multi-year modernization roadmaps. Founder-direct, no sales
                    layer.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Advisory</span>
                    <span className="chip">Fractional CTO</span>
                    <span className="chip">CIO Office</span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            className="section alt section-brand-white"
            aria-label="State & Local Procurement FAQ"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">State &amp; Local Procurement FAQ</div>
                <h2>
                  The questions{" "}
                  <span style={ACCENT}>civic procurement officers ask first.</span>
                </h2>
                <p>
                  Direct answers to the procurement vehicle, CJIS, out-of-state,
                  and cooperative purchasing questions that come up in SLED
                  vendor evaluation. Credentials in hand are cited as in hand.
                  Roadmap items are named as roadmap items.
                </p>
              </header>
              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>
                      What state and local procurement vehicles can OrenGov work
                      through?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGov is registered on Texas CMBL (Vendor 550248) and holds
                    Texas DIR Tech 4 TX positioning. The firm supports
                    cooperative purchasing engagements through TIPS, Sourcewell,
                    OMNIA Partners, and NASPO ValuePoint where the agency holds
                    existing cooperative membership. Direct municipal pilots and
                    state agency RFP responses are also supported. Engagement
                    structure is matched to the procurement vehicle the agency
                    already holds rather than requiring the agency to navigate a
                    new vendor onboarding.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is OrenGov registered on Texas CMBL and DIR?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenGen Worldwide LLC is registered on the Texas
                    Comptroller Centralized Master Bidders List as Vendor 550248
                    and holds Texas DIR Tech 4 TX positioning. The firm is
                    Mansfield-headquartered, which supports fast Texas state,
                    county, and municipal engagement without out-of-state vendor
                    onboarding delay.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Does OrenGov support cooperative purchasing engagements?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. Cooperative purchasing is the firm&apos;s recommended
                    out-of-state engagement path. OrenGov is positioned to engage
                    through TIPS, Sourcewell, OMNIA Partners, and NASPO
                    ValuePoint where the agency holds existing cooperative
                    membership. Cooperative vehicles substantially compress
                    procurement timelines compared to direct state-by-state RFP
                    cycles. Confirmation of cooperative pathway happens at the
                    briefing stage.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Does OrenGov hold CJIS certification for law enforcement
                      engagements?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGen does not currently hold direct CJIS certification.
                    Law enforcement engagements involving CJIS data flow through
                    CJIS-certified primes or partner agencies whose environments
                    are authorized for that data class. Direct CJIS posture work
                    is achievable on roadmap and is named as such at the briefing
                    stage. The firm does not overclaim certifications.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Can OrenGov serve state agencies outside Texas?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. Out-of-state engagements typically flow through
                    cooperative purchasing vehicles (NASPO ValuePoint,
                    Sourcewell, OMNIA, TIPS) where the agency holds membership.
                    Direct state-by-state vendor registration is added based on
                    engagement pipeline rather than speculatively. SAM.gov
                    registration supports any federal pass-through dollars at the
                    state level. The briefing confirms which pathway fits the
                    agency&apos;s procurement posture.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What state-level certifications does OrenGov hold for MWBE
                      / HUB / DBE programs?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGen holds Minority Business Enterprise (MBE)
                    certification. The firm is also registered as Small
                    Disadvantaged Business (SDB) eligible at the federal level,
                    which carries cross-acceptance into many state programs.
                    State-specific certifications (such as Texas HUB) are added
                    based on engagement pipeline. The firm does not list state
                    certifications it has not earned. Specific state program
                    eligibility is confirmed in writing at the briefing stage.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What&apos;s the typical engagement timeline for state and
                      local deployments?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Engagement timeline depends on the procurement vehicle. Texas
                    DIR and CMBL engagements compress to weeks. Cooperative
                    purchasing engagements (TIPS, Sourcewell, OMNIA, NASPO)
                    typically run 2-6 weeks from briefing to contract. Direct
                    state agency RFP responses follow the agency&apos;s published
                    timeline. Founder-direct engagement and a single-page
                    proposal architecture remove the sales-layer drag that often
                    extends civic procurement.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Open the Capability Briefing"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Open the Capability Briefing</div>
                <h2>
                  Architected for civic deployment. <br />
                  <span style={ACCENT}>Briefing is the door.</span>
                </h2>
                <p>
                  Forty-five minutes, founder-direct, no sales layer. We map
                  agency requirements against the OrenGov State &amp; Local
                  capability stack and confirm whether Texas DIR, cooperative
                  purchasing, or direct municipal pilot fits the procurement
                  pathway.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="https://api.orengen.io/widget/booking/EvvNIyeXdLksQikeO6en" target="_blank" rel="noopener noreferrer">
                    Open a Capability Briefing
                  </a>
                  <a className="btn btn-secondary" href="/capability-statement">
                    Download Capability Statement
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
