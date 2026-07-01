import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * /contact-us — dedicated contact page (previously /contact only redirected
 * to the homepage's #contact anchor, and had no standalone URL of its own).
 * Same intake form + PATHS + /api/intake-sync backend as the homepage
 * section, so routing/webhook behavior stays identical.
 */
export const metadata: Metadata = {
  title: "Contact Us | OrenGen Worldwide — Enterprise AI Infrastructure",
  description:
    "Contact OrenGen Worldwide. Email sales, call 833-ORENGEN, or submit an architecture brief and we'll route your inquiry to the right team — founder-direct response within four hours.",
  keywords:
    "contact orengen, orengen sales, orengen support, enterprise ai infrastructure contact, architecture brief",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us | OrenGen Worldwide",
    description:
      "Email sales, call 833-ORENGEN, or submit an architecture brief and we'll route your inquiry to the right team.",
    url: "https://orengen.io/contact-us",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

const PATHS = [
  "OrenGov / Public Sector", "OrenGov / State & Local", "OrenGov / Education", "OrenGov / Defense",
  "OrenHealth / Healthcare", "OrenHealth / Hospitals", "OrenHealth / Specialty Clinics", "OrenHealth / Research",
  "OrenLegal / Legal Operations", "OrenAgents / Voice Agents", "OrenAgents / AI Employees",
  "OrenAutomations / Workflow Automation", "OrenWeb / Portal Architecture", "OrenSocial / Authority Systems",
  "OrenNexus / Platform Architecture", "OrenConsulting / Executive Strategy",
];

export default function ContactUsPage() {
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
            aria-label="Contact OrenGen Worldwide"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Contact</div>
                <h1>
                  Talk to{" "}
                  <span className="gradient-word shimmer">OrenGen, directly.</span>
                </h1>
                <p className="lead">
                  Email sales, call the team, or submit an architecture brief
                  below. Every inquiry routes to the right team by brand line,
                  sector, and deployment model — founder-direct response
                  within four hours.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="mailto:sales@orengen.io">
                    Email Sales
                  </a>
                  <a className="btn btn-secondary" href="tel:+18336736436">
                    Call 833-ORENGEN
                  </a>
                </div>
                <div className="trust-row reveal" style={{ justifyContent: "center" }}>
                  <span className="chip">
                    <strong>Email</strong> sales@orengen.io
                  </span>
                  <span className="chip">
                    <strong>Phone</strong> 833-ORENGEN
                  </span>
                  <span className="chip">
                    <strong>Location</strong> Mansfield, Texas
                  </span>
                  <span className="chip">
                    <strong>Response</strong> Founder-direct, &lt;4 hrs
                  </span>
                </div>
              </header>
            </div>
          </section>

          {/* DIRECT CHANNELS */}
          <section
            className="section alt section-brand-white"
            aria-label="Direct contact channels"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Direct Channels</div>
                <h2>
                  Three ways to reach us.{" "}
                  <span style={ACCENT}>Pick what fits.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Email Sales</h3>
                  <p>
                    For pricing, scoping, and general inquiries. We reply
                    founder-direct, usually same business day.
                  </p>
                  <a className="card-link" href="mailto:sales@orengen.io">
                    sales@orengen.io →
                  </a>
                </article>
                <article className="sector-card">
                  <h3>Call the Team</h3>
                  <p>
                    Speak with OrenGen directly for time-sensitive procurement,
                    security, or deployment questions.
                  </p>
                  <a className="card-link" href="tel:+18336736436">
                    833-ORENGEN →
                  </a>
                </article>
                <article className="sector-card">
                  <h3>Book a Briefing</h3>
                  <p>
                    Open a live capability briefing on the calendar — scoped
                    to your sector and deployment model.
                  </p>
                  <a
                    className="card-link"
                    href="https://api.orengen.io/widget/booking/EvvNIyeXdLksQikeO6en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open scheduler →
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* ARCHITECTURE BRIEF FORM */}
          <section className="section section-brand-blue" id="contact">
            <div className="container">
              <div className="contact-panel reveal">
                <div>
                  <div className="eyebrow">Executive Briefing</div>
                  <h2>Start with the architecture brief.</h2>
                  <p>
                    Select every path that applies. We route the conversation
                    by brand line, risk profile, integration need, and
                    deployment model.
                  </p>
                  <div className="cta-row">
                    <a className="btn btn-primary" href="mailto:sales@orengen.io">
                      Email Sales
                    </a>
                    <a className="btn btn-secondary" href="tel:+18336736436">
                      Call 833-ORENGEN
                    </a>
                  </div>
                </div>
                <div className="briefing-card" aria-label="Briefing intake form">
                  <form action="/api/intake-sync" method="post">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Full name" autoComplete="name" required />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="name@company.com" autoComplete="email" required />
                    <fieldset className="path-checks">
                      <legend>Enterprise Paths — Check all that apply</legend>
                      {PATHS.map((path) => (
                        <label key={path}>
                          <input type="checkbox" name="paths[]" value={path} /> <span>{path}</span>
                        </label>
                      ))}
                    </fieldset>
                    <label htmlFor="message">Brief</label>
                    <textarea id="message" name="message" placeholder="What system are we architecting?" required />
                    <button className="btn btn-primary" type="submit">Request Briefing</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
        <SiteRuntime />
      </div>
    </>
  );
}
