# OrenGen Homepage — "Quiet Premium" Polish + Targeted Media Layer

**Date:** 2026-05-31
**Status:** Design — pending user review → writing-plans
**Applies to:** the existing OrenGen homepage (`orengen-web/`, Next.js 15 + `motion/react`)

## Goal
Take the homepage from "elegant but bland" to award-winning **restrained premium** —
authority-through-restraint (Anthropic / Stripe register) for an enterprise-AI / GovCon
buyer — **without changing the brand.** Two layers: (A) motion polish, (B) a targeted
AI-generated media layer.

## Locked constraints
- **Brand is fixed.** Public Sans; navy (`--og-navy #00254B`) + gradient; **ember
  (`#CC5500`) stays a RARE accent** — CTAs, the gradient word, the fire, scroll progress,
  icon borders, and nothing else. No new fonts or colors.
- **Native build only.** `motion/react` + existing CSS tokens. No Tailwind, no new runtime
  deps. 21st/shadcn is **out** for this pass — its components skew bolder than the chosen
  aesthetic and would fight the restraint.
- **Motion discipline.** 150–400 ms, ease-out / spring, **no scroll-jacking or parallax**
  (the ui-ux-pro-max engine rates it Poor on perf + a11y). **Every effect is gated behind
  `prefers-reduced-motion: reduce`.** Restraint test for each effect: *felt, not noticed.*

## Layer A — Quiet Premium motion polish
Each effect is an isolated unit (its own component / hook / token block), verified in the
live preview **and** its reduced-motion path before moving on.

**Phase 1 — depth & entrance**
1. `HeroGlow` (client) — one soft ember-tinted radial behind the hero; very low opacity;
   slow drift (~14–18 s) via `transform` only; **static** under reduced-motion. Navy stays
   dominant — this only adds atmospheric depth.
2. **Refined hero entrance** — tighten the existing stagger to a crisper spring; a
   **one-time** ember shimmer sweeps the gradient word "rent their intelligence" on load
   (no loop, no typing effect).
3. **Elevation scale** — add `--elevation-1..4` tokens; the command card becomes subtle
   frosted glass (`backdrop-filter`) floating over the glow; all cards share one consistent
   hover-elevation.

**Phase 2 — quiet motion & conversion**
4. `useCountUp` + KPI integration — `20+ / 4.9 / 99.9% / $13M+` count up once on
   `useInView` (~1 s ease-out); the **final value renders immediately** under reduced-motion
   (no count animation).
5. `ScrollProgress` (client) — a 2 px ember progress bar fixed at the top; the "Book a call"
   CTA stays reachable (already sticky in the nav).
6. **Spring micro-interactions** — subtle scale/press springs on buttons & cards
   (1.0 → 1.02). No magnetic-cursor effect (too playful for restrained).

**Deferred:** bento recast of capabilities — the current cap-list + 6-node band already read
well; bento is a large restructure for marginal gain.

## Discipline fix (independent of scope, do first)
- A global `@media (prefers-reduced-motion: reduce)` guard neutralizing CSS animations /
  transitions.
- **Gate the footer fire's WAAPI particle engine** behind
  `window.matchMedia('(prefers-reduced-motion: reduce)')` in `SiteRuntime`: reduced-motion
  users get the **lit** "ONLINE EVERYWHERE | ORENGENIO" tagline (chars `.lit` + box
  `.ignited` applied instantly) **without** the spark loop/intervals. This is the engine's
  #1 flagged accessibility issue.

## Layer B — Targeted media (~6–8 assets)
**Anti-cliché rule (every asset):** navy + ember, abstract-architectural. **No** robots,
circuits, glowing brains, or AI purple/pink gradients (the engine's named enterprise
anti-pattern).

| Asset | Type | Tool | Placement |
|---|---|---|---|
| Hero backdrop | ambient video loop (muted, ~8–12 s) **+** still poster | Higgsfield (video) / Nano Banana (poster) | behind hero, beneath `HeroGlow` |
| Command-card mockup | still — clean governed-AI dashboard UI | Nano Banana | inside the command card |
| Section accents ×2–3 | still — subtle abstract navy texture (very low opacity) | Nano Banana | cost-of-inertia / architecture / capabilities backgrounds |
| Blog headers | stills ×N | Nano Banana | blog cards/posts (when blog is built) |
| Founder | **real photo** (not AI) | owner | founder strip (already wired) |

**Workflow:** Claude writes per-asset, brand-tuned generation prompts (palette hexes, style
references, exact dimensions, anti-cliché guardrails) → owner generates in Nano Banana /
Higgsfield → Claude integrates + optimizes: `next/image` (WebP/AVIF, explicit width/height
= **zero CLS**, `loading="lazy"` below the fold); video is muted / looped / `playsInline`
with a `poster`, and **under reduced-motion shows the poster instead of autoplaying.**
Assets live in `public/media/` (or the content360 CDN).

**Out of scope here:** the asset generation itself (external tools); re-hosting existing
content360 assets.

## Build sequence (for the implementation plan)
1. Reduced-motion foundation (global guard + fire gate + a `useReducedMotion` helper) —
   **first**, everything depends on it.
2. Elevation tokens + glass command card.
3. `HeroGlow` + refined entrance + gradient shimmer.
4. `useCountUp` KPIs.
5. `ScrollProgress` + spring micro-interactions.
6. Media infrastructure (`next/image` config + a reduced-motion-aware video component +
   `public/media/`), placeholders first, real assets as generated.
7. Per-asset generation prompts (a deliverable handed to the owner).

## Verification
- Each unit verified in the live preview (localhost:3000) **and** its reduced-motion path
  (emulate `prefers-reduced-motion`).
- `next build` green before and after.
- Lighthouse (perf / a11y / CLS) once deployed.

## Out of scope (explicit)
Bento; Tailwind / 21st; analytics / SEO schema / robots / sitemap (separate audit track);
other pages; the AI asset generation.
