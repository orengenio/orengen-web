import { OFFICIAL_LOGO_WHITE_URL, OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.5 7.5 10 12l4.5-4.5 1.2 1.2L10 14.4 4.3 8.7l1.2-1.2z" />
    </svg>
  );
}

function MegaItem({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <a className="mega-item" href={href}>
      <div>
        <strong>{title}</strong>
        <small>{desc}</small>
      </div>
      <span>→</span>
    </a>
  );
}

export default function SiteHeader() {
  return (
    <>
      <header className="topbar" aria-label="Site header">
        <div className="container nav">
          <a className="brand" href="/" aria-label="OrenGen home">
            <img
              className="logo-dark-bg"
              src={OFFICIAL_LOGO_WHITE_URL}
              alt="OrenGen Worldwide"
              fetchPriority="high"
              decoding="async"
            />
            <img
              className="logo-light-bg"
              src={OFFICIAL_LOGO_BLUE_URL}
              alt="OrenGen Worldwide"
              decoding="async"
            />
          </a>

          <nav className="nav-links og-v6-nav" aria-label="Primary navigation">
            {/* Products */}
            <div className="nav-drop">
              <button className="nav-drop-btn" type="button" aria-expanded="false">
                Products <Chevron />
              </button>
              <div className="mega" role="menu">
                <div className="mega-head">
                  <div className="mega-title">Products</div>
                  <div className="mega-note">AI operating systems</div>
                </div>
                <div className="mega-grid">
                  <div>
                    <div className="mega-label">Core Platforms</div>
                    <div className="mega-parent">
                      <button className="mega-toggle" type="button" aria-expanded="false">
                        <div>
                          <strong>OrenAgents</strong>
                          <small>AI voice agents, AI employees, and deployment packages.</small>
                        </div>
                        <span className="caret">▾</span>
                      </button>
                      <div className="mega-children">
                        <MegaItem href="/orenagents" title="OrenAgents" desc="Main platform overview and deployment pathways." />
                        <MegaItem href="/orenagents/voice" title="OrenAgents Voice" desc="Voice-first inbound and outbound agent layer." />
                        <MegaItem href="/orenagents/employees" title="OrenAgents Employees" desc="AI employee roles across operations and support." />
                        <MegaItem href="/orenagents/better-together-package" title="OrenAgents Better Together Package" desc="Combined deployment package for faster rollout." />
                      </div>
                    </div>
                    <MegaItem href="/orennexus" title="OrenNexus" desc="Unified CRM, pipeline, and automation platform." />
                    <MegaItem href="/orensocial" title="OrenSocial" desc="Authority, content, syndication, and signal engines." />
                  </div>
                  <div>
                    <div className="mega-label">Build Systems</div>
                    <div className="mega-parent">
                      <button className="mega-toggle" type="button" aria-expanded="false">
                        <div>
                          <strong>OrenWeb</strong>
                          <small>Web platform with Design and Talk tracks.</small>
                        </div>
                        <span className="caret">▾</span>
                      </button>
                      <div className="mega-children">
                        <MegaItem href="/orenweb" title="OrenWeb" desc="Main web systems overview and architecture path." />
                        <MegaItem href="/orenweb/design" title="OrenWeb Design" desc="High-conversion website and digital property builds." />
                        <MegaItem href="/orenweb/talk" title="OrenWeb Talk" desc="Voice and conversational AI embedded in websites." />
                      </div>
                    </div>
                    <MegaItem href="/pricing#orenautomations" title="OrenAutomations" desc="Workflow automation, API sync, and orchestration." />
                    <MegaItem href="/pricing#orenconsulting" title="OrenConsulting" desc="Executive advisory and implementation strategy." />
                    <MegaItem href="/marketplace" title="Marketplace" desc="Partner, tooling, and integration marketplace." />
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="nav-drop">
              <button className="nav-drop-btn" type="button" aria-expanded="false">
                Solutions <Chevron />
              </button>
              <div className="mega" role="menu">
                <div className="mega-head">
                  <div className="mega-title">Solutions</div>
                  <div className="mega-note">Enterprise paths</div>
                </div>
                <div className="mega-grid">
                  <div>
                    <div className="mega-label">Government &amp; Public Sector</div>
                    <div className="mega-parent">
                      <button className="mega-toggle" type="button" aria-expanded="false">
                        <div>
                          <strong>OrenGov</strong>
                          <small>Public sector operating path and governance route.</small>
                        </div>
                        <span className="caret">▾</span>
                      </button>
                      <div className="mega-children">
                        <MegaItem href="/orengov" title="OrenGov" desc="Main public-sector operating and delivery route." />
                        <MegaItem href="/orengov/public-sector/state-local" title="State & Local" desc="State and municipal implementation pathway." />
                        <MegaItem href="/orengov/public-sector/education" title="Education" desc="Education system modernization and operations path." />
                        <MegaItem href="/orengov/defense" title="Defense" desc="Defense-adjacent operating and compliance path." />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mega-label">Healthcare &amp; Legal</div>
                    <div className="mega-parent">
                      <button className="mega-toggle" type="button" aria-expanded="false">
                        <div>
                          <strong>OrenHealth</strong>
                          <small>Healthcare and life sciences operating path.</small>
                        </div>
                        <span className="caret">▾</span>
                      </button>
                      <div className="mega-children">
                        <MegaItem href="/orenhealth" title="OrenHealth" desc="Main healthcare and life-sciences operating path." />
                        <MegaItem href="/orenhealth/specialty-clinics" title="Specialty Clinics" desc="Clinic workflow and operations pathway." />
                        <MegaItem href="/orenhealth/research" title="Research" desc="Clinical research and life sciences path." />
                      </div>
                    </div>
                    <div className="mega-parent">
                      <button className="mega-toggle" type="button" aria-expanded="false">
                        <div>
                          <strong>OrenLegal</strong>
                          <small>Legal operations and compliance execution path.</small>
                        </div>
                        <span className="caret">▾</span>
                      </button>
                      <div className="mega-children">
                        <MegaItem href="/orenlegal" title="OrenLegal" desc="Main legal operations and compliance path." />
                        <MegaItem href="/orenlegal/law-firms" title="OrenLegal Law Firms" desc="Law-firm intake and routing operations." />
                        <MegaItem href="/orenlegal/compliance-ops" title="OrenLegal Compliance Ops" desc="Compliance workflow and governance operations." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Trust */}
            <div className="nav-drop">
              <button className="nav-drop-btn" type="button" aria-expanded="false">
                Security &amp; Trust <Chevron />
              </button>
              <div className="mega small" role="menu">
                <MegaItem href="/legal" title="Legal Hub" desc="Central legal and compliance policy hub." />
                <MegaItem href="/legal/security-overview" title="Security Overview" desc="NIST, HIPAA-trained, privacy, risk, and controls." />
                <MegaItem href="/capability-statement" title="Capability Statement" desc="One consolidated company capability statement." />
                <MegaItem href="/legal/ai-communications-opt-in" title="AI Communications Opt-In" desc="Consent and communication governance." />
                <MegaItem href="/legal/privacy-policy" title="Privacy" desc="Privacy policy and data handling terms." />
              </div>
            </div>

            {/* Resources */}
            <div className="nav-drop">
              <button className="nav-drop-btn" type="button" aria-expanded="false">
                Resources <Chevron />
              </button>
              <div className="mega small" role="menu">
                <MegaItem href="/blog" title="OrenSignal" desc="AI, infrastructure, governance, and market signals." />
                <MegaItem href="/faqs" title="FAQs" desc="Buyer, technical, security, and procurement answers." />
                <MegaItem href="/integrations" title="Integrations" desc="CRM, forms, calendars, automations, and sync paths." />
                <MegaItem href="/support" title="Support" desc="Client support and operational help." />
              </div>
            </div>

            {/* Company */}
            <div className="nav-drop">
              <button className="nav-drop-btn" type="button" aria-expanded="false">
                Company <Chevron />
              </button>
              <div className="mega small" role="menu">
                <MegaItem href="/about" title="About" desc="Company, leadership, mission, credibility." />
                <MegaItem href="/leadership" title="Leadership" desc="Meet the OrenGen executive team." />
                <MegaItem href="/careers" title="Careers" desc="Open roles and what it's like to work here." />
                <MegaItem href="/sales-partner-program" title="Sales Partner Program" desc="Partner pathway for sales and channel growth." />
                <MegaItem href="/affiliate-program" title="Affiliate Program" desc="Affiliate growth program and referral pathway." />
                <MegaItem href="/pricing" title="Pricing" desc="Commercial paths and plan logic." />
                <MegaItem href="/contact-us" title="Contact" desc="Route your inquiry to the right team." />
              </div>
            </div>

            <a className="nav-link" href="/case-studies">
              Case Studies
            </a>
          </nav>

          <div className="nav-actions og-v6-actions">
            <a className="icon-btn search-btn" href="/search" aria-label="Search">
              ⌕
            </a>

            <div className="lang-menu" aria-label="Translate website">
              <button
                className="lang-btn"
                type="button"
                id="langToggle"
                aria-expanded="false"
                aria-controls="langOptions"
              >
                EN ▾
              </button>
              <div className="lang-options" id="langOptions" aria-label="Language options" hidden>
                {["en", "es", "fr", "de", "pt", "zh-CN", "ja", "ar", "hi"].map((code) => (
                  <button type="button" data-lang={code} key={code}>
                    {code === "zh-CN" ? "ZH" : code.toUpperCase()}
                  </button>
                ))}
              </div>
              <div id="google_translate_element" className="translate-hidden" aria-hidden="true" />
            </div>

            {/* Theme toggle removed — site is locked to its dark-first brand theme. */}
            <a className="icon-btn cart-btn" href="/cart" aria-label="Cart">
              🛒
            </a>
            <a className="book-btn" href="/contact-us">
              Book a Call
            </a>

            <div className="login-menu">
              <button
                className="login-btn login-toggle"
                type="button"
                id="loginToggle"
                aria-expanded="false"
                aria-controls="loginOptions"
              >
                Sign In ▾
              </button>
              <div className="login-options" id="loginOptions" hidden>
                <a href="https://app.orengen.io">Client Portal</a>
                <a href="https://weshare.orengen.io/login">Partner Portal</a>
              </div>
            </div>

            <button
              className="mobile-btn"
              type="button"
              id="mobileToggle"
              aria-label="Toggle navigation"
              aria-expanded="false"
              aria-controls="mobilePanel"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-panel" id="mobilePanel" aria-hidden="true">
        <a href="/">
          Home <span>→</span>
        </a>
        <div className="mobile-group">Products</div>
        <button className="mobile-acc" type="button" aria-expanded="false">
          OrenAgents <span className="caret">▾</span>
        </button>
        <div className="mobile-children">
          <a className="mobile-sub" href="/orenagents">OrenAgents <span>→</span></a>
          <a className="mobile-sub" href="/orenagents/voice">OrenAgents Voice <span>→</span></a>
          <a className="mobile-sub" href="/orenagents/employees">OrenAgents Employees <span>→</span></a>
          <a className="mobile-sub" href="/orenagents/better-together-package">OrenAgents Bundle <span>→</span></a>
        </div>
        <a href="/orennexus">OrenNexus <span>→</span></a>
        <button className="mobile-acc" type="button" aria-expanded="false">
          OrenWeb <span className="caret">▾</span>
        </button>
        <div className="mobile-children">
          <a className="mobile-sub" href="/orenweb">OrenWeb <span>→</span></a>
          <a className="mobile-sub" href="/orenweb/design">OrenWeb Design <span>→</span></a>
          <a className="mobile-sub" href="/orenweb/talk">OrenWeb Talk <span>→</span></a>
        </div>
        <a href="/orensocial">OrenSocial <span>→</span></a>
        <a href="/pricing#orenautomations">OrenAutomations <span>→</span></a>
        <a href="/pricing#orenconsulting">OrenConsulting <span>→</span></a>
        <a href="/marketplace">Marketplace <span>→</span></a>
        <div className="mobile-group">Solutions</div>
        <button className="mobile-acc" type="button" aria-expanded="false">
          OrenGov <span className="caret">▾</span>
        </button>
        <div className="mobile-children">
          <a className="mobile-sub" href="/orengov">OrenGov <span>→</span></a>
          <a className="mobile-sub" href="/orengov/public-sector/state-local">State &amp; Local <span>→</span></a>
          <a className="mobile-sub" href="/orengov/public-sector/education">Education <span>→</span></a>
          <a className="mobile-sub" href="/orengov/defense">Defense <span>→</span></a>
        </div>
        <button className="mobile-acc" type="button" aria-expanded="false">
          OrenHealth <span className="caret">▾</span>
        </button>
        <div className="mobile-children">
          <a className="mobile-sub" href="/orenhealth">OrenHealth <span>→</span></a>
          <a className="mobile-sub" href="/orenhealth/specialty-clinics">Specialty Clinics <span>→</span></a>
          <a className="mobile-sub" href="/orenhealth/research">Research <span>→</span></a>
        </div>
        <button className="mobile-acc" type="button" aria-expanded="false">
          OrenLegal <span className="caret">▾</span>
        </button>
        <div className="mobile-children">
          <a className="mobile-sub" href="/orenlegal">OrenLegal <span>→</span></a>
          <a className="mobile-sub" href="/orenlegal/law-firms">OrenLegal Law Firms <span>→</span></a>
          <a className="mobile-sub" href="/orenlegal/compliance-ops">OrenLegal Compliance Ops <span>→</span></a>
        </div>
        <div className="mobile-group">Security &amp; Trust</div>
        <a href="/legal">Legal Hub <span>→</span></a>
        <a href="/legal/security-overview">Security Overview <span>→</span></a>
        <a href="/capability-statement">Capability Statement <span>→</span></a>
        <div className="mobile-group">Resources</div>
        <a href="/blog">OrenSignal <span>→</span></a>
        <a href="/faqs">FAQs <span>→</span></a>
        <a href="/integrations">Integrations <span>→</span></a>
        <div className="mobile-group">Company</div>
        <a href="/about">About <span>→</span></a>
        <a href="/leadership">Leadership <span>→</span></a>
        <a href="/careers">Careers <span>→</span></a>
        <a href="/affiliate-program">Affiliate Program <span>→</span></a>
        <a href="/sales-partner-program">Sales Partner Program <span>→</span></a>
        <a href="/case-studies">Case Studies <span>→</span></a>
        <a href="/contact-us">Book a Call <span>→</span></a>
        <div className="mobile-group">Sign In</div>
        <a href="https://app.orengen.io">Client Portal <span>→</span></a>
        <a href="https://weshare.orengen.io/login">Partner Portal <span>→</span></a>
      </div>
    </>
  );
}
