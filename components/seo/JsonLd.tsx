type Props = {
  data: Record<string, unknown>;
};

/**
 * Renders JSON-LD for SEO, AEO, and GEO. Serialized as a script text child
 * (no raw HTML in JSON) — same pattern as OrenKanBuilder.
 */
export default function JsonLd({ data }: Props) {
  return (
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  );
}
