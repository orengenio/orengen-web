"use client";

import { useMemo, useState } from "react";
import PricingTiers, { type PricingPlan } from "./PricingTiers";
import {
  commercialTerms,
  FINAL_PRICING,
  PRICING_PRODUCT_GROUPS,
  type PricingPlanKey,
  type PricingProductId,
} from "@/lib/pricingCatalog";

const PRODUCT_ORDER: PricingProductId[] = [
  "nexus",
  "employees",
  "voice",
  "bundle",
  "social",
  "webDesign",
  "webTalk",
];

const PRODUCT_DETAILS: Record<
  PricingProductId,
  {
    eyebrow: string;
    headline: string;
    summary: string;
    proof: string[];
  }
> = {
  nexus: {
    eyebrow: "Your command center",
    headline: "Nexus CRM",
    summary:
      "CRM, pipeline, email, SMS, funnels, forms, and a unified inbox in one operating layer.",
    proof: ["$0 setup", "3 to unlimited users", "AI-agent ready"],
  },
  employees: {
    eyebrow: "Your digital workforce",
    headline: "AI Employees",
    summary:
      "Deploy trained AI workers for qualification, scheduling, CRM operations, follow-up, and back-office execution.",
    proof: ["Chat + SMS", "Up to 50 employees", "100+ languages"],
  },
  voice: {
    eyebrow: "OrenGen trademark technology",
    headline: "Buy-Lingual™ AI Voice",
    summary:
      "Answer, qualify, book, and transfer customer calls in the language each caller prefers.",
    proof: ["Inbound + outbound", "100+ languages", "Live transfer"],
  },
  bundle: {
    eyebrow: "Recommended configuration",
    headline: 'Agents "Better Together"',
    summary:
      "Unify Buy-Lingual™ AI Voice and AI Employees in one coordinated revenue-recovery system.",
    proof: ["Voice + employees", "One deployment", "Best overall value"],
  },
  social: {
    eyebrow: "Your authority engine",
    headline: "OrenSocial",
    summary:
      "Managed content, publishing, engagement, reporting, and social intelligence across your channels.",
    proof: ["Fully managed", "3 to 25+ profiles", "Content included"],
  },
  webDesign: {
    eyebrow: "Your digital flagship",
    headline: "OrenWeb Design",
    summary:
      "High-performance websites engineered to rank, convert, and evolve with your business.",
    proof: ["Hosting included", "SEO included", "Ongoing maintenance"],
  },
  webTalk: {
    eyebrow: "Your conversational website",
    headline: "OrenWeb Talk",
    summary:
      "Embed AI voice and chat directly into your site so visitors can get answers and book without leaving the page.",
    proof: ["Voice + chat", "Inline booking", "100+ languages"],
  },
};

const PLAN_FEATURES: Record<PricingPlanKey, string[]> = {
  nexusStandard: ["3 users", "CRM + pipeline", "5,000 emails/mo"],
  nexusProfessional: ["25 users", "Unlimited funnels", "SMS + automation"],
  nexusPremium: ["Unlimited users", "Unlimited sends", "API + unified inbox"],
  employeesStandard: ["1 AI Employee", "5,000 conversations/mo", "CRM integration"],
  employeesProfessional: ["3 AI Employees", "15,000 conversations/mo", "Chat + SMS"],
  employeesPremium: ["Up to 50 AI Employees", "Unlimited conversations", "Custom workflows"],
  voiceStandard: ["1 AI Voice Agent", "500 minutes/mo", "Inbound handling"],
  voiceProfessional: ["3 AI Voice Agents", "2,000 minutes/mo", "Inbound + outbound"],
  voicePremium: ["Up to 50 AI Voice Agents", "5,000 minutes/mo", "Custom call flows"],
  bundleLaunch: ["AI Voice Agent", "AI Employee", "Lead capture + booking"],
  bundleGrowth: ["Everything in Launch", "Missed-call recovery", "Multi-step follow-up"],
  bundleScale: ["Everything in Growth", "Advanced CRM automation", "Custom architecture"],
  socialStandard: ["3 social profiles", "30 optimized posts/mo", "Monthly reporting"],
  socialProfessional: ["10 social profiles", "Unlimited scheduled posts", "Short-form video"],
  socialPremium: ["25+ social profiles", "Social listening", "Real-time dashboard"],
  webDesignStandard: ["Up to 5 pages", "Hosting + SSL", "Monthly maintenance"],
  webDesignProfessional: ["Up to 15 pages", "Advanced SEO", "Weekly maintenance"],
  webDesignPremium: ["Unlimited pages", "Custom APIs", "Dedicated web team"],
  webTalkStandard: ["AI chat widget", "Up to 5 pages", "1,000 conversations/mo"],
  webTalkProfessional: ["AI voice + chat", "Up to 15 pages", "5,000 conversations/mo"],
  webTalkPremium: ["Voice + chat + video", "Unlimited pages", "Unlimited conversations"],
};

export default function PricingExplorer({
  initialProduct = "bundle",
  compact = false,
}: {
  initialProduct?: PricingProductId;
  compact?: boolean;
}) {
  const [activeProduct, setActiveProduct] =
    useState<PricingProductId>(initialProduct);
  const product = PRICING_PRODUCT_GROUPS[activeProduct];
  const details = PRODUCT_DETAILS[activeProduct];

  const plans = useMemo<PricingPlan[]>(
    () =>
      product.planKeys.map((planKey, index) => {
        const source = FINAL_PRICING[planKey];
        return {
          name: source.tier,
          ...commercialTerms(planKey),
          features: PLAN_FEATURES[planKey],
          featured: index === 1,
          badge:
            activeProduct === "bundle" && index === 2
              ? "Best Value"
              : undefined,
          ctaLabel: `Choose ${source.tier}`,
        };
      }),
    [activeProduct, product.planKeys],
  );

  return (
    <div className={`pricing-explorer${compact ? " is-compact" : ""}`}>
      <div
        className="pricing-explorer__tabs"
        role="tablist"
        aria-label="Choose a product to compare plans"
      >
        {PRODUCT_ORDER.map((productId) => {
          const tab = PRICING_PRODUCT_GROUPS[productId];
          const selected = productId === activeProduct;
          return (
            <button
              key={productId}
              type="button"
              role="tab"
              aria-selected={selected}
              className={selected ? "is-active" : undefined}
              onClick={() => setActiveProduct(productId)}
            >
              {tab.shortLabel}
            </button>
          );
        })}
      </div>

      <div className="pricing-explorer__intro">
        <div>
          <div className="eyebrow">{details.eyebrow}</div>
          <h2>{details.headline}</h2>
          <p>{details.summary}</p>
        </div>
        <div className="pricing-explorer__proof" aria-label="Product highlights">
          {details.proof.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <PricingTiers plans={plans} />

      <div className="pricing-explorer__footer">
        <p>
          Setup is a one-time implementation fee. Select Monthly or Annual
          above to send the correct plan directly to secure Stripe checkout.
        </p>
        <a className="card-link" href={product.href}>
          Explore every {details.headline} feature →
        </a>
      </div>
    </div>
  );
}
