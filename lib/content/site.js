// Company facts shared across pages.

export const company = {
  name: "Neuve Labs",
  legalName: "Neuve Labs Technology",
  email: "info@neuvelabs.com",
  phone: "+971 56 784 5810",
  phoneHref: "tel:+971567845810",
  linkedin: "https://linkedin.com/company/neuvelabs",
  twitter: "https://twitter.com/neuvelabs",
};

// `size` is the logo's display height in rem, set by eye so each mark has
// similar visual weight (files differ in shape and built-in padding).
export const clients = [
  { name: "A Accounting", logo: "/images/clients/aaccounting.png", href: "https://aaccounting.me", size: 2 },
  { name: "Kangaroo Care", logo: "/images/clients/kangaroo-logo.png", href: "https://kangaroocare.com.au/", size: 2.5 },
  { name: "Khedmah", logo: "/images/clients/khedmah.jpg", href: "https://www.khedmah.om", size: 3.25 },
  { name: "Continuity Business Solutions", logo: "/images/clients/cbs.png", href: "https://www.continuityoman.com", size: 2.75 },
  { name: "Exctel", logo: "/images/clients/exctel.png", href: "https://www.exctel.com", size: 4 },
  { name: "Bristlecone", logo: "/images/clients/Bristlecone.png", href: "https://www.bristlecone.com", size: 1.125, darken: true },
  { name: "Elite Road Supplies", logo: "/images/clients/eco_logo_ink.svg", href: "https://www.eliteroadsupplies.com", size: 3.25 },
  { name: "International Academy of Osteopathy", logo: "/images/clients/iao.webp", href: "https://www.osteopathy.academy", size: 3.5 },
];

// Keys map to messages under about.reach.locations
export const locations = [
  { key: "rak", accent: "blue", hq: true },
  { key: "kochi", accent: "blue", hq: true },
  { key: "oman", accent: "cyan" },
  { key: "singapore", accent: "cyan" },
  { key: "australia", accent: "cyan" },
  { key: "netherlands", accent: "orange" },
  { key: "belgium", accent: "orange" },
  { key: "usa", accent: "orange" },
];

export const accents = ["blue", "cyan", "orange"];
export const accentAt = (i) => accents[i % accents.length];
