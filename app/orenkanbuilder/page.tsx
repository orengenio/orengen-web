import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import { KanBuilder } from "./KanBuilder";

/**
 * OrenKanBuilder™ — the live, interactive drag-and-drop AI engine configurator.
 *
 * Unlike the 39 static pages (mechanically re-skinned from their source HTML),
 * this route mounts the real interactive React app (`./KanBuilder`, a "use
 * client" component) wrapped BY HAND in the shared brand shell. KanBuilder's
 * root element is itself the page `<main>` (id="main" for the skip-link), so we
 * do NOT nest it inside another <main>.
 *
 * KanBuilder renders a `position:fixed` running-total bar pinned to the bottom
 * of the viewport. A trailing aria-hidden spacer after <SiteFooter /> lengthens
 * the document so the footer's legal line clears that bar at full scroll.
 *
 * SEO is preserved from the source export (orenkanbuilder/page.tsx +
 * orenkanbuilder/page.html): title/description/canonical, keywords, robots,
 * Open Graph, geo tags, and the full JSON-LD @graph.
 */

const OG_IMAGE =
  "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/0AVNQ9WDsFdbcEFJX0AQfTmktPcPu8V8GqAqNQS4.png";

export const metadata: Metadata = {
  title: "OrenKanBuilder™ — Build Your Custom AI Engine | OrenGen",
  description:
    "Drag-and-drop AI solution builder. Choose Buy-Lingual™ voice agents, CRM, social, web — select tiers, toggle billing, and lock in your custom AI engine.",
  keywords:
    "orenkanbuilder, OrenGen, Visual AI Engine Builder, AI infrastructure, sovereign AI, self-hosted, white-label, open-source",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: { canonical: "https://orengen.io/orenkanbuilder" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/orenkanbuilder",
    title: "OrenKanBuilder™ — Build Your AI Engine | OrenGen",
    description:
      "Drag-and-drop the AI stack you need. Voice, CRM, social, web, automation — assemble, price, deploy.",
    images: [{ url: OG_IMAGE }],
  },
  twitter: { card: "summary_large_image" },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Mansfield, Texas",
    "geo.position": "32.5632;-97.1417",
    ICBM: "32.5632, -97.1417",
  },
};

// JSON-LD structured data, carried over verbatim from orenkanbuilder/page.html
// (HTML entities decoded to their Unicode equivalents). Rendered via a string
// child (not dangerouslySetInnerHTML) — the serialized JSON contains no
// <, >, or & characters, so React's text-escaping leaves it byte-identical.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://orengen.io/#organization",
      name: "OrenGen Worldwide LLC",
      url: "https://orengen.io",
      logo: OG_IMAGE,
      telephone: "+1-833-ORENGEN",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mansfield",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://orengen.io/orenkanbuilder/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://orengen.io",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "orenkanbuilder",
          item: "https://orengen.io/orenkanbuilder",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://orengen.io/orenkanbuilder/#product",
      name: "OrenKanBuilder™ — Build Your Custom AI Engine",
      description:
        "Drag-and-drop AI solution builder. Choose Buy-Lingual™ voice agents, CRM, social, web — select tiers, toggle billing, and lock in your custom AI engine.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      category:
        "Visual Configuration Tool · AI Solution Builder · Interactive Pricing",
      brand: { "@id": "https://orengen.io/#organization" },
      // Required by Google for Product/SoftwareApplication rich results (one of
      // offers / review / aggregateRating). Range mirrors the module prices the
      // builder actually shows: $47–$997 /mo across 7 modules × 3 tiers.
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "47",
        highPrice: "997",
        offerCount: "21",
      },
    },
    {
      "@type": "Service",
      "@id": "https://orengen.io/orenkanbuilder/#service",
      serviceType:
        "Visual Configuration Tool · AI Solution Builder · Interactive Pricing",
      provider: { "@id": "https://orengen.io/#organization" },
      areaServed: "United States",
    },
    {
      "@type": "FAQPage",
      "@id": "https://orengen.io/orenkanbuilder/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does OrenKanBuilder™ work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drag modules into your build, choose tier (Standard / Professional / Premium), toggle monthly vs. annual billing, and watch the price update in real-time. When you're ready, submit the build — we deploy the exact configuration.",
          },
        },
        {
          "@type": "Question",
          name: "Can I save and share my build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every build generates a shareable link so finance, operations, and leadership can view the exact configuration and pricing you've assembled.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a commitment to use the builder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The builder is a transparent pricing surface — explore every module, every tier, every discount before any conversation with sales.",
          },
        },
        {
          "@type": "Question",
          name: "Why isn't the live builder embedded here?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OrenKanBuilder™ is a fully interactive React application. To preserve full functionality we route directly to the live builder. Click ‘Launch the Builder’ above to open it.",
          },
        },
      ],
    },
  ],
};

export default function OrenKanBuilderPage() {
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        {/* KanBuilder's root element IS the page <main id="main"> */}
        <KanBuilder />
        <SiteFooter />
        {/* Clearance for KanBuilder's fixed bottom running-total bar so the
            footer legal line is never hidden behind it at full scroll. Height
            is responsive (see .okb-bar-clearance in globals.css) because the
            bar grows taller as it wraps on narrower viewports. */}
        <div aria-hidden="true" className="okb-bar-clearance" />
        <SiteRuntime />
      </div>
      <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
    </>
  );
}
