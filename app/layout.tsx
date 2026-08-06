import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import {
  OFFICIAL_FAVICON_NAVY_URL,
  OFFICIAL_FAVICON_WHITE_URL,
  OFFICIAL_LOGO_BLUE_URL,
} from "@/lib/brandAssets";
import ChatWidget from "@/components/site/ChatWidget";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-public-sans",
});

const OG_IMAGE = "/og-image.png";

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://orengen.io/#organization",
      name: "OrenGen Worldwide LLC",
      alternateName: ["OrenGen", "OrenGen Worldwide"],
      url: "https://orengen.io/",
      logo: {
        "@type": "ImageObject",
        url: OFFICIAL_LOGO_BLUE_URL,
      },
      description:
        "OrenGen Worldwide architects hosted and self-hosted AI-enabled enterprise ecosystems, governed automation, CRM, AI agents, and digital infrastructure.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://orengen.io/contact-us",
        telephone: "+1-833-673-6436",
      },
      telephone: "+1-833-673-6436",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1812 Open Range Drive",
        addressLocality: "Mansfield",
        addressRegion: "TX",
        postalCode: "76063",
        addressCountry: "US",
      },
      founder: {
        "@type": "Person",
        name: "Andre Mandel",
        jobTitle: "Founder and Global Chief AI Officer",
      },
      areaServed: ["United States", "Worldwide"],
      sameAs: [
        "https://www.linkedin.com/company/orengenio",
        "https://x.com/orengenio",
        "https://www.instagram.com/orengenio",
        "https://www.facebook.com/orengenio",
        "https://github.com/orengenio",
        "https://www.youtube.com/@orengenio",
        "https://tiktok.com/@orengenio",
      ],
      knowsAbout: [
        "Enterprise AI infrastructure",
        "Hosted and self-hosted AI",
        "AI governance",
        "Workflow automation",
        "AI voice agents",
        "CRM architecture",
        "Public-sector AI",
        "Healthcare operations automation",
        "Legal operations automation",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "OrenGen Enterprise Systems",
        itemListElement: [
          { "@type": "OfferCatalog", name: "Nexus CRM", url: "https://orengen.io/orennexus" },
          { "@type": "OfferCatalog", name: "AI Employees", url: "https://orengen.io/orenagents/employees" },
          { "@type": "OfferCatalog", name: "Buy-Lingual™ AI Voice", url: "https://orengen.io/orenagents/voice" },
          { "@type": "OfferCatalog", name: "OrenWeb", url: "https://orengen.io/orenweb" },
          { "@type": "OfferCatalog", name: "OrenSocial", url: "https://orengen.io/orensocial" },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://orengen.io/#website",
      url: "https://orengen.io/",
      name: "OrenGen Worldwide",
      publisher: { "@id": "https://orengen.io/#organization" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://orengen.io/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://orengen.io"),
  title:
    "OrenGen Worldwide | Hosted & Self-Hosted AI-Enabled Enterprise Ecosystems",
  description:
    "OrenGen Worldwide architects hosted and self-hosted AI-enabled enterprise ecosystems for public sector, healthcare, and enterprise operators that need governance, automation, and implementation velocity.",
  authors: [{ name: "OrenGen Worldwide LLC" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "OrenGen Worldwide",
    url: "https://orengen.io/",
    title:
      "OrenGen Worldwide | Hosted & Self-Hosted AI-Enabled Enterprise Ecosystems",
    description:
      "Sovereign AI infrastructure, workflow orchestration, governance, and executive-grade implementation for high-stakes organizations.",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "OrenGen Worldwide | Hosted & Self-Hosted AI-Enabled Enterprise Ecosystems",
    description:
      "Hosted and self-hosted AI-enabled ecosystems for public sector, healthcare, and enterprise operations.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      {
        url: OFFICIAL_FAVICON_NAVY_URL,
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: OFFICIAL_FAVICON_WHITE_URL,
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: OFFICIAL_FAVICON_NAVY_URL,
    apple: OFFICIAL_FAVICON_NAVY_URL,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#00254B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={publicSans.variable}>
      <head>
        <link rel="preconnect" href="https://assets.cdn.filesafe.space" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.content360.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
