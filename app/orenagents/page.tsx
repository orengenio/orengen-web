import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import HeroMedia from "@/components/site/HeroMedia";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import GradientCardShowcase, {
  type GradientCardItem,
} from "@/components/ui/gradient-card-showcase";
import { JsonLd, serviceJsonLd } from "@/lib/seo";

/**
 * OrenAgents hub page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * main-core-pages/official-orenagents.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "OrenAgents — The Premiere Autonomous AI Workforce",
  description:
    "OrenAgents is the world's premiere autonomous AI workforce ecosystem. Featuring Buy-Lingual™ Voice Agents and AI Digital Employees orchestrated to answer, qualify, and close.",
  keywords:
    "orenagents, autonomous workforce, ai voice agents, ai employees, orengen",
  alternates: { canonical: "/orenagents" },
  openGraph: {
    title: "OrenAgents — The Premiere Autonomous AI Workforce",
    description:
      "One Ecosystem. Two Pillars. Total Coverage. Meet your new AI Workforce.",
    url: "https://orengen.io/orenagents",
  },
};

const ACCENT = { color: "var(--og-orange)" } as const;

const AGENT_CARDS = [
  {
    eyebrow: "The Voice",
    title: "Buy-Lingual™ AI Voice",
    description:
      "Autonomous inbound and outbound voice agents that answer every call, qualify leads, and book appointments in 100+ world languages with zero lag.",
    price: "Starting at $197/month",
    href: "/orenagents/voice",
    cta: "Explore Voice Agents",
    gradientFrom: "#ff8a3d",
    gradientTo: "#7a2f00",
    badge: "Trademarked",
  },
  {
    eyebrow: "The Brain",
    title: "Autonomous Digital Employees",
    description:
      "AI workers for chat, SMS, and complex CRM workflows. They manage your inbox, follow up with leads, and execute tasks across your entire stack.",
    price: "Starting at $197/month",
    href: "/orenagents/employees",
    cta: "Explore Digital Employees",
    gradientFrom: "#1683c5",
    gradientTo: "#00254b",
  },
  {
    eyebrow: "Unified Workforce",
    title: 'The “Better Together” Package',
    description:
      "Unify Voice Agents and Digital Employees into one orchestrated workforce. The ultimate 360° deployment for high-growth enterprises.",
    price: "Starting at $297/month · Best value",
    href: "/orenagents/better-together-package",
    cta: "View Bundle Pricing",
    gradientFrom: "#aebdca",
    gradientTo: "#cc5500",
    badge: "Recommended",
  },
] satisfies GradientCardItem[];

export default function OrenAgentsPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "OrenAgents Autonomous AI Workforce",
          description:
            "Buy-Lingual™ AI Voice and AI Digital Employees that answer, qualify, book, and execute workflows in 100+ languages.",
          path: "/orenagents",
          serviceType: "AI Agent Software",
        })}
      />
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          {/* HERO */}
          <section
            className="section section-brand-blue has-media"
            id="overview"
            aria-label="OrenAgents — The Premiere Autonomous AI Workforce"
          >
            <HeroMedia src="/images/orenagents-hero.webp" />
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">
                  The Premiere Autonomous labor Platform
                </div>
                <h1>
                  One Ecosystem.{" "}
                  <span className="gradient-word shimmer">Two Pillars.</span>{" "}
                  Total Coverage.
                </h1>
                <p className="lead">
                  OrenAgents is the world&apos;s first orchestrated AI
                  workforce. Whether you need the power of{" "}
                  <strong>Buy-Lingual™ Voice</strong> or the intelligence of{" "}
                  <strong>Autonomous Digital Employees</strong>, our ecosystem
                  provides the labor force for the next generation of business.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#ecosystem">
                    Explore the Workforce
                  </a>
                </div>
              </header>
            </div>
          </section>

          {/* THE PILLARS */}
          <section
            className="section section-brand-blue og-gradient-card-section"
            id="ecosystem"
            aria-label="The Workforce Directory"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Workforce Directory</div>
                <h2>
                  Choose Your Path to{" "}
                  <span style={ACCENT}>Autonomous Scale.</span>
                </h2>
              </header>
              <div className="reveal">
                <GradientCardShowcase
                  cards={AGENT_CARDS}
                  ariaLabel="OrenAgents workforce options"
                />
              </div>
            </div>
          </section>

          {/* AUTHORITY CHIPS */}
          <section
            className="section section-brand-white"
            aria-label="Built For Enterprise Excellence"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Built For Enterprise Excellence</div>
              </header>
              <div
                className="trust-row reveal"
                style={{ justifyContent: "center" }}
              >
                <span className="chip">SAM.gov Active</span>
                <span className="chip">MBE Certified</span>
                <span className="chip">7 Anthropic Certs</span>
                <span className="chip">NIST-Aligned</span>
                <span className="chip">HIPAA-Enabled</span>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section alt section-brand-blue"
            aria-label="The Future of Labor"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">The Future of Labor</div>
                <h2>
                  Provision Your Workforce <span style={ACCENT}>In Minutes.</span>
                </h2>
                <p>
                  Our automated onboarding system can have your first AI agent
                  provisioned and learning your brand today. No long-term
                  contracts on monthly plans. Setup fees are shown upfront.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#ecosystem">
                    Get Started Now
                  </a>
                </div>
              </header>
            </div>
          </section>
        </main>
        <SiteFooter />
        <SiteRuntime />
      </div>
    </>
  );
}
