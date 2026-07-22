import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import PricingTiers, { type PricingPlan } from "@/components/site/PricingTiers";

/**
 * OrenAgents Employees page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orenagents-employees.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "OrenAgents Employees — Autonomous AI Digital Workforce | OrenGen",
  description:
    "Hire AI digital employees that handle qualification, CRM workflows, task automation, and back-office operations 24/7. From $97/mo.",
  keywords:
    "employees, OrenGen, OrenGen Worldwide, Autonomous AI Workforce, AI infrastructure",
  alternates: { canonical: "/orenagents/employees" },
  openGraph: {
    title: "OrenAgents Employees — Autonomous AI Digital Workforce | OrenGen",
    description:
      "Hire AI digital employees that handle qualification, CRM workflows, task automation, and back-office operations 24/7. From $97/mo.",
    url: "https://orengen.io/orenagents/employees",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

// Monthly prices, setup fees, feature lists, and the featured tier are
// preserved exactly from the live page; existing monthly Stripe links kept and
// paired with the official annual links (used when Yearly is toggled). Annual
// price is monthly × 10 per the account-wide catalog policy.
const EMPLOYEE_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    monthly: 97,
    setup: "+ $497 one-time setup",
    features: [
      "1 AI Employee (chat)",
      "5,000 conversations/mo",
      "Website chat widget",
      "Lead qualification",
      "FAQ auto-response",
      "CRM integration",
      "Business hours routing",
      "Basic analytics",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/8x214nb8k8tFc0r1pDfQI3v",
    ctaHrefAnnual: "https://buy.stripe.com/aFa7sLgsE7pB6G7d8lfQI3w",
  },
  {
    name: "Professional",
    monthly: 197,
    setup: "+ $997 one-time setup",
    featured: true,
    features: [
      "Everything in Standard",
      "3 AI Employees (chat + SMS)",
      "15,000 conversations/mo",
      "Multi-channel deployment",
      "Appointment scheduling",
      "Custom training data",
      "Handoff to human agents",
      "Advanced analytics",
      "Priority support",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/7sY4gz1xK8tF6G75FTfQI3x",
    ctaHrefAnnual: "https://buy.stripe.com/bJeaEXb8k7pB2pR8S5fQI3y",
  },
  {
    name: "Premium",
    monthly: 497,
    setup: "+ $2,497 one-time setup",
    features: [
      "Everything in Professional",
      "50 AI Employees",
      "Unlimited conversations",
      "Multilingual (50+ languages)",
      "Custom workflows & triggers",
      "API access",
      "White-label ready",
      "Revenue attribution",
      "Dedicated success manager",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/6oUaEX5O0fW73tVfgtfQI3z",
    ctaHrefAnnual: "https://buy.stripe.com/3cIcN5dgsaBN0hJ7O1fQI3A",
  },
];

export default function OrenAgentsEmployeesPage() {
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
            aria-label="OrenAgent — Employee Workforce hero"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Autonomous AI Workforce</div>
                <h1>
                  Hire Entire AI Departments,{" "}
                  <span className="gradient-word shimmer">Not Just Tools.</span>
                </h1>
                <p className="lead">
                  Autonomous, multi-agent AI workers that handle lead
                  qualification, CRM operations, task automation, scheduling,
                  follow-ups, and back-office workflows — 24/7, in 100+ world
                  languages, at any scale you need.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#pricing">
                    See Pricing
                  </a>
                  <a className="btn btn-secondary" href="https://buy.stripe.com/7sY4gz1xK8tF6G75FTfQI3x">
                    Start Now
                  </a>
                </div>
                <div
                  className="trust-row"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">From 1 to 50 employees</span>
                  <span className="chip">Multi-channel chat + SMS</span>
                  <span className="chip">100+ languages</span>
                  <span className="chip">From $97/mo</span>
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
                  <div aria-hidden="true">&#x1F465;</div>
                  <h3>Multi-Agent Departments</h3>
                  <p>
                    From 1 AI employee (Standard) to 3 (Professional) to 50
                    (Premium). Specialized, coordinated, orchestrated through
                    OrenNexus.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true">&#x1F3AF;</div>
                  <h3>Lead Qualification &amp; Routing</h3>
                  <p>
                    Scores and routes every inbound lead using your exact
                    criteria. Only warm leads reach your sales team.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true">&#x1F517;</div>
                  <h3>CRM Operations</h3>
                  <p>
                    Automated record creation, contact enrichment, deal-stage
                    updates, activity logging, follow-up scheduling. The admin
                    tax disappears.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true">&#x26A1;</div>
                  <h3>Task Automation</h3>
                  <p>
                    Multi-step workflows triggered by any event — form
                    submissions, calendar events, payment statuses, CRM changes.
                    AI employees execute the entire chain.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true">&#x1F310;</div>
                  <h3>Multilingual Coverage</h3>
                  <p>
                    Premium tier supports 50+ languages. Your back-office
                    isn&apos;t capped by the languages your human team speaks.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true">&#x1F4CA;</div>
                  <h3>Performance Reporting</h3>
                  <p>
                    Monthly performance reports per employee. What they handled,
                    where they excelled, where to add capacity.
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
                <div className="eyebrow">
                  Why Human-Only Back Offices Are Hemorrhaging Margin
                </div>
                <h2>
                  Six research-backed reasons every operations team is shifting
                  from human-only to AI-augmented departments.
                </h2>
              </header>
              <div className="kpi-grid reveal">
                <div className="kpi">
                  <div className="label">Sales Productivity</div>
                  <div className="num">
                    36<span>%</span>
                  </div>
                  <h3>Of a sales rep&apos;s day is actually spent selling.</h3>
                  <p>
                    The remaining 64% goes to admin, call logging, scheduling,
                    qualification, follow-ups, and CRM data entry — the exact
                    work AI employees were built to handle.
                  </p>
                  <p>Source: Salesforce State of Sales</p>
                </div>
                <div className="kpi">
                  <div className="label">Loaded Cost per FTE</div>
                  <div className="num">
                    $84<span>K</span>
                  </div>
                  <h3>Average loaded annual cost per US back-office employee.</h3>
                  <p>
                    Salary, benefits, tax, equipment, training, attrition
                    replacement. OrenAgents Employees delivers equivalent
                    throughput at $97–$497/mo per AI worker.
                  </p>
                  <p>Source: BLS / SHRM total compensation research</p>
                </div>
                <div className="kpi">
                  <div className="label">Manual Toll</div>
                  <div className="num">
                    9.4<span>hr</span>
                  </div>
                  <h3>
                    Wasted per employee, per week, on repetitive operational
                    tasks.
                  </h3>
                  <p>
                    Knowledge workers lose a full workday every week to data
                    entry, copy-paste between tools, status updates, and
                    reconciling records.
                  </p>
                  <p>Source: Asana Anatomy of Work index</p>
                </div>
                <div className="kpi">
                  <div className="label">Hiring Cycle Tax</div>
                  <div className="num">
                    42<span>d</span>
                  </div>
                  <h3>Average time to hire one US back-office role.</h3>
                  <p>
                    Six weeks of search, screening, interviews, offers,
                    onboarding. AI employees deploy in days — trained,
                    integrated, productive immediately.
                  </p>
                  <p>Source: SHRM Talent Acquisition Benchmark</p>
                </div>
                <div className="kpi">
                  <div className="label">Attrition Drag</div>
                  <div className="num">
                    26<span>%</span>
                  </div>
                  <h3>
                    Annual turnover rate in operations and customer-service
                    roles.
                  </h3>
                  <p>
                    Every quarter, you re-hire and re-train a quarter of your
                    back-office team. AI employees don&apos;t quit, don&apos;t get
                    poached, don&apos;t take PTO.
                  </p>
                  <p>Source: US Bureau of Labor Statistics / CompFoundry</p>
                </div>
                <div className="kpi">
                  <div className="label">Adoption Failure</div>
                  <div className="num">
                    63<span>%</span>
                  </div>
                  <h3>
                    Of internal automation projects stall because the team
                    can&apos;t maintain them.
                  </h3>
                  <p>
                    DIY automation tools die under maintenance load. OrenAgents
                    Employees is white-glove managed — we deploy, monitor, tune
                    your AI workforce continuously.
                  </p>
                  <p>Source: McKinsey Business Process Automation research</p>
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
                <div className="eyebrow">Pricing</div>
                <h2>AI Employee Workforce Pricing</h2>
                <p className="lead">
                  From 1 AI employee to 50. Annual billing saves 17%.
                </p>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip">Monthly</span>
                  <span className="chip">Annual Save up to $994</span>
                </div>
              </header>
              <PricingTiers plans={EMPLOYEE_PLANS} />
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
              <div className="trust-row reveal" style={{ justifyContent: "center" }}>
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
                    <span>What can an AI digital employee actually do?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Execute workflows, qualify leads via chat/SMS, update your
                    CRM, book appointments, and handle multi-step async tasks.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Does this replace human customer support?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    It augments it. AI handles 80%+ of repetitive queries,
                    handing off complex cases to humans when needed.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How many conversations can one AI employee handle?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Thousands simultaneously. Unlike humans, AI employees scale
                    instantly to meet peak demand.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>What platforms can I deploy my AI employees on?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Websites, WhatsApp, SMS, Facebook Messenger, and Instagram
                    Direct.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is setup really automated?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. Our systems crawl your website and documentation to
                    auto-provision your agent&apos;s knowledge base in minutes.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>What languages are supported?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Premium tier supports 50+ world languages. Standard and
                    Professional are English-optimized.
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
            className="section alt section-brand-blue"
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
                  onboarding will have your AI workforce provisioned and ready
                  in minutes.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#pricing">
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
