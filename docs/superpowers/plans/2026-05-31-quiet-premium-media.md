# Quiet Premium + Targeted Media — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a restrained-premium motion polish layer + a reduced-motion-safe media layer to the existing OrenGen homepage, without changing the brand.

**Architecture:** Native `motion/react` + the existing custom CSS token system (`app/globals.css`). Each effect is a small, isolated unit (component/hook/token block). All motion is gated behind `prefers-reduced-motion`. No Tailwind, no 21st, no new runtime deps beyond `motion` (already installed).

**Tech Stack:** Next.js 15 (App Router), React 19, `motion/react`, custom CSS variables. Spec: `docs/superpowers/specs/2026-05-31-quiet-premium-media-design.md`.

**Verification model (read first):** This is a visual/motion frontend with **no unit-test runner** (adding one is out of scope / YAGNI). Every task is verified by: **(a)** `npm run build` is green (typecheck + compile), **(b)** the effect renders correctly in the live preview (`npm run dev --prefix orengen-web` → localhost:3000, or the preview MCP `orengen-web` server), and **(c)** emulating `prefers-reduced-motion: reduce` confirms the fallback. Run commands from the repo root unless noted; `--prefix orengen-web` targets the app.

---

## File Structure

**Create:**
- `orengen-web/lib/motion.ts` — shared easing/spring constants + `prefersReducedMotion()` for vanilla contexts.
- `orengen-web/components/site/HeroGlow.tsx` — ambient ember glow with subtle pointer-parallax (reduced-motion → static).
- `orengen-web/components/site/KpiNumber.tsx` — count-up number (reduced-motion → final value).
- `orengen-web/components/site/ScrollProgress.tsx` — 2px ember scroll-progress bar.
- `orengen-web/components/site/MediaVideo.tsx` — reduced-motion-aware `<video>` (falls back to poster `<img>`).
- `orengen-web/public/media/.gitkeep` — media asset dir.
- `orengen-web/docs/media-generation-prompts.md` — Nano Banana / Higgsfield prompt deliverable.

**Modify:**
- `orengen-web/app/globals.css` — reduced-motion guard, `--elevation-1..4`, glass command card, `.hero-glow`, gradient-word shimmer, `.scroll-progress`, button springs.
- `orengen-web/components/site/SiteRuntime.tsx` — gate the fuse-fire particle engine behind reduced-motion.
- `orengen-web/components/site/Hero.tsx` — mount `HeroGlow`, refine entrance spring, shimmer the gradient word.
- `orengen-web/components/site/Sections.tsx` — wire `KpiNumber` into the KPI grid.
- `orengen-web/app/page.tsx` — mount `ScrollProgress`.

---

## Task 0: Initialize git (enables the commit discipline below)

**Files:** none (repo setup). `.gitignore` already exists in `orengen-web/`.

- [ ] **Step 1: Init the repo at the app root**

```bash
git -C orengen-web init
git -C orengen-web add -A
git -C orengen-web commit -m "chore: snapshot homepage before quiet-premium pass"
```

- [ ] **Step 2: Confirm clean tree**

Run: `git -C orengen-web status`
Expected: `nothing to commit, working tree clean`

---

## Task 1: Reduced-motion foundation (DO FIRST — everything depends on it)

**Files:**
- Create: `orengen-web/lib/motion.ts`
- Modify: `orengen-web/app/globals.css` (append a global guard)
- Modify: `orengen-web/components/site/SiteRuntime.tsx` (gate the fuse fire)

- [ ] **Step 1: Create the motion helper**

`orengen-web/lib/motion.ts`:
```ts
// Shared motion constants + a reduced-motion check for non-React/vanilla contexts.
// React components should prefer motion/react's useReducedMotion() hook.
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const SPRING_SOFT = { type: "spring", stiffness: 200, damping: 30 } as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
```

- [ ] **Step 2: Append the global reduced-motion CSS guard**

Append to the END of `orengen-web/app/globals.css`:
```css
/* ===== Accessibility: respect prefers-reduced-motion across all ported animations ===== */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 3: Gate the fuse-fire particle engine in SiteRuntime**

In `orengen-web/components/site/SiteRuntime.tsx`, inside the fuse-ignition IIFE (the block starting `const taglineEl = document.getElementById("fuseTagline")`), add a reduced-motion branch at the top, right after the `if (!taglineEl || !taglineBox || !fuseContainer) return;` guard:
```tsx
      // Reduced-motion: light the tagline instantly, skip the spark engine entirely.
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        chars.forEach((c) => c.classList.add("lit"));
        taglineBox.classList.add("ignited");
        const burn = document.getElementById("fuseBurn");
        if (burn) burn.style.display = "none";
        return;
      }
