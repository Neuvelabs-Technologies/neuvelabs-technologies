import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { company } from "@/lib/content/site";
import { coreServiceSlugs, getService } from "@/lib/content/services";

export default async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const year = new Date().getFullYear();
  const services = coreServiceSlugs.map(getService);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__about">
            <Link href="/" className="site-footer__brand" aria-label={nav("home")}>
              <Image src="/logo1.svg" alt="Neuve Labs" width={1416} height={317} />
            </Link>
            <p className="site-footer__desc">{t("description")}</p>
          </div>

          <div>
            <h2 className="site-footer__heading">{t("services")}</h2>
            <ul className="site-footer__list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="site-footer__heading">{t("company")}</h2>
            <ul className="site-footer__list">
              <li><Link href="/about">{nav("about")}</Link></li>
              <li><Link href="/services">{nav("services")}</Link></li>
              <li><Link href="/industries">{nav("industries")}</Link></li>
              <li><Link href="/insights">{nav("insights")}</Link></li>
              <li><Link href="/contact">{nav("contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="site-footer__heading">{t("contact")}</h2>
            <ul className="site-footer__list">
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><a href={company.phoneHref} dir="ltr">{company.phone}</a></li>
              <li><a href={company.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><address>{t("location")}</address></li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} {company.legalName}. {t("rights")}</span>        </div>
      </div>
    </footer>
  );
}
