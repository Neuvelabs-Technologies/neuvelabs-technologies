import Image from "next/image";
import { getTranslations } from "next-intl/server";
import PageHead from "@/components/blocks/PageHead";
import SectionHead from "@/components/blocks/SectionHead";
import IndexGrid from "@/components/blocks/IndexGrid";
import Rows from "@/components/blocks/Rows";
import WorkCard from "@/components/blocks/WorkCard";
import CtaBand from "@/components/blocks/CtaBand";

/**
 * Shared layout for service and industry detail pages.
 * entry: { title, lede, intro?, image?, capabilities, outcomes, outcomesTitle?, useCases }
 */
export default async function DetailPage({ entry, label, crumbs, related = [], siblings = [] }) {
  const t = await getTranslations("serviceDetail");

  return (
    <>
      <PageHead label={label} title={entry.title} lede={entry.lede} crumbs={crumbs} />

      {entry.image ? (
        <div className="container section--tight">
          <div className="frame">
            <Image src={entry.image} alt="" fill priority sizes="(max-width: 1440px) 100vw, 88rem" />
          </div>
        </div>
      ) : null}

      <section className="section">
        <div className="container split split--aside">
          <h2 className="label">{t("capabilities")}</h2>
          <div className="stack">
            {entry.intro ? <p className="lede">{entry.intro}</p> : null}
            <IndexGrid items={entry.capabilities} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--aside">
          <h2 className="label">{entry.outcomesTitle || t("outcomes")}</h2>
          <IndexGrid items={entry.outcomes} />
        </div>
      </section>

      <section className="section">
        <div className="container split split--aside">
          <h2 className="label">{t("useCases")}</h2>
          <IndexGrid items={entry.useCases} />
        </div>
      </section>

      {related.length ? (
        <section className="section">
          <div className="container stack">
            <SectionHead label={t("relatedWork")} />
            <div className="work-grid">
              {related.map((study) => (
                <WorkCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {siblings.length ? (
        <section className="section">
          <div className="container stack">
            <SectionHead label={t("otherServices")} />
            <Rows items={siblings} detailed />
          </div>
        </section>
      ) : null}

      <CtaBand title={t("ctaTitle")} body={t("ctaBody")} />
    </>
  );
}
