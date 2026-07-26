import type { CSSProperties } from "react";
import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import AuditWidget from "@/components/site/AuditWidget";
import SeoGeoAeo from "@/components/site/SeoGeoAeo";

/**
 * Instant Site Audit landing page — SEO · GEO · AEO.
 * A dedicated, conversion-focused page that dramatizes the shift to AI search,
 * explains SEO + GEO + AEO, and embeds the full LeadConnector website-audit
 * widget (rendered once, referenced by every CTA). The widget also lives on
 * /orenweb, so the audit is in two spots as requested.
 */
export const metadata: Metadata = {
  title: "Instant Site Audit — SEO · GEO · AEO Visibility Check | OrenGen",
  description:
    "Free instant website audit. See how your site scores on SEO, GEO (AI-powered search), and AEO (answer engines) — then be found, trusted, and chosen. Results in about a minute.",
  keywords:
    "instant site audit, SEO audit, GEO, AEO, generative engine optimization, answer engine optimization, AI search, website audit, orengen",
  alternates: { canonical: "/orenweb/instant-site-audit" },
  openGraph: {
    title: "Instant Site Audit — SEO · GEO · AEO | OrenGen Worldwide",
    description:
      "Be Found. Be Trusted. Be Chosen. A free instant audit across SEO, GEO, and AEO — because AI search is the new front page.",
    url: "https://orengen.io/orenweb/instant-site-audit",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;
const acc = (c: string) => ({ ["--acc"]: c } as CSSProperties);

const SEO_C = "#4f8cff";
const GEO_C = "#2fbf7a";
const AEO_C = "#a06bff";

const ENGINES = [
  { c: SEO_C, tag: "Governed by SEO", h: "The classic result", d: "Ten blue links on Google — still huge, still shrinking. Nearly 6 in 10 searches now end with zero clicks: the answer shows before your link does." },
  { c: GEO_C, tag: "Governed by GEO", h: "The AI answer", d: "ChatGPT, Gemini, Perplexity, and Google's AI Overviews write the answer, then cite a few sources. If you're not one of them, you're not in the conversation." },
  { c: AEO_C, tag: "Governed by AEO", h: "The voice & answer box", d: "Assistants and answer boxes read one result aloud, or show a single card. There is no page two — the recommended answer wins everything." },
];

const KPIS = [
  { n: "~60%", label: "The click is disappearing", d: "of Google searches now end without a click." },
  { n: "800M+", label: "A new front door", d: "weekly users already search through ChatGPT alone." },
  { n: "1", label: "Winner takes all", d: "result a voice assistant reads aloud — there is no page two." },
  { n: "3", label: "The new scorecard", d: "search surfaces you must win to stay visible." },
];

const METHOD = [
  { c: SEO_C, k: "Be Found", d: "SEO earns the rankings, structure, and trust signals that engines — and the AIs trained on them — actually read." },
  { c: GEO_C, k: "Be Trusted", d: "GEO packages that authority so generative engines quote and cite you inside their answers." },
  { c: AEO_C, k: "Be Chosen", d: "AEO wins the answer boxes and voice results, making you the single recommended answer." },
];

const VALUE = ["Strategy Driven", "Data Focused", "AI Optimized", "Results Measured", "Growth Accelerated"];

export default function InstantSiteAuditPage() {
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
            aria-label="Instant Site Audit — Be Found. Be Trusted. Be Chosen."
          >
            <div className="container">
              <div className="audit-hero">
                <div className="audit-hero-copy reveal">
                  <div className="eyebrow">AI Search Is the New Front Page</div>
                  <h1>
                    Be Found. Be Trusted.{" "}
                    <span className="gradient-word shimmer">Be Chosen.</span>
                  </h1>
                  <p className="lead">
                    Google is no longer the only front page. Your customers also
                    ask ChatGPT, Gemini, and AI Overviews — and they name{" "}
                    <strong>one</strong> business, not ten. SEO alone can&apos;t
                    win that room. SEO + GEO + AEO can. Find out where you stand
                    in about 60 seconds.
                  </p>
                  <div className="sga-chips" aria-hidden="true">
                    <span style={acc(SEO_C)}>SEO</span>
                    <span style={acc(GEO_C)}>GEO</span>
                    <span style={acc(AEO_C)}>AEO</span>
                  </div>
                  <div className="cta-row">
                    <a className="btn btn-primary" href="#audit">
                      Run my free audit
                    </a>
                    <a className="btn btn-secondary" href="#shift">
                      Why SEO alone fails
                    </a>
                  </div>
                  <div className="audit-frontpage">
                    AI search is the new front page — page two no longer exists.
                  </div>
                  <div className="trust-row" aria-label="Audit signals">
                    <span className="chip">Free · no signup</span>
                    <span className="chip">~60 seconds</span>
                    <span className="chip">Instant report</span>
                  </div>
                </div>

                <div className="audit-hero-visual reveal" id="audit">
                  <div className="audit-panel audit-panel-hero">
                    <div className="audit-panel-head">
                      <span className="audit-panel-k">Free Instant Audit</span>
                      <span className="audit-panel-sub">
                        SEO · GEO · AEO · results in ~60 seconds
                      </span>
                    </div>
                    <AuditWidget widgetId="6a5fa76ee07eafbdd6223a3b" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* THE SHIFT — one box became three engines */}
          <section
            className="section alt section-brand-white"
            id="shift"
            aria-label="Search used to be one box, now it's three"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Shift</div>
                <h2>
                  Search used to be one box. Now it&apos;s{" "}
                  <span style={ACCENT}>three.</span>
                </h2>
                <p className="lead">
                  For twenty years, being found meant ranking on one page of blue
                  links. That page is now one of three destinations — and two of
                  them didn&apos;t exist when your SEO strategy was written.
                </p>
              </header>
              <div className="shift-grid reveal">
                {ENGINES.map((e) => (
                  <article className="shift-card" style={acc(e.c)} key={e.h}>
                    <span className="shift-tag">{e.tag}</span>
                    <h3>{e.h}</h3>
                    <p>{e.d}</p>
                  </article>
                ))}
              </div>
              <p className="shift-kicker reveal">
                Rank #1 on a page nobody scrolls to and you&apos;ve won a race
                that already ended. You have to show up in{" "}
                <strong>all three.</strong>
              </p>
            </div>
          </section>

          {/* SEO · GEO · AEO */}
          <SeoGeoAeo />

          {/* COST OF INVISIBILITY */}
          <section
            className="section alt section-brand-white"
            aria-label="The cost of invisibility"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Cost of Invisibility</div>
                <h2>
                  SEO got you on the page. It won&apos;t get you in{" "}
                  <span style={ACCENT}>the answer.</span>
                </h2>
                <p className="lead">
                  SEO is the foundation — not the finish line. The moment an AI
                  writes the answer, ranking on a page nobody reads is a trophy
                  for a race that&apos;s over.
                </p>
              </header>
              <div className="kpi-grid reveal">
                {KPIS.map((k) => (
                  <article className="kpi" key={k.label}>
                    <div className="num">{k.n}</div>
                    <div className="label">{k.label}</div>
                    <p>{k.d}</p>
                  </article>
                ))}
              </div>
              <div className="cta-row" style={{ justifyContent: "center", marginTop: "30px" }}>
                <a className="btn btn-primary" href="#audit">
                  See where you&apos;re invisible
                </a>
              </div>
            </div>
          </section>

          {/* AUDIT RECAP CTA (form lives in the hero) */}
          <section
            className="section section-brand-blue"
            aria-label="Run your free instant site audit"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Free Instant Site Audit</div>
                <h2>
                  See exactly where you&apos;re invisible —{" "}
                  <span style={ACCENT}>in about 60 seconds.</span>
                </h2>
                <p className="lead">
                  Drop in your URL. We&apos;ll scan your SEO, performance, mobile
                  experience, and AI-search readiness — then show you the exact
                  gaps quietly costing you leads. No cost. No sales call. No catch.
                </p>
                <div className="audit-trio">
                  <span>Where you rank today</span>
                  <span>What&apos;s blocking AI visibility</span>
                  <span>The fastest fixes to reclaim leads</span>
                </div>
                <div className="cta-row" style={{ justifyContent: "center" }}>
                  <a className="btn btn-primary" href="#audit">
                    Run my free audit ↑
                  </a>
                </div>
              </header>
              <div className="trust-row reveal" style={{ justifyContent: "center", marginTop: "6px" }}>
                <span className="chip">Instant report</span>
                <span className="chip">No credit card</span>
                <span className="chip">100% free</span>
                <span className="chip">Results in ~60s</span>
              </div>
            </div>
          </section>

          {/* METHOD + TRUST */}
          <section
            className="section alt section-brand-white"
            aria-label="How the stack compounds and enterprise credibility"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">How the Stack Compounds</div>
                <h2>
                  One brand,{" "}
                  <span style={ACCENT}>everywhere people search.</span>
                </h2>
                <p className="lead">
                  These aren&apos;t three invoices — they&apos;re one flywheel.
                  Run them in isolation and each hits a ceiling. Run them as one
                  system and you cover every way a modern buyer can find you.
                </p>
              </header>
              <div className="method-grid reveal">
                {METHOD.map((m) => (
                  <article className="method-item" style={acc(m.c)} key={m.k}>
                    <span className="method-k">{m.k}</span>
                    <p>{m.d}</p>
                  </article>
                ))}
              </div>

              <div className="value-strip reveal" style={{ marginTop: "40px" }}>
                {VALUE.map((v) => (
                  <span className="value-item" key={v}>
                    {v}
                  </span>
                ))}
              </div>
              <div className="trust-row reveal" style={{ justifyContent: "center", marginTop: "22px" }}>
                <span className="chip">SAM.gov Active</span>
                <span className="chip">MBE Certified</span>
                <span className="chip">7 Anthropic Certs</span>
                <span className="chip">NIST-Aligned</span>
                <span className="chip">HIPAA-Enabled</span>
              </div>
              <p className="guarantee reveal">
                <strong>Free means free.</strong> Get your score, keep the
                report, decide later. If we can&apos;t find gaps worth fixing,
                we&apos;ll tell you that too.
              </p>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Run your free audit"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Window Is Closing</div>
                <h2>
                  Every day you wait, a competitor becomes{" "}
                  <span className="gradient-word shimmer">the answer.</span>
                </h2>
                <p>
                  AI is learning who to recommend right now — and it rewards
                  whoever shows up first. The fastest move you can make today is
                  finding out exactly where you stand. It&apos;s free, it&apos;s
                  instant, and it costs you nothing but the excuse.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#audit">
                    Run my free audit now
                  </a>
                  <a className="btn btn-secondary" href="/contact-us">
                    Talk to a strategist
                  </a>
                </div>
                <div className="audit-frontpage" style={{ marginTop: "22px" }}>
                  SEO · GEO · AEO — Complete Visibility. Maximum Impact.
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
