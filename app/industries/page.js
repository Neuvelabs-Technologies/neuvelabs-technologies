import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { industries } from "@/lib/content/industries";
import PageHead from "@/components/blocks/PageHead";
import Rows from "@/components/blocks/Rows";
import CtaBand from "@/components/blocks/CtaBand";

export async function generateMetadata() {
  const t = await getTranslations("industriesIndex");
  return buildMetadata({ title: t("label"), description: t("lede"), path: "/industries" });
}

export default async function IndustriesIndex() {
  const t = await getTranslations("industriesIndex");
  const home = await getTranslations("home");

  return (
    <>
      <PageHead label={t("label")} title={t("title")} lede={t("lede")} />
      <section className="section">
        <div className="container">
          <Rows
            detailed
            items={industries.map((i) => ({ href: `/industries/${i.slug}`, title: i.title, description: i.summary }))}
          />
        </div>
      </section>
      <CtaBand title={home("cta.title")} body={home("cta.body")} />
    </>
  );
}
