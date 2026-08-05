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
