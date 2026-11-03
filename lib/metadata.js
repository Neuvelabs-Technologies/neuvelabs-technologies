import { company } from "@/lib/content/site";

export const siteConfig = {
  name: company.name,
  url: "https://neuvelabs.com",
  description:
    "Neuve Labs is an AI and IT consultancy in the UAE. We design, build and run software, cloud, data and AI systems for organizations across the Middle East, Asia, Europe and Australia.",
};

/**
 * Page metadata with consistent titles, canonical URLs and social cards.
 * The Open Graph image comes from app/opengraph-image.js.
 */
export function buildMetadata({ title, description, path = "" } = {}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | AI and IT Consultancy, UAE`;
  const desc = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description: desc,
    applicationName: siteConfig.name,
    authors: [{ name: company.legalName }],
    publisher: company.legalName,
    alternates: { canonical: url },
    icons: {
      icon: [{ url: "/logo-title.svg", type: "image/svg+xml" }],
      apple: [{ url: "/logo-title.svg" }],
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description: desc,
      locale: "en_US",
      alternateLocale: ["ar_AE"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      site: "@neuvelabs",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-ink.svg`,
    description: siteConfig.description,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ras Al Khaimah",
      addressRegion: "Ras Al Khaimah",
      addressCountry: "AE",
    },
    sameAs: [company.linkedin, company.twitter],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.email,
      telephone: company.phone,
      availableLanguage: ["English", "Arabic"],
    },
  };
}

export function articleSchema({ title, description, date, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: `${siteConfig.url}${path}`,
    author: { "@type": "Organization", name: company.legalName },
    publisher: {
      "@type": "Organization",
      name: company.legalName,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo-ink.svg` },
    },
  };
}
