import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { buildMetadata, articleSchema } from "@/lib/metadata";
import { caseStudies, getCaseStudy, listedCaseStudies } from "@/lib/content/caseStudies";
import { articles, getArticle } from "@/lib/content/articles";
import { getService } from "@/lib/content/services";
import { formatDate } from "@/lib/format";
import PageHead from "@/components/blocks/PageHead";
import SectionHead from "@/components/blocks/SectionHead";
import WorkCard from "@/components/blocks/WorkCard";
import CtaBand from "@/components/blocks/CtaBand";

export function generateStaticParams() {
  return [...caseStudies, ...articles].map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getCaseStudy(slug) || getArticle(slug);
  if (!entry) return {};
  return buildMetadata({ title: entry.title, description: entry.description, path: `/insights/${slug}` });
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (study) return <CaseStudy study={study} />;
  const article = getArticle(slug);
  if (article) return <Article article={article} />;
  notFound();
}

async function CaseStudy({ study }) {
  const t = await getTranslations("caseStudy");
  const nav = await getTranslations("nav");
  const common = await getTranslations("common");
  const detail = await getTranslations("serviceDetail");
  const locale = await getLocale();
  const path = `/insights/${study.slug}`;
  const services = (study.services || []).map(getService).filter(Boolean);
  const more = listedCaseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema({ title: study.title, description: study.description, date: study.date, path })),
        }}
      />
      <PageHead
        label={common("caseStudy")}
        title={study.title}
        lede={study.description}
        crumbs={[
          { label: nav("insights"), href: "/insights" },
          { label: study.title.split(":")[0], href: path },
        ]}
      />

      <div className="container section--tight">
        <dl className="deflist">
          <div>
            <dt className="meta">{t("industry")}</dt>
            <dd>{study.industry}</dd>
          </div>
          <div>
            <dt className="meta">{nav("services")}</dt>
            <dd>
              {services.map((s, i) => (
                <span key={s.slug}>
                  {i > 0 ? ", " : ""}
                  <Link href={s.path} className="text-link">
                    {s.title}
                  </Link>
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="meta">{t("published")}</dt>
            <dd>
              <time dateTime={study.date}>{formatDate(study.date, locale)}</time>
            </dd>
          </div>
        </dl>
      </div>

      <section className="section" aria-label={t("results")}>
        <div className="container">
          <ul className="facts" role="list">
            {study.results.metrics.map((m) => (
              <li key={m.label} className="fact">
                <span className="fact__value" dir="ltr">{m.value}</span>
                <span className="fact__label">
                  {m.label} {m.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split split--aside">
          <h2 className="label">{t("challenge")}</h2>
          <p className="lede">{study.challenge.content}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split split--aside">
          <h2 className="label">{t("solution")}</h2>
          <div className="stack">
            <p className="lede">{study.solution.content}</p>
            {study.solution.features?.length ? (
              <div className="stack stack--sm">
                <h3 className="meta">{t("keyFeatures")}</h3>
                <ul className="checklist" role="list">
                  {study.solution.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--aside">
          <h2 className="label">{t("results")}</h2>
          <div className="stack">
            <p className="lede">{study.results.content}</p>
            {study.techStack?.length ? (
              <div className="stack stack--sm">
                <h3 className="meta">{t("stack")}</h3>
                <ul className="chips" role="list">
                  {study.techStack.map((tech) => (
                    <li key={tech} dir="ltr">{tech}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionHead label={detail("relatedWork")}>
            <Link href="/insights" className="text-link">
              {common("viewAllWork")} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </SectionHead>
          <div className="work-grid">
            {more.map((c) => (
              <WorkCard key={c.slug} study={c} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={t("ctaTitle")} body={t("ctaBody")} />
    </article>
  );
}

async function Article({ article }) {
  const t = await getTranslations("article");
  const nav = await getTranslations("nav");
  const locale = await getLocale();
  const path = `/insights/${article.slug}`;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({ title: article.title, description: article.description, date: article.date, path })
          ),
        }}
      />
      <PageHead
        label={article.category}
        title={article.title}
        lede={article.description}
        crumbs={[
          { label: nav("insights"), href: "/insights" },
          { label: article.title.split(":")[0], href: path },
        ]}
      >
        <p className="meta">
          {t("published")} <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
        </p>
      </PageHead>

      <section className="section--tight">
        {/* Article HTML is first-party static content from lib/content/articles.js */}
        <div className="container">
          <div className="prose" lang="en" dir="ltr" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </section>

      <CtaBand title={t("ctaTitle")} body={t("ctaBody")} />
    </article>
  );
}
