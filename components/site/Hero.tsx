"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import HeroGlow from "./HeroGlow";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TRUST = [
  "SAM.gov Active",
  "CAGE 12XC1",
  "MBE / SDB Positioned",
  "NIST 800-53 Trained",
  "HIPAA Trained",
];

const MISSIONS = [
  { n: "01", t: "Claude-first, multi-system architecture", s: "MCP, Subagents, Agent Skills, API, Claude Code." },
  { n: "02", t: "Compliance-forward delivery", s: "NIST, HIPAA, GovCon, privacy, security controls." },
  { n: "03", t: "Enterprise operating model", s: "Strategy, implementation, handoff, and governance." },
  { n: "04", t: "Procurement credibility", s: "SAM.gov, CAGE, MBE, SDB, public-sector routing." },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const y = reduce ? 0 : 24;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section className="hero section-brand-blue" id="overview" aria-label="OrenGen Worldwide homepage hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/images/hero-infrastructure.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
      </div>
      <HeroGlow />
      <div className="container hero-grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div className="eyebrow" variants={item}>
            Claude-First · Multi-System Fluent · NIST-Aligned
          </motion.div>
          <motion.h1 variants={item}>
            Enterprise AI Infrastructure for organizations that refuse to{" "}
            <span className="gradient-word shimmer">rent their intelligence.</span>
          </motion.h1>
          <motion.p className="lead" variants={item}>
            OrenGen Worldwide architects hosted and self-hosted AI-enabled ecosystems with a
            Claude-first strategy, while remaining deployment-ready across other leading models and
            systems. We build governed workflow orchestration and sovereign AI operating layers for
            public sector, healthcare, and enterprise teams that need control, compliance, and
            execution velocity.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <a className="btn btn-primary" href="#contact">
              Architect the Briefing{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a className="btn btn-secondary" href="#architecture">
              Examine the Stack
            </a>
          </motion.div>
          <motion.div className="trust-row" variants={item} aria-label="Trust signals">
            {TRUST.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="command-card"
          aria-label="Executive command card"
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
        >
          <div className="command-inner">
            <div className="command-top">
              <div>
                <div className="mini-label">Enterprise AI Operating Layer</div>
                <h3 style={{ marginTop: 8 }}>Governed AI. Owned infrastructure. Operational lift.</h3>
              </div>
              <div className="status-live">Active</div>
            </div>
            <div className="mission-box">
              {MISSIONS.map((m) => (
                <div className="mission-item" key={m.n}>
                  <div className="mission-num">{m.n}</div>
                  <div>
                    <strong>{m.t}</strong>
                    <span>{m.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
