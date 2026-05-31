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
