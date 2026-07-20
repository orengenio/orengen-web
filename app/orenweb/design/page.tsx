import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import PricingTiers, { type PricingPlan } from "@/components/site/PricingTiers";

/**
 * OrenWeb — Design page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orenweb-design.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title:
    "OrenWeb Design — High-Performance Custom Websites | OrenGen",
  description:
    "OrenWeb Design builds custom, high-converting websites engineered to rank, convert, and impress. Includes hosting, SEO, and maintenance. From $247/mo.",
  keywords:
    "design, OrenGen, OrenGen Worldwide, Web Design and Development, AI infrastructure",
  alternates: { canonical: "/orenweb/design" },
  openGraph: {
    title:
      "OrenWeb Design — High-Performance Custom Websites | OrenGen",
    description:
      "OrenWeb Design builds custom, high-converting websites engineered to rank, convert, and impress. Includes hosting, SEO, and maintenance. From $247/mo.",
    url: "https://orengen.io/orenweb/design",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

// Monthly prices, setup fees, feature lists, and featured tier preserved
// exactly; existing monthly Stripe links kept, official annual links added.
const DESIGN_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    monthly: 247,
    setup: "+ $997 one-time setup",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "SSL certificate",
      "Google Analytics",
      "Hosting included",
      "Monthly maintenance",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/00wcN51xK5ht9SjgkxfQI3N",
    ctaHrefAnnual: "https://buy.stripe.com/4gMaEXb8kbFRe8zb0dfQI3W",
  },
  {
    name: "Professional",
    monthly: 497,
    setup: "+ $2,497 one-time setup",
    featured: true,
    features: [
      "Everything in Standard",
      "Up to 15 pages",
      "Custom WordPress/CMS",
      "Blog setup & templates",
      "Advanced SEO & schema",
      "Speed optimization",
      "CRM & calendar integration",
      "3 revision rounds/month",
      "Weekly maintenance",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/eVq9AT90ch0b2pR5FTfQI3O",
    ctaHrefAnnual: "https://buy.stripe.com/28E00ja4gfW7e8zc4hfQI3X",
  },
  {
    name: "Premium",
    monthly: 997,
    setup: "+ $4,997 one-time setup",
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "E-commerce / portals",
      "Custom functionality & APIs",
      "A/B testing setup",
      "Conversion tracking",
      "Multi-language support",
      "Unlimited revisions",
      "Dedicated web team",
    ],
    ctaLabel: "Activate",
    ctaHref: "https://buy.stripe.com/7sY28r5O025hc0r5FTfQI3P",
    ctaHrefAnnual: "https://buy.stripe.com/9B64gzfoA6lxfcD3xLfQI3Y",
  },
];

export default function OrenWebDesignPage() {
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
            aria-label="OrenWeb — Design hero"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Web Design &amp; Development</div>
                <h1>
                  Custom Websites That{" "}
                  <span className="gradient-word shimmer">Convert.</span>
                </h1>
                <p className="lead">
                  OrenWeb Design builds bespoke marketing sites engineered for
                  speed, search rankings, and conversion. Custom build, hosting
                  included, ongoing maintenance, full SEO setup. From $247/mo.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#pricing">
                    See Pricing
                  </a>
                  <a className="btn btn-secondary" href="https://buy.stripe.com/eVq9AT90ch0b2pR5FTfQI3O">
                    Start Now
                  </a>
                </div>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip">Custom build</span>
                  <span className="chip">Hosting + SSL included</span>
                  <span className="chip">SEO-engineered</span>
                  <span className="chip">From $247/mo</span>
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
                  <div className="step">&#x1F3A8;</div>
                  <h3>Custom Design</h3>
                  <p>
                    Bespoke marketing sites designed around your brand, not a
                    template.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F4F1;</div>
                  <h3>Mobile-Responsive</h3>
                  <p>
                    Mobile-first build across every breakpoint. Touch-optimized
                    UX patterns.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F50D;</div>
                  <h3>SEO Engineering</h3>
                  <p>
                    Technical SEO baked in — schema, sitemaps, semantic HTML,
                    page speed, internal linking.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F510;</div>
                  <h3>SSL + Hosting</h3>
                  <p>
                    SSL certificate, edge hosting, Google Analytics, and uptime
                    monitoring — all included.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F6D2;</div>
                  <h3>E-Commerce Ready</h3>
                  <p>
                    Premium tier includes e-commerce, portals, custom APIs,
                    multi-language support.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">&#x1F527;</div>
                  <h3>Ongoing Maintenance</h3>
                  <p>
                    Security patches, content edits, performance tuning, monthly
                    reporting per tier.
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
                <div className="eyebrow">Why Most Websites Underperform</div>
                <h2>
                  Six research-backed reasons your existing site is leaving
                  revenue on the table.
                </h2>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Load Time Penalty</div>
                  <div className="num">
                    53<span>%</span>
                  </div>
                  <h3>
                    Of mobile visitors abandon a page that takes longer than 3
                    seconds to load.
                  </h3>
                  <p>
                    OrenWeb engineers Core Web Vitals into the build —
                    sub-second TTFB, optimized images, edge caching.
                  </p>
                  <div className="sector-trust">
                    Source: Google Web.dev / SOASTA research
                  </div>
                </article>
                <article className="sector-card">
                  <div className="step">Mobile-First Reality</div>
                  <div className="num">
                    63<span>%</span>
                  </div>
                  <h3>Of US web traffic now comes from mobile devices.</h3>
                  <p>
                    Every OrenWeb build is mobile-first responsive with
                    touch-optimized UX patterns.
                  </p>
                  <div className="sector-trust">
                    Source: StatCounter Global Stats
                  </div>
                </article>
                <article className="sector-card">
                  <div className="step">SEO Drift</div>
                  <div className="num">
                    75<span>%</span>
                  </div>
                  <h3>
                    Of users never scroll past the first page of search results.
                  </h3>
                  <p>
                    Sites built without SEO engineering languish on page 2+.
                    OrenWeb ships sites with technical SEO baked in.
                  </p>
                  <div className="sector-trust">
                    Source: HubSpot / Backlinko SEO research
                  </div>
                </article>
                <article className="sector-card">
                  <div className="step">Conversion Math</div>
                  <div className="num">
                    0.5<span>s</span>
                  </div>
                  <h3>Faster load time = 7% more conversions.</h3>
                  <p>
                    Every 500ms shaved off load time translates directly to
                    revenue. OrenWeb obsesses over latency.
                  </p>
                  <div className="sector-trust">
                    Source: Akamai / Forrester eCommerce performance studies
                  </div>
                </article>
                <article className="sector-card">
                  <div className="step">Accessibility Risk</div>
                  <div className="num">
                    96<span>%</span>
                  </div>
                  <h3>Of websites fail WCAG accessibility standards.</h3>
                  <p>
                    Inaccessible sites lose customers, lose search rankings,
                    incur ADA litigation risk. OrenWeb audits and builds to WCAG
                    2.1 AA.
                  </p>
                  <div className="sector-trust">
                    Source: WebAIM Million accessibility report
                  </div>
                </article>
                <article className="sector-card">
                  <div className="step">Maintenance Debt</div>
                  <div className="num">
                    31<span>%</span>
                  </div>
                  <h3>
                    Of websites contain at least one known security
                    vulnerability within 6 months of launch.
                  </h3>
                  <p>
                    Build-and-forget sites become liabilities. Every OrenWeb
                    tier includes ongoing maintenance and patching.
                  </p>
                  <div className="sector-trust">
                    Source: Sucuri Website Threat Report
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
                <div className="eyebrow">Pricing</div>
                <h2>OrenWeb Design Pricing</h2>
                <p>
                  Includes hosting, SEO, and ongoing maintenance. Annual billing
                  saves 17%.
                </p>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip">Monthly</span>
                  <span className="chip">
                    Annual Save up to $1,967
                  </span>
                </div>
              </header>
              <PricingTiers plans={DESIGN_PLANS} />
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
                    <span>How long does a custom website build take?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Standard: 2-4 weeks. Professional: 4-8 weeks. Premium: 8-12
                    weeks.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>What CMS do you use?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    We primarily use custom-tuned WordPress, Webflow, or headless
                    React depending on your performance needs.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Is hosting and SSL included?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes, enterprise-grade hosting and SSL certificates are
                    included in every tier.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Do you handle SEO?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Technical SEO (schema, speed, structure) is baked into the
                    code. Professional and Premium include on-page keyword
                    strategy.
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>Can I upgrade my tier later?</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes, as your brand grows, you can move from Standard to
                    Professional or Premium at any time.
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
