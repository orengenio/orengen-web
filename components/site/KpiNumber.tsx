"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type Props = { to: number; decimals?: number; prefix?: string; suffix?: string };

export default function KpiNumber({ to, decimals = 0, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  // Start at final value so SSR and pre-scroll never flash "0" placeholders.
  const [display, setDisplay] = useState(to);

  useEffect(() => {
    if (reduce || !inView) return;
    const from = to * 0.82;
    const controls = animate(from, to, {
      duration: 0.9,
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
