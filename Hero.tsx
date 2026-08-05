"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import PricingExplorer from "./PricingExplorer";
import {
  FINAL_PRICING,
  PRICING_PRODUCT_GROUPS,
  type PricingPlanKey,
  type PricingProductId,
} from "@/lib/pricingCatalog";

type DivisionId =
  | "worldwide"
  | "agents"
  | "nexus"
  | "web"
  | "social"
  | "partners"
  | "consulting"
  | "gov"
  | "health"
  | "legal";

type ChapterId = "overview" | "experience" | "proof" | "plans";

type Division = {
  id: DivisionId;
  number: string;
  shortLabel: string;
  kicker: string;
  title: string;
  description: string;
  href: string;
  primaryLabel: string;
  visual: Exclude<DivisionId, "worldwide"> | "worldwide";
  highlights: string[];
  experience: string[];
  metrics: { value: string; label: string }[];
};

const DIVISIONS: Record<DivisionId, Division> = {
  worldwide: {
    id: "worldwide",
    number: "00",
    shortLabel: "Worldwide",
    kicker: "The OrenGen Living Interface",
    title: "Your entire AI enterprise. One living interface.",
    description:
      "Move through products, partner pathways, regulated sectors, proof, and pricing without leaving the first page. Every doorway opens here; every dedicated page still exists when you want the full depth.",
    href: "/about",
    primaryLabel: "Meet OrenGen",
    visual: "worldwide",
    highlights: [
      "Nine connected divisions",
      "21 activation-ready plans",
      "One continuous decision surface",
    ],
    experience: [
      "Choose a division",
      "See its system come alive",
      "Delve through the chapter tabs",
      "Activate or open the full brief",
    ],
    metrics: [
      { value: "9", label: "connected divisions" },
      { value: "21", label: "final commercial plans" },
      { value: "1", label: "seamless front door" },
    ],
  },
  agents: {
    id: "agents",
    number: "01",
    shortLabel: "OrenAgents",
    kicker: "Autonomous AI Workforce",
    title: "Conversations become action—without the handoff breaking.",
    description:
      "Buy-Lingual™ AI Voice answers and understands. AI Employees qualify, schedule, update, and follow through. Better Together connects both into one coordinated workforce.",
    href: "/orenagents",
    primaryLabel: "Open OrenAgents",
    visual: "agents",
    highlights: ["100+ languages", "Voice + digital employees", "24/7 execution"],
    experience: [
      "A customer calls or messages",
      "Buy-Lingual™ understands intent",
      "An AI Employee executes the next action",
      "Nexus records and advances the outcome",
    ],
    metrics: [
      { value: "100+", label: "world languages" },
      { value: "24/7", label: "answer and execution" },
      { value: "1–50", label: "AI workers per plan" },
    ],
  },
  nexus: {
    id: "nexus",
    number: "02",
    shortLabel: "OrenNexus",
    kicker: "Unified CRM Command Center",
    title: "One source of truth for every lead, signal, and next move.",
    description:
      "CRM, pipeline, email, SMS, funnels, forms, automations, and the unified inbox stop behaving like separate subscriptions and start operating as one system.",
    href: "/orennexus",
    primaryLabel: "Open OrenNexus",
    visual: "nexus",
    highlights: ["$0 setup", "3 to unlimited users", "Agent-ready operating layer"],
    experience: [
      "Capture the signal",
      "Score and route the lead",
      "Trigger the right sequence",
      "Measure the outcome in one record",
    ],
    metrics: [
      { value: "20+", label: "point tools replaced" },
      { value: "5 min", label: "speed-to-lead target" },
      { value: "$0", label: "setup on every tier" },
    ],
  },
  web: {
    id: "web",
    number: "03",
    shortLabel: "OrenWeb",
    kicker: "Living Digital Flagships",
    title: "Websites that rank, convert, listen, and answer back.",
    description:
      "OrenWeb Design creates the high-performance flagship. OrenWeb Talk adds embedded AI voice and chat so visitors can understand, decide, and book without leaving.",
    href: "/orenweb",
    primaryLabel: "Open OrenWeb",
    visual: "web",
    highlights: ["Design + conversational AI", "SEO + GEO + AEO", "Hosting included"],
    experience: [
      "Attract the right visitor",
      "Reveal the relevant story",
      "Answer intent inline",
      "Convert without a navigation detour",
    ],
    metrics: [
      { value: "<2s", label: "performance target" },
      { value: "100+", label: "voice-enabled languages" },
      { value: "24/7", label: "managed presence" },
    ],
  },
  social: {
    id: "social",
    number: "04",
    shortLabel: "OrenSocial",
    kicker: "Managed Authority Engine",
    title: "One idea becomes a coordinated market presence.",
    description:
      "Strategy, content, publishing, engagement, listening, and reporting work as one managed signal system across every channel that matters.",
    href: "/orensocial",
    primaryLabel: "Open OrenSocial",
    visual: "social",
    highlights: ["Fully managed", "3 to 25+ profiles", "Content + reporting included"],
    experience: [
      "Capture the brand signal",
      "Shape it for each channel",
      "Publish at the right moment",
      "Learn from response and sentiment",
    ],
    metrics: [
      { value: "30+", label: "optimized posts from Standard" },
      { value: "25+", label: "profiles on Premium" },
      { value: "1", label: "managed content system" },
    ],
  },
  partners: {
    id: "partners",
    number: "05",
    shortLabel: "Sales Partners",
    kicker: "The Center Bridge",
    title: "Earn at the center of the OrenGen ecosystem.",
    description:
      "Join free, introduce the right business to OrenGen, and earn a flat share of both the setup and the monthly relationship—with weekly Stripe payouts.",
    href: "/sales-partner-program",
    primaryLabel: "Enter the Partner Program",
    visual: "partners",
    highlights: ["25% of setup", "25% monthly for life", "Weekly Stripe payouts"],
    experience: [
      "Join the program free",
      "Share your tracked partner link",
      "Earn when the account activates",
      "Keep earning every active month",
    ],
    metrics: [
      { value: "25%", label: "of every setup fee" },
      { value: "25%", label: "monthly residual for life" },
      { value: "Weekly", label: "Stripe payouts" },
    ],
  },
  consulting: {
    id: "consulting",
    number: "06",
    shortLabel: "Consulting",
    kicker: "Strategy With Hands",
    title: "Executive judgment connected directly to implementation.",
    description:
      "Fractional leadership, AI architecture, operating-model design, and hands-on engineering for organizations whose challenge does not fit inside a standard product box.",
    href: "/contact-us",
    primaryLabel: "Architect a Briefing",
    visual: "consulting",
    highlights: ["Fractional C-suite", "AI architecture", "Implementation included"],
    experience: [
      "Frame the operating constraint",
      "Choose the ownership model",
      "Architect the system and controls",
      "Deploy, govern, and hand off",
    ],
    metrics: [
      { value: "2 wk", label: "initial deployment target" },
      { value: "C-suite", label: "strategy altitude" },
      { value: "Hands-on", label: "engineering model" },
    ],
  },
  gov: {
    id: "gov",
    number: "07",
    shortLabel: "OrenGov",
    kicker: "Public-Sector Mission Systems",
    title: "Mission velocity without surrendering governance.",
    description:
      "Governed AI, workflow, and operating infrastructure for state, local, education, defense, and public-sector teams with procurement and compliance realities.",
    href: "/orengov",
    primaryLabel: "Open OrenGov",
    visual: "gov",
    highlights: ["SAM.gov active", "CAGE 12XC1", "NIST-aligned delivery"],
    experience: [
      "Define the mission boundary",
      "Map controls and data paths",
      "Prototype inside the governance envelope",
      "Scale with auditable ownership",
    ],
    metrics: [
      { value: "SAM", label: "active registration" },
      { value: "12XC1", label: "CAGE code" },
      { value: "800-53", label: "NIST-trained delivery" },
    ],
  },
  health: {
    id: "health",
    number: "08",
    shortLabel: "OrenHealth",
    kicker: "Care Operations Infrastructure",
    title: "Less administrative drag between a patient and the next right action.",
    description:
      "Patient access, research, specialty-clinic, and healthcare workflow systems designed around responsible automation, clear escalation, and HIPAA-enabled paths.",
    href: "/orenhealth",
    primaryLabel: "Open OrenHealth",
    visual: "health",
    highlights: ["HIPAA-enabled path", "Human escalation", "Research + clinic workflows"],
    experience: [
      "Receive the patient signal",
      "Route with clear boundaries",
      "Assist the operational next step",
      "Escalate clinical judgment to humans",
    ],
    metrics: [
      { value: "24/7", label: "patient-access layer" },
      { value: "Human", label: "clinical decision authority" },
      { value: "Traceable", label: "workflow design" },
    ],
  },
  legal: {
    id: "legal",
    number: "09",
    shortLabel: "OrenLegal",
    kicker: "Legal Operations Systems",
    title: "Move matters forward while keeping judgment where it belongs.",
    description:
      "Structured intake, matter routing, knowledge operations, deadline support, and compliance workflows for legal teams that need acceleration with visible boundaries.",
    href: "/orenlegal",
    primaryLabel: "Open OrenLegal",
    visual: "legal",
    highlights: ["Structured intake", "Matter routing", "Attorney-in-the-loop"],
    experience: [
      "Structure the incoming matter",
      "Identify jurisdiction and urgency",
      "Assemble the working record",
      "Route judgment to the right professional",
    ],
    metrics: [
      { value: "1", label: "structured matter record" },
      { value: "Visible", label: "decision boundaries" },
      { value: "Faster", label: "operational handoffs" },
    ],
  },
};

