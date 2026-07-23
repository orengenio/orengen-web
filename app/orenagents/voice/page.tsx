import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import PricingTiers, { type PricingPlan } from "@/components/site/PricingTiers";

/**
 * OrenAgents Voice page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orenagents-voice.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title:
    "OrenAgents Voice — Buy-Lingual™ AI Voice Agents | OrenGen Worldwide",
  description:
    "OrenAgents Voice deploys Buy-Lingual™ AI voice agents that answer, qualify, book, and transfer calls in 100+ world languages. From $197/mo.",
  keywords:
    "voice, OrenGen, OrenGen Worldwide, Buy-Lingual Voice Agents, AI infrastructure",
  alternates: { canonical: "/orenagents/voice" },
  openGraph: {
    title:
      "OrenAgents Voice — Buy-Lingual™ AI Voice Agents | OrenGen Worldwide",
    description:
      "OrenAgents Voice deploys Buy-Lingual™ AI voice agents that answer, qualify, book, and transfer calls in 100+ world languages. From $197/mo.",
    url: "https://orengen.io/orenagents/voice",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

// Monthly prices, setup fees, feature lists, and featured tier preserved
// exactly; existing monthly Stripe links kept, official annual links added.
const VOICE_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    monthly: 197,
    setup: "+ $997 one-time setup",
    features: [
      "1 AI Voice Agent",
      "500 minutes/mo",
      "Inbound call handling",
      "Basic call routing",
      "Voicemail detection",
      "Call recording & transcripts",
      "CRM logging",
      "Standard voices",
      "Email support",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/00w00jdgsfW7c0rc4hfQI3B",
    ctaHrefAnnual: "https://buy.stripe.com/00w9AT4JW39l2pR0lzfQI3C",
  },
  {
    name: "Professional",
    monthly: 397,
    annual: 3997,
    setup: "+ $1,997 one-time setup",
    featured: true,
    features: [
      "Everything in Standard",
      "3 AI Voice Agents",
      "2,000 minutes/mo",
      "Inbound + outbound campaigns",
      "Appointment scheduling",
      "Call transfers to live agents",
      "Custom voice cloning",
      "Multi-language support",
      "Priority support",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://api.orengen.io/payment-link/6a61e21d7b99151a540400ee",
    ctaHrefAnnual: "https://api.orengen.io/payment-link/6a61e21d7b99151a540400ee",
  },
  {
    name: "Premium",
    monthly: 797,
    setup: "+ $4,997 one-time setup",
    features: [
      "Everything in Professional",
      "50 AI Voice Agents",
      "5,000 minutes/mo",
      "Custom call flows",
      "Simultaneous calls (25+)",
      "Sentiment analysis",
      "API & webhook access",
      "White-label ready",
      "Dedicated success manager",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/00w28r7W86lx3tVfgtfQI3F",
    ctaHrefAnnual: "https://buy.stripe.com/3cIeVdekw8tF6G78S5fQI3G",
  },
];

export default function OrenAgentsVoicePage() {
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
            aria-label="Buy-Lingual™ Voice Agents hero"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Buy-Lingual™ Voice Agents</div>
                <h1>
                  Voice AI That Answers in{" "}
                  <span className="gradient-word shimmer">
                    Your Customer&apos;s Language.
                  </span>
                </h1>
                <p className="lead">
                  Buy-Lingual™ conversational AI agents handle every inbound and
                  outbound call — answering, qualifying, booking, and
                  transferring in 100+ world languages. Never busy. Never on
                  hold. Never asleep.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#pricing">
                    See Pricing
                  </a>
                  <a className="btn btn-secondary" href="https://api.orengen.io/payment-link/6a61e21d7b99151a540400ee">
                    Start Now
                  </a>
                </div>
                <div className="trust-row">
                  <span className="chip">100+ world languages</span>
                  <span className="chip">Inbound + outbound</span>
                  <span className="chip">Live in days</span>
                  <span className="chip">From $197/mo</span>
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
                  <div aria-hidden="true" style={{ fontSize: "1.6rem", lineHeight: 1, marginBottom: "10px" }}>&#x1F4DE;</div>
                  <h3>Inbound Call Handling</h3>
                  <p>
                    Answers every call in under one ring. Qualifies callers,
                    answers FAQs, routes to the right person, logs everything in
                    your CRM.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={{ fontSize: "1.6rem", lineHeight: 1, marginBottom: "10px" }}>&#x1F4E4;</div>
                  <h3>Outbound Campaigns</h3>
                  <p>
                    Proactive follow-up calls, lead re-engagement, appointment
                    reminders, and cold outreach — all automated, all
                    natural-sounding.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={{ fontSize: "1.6rem", lineHeight: 1, marginBottom: "10px" }}>&#x1F4C5;</div>
                  <h3>Appointment Booking</h3>
                  <p>
                    Books directly into your calendar. Handles rescheduling,
                    sends confirmations, reduces no-shows.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={{ fontSize: "1.6rem", lineHeight: 1, marginBottom: "10px" }}>&#x1F3AF;</div>
                  <h3>Real-Time Qualification</h3>
                  <p>
                    Scores every inbound caller against your criteria
                    mid-conversation. Only warm leads make it to your sales
                    team.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={{ fontSize: "1.6rem", lineHeight: 1, marginBottom: "10px" }}>&#x1F310;</div>
                  <h3>24/7 Multilingual Coverage</h3>
                  <p>
                    Works nights, weekends, holidays in any language your buyers
                    speak. Zero overtime, zero attrition.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={{ fontSize: "1.6rem", lineHeight: 1, marginBottom: "10px" }}>&#x1F517;</div>
                  <h3>CRM Auto-Logging</h3>
                  <p>
                    Every call automatically transcribed, summarized, logged
                    with full notes and disposition tags. Zero manual data
                    entry.
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
                  The Quantified Cost of Missed and Mis-Handled Calls
                </div>
                <h2>
                  Six research-backed reasons your phone line is the #1 leak in
                  your revenue funnel right now. OrenAgents Voice closes every
                  one.
                </h2>
              </header>
              <div className="kpi-grid reveal">
                <div className="kpi">
                  <div className="label">Lost Revenue</div>
                  <div className="num">
                    $75<span>B</span>
                  </div>
                  <p>Annual revenue lost to poor customer service.</p>
                  <p>
                    US businesses leak $75 billion every year to preventable
                    service failures — missed calls, hold abandonment, friction
                    at first contact.
                  </p>
                  <p>Source: NewVoiceMedia / Serenova research</p>
                </div>
                <div className="kpi">
                  <div className="label">First-Responder Wins</div>
                  <div className="num">
                    78<span>%</span>
                  </div>
                  <p>Of customers buy from the first company that responds.</p>
                  <p>
                    Average inbound B2B response time is 47 hours. With
                    OrenAgents Voice, yours is 0 seconds — every call, every
                    channel, every time zone.
                  </p>
                  <p>Source: Lead Connect / InsideSales response-time research</p>
                </div>
                <div className="kpi">
                  <div className="label">Native-Language Buyers</div>
                  <div className="num">
                    75<span>%</span>
                  </div>
                  <p>
                    Of global consumers prefer to buy in their own language.
                  </p>
                  <p>
                    Three out of four buyers worldwide won&apos;t transact in a
                    language they don&apos;t natively speak. OrenAgents Voice
                    answers in 100+ world languages.
                  </p>
                  <p>Source: CSA Research / US Census Bureau</p>
                </div>
                <div className="kpi">
                  <div className="label">Hold Abandonment</div>
                  <div className="num">
                    67<span>%</span>
                  </div>
                  <p>
                    Of callers hang up rather than wait on hold for more than 2
                    minutes.
                  </p>
                  <p>
                    AI voice agents answer instantly, in parallel, at unlimited
                    concurrency — eliminating the hold queue entirely.
                  </p>
                  <p>Source: Velaro / American Express service research</p>
                </div>
                <div className="kpi">
                  <div className="label">Voice-First Future</div>
                  <div className="num">
                    50<span>%</span>
                  </div>
                  <p>Of buyer searches will be voice-driven by 2027 forecast.</p>
                  <p>
                    Voice AI positions your brand at the front of every
                    voice-initiated buyer journey — in any language they speak.
                  </p>
                  <p>Source: Statista / Gartner voice commerce forecasts</p>
                </div>
                <div className="kpi">
                  <div className="label">Market Velocity</div>
                  <div className="num">
                    $50<span>B</span>
                  </div>
                  <p>Projected conversational AI market size by 2029.</p>
                  <p>
                    Voice AI is mid-deployment across every industry that takes
                    phone calls. The question is no longer if — only whether you
                    deploy before your competitors do.
                  </p>
                  <p>Source: MarketsandMarkets conversational AI forecast</p>
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
                <h2>AI Voice Agents Pricing</h2>
                <p className="lead">
                  All plans include Buy-Lingual™ multi-language capability.
                  Annual billing saves 17%.
                </p>
                <div className="trust-row">
                  <span className="chip">Monthly</span>
                  <span className="chip">
                    Annual <span style={ACCENT}>Save up to $1,567</span>
                  </span>
                </div>
              </header>
              <PricingTiers plans={VOICE_PLANS} />
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
                    <span>What is Buy-Lingual™ Voice?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenAgents&apos; proprietary multi-language AI technology.
                    Every Voice deployment includes capability across 100+ world
                    languages at no extra cost.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Can the AI handle inbound AND outbound calls?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenAgents Voice handles both inbound (answering,
                    qualifying, booking) and outbound (follow-ups, cold outreach,
                    reminders).
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>How quickly can a voice agent be deployed?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Most deployments go live within days. We handle setup,
                    training, CRM integration, and testing.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Does it integrate with my CRM?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. Salesforce, HubSpot, Zoho, Pipedrive, OrenNexus, and
                    more.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Can I customize the voice and personality?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Absolutely. Custom voice personalities matching your brand.
                    Premium tier includes separate voice personalities per
                    language.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>What languages are supported?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Every plan includes 100+ world languages via Buy-Lingual™.
                    Custom voice tuning per language available on Premium.
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
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>How does Voice differ from OrenAgents Employees?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Voice handles inbound/outbound calls in real-time
                    conversation. Employees handle multi-step workflow tasks and
                    async processes.
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