```
(`chars` is already defined on the line above as `taglineEl.querySelectorAll<HTMLElement>(".tl-char")`.)

- [ ] **Step 4: Build**

Run: `npm run build --prefix orengen-web`
Expected: `✓ Compiled successfully`, types valid.

- [ ] **Step 5: Verify reduced-motion in preview**

Start dev (preview MCP `preview_start` "orengen-web" or `npm run dev --prefix orengen-web`). In the preview, emulate reduced-motion (`preview_resize` with `colorScheme` is for color; use `preview_eval`: `matchMedia('(prefers-reduced-motion: reduce)').matches` won't flip at runtime — instead verify the code path by temporarily forcing it). Confirm via DOM eval that the footer tagline still ends `ignited:true` with all chars `.lit`, and no `.og-spark` nodes accumulate:
```js
({ ignited: document.querySelector('#taglineBox').classList.contains('ignited'),
   sparks: document.querySelectorAll('.og-spark').length })
```
Expected (normal motion): `ignited:true` after ~5s. (Reduced-motion path validated by code review — the branch returns before any interval is created.)

- [ ] **Step 6: Commit**

```bash
git -C orengen-web add lib/motion.ts app/globals.css components/site/SiteRuntime.tsx
git -C orengen-web commit -m "feat(a11y): global reduced-motion guard + gate footer fire engine"
```

---

## Task 2: Elevation scale + glass command card

**Files:**
- Modify: `orengen-web/app/globals.css` (add tokens in `:root`; append command-card glass rule)

- [ ] **Step 1: Add elevation tokens**

In `orengen-web/app/globals.css`, inside the `:root { … }` block (next to the other `--og-*` tokens), add:
```css
  --elevation-1: 0 1px 2px rgba(0, 37, 75, .18);
  --elevation-2: 0 6px 16px rgba(0, 37, 75, .22);
  --elevation-3: 0 16px 34px rgba(0, 37, 75, .28);
  --elevation-4: 0 28px 64px rgba(0, 37, 75, .34);
