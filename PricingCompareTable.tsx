export type PricingTierRow = {
  name: string;
  monthly: string;
  setup: string;
  ctaHref: string;
  ctaLabel?: string;
  featured?: boolean;
  highlights: string[];
};

type Props = {
  caption?: string;
  tiers: PricingTierRow[];
};

/**
 * Scannable pricing comparison table — complements card grids on product pages.
 */
export default function PricingCompareTable({
  caption = "Plan comparison",
  tiers,
}: Props) {
  return (
    <div className="pricing-compare-wrap reveal">
      <table className="pricing-compare" aria-label={caption}>
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Plan</th>
            <th scope="col">Monthly</th>
            <th scope="col">Setup</th>
            <th scope="col">Key inclusions</th>
            <th scope="col">
              <span className="sr-only">Activate</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier) => (
            <tr key={tier.name} className={tier.featured ? "is-featured" : undefined}>
              <th scope="row">
                {tier.name}
                {tier.featured && (
                  <span className="pricing-compare__badge">Most popular</span>
                )}
              </th>
              <td>{tier.monthly}</td>
              <td>{tier.setup}</td>
              <td>
                <ul className="pricing-compare__highlights">
                  {tier.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </td>
              <td>
                <a className="card-link" href={tier.ctaHref}>
                  {tier.ctaLabel ?? "Activate →"}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