const AGENT_PRODUCTS: {
  id: "voice" | "employees" | "bundle";
  label: string;
  title: string;
  description: string;
  href: string;
  productId: PricingProductId;
  visual: Division["visual"];
}[] = [
  {
    id: "voice",
    label: "Buy-Lingual™ AI Voice",
    title: "Every caller heard. Every language understood.",
    description:
      "OrenGen’s trademark voice layer answers, qualifies, books, and transfers in 100+ world languages—without making the customer adapt to the machine.",
    href: "/orenagents/voice",
    productId: "voice",
    visual: "agents",
  },
  {
    id: "employees",
    label: "AI Employees",
    title: "A digital workforce that follows the work all the way through.",
    description:
      "AI Employees handle qualification, scheduling, CRM updates, follow-up, and recurring operational tasks across chat and SMS.",
    href: "/orenagents/employees",
    productId: "employees",
    visual: "agents",
  },
  {
    id: "bundle",
    label: "Better Together",
    title: "Voice hears it. Employees move it. Nexus remembers it.",
    description:
      "The recommended bundle connects the conversation layer to an execution layer so fewer leads, tasks, and customer moments fall through.",
    href: "/orenagents/better-together-package",
    productId: "bundle",
    visual: "agents",
  },
];

const WEB_PRODUCTS: {
  id: "design" | "talk";
  label: string;
  title: string;
  description: string;
  href: string;
  productId: PricingProductId;
}[] = [
  {
    id: "design",
    label: "OrenWeb Design",
    title: "A digital flagship engineered to earn attention and action.",
    description:
      "Custom design, technical performance, SEO, hosting, and ongoing maintenance in one managed web product.",
    href: "/orenweb/design",
    productId: "webDesign",
  },
  {
    id: "talk",
    label: "OrenWeb Talk",
    title: "A website visitors can actually talk to.",
    description:
      "Voice and chat live inside the site, answering questions, qualifying intent, and booking the next step without a page detour.",
    href: "/orenweb/talk",
    productId: "webTalk",
  },
];