```

- [ ] **Step 2: Make the command card frosted glass (append; later rule wins)**

Append to the END of `orengen-web/app/globals.css`:
```css
/* ===== Glass command card (Dimensional Layering, restrained) ===== */
.command-card {
  backdrop-filter: blur(14px) saturate(1.08);
  -webkit-backdrop-filter: blur(14px) saturate(1.08);
  box-shadow: var(--elevation-4);
  border: 1px solid rgba(255, 255, 255, .12);
}
```

- [ ] **Step 3: Build**

Run: `npm run build --prefix orengen-web`
Expected: `✓ Compiled successfully`.

- [ ] **Step 4: Verify in preview**

Reload preview, screenshot the hero. Expected: command card reads as a frosted glass panel with soft depth (not a flat surface). Confirm contrast of its text is unchanged.

- [ ] **Step 5: Commit**

```bash
git -C orengen-web add app/globals.css
git -C orengen-web commit -m "feat(ui): elevation token scale + glass command card"
```

---

## Task 3: HeroGlow + refined entrance + gradient-word shimmer

**Files:**
- Create: `orengen-web/components/site/HeroGlow.tsx`
- Modify: `orengen-web/app/globals.css` (`.hero-glow`, hero stacking, shimmer keyframe)
- Modify: `orengen-web/components/site/Hero.tsx` (mount HeroGlow; shimmer class)

- [ ] **Step 1: Create HeroGlow (pointer-parallax, reduced-motion → static)**

`orengen-web/components/site/HeroGlow.tsx`:
```tsx
"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export default function HeroGlow() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 40, damping: 20 });
  const sy = useSpring(y, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set(((e.clientX - cx) / cx) * 14);
      y.set(((e.clientY - cy) / cy) * 10);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  return <motion.div className="hero-glow" aria-hidden style={reduce ? undefined : { x: sx, y: sy }} />;
}
```

- [ ] **Step 2: Add hero-glow + shimmer CSS**

Append to the END of `orengen-web/app/globals.css`:
```css
/* ===== Atmospheric hero glow (Aurora, dialed down) ===== */
.hero { position: relative; isolation: isolate; }
.hero .container { position: relative; z-index: 1; }
.hero-glow {
  position: absolute;
  inset: -25% -12% auto -12%;
  height: 90%;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(55% 50% at 72% 18%, rgba(204, 85, 0, .13), transparent 70%),
    radial-gradient(50% 50% at 18% 8%, rgba(0, 95, 170, .20), transparent 72%);
  filter: blur(46px);
  opacity: .9;
}
/* One-time ember shimmer sweep on the gradient word */
.gradient-word { background-size: 220% auto; }
@keyframes ogShimmerSweep { from { background-position: 220% center; } to { background-position: 0% center; } }
.gradient-word.shimmer { animation: ogShimmerSweep 1.1s var(--og-ease) .35s 1 both; }
```

- [ ] **Step 3: Mount HeroGlow + add the shimmer class in Hero.tsx**

In `orengen-web/components/site/Hero.tsx`:
1. Add the import at the top: `import HeroGlow from "./HeroGlow";`
2. Immediately inside the `<section className="hero …">` opening tag (before `<div className="container hero-grid">`), add: `<HeroGlow />`
3. On the gradient word, add the `shimmer` class: change `<span className="gradient-word">rent their intelligence.</span>` to `<span className="gradient-word shimmer">rent their intelligence.</span>`

- [ ] **Step 4: Build**

Run: `npm run build --prefix orengen-web`
Expected: `✓ Compiled successfully`.

- [ ] **Step 5: Verify in preview**

Reload, screenshot the hero. Expected: a soft ember/blue glow sits behind the hero (navy still dominant); moving the cursor drifts it a few px; the gradient word gets a single shimmer sweep on load. Confirm hero text remains crisply readable over the glow.

- [ ] **Step 6: Commit**

```bash
git -C orengen-web add components/site/HeroGlow.tsx components/site/Hero.tsx app/globals.css
git -C orengen-web commit -m "feat(hero): atmospheric glow + gradient-word shimmer"
```

---

## Task 4: KPI count-up

**Files:**
- Create: `orengen-web/components/site/KpiNumber.tsx`
- Modify: `orengen-web/components/site/Sections.tsx` (KPIS data + render)

- [ ] **Step 1: Create KpiNumber**

`orengen-web/components/site/KpiNumber.tsx`:
```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type Props = { to: number; decimals?: number; prefix?: string; suffix?: string };

