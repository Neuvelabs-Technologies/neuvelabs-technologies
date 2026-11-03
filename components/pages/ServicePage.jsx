import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { getService, serviceGroups, servicesInGroup } from "@/lib/content/services";
import { caseStudiesForService } from "@/lib/content/caseStudies";
import DetailPage from "./DetailPage";

export function serviceMetadata(slug) {
  const s = getService(slug);
  return buildMetadata({ title: s.meta.title, description: s.meta.description, path: s.path });
}

export default async function ServicePage({ slug }) {
  const service = getService(slug);
  if (!service) notFound();
  const nav = await getTranslations("nav");
  const hubs = await getTranslations("hubs");
  const group = serviceGroups[service.group];
  const groupTitle = hubs(`${group.messageKey}.label`);

  const siblings = servicesInGroup(service.group)
    .filter((s) => s.slug !== slug)
    .slice(0, 5)
    .map((s) => ({ href: s.path, title: s.title, description: s.summary }));

  return (
    <DetailPage
      entry={service}
      label={groupTitle}
      crumbs={[
        { label: nav("services"), href: "/services" },
        { label: groupTitle, href: group.path },
        { label: service.title, href: service.path },
      ]}
      related={caseStudiesForService(slug)}
      siblings={siblings}
    />
  );
}
