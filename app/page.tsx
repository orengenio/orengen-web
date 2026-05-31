import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import Sections from "@/components/site/Sections";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          <Hero />
          <Sections />
        </main>
        <SiteFooter />
        <SiteRuntime />
      </div>
    </>
  );
}
