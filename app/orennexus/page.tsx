import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import HeroMedia from "@/components/site/HeroMedia";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import PricingTiers, { type PricingPlan } from "@/components/site/PricingTiers";
import PageAtAGlance from "@/components/site/PageAtAGlance";
import NexusLiveDemo from "@/components/site/NexusLiveDemo";
import NexusModules from "@/components/site/NexusModules";
import NexusCapabilities from "@/components/site/NexusCapabilities";
import ResearchAccordion from "@/components/site/ResearchAccordion";
import {
  ORENNEXUS_AT_A_GLANCE,
  ORENNEXUS_JUMPS,
  ORENNEXUS_RESEARCH,
} from "@/lib/orennexusPage";

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

// Official 2026 OrenNexus pricing: $0 setup, tiered by seat count. Each tier
// carries an explicit annual price + Stripe links (annual is NOT monthly×10
// here, so `annual` is passed per tier). Prices/links are used verbatim.
const NEXUS_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    monthly: 97,
    annual: 997,
    unit: "3 users",
    setup: "$0 setup fee",
    features: [
      "CRM & pipeline management",
      "Contact management",
      "Email marketing (5,000/mo)",
      "1 sales funnel",
      "Landing page builder",
      "Form & survey builder",
      "Basic lead scoring",
    ],
    ctaLabel: "Select Standard",
    ctaHref: "https://buy.stripe.com/aFa4gzgsE25h8Of2tHfQI45",
    ctaHrefAnnual: "https://buy.stripe.com/cNi28rcco6lx5C32tHfQI46",
  },
  {
    name: "Professional",
    monthly: 297,
    annual: 2997,
    unit: "25 users",
    setup: "$0 setup fee",
    featured: true,
    features: [
      "Everything in Standard",
      "Email marketing (25,000/mo)",
      "Unlimited funnels",
      "SMS campaigns",
      "Marketing automation flows",
      "Advanced lead scoring",
      "A/B testing",
      "Reputation management",
    ],
    ctaLabel: "Select Professional",
    ctaHref: "https://buy.stripe.com/28EfZhdgscJV4xZgkxfQI47",
    ctaHrefAnnual: "https://buy.stripe.com/7sY3cvcco5ht1lN3xLfQJ00",
  },
  {
    name: "Premium",
    monthly: 497,
    annual: 4997,
    unit: "Unlimited users",
    setup: "$0 setup fee",
    features: [
      "Everything in Professional",
      "Unlimited email sends",
      "Multi-channel campaigns",
      "Advanced analytics",
      "Conversion tracking",
      "Custom workflows",
      "API access",
      "Unified conversational inbox",
    ],
    ctaLabel: "Select Premium",
    ctaHref: "https://buy.stripe.com/dRmbJ14JW5htd4v9W9fQJ01",
    ctaHrefAnnual: "https://buy.stripe.com/7sYfZhfoAbFR8Of1pDfQJ02",
  },
];

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
            className="section section-brand-blue has-media"
            id="overview"
            aria-label="OrenNexus hero"
          >
            <HeroMedia src="/images/orennexus-hero.webp" />
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
                    href="https://buy.stripe.com/28EfZhdgscJV4xZgkxfQI47"
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

          <PageAtAGlance bullets={ORENNEXUS_AT_A_GLANCE} jumps={ORENNEXUS_JUMPS} />

          <NexusLiveDemo />

          {/* MODULE SHOWCASE — what your team logs into */}
          <NexusModules />

          {/* EVERYTHING INCLUDED — full capability grid */}
          <NexusCapabilities />

          {/* RESEARCH */}
          <ResearchAccordion
            eyebrow="The Tax of Tool Sprawl"
            title="Six research-backed costs of running fragmented sales, marketing, and CRM tools instead of a unified command center."
            items={ORENNEXUS_RESEARCH}
            defaultOpenId="sprawl"
          />

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
                  <span className="chip">$0 setup fee</span>
                  <span className="chip">Annual billing saves up to $967/yr</span>
                </div>
              </header>
              <PricingTiers plans={NEXUS_PLANS} />
            </div>
          </section>

          {/* AUTHORITY */}
          <section
            className="section section-brand-blue has-media"
            aria-label="Authority and credentials"
          >
            <HeroMedia src="/images/orennexus-flow.webp" />
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
            id="faq"
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
                    Standard: 3 users. Professional: 25 users. Premium:
                    Unlimited users.
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
                    Monthly plans cancel anytime. Annual plans are billed once
                    for the year and save you up to $967 versus paying monthly.
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
