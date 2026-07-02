import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import Sections from "@/components/site/Sections";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import JsonLd from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo/constants";
import { HOMEPAGE_FAQS } from "@/lib/seo/faqs";
import {
  buildBreadcrumbList,
  buildFAQPage,
  buildPageGraph,
  buildWebPage,
} from "@/lib/seo/jsonLd";

export const metadata: Metadata = {
  title:
    "OrenGen Worldwide | Hosted & Self-Hosted AI-Enabled Enterprise Ecosystems",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    title: "OrenGen Worldwide | Sovereign Enterprise AI Infrastructure",
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
};

const HOME_JSON_LD = buildPageGraph(
  buildWebPage({
    name: "OrenGen Worldwide — Enterprise AI Infrastructure",
    description: SITE_DESCRIPTION,
    path: "",
  }),
  buildBreadcrumbList([{ name: "Home", path: "" }]),
  buildFAQPage(HOMEPAGE_FAQS, SITE_URL),
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={HOME_JSON_LD} />
      <ScrollProgress />
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
