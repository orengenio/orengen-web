import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import { FAVICON_URL } from "@/lib/brandAssets";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-public-sans",
});

const OG_IMAGE =
  "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/bmeUUijIh8dkwmEIWUWDktHNGX2nMZ0HewKw9Q0e.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://orengen.io"),
  title:
    "OrenGen Worldwide | Hosted & Self-Hosted AI-Enabled Enterprise Ecosystems",
  description:
    "OrenGen Worldwide architects hosted and self-hosted AI-enabled enterprise ecosystems for public sector, healthcare, and enterprise operators that need governance, automation, and implementation velocity.",
  authors: [{ name: "OrenGen Worldwide LLC" }],
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
  icons: { icon: FAVICON_URL, shortcut: FAVICON_URL, apple: FAVICON_URL },
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
      <body>{children}</body>
    </html>
  );
}
