/**
 * OrenGen brand typography — extracted from the homepage (brand source of truth).
 *
 * Public Sans is the brand typeface. It is loaded via next/font in app/layout.tsx
 * and exposed as the `--font-public-sans` CSS variable, which feeds `--og-font`
 * (see app/globals.css). These exports let the migrated `.tsx` pages set
 * fontFamily inline while still resolving to the optimized, self-hosted font.
 */
export const FONT_DISPLAY = "var(--og-font-display, var(--og-font))";
export const FONT_BODY = "var(--og-font-body, var(--og-font))";
