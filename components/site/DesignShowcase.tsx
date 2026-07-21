"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";

/**
 * "Website Design Directions" — an animated gallery of browser-framed mini-site
 * mockups, each in a deliberately distinct visual language (palette, type,
 * radius, layout) so prospects can see the range OrenWeb designs in. These are
 * illustrative design directions rendered in CSS with realistic sample content
 * (a metric callout, feature copy, product cards) — not real client sites.
 */

type Layout = "split" | "center" | "commerce";
type Feat = { t: string; d: string };
type Product = { n: string; p: string };

type Style = {
  id: string;
  name: string;
  tag: string;
  layout: Layout;
  bg: string;
  surface: string;
  text: string;
  muted: string;
  line: string;
  accent: string;
  accent2: string;
  font: string;
  headWeight: number;
  radius: number;
  brand: string;
  nav: string[];
  cta: string;
  eyebrow: string;
  headline: string;
  sub: string;
  statK: string;
  statV: string;
  feats: Feat[];
  products?: Product[];
};

const SANS = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const FRIENDLY = "'Trebuchet MS', 'Segoe UI', sans-serif";

const STYLES: Style[] = [
  {
    id: "saas", name: "Modern SaaS", tag: "Tech · Startup", layout: "split",
    bg: "#0a0f1e", surface: "#141b2e", text: "#eef2f8", muted: "#8b96ac", line: "rgba(255,255,255,.09)",
    accent: "#5b8cff", accent2: "#9b5bff", font: SANS, headWeight: 800, radius: 14,
    brand: "Nimbus", nav: ["Product", "Pricing", "Docs"], cta: "Start free",
    eyebrow: "AI PLATFORM", headline: "Ship faster with autonomous AI.",
    sub: "The workspace that builds, tests, and deploys for you.",
    statK: "Deploys / day", statV: "1,204",
    feats: [
      { t: "Instant deploy", d: "Live in seconds" },
      { t: "SOC 2", d: "Secure by default" },
      { t: "Autoscale", d: "Zero config" },
    ],
  },
  {
    id: "corp", name: "Clean Corporate", tag: "Finance · Consulting", layout: "split",
    bg: "#ffffff", surface: "#f3f6fb", text: "#0f2233", muted: "#5b6b7b", line: "rgba(15,34,51,.12)",
    accent: "#1d4ed8", accent2: "#1d4ed8", font: SERIF, headWeight: 700, radius: 6,
    brand: "Meridian", nav: ["Firm", "Services", "Insights"], cta: "Contact",
    eyebrow: "ESTABLISHED 1998", headline: "Strategy for industry leaders.",
    sub: "Advisory relationships that compound over decades.",
    statK: "Assets advised", statV: "$4.2B",
    feats: [
      { t: "Proven", d: "40-year record" },
      { t: "Global", d: "18 offices" },
      { t: "Bespoke", d: "Tailored plans" },
    ],
  },
  {
    id: "shop", name: "Bold Commerce", tag: "Retail · DTC", layout: "commerce",
    bg: "#fdf6ee", surface: "#ffffff", text: "#241a12", muted: "#7a6a58", line: "rgba(36,26,18,.12)",
    accent: "#e2542c", accent2: "#f59e0b", font: SANS, headWeight: 800, radius: 12,
    brand: "Marca", nav: ["Shop", "New", "Sale"], cta: "Cart · 2",
    eyebrow: "NEW DROP", headline: "The summer collection is here.",
    sub: "Free shipping over $75.",
    statK: "", statV: "",
    feats: [],
    products: [
      { n: "Linen Tee", p: "$48" },
      { n: "Canvas Tote", p: "$62" },
      { n: "Wool Cap", p: "$54" },
    ],
  },
  {
    id: "local", name: "Local Trust", tag: "Home · Services", layout: "split",
    bg: "#eef6ff", surface: "#ffffff", text: "#10263b", muted: "#5a7189", line: "rgba(16,38,59,.12)",
    accent: "#0f9d58", accent2: "#0b7bd1", font: FRIENDLY, headWeight: 750, radius: 16,
    brand: "HomePro", nav: ["Services", "About", "Reviews"], cta: "Get quote",
    eyebrow: "★ 4.9 · 800+ REVIEWS", headline: "Your trusted local experts.",
    sub: "Same-day service with upfront, honest pricing.",
    statK: "Jobs completed", statV: "12,000+",
    feats: [
      { t: "Licensed", d: "& fully insured" },
      { t: "Same-day", d: "Fast response" },
      { t: "Upfront", d: "Honest pricing" },
    ],
  },
  {
    id: "lux", name: "Luxury Editorial", tag: "Fashion · Hospitality", layout: "center",
    bg: "#0c0b0a", surface: "#161311", text: "#f1ead9", muted: "#9a8f7c", line: "rgba(241,234,217,.14)",
    accent: "#c9a86a", accent2: "#c9a86a", font: SERIF, headWeight: 500, radius: 2,
    brand: "ATELIER", nav: ["Collections", "Story", "Journal"], cta: "Enquire",
    eyebrow: "MAISON", headline: "Timeless craftsmanship.",
    sub: "Handmade in limited numbers.",
    statK: "Atelier since", statV: "1921",
    feats: [
      { t: "Bespoke", d: "Made to order" },
      { t: "Rare", d: "Limited runs" },
      { t: "Iconic", d: "Timeless design" },
    ],
  },
  {
    id: "studio", name: "Creative Studio", tag: "Agency · Portfolio", layout: "center",
    bg: "#faf7ff", surface: "#ffffff", text: "#1c1330", muted: "#6b5e86", line: "rgba(28,19,48,.12)",
    accent: "#7c3aed", accent2: "#ec4899", font: SANS, headWeight: 850, radius: 22,
    brand: "Studio", nav: ["Work", "Play", "Hello"], cta: "Let's talk",
    eyebrow: "CREATIVE STUDIO", headline: "Design that moves people.",
    sub: "Brands, websites, and motion.",
    statK: "Awards won", statV: "37",
    feats: [
      { t: "Brand", d: "Identity systems" },
      { t: "Web", d: "Sites that move" },
      { t: "Motion", d: "Film & 3D" },
    ],
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function Nav({ s }: { s: Style }) {
  return (
    <div className="dz-nav">
      <span className="dz-brand">{s.brand}</span>
      <span className="dz-links">
        {s.nav.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </span>
      <span className="dz-cta">{s.cta}</span>
    </div>
  );
}

function Visual({ s, wide }: { s: Style; wide?: boolean }) {
  return (
    <div className={`dz-visual${wide ? " dz-visual-wide" : ""}`} aria-hidden="true">
      <span className="dz-vchip">Live</span>
      <div className="dz-metric">
        <span className="dz-metric-k">{s.statK}</span>
        <span className="dz-metric-v">{s.statV}</span>
      </div>
    </div>
  );
}

function Features({ s }: { s: Style }) {
  return (
    <div className="dz-features">
      {s.feats.map((f) => (
        <div className="dz-feat" key={f.t}>
          <span className="dz-feat-dot" />
          <span className="dz-feat-t">{f.t}</span>
          <span className="dz-feat-d">{f.d}</span>
        </div>
      ))}
    </div>
  );
}

function Mock({ s }: { s: Style }) {
  const vars = {
    "--bg": s.bg,
    "--surface": s.surface,
    "--text": s.text,
    "--muted": s.muted,
    "--line": s.line,
    "--accent": s.accent,
    "--accent2": s.accent2,
    "--font": s.font,
    "--hw": String(s.headWeight),
    "--rad": `${s.radius}px`,
  } as CSSProperties;

  return (
    <div className="dz-mock" style={vars} data-layout={s.layout}>
      <div className="dz-chrome" aria-hidden="true">
        <span className="dz-dot" />
        <span className="dz-dot" />
        <span className="dz-dot" />
        <span className="dz-addr">{s.brand.toLowerCase()}.com</span>
      </div>
      <div className="dz-page">
        <Nav s={s} />

        {s.layout === "split" && (
          <>
            <div className="dz-hero">
              <div className="dz-hero-copy">
                <span className="dz-eyebrow">{s.eyebrow}</span>
                <div className="dz-head">{s.headline}</div>
                <div className="dz-sub">{s.sub}</div>
                <span className="dz-btn">{s.cta}</span>
              </div>
              <Visual s={s} />
            </div>
            <Features s={s} />
          </>
        )}

        {s.layout === "center" && (
          <>
            <div className="dz-hero dz-hero-center">
              <span className="dz-eyebrow">{s.eyebrow}</span>
              <div className="dz-head">{s.headline}</div>
              <div className="dz-sub">{s.sub}</div>
              <span className="dz-btn">{s.cta}</span>
            </div>
            <Visual s={s} wide />
            <Features s={s} />
          </>
        )}

        {s.layout === "commerce" && (
          <>
            <div className="dz-banner">
              <div>
                <span className="dz-eyebrow">{s.eyebrow}</span>
                <div className="dz-head">{s.headline}</div>
              </div>
              <span className="dz-btn">Shop now</span>
            </div>
            <div className="dz-products">
              {s.products?.map((prod) => (
                <div className="dz-product" key={prod.n}>
                  <div className="dz-product-img">
                    <span className="dz-tag-heart">♡</span>
                  </div>
                  <span className="dz-product-name">{prod.n}</span>
                  <span className="dz-product-row">
                    <span className="dz-price">{prod.p}</span>
                    <span className="dz-stars">★★★★★</span>
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function DesignShowcase() {
  const reduce = useReducedMotion();

  return (
    <section className="section section-brand-blue" id="designs" aria-label="Website design directions">
      <div className="container">
        <header className="section-head center reveal">
          <div className="eyebrow">See The Range</div>
          <h2>
            Website designs built to{" "}
            <span style={{ color: "var(--og-orange)", whiteSpace: "nowrap" }}>
              fit your brand.
            </span>
          </h2>
          <p className="lead">
            Every OrenWeb build is custom. Here are a few directions we design
            in — from bold SaaS to editorial luxury. Pick a vibe; we tailor it
            to you.
          </p>
        </header>

        <div className="dz-grid">
          {STYLES.map((s, i) => (
            <motion.figure
              key={s.id}
              className="dz-card"
              initial={reduce ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: (i % 2) * 0.08 }}
              whileHover={reduce ? undefined : { y: -8 }}
            >
              <Mock s={s} />
              <figcaption className="dz-cap">
                <span className="dz-cap-name">{s.name}</span>
                <span className="dz-cap-tag">{s.tag}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="cta-row" style={{ justifyContent: "center" }}>
          <a className="btn btn-primary" href="/orenweb/design">
            Start your custom design
          </a>
        </div>
      </div>
    </section>
  );
}
