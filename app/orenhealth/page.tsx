import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenHealth vertical landing page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from main-core-pages/orenhealth.html —
 * only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "OrenHealth — HIPAA-Aligned AI Infrastructure | OrenGen",
  description:
    "OrenHealth architects compliant AI systems for hospitals, specialty clinics, and research firms. BAA-ready. HIPAA-Enabled Architecture. Patient data sovereignty by default.",
  keywords:
    "orenhealth, hipaa ai, healthcare ai, baa-ready, phi, hospitals, specialty clinics, life sciences, orengen",
  alternates: { canonical: "/orenhealth" },
  openGraph: {
    title: "OrenHealth — HIPAA-Aligned AI Infrastructure | OrenGen",
    description:
      "OrenHealth architects compliant AI systems for hospitals, specialty clinics, and research firms. BAA-ready. HIPAA-Enabled Architecture. Patient data sovereignty by default.",
    url: "https://orengen.io/orenhealth",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenHealthPage() {
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
            aria-label="OrenHealth — Healthcare & Life Sciences Division"
          >
            <div className="container">
              <header className="section-head reveal">
                <div className="eyebrow">
                  OrenHealth · Healthcare &amp; Life Sciences Division
                </div>
                <h1>
                  HIPAA-aligned AI infrastructure for health systems that{" "}
                  <span className="gradient-word shimmer">
                    refuse to rent their patient intelligence.
                  </span>
                </h1>
                <p className="lead">
                  OrenHealth architects compliant AI systems for hospitals,
                  specialty clinics, and research firms. BAA-ready. HIPAA-Enabled
                  Architecture. Patient data sovereignty by default. Built by
                  Counterparts who treat protected health information as exactly
                  what it is — protected.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="https://api.orengen.io/widget/booking/EvvNIyeXdLksQikeO6en" target="_blank" rel="noopener noreferrer">
                    Open a Capability Briefing
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="/capability-statement"
                  >
                    Download Capability Statement
                  </a>
                </div>
                <div className="trust-row">
                  <span className="chip">
                    <strong>HIPAA</strong> Trained
                  </span>
                  <span className="chip">
                    <strong>BAA-Ready</strong>
                  </span>
                  <span className="chip">
                    <strong>30-Member</strong> Attestation
                  </span>
                  <span className="chip">
                    <strong>Securiti AI</strong> Governance
                  </span>
                </div>
              </header>

              {/* HERO CREDENTIAL PANEL */}
              <div className="trust-row reveal" style={{ marginTop: "8px" }}>
                <span className="chip">Compliance Posture in Hand</span>
                <span className="chip">Verified · 2026</span>
              </div>
              <div className="kpi-grid reveal">
                <div className="kpi">
                  <div className="label">HIPAA Workforce</div>
                  <div className="num">30-Member Attested</div>
                </div>
                <div className="kpi">
                  <div className="label">BAA Execution</div>
                  <div className="num">Ready</div>
                </div>
                <div className="kpi">
                  <div className="label">HIPAA Architecture</div>
                  <div className="num">Enabled</div>
                </div>
                <div className="kpi">
                  <div className="label">Platform Layer</div>
                  <div className="num">SOC 2 Type 2</div>
                </div>
                <div className="kpi">
                  <div className="label">Data Frameworks</div>
                  <div className="num">EU-US · Swiss-US DPF</div>
                </div>
                <div className="kpi">
                  <div className="label">AI Governance</div>
                  <div className="num">Securiti Certified</div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== 2. HEALTHCARE MANDATE ========== */}
          <section
            className="section alt section-brand-white"
            aria-label="The OrenHealth Mandate"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The OrenHealth Mandate</div>
                <h2>
                  Four conditions health systems require.{" "}
                  <span style={ACCENT}>All four met.</span>
                </h2>
                <p>
                  Hospitals, specialty clinics, and research firms operate under
                  non-negotiable HIPAA, BAA, and clinical governance constraints.
                  OrenHealth was architected to meet them by default — not bolted
                  on after the fact.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>HIPAA-Aligned Architecture</h3>
                  <p>
                    Technical safeguards aligned to HIPAA Security Rule —
                    encryption at rest and in transit, role-based access,
                    comprehensive audit trails, breach notification readiness.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>BAA-Ready Engagement</h3>
                  <p>
                    Business Associate Agreement execution is standard
                    onboarding. HIPAA Workforce Attestation covering 30 members
                    ensures everyone touching PHI has signed responsibility.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Patient Data Sovereignty</h3>
                  <p>
                    PHI residency stays under the Counterpart&apos;s control. No
                    third-party model training on patient records.
                    Behind-firewall and private-cloud deployments available by
                    default.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Founder-Stage Execution</h3>
                  <p>
                    Strategic decisions made by Counterparts who answer to the
                    principal architect. Clinical workflow decisions don&apos;t
                    get routed through account management layers.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ========== 3. COMPLIANCE POSTURE & ENGAGEMENT ========== */}
          <section
            className="section section-brand-blue"
            aria-label="Compliance Posture"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Compliance Posture</div>
                <h2>
                  BAA-ready. Architecture-enabled.{" "}
                  <span style={ACCENT}>Audit-trail honest.</span>
                </h2>
                <p>
                  The compliance posture and engagement framework for covered
                  entities and business associates. Every credential cited is in
                  hand. Every roadmap item is named as a roadmap item.
                </p>
              </header>

              <div className="cost-grid reveal" style={{ marginBottom: "16px" }}>
                <article className="sector-card">
                  <h3>Healthcare Compliance Identifiers</h3>
                  <div className="kpi-grid">
                    <div className="kpi">
                      <div className="label">HIPAA Workforce</div>
                      <div className="num">30-Member Attestation</div>
                    </div>
                    <div className="kpi">
                      <div className="label">Attestation Year</div>
                      <div className="num">2026 Active</div>
                    </div>
                    <div className="kpi">
                      <div className="label">BAA Execution</div>
                      <div className="num">Ready</div>
                    </div>
                    <div className="kpi">
                      <div className="label">HIPAA Architecture</div>
                      <div className="num">Enabled</div>
                    </div>
                    <div className="kpi">
                      <div className="label">Platform Attestation</div>
                      <div className="num">SOC 2 Type 2</div>
                    </div>
                    <div className="kpi">
                      <div className="label">Founder Training</div>
                      <div className="num">HIPAA Compliance</div>
                    </div>
                    <div className="kpi">
                      <div className="label">AI Governance</div>
                      <div className="num">Securiti Certified</div>
                    </div>
                    <div className="kpi">
                      <div className="label">Privacy Ops</div>
                      <div className="num">Academy Certified</div>
                    </div>
                    <div className="kpi">
                      <div className="label">Data Transfer</div>
                      <div className="num">EU-US · Swiss-US DPF</div>
                    </div>
                  </div>
                  <div className="sector-trust">
                    <strong>On Roadmap:</strong> OrenGen-direct SOC 2 Type 1
                    (2026), with HITRUST evaluation to follow. The firm does not
                    claim credentials it does not yet hold.
                  </div>
                </article>

                <article className="sector-card">
                  <h3>Engagement Framework</h3>
                  <div className="cap-list">
                    <article className="cap">
                      <div className="cap-num">01</div>
                      <div>
                        <h3>Capability Briefing</h3>
                        <p>
                          Forty-five minutes, founder-direct. Architecture mapped
                          against clinical and compliance requirements.
                        </p>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">02</div>
                      <div>
                        <h3>BAA Execution</h3>
                        <p>
                          Business Associate Agreement reviewed and executed
                          before any PHI-touching scope begins.
                        </p>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">03</div>
                      <div>
                        <h3>Scope &amp; Architecture</h3>
                        <p>
                          Deployment pattern confirmed — behind-firewall, private
                          cloud, or hybrid — with PHI flow documentation.
                        </p>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">04</div>
                      <div>
                        <h3>Deployment &amp; Integration</h3>
                        <p>
                          Four-to-twelve-week deployment with EHR, EMR, or
                          practice management integration as required.
                        </p>
                      </div>
                    </article>
                    <article className="cap">
                      <div className="cap-num">05</div>
                      <div>
                        <h3>Ongoing Governance</h3>
                        <p>
                          Quarterly compliance review, audit trail attestation,
                          and architectural sustainment.
                        </p>
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
            aria-label="The OrenHealth Capability Stack"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The OrenHealth Capability Stack</div>
                <h2>
                  Six pillars.{" "}
                  <span style={ACCENT}>One HIPAA-aligned architecture.</span>
                </h2>
                <p>
                  The capability stack OrenHealth deploys for healthcare
                  Counterparts. Every pillar is BAA-ready, HIPAA-aligned in
                  posture, and built around the assumption that patient data is
                  not a vendor&apos;s training set.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Pillar 01</div>
                  <h3>HIPAA-Aligned AI Infrastructure</h3>
                  <p>
                    Self-hosted, behind-firewall, and private-cloud AI
                    deployments architected around HIPAA Security Rule technical
                    safeguards. PHI stays under Counterpart control.
                  </p>
                  <ul>
                    <li>Behind-firewall and private cloud options</li>
                    <li>Encryption at rest and in transit</li>
                    <li>No third-party PHI training</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 02</div>
                  <h3>Clinical Workflow Orchestration</h3>
                  <p>
                    Automated workflow engines that route referrals, prior
                    authorizations, clinical documentation, and
                    inter-departmental requests across legacy EHR systems.
                  </p>
                  <ul>
                    <li>EHR and EMR integration</li>
                    <li>Prior authorization automation</li>
                    <li>Clinical documentation assistance</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 03</div>
                  <h3>Operational &amp; Clinical Intelligence</h3>
                  <p>
                    Operational reporting, RCM analytics, and clinical
                    performance dashboards designed for hospital administration,
                    practice managers, and clinical directors.
                  </p>
                  <ul>
                    <li>Revenue cycle management analytics</li>
                    <li>Clinical performance dashboards</li>
                    <li>HIPAA-compliant audit trail architecture</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 04</div>
                  <h3>Legacy EHR Modernization</h3>
                  <p>
                    Wrap existing EHR, EMR, and practice management systems with
                    AI capability without replacing them. Extend lifespan of
                    existing clinical investment.
                  </p>
                  <ul>
                    <li>EHR API integration and augmentation</li>
                    <li>Document processing for clinical notes</li>
                    <li>Patient portal augmentation</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 05</div>
                  <h3>Compliant Patient Communication</h3>
                  <p>
                    Patient communication infrastructure compliant with HIPAA
                    marketing rules, TCPA, and consent-based outreach. Appointment
                    reminders, follow-ups, care coordination.
                  </p>
                  <ul>
                    <li>HIPAA-compliant SMS and email</li>
                    <li>Consent-based patient outreach</li>
                    <li>TCPA-aligned messaging architecture</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 06</div>
                  <h3>Healthcare Strategic Consulting</h3>
                  <p>
                    Fractional CTO and AI advisory for health systems navigating
                    AI procurement, vendor evaluation, and clinical AI governance.
                    Counterpart-to-counterpart engagement.
                  </p>
                  <ul>
                    <li>AI procurement strategy</li>
                    <li>Clinical AI governance frameworks</li>
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
                  Three healthcare entries.{" "}
                  <span style={ACCENT}>One architecture.</span>
                </h2>
                <p>
                  OrenHealth serves three distinct healthcare environments under
                  a single HIPAA-aligned architecture. Pick the path that maps to
                  your clinical, operational, or research mandate.
                </p>
              </header>

              <div className="cost-grid reveal">
                <article className="sector-card">
                  <h3>Hospitals &amp; Health Systems</h3>
                  <p>
                    HIPAA-aligned AI infrastructure for hospitals, integrated
                    delivery networks, and multi-facility health systems. EHR
                    integration. Operational intelligence. Behind-firewall
                    deployment for institutions that won&apos;t compromise PHI
                    residency.
                  </p>
                  <ul>
                    <li>Health Systems</li>
                    <li>EHR Integration</li>
                    <li>Multi-Facility</li>
                  </ul>
                  <a className="card-link" href="/orenhealth/hospitals">
                    Explore Hospital Path
                  </a>
                </article>

                <article className="sector-card">
                  <h3>Specialty Clinics &amp; Practices</h3>
                  <p>
                    AI automation for multi-location specialty groups, private
                    practice networks, and specialty clinics. Practice management
                    integration. Patient communication. Prior authorization
                    workflow automation built for mid-market clinical
                    organizations.
                  </p>
                  <ul>
                    <li>Private Practice</li>
                    <li>Multi-Location</li>
                    <li>Specialty Care</li>
                  </ul>
                  <a className="card-link" href="/orenhealth/specialty-clinics">
                    Explore Specialty Clinic Path
                  </a>
                </article>

                <article className="sector-card">
                  <h3>Research &amp; Life Sciences</h3>
                  <p>
                    AI infrastructure for clinical research organizations, pharma,
                    biotech, and academic medical centers. Research data
                    residency. Clinical trial workflow automation. Behind-firewall
                    deployment for research that must stay sovereign.
                  </p>
                  <ul>
                    <li>Clinical Research</li>
                    <li>Pharma · Biotech</li>
                    <li>Academic Medical</li>
                  </ul>
                  <a className="card-link" href="/orenhealth/research">
                    Explore Research Path
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* ========== 6. FAQ ========== */}
          <section
            className="section alt section-brand-white"
            aria-label="Compliance Officer FAQ"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Compliance Officer FAQ</div>
                <h2>
                  The questions{" "}
                  <span style={ACCENT}>
                    privacy and compliance officers ask first.
                  </span>
                </h2>
                <p>
                  Direct answers to the BAA, PHI, and clinical governance
                  questions that surface in healthcare vendor evaluation.
                </p>
              </header>

              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>
                      Will OrenGen sign a Business Associate Agreement (BAA)?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenGen Worldwide LLC is BAA-ready and executes Business
                    Associate Agreements as part of standard engagement onboarding
                    with covered entities and other business associates. BAA
                    execution happens before any PHI-touching scope of work
                    begins. The firm operates HIPAA-Enabled Architecture on a SOC
                    2 Type 2 attested platform layer, and maintains a HIPAA
                    Workforce Attestation covering 30 members as of 2026.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How is Protected Health Information (PHI) handled in
                      OrenHealth deployments?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    PHI residency stays under the Counterpart&apos;s control by
                    default. OrenHealth&apos;s architecture supports
                    behind-firewall and private-cloud deployments where PHI does
                    not traverse third-party model training pipelines. Encryption
                    at rest and in transit, role-based access controls,
                    comprehensive audit trail architecture, and minimum-necessary
                    data exposure patterns are deployed standard. PHI flow
                    documentation is produced as part of the deployment scope.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What HIPAA technical safeguards does the architecture
                      support?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    The architecture is aligned to HIPAA Security Rule technical
                    safeguards — access controls including unique user
                    identification and emergency access procedure, audit controls
                    including hardware and software audit trail architecture,
                    integrity controls protecting PHI from improper alteration,
                    person or entity authentication, and transmission security
                    including encryption in transit and at rest. Workforce
                    training and BAA execution support the administrative and
                    organizational safeguards layer.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Can OrenHealth integrate with our existing EHR or EMR
                      system?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenHealth&apos;s Legacy EHR Modernization pillar wraps
                    existing electronic health record, electronic medical record,
                    and practice management systems with AI capability through
                    documented API integration patterns. The firm does not rip and
                    replace existing clinical investment. Common integration
                    patterns cover documentation assistance, prior authorization
                    automation, referral routing, patient portal augmentation, and
                    revenue cycle workflow.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is OrenGen SOC 2 or HITRUST certified directly?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    The platform layer OrenHealth operates on holds SOC 2 Type 2
                    attestation. OrenGen-direct SOC 2 Type 1 is on the 2026
                    roadmap, with HITRUST evaluation following. The firm cites
                    these as roadmap items rather than claimed credentials.
                    Counterparts whose procurement requirements name direct SOC 2
                    or HITRUST certification as a hard gate are informed of the
                    firm&apos;s current posture at the briefing stage so timing
                    expectations are set honestly.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How is research data and clinical trial information handled?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Research data residency stays under the research
                    organization&apos;s control. OrenHealth&apos;s
                    behind-firewall deployment pattern supports clinical trial data
                    that must remain inside the institutional perimeter for
                    regulatory or IRB reasons. EU-US Data Privacy Framework and
                    Swiss-US DPF participation supports international research
                    collaborations. De-identification, limited data set workflows,
                    and minimum-necessary access patterns are part of the standard
                    architecture vocabulary.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>How is patient communication compliance handled?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Patient communication infrastructure is built around HIPAA
                    marketing rules, TCPA consent requirements, and state-level
                    outreach restrictions. Appointment reminders, treatment-related
                    communications, and care coordination messages follow
                    consent-based and treatment-payment-operations boundaries.
                    Marketing communications require explicit authorization. Audit
                    trails of consent capture and message delivery are produced and
                    retained per the organization&apos;s retention schedule.
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
                  Architected for health systems.{" "}
                  <span style={ACCENT}>Briefing is the door.</span>
                </h2>
                <p>
                  Forty-five minutes, founder-direct, no sales layer. We map
                  clinical and compliance requirements against the OrenHealth
                  capability stack and confirm whether the architecture fits
                  before BAA execution or scope confirmation.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="https://api.orengen.io/widget/booking/EvvNIyeXdLksQikeO6en" target="_blank" rel="noopener noreferrer">
                    Open a Capability Briefing
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="/capability-statement"
                  >
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
