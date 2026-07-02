export type ProductEntry = {
  id: string;
  name: string;
  path: string;
  description: string;
  category: string;
  priceFrom: number;
  currency: "USD";
};

/** Canonical product catalog for Service / ItemList schema and llms.txt. */
export const OREN_PRODUCTS: ProductEntry[] = [
  {
    id: "orennexus",
    name: "OrenNexus",
    path: "/orennexus",
    description:
      "Unified CRM, pipeline, email, SMS, funnels, forms, and conversational inbox — AI-orchestrated command center from $97/mo.",
    category: "CRM & Marketing Automation",
    priceFrom: 97,
    currency: "USD",
  },
  {
    id: "orenagents-voice",
    name: "OrenAgents Voice",
    path: "/orenagents/voice",
    description:
      "Buy-Lingual AI voice agents for inbound, outbound, transfers, and booking — from $197/mo.",
    category: "AI Voice Agents",
    priceFrom: 197,
    currency: "USD",
  },
  {
    id: "orenagents-employees",
    name: "OrenAgents Employees",
    path: "/orenagents/employees",
    description:
      "AI chat employees for web, SMS, and messaging — trained on your business, 24/7 — from $97/mo.",
    category: "AI Digital Employees",
    priceFrom: 97,
    currency: "USD",
  },
  {
    id: "orenweb-design",
    name: "OrenWeb Design",
    path: "/orenweb/design",
    description:
      "High-conversion websites and digital properties with technical SEO and schema — from $247/mo.",
    category: "Web Platform",
    priceFrom: 247,
    currency: "USD",
  },
  {
    id: "orensocial",
    name: "OrenSocial",
    path: "/orensocial",
    description:
      "Authority content, syndication, and signal engines for B2B growth — from $47/mo.",
    category: "Content & Authority",
    priceFrom: 47,
    currency: "USD",
  },
  {
    id: "orengov",
    name: "OrenGov",
    path: "/orengov",
    description:
      "NIST-aligned sovereign AI for federal, state, local, education, and defense procurement paths.",
    category: "Public Sector AI",
    priceFrom: 0,
    currency: "USD",
  },
  {
    id: "orenhealth",
    name: "OrenHealth",
    path: "/orenhealth",
    description:
      "HIPAA-trained AI workflow modernization for healthcare, clinics, and life sciences.",
    category: "Healthcare AI",
    priceFrom: 0,
    currency: "USD",
  },
  {
    id: "orenlegal",
    name: "OrenLegal",
    path: "/orenlegal",
    description:
      "Legal intake, document routing, and compliance workflow automation for law firms and legal ops.",
    category: "Legal Operations AI",
    priceFrom: 0,
    currency: "USD",
  },
];

export const OREN_SOLUTION_PATHS = [
  { name: "Capability Statement", path: "/capability-statement" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "FAQs", path: "/faqs" },
  { name: "Security Overview", path: "/legal/security-overview" },
  { name: "Pricing", path: "/pricing" },
  { name: "OrenKanBuilder", path: "/orenkanbuilder" },
  { name: "Contact", path: "/contact-us" },
];
