import Link from "next/link";

// Case study card. With no project photography, the plate leads with the
// headline result, set large, which is what a reader wants to know first.
export default function WorkCard({ study, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const metric = study.results?.metrics?.[0];

  return (
    <Link href={`/insights/${study.slug}`} className="work-card">
      <div className="plate" data-accent={study.accent}>
        <div className="plate__top">
          <span className="meta">{study.industry}</span>
          <span className={`dot dot--${study.accent}`} aria-hidden="true" />
        </div>
        {metric ? (
          <div>
            <p className="plate__figure" dir="ltr">{metric.value}</p>
            <p className="plate__caption">
              {metric.label} {metric.description}
            </p>
          </div>
        ) : null}
      </div>
      <Heading className="work-card__title">{study.title.split(":")[0]}</Heading>
      <p className="work-card__desc">{study.description}</p>
    </Link>
  );
}
