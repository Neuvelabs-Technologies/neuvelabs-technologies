import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { industries, getIndustry } from "@/lib/content/industries";
import { caseStudiesForIndustry } from "@/lib/content/caseStudies";
import DetailPage from "@/components/pages/DetailPage";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: `${industry.title} Technology Solutions`,
    description: industry.lede,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const nav = await getTranslations("nav");

  return (
    <DetailPage
      entry={industry}
      label={nav("industries")}
      crumbs={[
        { label: nav("industries"), href: "/industries" },
        { label: industry.title, href: `/industries/${slug}` },
      ]}
      related={caseStudiesForIndustry(slug)}
    />
  );
}
