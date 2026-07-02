export type ResearchItem = {
  id: string;
  label: string;
  stat: string;
  headline: string;
  body: string;
  source: string;
};

type Props = {
  eyebrow: string;
  title: string;
  items: ResearchItem[];
  defaultOpenId?: string;
  sectionId?: string;
};

/**
 * Progressive disclosure for research/stat blocks — native <details> for
 * keyboard and screen-reader support without extra JS.
 */
export default function ResearchAccordion({
  eyebrow,
  title,
  items,
  defaultOpenId,
  sectionId = "research",
}: Props) {
  return (
    <section className="section section-brand-blue" id={sectionId} aria-label={title}>
      <div className="container">
        <header className="section-head center reveal">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          <p className="lead">
            Expand any stat for context and source. All figures are cited —
            nothing is decorative filler.
          </p>
        </header>
        <div className="research-accordion reveal">
          {items.map((item) => (
            <details
              key={item.id}
              className="research-item"
              open={item.id === defaultOpenId}
            >
              <summary>
                <span className="research-item__stat" aria-hidden="true">
                  {item.stat}
                </span>
                <span className="research-item__text">
                  <span className="research-item__label">{item.label}</span>
                  <span className="research-item__headline">{item.headline}</span>
                </span>
              </summary>
              <div className="research-item__body">
                <p>{item.body}</p>
                <p className="research-item__source">{item.source}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
