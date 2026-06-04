"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Entry = { title: string; url: string; desc: string; cat: string };

/**
 * Static page index for client-side site search. Navigational (title +
 * description + category), not full-text — covers the real use case for a
 * marketing site. Keep in sync with new pages (like app/sitemap.ts).
 */
const INDEX: Entry[] = [
  // Company
  { cat: "Company", title: "Home", url: "/", desc: "OrenGen Worldwide — enterprise AI infrastructure for those who refuse to rent their intelligence." },
  { cat: "Company", title: "About OrenGen", url: "/about", desc: "Sovereign, self-hosted AI ecosystems with NIST-aligned governance." },
  { cat: "Government", title: "Capability Statement", url: "/capability-statement", desc: "Government-contracting capability statement — core competencies, NAICS, CAGE 12XC1, UEI, and certifications." },
  { cat: "Company", title: "Pricing", url: "/pricing", desc: "Transparent pricing and engagement models for OrenGen services." },
  { cat: "Tool", title: "OrenKanBuilder", url: "/orenkanbuilder", desc: "Drag-and-drop builder to configure and price your custom AI engine." },
  { cat: "Company", title: "FAQs", url: "/faqs", desc: "Answers on deployment, pricing, security, and how OrenGen works." },
  { cat: "Company", title: "Case Studies", url: "/case-studies", desc: "Outcomes and results from OrenGen deployments." },
  { cat: "Blog", title: "OrenSignal — Blog", url: "/blog", desc: "AI, infrastructure, governance, and market signals." },
  { cat: "Partners", title: "Affiliate Program", url: "/affiliate-program", desc: "Earn by referring clients to OrenGen." },
  { cat: "Partners", title: "Sales Partner Program", url: "/sales-partner-program", desc: "Build your book as an OrenGen sales partner." },
  { cat: "Company", title: "Contact", url: "/#contact", desc: "Get in touch or book a strategy call." },
  { cat: "Account", title: "Login", url: "https://app.orengen.io", desc: "Sign in to your OrenGen Counterpart portal." },
  // Products
  { cat: "Products", title: "OrenAgents", url: "/orenagents", desc: "AI voice and chat agents and digital employees." },
  { cat: "Products", title: "Buy-Lingual Voice Agents", url: "/orenagents/voice", desc: "AI voice agents that speak 100+ languages — inbound & outbound calls, bookings, transfers." },
  { cat: "Products", title: "AI Chat Employees", url: "/orenagents/employees", desc: "Conversational AI employees for website chat, SMS, and messaging." },
  { cat: "Products", title: "Better Together Package", url: "/orenagents/better-together-package", desc: "Bundled voice + chat AI agents." },
  { cat: "Products", title: "OrenNexus CRM", url: "/orennexus", desc: "Unified CRM, pipeline, automation, email, and SMS command center." },
  { cat: "Products", title: "OrenSocial", url: "/orensocial", desc: "AI-assisted social content scheduling and community engagement." },
  { cat: "Products", title: "OrenWeb", url: "/orenweb", desc: "Landing pages, funnels, and web surfaces." },
  { cat: "Products", title: "OrenWeb Design", url: "/orenweb/design", desc: "Web and creative design services." },
  { cat: "Products", title: "OrenWeb Talk", url: "/orenweb/talk", desc: "Conversational web experiences." },
  // Sectors
  { cat: "Public Sector", title: "OrenGov", url: "/orengov", desc: "Governed, sovereign AI for government agencies." },
  { cat: "Public Sector", title: "Defense", url: "/orengov/defense", desc: "AI infrastructure for defense and national security." },
  { cat: "Public Sector", title: "State & Local Government", url: "/orengov/public-sector/state-local", desc: "AI for state and local agencies." },
  { cat: "Public Sector", title: "Education", url: "/orengov/public-sector/education", desc: "AI for educational institutions." },
  { cat: "Healthcare", title: "OrenHealth", url: "/orenhealth", desc: "Governance-first AI for healthcare operators." },
  { cat: "Healthcare", title: "Specialty Clinics", url: "/orenhealth/specialty-clinics", desc: "AI for specialty clinics." },
  { cat: "Healthcare", title: "Research Firms", url: "/orenhealth/research", desc: "AI for healthcare research firms." },
  { cat: "Legal", title: "OrenLegal", url: "/orenlegal", desc: "AI for legal and compliance operations." },
  { cat: "Legal", title: "Law Firms", url: "/orenlegal/law-firms", desc: "AI for law firms." },
  { cat: "Legal", title: "Compliance Ops", url: "/orenlegal/compliance-ops", desc: "AI for compliance operations." },
  // Legal & Trust
  { cat: "Legal", title: "Legal Center", url: "/legal", desc: "All OrenGen policies and compliance documents in one place." },
  { cat: "Legal", title: "Privacy Policy", url: "/legal/privacy-policy", desc: "How we collect, use, and protect data — GDPR & CCPA aligned." },
  { cat: "Legal", title: "Terms & Conditions", url: "/legal/terms", desc: "The agreement governing your use of OrenGen services." },
  { cat: "Trust", title: "Security Overview", url: "/legal/security-overview", desc: "Our security posture, controls, and data-protection practices." },
  { cat: "Legal", title: "Cookie Policy", url: "/legal/cookie-policy", desc: "Cookies and similar technologies we use." },
  { cat: "Legal", title: "AI-Communications Opt-In", url: "/legal/ai-communications-opt-in", desc: "Consent for AI-assisted and automated communications." },
];

export default function SearchClient() {
  const params = useSearchParams();
  const [q, setQ] = useState(() => params.get("q") ?? "");

  // Keep ?q= in the URL so results are shareable/bookmarkable.
  useEffect(() => {
    const u = new URL(window.location.href);
    const t = q.trim();
    if (t) u.searchParams.set("q", t);
    else u.searchParams.delete("q");
    window.history.replaceState(null, "", u.toString());
  }, [q]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return INDEX;
    const words = term.split(/\s+/).filter(Boolean);
    return INDEX.filter((e) => {
      const hay = `${e.title} ${e.desc} ${e.cat} ${e.url}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [q]);

  return (
    <section className="section section-brand-blue" aria-label="Search">
      <div className="container">
        <header className="section-head center">
          <div className="eyebrow">Search</div>
          <h1>
            Search <span className="gradient-word shimmer">OrenGen</span>
          </h1>
          <p className="lead">
            Find products, sectors, pricing, and policies across orengen.io.
          </p>
          <div style={{ maxWidth: 560, margin: "1.5rem auto 0" }}>
            <input
              type="search"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the site…"
              aria-label="Search the site"
              style={{
                width: "100%",
                padding: "14px 18px",
                fontSize: "1rem",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                color: "#F0F4FA",
                outline: "none",
              }}
            />
          </div>
        </header>

        <p
          style={{
            textAlign: "center",
            color: "rgba(240,244,250,0.6)",
            margin: "1.25rem 0 2rem",
            fontSize: "0.9rem",
          }}
        >
          {q.trim()
            ? `${results.length} result${results.length === 1 ? "" : "s"} for “${q.trim()}”`
            : `Browse all ${INDEX.length} pages`}
        </p>

        {results.length > 0 ? (
          <div className="sector-grid">
            {results.map((e) => (
              <article className="sector-card" key={e.url + e.title}>
                <div className="step">{e.cat}</div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <a className="card-link" href={e.url}>
                  Open →
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "rgba(240,244,250,0.72)" }}>
            No matches. Try a product (e.g. “voice”), a sector (“healthcare”,
            “government”), or “pricing”, “privacy”, or “contact”.
          </p>
        )}
      </div>
    </section>
  );
}
