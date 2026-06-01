import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenSocial page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/official-orensocial.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "OrenSocial — Social Media Management at Scale | OrenGen",
  description:
    "OrenSocial manages your social media with AI-powered content, scheduling, engagement, and analytics across every channel. Fully managed. From $97/mo.",
  keywords:
    "orensocial, OrenGen, OrenGen Worldwide, Social Media Management, AI infrastructure",
  alternates: { canonical: "/orensocial" },
  openGraph: {
    type: "website",
    title: "OrenSocial — Social Media Management at Scale | OrenGen",
    description:
      "OrenSocial manages your social media with AI-powered content, scheduling, engagement, and analytics across every channel. Fully managed. From $97/mo.",
    url: "https://orengen.io/orensocial",
    images: [
      "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/0AVNQ9WDsFdbcEFJX0AQfTmktPcPu8V8GqAqNQS4.png",
    ],
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;
const GLYPH = {
  fontSize: "1.6rem",
  lineHeight: 1,
  marginBottom: "10px",
} as const;
const STAT = {
  color: "var(--og-orange)",
  fontSize: "clamp(34px,4vw,50px)",
  fontWeight: 950,
  letterSpacing: "-.06em",
  lineHeight: 1,
} as const;
const STAT_UNIT = { fontSize: ".58em" } as const;
const SOURCE = {
  marginTop: "10px",
  fontStyle: "italic",
  fontSize: "12px",
  opacity: 0.7,
} as const;
const PRICE = {
  fontSize: "clamp(34px,4vw,50px)",
  fontWeight: 950,
  letterSpacing: "-.06em",
  lineHeight: 1,
} as const;
const PRICE_UNIT = { fontSize: ".4em", fontWeight: 700, opacity: 0.7 } as const;

export default function OrenSocialPage() {
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
            aria-label="OrenSocial hero"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Social Media Management</div>
                <h1>
                  Social Media{" "}
                  <span className="gradient-word shimmer">On Autopilot.</span>
                </h1>
                <p className="lead">
                  OrenSocial is a fully managed social media practice. Content
                  calendar, AI-assisted content, multi-platform scheduling,
                  engagement management, analytics, and reporting — all done for
                  you. From $97/mo.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="#pricing"
                    data-lead-source="orensocial-orensocial"
                  >
                    See Pricing
                  </a>
                  <a className="btn btn-secondary" href="#REPLACE-WITH-YOUR-URL">
                    Start Now
                  </a>
                </div>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip">No setup fees</span>
                  <span className="chip">Fully managed</span>
                  <span className="chip">From $97/mo</span>
                  <span className="chip">AI-assisted content</span>
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
                  <div aria-hidden="true" style={GLYPH}>
                    &#x1F4C5;
                  </div>
                  <h3>Content Calendar</h3>
                  <p>
                    Managed content calendar across every channel. 30 posts/mo
                    Standard up to unlimited on Premium.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={GLYPH}>
                    &#x1F3A8;
                  </div>
                  <h3>Graphic + Video</h3>
                  <p>
                    Graphic design included on every tier. Short-form video on
                    Professional. Long-form on Premium.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={GLYPH}>
                    &#x1F4AC;
                  </div>
                  <h3>Engagement Management</h3>
                  <p>
                    Community engagement on every tier. Response management +
                    competitor tracking on Professional+.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={GLYPH}>
                    &#x1F4CA;
                  </div>
                  <h3>Analytics &amp; Reporting</h3>
                  <p>
                    Monthly reporting Standard. Weekly on Professional.
                    Real-time + social listening on Premium.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={GLYPH}>
                    &#x1F916;
                  </div>
                  <h3>AI Content Assistant</h3>
                  <p>
                    Professional + Premium tiers include AI-assisted ideation
                    and drafting.
                  </p>
                </article>
                <article className="sector-card">
                  <div aria-hidden="true" style={GLYPH}>
                    &#x1F4E2;
                  </div>
                  <h3>Paid Social</h3>
                  <p>
                    Premium tier includes paid social ad management and
                    influencer coordination.
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
                <div className="eyebrow">Why Social Media Eats Teams Alive</div>
                <h2>
                  Six research-backed reasons most brands underperform on
                  social.
                </h2>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Content Treadmill</div>
                  <div style={STAT}>
                    16<span style={STAT_UNIT}>hr</span>
                  </div>
                  <h3>
                    Per week the average social manager spends just on content
                    creation.
                  </h3>
                  <p>
                    OrenSocial absorbs the entire content + scheduling cycle.
                    AI-assisted drafting on Pro+ tiers.
                  </p>
                  <div style={SOURCE}>
                    Source: Sprout Social State of Social Media
                  </div>
                </article>
                <article className="sector-card">
                  <div className="step">Posting Cadence</div>
                  <div style={STAT}>
                    5<span style={STAT_UNIT}>x</span>
                  </div>
                  <h3>
                    More engagement when brands post consistently vs.
                    sporadically.
                  </h3>
                  <p>
                    Managed cadence keeps your queue full. 30 posts/mo Standard,
                    unlimited on Pro+.
                  </p>
                  <div style={SOURCE}>
                    Source: HubSpot Social Media Benchmark
                  </div>
                </article>
                <article className="sector-card">
                  <div className="step">Engagement Latency</div>
                  <div style={STAT}>
                    65<span style={STAT_UNIT}>%</span>
                  </div>
                  <h3>
                    Of customer messages on social go unanswered within 24
                    hours.
                  </h3>
                  <p>
                    Pro + Premium include engagement and response management —
                    nothing slips.
                  </p>
                  <div style={SOURCE}>Source: Sprout Social Index</div>
                </article>
                <article className="sector-card">
                  <div className="step">Channel Sprawl</div>
                  <div style={STAT}>8.4</div>
                  <h3>Platforms the average B2B brand maintains.</h3>
                  <p>
                    OrenSocial manages 3 (Standard), 10 (Professional), or 25+
                    (Premium) profiles from one workflow.
                  </p>
                  <div style={SOURCE}>
                    Source: Content Marketing Institute B2B research
                  </div>
                </article>
                <article className="sector-card">
                  <div className="step">Reporting Burden</div>
                  <div style={STAT}>
                    11<span style={STAT_UNIT}>hr</span>
                  </div>
                  <h3>
                    Per month spent assembling client-ready reports at agencies.
                  </h3>
                  <p>
                    Auto-generated branded reports across all tiers. White-label
                    exports save the agency workweek.
                  </p>
                  <div style={SOURCE}>Source: Hootsuite Agency Operations</div>
                </article>
                <article className="sector-card">
                  <div className="step">Crisis Blindness</div>
                  <div style={STAT}>
                    73<span style={STAT_UNIT}>%</span>
                  </div>
                  <h3>
                    Of social media crises escalate because the brand
                    didn&apos;t see them in time.
                  </h3>
                  <p>
                    Premium tier includes social listening + sentiment + crisis
                    management playbook.
                  </p>
                  <div style={SOURCE}>
                    Source: Edelman Crisis Communications research
                  </div>
                </article>
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
                <h2>OrenSocial Pricing</h2>
                <p>
                  No setup fees. Complete social presence built, scheduled, and
                  managed by AI &amp; Human experts.
                </p>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip">Monthly</span>
                  <span className="chip">
                    Annual <span style={ACCENT}>Save up to $967</span>
                  </span>
                </div>
              </header>
              <div className="cost-grid reveal">
                {/* STANDARD */}
                <article className="sector-card">
                  <div className="step">Standard</div>
                  <div style={PRICE}>
                    $97<span style={PRICE_UNIT}>/mo</span>
                  </div>
                  <div style={{ ...ACCENT, fontWeight: 700, marginTop: "8px" }}>
                    $0 setup fee
                  </div>
                  <ul>
                    <li>3 social profiles managed</li>
                    <li>30 optimized posts/mo</li>
                    <li>Managed content calendar</li>
                    <li>Graphic design included</li>
                    <li>Hashtag &amp; keyword strategy</li>
                    <li>Community engagement monitoring</li>
                    <li>Standard monthly reporting</li>
                  </ul>
                  <a className="card-link" href="#REPLACE-WITH-YOUR-URL">
                    Select Standard →
                  </a>
                </article>

                {/* PROFESSIONAL */}
                <article className="sector-card">
                  <div className="step">Most Popular</div>
                  <div className="step">Professional</div>
                  <div style={PRICE}>
                    $247<span style={PRICE_UNIT}>/mo</span>
                  </div>
                  <div style={{ ...ACCENT, fontWeight: 700, marginTop: "8px" }}>
                    $0 setup fee
                  </div>
                  <ul>
                    <li>
                      <strong>Everything in Standard</strong>
                    </li>
                    <li>10 social profiles managed</li>
                    <li>Unlimited scheduled posts</li>
                    <li>AI content drafting assistant</li>
                    <li>Proactive engagement &amp; response</li>
                    <li>Short-form video editing (Reels/TikTok)</li>
                    <li>Competitor tracking &amp; analysis</li>
                    <li>Custom weekly reporting</li>
                  </ul>
                  <a className="card-link" href="#REPLACE-WITH-YOUR-URL">
                    Select Professional →
                  </a>
                </article>

                {/* PREMIUM */}
                <article className="sector-card">
                  <div className="step">Premium</div>
                  <div style={PRICE}>
                    $497<span style={PRICE_UNIT}>/mo</span>
                  </div>
                  <div style={{ ...ACCENT, fontWeight: 700, marginTop: "8px" }}>
                    $0 setup fee
                  </div>
                  <ul>
                    <li>
                      <strong>Everything in Professional</strong>
                    </li>
                    <li>25+ social profiles managed</li>
                    <li>Unlimited everything (posts, edits)</li>
                    <li>Social listening &amp; sentiment analysis</li>
                    <li>Long-form video production &amp; clipping</li>
                    <li>Paid social ad management integration</li>
                    <li>Crisis management playbook</li>
                    <li>Real-time custom dashboard</li>
                  </ul>
                  <a className="card-link" href="#REPLACE-WITH-YOUR-URL">
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
                    <span>
                      What&apos;s the difference between OrenSocial tiers?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Standard: 3 managed profiles. Professional: 10 managed
                    profiles. Premium: 25+ managed profiles.
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
                    <span>What happens immediately after I select a plan?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    You get instant access to the OrenGen client portal.
                    You&apos;ll connect your social accounts securely via OAuth,
                    fill out a 5-minute brand questionnaire, and our team will
                    have your first week of content drafted within 48 hours.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Do I have to approve every post before it goes live?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes, you have full 1-click approval rights inside your
                    dashboard. Alternatively, you can configure your AI
                    workforce to auto-publish based on brand constraints.
                    It&apos;s completely up to you.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Who actually handles the graphic design and video editing?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Our in-house human design team, augmented by enterprise-grade
                    AI models, crafts bespoke graphics and edits videos perfectly
                    tailored to your brand identity.
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
                  <a
                    className="btn btn-primary"
                    href="#pricing"
                    data-lead-source="orensocial"
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
