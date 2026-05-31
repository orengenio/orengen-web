# OrenGen media generation prompts

Brand guardrails for EVERY asset: deep navy (#00254B / #001F3F) base, burnt-ember accent
(#CC5500) used sparingly, abstract & architectural, premium/editorial, high negative space.
NEVER: robots, glowing brains, circuit boards, humanoid AI, neon, purple/pink AI gradients,
stocky 3D renders, text in the image.

## Hero — ambient backdrop (Higgsfield video, ~8–12s loop) + still poster (Nano Banana)

Prompt: "Abstract architectural data-flow over deep navy (#00254B). Slow, calm parallax of
faint geometric light-lines and soft volumetric depth, a single warm ember (#CC5500) accent
drifting through. Cinematic, restrained, governmental-grade gravitas. Seamless loop, no text,
no characters. 16:9, dark, high contrast, lots of empty space on the LEFT for a headline."

Poster: same prompt, single frame, 1920×1080, export WebP.

## Command card — governed-AI dashboard mockup (Nano Banana, still)

Prompt: "Clean enterprise dashboard UI mockup on dark navy (#00254B), Public-Sans-like
typography, restrained data panels (KPIs, a workflow lane, an access-control toggle), one
ember (#CC5500) status accent. Flat, crisp, no glow, no neon. Product-screenshot realism,
slight perspective, 4:3, generous margins, no real company logos."

## Section accents ×2–3 (Nano Banana, stills, used at very low opacity)

Prompt: "Minimal abstract navy texture — faint topographic/architectural line contours on
#00254B, barely visible, one subtle ember thread. Seamless, no focal subject, no text. 3:2."

## Blog headers (Nano Banana, per article)

Prompt template: "Editorial header image for an enterprise-AI article about {TOPIC}.
Deep navy, abstract architectural metaphor for {TOPIC}, one ember accent, lots of negative
space, no text, no robots/brains. 16:9."

## Export targets

WebP/AVIF, 2× for retina. Keep the hero poster < 200 KB, section accents < 80 KB.
Drop files in `public/media/` and wire via `next/image` (stills) or `MediaVideo` (hero loop).
