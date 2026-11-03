import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/lib/content/site";
import PageHead from "@/components/blocks/PageHead";
import ContactForm from "@/components/site/ContactForm";

export async function generateMetadata() {
  const t = await getTranslations("contact");
  return buildMetadata({ title: t("label"), description: t("lede"), path: "/contact" });
}

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <>
      <PageHead label={t("label")} title={t("title")} lede={t("lede")} />
      <section className="section--tight">
        <div className="container split split--aside">
          <dl className="contact-list">
            <div>
              <dt className="meta">{t("direct.email")}</dt>
              <dd>
                <a href={`mailto:${company.email}`} dir="ltr">{company.email}</a>
              </dd>
            </div>
            <div>
              <dt className="meta">{t("direct.phone")}</dt>
              <dd>
                <a href={company.phoneHref} dir="ltr">{company.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="meta">{t("direct.office")}</dt>
              <dd>{t("direct.officeValue")}</dd>
            </div>
          </dl>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
