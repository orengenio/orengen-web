import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenAgents "Better Together" Package page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orenagents-bundle.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "OrenAgents Better Together | Voice + Employees Unified",
  description:
    "Bundle Buy-Lingual Voice AI and AI Digital Employees into one revenue-recovery system. Launch, Growth, and Scale bundles from $297/mo.",
  keywords:
    "orenagents bundle, better together, voice ai, ai employees, OrenGen, revenue recovery",
  alternates: { canonical: "/orenagents/better-together-package" },
  openGraph: {
    title: "OrenAgents Better Together | Voice + Employees Unified",
    description:
      "Bundle Voice AI and AI Employees into one always-on revenue-recovery system. Launch from $297/mo.",
    url: "https://orengen.io/orenagents-bundle",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenAgentsBetterTogetherPage() {
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
            aria-label="OrenAgents Better Together hero"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Better Together Package</div>
                <h1>
                  Bundle Voice AI + AI Employees{" "}
                  <span className="gradient-word shimmer">
                    Into One Revenue-Recovery System.
                  </span>
                </h1>
                <p className="lead">
                  Stop paying humans to miss calls, forget follow-ups, delay
                  admin work, and leak opportunities. OrenAgents combines{" "}
                  <strong>Buy-Lingual&trade; Voice Agents</strong> and{" "}
                  <strong>Autonomous Digital Employees</strong> into one
                  always-on operating layer that answers, qualifies, books,
                  follows up, updates the CRM, and keeps revenue moving.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#pricing">
                    See Bundle Pricing
                  </a>
                  <a className="btn btn-secondary" href="#REPLACE-WITH-YOUR-URL">
                    Activate Growth Bundle
                  </a>
                </div>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">Voice + Employees unified</span>
                  <span className="chip">100+ world languages</span>
                  <span className="chip">From $297/mo</span>
                  <span className="chip">Self-serve onboarding</span>
                </div>
              </header>
            </div>
          </section>

          {/* CAPABILITIES */}
          <section
            className="section alt section-brand-white"
            aria-label="Unified capabilities"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Why Better Together Wins</div>
                <h2>One Orchestrated Workforce. Every Channel Covered.</h2>
                <p className="lead">
                  Voice alone cannot run your back office. Employees alone cannot
                  answer every call. The bundle deploys both as a single
                  revenue-recovery engine &mdash; no silos, no handoff gaps, no
                  leaked opportunities.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div
                    aria-hidden="true"
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: 1,
                      marginBottom: "10px",
                    }}
                  >
                    &#x1F4DE;
                  </div>
                  <h3>Real-Time Voice Coverage</h3>
                  <p>
                    Buy-Lingual&trade; agents answer inbound calls, run outbound
                    follow-up, qualify mid-conversation, and book appointments
                    &mdash; 24/7, in 100+ languages.
                  </p>
                </article>
                <article className="sector-card">
                  <div
                    aria-hidden="true"
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: 1,
                      marginBottom: "10px",
                    }}
                  >
                    &#x1F916;
                  </div>
                  <h3>Async Workforce Execution</h3>
                  <p>
                    AI employees handle chat, SMS, CRM updates, task automation,
                    and multi-step workflows while your voice agents keep the
                    front line covered.
                  </p>
                </article>
                <article className="sector-card">
                  <div
                    aria-hidden="true"
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: 1,
                      marginBottom: "10px",
                    }}
                  >
                    &#x1F517;
                  </div>
                  <h3>Seamless Handoffs</h3>
                  <p>
                    A qualified call becomes an instant CRM record, SMS
                    follow-up, and scheduled task &mdash; orchestrated
                    automatically across both pillars.
                  </p>
                </article>
                <article className="sector-card">
                  <div
                    aria-hidden="true"
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: 1,
                      marginBottom: "10px",
                    }}
                  >
                    &#x1F4CA;
                  </div>
                  <h3>Pipeline Intelligence</h3>
                  <p>
                    Every interaction logged, scored, and routed. Your sales team
                    sees warm leads &mdash; not voicemail, not stale forms, not
                    admin backlog.
                  </p>
                </article>
                <article className="sector-card">
                  <div
                    aria-hidden="true"
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: 1,
                      marginBottom: "10px",
                    }}
                  >
                    &#x26A1;
                  </div>
                  <h3>Missed-Call Recovery</h3>
                  <p>
                    When a call goes unanswered, the system triggers recovery
                    sequences &mdash; outbound voice, SMS, and CRM tasks &mdash;
                    before the lead goes cold.
                  </p>
                </article>
                <article className="sector-card">
                  <div
                    aria-hidden="true"
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: 1,
                      marginBottom: "10px",
                    }}
                  >
                    &#x1F310;
                  </div>
                  <h3>Global-Ready Operations</h3>
                  <p>
                    Premium bundles support multilingual voice and async coverage
                    so your brand operates like an enterprise &mdash; without
                    enterprise headcount.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* PAIN */}
          <section
            className="section section-brand-blue"
            aria-label="Revenue leakage"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Cost of Fragmented Coverage</div>
                <h2>
                  Six research-backed reasons standalone tools leak revenue every
                  day.
                </h2>
                <p className="lead">
                  Voice-only and chat-only deployments each solve half the
                  problem. The bundle closes the gap &mdash; permanently.
                </p>
              </header>
              <div className="kpi-grid reveal">
                <div className="kpi">
                  <div className="label">Lost Revenue</div>
                  <div className="num">
                    $75<span>B</span>
                  </div>
                  <h3>Annual revenue lost to poor customer service in the US alone.</h3>
                  <p>
                    Missed calls, slow follow-up, and admin friction compound into
                    billions in preventable leakage. The bundle answers, follows
                    up, and executes &mdash; simultaneously.
                  </p>
                  <p>Source: NewVoiceMedia / Serenova research</p>
                </div>
                <div className="kpi">
                  <div className="label">First-Responder Wins</div>
                  <div className="num">
                    78<span>%</span>
                  </div>
                  <h3>Of buyers purchase from the first company that responds.</h3>
                  <p>
                    Human teams average 47-hour response times. OrenAgents
                    responds in zero seconds on voice and instant async on every
                    other channel.
                  </p>
                  <p>Source: Lead Connect / InsideSales</p>
                </div>
                <div className="kpi">
                  <div className="label">Hold Abandonment</div>
                  <div className="num">
                    67<span>%</span>
                  </div>
                  <h3>Of callers hang up after waiting more than 2 minutes.</h3>
                  <p>
                    AI voice agents answer instantly. AI employees capture and
                    recover the ones who would have bounced to a form or
                    competitor.
                  </p>
                  <p>Source: Velaro / American Express</p>
                </div>
                <div className="kpi">
                  <div className="label">Admin Tax</div>
                  <div className="num">
                    64<span>%</span>
                  </div>
                  <h3>Of a sales rep&apos;s day is spent on non-selling work.</h3>
                  <p>
                    CRM logging, scheduling, qualification, follow-ups &mdash; the
                    exact work AI employees were built to absorb while voice keeps
                    calls covered.
                  </p>
                  <p>Source: Salesforce State of Sales</p>
                </div>
                <div className="kpi">
                  <div className="label">Form Abandonment</div>
                  <div className="num">
                    81<span>%</span>
                  </div>
                  <h3>Of web visitors abandon forms before submission.</h3>
                  <p>
                    Voice + chat + SMS capture intent inline. No forms. No
                    friction. No waiting for a human to notice the lead arrived.
                  </p>
                  <p>Source: Baymard Institute</p>
                </div>
                <div className="kpi">
                  <div className="label">Tool Sprawl</div>
                  <div className="num">
                    63<span>%</span>
                  </div>
                  <h3>Of automation projects stall under maintenance load.</h3>
                  <p>
                    Fragmented point solutions die in ops. One orchestrated bundle
                    replaces the patchwork &mdash; voice, async, CRM, and
                    follow-up in one deployment.
                  </p>
                  <p>Source: McKinsey Business Process Automation</p>
                </div>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section
            className="section alt section-brand-white"
            id="pricing"
            aria-label="Bundle pricing tiers"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Recommended Bundle Pricing</div>
                <h2>Choose Your Bundle. Deploy Your Workforce.</h2>
                <p className="lead">
                  Voice + Employees unified in one deployment. Annual billing
                  saves 17%.
                </p>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip">Monthly</span>
                  <span className="chip">
                    Annual <span style={ACCENT}>Save up to $2,567</span>
                  </span>
                </div>
              </header>
              <div className="cost-grid reveal">
                {/* Launch Bundle */}
                <article className="sector-card">
                  <div className="step">Launch Bundle</div>
                  <h3>
                    $297<span style={ACCENT}>/mo</span>
                  </h3>
                  <div className="sector-trust">
                    <span style={ACCENT}>$997 setup</span>
                  </div>
                  <p>
                    For businesses ready to stop missing calls, leads, and basic
                    admin work.
                  </p>
                  <ul>
                    <li>AI Voice Agent</li>
                    <li>AI Employee</li>
                    <li>Inbound call handling</li>
                    <li>Basic outbound follow-up</li>
                    <li>Appointment booking</li>
                    <li>CRM notes and task updates</li>
                    <li>Lead capture and routing</li>
                    <li>Basic workflow setup</li>
                    <li>Standard onboarding</li>
                  </ul>
                  <a className="card-link" href="#REPLACE-WITH-YOUR-URL">
                    Activate Launch Bundle →
                  </a>
                </article>

                {/* Growth Bundle */}
                <article className="sector-card">
                  <div className="step">Most Popular</div>
                  <h3>Growth Bundle</h3>
                  <div className="num" style={{ marginBottom: "14px" }}>
                    $597<span style={ACCENT}>/mo</span>
                  </div>
                  <div className="sector-trust">
                    <span style={ACCENT}>$1,997 setup</span>
                  </div>
                  <p>
                    For growing businesses that need every lead answered, followed
                    up with, qualified, booked, and tracked.
                  </p>
                  <ul>
                    <li>
                      <strong>Everything in Launch</strong>
                    </li>
                    <li>Advanced AI Voice Agent</li>
                    <li>Advanced AI Employee</li>
                    <li>Lead qualification</li>
                    <li>Missed-call recovery</li>
                    <li>Multi-step follow-up</li>
                    <li>CRM pipeline updates</li>
                    <li>Appointment reminders</li>
                    <li>Admin task automation</li>
                    <li>Sales/support workflow setup</li>
                    <li>Priority onboarding</li>
                  </ul>
                  <a className="card-link" href="#REPLACE-WITH-YOUR-URL">
                    Activate Growth Bundle →
                  </a>
                </article>

                {/* Scale Bundle */}
                <article className="sector-card">
                  <div className="step">Best Value</div>
                  <h3>Scale Bundle</h3>
                  <div className="num" style={{ marginBottom: "14px" }}>
                    $1,297<span style={ACCENT}>/mo</span>
                  </div>
                  <div className="sector-trust">
                    <span style={ACCENT}>$3,997 setup</span>
                  </div>
                  <p>
                    For serious operators that want an AI-powered front office,
                    sales desk, and admin layer.
                  </p>
                  <ul>
                    <li>
                      <strong>Everything in Growth</strong>
                    </li>
                    <li>Premium AI Voice Agent</li>
                    <li>Premium AI Employee Workforce</li>
                    <li>Advanced outbound campaigns</li>
                    <li>Multi-language support</li>
                    <li>Advanced CRM automation</li>
                    <li>Lead routing and escalation</li>
                    <li>Reporting and performance review</li>
                    <li>Custom workflow architecture</li>
                    <li>Dedicated launch support</li>
                    <li>Priority optimization</li>
                  </ul>
                  <a className="card-link" href="#REPLACE-WITH-YOUR-URL">
                    Activate Scale Bundle →
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* AUTHORITY */}
          <section
            className="section section-brand-blue"
            aria-label="Authority and credentials"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Architected By</div>
                <h2>
                  An <span style={ACCENT}>NIST-Aligned</span>,{" "}
                  <span style={ACCENT}>SAM.gov-Registered</span> Firm
                </h2>
              </header>
              <div
                className="trust-row reveal"
                style={{ justifyContent: "center" }}
              >
                <span className="chip">SAM.gov Active</span>
                <span className="chip">MBE Certified</span>
                <span className="chip">CAGE 12XC1</span>
                <span className="chip">UEI RX16QFYT6YM5</span>
                <span className="chip">7 Anthropic Certs</span>
                <span className="chip">NIST 800-53 Trained</span>
                <span className="chip">HIPAA-Enabled</span>
                <span className="chip">500% YoY &middot; $13M+ Saved</span>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            className="section alt section-brand-white"
            aria-label="Frequently asked questions"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">FAQ</div>
                <h2>Bundle Questions</h2>
              </header>
              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>What is the Better Together Package?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    The Better Together Package unifies Buy-Lingual Voice AI and
                    Autonomous Digital Employees into one orchestrated workforce.
                    Instead of buying voice and employees separately, you deploy
                    both as a single revenue-recovery system.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How do Voice Agents and AI Employees work together?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    They share a unified knowledge base and qualification engine.
                    A voice agent qualifies a lead on a call; a digital employee
                    instantly logs the CRM record, sends SMS follow-up, and
                    schedules the next task &mdash; no manual handoff required.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Which bundle should I choose?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Launch ($297/mo) covers calls + basic automation. Growth
                    ($597/mo) is our best-seller for full lead handling and CRM
                    flow. Scale ($1,297/mo) is for operators who want a complete
                    AI front office across sales, admin, and support.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Why is there a setup fee on bundles?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Setup covers dual-agent provisioning, CRM integration,
                    workflow architecture, knowledge-base training, and launch
                    testing for both voice and employee pillars. Launch: $997.
                    Growth: $1,997. Scale: $3,997.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Can I buy Voice and Employees separately instead?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. Standalone Voice and Employee pages remain available. Most
                    Counterparts deploy both because fragmented coverage leaks
                    revenue &mdash; but the choice is yours.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>How quickly can a bundle go live?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Most bundle deployments go live within days. Our automated
                    onboarding provisions both pillars, connects your CRM, and
                    runs qualification tests before your workforce takes its first
                    live interaction.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What happens immediately after I activate a bundle?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    You get instant access to the OrenGen client portal. Connect
                    your CRM, complete a short brand questionnaire, and our systems
                    auto-provision your voice agent and digital employee with your
                    business knowledge base.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is there a long-term contract?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Monthly = cancel anytime. Annual = monthly &times; 10 (Save
                    17%). Scale up or down per month.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            id="contact"
            aria-label="Deploy"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Instant Provisioning</div>
                <h2>
                  Deploy Your <span style={ACCENT}>Unified Workforce</span>{" "}
                  Today.
                </h2>
                <p>
                  Choose your bundle and get instant access. Our automated
                  onboarding will have your voice agent and digital employee
                  provisioned, integrated, and ready in minutes.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#pricing">
                    Select Your Bundle
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
