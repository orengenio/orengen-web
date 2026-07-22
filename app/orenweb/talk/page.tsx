import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import AuditWidget from "@/components/site/AuditWidget";
import PricingTiers, { type PricingPlan } from "@/components/site/PricingTiers";

/**
 * OrenWeb Talk page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orenweb-talk.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "OrenWeb Talk — AI Voice + Chat Embedded Websites | OrenGen",
  description:
    "OrenWeb Talk embeds AI voice and chat directly into your website. Visitors speak to your brand in 100+ languages, get qualified, book meetings inline. From $147/mo.",
  keywords:
    "talk, OrenGen, OrenGen Worldwide, AI Voice-Enabled Websites, AI infrastructure",
  alternates: { canonical: "/orenweb/talk" },
  openGraph: {
    title: "OrenWeb Talk — AI Voice + Chat Embedded Websites | OrenGen",
    description:
      "OrenWeb Talk embeds AI voice and chat directly into your website. Visitors speak to your brand in 100+ languages, get qualified, book meetings inline. From $147/mo.",
    url: "https://orengen.io/orenweb/talk",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

// Monthly prices, setup fees, feature lists, and featured tier preserved
// exactly; existing monthly Stripe links kept, official annual links added.
const TALK_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    monthly: 147,
    setup: "+ $1,497 one-time setup",
    features: [
      "AI chat widget on site",
      "Up to 5 pages",
      "1,000 conversations/mo",
      "Lead capture & routing",
      "Mobile-responsive",
      "Basic SEO",
      "FAQ auto-training",
      "CRM integration",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/3cI14n6S45htfcD9W9fQI3a",
    ctaHrefAnnual: "https://buy.stripe.com/3cIfZhfoAh0b3tVd8lfQI42",
  },
  {
    name: "Professional",
    monthly: 297,
    setup: "+ $2,997 one-time setup",
    featured: true,
    features: [
      "Everything in Standard",
      "AI voice + chat on site",
      "Up to 15 pages",
      "5,000 conversations/mo",
      "Voice interaction widget",
      "Appointment scheduling",
      "Multi-language chat",
      "Advanced analytics",
      "Priority support",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/dRm9ATdgs25he8z0lzfQI3c",
    ctaHrefAnnual: "https://buy.stripe.com/5kQbJ13FS11d8Of3xLfQI43",
  },
  {
    name: "Premium",
    monthly: 497,
    setup: "+ $5,997 one-time setup",
    features: [
      "Everything in Professional",
      "Full voice + chat + video",
      "Unlimited pages",
      "Unlimited conversations",
      "Custom AI persona training",
      "Visitor intent analysis",
      "API access",
      "White-label ready",
      "Dedicated success manager",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/dRm8wP4JW8tF0hJfgtfQI3e",
    ctaHrefAnnual: "https://buy.stripe.com/14AcN5b8keS32pR7O1fQI44",
  },
];

export default function OrenWebTalkPage() {
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
            aria-label="OrenWeb — Talking Sites hero"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">AI Voice-Enabled Websites</div>
                <h1>
                  Websites That{" "}
                  <span className="gradient-word shimmer">Talk Back.</span>
                </h1>
                <p className="lead">
                  OrenWeb Talk embeds AI voice and chat agents directly into
                  your website. Visitors click a mic, speak in their language,
                  get qualified, book meetings, ask product questions — all
                  without leaving the page. From $147/mo.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#pricing">
                    See Pricing
                  </a>
                  <a className="btn btn-secondary" href="https://buy.stripe.com/dRm9ATdgs25he8z0lzfQI3c">
                    Start Now
                  </a>
                </div>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip">AI voice + chat</span>
                  <span className="chip">Lead capture inline</span>
                  <span className="chip">Multi-language</span>
                  <span className="chip">From $147/mo</span>
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
                  <div className="step">&#x1F5E3;&#xFE0F;</div>
                  <h3>AI Voice Widget</h3>
                  <p>
                    Visitors click a mic icon, speak in their language, get
                    answers and book meetings without typing.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F4AC;</div>
                  <h3>AI Chat Widget</h3>
                  <p>
                    Always-available chat assistant trained on your content,
                    FAQs, and product info.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F3AF;</div>
                  <h3>Lead Capture &amp; Routing</h3>
                  <p>
                    Every conversation captures the lead, scores intent, and
                    routes to the right person in real time.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F4C5;</div>
                  <h3>Inline Appointment Booking</h3>
                  <p>
                    Professional + Premium tiers book meetings directly inside
                    the conversation.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F310;</div>
                  <h3>Multi-Language</h3>
                  <p>
                    Professional tier supports multi-language chat. Premium adds
                    full voice in 100+ languages.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F4F9;</div>
                  <h3>Voice + Chat + Video</h3>
                  <p>
                    Premium tier ships full voice + chat + video persona with
                    intent analysis.
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
                <div className="eyebrow">Why Static Sites Lose The Buyer</div>
                <h2>
                  Six research-backed reasons embedded AI conversation
                  outperforms static brochure websites.
                </h2>
              </header>
              <div className="kpi-grid reveal">
                <div className="kpi">
                  <div className="label">Form Abandonment</div>
                  <div className="num">
                    81<span>%</span>
                  </div>
                  <h3>Of users abandon traditional web forms before submission.</h3>
                  <p>
                    Voice + chat conversation captures the buyer where forms
                    lose them. No fields. Just a question.
                  </p>
                  <p>Source: Baymard Institute form usability research</p>
                </div>
                <div className="kpi">
                  <div className="label">Response Latency</div>
                  <div className="num">
                    78<span>%</span>
                  </div>
                  <h3>Of buyers buy from the company that responds first.</h3>
                  <p>
                    OrenWeb Talk responds instantly, 24/7, in any language. No
                    SDR queue.
                  </p>
                  <p>Source: Lead Connect</p>
                </div>
                <div className="kpi">
                  <div className="label">Voice-First Future</div>
                  <div className="num">
                    50<span>%</span>
                  </div>
                  <h3>Of buyer searches will be voice-driven by 2027 forecast.</h3>
                  <p>
                    Voice-enabled sites position your brand at the front of the
                    next conversational commerce wave.
                  </p>
                  <p>Source: Statista / Gartner</p>
                </div>
                <div className="kpi">
                  <div className="label">Conversion Math</div>
                  <div className="num">
                    12<span>x</span>
                  </div>
                  <h3>
                    Higher conversion when buyers can ask questions inline vs.
                    emailing for info.
                  </h3>
                  <p>
                    Embedded AI answers product questions, qualifies, and books
                    — the friction collapses.
                  </p>
                  <p>Source: Drift / Forrester Conversational Commerce</p>
                </div>
                <div className="kpi">
                  <div className="label">Multilingual Reach</div>
                  <div className="num">
                    75<span>%</span>
                  </div>
                  <h3>Of global consumers prefer to buy in their own language.</h3>
                  <p>
                    Premium tier supports 100+ languages on voice. Standard
                    supports multi-language chat. Address the global buyer.
                  </p>
                  <p>Source: CSA Research</p>
                </div>
                <div className="kpi">
                  <div className="label">Mobile Voice Adoption</div>
                  <div className="num">
                    53<span>%</span>
                  </div>
                  <h3>Of mobile users prefer voice over typing for queries.</h3>
                  <p>
                    Visitors on phones tap the mic faster than they fill forms.
                    Mobile-first voice closes the mobile commerce gap.
                  </p>
                  <p>Source: Adobe Voice Tech research</p>
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
                <h2>OrenWeb Talk Pricing</h2>
                <p className="lead">
                  AI voice + chat embedded on your site. Includes lead capture,
                  scheduling, CRM integration. Annual billing saves 17%.
                </p>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip">Monthly</span>
                  <span className="chip">
                    Annual <span style={ACCENT}>Save up to $994</span>
                  </span>
                </div>
              </header>
              <PricingTiers plans={TALK_PLANS} />
            </div>
          </section>

          {/* AUTHORITY */}
          <section
            className="section section-brand-white"
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
            className="section alt section-brand-blue"
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
                    <span>What is a &quot;Talking Site&quot;?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    A website where visitors can have full voice or chat
                    conversations with your brand instead of just filling out
                    forms.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Does it work on existing websites?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. It&apos;s a simple script installation that works on any
                    CMS or custom-built site.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>What languages does it support?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Premium supports 100+ languages via Buy-Lingual™. Standard
                    and Professional are English-focused.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Can it book appointments directly?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes, it integrates with Google Calendar, Outlook, and all
                    major booking platforms.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>How many conversations are included?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Standard: 1,000/mo. Professional: 5,000/mo. Premium:
                    Unlimited.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is there a long-term contract?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Monthly = cancel anytime. Annual = save 17%.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FREE WEBSITE AUDIT */}
          <section
            className="section section-brand-blue"
            aria-label="Free website audit"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Free Instant Website Audit</div>
                <h2>
                  See how your current site scores —{" "}
                  <span style={{ color: "var(--og-orange)" }}>
                    in about a minute.
                  </span>
                </h2>
                <p className="lead">
                  Drop in your URL for an instant, no-cost report on performance,
                  SEO, mobile experience, and conversion readiness — then
                  let&apos;s fix what&apos;s costing you leads.
                </p>
              </header>
              <AuditWidget widgetId="6a5fa76ee07eafbdd6223a3b" />
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-white"
            id="contact"
            aria-label="Deploy"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Instant Provisioning</div>
                <h2>
                  Start Automating <span style={ACCENT}>Today</span>.
                </h2>
                <p className="lead">
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
