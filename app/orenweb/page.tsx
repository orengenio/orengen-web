import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenWeb hub page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from main-core-pages/orenweb.html —
 * only presentation/layout changed.
 */
export const metadata: Metadata = {
  title:
    "OrenWeb — Custom Websites + AI Voice-Enabled Web Experiences | OrenGen",
  description:
    "OrenWeb is OrenGen's website practice: high-converting custom sites (OrenWeb Design) and AI voice + chat embedded websites (OrenWeb Talk). From $147/mo.",
  keywords: "orenweb, custom websites, ai talking sites, web design, orengen",
  alternates: { canonical: "/orenweb" },
  openGraph: {
    title:
      "OrenWeb — Custom Websites + AI Voice-Enabled Web Experiences | OrenGen",
    description:
      "One Ecosystem. Two Practices. Total Web Coverage. Design builds it. Talk makes it converse.",
    url: "https://orengen.io/orenweb",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenWebPage() {
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
            aria-label="OrenWeb — Web and Voice-Enabled Sites"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Web &amp; Voice-Enabled Sites</div>
                <h1>
                  One Ecosystem.{" "}
                  <span className="gradient-word shimmer">Two Practices.</span>{" "}
                  Total Web Coverage.
                </h1>
                <p className="lead">
                  OrenWeb is OrenGen&apos;s website practice.{" "}
                  <strong>Design</strong> builds custom, high-converting sites
                  engineered to rank and convert. <strong>Talk</strong> embeds
                  AI voice and chat directly into your site. Deploy one, the
                  other, or both.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#ecosystem">
                    Explore OrenWeb
                  </a>
                </div>
              </header>
            </div>
          </section>

          {/* THE PILLARS */}
          <section
            className="section alt section-brand-white"
            id="ecosystem"
            aria-label="The Web Directory"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Web Directory</div>
                <h2>
                  Choose Your Path to{" "}
                  <span style={ACCENT}>Digital Dominance.</span>
                </h2>
              </header>
              <div className="cost-grid reveal">
                {/* Pillar 1 — Design */}
                <article className="sector-card">
                  <h3>
                    <span style={ACCENT}>The Build:</span> OrenWeb Design
                  </h3>
                  <p>
                    Custom marketing sites, apps, and e-commerce built to
                    convert. Hosting, SSL, SEO engineering, and ongoing
                    maintenance included.
                  </p>
                  <div className="sector-trust">
                    Starting from <strong>$247/mo</strong>
                  </div>
                  <a className="card-link" href="/orenweb/design">
                    Explore Design Pricing →
                  </a>
                </article>

                {/* Pillar 2 — Talk */}
                <article className="sector-card">
                  <h3>
                    <span style={ACCENT}>The Conversation:</span> OrenWeb Talk
                  </h3>
                  <p>
                    AI voice and chat embedded in any website. Visitors speak to
                    your brand in 100+ languages, get qualified, and book inline
                    — 24/7.
                  </p>
                  <div className="sector-trust">
                    Starting from <strong>$147/mo</strong>
                  </div>
                  <a className="card-link" href="/orenweb/talk">
                    Explore Talk Pricing →
                  </a>
                </article>

                {/* Pillar 3 — Full Stack (Recommended) */}
                <article className="sector-card">
                  <div className="step">Recommended Configuration</div>
                  <h3>
                    The <span style={ACCENT}>&quot;Full Stack&quot;</span>{" "}
                    Deployment
                  </h3>
                  <p>
                    Design builds the high-performance site. Talk embeds the AI
                    conversation layer. Most clients deploy both for a site that
                    converts and converses.
                  </p>
                  <div className="sector-trust">Best Value Deployment</div>
                  <a className="card-link" href="/orenweb/design">
                    Explore Design Pricing →
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* AUTHORITY CHIPS */}
          <section
            className="section section-brand-white"
            aria-label="Built For Enterprise Excellence"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Built For Enterprise Excellence</div>
              </header>
              <div
                className="trust-row reveal"
                style={{ justifyContent: "center" }}
              >
                <span className="chip">SAM.gov Active</span>
                <span className="chip">MBE Certified</span>
                <span className="chip">7 Anthropic Certs</span>
                <span className="chip">NIST-Aligned</span>
                <span className="chip">HIPAA-Enabled</span>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section alt section-brand-blue"
            aria-label="The Future of Web"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Future of Web</div>
                <h2>
                  Launch Your Site{" "}
                  <span style={ACCENT}>In Days, Not Months.</span>
                </h2>
                <p>
                  Choose your practice and get instant access. Design ships in
                  weeks. Talk deploys in days on any existing site. No long-term
                  contracts required.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#ecosystem">
                    Get Started Now
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
