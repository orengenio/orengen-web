import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Careers page. Content sourced from the client-provided careers page
 * export, re-skinned into the current brand system (Public Sans, not the
 * source's League Spartan/Canva Sans — the brand guidelines standardize on
 * one typeface sitewide).
 */
export const metadata: Metadata = {
  title: "Careers — Join OrenGen Worldwide LLC | AI Innovation Jobs",
  description:
    "Explore career opportunities at OrenGen Worldwide. We're building the future of AI automation. Join our team of experts in AI engineering, DevOps, and administration.",
  keywords: "OrenGen careers, AI jobs, DevOps jobs, tech careers, AI engineer jobs, automation careers",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers — Join OrenGen Worldwide LLC | AI Innovation Jobs",
    description:
      "Explore career opportunities at OrenGen Worldwide. Join our team of experts in AI engineering, DevOps, and administration.",
    url: "https://orengen.io/careers",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

const ROLES = [
  { num: "01", h3: "AI Engineers", p: "Build and deploy production-grade AI systems. Work with LLMs, machine learning models, and autonomous agents that operate at enterprise scale." },
  { num: "02", h3: "DevOps Engineers", p: "Architect and maintain infrastructure that powers millions of operations. CI/CD pipelines, Kubernetes, cloud infrastructure, and automation at scale." },
  { num: "03", h3: "Administrators", p: "Keep our operations running smoothly. Manage systems, coordinate teams, handle logistics, and ensure everything from compliance to daily operations is flawless." },
];

const BENEFITS = [
  { h4: "Cutting-Edge Tech", p: "Work with the latest AI models, cloud infrastructure, and automation technologies. Stay at the forefront of innovation." },
  { h4: "Real Impact", p: "Your work directly transforms how businesses operate. See the immediate results of your contributions at enterprise scale." },
  { h4: "Remote-First", p: "Work from anywhere. We believe in flexibility, autonomy, and building a global team of top talent." },
  { h4: "Growth Focused", p: "Rapid company growth means rapid career growth. Learn, lead, and level up faster than anywhere else." },
  { h4: "Smart Team", p: "Collaborate with industry veterans, innovators, and problem-solvers who push you to be better every day." },
  { h4: "Move Fast", p: "No bureaucracy. No red tape. Ship fast, iterate faster, and see your ideas go from concept to production in days." },
];

export default function CareersPage() {
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
            aria-label="Careers"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Join the Revolution</div>
                <h1>
                  Build the Future with{" "}
                  <span className="gradient-word shimmer">OrenGen.</span>
                </h1>
                <p className="lead">
                  We&apos;re a team of innovators, engineers, and
                  problem-solvers building AI systems that transform how
                  businesses operate. If you&apos;re passionate about
                  cutting-edge technology and real-world impact, you belong
                  here.
                </p>
              </header>
            </div>
          </section>

          {/* HIRING FREEZE NOTICE */}
          <section
            className="section alt section-brand-white"
            aria-label="Hiring status"
          >
            <div className="container">
              <div className="cap reveal" style={{ borderBottom: "none", maxWidth: 720, margin: "0 auto" }}>
                <p>
                  <strong>Hiring Freeze in Effect.</strong> We&apos;re
                  currently in a strategic planning phase and have paused
                  active hiring. We&apos;ll update this page when positions
                  become available, so check back periodically to see
                  what&apos;s new.
                </p>
              </div>
            </div>
          </section>

          {/* ROLES OPENING SOON */}
          <section
            className="section section-brand-blue"
            aria-label="Roles opening soon"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Roles Opening Soon</div>
                <h2>
                  These positions open{" "}
                  <span style={ACCENT}>once strategic planning wraps.</span>
                </h2>
                <p>Check this page periodically for updates.</p>
              </header>
              <div className="sector-grid reveal">
                {ROLES.map((r) => (
                  <article className="sector-card" key={r.num}>
                    <div className="step">{r.num}</div>
                    <h3>{r.h3}</h3>
                    <p>{r.p}</p>
                    <div className="sector-trust">Coming Soon</div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* WHY ORENGEN */}
          <section
            className="section alt section-brand-white"
            aria-label="Why OrenGen"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Why OrenGen?</div>
                <h2>
                  We&apos;re building the infrastructure{" "}
                  <span style={ACCENT}>that powers the next generation of business automation.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                {BENEFITS.map((b) => (
                  <article className="sector-card" key={b.h4}>
                    <h3>{b.h4}</h3>
                    <p>{b.p}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CHECK BACK CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Check back soon"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Check Back <span style={ACCENT}>Soon</span></h2>
                <p>
                  We&apos;ll update this page when positions open. In the
                  meantime, follow our progress and see what we&apos;re
                  building for the future of AI automation.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="/">
                    Explore OrenGen
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
