import type { CaseStudy } from "@/lib/caseStudies";

type Props = {
  studies: CaseStudy[];
  compact?: boolean;
};

export default function CaseStudyGrid({ studies, compact = false }: Props) {
  return (
    <div className="case-study-grid reveal">
      {studies.map((study) => (
        <article className="sector-card case-study-card" key={study.id} id={study.id}>
          <div className="step">{study.sector}</div>
          <div className="case-study-metric" aria-label={`${study.primaryMetric} ${study.metricLabel}`}>
            <span className="case-study-metric__value">{study.primaryMetric}</span>
            <span className="case-study-metric__label">{study.metricLabel}</span>
          </div>
          <h3>{study.headline}</h3>
          <p>{study.summary}</p>
          {!compact && (
            <>
              <ul className="case-study-outcomes">
                {study.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <div className="case-study-meta">
                <span className="chip">{study.timeframe}</span>
                {study.stack.slice(0, 3).map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}
        </article>
      ))}
    </div>
  );
}
