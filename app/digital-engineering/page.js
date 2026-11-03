import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { servicesInGroup } from "@/lib/content/services";
import { caseStudiesForService } from "@/lib/content/caseStudies";
import PageHead from "@/components/blocks/PageHead";
import SectionHead from "@/components/blocks/SectionHead";
import Rows from "@/components/blocks/Rows";
import WorkCard from "@/components/blocks/WorkCard";
import CtaBand from "@/components/blocks/CtaBand";

export async function generateMetadata() {
  const t = await getTranslations("hubs.digital");
  return buildMetadata({ title: t("label"), description: t("lede"), path: "/digital-engineering" });
}

export default async function DigitalEngineering() {
  const t = await getTranslations("hubs.digital");
  const nav = await getTranslations("nav");
  const detail = await getTranslations("serviceDetail");
  const home = await getTranslations("home");
  const services = servicesInGroup("digital-engineering");
  const related = [
    ...new Map(
      ["product-engineering", "cloud-engineering", "fintech-engineering"]
        .flatMap((s) => caseStudiesForService(s, 1))
        .map((c) => [c.slug, c])
    ).values(),
  ].slice(0, 2);

  return (
    <>
      <PageHead
        label={t("label")}
        title={t("title")}
        lede={t("lede")}
        crumbs={[
          { label: nav("services"), href: "/services" },
          { label: t("label"), href: "/digital-engineering" },
        ]}
      />
      <section className="section">
        <div className="container">
          <Rows detailed items={services.map((s) => ({ href: s.path, title: s.title, description: s.summary }))} />
        </div>
      </section>
      {related.length ? (
        <section className="section">
          <div className="container stack">
            <SectionHead label={detail("relatedWork")} />
            <div className="work-grid">
              {related.map((c) => (
                <WorkCard key={c.slug} study={c} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <CtaBand title={home("cta.title")} body={home("cta.body")} />
    </>
  );
}
