import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import { FAVICON_URL } from "@/lib/brandAssets";
import JsonLd from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, ORG, SITE_DESCRIPTION } from "@/lib/seo/constants";
import { buildGlobalSiteGraph } from "@/lib/seo/jsonLd";
import ChatWidget from "@/components/site/ChatWidget";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-public-sans",
});

const OG_IMAGE = DEFAULT_OG_IMAGE;

export const metadata: Metadata = {
  metadataBase: new URL("https://orengen.io"),
  title:
    "OrenGen Worldwide | Hosted & Self-Hosted AI-Enabled Enterprise Ecosystems",
  description: SITE_DESCRIPTION,
  keywords: [
    "enterprise AI infrastructure",
    "self-hosted Claude",
    "sovereign AI",
    "NIST-aligned AI",
    "HIPAA AI healthcare",
    "government contracting AI",
    "SAM.gov AI vendor",
    "OrenNexus CRM",
    "OrenAgents voice AI",
    "workflow orchestration",
  ],
  authors: [{ name: ORG.legalName, url: "https://orengen.io/about" }],
  creator: ORG.brandName,
  publisher: ORG.legalName,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es/",
      fr: "/fr/",
      de: "/de/",
      pt: "/pt/",
      "x-default": "/",
    },
    types: {
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    type: "website",
    siteName: ORG.brandName,
    url: "https://orengen.io/",
    title:
      "OrenGen Worldwide | Hosted & Self-Hosted AI-Enabled Enterprise Ecosystems",
    description:
      "Sovereign AI infrastructure, workflow orchestration, governance, and executive-grade implementation for high-stakes organizations.",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: ORG.brandName }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@orengenio",
    title:
      "OrenGen Worldwide | Hosted & Self-Hosted AI-Enabled Enterprise Ecosystems",
    description:
      "Hosted and self-hosted AI-enabled ecosystems for public sector, healthcare, and enterprise operations.",
    images: [OG_IMAGE],
  },
  icons: { icon: FAVICON_URL, shortcut: FAVICON_URL, apple: FAVICON_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": ORG.geo.region,
    "geo.placename": ORG.geo.placename,
    "geo.position": `${ORG.geo.latitude};${ORG.geo.longitude}`,
    ICBM: `${ORG.geo.latitude}, ${ORG.geo.longitude}`,
  },
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
      <body>
        <JsonLd data={buildGlobalSiteGraph()} />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
