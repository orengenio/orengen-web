import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Legal Center — the hub indexing all /legal/* documents. Fixes the previously
 * dead `/legal` nav link and gives search engines a single crawlable index of
 * OrenGen's policies. Native page using the shared brand shell + section-brand
 * classes (no new compliance claims — purely navigation/description).
 */
export const metadata: Metadata = {
  title: "Legal Center — OrenGen Worldwide",
  description:
    "OrenGen Worldwide LLC legal and compliance documents in one place: privacy, terms, cookies, acceptable use, AI communications consent, security, and IP policies.",
  alternates: { canonical: "/legal" },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    title: "Legal Center — OrenGen Worldwide",
    description:
      "Every OrenGen Worldwide policy, consent, and compliance document in one place.",
    url: "https://orengen.io/legal",
  },
};

const GROUPS: { heading: string; docs: { href: string; title: string; desc: string }[] }[] = [
  {
    heading: "Core Policies",
    docs: [
      { href: "/legal/privacy-policy", title: "Privacy Policy", desc: "How we collect, use, and protect personal data — GDPR & CCPA aligned." },
      { href: "/legal/terms", title: "Terms & Conditions", desc: "The agreement governing your use of OrenGen products and services." },
      { href: "/legal/cookie-policy", title: "Cookie Policy", desc: "The cookies and similar technologies we use, and your choices." },
      { href: "/legal/acceptable-use", title: "Acceptable Use Policy", desc: "Permitted and prohibited uses of our platform and AI systems." },
    ],
  },
  {
    heading: "AI & Communications Consent",
    docs: [
      { href: "/legal/ai-communications-opt-in", title: "AI-Communications Opt-In", desc: "Consent for AI-assisted and automated communications." },
      { href: "/legal/ai-sms-opt-in", title: "SMS & AI Call Opt-In", desc: "Consent terms for SMS messaging and AI voice-agent calls." },
    ],
  },
  {
    heading: "Intellectual Property",
    docs: [
      { href: "/legal/copyright-notice", title: "Copyright Notice", desc: "Ownership of site content and our copyright / takedown process." },
      { href: "/legal/trademark-policy", title: "Trademark Policy", desc: "Proper use of OrenGen marks, logos, and brand assets." },
    ],
  },
  {
    heading: "Trust, Security & Other",
    docs: [
      { href: "/legal/security-overview", title: "Security Overview", desc: "Our security posture, controls, and data-protection practices." },
      { href: "/legal/legal-disclaimers", title: "Legal Disclaimers", desc: "Important disclaimers regarding our services and content." },
      { href: "/legal/refund-policy", title: "Refund Policy", desc: "Terms for refunds and cancellations." },
    ],
  },
];

export default function LegalHubPage() {
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          <section className="section section-brand-blue" aria-label="Legal Center">
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Legal &amp; Compliance</div>
                <h1>
                  OrenGen{" "}
                  <span className="gradient-word shimmer">Legal Center</span>
                </h1>
                <p className="lead">
                  Every policy, consent, and compliance document in one place.
                  OrenGen Worldwide LLC maintains transparent, governance-first
                  practices across privacy, security, and AI communications.
                </p>
              </header>
            </div>
          </section>

          <section className="section alt section-brand-white" aria-label="Legal documents">
            <div className="container">
              {GROUPS.map((g) => (
                <div key={g.heading} style={{ marginBottom: "2.75rem" }}>
                  <header className="section-head reveal">
                    <h2>{g.heading}</h2>
                  </header>
                  <div className="sector-grid reveal">
                    {g.docs.map((d) => (
                      <article className="sector-card" key={d.href}>
                        <h3>{d.title}</h3>
                        <p>{d.desc}</p>
                        <a className="card-link" href={d.href}>
                          Read {d.title} →
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <SiteFooter />
        <SiteRuntime />
      </div>
    </>
  );
}
