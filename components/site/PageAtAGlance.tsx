type JumpLink = { href: string; label: string };

type Props = {
  title?: string;
  bullets: string[];
  jumps?: JumpLink[];
};

/**
 * Executive summary strip for procurement and compliance readers —
 * quick wins above the fold on long product pages.
 */
export default function PageAtAGlance({
  title = "At a glance",
  bullets,
  jumps = [],
}: Props) {
  return (
    <section className="page-at-a-glance" aria-label={title}>
      <div className="container">
        <div className="page-at-a-glance__inner reveal">
          <div className="page-at-a-glance__head">
            <div className="eyebrow">{title}</div>
            <p className="page-at-a-glance__lead">
              Scan the essentials first — expand sections below for full detail.
            </p>
          </div>
          <ul className="page-at-a-glance__list">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {jumps.length > 0 && (
            <nav className="page-at-a-glance__nav" aria-label="On this page">
              {jumps.map((j) => (
                <a key={j.href} href={j.href} className="chip">
                  {j.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
