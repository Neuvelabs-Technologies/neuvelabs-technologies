"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const NAV = [
  { key: "services", href: "/services", match: ["/services", "/digital-engineering", "/specialist-services"] },
  { key: "industries", href: "/industries" },
  { key: "insights", href: "/insights" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

function isActive(pathname, item) {
  const prefixes = item.match || [item.href];
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export default function Header() {
  const t = useTranslations("nav");
  const tl = useTranslations("language");
  const pathname = usePathname();
  const router = useRouter();
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const setOpen = (value) => setOpenOn(value ? pathname : null);
  const [scrolled, setScrolled] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpenOn(null);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const switchLanguage = () => {
    document.cookie = `NEXT_LOCALE=${tl("switchToCode")}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => router.refresh());
  };

  return (
    <header className={`site-header${scrolled || open ? " site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label={t("home")}>
          <Image src="/logo-ink.svg" alt="Neuve Labs" width={1416} height={317} priority />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          onClick={() => setOpen(!open)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>

        <nav id="site-nav" className="site-nav" aria-label={t("primary")} data-open={open}>
          <ul className="site-nav__list">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="site-nav__link"
                  aria-current={isActive(pathname, item) ? "page" : undefined}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="lang-switch"
            onClick={switchLanguage}
            lang={tl("switchToCode")}
            aria-label={tl("label")}
          >
            {tl("switchTo")}
          </button>
        </nav>
      </div>
    </header>
  );
}
