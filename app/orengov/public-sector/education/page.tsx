import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * OrenGov Education sub-vertical page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/orengov-education.html — only presentation/layout changed.
 *
 * The source is a GoHighLevel body fragment with no <title>/<meta>/<link
 * rel="canonical"> tags, so the metadata below is constructed from the hero
 * headline and the page's JSON-LD (head data, not visible body wording).
 */
export const metadata: Metadata = {
  title:
    "OrenGov Education — Sovereign AI Infrastructure for Educational Institutions | OrenGen",
  description:
    "OrenGov's Education practice architects FERPA-aware AI systems for K-12 districts, community colleges, universities, and research institutions. TAMUS-registered. Cooperative-procurement-ready through TIPS, Region 10 ESC, and E&I Cooperative.",
  keywords:
    "orengov education, ferpa-aware ai, k-12 ai infrastructure, higher education ai, tamus vendor, tips cooperative, orengen",
  alternates: { canonical: "/orengov/public-sector/education" },
  openGraph: {
    title:
      "OrenGov Education — Sovereign AI Infrastructure for Educational Institutions | OrenGen",
    description:
      "FERPA-aware AI infrastructure for K-12 districts, community colleges, universities, and educational research institutions. TAMUS-registered, cooperative-procurement-ready.",
    url: "https://orengen.io/orengov/public-sector/education",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function OrenGovEducationPage() {
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
            aria-label="OrenGov Education"
          >
            <div className="container">
              <header className="section-head reveal">
                <div className="eyebrow">
                  OrenGov / Education
                </div>
                <div className="eyebrow">
                  Sub-Sector · K-12, Higher Education &amp; Research
                </div>
                <h1>
                  Sovereign AI infrastructure for educational institutions that{" "}
                  <span className="gradient-word shimmer">
                    refuse to rent their student intelligence.
                  </span>
                </h1>
                <p className="lead">
                  OrenGov&apos;s Education practice architects FERPA-aware AI
                  systems for K-12 districts, community colleges, universities,
                  and research institutions. TAMUS-registered.
                  Cooperative-procurement-ready through TIPS, Region 10 ESC, and
                  E&amp;I Cooperative. Built for institutions where student data
                  sovereignty is not negotiable.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="/briefing">
                    Open a Capability Briefing
                  </a>
                  <a className="btn btn-secondary" href="/orengov/cap-statement">
                    Download Capability Statement
                  </a>
                </div>
                <div className="trust-row">
                  <span className="chip">
                    <strong>FERPA</strong> Aware
                  </span>
                  <span className="chip">
                    <strong>TAMUS</strong> Registered
                  </span>
                  <span className="chip">
                    <strong>TIPS</strong> Cooperative Ready
                  </span>
                  <span className="chip">
                    <strong>CMBL</strong> Vendor 550248
                  </span>
                </div>
              </header>
            </div>
          </section>

          {/* MANDATE */}
          <section
            className="section alt section-brand-white"
            aria-label="The Education Mandate"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Education Mandate</div>
                <h2>
                  Four conditions academic Counterparts require.{" "}
                  <span style={ACCENT}>All four addressed by default.</span>
                </h2>
                <p className="lead">
                  Educational institutions operate under FERPA, IRB protocols,
                  accreditation pressure, and cooperative procurement that
                  don&apos;t apply to other public sector sub-sectors.
                  OrenGov&apos;s Education practice was built with those
                  distinctions in view from the architecture stage.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>FERPA-Aware Architecture</h3>
                  <p>
                    Student education records are not stored on commercial AI
                    services outside the institution&apos;s authorized
                    environment. Architecture designed to support — not
                    jeopardize — the institution&apos;s FERPA posture.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>TAMUS Network Registered</h3>
                  <p>
                    Registered vendor within the Texas A&amp;M University System
                    procurement framework. Supports streamlined engagement with
                    TAMUS institutions and affiliated entities.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>Education Cooperative Ready</h3>
                  <p>
                    Positioned for engagement through TIPS, Region 10 Education
                    Service Center, E&amp;I Cooperative Services, Sourcewell, and
                    OMNIA Partners education-focused cooperatives.
                  </p>
                </article>

                <article className="sector-card">
                  <h3>K-12 Through R1 Scope</h3>
                  <p>
                    Engagement architecture adapts to district IT, community
                    college operations, university CIO offices, and research
                    office requirements. Scope flexes to institution size and
                    type.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* PROCUREMENT VEHICLES STRIP */}
          <section
            className="section section-brand-blue"
            aria-label="Education Procurement Vehicles"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Education Procurement Vehicles</div>
                <h2>
                  Six paths to <span style={ACCENT}>academic engagement.</span>
                </h2>
                <p className="lead">
                  Education procurement runs through different cooperatives than
                  general SLED. OrenGov is positioned to engage through the
                  vehicle the institution already holds — TIPS especially carries
                  dense K-12 engagement.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <h3>Texas DIR</h3>
                  <div className="sector-trust">Tech 4 TX</div>
                </article>
                <article className="sector-card">
                  <h3>TAMUS</h3>
                  <div className="sector-trust">Registered Vendor</div>
                </article>
                <article className="sector-card">
                  <h3>TIPS</h3>
                  <div className="sector-trust">Education Heavy</div>
                </article>
                <article className="sector-card">
                  <h3>Region 10 ESC</h3>
                  <div className="sector-trust">Texas K-12</div>
                </article>
                <article className="sector-card">
                  <h3>E&amp;I Cooperative</h3>
                  <div className="sector-trust">Higher Ed National</div>
                </article>
                <article className="sector-card">
                  <h3>Sourcewell</h3>
                  <div className="sector-trust">K-12 + Higher Ed</div>
                </article>
              </div>
            </div>
          </section>

          {/* CAPABILITY STACK */}
          <section
            className="section alt section-brand-white"
            aria-label="The Education Capability Stack"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Education Capability Stack</div>
                <h2>
                  Six pillars.{" "}
                  <span style={ACCENT}>All FERPA-aware by default.</span>
                </h2>
                <p className="lead">
                  The OrenGov capability stack adapted for academic institutions.
                  Every pillar respects student data sovereignty and is built to
                  support — not jeopardize — the institution&apos;s FERPA, IRB,
                  and accreditation posture.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Pillar 01</div>
                  <h3>Student-Facing AI Services</h3>
                  <p>
                    AI-driven admissions support, advising augmentation, and
                    student service surfaces deployed in institution-controlled
                    architecture. Reduce wait times without exposing student
                    records to commercial AI products.
                  </p>
                  <ul>
                    <li>Admissions inquiry automation</li>
                    <li>Multilingual advising support</li>
                    <li>Student services routing</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 02</div>
                  <h3>Faculty &amp; Admin Workflow</h3>
                  <p>
                    Automated workflow engines that route faculty service
                    requests, departmental approvals, and administrative tasks
                    across legacy SIS, LMS, and HR systems without
                    rip-and-replace.
                  </p>
                  <ul>
                    <li>SIS / LMS integration</li>
                    <li>Faculty service automation</li>
                    <li>Approval chain orchestration</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 03</div>
                  <h3>Educational Intelligence Dashboards</h3>
                  <p>
                    Enrollment trends, retention analytics, outcomes reporting,
                    and accreditation evidence surfaces designed for
                    institutional research offices, deans, and CIO leadership.
                  </p>
                  <ul>
                    <li>Enrollment &amp; retention analytics</li>
                    <li>Accreditation evidence surfaces</li>
                    <li>Institutional research support</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 04</div>
                  <h3>Legacy Education System Modernization</h3>
                  <p>
                    Wrap existing SIS, LMS, district records, and university
                    administrative systems with AI capability. Extend lifespan of
                    decade-old institutional investments without disrupting
                    academic continuity.
                  </p>
                  <ul>
                    <li>SIS modernization wrapper</li>
                    <li>LMS augmentation layer</li>
                    <li>Records system automation</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 05</div>
                  <h3>Campus Communication Infrastructure</h3>
                  <p>
                    Mass communication infrastructure for emergency
                    notifications, registration deadlines, financial aid windows,
                    and campus-wide outreach with deliverability monitoring and
                    compliance logging.
                  </p>
                  <ul>
                    <li>Emergency notification scale</li>
                    <li>Multi-channel student outreach</li>
                    <li>Compliance-logged records</li>
                  </ul>
                </article>

                <article className="sector-card">
                  <div className="step">Pillar 06</div>
                  <h3>Education Strategic Advisory</h3>
                  <p>
                    Fractional CTO and architectural consulting for university
                    CIO offices, community college IT leadership, and district
                    technology committees navigating AI adoption, vendor
                    evaluation, and multi-year modernization planning.
                  </p>
                  <ul>
                    <li>AI procurement strategy</li>
                    <li>Vendor evaluation support</li>
                    <li>Multi-year academic roadmap</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* ENGAGEMENT SCENARIOS */}
          <section
            className="section section-brand-blue"
            aria-label="Engagement Scenarios"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Engagement Scenarios</div>
                <h2>
                  How academic Counterparts{" "}
                  <span style={ACCENT}>actually deploy OrenGov.</span>
                </h2>
                <p className="lead">
                  Four realistic engagement patterns. Education entry typically
                  flows through TAMUS network, TIPS / Region 10 cooperatives, or
                  direct CIO advisory rather than multi-year RFP cycles.
                </p>
              </header>
              <div className="sector-grid reveal">
                <article className="sector-card">
                  <div className="step">Scenario 01</div>
                  <h3>TAMUS Network Engagement</h3>
                  <p>
                    Texas A&amp;M University System institutions and affiliated
                    entities engage OrenGov through the TAMUS registered vendor
                    framework. Streamlined onboarding for system institutions,
                    research entities, and affiliated colleges.
                  </p>
                  <div className="trust-row">
                    <span className="chip">TAMUS</span>
                    <span className="chip">Registered Vendor</span>
                    <span className="chip">Higher Ed</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 02</div>
                  <h3>TIPS / Region 10 K-12 Engagement</h3>
                  <p>
                    Texas K-12 districts and out-of-state TIPS members engage
                    OrenGov through the TIPS cooperative or Region 10 Education
                    Service Center. Cooperative purchasing compresses procurement
                    timelines substantially.
                  </p>
                  <div className="trust-row">
                    <span className="chip">TIPS</span>
                    <span className="chip">Region 10</span>
                    <span className="chip">K-12</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 03</div>
                  <h3>Community College Modernization Pilot</h3>
                  <p>
                    Community college IT leadership engages OrenGov for scoped
                    pilot — typically advising automation, student service
                    surface, or legacy SIS wrapper — to demonstrate capability
                    before broader institutional rollout.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Community College</span>
                    <span className="chip">Pilot Scope</span>
                    <span className="chip">SIS Modernization</span>
                  </div>
                </article>

                <article className="sector-card">
                  <div className="step">Scenario 04</div>
                  <h3>University CIO Office Advisory</h3>
                  <p>
                    Fractional CTO engagement for university CIO offices and
                    research institution IT leadership evaluating AI strategy,
                    vendor consolidation, and multi-year academic technology
                    modernization roadmaps.
                  </p>
                  <div className="trust-row">
                    <span className="chip">Advisory</span>
                    <span className="chip">CIO Office</span>
                    <span className="chip">Research University</span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            className="section alt section-brand-white"
            aria-label="Education Procurement FAQ"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Education Procurement FAQ</div>
                <h2>
                  The questions{" "}
                  <span style={ACCENT}>
                    academic procurement officers ask first.
                  </span>
                </h2>
                <p className="lead">
                  Direct answers to the FERPA, TAMUS, E-Rate, SIS integration,
                  and research data questions that come up in education vendor
                  evaluation. Credentials in hand are cited as in hand. Roadmap
                  items are named as roadmap items.
                </p>
              </header>
              <div className="faq reveal">
                <div className="faq-item open">
                  <button className="faq-q" type="button">
                    <span>
                      How does OrenGov handle FERPA-protected student data?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGov deploys on architecture designed to support the
                    institution&apos;s FERPA posture. Student education records
                    are not stored on commercial AI services outside the
                    institution&apos;s authorized environment. OrenGen operates
                    as a school official under contractual control of the
                    institution, with use of records limited to the educational
                    purpose defined in the engagement. The institution retains
                    accountability for FERPA compliance; OrenGov&apos;s role is to
                    architect systems that don&apos;t create FERPA violations on
                    the path to AI capability.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What is OrenGov&apos;s relationship with the Texas A&amp;M
                      University System (TAMUS)?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    OrenGen Worldwide LLC is a registered vendor within the Texas
                    A&amp;M University System (TAMUS) network. This supports
                    streamlined engagement with TAMUS member institutions,
                    research entities, and affiliated entities operating under the
                    system&apos;s procurement framework. Engagement specifics
                    under TAMUS are confirmed at the briefing stage based on the
                    institution&apos;s procurement preference.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Can OrenGov work through E-Rate funding for K-12 districts?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    E-Rate funding administered by USAC is generally scoped to
                    internet access and internal connections rather than AI
                    services. K-12 districts typically engage OrenGov through
                    TIPS, Region 10 Education Service Center, Sourcewell, or local
                    district budget. Federal pass-through dollars (Title programs,
                    IDEA, ESSER residuals) may apply to specific AI engagement
                    scopes. The right funding vehicle is confirmed at the briefing
                    stage based on the engagement.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Does OrenGov integrate with existing SIS, LMS, and student
                      platforms?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. OrenGov&apos;s architecture integrates with common
                    education platforms — Banner, Workday Student, PeopleSoft
                    Campus Solutions, Canvas, Blackboard, Brightspace,
                    PowerSchool, Skyward — through their published API surfaces
                    and integration patterns. Legacy SIS and LMS wrapper
                    engagements are one of the most common scoped pilots,
                    extending the operational lifespan of existing institutional
                    investment without rip-and-replace.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      How does OrenGov handle research data and IRB-protected
                      datasets?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Research data engagements are scoped on a case-by-case basis
                    through the institution&apos;s research office and IRB
                    protocols. IRB-protected datasets are not handled outside the
                    institution&apos;s authorized research environment.
                    OrenGov&apos;s architecture is designed to fit inside the
                    research office&apos;s existing data governance posture rather
                    than independently host protected research data. Specific
                    research engagement structure is defined in writing at the
                    proposal stage.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      What&apos;s the typical engagement timeline for educational
                      institutions?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Engagement timeline depends on the procurement vehicle and the
                    institution&apos;s academic calendar. TAMUS network and Texas
                    DIR engagements compress to weeks. Cooperative engagements
                    through TIPS, Region 10, E&amp;I, or Sourcewell typically run
                    2-6 weeks from briefing to contract. Direct university or
                    district RFP responses follow the institution&apos;s published
                    academic-year procurement cycle. Founder-direct engagement and
                    a single-page proposal architecture remove sales-layer drag.
                  </div>
                </div>

                <div className="faq-item">
                  <button className="faq-q" type="button">
                    <span>
                      Does OrenGov serve out-of-state educational institutions?
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">
                    Yes. Out-of-state K-12 districts and universities typically
                    engage OrenGov through cooperative vehicles the institution
                    already holds — most commonly TIPS (multi-state K-12 reach),
                    E&amp;I Cooperative Services (higher education national),
                    Sourcewell (K-12 and higher ed national), or OMNIA Partners
                    Public Sector. Direct vendor registration for specific state
                    higher ed systems is added based on engagement pipeline. The
                    right pathway is confirmed at the briefing stage.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Open the Capability Briefing"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Open the Capability Briefing</div>
                <h2>
                  Architected for academic deployment.{" "}
                  <span style={ACCENT}>Briefing is the door.</span>
                </h2>
                <p className="lead">
                  Forty-five minutes, founder-direct, no sales layer. We map
                  institutional requirements against the OrenGov Education
                  capability stack and confirm whether TAMUS, TIPS, Region 10,
                  E&amp;I, or direct district pilot fits the procurement pathway.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="/briefing">
                    Open a Capability Briefing
                  </a>
                  <a className="btn btn-secondary" href="/orengov/cap-statement">
                    Download Capability Statement
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
