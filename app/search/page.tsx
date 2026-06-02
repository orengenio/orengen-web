import type { Metadata } from "next";
import { Suspense } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import SearchClient from "./SearchClient";

/**
 * Site search. Client-side index search (see SearchClient). Marked noindex so
 * Google doesn't index /search?q= URLs. Fixes the header's previously-dead
 * search button.
 */
export const metadata: Metadata = {
  title: "Search — OrenGen Worldwide",
  description:
    "Search OrenGen Worldwide — products, sectors, pricing, and policies.",
  robots: "noindex, follow",
  alternates: { canonical: "/search" },
};

export default function SearchPage() {
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          <Suspense fallback={null}>
            <SearchClient />
          </Suspense>
        </main>
        <SiteFooter />
        <SiteRuntime />
      </div>
    </>
  );
}
