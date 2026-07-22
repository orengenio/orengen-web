type JumpLink = { href: string; label: string };

type Props = {
  title?: string;
  bullets: string[];
  jumps?: JumpLink[];
};

/**
 * Executive summary strip — quick, scannable highlights above the fold on long
 * product pages. Laid out as a balanced highlights grid (checked items filling
 * the full width) with the section jump-nav inline, rather than a left-aligned
 * bullet list that left dead space on the right.
 */
export default function PageAtAGlance({
  title = "At a glance",
  bullets,
  jumps = [],
}: Props) {
  return (
    <section className="page-at-a-glance" aria-label={title}>
      <div className="container">
        <div className="pag reveal">
          <div className="pag-top">
            <div className="eyebrow">{title}</div>
            {jumps.length > 0 && (
              <nav className="pag-jumps" aria-label="On this page">
                {jumps.map((j) => (
                  <a key={j.href} href={j.href} className="pag-jump">
                    {j.label}
                  </a>
                ))}
              </nav>
            )}
          </div>
          <ul className="pag-grid">
            {bullets.map((b) => (
              <li key={b}>
                <span className="pag-check" aria-hidden="true">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
