import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Branded "coming soon" placeholder for nav destinations that are linked but not
 * yet built (e.g. /cart, /marketplace, /integrations, /support). Uses the shared
 * shell so the header/footer stay consistent and the link no longer 404s. Stub
 * pages set `robots:{index:false}` in their own metadata so the thin placeholder
 * is not indexed (and they are intentionally kept OUT of sitemap.ts + search).
 */
export default function ComingSoon({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
}) {
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          <section
            className="section section-brand-blue"
            id="overview"
            aria-label={eyebrow}
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">{eyebrow}</div>
                <h1>
                  {title}{" "}
                  <span className="gradient-word shimmer">coming soon.</span>
                </h1>
                <p className="lead">{blurb}</p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="/#contact">
                    Talk to OrenGen
                  </a>
                  <a className="btn btn-secondary" href="/orenkanbuilder">
                    Explore the Builder
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
