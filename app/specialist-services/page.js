import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { servicesInGroup } from "@/lib/content/services";
import PageHead from "@/components/blocks/PageHead";
import SectionHead from "@/components/blocks/SectionHead";
import Rows from "@/components/blocks/Rows";
import CtaBand from "@/components/blocks/CtaBand";

export async function generateMetadata() {
  const t = await getTranslations("hubs.specialist");
  return buildMetadata({ title: t("label"), description: t("lede"), path: "/specialist-services" });
}

export default async function SpecialistServices() {
  const t = await getTranslations("hubs.specialist");
  const nav = await getTranslations("nav");
  const home = await getTranslations("home");
  const services = servicesInGroup("specialist-services");
  const why = t.raw("why.items");
  const focus = t.raw("why.focus");

  return (
    <>
      <PageHead
        label={t("label")}
        title={t("title")}
        lede={t("lede")}
        crumbs={[
          { label: nav("services"), href: "/services" },
          { label: t("label"), href: "/specialist-services" },
        ]}
      />
      <section className="section">
        <div className="container">
          <Rows detailed items={services.map((s) => ({ href: s.path, title: s.title, description: s.summary }))} />
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionHead label={t("why.label")} title={t("why.title")} />
          <div className="split">
            <div className="stack">
              <p className="lede">{t("why.lede")}</p>
              <ol className="index-grid index-grid--1" role="list">
                {why.map((item, i) => (
                  <li key={item.title} className="index-item">
                    <span className="index-item__num meta" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="index-item__title">{item.title}</h3>
                    <p className="index-item__body">{item.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="stack stack--sm">
              <h3 className="meta">{t("why.focusTitle")}</h3>
              <ul className="checklist" role="list">
                {focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title={home("cta.title")} body={home("cta.body")} />
    </>
  );
}
