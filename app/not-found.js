import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Rows from "@/components/blocks/Rows";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  const nav = await getTranslations("nav");

  return (
    <>
      <header className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <p className="label">{t("label")}</p>
            <h1 className="display display--hero">{t("title")}</h1>
            <p className="lede">{t("body")}</p>
            <div>
              <Link href="/" className="btn btn--ink">
                {t("home")} <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <Rows
            items={[
              { href: "/services", title: nav("services") },
              { href: "/insights", title: nav("insights") },
              { href: "/contact", title: nav("contact") },
            ]}
          />
        </div>
      </section>
    </>
  );
}
