import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenHealth Specialty Clinics page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orenhealth-specialty-clinics.html — only presentation/layout
 * changed.
 */
export const metadata: Metadata = {
  title: "OrenHealth Specialty Clinics",
  description:
    "Practice-grade, HIPAA-aligned AI infrastructure and workflow orchestration for specialty clinics, multi-location practice groups, and PE-backed healthcare consolidators.",
  keywords:
    "orenhealth, specialty clinics, HIPAA AI, practice management integration, BAA, MIPS, healthcare AI infrastructure, orengen",
  alternates: { canonical: "/orenhealth/specialty-clinics" },
  openGraph: {
    title: "OrenHealth Specialty Clinics",
    description:
      "Practice-grade, HIPAA-aligned AI infrastructure and workflow orchestration for specialty clinics, multi-location practice groups, and PE-backed healthcare consolidators.",
    url: "https://orengen.io/orenhealth/specialty-clinics",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenHealthSpecialtyClinicsPage() {
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
            aria-label="OrenHealth Specialty Clinics"
          >
            <div className="container">
              <header className="section-head reveal">
                <div className="trust-row" style={{ marginBottom: "20px" }}>
                  <a className="chip" href="/orenhealth">
                    <span>Home</span>{" "}
                    <span>/</span>{" "}
                    <span>Healthcare</span>{" "}
                    <span>/</span>{" "}
                    <span style={ACCENT}>Specialty Clinics</span>
                  </a>
                </div>
                <div className="eyebrow">OrenHealth · Specialty Clinics</div>
                <h1>
                  Practice-grade AI infrastructure for specialty clinics that
                  refuse to rent their{" "}
                  <span className="gradient-word shimmer">
                    patient intelligence
                  </span>
                  .
                </h1>
                <p className="lead">
                  Specialty practices are squeezed between enterprise EHRs that
                  don&apos;t fit a single-specialty workflow and consumer-grade
                  tools that don&apos;t meet HIPAA standards. OrenHealth bridges
                  that gap — practice-management-aware AI infrastructure,
                  BAA-ready deployment, and direct partnership with the practice
                  owner instead of a six-month committee cycle.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://api.orengen.io/booking/og-j39qvisxpas/sc/discovery-meet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open a Practice Briefing
                  </a>
                  <a className="btn btn-secondary" href="/capability-statement">
                    Download Capability Statement
                  </a>
                </div>
                <div className="trust-row" style={{ marginTop: "32px" }}>
                  <span className="chip">HIPAA Architecture</span>
                  <span className="chip">BAA Ready</span>
                  <span className="chip">MIPS-Aware Workflow</span>
                  <span className="chip">Practice-Owner Direct</span>
                </div>
              </header>
            </div>
          </section>

          {/* MANDATE */}
          <section
            className="section alt section-brand-white"
            aria-label="The Specialty Practice Mandate"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Specialty Practice Mandate</div>
                <h2>
                  Built for how independent and multi-location specialty
                  practices actually operate.
                </h2>
                <p>
                  Specialty clinics move fast, decide at the partner level, and
                  live or die by front-desk efficiency, payer mix, and patient
                  communication. OrenHealth ships infrastructure aligned to that
                  operating reality — not enterprise procurement theater.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>HIPAA-Aligned Architecture</h3>
                  <p>
                    PHI handling, encryption-at-rest and in-transit, audit
                    logging, role-based access, and breach notification posture
                    engineered into every deployment from day one — sized for
                    practices, not health systems.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>BAA Execution Ready</h3>
                  <p>
                    Business Associate Agreement framework on file, designed for
                    practice-owner sign-off cycles (typically 5–10 business
                    days) rather than enterprise legal queues.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>MIPS / MACRA Workflow Aware</h3>
                  <p>
                    Quality reporting, promoting interoperability, and
                    improvement activity workflows are first-class design
                    constraints — not afterthoughts bolted onto a generic
                    chatbot.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Practice-Owner Engagement</h3>
                  <p>
                    Direct counterpart access to the founder and senior
                    engineering. No SDR funnel, no enterprise account team.
                    Owner-physician and practice administrator decisions,
                    executed at practice pace.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* PRACTICE MANAGEMENT PLATFORMS STRIP */}
          <section
            className="section section-brand-blue"
            aria-label="Practice Management Platforms"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Practice Management Platforms</div>
                <h2>
                  We integrate around the systems specialty clinics already run.
                </h2>
                <p>
                  Integrations are scoped per engagement against vendor-published
                  APIs and standard healthcare interoperability protocols (HL7,
                  FHIR, SMART on FHIR where supported). We do not replace your
                  PM/EHR — we orchestrate workflow around it.
                </p>
              </header>

              <div
                className="trust-row reveal"
                style={{ justifyContent: "center" }}
              >
                <span className="chip">Tebra (Kareo + PatientPop)</span>
                <span className="chip">AdvancedMD</span>
                <span className="chip">ModMed</span>
                <span className="chip">DrChrono</span>
                <span className="chip">eClinicalWorks</span>
                <span className="chip">Veradigm (Allscripts)</span>
              </div>

              <p
                className="reveal"
                style={{
                  textAlign: "center",
                  marginTop: "28px",
                  color: "var(--og-text-muted)",
                  fontStyle: "italic",
                }}
              >
                Platform names referenced for integration context only. OrenGen
                Worldwide LLC is not affiliated with, endorsed by, or a reseller
                of these vendors. All trademarks are property of their respective
                owners.
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
                <h2>Six pillars engineered for specialty practice operations.</h2>
                <p>
                  Each pillar is deployable as a standalone engagement or
                  composed into a full practice modernization program. Scope, BAA
                  terms, and pricing confirmed during the practice briefing.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">01 / Infrastructure</div>
                  <h3>HIPAA-Aligned AI Infrastructure</h3>
                  <p>
                    Dedicated server tenancy with PHI-segregated storage,
                    encryption at rest and in transit, audit logging, and access
                    controls aligned to HIPAA Security Rule requirements.
                    Deployed for practices that need compliance without a
                    hospital-scale IT budget.
                  </p>
                  <div className="trust-row">
                    <span className="chip">PHI Segregation</span>
                    <span className="chip">BAA Ready</span>
                    <span className="chip">Audit Logging</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">02 / Front Desk</div>
                  <h3>Front-Desk &amp; Scheduling Orchestration</h3>
                  <p>
                    AI-driven workflows for appointment reminders, no-show
                    recovery, recall outreach, intake form delivery, eligibility
                    verification triggers, and prior authorization status
                    tracking — built around your existing scheduling system.
                  </p>
                  <div className="trust-row">
                    <span className="chip">No-Show Recovery</span>
                    <span className="chip">Recall Automation</span>
                    <span className="chip">Intake Workflow</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">03 / Operations</div>
                  <h3>Practice Operations Intelligence</h3>
                  <p>
                    Dashboards and reporting against practice operational data —
                    payer mix, denial patterns, provider productivity, MIPS
                    quality measure progress, patient panel demographics.
                    Operational, not clinical decision support.
                  </p>
                  <div className="trust-row">
                    <span className="chip">MIPS Tracking</span>
                    <span className="chip">Denial Analysis</span>
                    <span className="chip">Provider Productivity</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">04 / Integration</div>
                  <h3>PM/EHR Integration &amp; Workflow Modernization</h3>
                  <p>
                    Integration layer between your practice management system and
                    the workflow tooling your team actually uses — texting,
                    telehealth, patient portal, payment systems. Vendor APIs,
                    HL7, FHIR where supported, scoped per engagement.
                  </p>
                  <div className="trust-row">
                    <span className="chip">PM API Integration</span>
                    <span className="chip">HL7 / FHIR</span>
                    <span className="chip">Workflow Glue</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">05 / Communication</div>
                  <h3>Patient Communication Infrastructure</h3>
                  <p>
                    HIPAA-aligned patient messaging — SMS reminders, two-way
                    text, secure forms, post-visit follow-up sequences, recall
                    and retention campaigns. Scoped to operational and
                    administrative communication, not clinical advice or triage.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Secure SMS</span>
                    <span className="chip">Two-Way Text</span>
                    <span className="chip">Recall Campaigns</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">06 / Advisory</div>
                  <h3>Practice-Owner Strategic Advisory</h3>
                  <p>
                    Fractional CTO and AI strategy engagements for solo
                    owner-physicians, managing partners of multi-physician
                    practices, and administrators of multi-location practice
                    groups. AI roadmap, technology stack rationalization, and
                    operational governance.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Fractional CTO</span>
                    <span className="chip">AI Roadmap</span>
                    <span className="chip">Tech Stack Audit</span>
                  </div>
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
                <h2>How specialty practices actually contract with OrenHealth.</h2>
                <p>
                  Concrete patterns we ship into the specialty market. Every
                  engagement starts with a 30-minute practice briefing to confirm
                  scope, BAA terms, and integration boundaries.
                </p>
              </header>

              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Scenario 01</div>
                  <h3>Direct Practice Owner Engagement</h3>
                  <p>
                    Solo owner-physicians and managing partners engage OrenHealth
                    directly through the briefing process. BAA on file, scope
                    defined in a written Statement of Work, deployment typically
                    within 30–60 days. No enterprise procurement cycle, no
                    committee approval gates.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 02</div>
                  <h3>Front-Desk Automation Pilot</h3>
                  <p>
                    Highest-pain entry point for most practices. Scoped 60–90 day
                    pilot covering appointment reminders, no-show recovery, recall
                    outreach, and intake form delivery. Integrated to your
                    existing PM/scheduling system. Measured against no-show rate
                    and front-desk hours reclaimed.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 03</div>
                  <h3>PM Platform Integration Wrapper</h3>
                  <p>
                    For practices already invested in a PM/EHR but missing
                    connective tissue between systems. We build an integration
                    layer — practice management to telehealth, to patient
                    texting, to portal, to payment — that lets your existing
                    stack actually behave like a coordinated system.
                  </p>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 04</div>
                  <h3>Multi-Location Practice Group Advisory</h3>
                  <p>
                    For MSOs, dental service organizations, and
                    private-equity-backed specialty groups consolidating 5–50
                    locations. Fractional CTO engagement covering AI roadmap,
                    technology stack rationalization across acquired practices,
                    vendor consolidation strategy, and operational governance
                    framework.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            className="section alt section-brand-white"
            aria-label="Practice Administrator FAQ"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Practice Administrator FAQ</div>
                <h2>
                  The questions a practice owner or administrator actually asks.
                </h2>
                <p>
                  Honest answers about compliance posture, integration scope,
                  pricing, and what&apos;s in versus out of scope for OrenHealth
                  at a specialty practice.
                </p>
              </header>

              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>
                      How long does PM/EHR integration actually take, and what
                      does &quot;integration&quot; mean here?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Integration timelines depend on the platform&apos;s API
                    maturity and what your practice has enabled. Cloud-native
                    systems with documented REST APIs (Tebra, AdvancedMD,
                    DrChrono) typically support workflow integration in 2–6 weeks.
                    Older or more restrictive platforms can extend that to 8–12
                    weeks. &quot;Integration&quot; in our context means workflow
                    orchestration around your PM — appointment data flowing to a
                    reminder system, intake form data flowing back to the chart —
                    not replacing or duplicating your PM database. We do not host
                    a parallel patient record. Specific integration scope is
                    confirmed in the Statement of Work after the briefing.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What does the HIPAA + BAA framework look like for a small
                      practice that doesn&apos;t have its own compliance officer?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    We provide a standard Business Associate Agreement template
                    aligned to the HIPAA Privacy and Security Rules, executable
                    directly with the practice owner or managing partner. For
                    practices without internal compliance counsel, we walk through
                    the BAA terms on a briefing call before signature.
                    Architecture-level controls (encryption, access logging, PHI
                    segregation) are documented in a deployment summary you can
                    retain for your own compliance file. Note: we are
                    HIPAA-aligned in architecture and BAA-ready, but we do not
                    currently hold HITRUST certification — full HITRUST is a
                    longer-horizon investment on our roadmap.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How do you handle MIPS quality reporting data and clinical
                      decision support?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenHealth supports MIPS workflow operationally — tracking
                    measure progress, surfacing patients who need intervention to
                    close a quality gap, supporting promoting-interoperability
                    documentation flow. We do not provide clinical decision
                    support, diagnostic recommendations, or treatment guidance.
                    Anything that would qualify as Software-as-Medical-Device
                    under FDA scope is explicitly out of scope; for clinical
                    decision tooling we refer practices to specialty-specific
                    vendors with the appropriate regulatory clearance. Operational
                    quality reporting is in scope; clinical recommendations are
                    not.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What does pricing look like for a solo-physician practice
                      versus a multi-location group?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Pricing is confirmed in the Statement of Work after the
                    practice briefing — we do not publish list pricing because
                    scope, integration complexity, and patient volume vary
                    significantly across specialties. Solo and small practices
                    typically engage on a defined-scope pilot (e.g., front-desk
                    automation) with a fixed implementation fee plus monthly
                    recurring infrastructure fee. Multi-location groups engage on
                    a master agreement with location-level rollout. We do not gate
                    the briefing or capability statement on pricing disclosure.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Can you integrate with the telehealth platform we already
                      use?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    For most major telehealth platforms — Doximity, Doxy.me, Zoom
                    for Healthcare, and EHR-native telehealth modules — we can
                    integrate at the workflow layer (appointment scheduling, link
                    delivery to patients, post-visit follow-up sequencing).
                    Integration depth depends on the platform&apos;s API surface.
                    We don&apos;t host the video session itself or process
                    clinical encounter content. Confirm specific platform
                    compatibility on the practice briefing.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      We&apos;re a private-equity-backed practice group
                      consolidating multiple acquired practices on different
                      EHRs. Can you handle that?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes, with a realistic scoping conversation. Multi-platform
                    consolidations typically start with a fractional CTO advisory
                    engagement to map the current stack across acquired locations,
                    identify near-term workflow consolidation wins versus
                    long-term EHR unification decisions, and build a phased
                    rollout plan. We do not undertake full EHR migration projects
                    — those go to specialized health IT integration firms — but we
                    are well-positioned to handle the workflow orchestration layer
                    that lets a multi-location group operate consistently while
                    individual practices remain on their installed PM/EHR systems.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How specialty-specific can workflows actually be? We&apos;re
                      not a generic primary-care practice.
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Workflow logic is fully customizable per specialty — recall
                    cadences for derm versus ortho versus dental are very
                    different, and we build to your specialty&apos;s operational
                    reality. What we do not do is replace specialty-specific
                    clinical templates inside your EHR (that&apos;s what the EHR
                    vendor&apos;s specialty modules and tools like ModMed are
                    designed for). We orchestrate operational and communication
                    workflow around the clinical record, not inside it. Practices
                    in dermatology, ophthalmology, orthopedics, gastroenterology,
                    dental, behavioral health, women&apos;s health, and physical
                    therapy are within our scoping envelope; highly regulated
                    specialties with unique CMS conditions of participation (e.g.,
                    dialysis, hospice) require additional scoping discussion.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Open a Practice Briefing"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Open a Practice Briefing</div>
                <h2>The fastest path forward is a 30-minute conversation.</h2>
                <p>
                  Practice owners, managing partners, and administrators engage
                  OrenHealth through a 30-minute briefing. Scope, BAA, integration
                  boundaries, and timeline are confirmed in writing before
                  anything ships. No SDR funnel, no enterprise sales cycle —
                  direct counterpart access to the founder.
                </p>
                <div className="cta-row" style={{ justifyContent: "center" }}>
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
                    marginTop: "32px",
                    color: "var(--og-text-muted)",
                  }}
                >
                  OrenGen Worldwide LLC · UEI RX16QFYT6YM5 · CAGE 12XC1 ·
                  Minority-Owned Small Business · HIPAA-Aligned Architecture ·
                  BAA Ready
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
