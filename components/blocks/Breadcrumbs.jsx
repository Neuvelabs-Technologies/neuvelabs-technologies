import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/metadata";

// items: [{ label, href }] — the last item is the current page.
export default async function Breadcrumbs({ items }) {
  const t = await getTranslations("nav");
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav className="breadcrumbs meta" aria-label={t("breadcrumb")}>
      <ol>
        {items.map((item, i) =>
          i === items.length - 1 ? (
            <li key={item.href}>
              <span aria-current="page">{item.label}</span>
            </li>
          ) : (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          )
        )}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </nav>
  );
}
