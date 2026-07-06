import { OFFICIAL_LOGO_WHITE_URL } from "@/lib/brandAssets";

/* The "ONLINE EVERYWHERE | ORENGENIO" fuse tagline, generated faithfully from the
   original per-character markup (seg-online / seg-pipe / seg-brand). */
const TAGLINE_SEGMENTS: { text: string; seg: string }[] = [
  { text: "ONLINE EVERYWHERE ", seg: "seg-online" },
  { text: "|", seg: "seg-pipe" },
  { text: " ORENGENIO", seg: "seg-brand" },
];

function TaglineChars() {
  let key = 0;
  return (
    <>
      {TAGLINE_SEGMENTS.flatMap(({ text, seg }) =>
        Array.from(text).map((ch) => (
          <span key={key++} className={`tl-char ${seg}`}>
            {ch === " " ? " " : ch}
          </span>
        )),
      )}
    </>
  );
}

const SOCIALS: { href: string; label: string; path: string }[] = [
  {
    href: "https://www.linkedin.com/company/orengenio",
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    href: "https://x.com/orengenio",
    label: "X (Twitter)",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    href: "https://www.instagram.com/orengenio",
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    href: "https://www.facebook.com/orengenio",
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    href: "https://github.com/orengenio",
    label: "GitHub",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    href: "https://www.youtube.com/@orengenio",
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    href: "https://tiktok.com/@orengenio",
    label: "TikTok",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

const FLAME_TIPS: React.CSSProperties[] = [
  { top: "-12px", left: "15%" },
  { top: "-12px", left: "35%" },
  { top: "-12px", left: "55%" },
  { top: "-12px", left: "75%" },
  { top: "-12px", left: "90%" },
  { bottom: "-12px", left: "25%", transform: "rotate(180deg)" },
];

const COLUMNS: { title: string; links: { href: string; label: string; ext?: boolean }[] }[] = [
  {
    title: "Solutions",
    links: [
      { href: "/orenagents", label: "OrenAgents" },
      { href: "/orenagents/voice", label: "OrenAgents Voice" },
      { href: "/orenagents/employees", label: "OrenAgents Employees" },
      { href: "/orenagents/better-together-package", label: "OrenAgents Better Together Package" },
      { href: "/orennexus", label: "OrenNexus" },
      { href: "/orenweb", label: "OrenWeb" },
      { href: "/orenweb/design", label: "OrenWeb Design" },
      { href: "/orenweb/talk", label: "OrenWeb Talk" },
      { href: "/orensocial", label: "OrenSocial" },
      { href: "/pricing#orenautomations", label: "OrenAutomations" },
      { href: "/pricing#orenconsulting", label: "OrenConsulting" },
      { href: "/marketplace", label: "Marketplace — Coming Soon" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/leadership", label: "Leadership" },
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "OrenSignal" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/integrations", label: "Integrations — Coming Soon" },
      { href: "/support", label: "Support — Coming Soon" },
      { href: "/faqs", label: "FAQs" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact-us", label: "Contact Us" },
      { href: "https://app.orengen.io", label: "Client Portal", ext: true },
    ],
  },
  {
    title: "Buyer Journey",
    links: [
      { href: "/contact-us", label: "Book Architecture Brief" },
      { href: "/orengov", label: "OrenGov" },
      { href: "/orengov/public-sector/state-local", label: "OrenGov State Local" },
      { href: "/orengov/public-sector/education", label: "OrenGov Education" },
      { href: "/orengov/defense", label: "OrenGov Defense" },
      { href: "/orenhealth", label: "OrenHealth" },
      { href: "/orenhealth", label: "OrenHealth Healthcare" },
      { href: "/orenhealth/specialty-clinics", label: "OrenHealth Specialty Clinics" },
      { href: "/orenhealth/research", label: "OrenHealth Research" },
      { href: "/orenlegal", label: "OrenLegal" },
      { href: "/orenlegal/law-firms", label: "OrenLegal Law Firms" },
      { href: "/orenlegal/compliance-ops", label: "OrenLegal Compliance Ops" },
    ],
  },
  {
    title: "Partnerships",
    links: [
      { href: "/referral-partner-program", label: "Referral Partner Program" },
      { href: "/sales-partner-program", label: "Sales Partner Program" },
      { href: "https://weshare.orengen.io/login", label: "Partner Portal", ext: true },
      { href: "/legal/legal-disclaimers", label: "Legal Disclaimers" },
    ],
  },
  {
    title: "Technical",
    links: [
      { href: "/integrations", label: "Integrations — Coming Soon" },
      { href: "/support", label: "Technical Support — Coming Soon" },
      { href: "/faqs", label: "Implementation FAQs" },
      { href: "/legal/security-overview", label: "Security Controls" },
      { href: "https://n8n.partnerlinks.io/orengenio", label: "n8n Automation", ext: true },
      { href: "https://orengen-status-page.instatus.com", label: "Platform Status", ext: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal", label: "Legal Hub" },
      { href: "/legal/acceptable-use", label: "Acceptable Use Policy" },
      { href: "/legal/ai-communications-opt-in", label: "AI Communications Opt-In" },
      { href: "/legal/ai-sms-opt-in", label: "AI SMS Opt-In" },
      { href: "/legal/cookie-policy", label: "Cookie Policy" },
      { href: "/legal/copyright-notice", label: "Copyright Notice" },
      { href: "/legal/legal-disclaimers", label: "Legal Disclaimers" },
      { href: "/legal/privacy-policy", label: "Privacy Policy" },
      { href: "/legal/refund-policy", label: "Refund Policy" },
      { href: "/legal/security-overview", label: "Security Overview" },
      { href: "/legal/terms", label: "Terms & Conditions" },
      { href: "/legal/trademark-policy", label: "Trademark Policy" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <>
      <footer className="og-footer" aria-label="OrenGen Worldwide Footer">
        <div className="og-footer-inner">
          {/* Brand Section */}
          <div className="og-brand-section">
            <a href="https://orengen.io">
              <img
                src={OFFICIAL_LOGO_WHITE_URL}
                alt="OrenGen Worldwide"
                className="og-footer-logo"
                width={400}
                height={44}
                loading="lazy"
                decoding="async"
              />
            </a>

            {/* Fuse Ignition Tagline — "ONLINE EVERYWHERE | ORENGENIO".
                aria-hidden: decorative logotype animation; per-character spans
                would otherwise be read letter-by-letter by screen readers, and
                the unlit 40%-opacity state is exempt logotype text (WCAG 1.4.3). */}
            <div className="og-fuse-container" id="fuseContainer" aria-hidden="true">
              <div className="og-fuse-line">
                <div className="og-fuse-burn" id="fuseBurn" />
              </div>
              <div className="og-tagline-box" id="taglineBox">
                {FLAME_TIPS.map((style, i) => (
                  <span key={i} className="og-flame-tip" style={style} />
                ))}
                <div className="og-tagline" id="fuseTagline">
                  <TaglineChars />
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="og-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="og-social-link"
                  aria-label={s.label}
                >
                  <svg viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <section className="og-solidify" aria-label="Trust and platform assurance">
            <div className="og-trust-hub">
              <a href="/legal/security-overview">Security Overview</a>
              <a href="/legal/privacy-policy">Privacy &amp; Data Handling</a>
              <a href="/legal/privacy-policy#gdpr-rights">Compliance &amp; Governance</a>
              <a href="/legal/ai-communications-opt-in">Responsible AI Communications</a>
              <a href="https://orengen-status-page.instatus.com" target="_blank" rel="noopener">Platform Status</a>
              <a href="/capability-statement">Capability Statement</a>
            </div>
            <div className="og-solidify-grid">
              <article className="og-solidify-card">
                <h4>Platform + Product Architecture</h4>
                <p>OrenNexus and OrenAgents power the core operating layer, with OrenAutomations, OrenWeb, and OrenCustoms supporting delivery, orchestration, and integration.</p>
              </article>
              <article className="og-solidify-card">
                <h4>Buyer Journey Clarity</h4>
                <p>From architecture brief to scoped implementation: public sector, healthcare, legal, and enterprise paths all route through one governed engagement model.</p>
              </article>
              <article className="og-solidify-card">
                <h4>Execution + Governance</h4>
                <p>Hosted and self-hosted deployments, implementation controls, and documentation-first handoff to support long-term ownership and operational confidence.</p>
              </article>
            </div>
          </section>

          <section className="og-footer-intelligence" aria-label="OrenGen enterprise operating paths">
            <div className="og-intel-grid og-intel-grid-compact">
              <article className="og-intel-card"><div className="og-intel-kicker">Public Sector</div><h4>OrenGov / Federal-ready operations.</h4><p>SAM.gov, CAGE, MBE/SDB positioning, NIST 800-53 training, and one consolidated capability-statement path.</p><a href="/capability-statement">View capability path <span>→</span></a></article>
              <article className="og-intel-card"><div className="og-intel-kicker">Healthcare</div><h4>OrenHealth / HIPAA-trained workflows.</h4><p>Healthcare workflow modernization, secure intake, and automation for regulated operating environments.</p><a href="/orenhealth">View healthcare path <span>→</span></a></article>
              <article className="og-intel-card"><div className="og-intel-kicker">Legal</div><h4>OrenLegal / legal operations.</h4><p>Legal intake, document routing, case-adjacent workflows, contract operations, and compliance support systems.</p><a href="/orenlegal">View legal path <span>→</span></a></article>
            </div>
          </section>

          <section className="og-newsletter-strip" aria-label="OrenSignal newsletter">
            <div className="og-newsletter-copy">
              <h4>Get OrenSignal weekly.</h4>
              <p>Launching now: practical enterprise AI briefings on infrastructure, governance, implementation strategy, and modernization playbooks.</p>
            </div>
            <form className="og-newsletter-form" action="/api/intake-sync" method="post">
              <input type="hidden" name="source" value="orensignal-newsletter-footer" />
              <input type="hidden" name="intent" value="newsletter-subscribe" />
              <input type="email" name="email" placeholder="name@company.com" autoComplete="email" required />
              <button type="submit">Subscribe</button>
            </form>
          </section>

          {/* Link Columns */}
          <div className="og-columns-grid">
            {COLUMNS.map((col) => (
              <div className="og-col" key={col.title}>
                <button className="og-accordion-btn" aria-expanded="false" type="button">
                  <span className="og-col-title">{col.title} <span className="acc-arrow">▾</span></span>
                </button>
                <h4 className="og-col-title">{col.title}</h4>
                <div className="og-col-body">
                  <ul className="og-col-links">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className={l.ext ? "ext" : undefined}
                          target={l.ext ? "_blank" : undefined}
                          rel={l.ext ? "noopener" : undefined}
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar — legal row (owner-pinned, keep in place) */}
          <div className="og-bottom-bar">
            <div className="og-copyright">
              &copy; 2025–26 <a href="https://orengen.io">OrenGen Worldwide LLC</a>. All rights reserved.
            </div>
            <div className="og-bottom-links">
              <a href="/legal/privacy-policy">Privacy</a>
              <a href="/legal/terms">Terms</a>
              <a href="/legal/cookie-policy">Cookies</a>
              <a href="/legal/ai-communications-opt-in">AI Opt-In</a>
              <a href="/sitemap.xml">Sitemap</a>
              <a href="https://orengen-status-page.instatus.com" target="_blank" rel="noopener">Site Status</a>
            </div>
          </div>
        </div>
      </footer>

      <button id="backToTop" className="back-to-top" type="button" aria-label="Back to top">↑</button>
    </>
  );
}
