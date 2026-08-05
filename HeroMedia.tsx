import Image from "next/image";

/**
 * Full-bleed cinematic hero backdrop for a page's top section.
 *
 * Renders an absolutely-positioned image layer that is dimmed and scrimmed
 * (see `.section-media` in globals.css) so it sits *behind* the section's
 * `.container` content while keeping headline/lead text readable. The parent
 * `<section>` must carry the `has-media` class, which provides the positioning
 * context (relative / isolation / overflow) and lifts `.container` above it.
 *
 * Images live in /public/images and are generated on-brand (deep navy +
 * burnt orange, no text/people) to match the OrenGen design system.
 */
export default function HeroMedia({
  src,
  position = "center",
}: {
  src: string;
  /** CSS object-position for the cover image (e.g. "center 40%"). */
  position?: string;
}) {
  return (
    <div className="section-media" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}
