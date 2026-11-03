import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { serviceGroups, servicesInGroup } from "@/lib/content/services";
import PageHead from "@/components/blocks/PageHead";
import SectionHead from "@/components/blocks/SectionHead";
import Rows from "@/components/blocks/Rows";
import CtaBand from "@/components/blocks/CtaBand";
import Link from "next/link";

export async function generateMetadata() {
  const t = await getTranslations("servicesIndex");
  return buildMetadata({ title: t("label"), description: t("lede"), path: "/services" });
}

export default async function ServicesIndex() {
  const t = await getTranslations("servicesIndex");
  const hubs = await getTranslations("hubs");
  const home = await getTranslations("home");
  const common = await getTranslations("common");

  return (
    <>
      <PageHead label={t("label")} title={t("title")} lede={t("lede")} />
      {Object.values(serviceGroups).map((group) => (
        <section key={group.slug} className="section">
          <div className="container stack">
            <SectionHead label={hubs(`${group.messageKey}.label`)} title={hubs(`${group.messageKey}.title`)}>
              <Link href={group.path} className="text-link">
                {common("learnMore")} <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </SectionHead>
            <Rows
              detailed
              items={servicesInGroup(group.slug).map((s) => ({ href: s.path, title: s.title, description: s.summary }))}
            />
          </div>
        </section>
      ))}
      <CtaBand title={home("cta.title")} body={home("cta.body")} />
    </>
  );
}
