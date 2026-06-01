import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * About page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from Footer-pages/about/page.html —
 * only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "About OrenGen Worldwide",
  description:
    "OrenGen Worldwide LLC is a certified minority-owned AI automation company based in Texas. SAM.gov registered. Serving businesses nationwide.",
  keywords: "about, OrenGen, OrenGen Worldwide, AI infrastructure, about",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About OrenGen Worldwide",
    description:
      "OrenGen Worldwide LLC is a certified minority-owned AI automation company based in Texas. SAM.gov registered. Serving businesses nationwide.",
    url: "https://orengen.io/about",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function AboutPage() {
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
            aria-label="About"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">About</div>
                <h1>
                  About <span className="gradient-word shimmer">OrenGen</span>
                </h1>
                <p className="lead">
                  OrenGen Worldwide LLC is a certified minority-owned AI
                  automation company based in Texas. SAM.gov registered. Serving
                  businesses nationwide.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">500% YoY documented</span>
                  <span className="chip">$13M+ savings captured</span>
                  <span className="chip">NIST 800-53 aligned</span>
                  <span className="chip">SAM.gov active</span>
                </div>
              </header>
            </div>
          </section>

          {/* DOCUMENT CONTENT */}
          <section
            className="section alt section-brand-white"
            aria-label="Document content"
          >
            <div className="container">
              <div className="reveal">
                <p>
                  We build AI systems that sell, support, and scale &mdash; so
                  your team can focus on growth, not operations.
                </p>
                <p>&#123;stat&#125;</p>
                <p>&#123;label&#125;</p>
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
                <h2>Ready to architect your own sovereign stack?</h2>
                <p>
                  Founder-direct response within four hours. No intake
                  associates. The first conversation is with the architect.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="mailto:briefing@orengen.io"
                  >
                    Architect the Briefing
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
