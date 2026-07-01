import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenGov — Public Sector & Federal vertical page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from main-core-pages/orengov.html —
 * only presentation/layout changed.
 */
export const metadata: Metadata = {
  title:
    "OrenGov — Federal-Grade AI Infrastructure for Public Sector | OrenGen",
  description:
    "OrenGov architects sovereign AI systems for federal, state, local, and education buyers. Behind-firewall deployment, NIST-aligned governance, procurement-vehicle ready, minority-owned, SAM.gov registered.",
  keywords:
    "orengov, public sector ai, federal ai infrastructure, sovereign ai, nist 800-53, sam.gov, sdb, mbe, orengen",
  alternates: { canonical: "/orengov" },
  openGraph: {
    title:
      "OrenGov — Federal-Grade AI Infrastructure for Public Sector | OrenGen",
    description:
      "Federal-grade AI infrastructure for agencies that refuse to rent their intelligence. Sovereign, NIST-aligned, procurement-vehicle ready.",
    url: "https://orengen.io/orengov",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenGovPage() {
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          {/* ========== 1. HERO ========== */}
          <section
            className="section section-brand-blue"
            id="overview"
            aria-label="OrenGov — Public Sector & Federal Division"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">
                  OrenGov · Public Sector &amp; Federal Division
                </div>
                <h1>
                  Federal-grade AI infrastructure for agencies that{" "}
                  <span className="gradient-word shimmer">
                    refuse to rent their intelligence.
                  </span>
                </h1>
                <p className="lead">
                  OrenGov architects sovereign AI systems for federal, state,
                  local, and education buyers. Behind-firewall deployment.
                  NIST-aligned governance. Procurement-vehicle ready.
                  Minority-owned. SAM.gov registered. Built by Counterparts,
                  for Counterparts.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="https://api.orengen.io/booking/og-j39qvisxpas/sc/discovery-meet" target="_blank" rel="noopener noreferrer">
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
                    <strong>SAM.gov</strong> Active
                  </span>
                  <span className="chip">
                    <strong>NIST 800-53</strong> Trained
                  </span>
                  <span className="chip">
                    <strong>MBE</strong> Certified
                  </span>
                  <span className="chip">
                    <strong>DIR Tech 4 TX</strong> Approved
                  </span>
                </div>
              </header>

              {/* HERO CREDENTIAL PANEL */}
              <div className="section-head center reveal">
                <h2>Federal Identifiers in Hand</h2>
                <p>Verified · 2026</p>
              </div>
              <div className="kpi-grid reveal">
                <div className="kpi">
                  <div className="label">UEI</div>
                  <div className="num">RX16QFYT6YM5</div>
                </div>
                <div className="kpi">
                  <div className="label">CAGE</div>
                  <div className="num">12XC1</div>
                </div>
                <div className="kpi">
                  <div className="label">EIN</div>
                  <div className="num">33-3245798</div>
                </div>
                <div className="kpi">
                  <div className="label">DUNS</div>
                  <div className="num">119469040</div>
                </div>
                <div className="kpi">
                  <div className="label">Texas CMBL</div>
                  <div className="num">550248</div>
                </div>
                <div className="kpi">
                  <div className="label">Set-Aside</div>
                  <div className="num">SDB · MBE</div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== 2. FEDERAL MANDATE ========== */}
          <section
            className="section alt section-brand-white"
            aria-label="The OrenGov Mandate"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The OrenGov Mandate</div>
                <h2>
                  Four conditions agencies require.{" "}
                  <span style={ACCENT}>All four met.</span>
                </h2>
                <p>
                  Federal, state, local, and education buyers operate under
                  non-negotiable procurement and security constraints. OrenGov
                  was architected to meet them by default — not bolted on as an
                  afterthought.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Sovereign Infrastructure</h3>
                  <p>
                    Behind-firewall, self-hosted, and air-gap capable. Data
                    residency stays under agency control. No vendor lock-in. No
                    third-party training of public records.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>NIST-Aligned Governance</h3>
                  <p>
                    Architected with NIST 800-53, 800-53A, and 800-53B controls
                    in view. Risk management framework training in hand.
                    Audit-trail-ready posture from day one.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Procurement-Vehicle Ready</h3>
                  <p>
                    SAM.gov registered, Grants.gov enrolled, Texas DIR Tech 4 TX
                    approved, TAMUS registered. Set-aside eligible. Direct
                    purchase ready under SDB and MBE vehicles.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Founder-Stage Execution</h3>
                  <p>
                    Strategic decisions made by Counterparts who answer to the
                    principal architect. No layered account managers. No
                    outsourced engagement teams.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ========== 3. PROCUREMENT-READY DASHBOARD ========== */}
          <section
            className="section section-brand-blue"
            aria-label="Procurement Readiness"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Procurement Readiness</div>
                <h2>
                  Identifiers in hand. <span style={ACCENT}>Vehicles open.</span>
                </h2>
                <p>
                  Every federal, state, and education identifier required for
                  direct contracting or subcontracting. Verified, active, and
                  downloadable on the capability statement.
                </p>
              </header>

              <div className="cost-grid reveal">
                <article className="sector-card">
                  <h3>Federal &amp; State Identifiers</h3>
                  <div className="kpi-grid">
                    <div className="kpi">
                      <div className="label">UEI</div>
                      <div className="num">RX16QFYT6YM5</div>
                    </div>
                    <div className="kpi">
                      <div className="label">CAGE Code</div>
                      <div className="num">12XC1</div>
                    </div>
                    <div className="kpi">
                      <div className="label">EIN</div>
                      <div className="num">33-3245798</div>
                    </div>
                    <div className="kpi">
                      <div className="label">DUNS</div>
                      <div className="num">119469040</div>
                    </div>
                    <div className="kpi">
                      <div className="label">SAM.gov</div>
                      <div className="num">Active</div>
                    </div>
                    <div className="kpi">
                      <div className="label">Grants.gov</div>
                      <div className="num">Enrolled</div>
                    </div>
                    <div className="kpi">
                      <div className="label">Texas CMBL</div>
                      <div className="num">Vendor 550248</div>
                    </div>
                    <div className="kpi">
                      <div className="label">DIR Tech 4 TX</div>
                      <div className="num">Approved</div>
                    </div>
                    <div className="kpi">
                      <div className="label">TAMUS</div>
                      <div className="num">Registered</div>
                    </div>
                  </div>
                  <div className="sector-trust">
                    <strong>Set-Aside Eligible:</strong> Minority-Owned Small
                    Business · Small Disadvantaged Business (SDB) ·
                    Texas-certified MBE.
                  </div>
                </article>

                <article className="sector-card">
                  <h3>Primary NAICS Codes</h3>
                  <div className="cap-list">
                    <article className="cap">
                      <div className="cap-num">541519</div>
                      <div>
                        <h3>Other Computer Related Services</h3>
                        <p>Primary</p>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">541511</div>
                      <div>
                        <h3>Custom Computer Programming Services</h3>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">541512</div>
                      <div>
                        <h3>Computer Systems Design Services</h3>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">541513</div>
                      <div>
                        <h3>Computer Facilities Management</h3>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">541611</div>
                      <div>
                        <h3>Administrative Management Consulting</h3>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">541618</div>
                      <div>
                        <h3>Other Management Consulting Services</h3>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">518210</div>
                      <div>
                        <h3>Data Processing, Hosting &amp; Related</h3>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">+27</div>
                      <div>
                        <h3>Additional NAICS codes on capability statement</h3>
                        <p>View All</p>
                      </div>
                    </article>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* ========== 4. CAPABILITY STACK ========== */}
          <section
            className="section alt section-brand-white"
            aria-label="The OrenGov Capability Stack"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The OrenGov Capability Stack</div>
                <h2>
                  Six pillars.{" "}
                  <span style={ACCENT}>One sovereign architecture.</span>
                </h2>
                <p>
                  The capability stack OrenGov deploys for public sector
                  Counterparts. Every pillar is procurement-ready, NIST-aligned
                  in posture, and built for behind-firewall operation.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Pillar 01</div>
                  <h3>Sovereign AI Infrastructure</h3>
                  <p>
                    Self-hosted, behind-firewall AI deployments under agency
                    control. No third-party model training on agency records.
                    Data residency stays where it must.
                  </p>
                  <ul>
                    <li>Air-gap capable deployments</li>
                    <li>Claude API + open-source LLM options</li>
                    <li>Agency-controlled inference layer</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 02</div>
                  <h3>Workflow Orchestration</h3>
                  <p>
                    Automated workflow engines that route casework, approvals,
                    and inter-departmental requests across legacy systems
                    without rip-and-replace.
                  </p>
                  <ul>
                    <li>n8n-based orchestration on owned infrastructure</li>
                    <li>SOC 2 Type 2 attested platform layer</li>
                    <li>Legacy API and database integration</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 03</div>
                  <h3>Operational Intelligence</h3>
                  <p>
                    Operational reporting, KPI dashboards, and predictive
                    analytics surfaces designed for agency leadership and
                    program directors.
                  </p>
                  <ul>
                    <li>Real-time program performance dashboards</li>
                    <li>FOIA-ready audit trail architecture</li>
                    <li>Cross-system data unification</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 04</div>
                  <h3>Legacy Modernization</h3>
                  <p>
                    Wrap existing legacy systems with AI capability without
                    replacing them. Extend lifespan of investment while gaining
                    modern operational surface.
                  </p>
                  <ul>
                    <li>Mainframe and ERP modernization</li>
                    <li>Document processing automation</li>
                    <li>Citizen-facing portal augmentation</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 05</div>
                  <h3>Secure Communication</h3>
                  <p>
                    Mass communication infrastructure for citizen
                    notifications, inter-agency coordination, and emergency
                    response messaging at scale.
                  </p>
                  <ul>
                    <li>High-volume email and SMS at scale</li>
                    <li>Deliverability-monitored channels</li>
                    <li>Compliance-logged communication records</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 06</div>
                  <h3>Executive Consulting</h3>
                  <p>
                    Fractional CTO and architectural advisory for agencies
                    navigating AI adoption decisions. Counterpart-to-counterpart
                    strategic engagement.
                  </p>
                  <ul>
                    <li>AI procurement strategy</li>
                    <li>Vendor evaluation and selection</li>
                    <li>Multi-year modernization roadmap</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* ========== 5. SUB-SECTOR CARDS ========== */}
          <section
            className="section section-brand-blue"
            aria-label="Sub-Sector Paths"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Sub-Sector Paths</div>
                <h2>
                  Three procurement entries.{" "}
                  <span style={ACCENT}>One architecture.</span>
                </h2>
                <p>
                  OrenGov serves three distinct procurement environments under a
                  single sovereign architecture. Pick the path that maps to your
                  buying authority.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Defense &amp; DoD</h3>
                  <p>
                    Behind-firewall AI infrastructure for defense agencies,
                    defense contractors, and intelligence community
                    subcontracting. Architected with NIST 800-53 controls in
                    view and air-gap deployment as a default option.
                  </p>
                  <div className="trust-row">
                    <span className="chip">DoD</span>
                    <span className="chip">Air-Gap</span>
                    <span className="chip">NIST 800-53</span>
                  </div>
                  <a className="card-link" href="/orengov/defense">
                    Explore Defense Path
                  </a>
                </article>

                <article className="sector-card">
                  <h3>State &amp; Local · SLED</h3>
                  <p>
                    SLED procurement-ready AI architecture for state agencies,
                    county systems, municipal governments, and quasi-public
                    entities. Texas DIR Tech 4 TX approved. CMBL Vendor active.
                    Cooperative purchasing eligible.
                  </p>
                  <div className="trust-row">
                    <span className="chip">SLED</span>
                    <span className="chip">DIR Tech 4 TX</span>
                    <span className="chip">CMBL</span>
                  </div>
                  <a
                    className="card-link"
                    href="/orengov/public-sector/state-local"
                  >
                    Explore State &amp; Local Path
                  </a>
                </article>

                <article className="sector-card">
                  <h3>Education &amp; Research</h3>
                  <p>
                    AI infrastructure for public universities, research
                    institutions, K-12 districts, and educational service
                    agencies. TAMUS registered. FERPA-aware architecture.
                    Research-data-residency capable.
                  </p>
                  <div className="trust-row">
                    <span className="chip">TAMUS</span>
                    <span className="chip">FERPA-Aware</span>
                    <span className="chip">Research</span>
                  </div>
                  <a
                    className="card-link"
                    href="/orengov/public-sector/education"
                  >
                    Explore Education Path
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* ========== 6. FAQ ========== */}
          <section
            className="section alt section-brand-white"
            aria-label="Procurement Officer FAQ"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Procurement Officer FAQ</div>
                <h2>
                  The questions{" "}
                  <span style={ACCENT}>contracting officers ask first.</span>
                </h2>
                <p>
                  Direct answers to the procurement and security questions that
                  come up in vendor evaluation.
                </p>
              </header>

              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>Is OrenGen authorized to bid on federal contracts?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenGen Worldwide LLC holds active SAM.gov registration
                    (UEI RX16QFYT6YM5, CAGE 12XC1, EIN 33-3245798, DUNS
                    119469040). The firm is registered with Grants.gov, approved
                    as DIR Tech 4 TX for Texas state contracts, registered with
                    TAMUS for Texas A&amp;M System procurement, and active as
                    Texas CMBL Vendor 550248. Set-aside eligibility includes
                    Minority-Owned Small Business and Small Disadvantaged
                    Business (SDB).
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>What NIST frameworks is OrenGen aligned with?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    The founder holds completed training in NIST 800-53
                    (Security and Privacy Controls), 800-53A (Assessment
                    Procedures), 800-53B (Control Baselines), and NIST CSRC Risk
                    Management Framework Introductory. Architecture decisions are
                    made with these controls in view, supporting Counterparts
                    whose procurement requirements reference NIST-aligned
                    posture. Additional training in Securiti AI Security &amp;
                    Governance and PrivacyOps Academy supports modern AI-specific
                    governance frameworks.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Can OrenGen deploy behind firewalls or in air-gapped
                      environments?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenGov&apos;s default architecture pattern is sovereign
                    and behind-firewall. Deployment options include on-premise
                    installation on agency hardware, private cloud deployment
                    under agency control, and air-gap configurations for
                    environments requiring complete isolation. Open-source LLM
                    options are available where third-party API connectivity is
                    not permitted by the security posture of the agency.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What is the typical engagement structure and timeline?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Engagements begin with a capability briefing (45-60 minutes,
                    founder-direct) to map agency requirements against
                    OrenGov&apos;s architectural capability. From there, scope
                    and procurement vehicle are confirmed. Typical deployment
                    timeline runs four to twelve weeks depending on integration
                    complexity, infrastructure environment, and the procurement
                    pathway selected. Counterparts work directly with the
                    principal architect throughout — no layered account
                    management.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What set-aside categories does OrenGen qualify under?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGen qualifies as a Minority-Owned Small Business with
                    active SAM.gov registration and Small Disadvantaged Business
                    (SDB) eligibility. Texas CMBL Vendor registration (550248)
                    supports Texas state-level minority-owned procurement. The
                    firm is also registered with TAMUS for Texas A&amp;M System
                    procurement. Additional certifications including NMSDC MBE
                    are in progress and will be cited only once active. The firm
                    does not overclaim credentials.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How is data sovereignty handled in OrenGov deployments?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Data residency stays under the agency&apos;s control by
                    default. Agency records are not transmitted to third-party
                    model training pipelines. Inference layer can be deployed on
                    agency-owned infrastructure or in agency-controlled private
                    cloud. Audit trail architecture is FOIA-ready and built to
                    support records retention obligations. The firm&apos;s
                    positioning is explicit: agencies that engage OrenGov do not
                    rent their intelligence to outside parties.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Can OrenGen subcontract under prime contractors on existing
                      vehicles?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenGen is positioned to subcontract under prime
                    contractors on existing federal, state, and education
                    vehicles, including supporting prime contractor small
                    business participation requirements. SDB and MBE eligibility
                    supports prime contractor scorecard obligations under FAR
                    19.704 and equivalent state-level small business utilization
                    requirements.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== 7. FINAL CTA ========== */}
          <section
            className="section section-brand-blue"
            aria-label="Open the Capability Briefing"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Open the Capability Briefing</div>
                <h2>
                  Architected for agencies. <br />
                  <span style={ACCENT}>Briefing is the door.</span>
                </h2>
                <p>
                  Forty-five minutes, founder-direct, no sales layer. We map
                  agency requirements against the OrenGov capability stack and
                  confirm whether the architecture fits before a single
                  contracting conversation begins.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="https://api.orengen.io/booking/og-j39qvisxpas/sc/discovery-meet" target="_blank" rel="noopener noreferrer">
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
