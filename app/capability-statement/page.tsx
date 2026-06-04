import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * /capability-statement — government-contracting capability statement.
 * Content is the owner's authoritative Capability Statement copy, re-skinned
 * into the shared brand shell (globals.css brand classes). Per standing rules:
 *  - Founder name is ALWAYS "Andre Mandel" on the web (source said "Andre Nero").
 *  - Sensitive identifiers (EIN, DUNS, HIPAA ID) are intentionally OMITTED from
 *    this public page; only the contracting identifiers a capability statement
 *    exists to advertise are shown (CAGE, UEI, Texas CMBL, NAICS, SupplierGateway).
 *  - Certification phrasing mirrors the owner's wording verbatim.
 */
export const metadata: Metadata = {
  title:
    "Capability Statement — OrenGen Worldwide LLC | Enterprise AI Infrastructure",
  description:
    "OrenGen Worldwide LLC capability statement: Sovereign AI infrastructure, strategic marketing & communications, and executive consulting. SAM.gov registered, SupplierGateway-certified (Minority-Owned / Small Disadvantaged Business). CAGE 12XC1, UEI RX16QFYT6YM5.",
  keywords:
    "orengen capability statement, sovereign ai infrastructure, government contracting, NAICS 541519, CAGE 12XC1, UEI RX16QFYT6YM5, minority owned small business, small disadvantaged business, SupplierGateway, SAM.gov",
  alternates: { canonical: "/capability-statement" },
  openGraph: {
    title: "Capability Statement — OrenGen Worldwide LLC",
    description:
      "Enterprise AI infrastructure for organizations that refuse to rent their intelligence. SAM.gov registered · SupplierGateway certified · CAGE 12XC1 · UEI RX16QFYT6YM5.",
    url: "https://orengen.io/capability-statement",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function CapabilityStatementPage() {
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
            aria-label="OrenGen Worldwide Capability Statement"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Capability Statement</div>
                <h1>
                  Enterprise AI infrastructure for organizations that{" "}
                  <span className="gradient-word shimmer">
                    refuse to rent their intelligence.
                  </span>
                </h1>
                <p className="lead">
                  OrenGen Worldwide LLC is an elite AI infrastructure firm
                  specializing in Sovereign Intelligence Systems. We bridge the
                  gap between NIST-aligned risk management and rapid founder-stage
                  execution. We do not just implement technology; we architect
                  ownable AI ecosystems that replace fragmented SaaS dependency
                  with unified, self-hosted operational power.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://api.orengen.io/widget/booking/EvvNIyeXdLksQikeO6en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open a Capability Briefing
                  </a>
                  <a className="btn btn-secondary" href="/#contact">
                    Contact OrenGen
                  </a>
                </div>
                <div
                  className="trust-row reveal"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">
                    <strong>SAM.gov</strong> Registered
                  </span>
                  <span className="chip">
                    <strong>SupplierGateway</strong> Certified
                  </span>
                  <span className="chip">
                    <strong>CAGE</strong> 12XC1
                  </span>
                  <span className="chip">
                    <strong>UEI</strong> RX16QFYT6YM5
                  </span>
                </div>
              </header>
            </div>
          </section>

          {/* CORE COMPETENCIES */}
          <section
            className="section alt section-brand-white"
            aria-label="Core Competencies"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Core Competencies</div>
                <h2>
                  Three competency pillars.{" "}
                  <span style={ACCENT}>One accountable partner.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Technology Solutions &amp; Digital Transformation</h3>
                  <ul>
                    <li>
                      <strong>Sovereign AI Infrastructure:</strong> Custom
                      self-hosted LLM and RAG environments.
                    </li>
                    <li>
                      <strong>Workflow Orchestration:</strong> Enterprise-grade
                      n8n automation for zero-leak operations.
                    </li>
                    <li>
                      <strong>Operational Intelligence:</strong> AI-assisted
                      decision systems for high-stakes industries.
                    </li>
                    <li>
                      <strong>Legacy Modernization:</strong> Transitioning
                      technical debt into AI-native workflows.
                    </li>
                  </ul>
                </article>

                <article className="sector-card">
                  <h3>Strategic Marketing &amp; Communications</h3>
                  <ul>
                    <li>Digital Marketing Strategy &amp; Campaign Management</li>
                    <li>Government Communications &amp; Public Affairs</li>
                    <li>Advertising Campaign Development &amp; Execution</li>
                    <li>Graphic Design &amp; Creative Services Development</li>
                    <li>Market Research &amp; Data Analytics</li>
                    <li>Brand Development &amp; Strategic Positioning</li>
                    <li>Social Media Strategy &amp; Community Engagement</li>
                    <li>Marketing Automation &amp; CRM Systems</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <h3>Executive Consulting &amp; Operations Management</h3>
                  <ul>
                    <li>Strategic Planning &amp; Business Transformation</li>
                    <li>Operational Efficiency &amp; Process Optimization</li>
                    <li>Change Management &amp; Digital Adoption</li>
                    <li>Training Program Development &amp; Delivery</li>
                    <li>Video Production &amp; Multimedia Content Creation</li>
                    <li>Project Management &amp; Implementation</li>
                    <li>Fractional Executive Services (CEO, CTO, COO, CMO)</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* LEADERSHIP & PAST PERFORMANCE */}
          <section
            className="section section-brand-blue"
            aria-label="Leadership and Past Performance"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Leadership &amp; Past Performance</div>
                <h2>
                  Founder-led execution.{" "}
                  <span style={ACCENT}>Documented results.</span>
                </h2>
              </header>
              <div className="reveal" style={{ maxWidth: 920, margin: "0 auto" }}>
                <p className="lead">
                  OrenGen is led by Andre Mandel, CEO, a seasoned executive with
                  over 20 years of leadership across technology, operations, and
                  business development. His career spans executive roles where he
                  has consistently delivered transformative results, including
                  500% year-over-year revenue growth, $13M in captured cost
                  savings across multi-state operations, and the successful
                  buildout of 30+ member virtual workforces.
                </p>
                <p className="lead">
                  With 40 years of sales experience and deep expertise in digital
                  transformation, AI automation, and process optimization, Andre
                  brings a rare combination of strategic vision and hands-on
                  execution capability. His leadership has driven enterprise-level
                  business transformation initiatives, educational institution
                  technology partnerships, and complex multi-stakeholder projects
                  delivered on time and under budget.
                </p>
                <p className="lead">Government contracting portfolio actively in development.</p>
              </div>
            </div>
          </section>

          {/* DIFFERENTIATORS */}
          <section
            className="section alt section-brand-white"
            aria-label="Differentiators"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Differentiators</div>
                <h2>
                  Why agencies and operators{" "}
                  <span style={ACCENT}>choose OrenGen.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Certified Supplier Impact</h3>
                  <p>
                    SupplierGateway-certified Supplier Impact categories: Digital
                    Identity Verified, Minority Owned, Small Business, and Small
                    Disadvantaged Business.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Executive Leadership</h3>
                  <p>
                    Executive-level leadership with 20+ years of operational and
                    financial management experience.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Proven Revenue Growth</h3>
                  <p>
                    Proven revenue growth track record with documented 500% growth
                    achievement.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Rapid Execution</h3>
                  <p>
                    Rapid decision-making capability with high-urgency execution
                    and adaptable approaches.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Full-Stack Expertise</h3>
                  <p>
                    Full-stack technology and marketing expertise from strategy
                    through implementation.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>AI-First Methodology</h3>
                  <p>
                    AI-first methodology deploying intelligent automation, virtual
                    employees, and autonomous systems.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Virtual Operations</h3>
                  <p>
                    Virtual operations excellence with nationwide service delivery
                    capability.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Industry Certifications</h3>
                  <p>
                    Industry certifications including Google Ads Specialist,
                    Digital Marketing Institute, and specialized sales
                    methodologies.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>No-Rent Methodology</h3>
                  <p>
                    We build assets clients own, eliminating per-seat SaaS taxes.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Claude-First Engineering</h3>
                  <p>
                    Specialized optimization for the Anthropic Claude model family.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Vetted Authority</h3>
                  <p>
                    Documented $13M+ in cost savings and 500% year-over-year
                    revenue growth.
                  </p>
                </article>
                <article className="sector-card">
                  <h3>Collective Execution</h3>
                  <p>
                    We function as an embedded infrastructure unit, integrating
                    into leadership teams to make the Refuse to Rent mission a
                    shared victory.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* BUSINESS INFORMATION */}
          <section
            className="section section-brand-white"
            aria-label="Business Information"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Business Information</div>
                <h2>
                  NAICS, identifiers,{" "}
                  <span style={ACCENT}>and registrations.</span>
                </h2>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>NAICS Codes</h3>
                  <ul>
                    <li>541519 — Other Computer Related Services (Primary)</li>
                    <li>541511 — Custom Computer Programming</li>
                    <li>541512 — Other Computer System Design</li>
                    <li>541513 — Other Computer Facilities Management</li>
                    <li>541613 — Marketing Consulting Services</li>
                    <li>541618 — Other Management Consulting</li>
                    <li>541870 — Advertising Agencies</li>
                    <li>518210 — Data Processing &amp; Hosting Services</li>
                  </ul>
                  <p>
                    Additional NAICS: 541910, 519290, 541430, 512110, 611420,
                    541860, 541820.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Identifiers &amp; Validation</h3>
                  <ul>
                    <li>
                      <strong>UEI (Unique Entity ID):</strong> RX16QFYT6YM5
                    </li>
                    <li>
                      <strong>CAGE Code:</strong> 12XC1
                    </li>
                    <li>
                      <strong>Texas CMBL Vendor No.:</strong> 550248
                    </li>
                    <li>
                      <strong>SupplierGateway Cert No.:</strong> SG06265178661562
                    </li>
                    <li>
                      <strong>Primary NAICS:</strong> 541519
                    </li>
                  </ul>
                </article>

                <article className="sector-card">
                  <h3>Certifications &amp; Registrations</h3>
                  <ul>
                    <li>SAM.gov — Registered</li>
                    <li>Grants.gov — Verified</li>
                    <li>
                      SupplierGateway Supplier Impact Certification (US) —
                      Certified (Valid 01 Jun 2026 – 01 Jun 2027)
                    </li>
                    <li>
                      Supplier Impact Categories: Digital Identity Verified;
                      Minority Owned; Small Business; Small Disadvantaged Business
                    </li>
                    <li>Texas CMBL Vendor — Valid</li>
                    <li>TAMUS — Registered</li>
                    <li>Securiti AI Governance — Certified</li>
                    <li>Securiti Privacy Ops — Certified</li>
                    <li>Better Business Bureau — Accredited</li>
                    <li>Certified Claude Architect</li>
                    <li>Member of The Claude Partner Network</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <h3>Set-Aside Eligibility</h3>
                  <ul>
                    <li>Small Business</li>
                    <li>Minority-Owned Small Business</li>
                    <li>Small Disadvantaged Business</li>
                    <li>Economically Disadvantaged</li>
                  </ul>
                  <p>
                    SupplierGateway verification:{" "}
                    <a
                      className="card-link"
                      href="https://www.suppliergateway.com/verifycert"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      suppliergateway.com/verifycert
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* WHY ORENGEN */}
          <section
            className="section alt section-brand-blue"
            aria-label="Why OrenGen Worldwide"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Why OrenGen Worldwide</div>
                <h2>
                  Enterprise-grade outcomes,{" "}
                  <span style={ACCENT}>small-business agility.</span>
                </h2>
              </header>
              <div className="reveal" style={{ maxWidth: 920, margin: "0 auto" }}>
                <p className="lead">
                  OrenGen Worldwide LLC combines executive-level leadership
                  experience with cutting-edge technology capabilities and
                  SupplierGateway-certified Supplier Impact categories, including
                  Minority Owned, Small Business, and Small Disadvantaged Business.
                  Our proven track record of driving operational excellence,
                  achieving substantial revenue growth, and delivering complex
                  projects on time and under budget positions us as an ideal
                  partner for government agencies and commercial clients seeking
                  transformative results with accountability and measurable
                  outcomes.
                </p>
                <p className="lead">
                  We specialize in deploying AI-driven systems, automation
                  infrastructure, and intelligent digital platforms that eliminate
                  operational friction and empower organizations to scale
                  efficiently. From custom software development to full-stack
                  marketing automation, OrenGen delivers enterprise-grade
                  solutions with the agility of a small business.
                </p>
              </div>
            </div>
          </section>

          {/* CONTACT / FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Contact OrenGen Worldwide"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Contact</div>
                <h2>
                  Open a capability briefing.{" "}
                  <span style={ACCENT}>Founder-direct.</span>
                </h2>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip">
                    <strong>Web</strong> orengen.io
                  </span>
                  <span className="chip">
                    <strong>Social</strong> @orengenio
                  </span>
                  <span className="chip">
                    <strong>Phone</strong> 833-ORENGEN
                  </span>
                  <span className="chip">
                    <strong>Location</strong> Mansfield, Texas
                  </span>
                </div>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://api.orengen.io/widget/booking/EvvNIyeXdLksQikeO6en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open a Capability Briefing
                  </a>
                  <a className="btn btn-secondary" href="/#contact">
                    Contact OrenGen
                  </a>
                </div>
                <p className="lead" style={{ marginTop: "1.5rem" }}>
                  Andre Mandel
                  <br />
                  <span style={ACCENT}>
                    Founder-led Global Chief AI Officer | AI Infrastructure &amp;
                    Governance Executive
                  </span>
                </p>
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
