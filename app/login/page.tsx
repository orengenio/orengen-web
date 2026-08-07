import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Login page — real portals only:
 * OrenNexus (app), Affiliates, Sales Partners.
 */
export const metadata: Metadata = {
  title: "Sign In — OrenGen Worldwide",
  description:
    "Sign in to OrenNexus, Affiliates, or Sales Partners. Choose the portal that matches your OrenGen account.",
  keywords: "login, OrenGen, OrenNexus, Affiliates, Sales Partners, sign in",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: { canonical: "/login" },
  openGraph: {
    type: "website",
    title: "Sign In — OrenGen Worldwide",
    description:
      "Sign in to OrenNexus, Affiliates, or Sales Partners. Choose the portal that matches your OrenGen account.",
    url: "https://orengen.io/login",
  },
};

const PORTALS = [
  {
    name: "OrenNexus",
    blurb: "Client CRM & pipeline",
    href: "https://app.orengen.io",
    cta: "Sign in to OrenNexus →",
  },
  {
    name: "Affiliates",
    blurb: "Affiliate partner dashboard",
    href: "https://affiliates.orengen.io",
    cta: "Sign in to Affiliates →",
  },
  {
    name: "Sales Partners",
    blurb: "Sales partner dashboard",
    href: "https://salespartners.orengen.io",
    cta: "Sign in to Sales Partners →",
  },
] as const;

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
          <section
            className="section section-brand-blue"
            aria-label="OrenGen portals"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Portals</div>
                <h1>
                  Sign In to Your{" "}
                  <span className="gradient-word shimmer">
                    OrenGen Account.
                  </span>
                </h1>
                <p className="lead">
                  Choose the portal that matches your role — client, affiliate,
                  or sales partner.
                </p>
              </header>
            </div>
          </section>

          <section
            className="section alt section-brand-white"
            aria-label="Sign in surface"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Choose Your Portal</h2>
                <p>
                  Sign in through the portal for your deployed product or partner
                  program.
                </p>
              </header>

              <div className="sector-grid compact reveal login-portal-grid">
                {PORTALS.map((portal) => (
                  <article className="sector-card" key={portal.name}>
                    <div className="step">{portal.name}</div>
                    <h3>{portal.blurb}</h3>
                    <a
                      className="card-link"
                      href={portal.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {portal.cta}
                    </a>
                  </article>
                ))}
              </div>

              <p className="login-access-note reveal">
                <strong>Need access?</strong> If you don&apos;t yet have a
                Counterpart account, open the briefing at{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a> to
                deploy your stack.
              </p>
            </div>
          </section>

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
