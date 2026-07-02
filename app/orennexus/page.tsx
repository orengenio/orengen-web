import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenNexus hub page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/official-orennexus.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title:
    "OrenNexus — Unified CRM + Pipeline + Marketing Automation | OrenGen",
  description:
    "OrenNexus unifies CRM, pipeline, lead generation, and marketing automation in one AI-powered command center. From $97/mo.",
  keywords:
    "orennexus, OrenGen, OrenGen Worldwide, Unified CRM + Automation, AI infrastructure",
  alternates: { canonical: "/orennexus" },
  openGraph: {
    title:
      "OrenNexus — Unified CRM + Pipeline + Marketing Automation | OrenGen",
    description:
      "OrenNexus unifies CRM, pipeline, lead generation, and marketing automation in one AI-powered command center. From $97/mo.",
    url: "https://orengen.io/orennexus",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenNexusPage() {
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
            aria-label="OrenNexus hero"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Unified CRM + Automation</div>
                <h1>
                  The Command Center for{" "}
                  <span className="gradient-word shimmer">
                    Your AI Workforce.
                  </span>
                </h1>
                <p className="lead">
                  Every pipeline, contact, and workflow in one AI-powered
                  command center. OrenNexus unifies your CRM, lead generation,
                  marketing automation, email, and SMS so you can find, close,
                  and grow clients — all from a single dashboard.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="#pricing"
                    data-lead-source="orennexus-orennexus"
                  >
                    See Pricing
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="https://buy.stripe.com/4gMcN5ekweS32pRd8lfQI3i"
                  >
                    Start Now
                  </a>
                </div>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">Replaces 20+ Enterprise Tools</span>
                  <span className="chip">Unlimited Users</span>
                  <span className="chip">From $97/mo</span>
                  <span className="chip">No per-seat tax</span>
                </div>
              </header>
            </div>
          </section>

          {/* CAPABILITIES */}
          <section
            className="section alt section-brand-white"
            aria-label="Capabilities"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Capabilities</div>
                <h2>What&apos;s Included</h2>
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
                    &#x1F4BC;
                  </div>
                  <h3>CRM &amp; Pipeline</h3>
                  <p>
                    Visual pipeline, contact management, deal tracking, task
                    &amp; appointment management.
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
                    &#x1F3AF;
                  </div>
                  <h3>Lead Generation</h3>
                  <p>
                    Multi-channel lead capture, automated scoring, real-time
                    routing, landing pages, funnel builder.
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
                    &#x1F4E3;
                  </div>
                  <h3>Marketing Automation</h3>
                  <p>
                    Drag-and-drop campaign builder, email + SMS sequences,
                    audience segmentation, A/B testing.
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
                    &#x1F4C5;
                  </div>
                  <h3>Forms &amp; Surveys</h3>
                  <p>
                    Built-in form &amp; survey builder. Branching logic.
                    Real-time routing into your pipeline.
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
                  <h3>Analytics &amp; Reporting</h3>
                  <p>
                    Visual dashboards, conversion tracking, reputation
                    management, ROI attribution.
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
                    &#x1F4E9;
                  </div>
                  <h3>Unified Inbox</h3>
                  <p>
                    Manage email, SMS, social DMs, web chat, and Google Business
                    messages from a single conversational inbox.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* PAIN POINTS */}
          <section
            className="section section-brand-blue"
            aria-label="Why this matters"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Tax of Tool Sprawl</div>
                <h2>
                  Six research-backed costs of running fragmented sales,
                  marketing, and CRM tools instead of a unified command center.
                </h2>
              </header>
              <div className="kpi-grid reveal">
                <div className="kpi">
                  <div className="label">App Sprawl</div>
                  <div className="num">112</div>
                  <p>SaaS apps used by the average enterprise.</p>
                  <p>
                    Most enterprises run 112 separate SaaS subscriptions, up
                    from 8 in 2015. OrenNexus replaces 20+ enterprise tools
                    including your CRM, funnel builder, email marketing, SMS,
                    surveys, calendar scheduling, course hosting, and more.
                    including your CRM, funnel builder, email marketing, SMS,
                    surveys, calendar scheduling, and more.
                  </p>
                  <p>Source: Productiv State of SaaS report</p>
                </div>
                <div className="kpi">
                  <div className="label">Lost Productivity</div>
                  <div className="num">
                    9.4<span>hr</span>
                  </div>
                  <p>Wasted per employee, per week, switching between apps.</p>
                  <p>
                    Knowledge workers lose a full workday every week toggling
                    between tools, copying data, and reconciling records.
                  </p>
                  <p>Source: Asana Anatomy of Work index</p>
                </div>
                <div className="kpi">
                  <div className="label">Pipeline Leakage</div>
                  <div className="num">
                    79<span>%</span>
                  </div>
                  <p>
                    Of marketing leads never convert — usually because of poor
                    handoff.
                  </p>
                  <p>
                    Leads die in the gap between marketing and sales when the
                    systems don&apos;t talk. Unified pipeline closes the gap.
                  </p>
                  <p>Source: MarketingSherpa benchmark</p>
                </div>
                <div className="kpi">
                  <div className="label">Speed-to-Lead</div>
                  <div className="num">
                    5<span>min</span>
                  </div>
                  <p>The window where leads are 21x more likely to convert.</p>
                  <p>
                    Respond within five minutes and conversion odds increase by
                    21x. Most teams take hours or days. OrenNexus automates
                    instant routing.
                  </p>
                  <p>Source: HBR / Lead Response Management Study</p>
                </div>
                <div className="kpi">
                  <div className="label">CRM Adoption Failure</div>
                  <div className="num">
                    63<span>%</span>
                  </div>
                  <p>Of CRM implementations fail to deliver expected ROI.</p>
                  <p>
                    Most CRM projects collapse because the platform is bolted
                    onto five other tools. OrenNexus consolidates the stack so
                    it&apos;s adopted because it&apos;s the only login your team
                    needs.
                  </p>
                  <p>Source: CSO Insights / Gartner CRM research</p>
                </div>
                <div className="kpi">
                  <div className="label">Per-Seat Tax</div>
                  <div className="num">
                    $12K<span>+</span>
                  </div>
                  <p>Average annual per-employee SaaS cost.</p>
                  <p>
                    Enterprise per-seat SaaS spend climbs while utilization
                    falls. OrenNexus Premium = unlimited users.
                  </p>
                  <p>Source: Vendr / Blissfully SaaS pricing benchmarks</p>
                </div>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section
            className="section alt section-brand-white"
            id="pricing"
            aria-label="Pricing tiers"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Pricing &amp; Plans</div>
                <h2>OrenNexus Pricing</h2>
                <p className="lead">
                  No setup fees. Complete unified infrastructure built,
                  scheduled, and managed by AI &amp; Human experts.
                </p>
                <div className="cta-row">
                  <span className="chip">Monthly</span>
                  <span className="chip">Annual Save up to $994</span>
                </div>
              </header>
              <div className="cost-grid reveal">
                {/* STANDARD */}
                <article className="sector-card">
                  <div className="step">Standard</div>
                  <h3>
                    <span style={ACCENT}>$97</span> /mo
                  </h3>
                  <div className="sector-trust">$0 setup fee</div>
                  <ul>
                    <li>CRM &amp; pipeline management</li>
                    <li>Contact management</li>
                    <li>Email marketing (5,000/mo)</li>
                    <li>1 sales funnel</li>
                    <li>Landing page builder</li>
                    <li>Form &amp; survey builder</li>
                    <li>Basic lead scoring</li>
                    <li>Unlimited users</li>
                  </ul>
                  <a className="card-link" href="https://buy.stripe.com/6oU9AT0tG5ht0hJecpfQI3g">
                    Select Standard →
                  </a>
                </article>

                {/* PROFESSIONAL */}
                <article className="sector-card">
                  <div className="step">Most Popular</div>
                  <h3>
                    Professional<br />
                    <span style={ACCENT}>$247</span> /mo
                  </h3>
                  <div className="sector-trust">$0 setup fee</div>
                  <ul>
                    <li>
                      <strong>Everything in Standard</strong>
                    </li>
                    <li>Email marketing (25,000/mo)</li>
                    <li>Unlimited funnels</li>
                    <li>SMS campaigns</li>
                    <li>Marketing automation flows</li>
                    <li>Advanced lead scoring</li>
                    <li>A/B testing</li>
                    <li>Reputation management</li>
                    <li>Unlimited users</li>
                  </ul>
                  <a className="card-link" href="https://buy.stripe.com/4gMcN5ekweS32pRd8lfQI3i">
                    Select Professional →
                  </a>
                </article>

                {/* PREMIUM */}
                <article className="sector-card">
                  <div className="step">Premium</div>
                  <h3>
                    <span style={ACCENT}>$497</span> /mo
                  </h3>
                  <div className="sector-trust">$0 setup fee</div>
                  <ul>
                    <li>
                      <strong>Everything in Professional</strong>
                    </li>
                    <li>Unlimited email sends</li>
                    <li>Multi-channel campaigns</li>
                    <li>Advanced analytics</li>
                    <li>Conversion tracking</li>
                    <li>Custom workflows</li>
                    <li>API access</li>
                    <li>Unified conversational inbox</li>
                    <li>Unlimited users</li>
                  </ul>
                  <a className="card-link" href="https://buy.stripe.com/5kQaEX7W8fW72pR0lzfQI3k">
                    Select Premium →
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
                <span className="chip">500% YoY · $13M+ Saved</span>
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
                <h2>Common Questions</h2>
              </header>
              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>
                      What&apos;s the difference between OrenNexus and other
                      CRMs?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenNexus is built specifically for AI-orchestrated
                    businesses. It includes native hooks for AI voice and
                    digital employees that traditional CRMs lack.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Can I migrate my data from HubSpot or Salesforce?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. We include automated migration tools for contacts,
                    pipelines, and notes from all major CRM platforms.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>How many users can I have?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Standard: 3. Professional: 10. Premium: Unlimited.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is there a limit on email or SMS sends?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Standard: 5,000 emails/mo. Professional: 25,000 + SMS
                    campaigns. Premium: Unlimited. All outgoing volume is tracked
                    and reported in real-time.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is there a long-term contract?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Monthly = cancel anytime. Annual = monthly × 10 (Save 17%).
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
                  Start Automating <span style={ACCENT}>Today</span>.
                </h2>
                <p>
                  Choose your plan and get instant access. Our automated
                  onboarding will have your AI workforce provisioned and ready in
                  minutes.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="#pricing"
                    data-lead-source="orennexus"
                  >
                    Select Your Plan
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
