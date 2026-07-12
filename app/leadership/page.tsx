import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Leadership page. Content (bios, company timeline, tech stack, why-us,
 * founder quote) is sourced verbatim from the client-provided leadership
 * page export, re-skinned into the current brand system. Leadership photos
 * from that export point at blog.orengen.io, which currently returns 503
 * for the whole subdomain — omitted rather than shipping broken images;
 * swap in real photo URLs once that's back up.
 */
export const metadata: Metadata = {
  title: "Our Leadership — OrenGen Worldwide",
  description:
    "Meet the OrenGen Worldwide leadership team — over 100 years of combined leadership across technology, operations, finance, and information systems.",
  keywords: "OrenGen leadership, executive team, Andre Mandel, OrenGen Worldwide",
  alternates: { canonical: "/leadership" },
  openGraph: {
    title: "Our Leadership — OrenGen Worldwide",
    description:
      "Meet the OrenGen Worldwide leadership team — over 100 years of combined leadership across technology, operations, finance, and information systems.",
    url: "https://orengen.io/leadership",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

const LEADERS = [
  {
    name: "Andre Mandel",
    title: "Chief Executive Officer & Founder",
    bio: "40+ years of sales, management, and leadership. 10 years in tech. 4 years deep in AI, coding, and programming. Andre bridges strategic leadership and technology implementation — he doesn't just understand AI, he knows how to sell it, scale it, and lead teams that build it.",
    tags: ["Strategic Leadership", "AI Systems", "Sales Mastery", "Tech Architecture"],
  },
  {
    name: "Athena Quinn",
    title: "Chief Operations Officer",
    bio: "A strategic orchestrator who transforms vision into execution. Athena brings decades of operational excellence, ensuring every system, process, and team operates at peak performance. She turns complexity into clarity and chaos into coordinated action.",
    tags: ["Operations", "Process Optimization", "Team Leadership", "Scalability"],
  },
  {
    name: "Nirvaan Singh",
    title: "Chief Technology Officer",
    bio: "The architect behind OrenGen's technical infrastructure. Nirvaan leads all engineering initiatives, from AI model integration to enterprise-grade email systems. His expertise spans full-stack development, cloud architecture, and automation at scale.",
    tags: ["Full-Stack Dev", "Cloud Architecture", "AI Integration", "DevOps"],
  },
  {
    name: "Winston Garrison",
    title: "Chief Information Officer",
    bio: "A veteran of enterprise IT strategy, Winston oversees OrenGen's information systems, data security, and digital infrastructure. He ensures every client solution meets the highest standards of reliability, compliance, and performance.",
    tags: ["IT Strategy", "Data Security", "Compliance", "Infrastructure"],
  },
  {
    name: "Virginia Villareal",
    title: "Chief Financial Officer",
    bio: "Virginia brings financial acumen and strategic foresight to every decision. From managing cash flow to securing funding for growth initiatives, she ensures OrenGen's financial foundation is as solid as its technical capabilities.",
    tags: ["Financial Strategy", "Budgeting", "Growth Finance", "Risk Management"],
  },
];

const TIMELINE = [
  { year: "1985", h3: "The Foundation Begins", p: "Andre Mandel enters the world of sales, quickly discovering a natural gift for understanding people, solving problems, and closing deals. The seeds of servant leadership are planted." },
  { year: "1986", h3: "Management & Leadership", p: "After proving excellence on the front lines, the transition to management begins — leading teams, building systems, and scaling operations across multiple industries." },
  { year: "2015", h3: "The Tech Pivot", p: "Recognizing the transformative power of technology, a deliberate pivot begins. Coding, programming, automation, and digital systems become the new frontier." },
  { year: "2018", h3: "The Origin", p: "The company that would become OrenGen is born under a different name, combining decades of business acumen with rapidly evolving technical expertise." },
  { year: "2021", h3: "The AI Awakening", p: "Artificial intelligence changes everything. A deep dive into AI systems, machine learning, and intelligent automation begins." },
  { year: "2025", h3: "OrenGen Worldwide is Born", p: "The rebrand is complete. OrenGen Worldwide LLC launches with a mission to automate the future — BBB Accredited, Texas HUB Certified, Minority Certified." },
  { year: "2026", h3: "20X Growth & Beyond", p: "In one year, OrenGen has grown massively. With a powerful, diverse leadership team, the mission is clear: enterprise clients, government contracts, and global reach." },
];

const WHY = [
  { h3: "Rare Hybrid Expertise", p: "Deep business acumen fused with a rapidly expanding technical toolkit. We bridge strategic leadership and technology implementation." },
  { h3: "Executive-Level Vision", p: "We don't execute someone else's vision. We orchestrate tech-driven solutions from the top, seeing the big picture and building the machine that delivers it." },
  { h3: "Government-Ready", p: "BBB Accredited, Texas HUB Certified, and Minority Certified through the State of Texas. Built for enterprise and government contracts." },
  { h3: "AI That Actually Works", p: "Virtual employees, AI call agents, and email systems reaching millions — we build intelligent solutions that do the work, not just promise it." },
  { h3: "Built to Disrupt", p: "We exist to eliminate complexity and build intelligent solutions that automate growth, enhance security, and deliver scalable results." },
  { h3: "Servant Leadership", p: "Over a century of combined servant leadership experience. We lead from the front with both business instincts and technical fluency." },
];

const TECH_STACK = [
  "Python", "JavaScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS",
  "Cloudflare", "OpenAI", "Claude AI", "WordPress", "n8n", "Make", "Git", "Linux", "Nginx",
];

export default function LeadershipPage() {
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
            aria-label="Our Leadership"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Leadership</div>
                <h1>
                  Our <span className="gradient-word shimmer">Leadership</span>
                </h1>
                <p className="lead">
                  Over 100 years of combined leadership — C-suite executives,
                  consultants, and innovators driving transformation across
                  every industry.
                </p>
              </header>
            </div>
          </section>

          {/* LEADERSHIP GRID */}
          <section
            className="section alt section-brand-white"
            aria-label="Leadership team"
          >
            <div className="container">
              <div className="sector-grid reveal">
                {LEADERS.map((l) => (
                  <article className="sector-card" key={l.name}>
                    <h3>{l.name}</h3>
                    <div className="step">{l.title}</div>
                    <p>{l.bio}</p>
                    <div className="trust-row">
                      {l.tags.map((t) => (
                        <span className="chip" key={t}>{t}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* COMPANY STORY */}
          <section
            className="section section-brand-blue"
            aria-label="The OrenGen story"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The OrenGen Story</div>
                <h2>
                  From decades of sales mastery{" "}
                  <span style={ACCENT}>to the cutting edge of AI.</span>
                </h2>
              </header>
              <div className="cap-list reveal">
                {TIMELINE.map((t) => (
                  <article className="cap" key={t.year}>
                    <div className="cap-num">{t.year}</div>
                    <div>
                      <h3>{t.h3}</h3>
                      <p>{t.p}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* TECH STACK */}
          <section
            className="section alt section-brand-white"
            aria-label="Tech stack"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Tech Stack &amp; Capabilities</div>
                <h2>Enterprise-grade tools powering intelligent automation.</h2>
              </header>
              <div className="trust-row reveal" style={{ justifyContent: "center", flexWrap: "wrap" }}>
                {TECH_STACK.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE ORENGEN */}
          <section
            className="section section-brand-blue"
            aria-label="Why choose OrenGen"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Why Choose OrenGen</div>
                <h2>
                  We don&apos;t just understand AI.{" "}
                  <span style={ACCENT}>We know how to sell it, scale it, and lead teams that build it.</span>
                </h2>
                <div className="trust-row" style={{ justifyContent: "center" }}>
                  <span className="chip"><strong>40+</strong> Years Business Leadership</span>
                  <span className="chip"><strong>10+</strong> Years Tech Expertise</span>
                  <span className="chip"><strong>4+</strong> Years AI &amp; Automation</span>
                  <span className="chip"><strong>100+</strong> Years Combined Leadership</span>
                </div>
              </header>
              <div className="sector-grid reveal">
                {WHY.map((w) => (
                  <article className="sector-card" key={w.h3}>
                    <h3>{w.h3}</h3>
                    <p>{w.p}</p>
                  </article>
                ))}
              </div>
              <div className="cap reveal" style={{ marginTop: "24px", borderBottom: "none" }}>
                <p style={{ fontStyle: "italic" }}>
                  &ldquo;I bridge strategic leadership and technology
                  implementation. My sales and management foundation means I
                  don&apos;t just understand AI — I know how to sell it,
                  scale it, and lead teams that build it.&rdquo;
                  <br />
                  <strong>— Andre Mandel, CEO &amp; Founder</strong>
                </p>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section alt section-brand-white"
            aria-label="Contact OrenGen"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Ready to automate your future?</h2>
                <p>
                  Let&apos;s discuss how OrenGen can transform your business
                  with AI-powered solutions that actually deliver results.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://api.orengen.io/booking/coffeechat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Meeting
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
