import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { company } from "@/lib/content/site";
import Decor from "./Decor";

export default async function CtaBand({ title, body }) {
  const t = await getTranslations("common");
  return (
    <section className="container">
      <div className="cta-band">
        <Decor className="cta-band__decor" />
        <div className="cta-band__inner">
          <h2 className="display">{title}</h2>
          {body ? <p className="lede">{body}</p> : null}
          <div className="cta-band__actions">
            <Link href="/contact" className="btn btn--ink">
              {t("startProject")} <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <a href={`mailto:${company.email}`} className="text-link" dir="ltr">
              {company.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
