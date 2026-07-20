type Props = {
  productName: string;
  description: string;
  demoHref?: string;
  portalHref?: string;
  sectionId?: string;
};

/**
 * Visual product preview when a live embed is unavailable — structured UI
 * mock plus clear CTAs for demo booking and client portal access.
 */
export default function ProductPreview({
  productName,
  description,
  demoHref = "https://api.orengen.io/booking/coffeechat",
  portalHref = "https://app.orengen.io",
  sectionId = "preview",
}: Props) {
  return (
    <section
      className="section alt section-brand-white"
      id={sectionId}
      aria-label={`${productName} preview`}
    >
      <div className="container">
        <header className="section-head center reveal">
          <div className="eyebrow">Live preview</div>
          <h2>See {productName} in action</h2>
          <p className="lead">{description}</p>
        </header>
        <div className="product-preview reveal">
          <div className="product-preview__frame" role="img" aria-label={`${productName} dashboard preview`}>
            <div className="product-preview__chrome">
              <span />
              <span />
              <span />
            </div>
            <div className="product-preview__layout">
              <aside className="product-preview__sidebar" aria-hidden="true">
                <div className="product-preview__nav-item is-active" />
                <div className="product-preview__nav-item" />
                <div className="product-preview__nav-item" />
                <div className="product-preview__nav-item" />
              </aside>
              <div className="product-preview__main" aria-hidden="true">
                <div className="product-preview__metrics">
                  <div className="product-preview__metric" />
                  <div className="product-preview__metric" />
                  <div className="product-preview__metric" />
                </div>
                <div className="product-preview__panel" />
                <div className="product-preview__panel product-preview__panel--short" />
              </div>
            </div>
          </div>
          <div className="product-preview__actions">
            <a
              className="btn btn-primary"
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a live demo
            </a>
            <a
              className="btn btn-secondary"
              href={portalHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open client portal
            </a>
          </div>
          <p className="product-preview__note">
            Interactive tenant access is provided after onboarding. Procurement
            teams can request a guided walkthrough on the architecture brief.
          </p>
        </div>
      </div>
    </section>
  );
}
