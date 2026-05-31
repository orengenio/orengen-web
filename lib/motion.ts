// Shared motion constants + a reduced-motion check for non-React/vanilla contexts.
// React components should prefer motion/react's useReducedMotion() hook.
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const SPRING_SOFT = { type: "spring", stiffness: 200, damping: 30 } as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
