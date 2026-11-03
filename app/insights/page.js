import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { listedCaseStudies } from "@/lib/content/caseStudies";
import { articles } from "@/lib/content/articles";
import { formatDate } from "@/lib/format";
import PageHead from "@/components/blocks/PageHead";
import WorkCard from "@/components/blocks/WorkCard";
import CtaBand from "@/components/blocks/CtaBand";

export async function generateMetadata() {
  const t = await getTranslations("insightsIndex");
  return buildMetadata({ title: t("label"), description: t("lede"), path: "/insights" });
}

export default async function InsightsIndex() {
  const t = await getTranslations("insightsIndex");
  const home = await getTranslations("home");
  const locale = await getLocale();

  return (
    <>
      <PageHead label={t("label")} title={t("title")} lede={t("lede")} />

      <section className="section" id="case-studies" aria-labelledby="case-studies-title">
        <div className="container stack">
          <h2 id="case-studies-title" className="label">{t("caseStudies")}</h2>
          <div className="work-grid">
            {listedCaseStudies.map((study) => (
              <WorkCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="articles" aria-labelledby="articles-title">
        <div className="container stack">
          <h2 id="articles-title" className="label">{t("articles")}</h2>
          <ul className="rows" role="list">
            {articles.map((a, i) => (
              <li key={a.slug} data-accent={["blue", "cyan", "orange"][i % 3]}>
                <Link href={`/insights/${a.slug}`} className="row row--article">
                  <span className="meta">
                    <time dateTime={a.date}>{formatDate(a.date, locale)}</time>
                  </span>
                  <span className="row__main">
                    <span className="row__title">{a.title}</span>
                    <span className="row__desc">{a.description}</span>
                  </span>
                  <span className="row__arrow arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={home("cta.title")} body={home("cta.body")} />
    </>
  );
}
