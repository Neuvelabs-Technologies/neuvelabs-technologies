import { siteConfig } from "@/lib/metadata";
import { services, serviceGroups } from "@/lib/content/services";
import { industries } from "@/lib/content/industries";
import { caseStudies } from "@/lib/content/caseStudies";
import { articles } from "@/lib/content/articles";

export default function sitemap() {
  const staticRoutes = ["", "/services", "/industries", "/insights", "/about", "/contact"];
  const entries = [
    ...staticRoutes.map((path) => ({ path, priority: path === "" ? 1 : 0.8, changeFrequency: "monthly" })),
    ...Object.values(serviceGroups).map((g) => ({ path: g.path, priority: 0.8 })),
    ...services.map((s) => ({ path: s.path, priority: 0.7 })),
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.6 })),
    ...caseStudies.map((c) => ({ path: `/insights/${c.slug}`, priority: 0.6, lastModified: c.date })),
    ...articles.map((a) => ({ path: `/insights/${a.slug}`, priority: 0.5, lastModified: a.date })),
  ];

  return entries.map(({ path, priority, changeFrequency = "yearly", lastModified }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency,
    priority,
  }));
}
