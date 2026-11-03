import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { locations } from "@/lib/content/site";
import PageHead from "@/components/blocks/PageHead";
import SectionHead from "@/components/blocks/SectionHead";
import IndexGrid from "@/components/blocks/IndexGrid";
import ClientMarquee from "@/components/blocks/ClientMarquee";
import CtaBand from "@/components/blocks/CtaBand";

export async function generateMetadata() {
  const t = await getTranslations("about.hero");
  return buildMetadata({ title: t("label"), description: t("lede"), path: "/about" });
}

const FACTS = [
  { value: "500+", key: "projects" },
  { value: "8", key: "countries" },
  { value: "10+", key: "partnerships" },
  { value: "95%", key: "retention" },
];

export default async function About() {
  const t = await getTranslations("about");
  const home = await getTranslations("home");
  const paragraphs = t.raw("story.paragraphs");
  const values = t.raw("values.items").map((v) => ({ title: v.title, description: v.body }));

  return (
    <>
      <PageHead label={t("hero.label")} title={t("hero.title")} lede={t("hero.lede")} />

      <div className="container section--tight">
        <div className="frame">
          <Image src="/images/photos/team-at-desk.jpg" alt="" fill priority sizes="(max-width: 1440px) 100vw, 88rem" />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ul className="facts" role="list">
            {FACTS.map((f) => (
              <li key={f.key} className="fact">
                <span className="fact__value" dir="ltr">{f.value}</span>
                <span className="fact__label">{t(`facts.${f.key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split split--aside">
          <h2 className="label">{t("story.label")}</h2>
          <div className="stack">
            <p className="display">{t("story.title")}</p>
            <div>
              {paragraphs.map((p) => (
                <p key={p} className="body">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionHead label={t("values.label")} title={t("values.title")} />
          <IndexGrid items={values} />
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionHead label={t("reach.label")} title={t("reach.title")} />
          <p className="lede">{t("reach.lede")}</p>
          <ul className="locations" role="list">
            {locations.map((l) => (
              <li key={l.key}>
                <span className={`dot dot--sm dot--${l.accent}`} aria-hidden="true" />
                {t(`reach.locations.${l.key}`)}
                {l.hq ? <span className="meta">{t("reach.hq")}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionHead label={home("clients.label")} title={home("clients.title")} />
        </div>
        <ClientMarquee />
      </section>

      <CtaBand title={home("cta.title")} body={home("cta.body")} />
    </>
  );
}
