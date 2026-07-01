import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenGov Defense & DoD sub-vertical page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orengov-defense.html — only presentation/layout changed.
 * The source is a GoHighLevel body fragment with no <head> tags, so metadata
 * below is constructed from the hero headline and JSON-LD service description.
 */
export const metadata: Metadata = {
  title:
    "OrenGov Defense — Behind-Firewall AI Infrastructure for DoD Missions | OrenGen",
  description:
    "OrenGov's Defense practice architects air-gap-capable AI systems for DoD agencies, defense primes, and intelligence community subcontracting. NIST 800-53 aligned in posture. Subcontracting-ready under existing federal vehicles.",
  keywords:
    "orengov defense, dod ai infrastructure, air-gap ai, nist 800-53, defense subcontracting, orengen",
  alternates: { canonical: "/orengov/defense" },
  openGraph: {
    title:
      "OrenGov Defense — Behind-Firewall AI Infrastructure for DoD Missions | OrenGen",
    description:
      "Behind-firewall AI infrastructure for defense missions that refuse to expose operational intelligence.",
    url: "https://orengen.io/orengov/defense",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenGovDefensePage() {
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
            aria-label="OrenGov Defense & DoD"
          >
            <div className="container">
              <header className="section-head center reveal">
                <a className="card-link" href="/orengov">
                  OrenGov / Defense &amp; DoD
                </a>
                <div className="eyebrow">
                  Sub-Sector · Defense &amp; Department of Defense
                </div>
                <h1>
                  Behind-firewall AI infrastructure for defense missions that{" "}
                  <span className="gradient-word shimmer">
                    refuse to expose operational intelligence.
                  </span>
                </h1>
                <p className="lead">
                  OrenGov&apos;s Defense practice architects air-gap-capable AI
                  systems for DoD agencies, defense primes, and intelligence
                  community subcontracting. NIST 800-53 aligned in posture.
                  Subcontracting-ready under existing federal vehicles. Built by
                  Counterparts who understand that operational intelligence does
                  not leave the perimeter.
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
                    <strong>Air-Gap</strong> Capable
                  </span>
                  <span className="chip">
                    <strong>NIST 800-53</strong> Trained
                  </span>
                  <span className="chip">
                    <strong>SDB</strong> Eligible
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
            aria-label="The Defense Mandate"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Defense Mandate</div>
                <h2>
                  Four conditions defense missions require.{" "}
                  <span style={ACCENT}>All four addressed by default.</span>
                </h2>
                <p className="lead">
                  Defense buyers operate under classification, CUI handling,
                  NIST 800-171, and subcontracting requirements that don&apos;t
                  apply to other federal sub-sectors. OrenGov&apos;s Defense
                  practice was architected with these constraints in view from
                  the start.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Air-Gap Deployment</h3>
                  <p>
                    Default architectural pattern for environments where
                    third-party API connectivity is not permitted. Open-source
                    LLM deployment on agency-owned hardware available.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>NIST 800-53 Posture</h3>
                  <p>
                    Architecture decisions made with NIST 800-53 Moderate and
                    High baseline controls in view. Founder holds 800-53,
                    800-53A, and 800-53B completed training.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>CUI Handling Aware</h3>
                  <p>
                    Controlled Unclassified Information handling patterns
                    documented in architecture. NIST 800-171 alignment supports
                    DFARS-driven prime contractor obligations.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Prime-Ready Subcontracting</h3>
                  <p>
                    SDB and Minority-Owned Small Business eligibility supports
                    defense prime contractor FAR 19.704 small business
                    utilization scorecards.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* CAPABILITY STACK */}
          <section
            className="section section-brand-white"
            aria-label="The Defense Capability Stack"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Defense Capability Stack</div>
                <h2>
                  Six pillars.{" "}
                  <span style={ACCENT}>All deployable behind the firewall.</span>
                </h2>
                <p className="lead">
                  The OrenGov capability stack adapted for defense mission
                  environments. Every pillar runs on air-gap-capable
                  architecture and is built to support — not replicate — the
                  prime contractor&apos;s compliance posture.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Pillar 01</div>
                  <h3>Air-Gap AI Infrastructure</h3>
                  <p>
                    Self-hosted, behind-firewall AI deployment with open-source
                    LLM options for classified or restricted environments where
                    commercial API connectivity is prohibited.
                  </p>
                  <ul>
                    <li>Open-source model deployment</li>
                    <li>On-premise or government cloud</li>
                    <li>Agency-controlled inference layer</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 02</div>
                  <h3>Mission Workflow Orchestration</h3>
                  <p>
                    Automated workflow engines that route mission-critical
                    tasks, approval chains, and inter-command requests across
                    legacy defense systems without rip-and-replace.
                  </p>
                  <ul>
                    <li>Legacy system API integration</li>
                    <li>Multi-domain workflow routing</li>
                    <li>Mission-aware task automation</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 03</div>
                  <h3>Operational Intelligence</h3>
                  <p>
                    Operational reporting, mission readiness dashboards, and
                    predictive analytics surfaces designed for command
                    leadership and program managers.
                  </p>
                  <ul>
                    <li>Mission readiness dashboards</li>
                    <li>Audit-trail-ready architecture</li>
                    <li>Cross-system data unification</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 04</div>
                  <h3>Legacy System Modernization</h3>
                  <p>
                    Wrap existing defense logistics, personnel, and operational
                    systems with AI capability. Extend lifespan of legacy
                    investment without disrupting operational continuity.
                  </p>
                  <ul>
                    <li>Defense logistics modernization</li>
                    <li>Document processing automation</li>
                    <li>Personnel system augmentation</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 05</div>
                  <h3>Secure Communication</h3>
                  <p>
                    Mass coordination infrastructure for inter-agency
                    notifications, mission coordination messaging, and
                    operational status communication at scale.
                  </p>
                  <ul>
                    <li>High-volume coordination channels</li>
                    <li>Deliverability-monitored messaging</li>
                    <li>Compliance-logged communication records</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 06</div>
                  <h3>Defense Strategic Advisory</h3>
                  <p>
                    Fractional CTO and architectural consulting for defense
                    agencies and primes navigating AI adoption decisions, vendor
                    evaluation, and modernization roadmaps.
                  </p>
                  <ul>
                    <li>AI procurement strategy</li>
                    <li>Prime contractor advisory</li>
                    <li>Multi-year modernization roadmap</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* ENGAGEMENT SCENARIOS */}
          <section
            className="section alt section-brand-blue"
            aria-label="Engagement Scenarios"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Engagement Scenarios</div>
                <h2>
                  How defense Counterparts{" "}
                  <span style={ACCENT}>actually deploy OrenGov.</span>
                </h2>
                <p className="lead">
                  Four realistic engagement patterns. The firm&apos;s entry into
                  defense is through subcontracting, advisory, and
                  behind-firewall deployment rather than direct prime award.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Scenario 01</div>
                  <h3>Subcontract Under a Defense Prime</h3>
                  <p>
                    OrenGov subcontracts under existing defense primes on active
                    federal vehicles. SDB and Minority-Owned status supports the
                    prime&apos;s FAR 19.704 small business utilization scorecard
                    obligations.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Subcontracting</span>
                    <span className="chip">FAR 19.704</span>
                    <span className="chip">SDB</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 02</div>
                  <h3>Air-Gapped AI Workflow Automation</h3>
                  <p>
                    Deploy open-source LLM infrastructure on agency-owned
                    hardware to automate mission-side workflows in environments
                    where commercial API connectivity is prohibited by security
                    posture.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Air-Gap</span>
                    <span className="chip">Open-Source LLM</span>
                    <span className="chip">On-Premise</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 03</div>
                  <h3>Legacy Defense System Modernization</h3>
                  <p>
                    Wrap existing defense logistics, personnel, or operational
                    systems with AI capability. Extend the operational lifespan
                    of legacy investment while gaining a modern intelligence
                    surface.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Modernization</span>
                    <span className="chip">Logistics</span>
                    <span className="chip">Personnel</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 04</div>
                  <h3>Prime Contractor AI Advisory</h3>
                  <p>
                    Fractional CTO engagement for defense primes evaluating AI
                    vendors, navigating internal AI adoption, or building
                    multi-year modernization roadmaps for upcoming task order
                    responses.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Advisory</span>
                    <span className="chip">Fractional CTO</span>
                    <span className="chip">Prime Support</span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            className="section section-brand-white"
            id="faq"
            aria-label="Defense Procurement FAQ"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Defense Procurement FAQ</div>
                <h2>
                  The questions{" "}
                  <span style={ACCENT}>
                    defense contracting officers ask first.
                  </span>
                </h2>
                <p className="lead">
                  Direct answers to the air-gap, CMMC, CUI, and subcontracting
                  questions that come up in defense vendor evaluation.
                  Credentials in hand are cited as in hand. Roadmap items are
                  named as roadmap items.
                </p>
              </header>
              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>
                      Can OrenGov deploy AI infrastructure in air-gapped
                      environments?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. Air-gap capable deployment is one of OrenGov&apos;s
                    default architectural patterns. For environments where
                    commercial API connectivity (including Anthropic&apos;s
                    Claude API) is not permitted by the security posture, the
                    firm deploys open-source LLM options on agency-owned hardware
                    or in agency-controlled government cloud environments. The
                    inference layer remains under agency control. No third-party
                    connectivity is required for the architecture to operate.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What is OrenGen&apos;s CMMC, FedRAMP, and DoD Impact Level
                      status?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGen does not currently hold direct CMMC, FedRAMP, or DoD
                    Impact Level authorizations. The firm operates as a
                    subcontractor under defense primes who carry those
                    authorizations, with architecture designed to support the
                    prime&apos;s compliance posture rather than replicate it.
                    Direct CMMC Level 2 evaluation is on the 2026-2027 roadmap.
                    The firm explicitly does not overclaim — credentials in hand
                    are cited as in hand; everything else is named as a roadmap
                    item at the briefing stage so timing expectations are set
                    honestly.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How does OrenGov handle Controlled Unclassified Information
                      (CUI)?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    CUI handling patterns are documented in the architecture and
                    supported by NIST 800-171 control alignment in posture. When
                    OrenGov subcontracts under a defense prime, CUI handling
                    responsibilities flow through the prime&apos;s authorized
                    environment. Direct CUI handling outside a prime relationship
                    is scoped on a case-by-case basis with the contracting
                    officer at the briefing stage.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Can OrenGov subcontract under existing defense prime
                      contracts?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenGen Worldwide LLC is positioned to subcontract under
                    defense primes on existing federal vehicles. SAM.gov
                    registration (UEI RX16QFYT6YM5, CAGE 12XC1) is active. Small
                    Disadvantaged Business and Minority-Owned Small Business
                    eligibility supports prime contractor scorecard obligations
                    under FAR 19.704 small business utilization requirements.
                    Subcontracting is currently the firm&apos;s primary defense
                    engagement pathway.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Does OrenGov support NIST 800-171 alignment for DFARS
                      compliance?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Architecture decisions are made with NIST 800-171 in view.
                    When OrenGov subcontracts under a defense prime, the
                    firm&apos;s architecture is designed to fit inside the
                    prime&apos;s DFARS-compliant environment rather than
                    independently host CUI outside it. Direct 800-171
                    self-attestation is achievable on the roadmap as part of the
                    broader compliance build-out. Contracting officers requiring
                    direct independent compliance are informed of current posture
                    at the briefing.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What security clearances does the OrenGov team hold?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGov does not currently maintain personnel clearances at
                    the corporate level. Engagements requiring cleared personnel
                    are scoped through prime contractor relationships where the
                    prime sponsors clearance for assigned individuals as needed
                    for the contract environment. Where the engagement does not
                    require clearance, OrenGov&apos;s commercial team operates
                    directly. The firm does not represent clearance as a current
                    credential.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How does OrenGov pricing work for defense engagements?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Defense engagements price through one of two structures:
                    subcontract terms negotiated with the defense prime under
                    that prime&apos;s contract vehicle, or direct fixed-scope
                    advisory engagements priced at briefing. The firm does not
                    publish public defense pricing because scope, classification
                    environment, integration complexity, and contract vehicle all
                    shift the structure substantially. Pricing transparency is
                    provided in writing at the proposal stage.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section alt section-brand-blue"
            aria-label="Open the Capability Briefing"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Open the Capability Briefing</div>
                <h2>
                  Architected for defense missions. <br />
                  <span style={ACCENT}>Briefing is the door.</span>
                </h2>
                <p className="lead">
                  Forty-five minutes, founder-direct, no sales layer. We map
                  mission requirements against the OrenGov Defense capability
                  stack and confirm whether subcontracting, advisory, or direct
                  engagement fits the procurement pathway.
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