const CHAPTER_LABELS: Record<ChapterId, string> = {
  overview: "Overview",
  experience: "How it moves",
  proof: "Proof",
  plans: "Plans",
};

function DivisionVisual({
  division,
  productLabel,
}: {
  division: Division["visual"];
  productLabel?: string;
}) {
  if (division === "worldwide") {
    return (
      <div className="u-visual u-visual--world">
        <div className="u-world__halo" />
        <div className="u-world__sphere">
          <span className="u-world__longitude u-world__longitude--a" />
          <span className="u-world__longitude u-world__longitude--b" />
          <span className="u-world__latitude u-world__latitude--a" />
          <span className="u-world__latitude u-world__latitude--b" />
          <b>OG</b>
        </div>
        <span className="u-world__node u-world__node--a">AI</span>
        <span className="u-world__node u-world__node--b">CRM</span>
        <span className="u-world__node u-world__node--c">WEB</span>
        <span className="u-world__node u-world__node--d">GOV</span>
        <div className="u-visual__caption">OrenGen Worldwide · Live ecosystem</div>
      </div>
    );
  }

  if (division === "agents") {
    return (
      <div className="u-visual u-visual--agents">
        <div className="u-agent__core">
          <span className="u-agent__ring u-agent__ring--one" />
          <span className="u-agent__ring u-agent__ring--two" />
          <span className="u-agent__pulse" />
          <b>AI</b>
        </div>
        <div className="u-agent__wave" aria-hidden="true">
          {[14, 31, 48, 74, 42, 88, 56, 26, 66, 38, 18].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="u-agent__intent">
          <span>UNDERSTAND</span>
          <i />
          <span>ACT</span>
          <i />
          <span>REMEMBER</span>
        </div>
        <div className="u-visual__caption">
          {productLabel ?? "Buy-Lingual™ agent network"}
        </div>
      </div>
    );
  }

  if (division === "nexus") {
    return (
      <div className="u-visual u-visual--nexus">
        <div className="u-nexus__top">
          <span>LIVE PIPELINE</span>
          <b>● ACTIVE</b>
        </div>
        <div className="u-nexus__columns">
          {[
            ["NEW", "Harbor Co.", "$12.8k"],
            ["QUALIFIED", "Vertex", "$18.4k"],
            ["PROPOSAL", "Northstar", "$31.2k"],
          ].map(([label, company, value], index) => (
            <div className="u-nexus__column" key={label}>
              <small>{label}</small>
              <div className="u-nexus__deal" style={{ animationDelay: `${index * 0.25}s` }}>
                <strong>{company}</strong>
                <span>{value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="u-nexus__signal">
          <span />
          AI follow-up sent · next action scheduled
        </div>
      </div>
    );
  }

  if (division === "web") {
    return (
      <div className="u-visual u-visual--web">
        <div className="u-web__browser">
          <div className="u-web__bar">
            <span />
            <span />
            <span />
            <b>orengen.io</b>
          </div>
          <div className="u-web__page">
            <small>INTELLIGENT DIGITAL FLAGSHIP</small>
            <strong>Built to answer intent.</strong>
            <i />
            <i />
            <button type="button" tabIndex={-1}>
              Start the conversation
            </button>
          </div>
        </div>
        <div className="u-web__voice">
          <span />
          <b>Listening</b>
        </div>
        <div className="u-visual__caption">
          {productLabel ?? "Design + conversational intelligence"}
        </div>
      </div>
    );
  }

  if (division === "social") {
    return (
      <div className="u-visual u-visual--social">
        <div className="u-social__idea">ONE IDEA</div>
        <div className="u-social__spine" />
        {["IN", "IG", "YT", "TT", "X"].map((network, index) => (
          <div
            className={`u-social__node u-social__node--${index + 1}`}
            key={network}
          >
            <b>{network}</b>
            <span style={{ width: `${58 + index * 7}%` }} />
            <span style={{ width: `${78 - index * 6}%` }} />
          </div>
        ))}
        <div className="u-social__signal">Signal strength ↑ 38%</div>
      </div>
    );
  }

  if (division === "partners") {
    return (
      <div className="u-visual u-visual--partners">
        <div className="u-partner__source">YOU</div>
        <div className="u-partner__flow">
          <span />
          <i />
          <span />
        </div>
        <div className="u-partner__account">
          <small>ACTIVE ACCOUNT</small>
          <strong>25% + 25%</strong>
          <span>for life</span>
        </div>
        <div className="u-partner__payout">
          <small>WEEKLY STRIPE PAYOUT</small>
          <b>+$873.50</b>
        </div>
      </div>
    );
  }

  if (division === "consulting") {
    return (
      <div className="u-visual u-visual--consulting">
        <div className="u-consult__axis u-consult__axis--x">EXECUTION →</div>
        <div className="u-consult__axis u-consult__axis--y">CONTROL →</div>
        <div className="u-consult__grid">
          <span>ADVISE</span>
          <span>DESIGN</span>
          <span>BUILD</span>
          <span className="is-hot">OWN</span>
        </div>
        <div className="u-consult__cursor">Your operating model</div>
      </div>
    );
  }

  if (division === "gov") {
    return (
      <div className="u-visual u-visual--gov">
        <div className="u-gov__scan" />
        <div className="u-gov__shield">
          <span>OG</span>
          <b>MISSION READY</b>
        </div>
        <div className="u-gov__control u-gov__control--a">NIST</div>
        <div className="u-gov__control u-gov__control--b">SAM</div>
        <div className="u-gov__control u-gov__control--c">CAGE</div>
        <div className="u-gov__status">CONTROL PATH VERIFIED</div>
      </div>
    );
  }

  if (division === "health") {
    return (
      <div className="u-visual u-visual--health">
        <div className="u-health__patient">PATIENT</div>
        <svg viewBox="0 0 520 180" role="presentation">
          <path
            className="u-health__path"
            d="M22 100h82l24-46 36 98 42-112 38 72h86l28-38 36 54 28-28h76"
          />
          <circle cx="22" cy="100" r="7" />
          <circle cx="498" cy="100" r="7" />
        </svg>
        <div className="u-health__route">
          <span>ACCESS</span>
          <span>ROUTE</span>
          <span>HUMAN CARE</span>
        </div>
        <div className="u-health__status">BOUNDARIES · ESCALATION · TRACEABILITY</div>
      </div>
    );
  }

  return (
    <div className="u-visual u-visual--legal">
      <div className="u-legal__document u-legal__document--back" />
      <div className="u-legal__document u-legal__document--front">
        <small>MATTER INTAKE · 00481</small>
        <strong>Structured working record</strong>
        <span />
        <span />
        <span className="is-marked" />
        <span />
        <b>ATTORNEY REVIEW</b>
      </div>
      <div className="u-legal__stamp">ROUTED</div>
    </div>
  );
}

function CompactPricing({ productId }: { productId: PricingProductId }) {
  const [annual, setAnnual] = useState(false);
  const group = PRICING_PRODUCT_GROUPS[productId];

  return (
    <div className="u-compact-pricing">
      <div className="u-compact-pricing__top">
        <div>
          <small>ACTIVATION-READY PRICING</small>
          <h3>{group.label}</h3>
        </div>
        <div className="u-billing-toggle" role="group" aria-label="Billing period">
          <button
            type="button"
            className={!annual ? "is-active" : undefined}
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            className={annual ? "is-active" : undefined}
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
          >
            Annual
          </button>
        </div>
      </div>
      <div className="u-compact-pricing__grid">
        {group.planKeys.map((planKey, index) => {
          const plan = FINAL_PRICING[planKey as PricingPlanKey];
          const value = annual ? plan.annual : plan.monthly;
          const checkout = annual
            ? plan.annualCheckout
            : plan.monthlyCheckout;
          return (
            <article
              key={planKey}
              className={index === 1 ? "is-featured" : undefined}
            >
              {index === 1 && <small className="u-plan-badge">MOST POPULAR</small>}
              <h4>{plan.tier}</h4>
              <div className="u-plan-price">
                <span>$</span>
                <strong>{value.toLocaleString("en-US")}</strong>
                <small>/{annual ? "yr" : "mo"}</small>
              </div>
              <p>
                {plan.setupFee === 0
                  ? "$0 setup fee"
                  : `+ $${plan.setupFee.toLocaleString("en-US")} one-time setup`}
              </p>
              {annual && (
                <em>
                  Save $
                  {(plan.monthly * 12 - plan.annual).toLocaleString("en-US")}
                  /yr
                </em>
              )}
              <a href={checkout} target="_blank" rel="noopener noreferrer">
                Choose {plan.tier} →
              </a>
            </article>
          );
        })}
      </div>
      <a className="u-compact-pricing__details" href={group.href}>
        Compare every included feature →
      </a>
    </div>
  );
}

function PartnerEarnings() {
  const webPlans = [
    FINAL_PRICING.webDesignStandard,
    FINAL_PRICING.webDesignProfessional,
    FINAL_PRICING.webDesignPremium,
  ];

  return (
    <div className="u-partner-earnings">
      <div className="u-partner-earnings__intro">
        <small>EXAMPLE: ORENWEB DESIGN</small>
        <h3>One introduction can pay twice—and keep paying.</h3>
        <p>
          At the current 25% setup + 25% monthly partner share, here is what one
          active website account can produce.
        </p>
      </div>
      <div className="u-partner-earnings__grid">
        {webPlans.map((plan) => (
          <article key={plan.tier}>
            <span>{plan.tier}</span>
            <strong>
              ${(plan.setupFee * 0.25).toLocaleString("en-US")}
            </strong>
            <small>setup commission</small>
            <b>${(plan.monthly * 0.25).toLocaleString("en-US")}/mo</b>
            <small>monthly residual</small>
          </article>
        ))}
      </div>
      <a className="btn btn-primary" href="/sales-partner-program">
        See the Full Partner Program
      </a>
    </div>
  );
}

function ChapterPanel({
  division,
  chapter,
  productId,
}: {
  division: Division;
  chapter: ChapterId;
  productId?: PricingProductId;
}) {
  if (chapter === "overview") {
    return (
      <div className="u-chapter u-chapter--overview">
        <div>
          <small>WHAT OPENS HERE</small>
          <h3>{division.kicker}</h3>
          <p>{division.description}</p>
        </div>
        <div className="u-highlight-list">
          {division.highlights.map((highlight, index) => (
            <div key={highlight}>
              <span>0{index + 1}</span>
              <strong>{highlight}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (chapter === "experience") {
    return (
      <div className="u-chapter u-chapter--experience">
        {division.experience.map((step, index) => (
          <div key={step} className="u-journey-step">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            {index < division.experience.length - 1 && <i />}
          </div>
        ))}
      </div>
    );
  }

  if (chapter === "proof") {
    return (
      <div className="u-chapter u-chapter--proof">
        {division.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
        {division.id === "worldwide" && (
          <div className="u-technology-strip">
            <small>ARCHITECTURE &amp; TECHNOLOGY</small>
            <div>
              {[
                "Claude-first",
                "Multi-system fluent",
                "MCP",
                "Agent Skills",
                "APIs",
                "Hosted + self-hosted",
                "NIST",
                "HIPAA-enabled",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (division.id === "worldwide") {
    return <PricingExplorer compact initialProduct="bundle" />;
  }

  if (division.id === "partners") {
    return <PartnerEarnings />;
  }

  if (productId) {
    return <CompactPricing productId={productId} />;
  }

  return (
    <div className="u-chapter u-chapter--engage">
      <div>
        <small>SCOPED ENGAGEMENT</small>
        <h3>Bring the mission, constraint, or operating problem.</h3>
        <p>
          This pathway is scoped around requirements, governance, integration,
          and the outcomes your organization needs to own.
        </p>
      </div>
      <a className="btn btn-primary" href={division.href}>
        {division.primaryLabel}
      </a>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [activeDivision, setActiveDivision] =
    useState<DivisionId>("worldwide");
  const [activeChapter, setActiveChapter] =
    useState<ChapterId>("overview");
  const [agentProduct, setAgentProduct] =
    useState<(typeof AGENT_PRODUCTS)[number]["id"]>("voice");
  const [webProduct, setWebProduct] =
    useState<(typeof WEB_PRODUCTS)[number]["id"]>("design");

  useEffect(() => {
    const applyInlineSelection = (detail: {
      division?: DivisionId;
      product?: "voice" | "employees" | "bundle" | "design" | "talk";
    }) => {
      if (!detail.division || !DIVISIONS[detail.division]) return;
      setActiveDivision(detail.division);
      setActiveChapter("overview");
      if (
        detail.division === "agents" &&
        (detail.product === "voice" || detail.product === "employees" || detail.product === "bundle")
      ) {
        setAgentProduct(detail.product);
      }
      if (
        detail.division === "web" &&
        (detail.product === "design" || detail.product === "talk")
      ) {
        setWebProduct(detail.product);
      }
    };

    const applyHash = () => {
      const key = window.location.hash.replace(/^#orengen-/, "");
      const targets: Record<string, { division: DivisionId; product?: "voice" | "employees" | "bundle" | "design" | "talk" }> = {
        worldwide: { division: "worldwide" },
        agents: { division: "agents" },
        "agents-voice": { division: "agents", product: "voice" },
        "agents-employees": { division: "agents", product: "employees" },
        "agents-bundle": { division: "agents", product: "bundle" },
        nexus: { division: "nexus" },
        web: { division: "web" },
        "web-design": { division: "web", product: "design" },
        "web-talk": { division: "web", product: "talk" },
        social: { division: "social" },
        partners: { division: "partners" },
        consulting: { division: "consulting" },
        gov: { division: "gov" },
        health: { division: "health" },
        legal: { division: "legal" },
      };
      if (targets[key]) applyInlineSelection(targets[key]);
    };

    const handleInlineEvent = (event: Event) => {
      applyInlineSelection((event as CustomEvent).detail ?? {});
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    window.addEventListener("orengen:select-inline", handleInlineEvent);
    return () => {
      window.removeEventListener("hashchange", applyHash);
      window.removeEventListener("orengen:select-inline", handleInlineEvent);
    };
  }, []);

  const division = DIVISIONS[activeDivision];
  const selectedAgent = AGENT_PRODUCTS.find(
    (product) => product.id === agentProduct,
  )!;
  const selectedWeb = WEB_PRODUCTS.find((product) => product.id === webProduct)!;

  const activeView = useMemo(() => {
    if (activeDivision === "agents") {
      return {
        title: selectedAgent.title,
        description: selectedAgent.description,
        href: selectedAgent.href,
        productId: selectedAgent.productId,
        productLabel: selectedAgent.label,
      };
    }
    if (activeDivision === "web") {
      return {
        title: selectedWeb.title,
        description: selectedWeb.description,
        href: selectedWeb.href,
        productId: selectedWeb.productId,
        productLabel: selectedWeb.label,
      };
    }
    const productId: PricingProductId | undefined =
      activeDivision === "nexus"
        ? "nexus"
        : activeDivision === "social"
          ? "social"
          : undefined;
    return {
      title: division.title,
      description: division.description,
      href: division.href,
      productId,
      productLabel: undefined,
    };
  }, [activeDivision, division, selectedAgent, selectedWeb]);

  const selectDivision = (id: DivisionId) => {
    setActiveDivision(id);
    setActiveChapter("overview");
  };

  const chapterLabels =
    activeDivision === "partners"
      ? { ...CHAPTER_LABELS, plans: "Earnings" }
      : activeView.productId || activeDivision === "worldwide"
        ? CHAPTER_LABELS
        : { ...CHAPTER_LABELS, plans: "Engage" };

  return (
    <section
      className="universe-hero"
      id="overview"
      aria-label="Explore the OrenGen Worldwide ecosystem"
    >
      <div className="universe-ambient" aria-hidden="true">
        <span className="universe-ambient__one" />
        <span className="universe-ambient__two" />
        <span className="universe-ambient__grid" />
      </div>

      <div className="container universe-shell">
        <div className="universe-topline">
          <button
            type="button"
            className={`universe-home${activeDivision === "worldwide" ? " is-active" : ""}`}
            aria-pressed={activeDivision === "worldwide"}
            onClick={() => selectDivision("worldwide")}
          >
            <span>●</span>
            ORENGEN WORLDWIDE
          </button>
          <div className="universe-status">
            <span />
            LIVING INTERFACE · SELECT ANY DIVISION
          </div>
        </div>

        <div className="universe-grid universe-grid--single">
          <div className="universe-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeDivision}-${activeView.productLabel ?? "main"}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.992 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10, scale: 0.995 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="universe-stage__head">
                  <div className="universe-stage__copy">
                    <div className="universe-breadcrumb">
                      <span>{division.number}</span>
                      {division.kicker}
                    </div>
                    <h1>{activeView.title}</h1>
                    <p>{activeView.description}</p>
                    <div className="universe-stage__actions">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setActiveChapter("plans")}
                      >
                        {activeDivision === "partners"
                          ? "See What You Can Earn"
                          : activeView.productId || activeDivision === "worldwide"
                            ? "Explore Plans Inline"
                            : "Explore This Path"}
                      </button>
                      <a className="btn btn-secondary" href={activeView.href}>
                        Open Full Page ↗
                      </a>
                    </div>
                  </div>

                  <DivisionVisual
                    division={division.visual}
                    productLabel={activeView.productLabel}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {activeDivision === "agents" && (
              <div
                className="universe-subproducts"
                role="tablist"
                aria-label="OrenAgents products"
              >
                {AGENT_PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    role="tab"
                    aria-selected={agentProduct === product.id}
                    className={agentProduct === product.id ? "is-active" : undefined}
                    onClick={() => {
                      setAgentProduct(product.id);
                      setActiveChapter("overview");
                    }}
                  >
                    {product.label}
                  </button>
                ))}
              </div>
            )}

            {activeDivision === "web" && (
              <div
                className="universe-subproducts"
                role="tablist"
                aria-label="OrenWeb products"
              >
                {WEB_PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    role="tab"
                    aria-selected={webProduct === product.id}
                    className={webProduct === product.id ? "is-active" : undefined}
                    onClick={() => {
                      setWebProduct(product.id);
                      setActiveChapter("overview");
                    }}
                  >
                    {product.label}
                  </button>
                ))}
              </div>
            )}

            <div
              className="universe-chapters"
              role="tablist"
              aria-label={`${division.shortLabel} chapters`}
            >
              {(Object.keys(CHAPTER_LABELS) as ChapterId[]).map((chapter) => (
                <button
                  key={chapter}
                  type="button"
                  role="tab"
                  aria-selected={activeChapter === chapter}
                  className={activeChapter === chapter ? "is-active" : undefined}
                  onClick={() => setActiveChapter(chapter)}
                >
                  {chapterLabels[chapter]}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeDivision}-${activeChapter}-${activeView.productLabel ?? "main"}`}
                className="universe-panel"
                role="tabpanel"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <ChapterPanel
                  division={{
                    ...division,
                    title: activeView.title,
                    description: activeView.description,
                    href: activeView.href,
                  }}
                  chapter={activeChapter}
                  productId={activeView.productId}
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        <div className="universe-partner-bridge" aria-label="Sales Partner Program">
          <span className="universe-partner-bridge__line" aria-hidden="true" />
          <button
            type="button"
            className={activeDivision === "partners" ? "is-active" : undefined}
            aria-pressed={activeDivision === "partners"}
            onClick={() => selectDivision("partners")}
          >
            <span className="universe-partner-bridge__mark">25%</span>
            <span>
              <small>THE CENTER BRIDGE</small>
              <strong>Sales Partner Program</strong>
              <em>25% setup + 25% monthly for life</em>
            </span>
            <b>ENTER →</b>
          </button>
          <span className="universe-partner-bridge__line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
