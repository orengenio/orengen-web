import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Pricing page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from Footer-pages/pricing/page.html —
 * only presentation/layout changed. Source is a GoHighLevel body fragment with
 * no <title>; metadata title derived from og:title.
 */
export const metadata: Metadata = {
  title: "Pricing — OrenGen Worldwide",
  description:
    "Transparent pricing across the OrenGen suite. Voice agents, CRM, automation, web, email, social, and consulting tiers in one place.",
  keywords: "pricing, OrenGen, OrenGen Worldwide, AI infrastructure, pricing",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — OrenGen Worldwide",
    description:
      "Transparent pricing across the OrenGen suite. Voice agents, CRM, automation, web, email, social, and consulting tiers in one place.",
    url: "https://orengen.io/pricing",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

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
          {/* HERO */}
          <section
            className="section section-brand-blue"
            aria-label="Pricing"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Pricing</div>
                <h1>
                  Transparent. Modular.{" "}
                  <span className="gradient-word shimmer">No Per-Seat Tax.</span>
                </h1>
                <p className="lead">
                  Pick the products you need. Bundle for compound discounts. Open
                  OrenKanBuilder™ to configure your exact engine with live
                  pricing.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">Monthly or annual</span>
                  <span className="chip">Bundle discounts auto-applied</span>
                  <span className="chip">White-label optional</span>
                  <span className="chip">No long-term contracts on monthly</span>
                </div>
              </header>
            </div>
          </section>

          {/* OrenAgents — AI Digital Employees */}
          <section
            className="section alt section-brand-white"
            aria-label="OrenAgents — AI Digital Employees"
          >
            <div className="container">
              <header className="section-head reveal">
                <h2>OrenAgents — AI Digital Employees</h2>
                <p>
                  AI employees that handle inbound and outbound calls,
                  qualification, CRM logging, and reporting. Buy-Lingual™ 100+
                  world languages included.
                </p>
              </header>
              <div className="cost-grid reveal">
                <article className="sector-card">
                  <div className="step">Standard</div>
                  <h3>$97/mo · 1 AI Employee</h3>
                  <p>
                    + $497 setup. Buy-Lingual™, lead qualification, CRM
                    integration, task automation.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">Professional · Most Popular</div>
                  <h3>$197/mo · 3 AI Employees</h3>
                  <p>
                    + $997 setup. Advanced automation, multi-CRM integration,
                    priority support.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">Premium</div>
                  <h3>$497/mo · Unlimited AI Employees</h3>
                  <p>
                    + $2,497 setup. Custom AI personalities, dedicated account
                    manager, full automation stack.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* OrenAgents — AI Voice Agents */}
          <section
            className="section section-brand-blue"
            aria-label="OrenAgents — AI Voice Agents"
          >
            <div className="container">
              <header className="section-head reveal">
                <h2>OrenAgents — AI Voice Agents</h2>
                <p>
                  Voice agents handling inbound + outbound calls in 100+ world
                  languages.
                </p>
              </header>
              <div className="cost-grid reveal">
                <article className="sector-card">
                  <div className="step">Standard</div>
                  <h3>$197/mo · 1 AI Voice Agent</h3>
                  <p>
                    + $997 setup. Inbound call handling, lead qualification, CRM
                    integration.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">Professional · Most Popular</div>
                  <h3>$397/mo · 3 AI Voice Agents</h3>
                  <p>
                    + $1,997 setup. Inbound + outbound, appointment booking,
                    multi-CRM.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">Premium</div>
                  <h3>$797/mo · Unlimited Voice Agents</h3>
                  <p>
                    + $4,997 setup. Full Buy-Lingual™ suite, custom voices, SLA
                    guarantee.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* OrenNexus — Unified CRM + Automation Hub */}
          <section
            className="section alt section-brand-white"
            aria-label="OrenNexus — Unified CRM + Automation Hub"
          >
            <div className="container">
              <header className="section-head reveal">
                <h2>OrenNexus — Unified CRM + Automation Hub</h2>
                <p>
                  Replaces standalone CRM, lead-gen, marketing automation, and
                  email/SMS platforms.
                </p>
              </header>
              <div className="cost-grid reveal">
                <article className="sector-card">
                  <div className="step">Starter</div>
                  <h3>From $97/mo</h3>
                  <p>
                    Unified CRM, pipeline, automation, email + SMS, white-label
                    optional.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">Agency · White-Label</div>
                  <h3>Custom</h3>
                  <p>
                    Multi-tenant agency edition, sub-account management, full
                    brand control.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* The OrenGen Suite */}
          <section
            className="section section-brand-blue"
            aria-label="The OrenGen Suite"
          >
            <div className="container">
              <header className="section-head reveal">
                <h2>The OrenGen Suite</h2>
                <p>
                  Bundle multiple products for compound discounts. Every product
                  is also available standalone.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">OrenWeb</div>
                  <h3>From $247/mo</h3>
                  <p>
                    Custom websites, AI voice-enabled sites, web apps,
                    e-commerce, UI/UX, maintenance.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">OrenMail</div>
                  <h3>From $97/mo</h3>
                  <p>
                    Bulk email engine on your sending domain. Unlimited contacts.
                    Full deliverability intel.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">OrenSocial</div>
                  <h3>From $47/mo</h3>
                  <p>
                    Multi-channel social scheduling, AI content, engagement
                    inbox, white-label reports.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">OrenAutomations</div>
                  <h3>Custom</h3>
                  <p>
                    White-glove workflow automation on self-hosted n8n. We
                    design, build, deploy, manage.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">OrenForms</div>
                  <h3>From $47/mo</h3>
                  <p>Smart surveys, NPS, lead forms. AI-scored, real-time routing.</p>
                </article>
                <article className="sector-card">
                  <div className="step">OrenBase, OrenFlow, OrenObserve</div>
                  <h3>Bundle pricing</h3>
                  <p>
                    Backend, LLM orchestration, and observability. Available as
                    part of OrenGen Suite engagements.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* OrenConsulting — Fractional C-Suite + Custom AI Engineering */}
          <section
            className="section alt section-brand-white"
            aria-label="OrenConsulting — Fractional C-Suite + Custom AI Engineering"
          >
            <div className="container">
              <header className="section-head reveal">
                <h2>
                  OrenConsulting — Fractional C-Suite + Custom AI Engineering
                </h2>
                <p>
                  Fractional CTO, CEO, CMO, COO, CIO — with hands-on AI
                  engineering included. Deploy in 2 weeks, cancel anytime.
                </p>
              </header>
              <div className="cost-grid reveal">
                <article className="sector-card">
                  <div className="step">Advisory</div>
                  <h3>Fractional engagement</h3>
                  <p>
                    10, 20, or 40 hours/week. Strategy plus engineering. Cancel
                    anytime.
                  </p>
                </article>
                <article className="sector-card">
                  <div className="step">Embedded</div>
                  <h3>Custom enterprise</h3>
                  <p>
                    Full embedded executive plus engineering team. Multi-quarter
                    modernization scope.
                  </p>
                </article>
              </div>
              <div className="sector-trust reveal">
                <p>
                  <strong>Bundle discounts:</strong> 10% off when deploying 2+
                  products. 20% off when deploying 4+. 30% off OrenGen Suite
                  engagements (5+ products with consulting overlay).
                </p>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Contact OrenGen"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Configure the exact AI engine your business needs.</h2>
                <p>
                  Open OrenKanBuilder™ for live pricing, or book a 30-min call to
                  map the right configuration.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://book.orengen.io/coffeechat"
                  >
                    Book a Strategy Call
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
