import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import PricingExplorer from "@/components/site/PricingExplorer";

export const metadata: Metadata = {
  title: "Pricing — OrenGen Worldwide",
  description:
    "Compare every OrenGen plan in one place: Nexus CRM, AI Employees, Buy-Lingual™ AI Voice, Better Together bundles, OrenSocial, OrenWeb Design, and OrenWeb Talk.",
  keywords:
    "OrenGen pricing, Nexus CRM pricing, AI Employees pricing, Buy-Lingual AI Voice pricing, OrenWeb pricing",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — OrenGen Worldwide",
    description:
      "Seven product families, monthly and annual billing, setup fees, and direct secure checkout in one clear experience.",
    url: "https://orengen.io/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          <section
            className="section section-brand-blue pricing-hero"
            aria-label="OrenGen pricing"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The complete plan room</div>
                <h1>
                  Every Plan. Every Price.{" "}
                  <span className="gradient-word shimmer">
                    One Decision Surface.
                  </span>
                </h1>
                <p className="lead">
                  Move between products without opening another page. Compare
                  all three tiers, switch between Monthly and Annual, see the
                  one-time setup fee, and activate through the correct secure
                  Stripe link.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">21 final plans</span>
                  <span className="chip">Monthly + annual checkout</span>
                  <span className="chip">Setup fees shown upfront</span>
                  <span className="chip">No hidden navigation maze</span>
                </div>
              </header>
            </div>
          </section>

          <section
            className="section alt section-brand-white pricing-explorer-section"
            aria-label="Explore all OrenGen plans"
          >
            <div className="container">
              <PricingExplorer />
            </div>
          </section>

          <section
            className="section section-brand-blue"
            id="orenconsulting"
            aria-label="Custom and advisory engagements"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Need a custom operating layer?</div>
                <h2>Products when they fit. Architecture when they do not.</h2>
                <p className="lead">
                  OrenConsulting covers fractional leadership, custom AI
                  engineering, regulated deployments, and multi-product
                  implementations that need a scoped Statement of Work.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://api.orengen.io/booking/coffeechat"
                  >
                    Architect the Briefing
                  </a>
                  <a className="btn btn-secondary" href="/contact-us">
                    Send Your Requirements
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
