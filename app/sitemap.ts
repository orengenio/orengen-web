import type { MetadataRoute } from "next";

/**
 * Generates /sitemap.xml at build time from the live route list (fixes the
 * footer's previously-dead /sitemap.xml link and improves indexing). Only
 * routes that actually exist are listed — add new pages here as they ship.
 */
const BASE = "https://orengen.io";

const ROUTES: string[] = [
  "",
  "/about",
  "/leadership",
  "/careers",
  "/capability-statement",
  "/pricing",
  "/faqs",
  "/contact-us",
  "/case-studies",
  "/blog",
  "/affiliate-program",
  "/sales-partner-program",
  "/orenkanbuilder",
  // Products
  "/orenagents",
  "/orenagents/voice",
  "/orenagents/employees",
  "/orenagents/better-together-package",
  "/orennexus",
  "/orensocial",
  "/orenweb",
  "/orenweb/design",
  "/orenweb/talk",
  // Sectors
  "/orengov",
  "/orengov/defense",
  "/orengov/public-sector/state-local",
  "/orengov/public-sector/education",
  "/orenhealth",
  "/orenhealth/specialty-clinics",
  "/orenhealth/research",
  "/orenlegal",
  "/orenlegal/law-firms",
  "/orenlegal/compliance-ops",
  // Legal
  "/legal",
  "/legal/privacy-policy",
  "/legal/terms",
  "/legal/cookie-policy",
  "/legal/acceptable-use",
  "/legal/copyright-notice",
  "/legal/trademark-policy",
  "/legal/legal-disclaimers",
  "/legal/refund-policy",
  "/legal/security-overview",
  "/legal/ai-communications-opt-in",
  "/legal/ai-sms-opt-in",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/legal") ? 0.4 : 0.7,
  }));
}
