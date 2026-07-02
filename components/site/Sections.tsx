import type { CSSProperties, ReactNode } from "react";
import { FOUNDER_AVATAR_URL } from "@/lib/brandAssets";
import { CASE_STUDIES, FEATURED_CASE_STUDY_IDS } from "@/lib/caseStudies";
import CaseStudyGrid from "./CaseStudyGrid";
import KpiNumber from "./KpiNumber";

/* ===== Process band — section-specific steps; column count adapts (4 / 5 / 6) ===== */
type ProcStep = { label: string; icon: ReactNode };

function OrengovProcess({ steps, ariaLabel }: { steps: ProcStep[]; ariaLabel: string }) {
  return (
    <div className="orengov-process reveal" aria-label={ariaLabel}>
      <div
        className="orengov-process__track"
        style={{ "--proc-cols": steps.length } as CSSProperties}
      >
        {steps.map((s) => (
          <div className="orengov-process__step" key={s.label}>
            <div className="orengov-process__iconBox" aria-hidden="true">
              <svg viewBox="0 0 24 24">{s.icon}</svg>
            </div>
            <div className="orengov-process__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Engagement — 4 steps mirroring the journey cards (Scope → Blueprint → Deploy → Handover)
const ENGAGEMENT_STEPS: ProcStep[] = [
  { label: "Scope", icon: (<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>) },
  { label: "Blueprint", icon: (<><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></>) },
  { label: "Deploy", icon: (<><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>) },
  { label: "Handover", icon: (<><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-5" /></>) },
];

// Capabilities — 6 nodes = the six competencies, linked into "one operating stack"
const CAPABILITY_STEPS: ProcStep[] = [
  { label: "Infrastructure", icon: (<><rect x="2" y="3" width="20" height="6" rx="2" /><rect x="2" y="15" width="20" height="6" rx="2" /><path d="M6 6h.01" /><path d="M6 18h.01" /></>) },
  { label: "Orchestration", icon: (<><rect x="3" y="3" width="8" height="8" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect x="13" y="13" width="8" height="8" rx="2" /></>) },
  { label: "Governance", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /> },
  { label: "Web & Portal", icon: (<><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>) },
  { label: "AI Comms", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
  { label: "Advisory", icon: (<><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></>) },
];

/* ===== Data ===== */
const COSTS = [
  { num: "$10.22M", label: "Average U.S. Data Breach Cost", p: "U.S. breach costs reached record highs, making uncontrolled AI usage, weak access controls, and fragmented environments board-level financial risk." },
  { num: "$12.9M", label: "Lost Annually to Poor Data Quality", p: "Bad data silently damages analytics, automation, customer experience, compliance workflows, and AI output quality." },
  { num: "Up to 80%", label: "IT Budget Trapped in Maintenance", p: "Legacy system maintenance can consume modernization capital and stall the move toward governed AI-native operations." },
];

const KPIS = [
  { to: 30, decimals: 0, prefix: "", numSuffix: "", sup: "+", label: "Virtual Workforce Buildouts", p: "Documented AI-augmented operations teams architected, deployed, and operationalized end-to-end across commercial and regulated environments." },
  { to: 500, decimals: 0, prefix: "", numSuffix: "", sup: "%", label: "Documented YoY Growth", p: "Verified year-over-year revenue growth from enterprise transformation and automation engagements." },
  { to: 13, decimals: 0, prefix: "$", numSuffix: "M", sup: "+", label: "Operational Savings", p: "Documented transformation and cost-reduction outcomes from enterprise operations modernization." },
  { to: 20, decimals: 0, prefix: "", numSuffix: "", sup: "+", label: "Enterprise Deployments", p: "AI, automation, infrastructure, web, workflow, and operating-system buildouts across commercial and regulated environments." },
];

const JOURNEY = [
  { step: "Step 01", h3: "Strategic Scope Audit", p: "Map SaaS sprawl, data exposure, automation gaps, security obligations, and executive outcomes.", meta: "Output: Scope Map" },
  { step: "Step 02", h3: "Sovereign Blueprint", p: "Design Claude topology, workflow diagrams, RAG structures, access controls, and governance lanes.", meta: "Output: Architecture Blueprint" },
  { step: "Step 03", h3: "Governed Deployment", p: "Deploy workflows, AI operating layers, intake systems, reporting surfaces, and controlled handoffs.", meta: "Output: Deployment Plan" },
  { step: "Step 04", h3: "Asset Handover", p: "Transfer documentation, operating procedures, governance evidence, and ownership-ready assets.", meta: "Output: Ownership Handoff" },
];

const SECTORS = [
  { step: "01 · OrenGov / Public Sector", h3: "Federal, state, local, education, and defense AI infrastructure.", p: "NIST-oriented architecture and procurement-aware delivery for agencies and institutional environments.", ul: ["One company capability statement", "SAM.gov and CAGE credibility layer", "Public-sector routing"], trust: "SAM.gov · CAGE 12XC1 · NIST 800-53", href: "/orengov", link: "View OrenGov" },
  { step: "02 · OrenHealth / Healthcare", h3: "HIPAA-trained AI workflows for healthcare and life sciences.", p: "Governed automation for hospitals, specialty clinics, research operations, and administrative lift.", ul: ["Healthcare intake", "Clinic operations support", "HIPAA-trained delivery awareness"], trust: "HIPAA Trained · Healthcare AI Path", href: "/orenhealth", link: "View OrenHealth" },
  { step: "03 · OrenLegal / Legal", h3: "AI-enabled legal operations, intake, document routing, and compliance workflows.", p: "Structured systems for law firms, legal support operators, compliance teams, and contract-heavy organizations.", ul: ["Legal intake workflows", "Document and case routing", "Contract and compliance support"], trust: "Legal ops · Contract workflow · Compliance support", href: "/orenlegal", link: "View OrenLegal" },
  { step: "04 · Enterprise", h3: "Owned operations infrastructure for growth-stage and mid-market operators.", p: "Replace fragmented tools with a governed AI operating layer that consolidates workflows and data surfaces.", ul: ["Workflow orchestration", "Automation modernization", "Executive operating dashboards"], trust: "No-rent methodology · Owned systems", href: "/pricing#orenconsulting", link: "View Consulting" },
  { step: "05 · OrenNexus / Platform", h3: "Accelerated enterprise operating capability.", p: "Structured operations layer for CRM, content, automation, funnels, knowledge systems, and AI delivery.", ul: ["OrenNexus", "OrenAgents", "OrenAutomations"], trust: "Platform stack · Enterprise routing", href: "/orennexus", link: "View OrenNexus" },
];

const CAPS = [
  { num: "01", h3: "Sovereign AI Infrastructure", p: "Hosted and self-hosted AI environments, Claude-first patterns, RAG systems, model workflow control, and enterprise-owned intelligence architecture." },
  { num: "02", h3: "Workflow Orchestration", p: "Enterprise orchestration, operational logic, approval flows, API integration, external platform sync, and handoff documentation." },
  { num: "03", h3: "Governance and Compliance", p: "NIST-aligned controls, HIPAA-ready posture, AI communication consent paths, procurement proof, and executive reporting." },
  { num: "04", h3: "Web and Portal Architecture", p: "High-conversion websites, knowledge portals, intake surfaces, client command centers, and structured enterprise paths." },
  { num: "05", h3: "AI Communications", p: "Voice agents, AI employees, multilingual messaging, assisted intake, and automated support pipelines." },
  { num: "06", h3: "Executive Consulting", p: "Fractional CAIO, AI strategy, operating model design, automation governance, and implementation leadership." },
];

const NODES = [
  { step: "Phase 01", h3: "Discovery", p: "Operational audit, risk mapping, data surface review, and executive outcome definition.", meta: ["Input: Operational Audit", "Frame: NIST AI RMF"] },
  { step: "Phase 02", h3: "Architecture", p: "Claude topology, orchestration plan, RAG schema, access rules, and governance overlay.", meta: ["Stack: Claude · MCP · RAG · Multi-System AI", "Controls: NIST 800-53"] },
  { step: "Phase 03", h3: "Deployment", p: "Workflow buildout, system integration, intake routing, reporting surfaces, and QA checkpoints.", meta: ["Build: Automation · AI Agents", "Output: Operational Layer"] },
  { step: "Phase 04", h3: "Handoff", p: "Documentation, playbooks, governance evidence, training, and ownership transfer.", meta: ["Asset: Owned System", "Mode: Long-term Governance"] },
];

const FOUNDER_STATS = [
  { num: "20", sup: "+", label: "Years Executive Leadership" },
  { num: "40", sup: "", label: "Years Sales Experience" },
  { num: "$13M", sup: "+", label: "Operational Savings" },
  { num: "500", sup: "%", label: "Documented Growth" },
];

const CRED_TIERS = [
  { step: "Tier 01", h3: "Anthropic / Claude Architecture", p: "Completed core Claude ecosystem training across agent skills, MCP, and API implementation.", note: "Status: Claude Certified Architect exam in progress.", items: ["AI Fluency: Framework & Foundations", "Claude 101", "Introduction to Claude Cowork", "Introduction to Subagents", "Introduction to Agent Skills", "Claude Code in Action", "Introduction to Model Context Protocol", "Claude with the Anthropic API", "Claude Architect exam scheduled (in progress)"] },
  { step: "Tier 02", h3: "Governance, Security, Privacy", p: "Controls and risk-management proof supporting regulated AI posture.", note: "", items: ["NIST SP 800-53 Risk Management Framework", "NIST SP 800-53 Security and Privacy Controls", "NIST SP 800-53A Assessing Controls", "NIST SP 800-53B Control Baselines", "Securiti AI Security & Governance", "Securiti PrivacyOps Academy Certified", "HIPAA Compliance Training Program"] },
  { step: "Tier 03", h3: "Cybersecurity and ISC2 CC Readiness", p: "ISC2 course proof across all five domains and final assessment.", note: "", items: ["CC Course Pre-assessment", "CC Domain 1: Security Principles", "CC Domain 2: Incident Response, Business Continuity and Disaster Recovery Concepts", "CC Domain 3: Access Control Concepts", "CC Domain 4: Network Security", "CC Domain 5: Security Operations", "CC Course Conclusion & Final Assessment"] },
  { step: "Tier 04", h3: "Business, GovCon, Design, Legal", p: "Commercial authority, contracting literacy, legal foundation, and design thinking.", note: "", items: ["IBM AI Fundamentals", "IBM Enterprise Design Thinking Practitioner", "Federal Research", "Federal Regulations", "Federal Bidding", "Federal Proposal Writing", "HubSpot Inbound Marketing Certified", "Yale American Contract Law I", "Yale American Contract Law II"] },
];

const SIGNAL_CARDS = [
  { step: "Category 01", h4: "AI Infrastructure", p: "Hosted, self-hosted, Claude-first, multi-model architecture, RAG, MCP, and deployment patterns." },
  { step: "Category 02", h4: "Governance & Security", p: "NIST, HIPAA-trained workflows, privacy, compliance, access control, and executive risk oversight." },
  { step: "Category 03", h4: "Public Sector & Legal", p: "Procurement, legal operations, capability statements, regulated workflows, and documentation systems." },
];

const BLOG_PREVIEWS = [
  {
    meta: "Methodology · 7 min read",
    h3: "The No-Rent Methodology Explained",
    p: "Why per-seat SaaS dependency is the silent margin killer — and how to convert subscription spend into owned operational assets.",
    href: "/blog",
  },
  {
    meta: "Healthcare · 8 min read",
    h3: "HIPAA-Enabled AI Without Third-Party Exposure",
    p: "Self-hosted Claude environments with executed BAA chains — the credible architecture for clinical AI workflows.",
    href: "/blog",
  },
  {
    meta: "Voice · 6 min read",
    h3: "Buy-Lingual at Scale",
    p: "Lessons from 30+ workforce buildouts: what works, what fails, and what to insist on in your voice stack.",
    href: "/blog",
  },
];

const FEATURED_CASE_STUDIES = CASE_STUDIES.filter((s) =>
  (FEATURED_CASE_STUDY_IDS as readonly string[]).includes(s.id),
);

const FAQS = [
  { q: "What does OrenGen Worldwide do?", a: "OrenGen Worldwide architects hosted and self-hosted AI-enabled ecosystems across Claude-first and multi-model environments for public sector, healthcare, legal, and enterprise operators that need governed automation, data control, and implementation speed." },
  { q: "What does Claude-first, multi-system fluent mean?", a: "It means Claude is a preferred reasoning and agentic workflow layer, while OrenGen remains fluent across OpenAI, Gemini, DeepSeek, Perplexity, OpenRouter, MCP, n8n, RAG, API automation, and self-hosted infrastructure." },
  { q: "Does OrenGen only build self-hosted systems?", a: "No. OrenGen designs both hosted and self-hosted AI-enabled ecosystems. The correct structure depends on the client's risk profile, budget, data-residency needs, compliance expectations, and implementation timeline." },
  { q: "Which sectors does OrenGen serve?", a: "Primary focus areas include OrenGov / Public Sector, OrenHealth / Healthcare, OrenLegal / Legal, mid-market enterprise, automation-heavy operators, and platform-based organizations." },
  { q: "What is OrenGov?", a: "OrenGov is the public-sector path for federal, state, local, education, and defense-facing AI infrastructure, automation, web, and workflow modernization." },
  { q: "What is OrenHealth?", a: "OrenHealth is the healthcare path for HIPAA-trained AI workflow modernization, administrative automation, intake systems, and healthcare operations support." },
  { q: "What is OrenLegal?", a: "OrenLegal supports legal operations, intake, document routing, compliance workflows, case-adjacent automation, contract-heavy organizations, and legal support teams." },
  { q: "Does OrenGen replace existing CRM and automation tools?", a: "Not automatically. OrenGen can integrate with existing CRM, forms, scheduling, email, and automation tools or replace fragmented systems when ownership, security, cost, or workflow control requires it." },
  { q: "Can OrenGen work with existing integrations?", a: "Yes. OrenGen can work with existing client systems through API sync, webhook routing, form intake, scheduling logic, automation flows, and deployment pipelines without publicly exposing vendor dependencies." },
  { q: "What is the difference between hosted and self-hosted AI infrastructure?", a: "Hosted infrastructure is managed for speed and operational simplicity. Self-hosted infrastructure gives the organization greater control over deployment, ownership, data residency, and system customization." },
  { q: "Does OrenGen provide one capability statement?", a: "Yes. OrenGen should maintain one consolidated company capability statement that can be adapted by conversation, not multiple competing capability-statement paths." },
  { q: "How do prospects start?", a: "Prospects start by booking an architecture brief, selecting all relevant enterprise paths, and submitting enough context for routing, qualification, and technical scoping." },
];

const PATHS = [
  "OrenGov / Public Sector", "OrenGov / State & Local", "OrenGov / Education", "OrenGov / Defense",
  "OrenHealth / Healthcare", "OrenHealth / Hospitals", "OrenHealth / Specialty Clinics", "OrenHealth / Research",
  "OrenLegal / Legal Operations", "OrenAgents / Voice Agents", "OrenAgents / AI Employees",
  "OrenAutomations / Workflow Automation", "OrenWeb / Portal Architecture", "OrenSocial / Authority Systems",
  "OrenNexus / Platform Architecture", "OrenConsulting / Executive Strategy",
];

export default function Sections() {
  return (
    <>
      {/* Cost of inertia */}
      <section className="section alt og-cost-section section-brand-white" id="cost-of-inertia" aria-label="The real cost of tech inertia">
        <div className="container">
          <header className="section-head reveal">
            <div className="eyebrow">The Real Cost of Tech Inertia</div>
            <h2>Stop bleeding enterprise capital on outdated legacy systems.</h2>
            <p>Architecting hosted and self-hosted AI-enabled environments across Claude-first and multi-system stacks. We help public sector, healthcare, legal, and high-stakes operators reduce technical leaks, protect data residency, and accelerate implementation velocity.</p>
          </header>
          <div className="cost-grid reveal">
            {COSTS.map((c) => (
              <article className="cost-card" key={c.label}>
                <div className="cost-num">{c.num}</div>
                <div className="label">{c.label}</div>
                <p>{c.p}</p>
              </article>
            ))}
          </div>
          <div className="cta-row reveal">
            <a className="btn btn-primary" href="#contact">Book an Architecture Brief</a>
            <a className="btn btn-secondary" href="#architecture">Explore Components →</a>
          </div>
        </div>
      </section>

      {/* Proof metrics */}
      <section className="section og-proof-metrics section-brand-blue" aria-label="Operational performance signals">
        <div className="container">
          <div className="kpi-grid reveal">
            {KPIS.map((k) => (
              <div className="kpi" key={k.label}>
                <div className="num">
                  <KpiNumber to={k.to} decimals={k.decimals} prefix={k.prefix} suffix={k.numSuffix} />
                  <span>{k.sup}</span>
                </div>
                <div className="label">{k.label}</div>
                <p>{k.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documented outcomes */}
      <section
        className="section alt section-brand-white"
        id="documented-outcomes"
        aria-label="Documented client outcomes"
      >
        <div className="container">
          <header className="section-head reveal">
            <div className="eyebrow">Documented Outcomes</div>
            <h2>Engineering-grade results — not consulting deliverables.</h2>
            <p>
              Representative engagements with quantified outcomes. Counterpart identities
              redacted; full architectural detail available under NDA during discovery.
            </p>
          </header>
          <CaseStudyGrid studies={FEATURED_CASE_STUDIES} compact />
          <div className="cta-row reveal">
            <a className="btn btn-primary" href="/case-studies">
              View all case studies
            </a>
            <a className="btn btn-secondary" href="#contact">
              Request a comparable briefing
            </a>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="section section-brand-white" id="engagement">
        <div className="container">
          <header className="section-head reveal">
            <div className="eyebrow">Engagement Path</div>
            <h2>From executive scope to owned intelligence.</h2>
            <p>Built for leaders who need strategy and implementation in one controlled motion. Every phase produces usable artifacts, deployment clarity, and governance continuity.</p>
          </header>
          <OrengovProcess steps={ENGAGEMENT_STEPS} ariaLabel="Engagement delivery steps" />
          <div className="journey-grid reveal">
            {JOURNEY.map((j) => (
              <article className="journey-card" key={j.step}>
                <div className="step">{j.step}</div>
                <h3>{j.h3}</h3>
                <p>{j.p}</p>
                <div className="journey-meta">{j.meta}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section alt section-brand-blue" id="sectors">
        <div className="container">
          <header className="section-head reveal">
            <div className="eyebrow">Target Domains</div>
            <h2>Built for industries where weak AI governance becomes enterprise risk.</h2>
            <p>OrenGen aligns delivery paths to public sector, healthcare, legal, mid-market enterprise, and productized operating environments.</p>
          </header>
          <div className="sector-grid sector-grid-five reveal">
            {SECTORS.map((s) => (
              <article className="sector-card" key={s.step}>
                <div className="step">{s.step}</div>
                <h3>{s.h3}</h3>
                <p>{s.p}</p>
                <ul>{s.ul.map((li) => <li key={li}>{li}</li>)}</ul>
                <div className="sector-trust">{s.trust}</div>
                <a className="card-link" href={s.href}>{s.link} →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section-brand-white" id="capabilities">
        <div className="container">
          <header className="section-head center reveal">
            <div className="eyebrow">What We Architect</div>
            <h2>Six competencies.<br />One operating stack.</h2>
            <p>Strategy, controls, automation, AI infrastructure, communications, and executive implementation wrapped into one delivery model.</p>
          </header>
          <OrengovProcess steps={CAPABILITY_STEPS} ariaLabel="Six competencies, one operating stack" />
          <div className="cap-list reveal">
            {CAPS.map((c) => (
              <article className="cap" key={c.num}>
                <div className="cap-num">{c.num}</div>
                <div>
                  <h3>{c.h3}</h3>
                  <p>{c.p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section alt section-brand-blue" id="architecture">
        <div className="container">
          <header className="section-head reveal">
            <div className="eyebrow">The Sovereign Stack</div>
            <h2>Architecture that moves from boardroom strategy to executable infrastructure.</h2>
            <p>Each deployment runs through a governed lifecycle: discover, architect, deploy, and hand over.</p>
          </header>
          <div className="stack-canvas reveal">
            <div className="node-grid">
              {NODES.map((n) => (
                <article className="node" key={n.step}>
                  <div className="node-head">
                    <div className="step">{n.step}</div>
                    <span className="node-state" />
                  </div>
                  <h3>{n.h3}</h3>
                  <p>{n.p}</p>
                  <div className="node-meta">
                    {n.meta[0]}
                    <br />
                    {n.meta[1]}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section founder-strip section-brand-white" id="founder" aria-label="Founder leadership">
        <div className="container">
          <div className="founder-strip-card reveal">
            <div className="founder-strip-layout">
              <div className="founder-strip-profile reveal">
                <img className="founder-strip-avatar" src={FOUNDER_AVATAR_URL} alt="Andre Mandel portrait" loading="lazy" decoding="async" />
                <small>Founder-led execution across enterprise AI infrastructure, governance, and implementation architecture.</small>
              </div>
              <div>
                <div className="founder-strip-eyebrow">Leadership Snapshot</div>
                <h2 className="founder-strip-name">Andre Mandel</h2>
                <p className="founder-strip-title">Founder-Led Global Chief AI Officer / AI Infrastructure &amp; Governance Executive</p>
                <p className="founder-strip-note">Founder-led strategy, architecture, and implementation oversight across enterprise AI infrastructure, governance design, and production deployment pathways.</p>
                <div className="founder-strip-stats reveal-stagger">
                  {FOUNDER_STATS.map((st) => (
                    <div className="founder-strip-stat" key={st.label}>
                      <div className="num">{st.num}<span>{st.sup}</span></div>
                      <div className="label">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section section-brand-blue" id="credentials">
        <div className="container">
          <header className="section-head center reveal">
            <div className="eyebrow">Verified Authority Stack</div>
            <h2>Current 2026 proof portfolio.</h2>
            <p>Credential language stays precise: completed training is listed separately from certifications that are earned and verified.</p>
          </header>
          <div className="cred-shell reveal">
            {CRED_TIERS.map((t) => (
              <article className="cred-tier" key={t.step}>
                <div className="tier-title">
                  <div className="step">{t.step}</div>
                  <h3>{t.h3}</h3>
                  <p>{t.p}</p>
                  {t.note ? <div className="cred-note">{t.note}</div> : null}
                </div>
                <div className="cred-grid">
                  {t.items.map((it) => <div className="cred-item" key={it}>{it}</div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OrenSignal */}
      <section className="section og-signal-section section-brand-white" id="orensignal" aria-label="OrenSignal editorial intelligence">
        <div className="container">
          <header className="section-head reveal">
            <div className="eyebrow">OrenSignal</div>
            <h2>OrenSignal: practical newsletter insights for enterprise AI leaders.</h2>
            <p>OrenSignal is OrenGen's public newsletter and intelligence publication covering AI infrastructure, governance, security, and modernization strategy for high-stakes teams.</p>
          </header>
          <div className="signal-grid reveal">
            <article className="signal-feature">
              <div className="step">Featured Newsletter Edition</div>
              <h3>Where legacy spend leaks enterprise velocity.</h3>
              <p>A leadership brief on hidden operating costs, governance drag, and when to modernize hosted versus self-hosted AI infrastructure.</p>
              <a className="card-link" href="/blog">Read OrenSignal →</a>
            </article>
            {SIGNAL_CARDS.map((s) => (
              <article className="signal-card" key={s.step}>
                <div className="step">{s.step}</div>
                <h4>{s.h4}</h4>
                <p>{s.p}</p>
              </article>
            ))}
          </div>
          <div className="cta-row reveal">
            <a className="btn btn-secondary" href="/blog">Browse OrenSignal archive</a>
            <a className="btn btn-primary" href="#contact">Subscribe / Request briefing</a>
          </div>
        </div>
      </section>

      {/* Latest insights */}
      <section className="section section-brand-blue" id="latest-insights" aria-label="Latest from OrenSignal">
        <div className="container">
          <header className="section-head reveal">
            <div className="eyebrow">Latest Insights</div>
            <h2>Recent OrenSignal previews on AI infrastructure and governance.</h2>
            <p>
              Operator-grade essays from the OrenGen Field Brief — grounded in active
              engagements across infrastructure, GovCon, healthcare, and voice deployments.
            </p>
          </header>
          <div className="blog-preview-grid reveal">
            {BLOG_PREVIEWS.map((b) => (
              <article className="blog-preview-card" key={b.h3}>
                <div className="blog-preview-meta">{b.meta}</div>
                <h3>{b.h3}</h3>
                <p>{b.p}</p>
                <a href={b.href}>Read on OrenSignal →</a>
              </article>
            ))}
          </div>
          <div className="cta-row reveal">
            <a className="btn btn-secondary" href="/blog">View all OrenSignal articles</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section alt section-brand-white" id="faq">
        <div className="container">
          <header className="section-head center reveal">
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2>Direct answers for buyers, search engines, and AI answer engines.</h2>
            <p>Every major page should carry at least 10 focused FAQs. This homepage now includes 12.</p>
          </header>
          <div className="faq reveal">
            {FAQS.map((f, i) => (
              <div className={i === 0 ? "faq-item open" : "faq-item"} key={f.q}>
                <button className="faq-q" type="button">
                  <span>{f.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-brand-blue" id="contact">
        <div className="container">
          <div className="contact-panel reveal">
            <div>
              <div className="eyebrow">Executive Briefing</div>
              <h2>Start with the architecture brief.</h2>
              <p>Select every path that applies. We route the conversation by brand line, risk profile, integration need, and deployment model.</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="mailto:sales@orengen.io">Email Sales</a>
                <a className="btn btn-secondary" href="tel:+18336736436">Call 833-ORENGEN</a>
              </div>
            </div>
            <div className="briefing-card" aria-label="Briefing intake form">
              <form action="/api/intake-sync" method="post">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Full name" autoComplete="name" required />
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="name@company.com" autoComplete="email" required />
                <fieldset className="path-checks">
                  <legend>Enterprise Paths — Check all that apply</legend>
                  {PATHS.map((path) => (
                    <label key={path}>
                      <input type="checkbox" name="paths[]" value={path} /> <span>{path}</span>
                    </label>
                  ))}
                </fieldset>
                <label htmlFor="message">Brief</label>
                <textarea id="message" name="message" placeholder="What system are we architecting?" required />
                <button className="btn btn-primary" type="submit">Request Briefing</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
