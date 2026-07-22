import { FAVICON_URL, OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";

export const SITE_URL = "https://orengen.io";

export const ORG = {
  legalName: "OrenGen Worldwide LLC",
  brandName: "OrenGen Worldwide",
  url: SITE_URL,
  logo: OFFICIAL_LOGO_BLUE_URL,
  icon: FAVICON_URL,
  email: "briefing@orengen.io",
  phone: "+1-833-673-6436",
  phoneDisplay: "833-ORENGEN",
  address: {
    locality: "Mansfield",
    region: "TX",
    country: "US",
  },
  geo: {
    region: "US-TX",
    placename: "Mansfield, Texas",
    latitude: 32.5632,
    longitude: -97.1417,
  },
  uei: "RX16QFYT6YM5",
  cage: "12XC1",
  naicsPrimary: "541519",
  sameAs: [
    "https://www.linkedin.com/company/orengenio",
    "https://x.com/orengenio",
    "https://www.instagram.com/orengenio",
    "https://www.facebook.com/orengenio",
    "https://github.com/orengenio",
    "https://www.youtube.com/@orengenio",
  ],
  knowsAbout: [
    "Enterprise AI infrastructure",
    "Self-hosted Claude deployments",
    "NIST-aligned AI governance",
    "HIPAA-enabled healthcare AI",
    "Government contracting AI",
    "Workflow orchestration",
    "CRM and marketing automation",
    "AI voice agents",
  ],
} as const;

export const DEFAULT_OG_IMAGE =
  "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/bmeUUijIh8dkwmEIWUWDktHNGX2nMZ0HewKw9Q0e.png";

export const SITE_DESCRIPTION =
  "OrenGen Worldwide architects hosted and self-hosted AI-enabled enterprise ecosystems for public sector, healthcare, legal, and enterprise operators — governed automation, SAM.gov-registered delivery, and owned infrastructure.";
