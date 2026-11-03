import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { coreServiceSlugs, getService } from "@/lib/content/services";
import { featuredCaseStudies } from "@/lib/content/caseStudies";
import { accentAt } from "@/lib/content/site";
import HeroDrawing from "@/components/blocks/HeroDrawing";
import SectionHead from "@/components/blocks/SectionHead";
import Rows from "@/components/blocks/Rows";
import WorkCard from "@/components/blocks/WorkCard";
import ClientMarquee from "@/components/blocks/ClientMarquee";
import CtaBand from "@/components/blocks/CtaBand";

export async function generateMetadata() {
  const t = await getTranslations("meta");
  return buildMetadata({ description: t("description") });
}

const PRACTICES = [
  { key: "digital", href: "/digital-engineering", image: "/images/photos/team-at-desk.jpg", button: "btn--blue" },
  { key: "specialist", href: "/specialist-services", image: "/images/photos/operations-room.jpg", button: "btn--cyan" },
  { key: "industries", href: "/industries", image: "/images/photos/factory-floor.jpg", button: "btn--orange" },
];

export default async function Home() {
  const t = await getTranslations("home");
  const common = await getTranslations("common");
  const overview = t.raw("hero.overview");
  const sectors = t.raw("sectors.items");
  const services = coreServiceSlugs.map(getService).map((s) => ({
    href: s.path,
    title: s.title,
    description: s.summary,
  }));

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroDrawing className="hero__drawing" />
        <div className="container">
          <div className="hero__content">
            <h1 className="display display--hero">{t("hero.headline")}</h1>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--ink">
                {common("startProject")} <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/insights" className="btn btn--outline">
                {common("seeWork")}
              </Link>
            </div>
            <div className="hero__overview">
              {overview.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="section">
        <div className="container stack">
          <SectionHead label={t("practices.label")} title={t("practices.title")} />
          <div className="cards-3">
            {PRACTICES.map((p) => (
              <article key={p.key} className="card">
                <div className="card__media">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 34rem, 30vw"
                  />
                </div>
                <div className="card__body">
                  <h3 className="title">{t(`practices.${p.key}.title`)}</h3>
                  <p className="body card__text">{t(`practices.${p.key}.body`)}</p>
                  <Link href={p.href} className={`btn ${p.button}`}>
                    {t(`practices.${p.key}.cta`)} <span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="section">
        <div className="container stack">
          <SectionHead title={t("services.title")}>
            <Link href="/services" className="text-link">
              {common("viewAllServices")} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </SectionHead>
          <Rows items={services} detailed />
        </div>
      </section>

      {/* Sectors */}
      <section className="section">
        <div className="container tags-wrap">
          <h2 className="meta">{t("sectors.label")}</h2>
          <ul className="tags" role="list">
            {sectors.map((s, i) => (
              <li key={s}>
                {i > 0 ? <span className={`dot dot--sm dot--${accentAt(i - 1)}`} aria-hidden="true" /> : null}
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected work */}
      <section className="section">
        <div className="container stack">
          <SectionHead label={t("work.label")} title={t("work.title")}>
            <Link href="/insights" className="text-link">
              {common("viewAllWork")} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </SectionHead>
          <div className="work-grid">
            {featuredCaseStudies.map((study) => (
              <WorkCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section">
        <div className="container stack">
          <SectionHead label={t("clients.label")} title={t("clients.title")} />
        </div>
        <ClientMarquee />
      </section>

      <CtaBand title={t("cta.title")} body={t("cta.body")} />
    </>
  );
}
