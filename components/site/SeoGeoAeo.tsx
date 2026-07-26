"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * SEO · GEO · AEO tri-pillar section for the Instant Site Audit page.
 * Dark, color-coded pillar cards (SEO blue / GEO green / AEO purple) on the
 * navy brand background, with a staggered scroll-reveal. Content mirrors the
 * client's "Be Found. Be Trusted. Be Chosen." concept.
 */

type Pillar = {
  key: string;
  abbr: string;
  name: string;
  accent: string;
  glow: string;
  points: string[];
  tagline: string;
  icon: ReactNode;
};

const svg = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const PILLARS: Pillar[] = [
  {
    key: "seo",
    abbr: "SEO",
    name: "Search Engine Optimization",
    accent: "#4f8cff",
    glow: "79, 140, 255",
    points: ["Rank higher on Google", "Drive qualified traffic", "Build authority & trust", "Technical SEO excellence"],
    tagline: "More visibility. More clicks. More growth.",
    icon: svg(<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>),
  },
  {
    key: "geo",
    abbr: "GEO",
    name: "Generative Engine Optimization",
    accent: "#2fbf7a",
    glow: "47, 191, 122",
    points: ["Optimized for AI-powered search", "Appear in AI-generated answers", "Dominate emerging platforms", "Future-proof your brand"],
    tagline: "Be discovered where search is evolving.",
    icon: svg(<><path d="M12 3v3M12 18v3M4.2 7.2l2.1 2.1M17.7 14.7l2.1 2.1M3 12h3M18 12h3M4.2 16.8l2.1-2.1M17.7 9.3l2.1-2.1" /><circle cx="12" cy="12" r="3.2" /></>),
  },
  {
    key: "aeo",
    abbr: "AEO",
    name: "Answer Engine Optimization",
    accent: "#a06bff",
    glow: "160, 107, 255",
    points: ["Rank in answer boxes", "Win voice search results", "Be the recommended answer", "Increase credibility & trust"],
    tagline: "Be the answer. Be the choice.",
    icon: svg(<><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9 9 0 0 1-4-1L3 20l1-4a8.4 8.4 0 0 1-1-4.5A8.5 8.5 0 0 1 21 11.5Z" /><path d="M9 11h6M9 8h4" /></>),
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SeoGeoAeo() {
  const reduce = useReducedMotion();
  return (
    <section className="section section-brand-blue" id="pillars" aria-label="SEO, GEO, and AEO">
      <div className="container">
        <header className="section-head center reveal">
          <div className="eyebrow">Complete Visibility · Maximum Impact</div>
          <h2>
            One search box became{" "}
            <span style={{ color: "var(--og-orange)" }}>three front pages.</span>
          </h2>
          <p className="lead">
            Ranking on Google is table stakes. Today your customers also ask AI
            assistants and answer engines — and they only ever hear one name.
            We make it yours across all three.
          </p>
        </header>

        <div className="sga-grid">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.key}
              className="sga-card"
              style={{ ["--sga" as string]: p.accent, ["--sga-glow" as string]: p.glow }}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.12 }}
            >
              <div className="sga-top">
                <span className="sga-ic">{p.icon}</span>
                <span className="sga-abbr">{p.abbr}</span>
              </div>
              <div className="sga-name">{p.name}</div>
              <ul className="sga-points">
                {p.points.map((pt) => (
                  <li key={pt}>
                    <span className="sga-check" aria-hidden="true">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="sga-tagline">{p.tagline}</div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="sga-cta"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        >
          <p className="sga-kicker">
            Win one and you leak leads to the other two. Win all three and you
            become the name every engine repeats.
          </p>
          <a className="btn btn-primary" href="#audit">
            Audit all three free →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
