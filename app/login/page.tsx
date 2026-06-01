import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Login page (Counterpart Portal).
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from Footer-pages/login/page.html —
 * only presentation/layout changed. Title taken from og:title (no <title> tag
 * in source); description/keywords/canonical/openGraph from source meta tags.
 */
export const metadata: Metadata = {
  title: "Sign In — OrenGen Worldwide",
  description:
    "Sign in to your OrenGen Counterpart portal. Self-hosted authentication on OrenBase. Single sign-on available for enterprise tiers.",
  keywords: "login, OrenGen, OrenGen Worldwide, AI infrastructure, sign in",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: { canonical: "/login" },
  openGraph: {
    type: "website",
    title: "Sign In — OrenGen Worldwide",
    description:
      "Sign in to your OrenGen Counterpart portal. Self-hosted authentication on OrenBase. Single sign-on available for enterprise tiers.",
    url: "https://orengen.io/login",
  },
};

export default function LoginPage() {
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
            aria-label="Counterpart Portal"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Counterpart Portal</div>
                <h1>
                  Sign In to Your{" "}
                  <span className="gradient-word shimmer">
                    OrenGen Account.
                  </span>
                </h1>
                <p className="lead">
                  Sign in to your OrenGen Counterpart portal. Self-hosted
                  authentication on OrenBase. Single sign-on available for
                  enterprise tiers.
                </p>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">SSO available</span>
                  <span className="chip">MFA enforced</span>
                  <span className="chip">Self-hosted auth via OrenBase</span>
                </div>
              </header>
            </div>
          </section>

          {/* CHOOSE YOUR PORTAL */}
          <section
            className="section alt section-brand-white"
            aria-label="Sign in surface"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Choose Your Portal</h2>
                <p>
                  OrenGen Counterparts authenticate through the portal
                  corresponding to their deployed products. Single sign-on
                  across portals is available on enterprise tiers.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">OrenNexus</div>
                  <h3>CRM &amp; Pipeline</h3>
                  <a
                    className="card-link"
                    href="https://app.orengen.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign in to OrenNexus →
                  </a>
                </article>
                <article className="sector-card">
                  <div className="step">OrenBase</div>
                  <h3>Backend &amp; Auth</h3>
                  <a
                    className="card-link"
                    href="https://appwrite.orengen.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign in to OrenBase →
                  </a>
                </article>
                <article className="sector-card">
                  <div className="step">OrenFlow</div>
                  <h3>Visual LLM Orchestration</h3>
                  <a
                    className="card-link"
                    href="https://langflow.orengen.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign in to OrenFlow →
                  </a>
                </article>
                <article className="sector-card">
                  <div className="step">OrenObserve</div>
                  <h3>LLM Observability</h3>
                  <a
                    className="card-link"
                    href="https://langfuse.orengen.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign in to OrenObserve →
                  </a>
                </article>
                <article className="sector-card">
                  <div className="step">OrenForms</div>
                  <h3>Forms &amp; Surveys</h3>
                  <a
                    className="card-link"
                    href="https://formbricks.orengen.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign in to OrenForms →
                  </a>
                </article>
                <article className="sector-card">
                  <div className="step">OrenMail</div>
                  <h3>Email Engine</h3>
                  <a
                    className="card-link"
                    href="https://orengen.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign in to OrenMail →
                  </a>
                </article>
              </div>

              <div className="cap reveal" style={{ marginTop: "2rem" }}>
                <p>
                  <strong>Need access?</strong> If you don&apos;t yet have a
                  Counterpart account, open the briefing at{" "}
                  <a href="mailto:briefing@orengen.io">briefing@orengen.io</a>{" "}
                  to deploy your stack.
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
                <h2>Account or sign-in issues?</h2>
                <p>
                  Reach OrenGen support directly. We respond to access issues
                  within one business hour.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="mailto:support@orengen.io"
                  >
                    Contact Support
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
