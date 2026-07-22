import type { ResearchItem } from "@/components/site/ResearchAccordion";
import type { PricingTierRow } from "@/components/site/PricingCompareTable";

export const ORENNEXUS_AT_A_GLANCE = [
  "Unified CRM, pipeline, email, SMS, funnels, and inbox — from $97/mo, $0 setup.",
  "Replaces 20+ point tools; unlimited users on Premium, no per-seat tax.",
  "Native hooks for OrenAgents voice and digital employees.",
  "SAM.gov registered · NIST-aligned delivery · HIPAA-enabled path available.",
];

export const ORENNEXUS_JUMPS = [
  { href: "#preview", label: "Preview" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#research", label: "Research" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const ORENNEXUS_RESEARCH: ResearchItem[] = [
  {
    id: "sprawl",
    label: "App Sprawl",
    stat: "112",
    headline: "SaaS apps used by the average enterprise.",
    body: "Most enterprises run 112 separate SaaS subscriptions, up from 8 in 2015. OrenNexus replaces CRM, funnel builder, email, SMS, surveys, scheduling, and more in one stack.",
    source: "Source: Productiv State of SaaS report",
  },
  {
    id: "productivity",
    label: "Lost Productivity",
    stat: "9.4hr",
    headline: "Wasted per employee, per week switching between apps.",
    body: "Knowledge workers lose a full workday every week toggling between tools, copying data, and reconciling records.",
    source: "Source: Asana Anatomy of Work index",
  },
  {
    id: "pipeline",
    label: "Pipeline Leakage",
    stat: "79%",
    headline: "Of marketing leads never convert — usually because of poor handoff.",
    body: "Leads die in the gap between marketing and sales when the systems don't talk. Unified pipeline closes the gap.",
    source: "Source: MarketingSherpa benchmark",
  },
  {
    id: "speed",
    label: "Speed-to-Lead",
    stat: "5min",
    headline: "The window where leads are 21× more likely to convert.",
    body: "Respond within five minutes and conversion odds increase dramatically. Most teams take hours or days. OrenNexus automates instant routing.",
    source: "Source: HBR / Lead Response Management Study",
  },
  {
    id: "adoption",
    label: "CRM Adoption Failure",
    stat: "63%",
    headline: "Of CRM implementations fail to deliver expected ROI.",
    body: "Most CRM projects collapse because the platform is bolted onto five other tools. OrenNexus consolidates the stack into one login your team actually uses.",
    source: "Source: CSO Insights / Gartner CRM research",
  },
  {
    id: "cost",
    label: "Per-Seat Tax",
    stat: "$12K+",
    headline: "Average annual per-employee SaaS cost.",
    body: "Enterprise per-seat SaaS spend climbs while utilization falls. OrenNexus Premium includes unlimited users.",
    source: "Source: Vendr / Blissfully SaaS pricing benchmarks",
  },
];

export const ORENNEXUS_PRICING_TABLE: PricingTierRow[] = [
  {
    name: "Standard",
    monthly: "$97/mo",
    setup: "$0",
    ctaHref: "https://buy.stripe.com/aFa4gzgsE25h8Of2tHfQI45",
    ctaLabel: "Select Standard →",
    highlights: ["3 users", "5,000 emails/mo", "1 funnel", "Pipeline + forms"],
  },
  {
    name: "Professional",
    monthly: "$297/mo",
    setup: "$0",
    ctaHref: "https://buy.stripe.com/28EfZhdgscJV4xZgkxfQI47",
    ctaLabel: "Select Professional →",
    featured: true,
    highlights: ["25 users", "25,000 emails/mo", "SMS + automation", "A/B testing"],
  },
  {
    name: "Premium",
    monthly: "$497/mo",
    setup: "$0",
    ctaHref: "https://buy.stripe.com/dRmbJ14JW5htd4v9W9fQJ01",
    ctaLabel: "Select Premium →",
    highlights: ["Unlimited users", "Unlimited sends", "Unified inbox", "API access"],
  },
];
