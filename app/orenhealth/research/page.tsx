import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenHealth Research & Life Sciences page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orenhealth-research-firms.html — only presentation/layout
 * changed.
 */
export const metadata: Metadata = {
  title: "OrenHealth Research & Life Sciences",
  description:
    "Study-grade operational workflow infrastructure for clinical research firms, investigator-initiated studies, research networks, and sponsor-side operations. HIPAA-aligned, 21 CFR Part 11-aware in architecture, scoped to operational orchestration around validated research platforms.",
  keywords:
    "clinical research, life sciences, HIPAA, 21 CFR Part 11, research operations, investigator-initiated studies, EDC, CTMS, eTMF, OrenHealth, OrenGen",
  alternates: { canonical: "/orenhealth/research" },
  openGraph: {
    title: "OrenHealth Research & Life Sciences",
    description:
      "Study-grade operational workflow infrastructure for clinical research firms, investigator-initiated studies, research networks, and sponsor-side operations. HIPAA-aligned, 21 CFR Part 11-aware in architecture, scoped to operational orchestration around validated research platforms.",
    url: "https://orengen.io/orenhealth/research",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenHealthResearchPage() {
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
            aria-label="OrenHealth — Research & Life Sciences"
          >
            <div className="container">
              <header className="section-head reveal">
                <div className="trust-row" style={{ marginBottom: "1.25rem" }}>
                  <a className="chip" href="/orenhealth">
                    Home <span style={ACCENT}>/</span> Healthcare{" "}
                    <span style={ACCENT}>/</span>{" "}
                    <span style={ACCENT}>Research &amp; Life Sciences</span>
                  </a>
                </div>
                <div className="eyebrow">
                  OrenHealth &middot; Research &amp; Life Sciences
                </div>
                <h1>
                  Study-grade AI infrastructure for research firms that refuse
                  to rent their{" "}
                  <span className="gradient-word shimmer">
                    research intelligence
                  </span>
                  .
                </h1>
                <p className="lead">
                  Clinical research runs on data integrity, regulatory
                  traceability, and operational coordination across
                  investigators, coordinators, sponsors, and IRBs. OrenHealth
                  builds workflow infrastructure aligned to that operating
                  reality — HIPAA-aligned, 21 CFR Part 11-aware in architecture,
                  and scoped to support research operations without crossing
                  into territory that requires a CRO, GxP validation house, or
                  FDA-regulated software clearance.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://api.orengen.io/booking/og-j39qvisxpas/sc/discovery-meet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open a Research Briefing
                  </a>
                  <a className="btn btn-secondary" href="/capability-statement">
                    Download Capability Statement
                  </a>
                </div>
                <div className="trust-row" style={{ marginTop: "1.5rem" }}>
                  <span className="chip">HIPAA Architecture</span>
                  <span className="chip">BAA Ready</span>
                  <span className="chip">21 CFR Part 11 Aware</span>
                  <span className="chip">IRB-Aligned Workflow</span>
                </div>
              </header>
            </div>
          </section>

          {/* MANDATE */}
          <section
            className="section alt section-brand-white"
            aria-label="The Research Operations Mandate"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Research Operations Mandate</div>
                <h2>
                  Built for how clinical research and life-sciences operations
                  actually function.
                </h2>
                <p className="lead">
                  Investigator sites, sponsor research operations, and academic
                  medical center research divisions all share the same daily
                  reality: protocol-driven workflow, audit-traceable data
                  handling, and coordination across people who don&apos;t share
                  a single system. OrenHealth ships infrastructure aligned to
                  that reality — and stays honestly inside the boundaries of
                  what is appropriate for non-validated, non-GxP software.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>HIPAA-Aligned Architecture</h3>
                  <p>
                    PHI handling, encryption-at-rest and in-transit, audit
                    logging, role-based access controls, and breach
                    notification posture engineered for research environments
                    handling participant-identifiable data.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>21 CFR Part 11 Aware</h3>
                  <p>
                    Architectural design reflects electronic record and
                    electronic signature principles — audit trails, access
                    controls, time-stamped records. Full Part 11 validation for
                    regulated systems is sponsor- and study-specific; we
                    coordinate with your validation partner, not replace them.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>IRB &amp; Sponsor Coordination Aware</h3>
                  <p>
                    Protocol-driven workflows, consent process integration, and
                    sponsor communication patterns built around how investigator
                    sites and research operations actually coordinate with their
                    IRB of record and study sponsor.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>PI &amp; Coordinator Engagement</h3>
                  <p>
                    Direct counterpart access to the founder and senior
                    engineering for principal investigators, research
                    coordinators, and research operations directors. No SDR
                    funnel — operational counterpart conversation from the first
                    briefing.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* RESEARCH PLATFORMS STRIP */}
          <section
            className="section section-brand-blue"
            aria-label="Research Platform Awareness"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Research Platform Awareness</div>
                <h2>
                  We integrate around the systems clinical research already runs
                  on.
                </h2>
                <p className="lead">
                  OrenHealth does not replace your EDC, eTMF, CTMS, or eConsent
                  system. We orchestrate workflow around those platforms —
                  participant communication, recruitment funnels, operational
                  dashboards, sponsor-side coordination — against
                  vendor-published APIs and standard research interoperability
                  protocols.
                </p>
              </header>

              <div
                className="trust-row reveal"
                style={{ justifyContent: "center" }}
              >
                <span className="chip">REDCap</span>
                <span className="chip">OpenClinica</span>
                <span className="chip">Castor EDC</span>
                <span className="chip">Veeva Vault</span>
                <span className="chip">Medidata Rave</span>
                <span className="chip">IQVIA Technologies</span>
              </div>

              <p
                className="reveal"
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  fontSize: "0.82rem",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                Platform names referenced for integration context only. OrenGen
                Worldwide LLC is not affiliated with, endorsed by, or a reseller
                of these vendors. All trademarks are property of their
                respective owners.
              </p>
            </div>
          </section>

          {/* CAPABILITY STACK */}
          <section
            className="section alt section-brand-white"
            aria-label="Capability Stack"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Capability Stack</div>
                <h2>
                  Six pillars engineered for clinical research and life-sciences
                  operations.
                </h2>
                <p className="lead">
                  Each pillar is deployable as a standalone engagement or
                  composed into a research operations modernization program.
                  Scope, BAA terms, and integration boundaries confirmed during
                  the research briefing.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">01 / Infrastructure</div>
                  <h3>HIPAA-Aligned Research Infrastructure</h3>
                  <p>
                    Dedicated server tenancy with participant-data segregation,
                    encryption at rest and in transit, access logging, and audit
                    trail preservation. Architecture reflects 21 CFR Part 11
                    electronic records principles for non-validated operational
                    tooling.
                  </p>
                  <div className="sector-trust">
                    Audit Trail BAA Ready Part 11 Aware
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">02 / Coordination</div>
                  <h3>Study Coordination &amp; Participant Workflow</h3>
                  <p>
                    Operational workflow for study coordinators — participant
                    tracking, visit scheduling, protocol adherence checkpoints,
                    sponsor communication queues, IRB submission status tracking.
                    Operational coordination, not regulated clinical data
                    capture.
                  </p>
                  <div className="sector-trust">
                    Visit Scheduling Protocol Tracking Sponsor Comms
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">03 / Operations</div>
                  <h3>Research Operations Intelligence</h3>
                  <p>
                    Dashboards against operational research metrics — recruitment
                    funnel performance, screen-fail rates, retention by site,
                    enrollment-to-target progress, query response cycle times.
                    Operational analytics, not clinical data analysis or
                    biostatistics.
                  </p>
                  <div className="sector-trust">
                    Recruitment Funnel Retention Analytics Enrollment Tracking
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">04 / Integration</div>
                  <h3>EDC / CTMS / eTMF Integration Layer</h3>
                  <p>
                    Integration layer between your existing research platforms
                    and the operational tooling your team uses — recruitment
                    platforms, participant communication, scheduling, IRB
                    tracking. Vendor APIs, standard research interoperability
                    protocols where available, scoped per engagement.
                  </p>
                  <div className="sector-trust">
                    EDC API CTMS Sync Workflow Glue
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">05 / Communication</div>
                  <h3>Participant Communication Infrastructure</h3>
                  <p>
                    HIPAA-aligned participant messaging — visit reminders,
                    follow-up sequences, retention outreach, screen-fail
                    communication, study-completion handoff. Scoped to
                    operational and administrative communication; does not
                    include clinical advice, adverse event triage, or unblinded
                    study communication.
                  </p>
                  <div className="sector-trust">
                    Visit Reminders Retention Outreach Secure Messaging
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">06 / Advisory</div>
                  <h3>Research Operations Strategic Advisory</h3>
                  <p>
                    Fractional CTO and research operations strategy for principal
                    investigators, research directors, academic medical center
                    research offices, and sponsor-side operations teams. AI
                    roadmap, technology stack rationalization, vendor
                    consolidation, operational governance.
                  </p>
                  <div className="sector-trust">
                    Fractional CTO Ops Roadmap Vendor Rationalization
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* SCENARIOS */}
          <section
            className="section section-brand-blue"
            aria-label="Engagement Scenarios"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Engagement Scenarios</div>
                <h2>How research firms actually contract with OrenHealth.</h2>
                <p className="lead">
                  Concrete patterns we ship into the clinical research and
                  life-sciences market. Every engagement starts with a 30-minute
                  research briefing to confirm scope, BAA terms, integration
                  boundaries, and what is explicitly out of scope.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Scenario 01</div>
                  <h3>Investigator-Initiated Study Operations Support</h3>
                  <p>
                    Principal investigators running investigator-initiated
                    studies at academic medical centers and independent sites
                    engage OrenHealth for operational workflow — recruitment
                    outreach, participant communication, visit scheduling, IRB
                    submission tracking. Operational support layer around your
                    existing REDCap or institutional EDC instance.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 02</div>
                  <h3>Multi-Site Research Network Coordination</h3>
                  <p>
                    For research networks, consortia, and multi-site
                    investigator-initiated studies coordinating across 5–50
                    sites. Workflow orchestration for site activation status,
                    central recruitment coordination, cross-site enrollment
                    dashboards, and standardized participant communication. Does
                    not replace sponsor-mandated CTMS.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 03</div>
                  <h3>EDC / Research Platform Integration Wrapper</h3>
                  <p>
                    For research operations already invested in a primary EDC,
                    CTMS, or eTMF platform but missing connective tissue. We
                    build the integration layer between your research platforms
                    and the operational tooling your team uses day-to-day —
                    recruitment systems, participant SMS, scheduling, IRB
                    tracking, sponsor reporting.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 04</div>
                  <h3>Sponsor &amp; CRO-Side Operations Advisory</h3>
                  <p>
                    For sponsor research operations groups and CRO operational
                    leadership evaluating where AI and workflow automation fit
                    inside an already-regulated stack. Fractional CTO engagement
                    covering AI governance posture, vendor evaluation framework,
                    and operational-versus-validated-system boundary mapping.
                    Strategic, not implementation.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            className="section alt section-brand-white"
            aria-label="PI & Research Director FAQ"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">PI &amp; Research Director FAQ</div>
                <h2>
                  The questions a principal investigator or research director
                  should actually ask.
                </h2>
                <p className="lead">
                  Honest answers on regulatory posture, what we do and
                  don&apos;t do inside a clinical research environment, and where
                  we hand off to specialized validation, CRO, or FDA-regulated
                  software partners.
                </p>
              </header>

              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>
                      Are you 21 CFR Part 11 validated, and what does
                      &quot;Part 11 aware&quot; actually mean here?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    We are not a Part 11-validated system, and we do not market
                    ourselves as a replacement for one. &quot;Part 11 aware&quot;
                    means our architecture reflects the underlying principles of
                    electronic records and electronic signatures — audit trails,
                    time-stamped records, user authentication, access controls,
                    and data integrity safeguards. For systems that genuinely
                    require Part 11 validation under FDA scope (regulated EDC,
                    eCRF capture for submission-grade data), you should be
                    running a validated platform like the ones referenced in our
                    platform strip, with a validation package executed by a
                    qualified GxP validation partner. Our role is operational
                    orchestration around those systems, not replacement of them.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is OrenHealth a CRO, and can it replace one?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    No. OrenHealth is not a Contract Research Organization. We do
                    not provide regulatory submission services, monitoring,
                    GCP-certified clinical data review, query resolution under
                    GCP, medical writing, biostatistics, pharmacovigilance, or
                    any service that requires GCP-credentialed staff. CROs
                    deliver clinical operations as a service against a regulated
                    framework; OrenHealth delivers operational infrastructure and
                    workflow tooling that complements that work. For sponsor-side
                    studies the relationship is typically additive to your
                    existing CRO, not a substitute.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How is participant PHI and IRB-protected research data
                      handled?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    For HIPAA-covered participant data, we operate under an
                    executed BAA aligned to HIPAA Privacy and Security Rule
                    requirements — encryption in transit and at rest, audit
                    logging, role-based access, breach notification posture. For
                    IRB-protected primary research data captured under a study
                    protocol, our position is that data stays inside your
                    validated EDC or institutional research environment under
                    your IRB-approved data management plan. We orchestrate
                    operational workflow around that data, but we are not the
                    primary system of record for regulated study data.
                    Participant identifiers we do handle in operational workflow
                    (contact info for visit reminders, recruitment outreach) are
                    scoped, contractually defined, and BAA-covered.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What about GCP and ICH-E6 — are you certified?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Our team is aware of GCP and ICH-E6 R2/R3 framework
                    requirements but we do not market individual GCP
                    certifications, and OrenGen Worldwide does not provide
                    GCP-credentialed clinical research staff. When an engagement
                    requires GCP-credentialed work — clinical data monitoring,
                    query resolution, source-data verification — that work goes
                    to your CRO, in-house clinical operations team, or contracted
                    GCP-certified personnel. Our team supports operational and
                    technical workflow that does not require GCP credentialing.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Can you build participant-facing AI that interacts with
                      patients during a study?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Operational and administrative communication only — visit
                    reminders, scheduling, retention outreach, study-completion
                    handoff. Any participant-facing AI that would constitute
                    clinical advice, symptom triage, adverse event intake,
                    unblinded study communication, or anything else that
                    intersects with the conduct of the study under the protocol
                    is explicitly out of scope. Participant-facing AI in
                    regulated clinical research is a category that typically
                    requires sponsor sign-off, IRB review of the specific AI
                    tool, and in some cases FDA premarket consideration depending
                    on intended use. We do not undertake that without all three.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Do you support real-world evidence, patient registries, or
                      post-market surveillance work?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Real-world evidence and registry projects are within scoping
                    discussion for the operational orchestration layer —
                    participant outreach, data collection workflow around a
                    registry instrument, longitudinal communication. The registry
                    instrument itself — case report forms, structured data
                    capture, regulatory submission packaging — sits inside a
                    validated platform with a study-specific data management
                    plan. We are positioned to support the operational shell
                    around a registry, not the registry&apos;s regulated data
                    capture engine.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What does pricing look like for an investigator-initiated
                      study versus a multi-site sponsor engagement?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Pricing is confirmed in the Statement of Work after the
                    research briefing — we do not publish list pricing because
                    scope, integration complexity, and study volume vary
                    significantly. Investigator-initiated studies typically
                    engage on a defined-scope pilot for operational workflow
                    (recruitment, scheduling, retention) with a fixed
                    implementation fee plus monthly recurring infrastructure fee.
                    Multi-site sponsor engagements engage on a master agreement
                    structured around the operations layer, scoped to be additive
                    to your existing CRO and validated platform stack. We do not
                    gate the briefing or capability statement on pricing
                    disclosure.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Open a Research Briefing"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Open a Research Briefing</div>
                <h2>
                  The fastest path forward is a 30-minute conversation.
                </h2>
                <p className="lead">
                  Principal investigators, research directors, and sponsor-side
                  operations leaders engage OrenHealth through a 30-minute
                  briefing. Scope, BAA terms, regulated-versus-operational
                  boundary, and what is explicitly out of scope are confirmed in
                  writing before anything ships.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://api.orengen.io/booking/og-j39qvisxpas/sc/discovery-meet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule the Briefing
                  </a>
                  <a className="btn btn-secondary" href="/capability-statement">
                    Request the Capability Statement
                  </a>
                </div>
                <p
                  style={{
                    marginTop: "2.5rem",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  OrenGen Worldwide LLC · UEI RX16QFYT6YM5 · CAGE 12XC1 ·
                  Minority-Owned Small Business · HIPAA-Aligned Architecture ·
                  BAA Ready · 21 CFR Part 11 Aware
                </p>
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
