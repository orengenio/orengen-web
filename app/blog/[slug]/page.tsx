import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Blog post (dynamic route) — app/blog/[slug]/page.tsx
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from the source template
 * Footer-pages/blog/[slug]/page.html — only presentation/layout changed.
 * This is a TEMPLATE: the visible template copy is kept byte-identical; no real
 * post data is wired.
 */
export const metadata: Metadata = {
  title: "Blog Post — OrenGen Worldwide",
  description:
    "OrenGen Worldwide field brief: operator-grade writing on sovereign AI infrastructure, federal procurement, and enterprise modernization.",
  keywords:
    "blog/[slug], OrenGen, OrenGen Worldwide, AI infrastructure, article",
  alternates: { canonical: "/blog/[slug]" },
  openGraph: {
    title: "Blog Post — OrenGen Worldwide",
    description:
      "OrenGen Worldwide field brief: operator-grade writing on sovereign AI infrastructure, federal procurement, and enterprise modernization.",
    url: "https://orengen.io/blog/[slug]",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

export default function BlogPostPage() {
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
            aria-label="Field Brief"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Field Brief</div>
                <h1>
                  <span className="gradient-word shimmer">[Article Title]</span>
                </h1>
                <p className="lead">
                  <em>
                    Replace this template with the post-specific content. The
                    brand chrome (palette, fonts, JSON-LD, GEO meta) is already
                    in place.
                  </em>
                </p>
                <div
                  className="trust-row"
                  style={{ justifyContent: "center" }}
                >
                  <span className="chip">By Andre Mandel</span>
                  <span className="chip">Founder &amp; CEO</span>
                  <span className="chip">[Publish date]</span>
                </div>
              </header>
            </div>
          </section>

          {/* ARTICLE BODY */}
          <section
            className="section alt section-brand-white"
            aria-label="Article content"
          >
            <div className="container">
              <article className="sector-card">
                <h2>Lead Section</h2>
                <p>
                  [Replace this paragraph with the article lead. Three-to-five
                  sentences that frame the operational problem the post
                  addresses and the point of view OrenGen brings to it.]
                </p>

                <h2>The Premise</h2>
                <p>
                  [Body paragraphs — preserve verbatim from source markdown or
                  CMS. The .og-prose container handles spacing, line-height, and
                  typography automatically.]
                </p>

                <h3>Subhead Pattern</h3>
                <p>[Subsection content.]</p>

                <ul>
                  <li>
                    List items render with brand-aligned bullet styling
                    automatically.
                  </li>
                  <li>
                    Spacing and color come from the locked Direction A tokens.
                  </li>
                  <li>
                    Strong tags <strong>render in near-black</strong> for visual
                    hierarchy.
                  </li>
                </ul>

                <p>
                  <strong>Pull-quote pattern:</strong> Use this callout style
                  for emphasized takeaways, references, or footer notes.
                  Orange-accent border + light-gray background.
                </p>

                <h2>Closing</h2>
                <p>
                  [Closing paragraph. Wrap up the argument and point readers to
                  the relevant OrenGen product or briefing.]
                </p>
              </article>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section section-brand-blue"
            aria-label="Contact OrenGen"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>
                  Architect your own{" "}
                  <span style={ACCENT}>sovereign stack.</span>
                </h2>
                <p>
                  Founder-direct response within four hours. The first
                  conversation is with the architect.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="mailto:briefing@orengen.io"
                  >
                    Architect the Briefing
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
