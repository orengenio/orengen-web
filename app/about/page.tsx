import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * About page. Rebuilt from the official 2026 Brand Guidelines (Mission,
 * Vision, and the "OrenGen Code" core values are quoted verbatim from that
 * document) plus the current live product lineup. Stats used are the ones
 * already verified elsewhere on the site (capability-statement, homepage) —
 * no speculative "2030 goals" or revenue projections are included here.
 */
export const metadata: Metadata = {
  title: "About OrenGen Worldwide",
  description:
    "OrenGen Worldwide LLC architects sovereign AI ecosystems for high-stakes industries — governed by integrity, owned by the enterprise, engineered for measurable impact.",
  keywords: "about, OrenGen, OrenGen Worldwide, AI infrastructure, mission, values",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About OrenGen Worldwide",
    description:
      "OrenGen Worldwide LLC architects sovereign AI ecosystems for high-stakes industries — governed by integrity, owned by the enterprise, engineered for measurable impact.",
    url: "https://orengen.io/about",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

const VALUES = [
  { step: "01", h3: "Ownership over Dependency", p: "We don't build subscriptions; we build assets. If a partner can't walk away with the system we built and run it themselves, we haven't done our job." },
  { step: "02", h3: "Integrity in the Model", p: "AI is a reflection of its architect. We commit to radical transparency in how our models are governed — free from black-box bias and external exploitation." },
  { step: "03", h3: "“Aerospace” Precision", p: "In high-stakes industries, “good enough” is a liability. We apply engineering-grade rigor to every workflow, treating each automation like a mission-critical flight system." },
  { step: "04", h3: "Radical Operational Truth", p: "We don't chase hype. We deploy only technology that drives measurable impact. If it doesn't move the needle, it doesn't get built." },
  { step: "05", h3: "Minority-Led, Authority-Driven", p: "We leverage diverse perspectives to solve what others overlook. We lead with technical excellence and a commitment to empowering the global majority." },
];

const PRODUCTS = [
  { name: "OrenAgents", desc: "Buy-Lingual™ AI voice and chat agents that sell, support, and operate 24/7.", href: "/orenagents" },
  { name: "OrenNexus", desc: "Unified CRM, pipeline, and marketing automation command center.", href: "/orennexus" },
  { name: "OrenWeb", desc: "Custom websites and AI voice-enabled web experiences.", href: "/orenweb" },
  { name: "OrenSocial", desc: "AI-assisted social content scheduling and community engagement.", href: "/orensocial" },
];

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
                  We architect sovereign AI ecosystems for{" "}
                  <span className="gradient-word shimmer">high-stakes industries.</span>
                </h1>
                <p className="lead">
                  OrenGen Worldwide LLC is a certified minority-owned AI
                  infrastructure firm based in Mansfield, Texas. SAM.gov
                  registered. Serving public sector, healthcare, and
                  enterprise organizations nationwide.
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

          {/* MISSION / VISION */}
          <section
            className="section alt section-brand-white"
            aria-label="Mission and vision"
          >
            <div className="container">
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Mission</h3>
                  <p>
                    To architect sovereign AI ecosystems for high-stakes
                    industries — ensuring every model is governed by
                    integrity, owned by the enterprise, and engineered for
                    measurable impact.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Vision</h3>
                  <p>
                    To architect a world where every enterprise — regardless
                    of size or origin — operates with total technical
                    sovereignty, governed by intelligence they own and
                    infrastructure they control.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* CORE VALUES */}
          <section
            className="section section-brand-blue"
            aria-label="Core values"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The OrenGen Code</div>
                <h2>
                  Five non-negotiables.{" "}
                  <span style={ACCENT}>They govern this team and our technology.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                {VALUES.map((v) => (
                  <article className="sector-card" key={v.step}>
                    <div className="step">{v.step}</div>
                    <h3>{v.h3}</h3>
                    <p>{v.p}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* WHAT WE DO */}
          <section
            className="section alt section-brand-white"
            aria-label="What we do"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">What We Do</div>
                <h2>
                  One operating stack.{" "}
                  <span style={ACCENT}>Four products, owned by you.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                {PRODUCTS.map((p) => (
                  <article className="sector-card" key={p.name}>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <a className="card-link" href={p.href}>
                      View {p.name} →
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* LEADERSHIP TEASER */}
          <section
            className="section section-brand-blue"
            aria-label="Leadership"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Leadership</div>
                <h2>
                  Founder-led.{" "}
                  <span style={ACCENT}>Built by a hybrid team of operators and engineers.</span>
                </h2>
                <p>
                  OrenGen is led by Andre Mandel, CEO, alongside a leadership
                  team spanning operations, technology, information systems,
                  and finance.
                </p>
                <div className="cta-row" style={{ justifyContent: "center" }}>
                  <a className="btn btn-primary" href="/leadership">
                    Meet the Leadership Team
                  </a>
                </div>
              </header>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section alt section-brand-white"
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