export default function KpiNumber({ to, decimals = 0, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce || !inView) {
      setDisplay(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 2: Extend the KPIS data with numeric targets**

In `orengen-web/components/site/Sections.tsx`, replace the `KPIS` array with:
```tsx
const KPIS = [
  { to: 20, decimals: 0, prefix: "", numSuffix: "", sup: "+", label: "Enterprise Deployments", p: "AI, automation, infrastructure, web, workflow, and operating-system buildouts across commercial and regulated environments." },
  { to: 4.9, decimals: 1, prefix: "", numSuffix: "", sup: "/5", label: "Client Satisfaction Target", p: "Service delivery built around executive clarity, fast implementation, clean handoff, and operational usefulness." },
  { to: 99.9, decimals: 1, prefix: "", numSuffix: "", sup: "%", label: "Uptime SLA Path", p: "Architecture designed for production-grade reliability using monitored hosted and self-hosted deployment patterns." },
  { to: 13, decimals: 0, prefix: "$", numSuffix: "M", sup: "+", label: "Operational Savings", p: "Documented transformation and cost-reduction background from enterprise operations." },
];
```

- [ ] **Step 3: Render KpiNumber in the KPI grid**

In `Sections.tsx`, add the import at the top: `import KpiNumber from "./KpiNumber";`
Then replace the KPI map body. Change:
```tsx
            {KPIS.map((k) => (
              <div className="kpi" key={k.label}>
                <div className="num">{k.num}<span>{k.sup}</span></div>
```
to:
```tsx
            {KPIS.map((k) => (
              <div className="kpi" key={k.label}>
                <div className="num">
                  <KpiNumber to={k.to} decimals={k.decimals} prefix={k.prefix} suffix={k.numSuffix} />
                  <span>{k.sup}</span>
                </div>
```

- [ ] **Step 4: Build**

Run: `npm run build --prefix orengen-web`
Expected: `✓ Compiled successfully`. (If TS complains about unused `k.num`, it's gone — good.)

- [ ] **Step 5: Verify in preview**

Reload, scroll the proof-metrics section into view. Expected: each KPI counts up once (`$13M+`, `99.9%`, `4.9/5`, `20+`) over ~1s, then holds. Confirm formatting matches the originals exactly.

- [ ] **Step 6: Commit**

```bash
git -C orengen-web add components/site/KpiNumber.tsx components/site/Sections.tsx
git -C orengen-web commit -m "feat(metrics): KPI count-up on scroll-in (reduced-motion safe)"
```

---

## Task 5: ScrollProgress bar + button springs

**Files:**
- Create: `orengen-web/components/site/ScrollProgress.tsx`
- Modify: `orengen-web/app/page.tsx` (mount it)
- Modify: `orengen-web/app/globals.css` (`.scroll-progress` + button press springs)

- [ ] **Step 1: Create ScrollProgress**

`orengen-web/components/site/ScrollProgress.tsx`:
```tsx
"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden />;
}
```

- [ ] **Step 2: Mount it in page.tsx**

In `orengen-web/app/page.tsx`: add `import ScrollProgress from "@/components/site/ScrollProgress";` and render `<ScrollProgress />` as the first child inside the returned fragment (before the skip-link).

- [ ] **Step 3: Add CSS for the bar + button springs**

Append to the END of `orengen-web/app/globals.css`:
```css
/* ===== Ember scroll-progress bar ===== */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform-origin: 0 50%;
  background: linear-gradient(90deg, var(--og-orange), var(--og-orange-hot));
  z-index: 1000;
}
/* ===== Restrained spring press on buttons ===== */
.btn { transition: transform .18s var(--og-ease), box-shadow .18s var(--og-ease), background .18s var(--og-ease); will-change: transform; }
.btn:hover { transform: translateY(-1px) scale(1.015); }
.btn:active { transform: translateY(0) scale(.985); }
```

- [ ] **Step 4: Build**

Run: `npm run build --prefix orengen-web`
Expected: `✓ Compiled successfully`.

- [ ] **Step 5: Verify in preview**

Reload. Expected: a thin ember bar at the very top fills left→right as you scroll; buttons lift slightly on hover and press in on click. Under reduced-motion, the global guard flattens the button transitions; the progress bar (scroll-driven, not auto-animated) still tracks scroll.

- [ ] **Step 6: Commit**

```bash
git -C orengen-web add components/site/ScrollProgress.tsx app/page.tsx app/globals.css
git -C orengen-web commit -m "feat(ui): ember scroll-progress bar + button press springs"
```

---

## Task 6: Media infrastructure (component + dir + CSS backdrop placeholder)

**Files:**
- Create: `orengen-web/components/site/MediaVideo.tsx`
- Create: `orengen-web/public/media/.gitkeep`
- Modify: `orengen-web/app/globals.css` (a CSS placeholder backdrop class, swappable for the real asset)

- [ ] **Step 1: Create the reduced-motion-aware video component**

`orengen-web/components/site/MediaVideo.tsx`:
```tsx
"use client";

import { useReducedMotion } from "motion/react";

type Props = { src: string; poster: string; className?: string };

// Autoplays a muted/looped ambient video; under reduced-motion shows the poster still instead.
export default function MediaVideo({ src, poster, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" aria-hidden className={className} />;
  }
  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    />
  );
}
```

- [ ] **Step 2: Create the media dir**

```bash
mkdir -p orengen-web/public/media
```
Create `orengen-web/public/media/.gitkeep` with content: `# media assets (hero video/poster, section accents, blog headers) land here`

- [ ] **Step 3: Add a CSS placeholder backdrop (swappable for the real still/video later)**

Append to the END of `orengen-web/app/globals.css`:
```css
/* ===== Hero media backdrop placeholder (replace with real asset in public/media/) ===== */
.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: .5;
  -webkit-mask-image: linear-gradient(180deg, #000 55%, transparent);
  mask-image: linear-gradient(180deg, #000 55%, transparent);
  background:
    radial-gradient(120% 80% at 80% -10%, rgba(0, 95, 170, .22), transparent 60%),
    linear-gradient(180deg, rgba(0, 37, 75, 0), rgba(0, 37, 75, 0));
}
.hero-media video, .hero-media img { width: 100%; height: 100%; object-fit: cover; }
```

- [ ] **Step 4: Build**

Run: `npm run build --prefix orengen-web`
Expected: `✓ Compiled successfully`. (`MediaVideo` is created but not yet mounted — that happens when a real asset exists; it must still typecheck.)

- [ ] **Step 5: Commit**

```bash
git -C orengen-web add components/site/MediaVideo.tsx public/media/.gitkeep app/globals.css
git -C orengen-web commit -m "feat(media): reduced-motion-aware video component + media dir + backdrop placeholder"
```

> **Wiring the real asset (do when the asset exists, not in this plan):** drop the file in `public/media/`, then inside `<section className="hero …">` in `Hero.tsx`, add `<div className="hero-media"><MediaVideo src="/media/hero.mp4" poster="/media/hero-poster.webp" /></div>` (or a single `next/image` for a still backdrop) just before `<HeroGlow />`.

---

## Task 7: Generation prompts deliverable

**Files:**
- Create: `orengen-web/docs/media-generation-prompts.md`

- [ ] **Step 1: Write the prompt doc**

`orengen-web/docs/media-generation-prompts.md`:
```markdown
# OrenGen media generation prompts

Brand guardrails for EVERY asset: deep navy (#00254B / #001F3F) base, burnt-ember accent
(#CC5500) used sparingly, abstract & architectural, premium/editorial, high negative space.
NEVER: robots, glowing brains, circuit boards, humanoid AI, neon, purple/pink AI gradients,
stocky 3D renders, text in the image.

## Hero — ambient backdrop (Higgsfield video, ~8–12s loop) + still poster (Nano Banana)
Prompt: "Abstract architectural data-flow over deep navy (#00254B). Slow, calm parallax of
faint geometric light-lines and soft volumetric depth, a single warm ember (#CC5500) accent
drifting through. Cinematic, restrained, governmental-grade gravitas. Seamless loop, no text,
no characters. 16:9, dark, high contrast, lots of empty space on the left for headline."
Poster: same prompt, single frame, 1920×1080, export WebP.

## Command card — governed-AI dashboard mockup (Nano Banana, still)
Prompt: "Clean enterprise dashboard UI mockup on dark navy (#00254B), Public-Sans-like
typography, restrained data panels (KPIs, a workflow lane, an access-control toggle), one
ember (#CC5500) status accent. Flat, crisp, no glow, no neon. Product-screenshot realism,
slight perspective, 4:3, generous margins, no real logos."

## Section accents ×2–3 (Nano Banana, stills, used at very low opacity)
Prompt: "Minimal abstract navy texture — faint topographic/architectural line contours on
#00254B, barely visible, one subtle ember thread. Seamless, no focal subject, no text. 3:2."

## Blog headers (Nano Banana, per article)
Prompt template: "Editorial header image for an enterprise-AI article about {TOPIC}.
Deep navy, abstract architectural metaphor for {TOPIC}, one ember accent, lots of negative
space, no text, no robots/brains. 16:9."

Export: WebP/AVIF, 2× for retina, keep hero poster < 200KB, accents < 80KB.
```

- [ ] **Step 2: Commit**

```bash
git -C orengen-web add docs/media-generation-prompts.md
git -C orengen-web commit -m "docs(media): brand-tuned Nano Banana / Higgsfield generation prompts"
```

---

## Self-Review

**Spec coverage:** Layer A — reduced-motion foundation (T1) ✓, elevation+glass (T2) ✓, HeroGlow+entrance+shimmer (T3) ✓, KPI count-up (T4) ✓, scroll-progress+springs (T5) ✓. Discipline fix — global guard + fire gate (T1) ✓. Layer B — media infra+component (T6) ✓, generation prompts (T7) ✓. Bento explicitly deferred per spec ✓. Sticky "Book a call" already exists in nav (no task needed) ✓. **No gaps.**

**Placeholder scan:** No "TBD/TODO". Every code step has complete code. The hero media *wiring* is intentionally deferred (note in T6) because it depends on a generated asset that does not exist yet — the infra (component, dir, placeholder) is fully built and testable now.

**Type consistency:** `KpiNumber` props `{ to, decimals, prefix, suffix }` match the KPIS fields (`to`, `decimals`, `prefix`, `numSuffix`→`suffix`) wired in T4. `prefersReducedMotion()` (vanilla, T1) vs `useReducedMotion()` (React, motion/react) used in correct contexts. `MediaVideo` props `{ src, poster, className }` match the deferred wiring note. Consistent.

---

## Notes
- `next.config.mjs` already has `images.remotePatterns` for `cdn.content360.io`; local `/media/*` assets need no image config.
- The global reduced-motion guard (T1) flattens CSS transitions/animations; motion/react components additionally branch on `useReducedMotion()`. Both layers are intentional (CSS for ported styles, JS for new components).
