import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * /contact-us — standard contact page: direct contact info (email, phone,
 * address, hours), a booking link, and the architecture-brief intake form
 * that posts to /api/intake-sync (same backend as the homepage section).
 * All contact details below are the real, already-published facts used
 * across the /legal pages (address, hours, department emails) — nothing
 * here is invented.
 */
export const metadata: Metadata = {
  title: "Contact Us | OrenGen Worldwide — Enterprise AI Infrastructure",
  description:
    "Contact OrenGen Worldwide. Email, call 833-ORENGEN, or book a call. Mansfield, Texas. Monday-Friday, 9:00 AM - 6:00 PM CST.",
  keywords:
    "contact orengen, orengen sales, orengen support, enterprise ai infrastructure contact, architecture brief",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us | OrenGen Worldwide",
    description:
      "Email, call 833-ORENGEN, or book a call. Mansfield, Texas. Monday-Friday, 9:00 AM - 6:00 PM CST.",
    url: "https://orengen.io/contact-us",
  },
};

const PATHS = [
  "OrenGov / Public Sector", "OrenGov / State & Local", "OrenGov / Education", "OrenGov / Defense",
  "OrenHealth / Healthcare", "OrenHealth / Hospitals", "OrenHealth / Specialty Clinics", "OrenHealth / Research",
  "OrenLegal / Legal Operations", "OrenAgents / Voice Agents", "OrenAgents / AI Employees",
  "OrenAutomations / Workflow Automation", "OrenWeb / Portal Architecture", "OrenSocial / Authority Systems",
  "OrenNexus / Platform Architecture", "OrenConsulting / Executive Strategy",
];

const ADDRESS = "1812 Open Range Drive, Mansfield, Texas 76063";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

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
                  Contact <span className="gradient-word shimmer">OrenGen Worldwide.</span>
                </h1>
                <p className="lead">
                  Reach our team by phone, email, or the form below. We
                  respond to every inquiry within one business day.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="mailto:sales@orengen.io">
                    Email Us
                  </a>
                  <a className="btn btn-secondary" href="tel:+18336736436">
                    Call 833-ORENGEN
                  </a>
                </div>
              </header>
            </div>
          </section>

          {/* CONTACT INFO */}
          <section
            className="section alt section-brand-white"
            aria-label="Contact information"
          >
            <div className="container">
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Email Us</h3>
                  <p>Sales: <a className="card-link" href="mailto:sales@orengen.io">sales@orengen.io</a></p>
                  <p>Support: <a className="card-link" href="mailto:support@orengen.io">support@orengen.io</a></p>
                  <p>Legal: <a className="card-link" href="mailto:legal@orengen.io">legal@orengen.io</a></p>
                </article>
                <article className="sector-card">
                  <h3>Call Us</h3>
                  <p>
                    <a className="card-link" href="tel:+18336736436">833-ORENGEN</a> (833-673-6436)
                  </p>
                  <p>Monday – Friday, 9:00 AM – 6:00 PM CST</p>
                </article>
                <article className="sector-card">
                  <h3>Visit Us</h3>
                  <p>{ADDRESS}</p>
                  <a className="card-link" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    Get Directions →
                  </a>
                </article>
                <article className="sector-card">
                  <h3>Office Hours</h3>
                  <p>Monday – Friday: 9:00 AM – 6:00 PM CST</p>
                  <p>Saturday – Sunday: Closed</p>
                </article>
              </div>
            </div>
          </section>

          {/* SUPPORT CHANNELS */}
          <section
            className="section section-brand-blue"
            aria-label="More ways to connect"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">More Ways to Connect</div>
                <h2>Pick the channel that works for you.</h2>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Book a Call</h3>
                  <p>Schedule a 30-minute call directly on our calendar.</p>
                  <a
                    className="card-link"
                    href="https://api.orengen.io/booking/og-j39qvisxpas/sc/discovery-meet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open scheduler →
                  </a>
                </article>
                <article className="sector-card">
                  <h3>Live Chat</h3>
                  <p>Chat with our team in real time using the chat button in the corner of your screen.</p>
                </article>
                <article className="sector-card">
                  <h3>Help Center</h3>
                  <p>Browse answers to common questions about deployment, pricing, and security.</p>
                  <a className="card-link" href="/faqs">
                    Visit FAQs →
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* ARCHITECTURE BRIEF FORM */}
          <section className="section alt section-brand-white" id="contact">
            <div className="container">
              <div className="contact-panel reveal">
                <div>
                  <div className="eyebrow">Send Us a Message</div>
                  <h2>Tell us about your project.</h2>
                  <p>
                    Select every path that applies so we can route your
                    message to the right team.
                  </p>
                </div>
                <div className="briefing-card" aria-label="Contact form">
                  <form action="/api/intake-sync" method="post">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Full name" autoComplete="name" required />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="name@company.com" autoComplete="email" required />
                    <fieldset className="path-checks">
                      <legend>I&apos;m interested in — check all that apply</legend>
                      {PATHS.map((path) => (
                        <label key={path}>
                          <input type="checkbox" name="paths[]" value={path} /> <span>{path}</span>
                        </label>
                      ))}
                    </fieldset>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us about your project, goals, and how we can help." required />
                    <button className="btn btn-primary" type="submit">Send Message</button>
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
