"use client";

import { useTranslations } from "next-intl";

import { OPEN_COOKIE_CONSENT_EVENT } from "@/core/generals/cookie_consent";
import { Link } from "@/i18n/navigation";
import Container from "./container";

// Edit/add entries here as new pages become available; labels resolve from the "navigation" namespace.
const EXPLORE_LINKS = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const tMeta = useTranslations("meta");
  const tNav = useTranslations("navigation");
  const tFooter = useTranslations("footer");
  const tCookie = useTranslations("cookie_consent");

  return (
    <footer className="bg-(--background-primary) text-slate-600 dark:text-gray-400">
      <Container className="grid gap-8 py-10 sm:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
            <span>{tMeta("title")}</span>
          </Link>
          <p className="mt-1 text-sm">{tMeta("subtitle")}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
            {tFooter("explore_heading")}
          </h2>
          <ul className="mt-3 space-y-2">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-slate-900 dark:hover:text-gray-200"
                >
                  {tNav(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
            {tFooter("legal_heading")}
          </h2>
          <ul className="mt-3 space-y-2">
            {/* Add privacy policy / terms of service links here once those pages exist. */}
            <li>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_CONSENT_EVENT))}
                className="text-sm transition-colors hover:text-slate-900 dark:hover:text-gray-200"
              >
                {tCookie("manage")}
              </button>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-200 dark:border-slate-700">
        <Container className="py-4 text-xs">
          &copy; {currentYear} {tMeta("title")}. {tFooter("rights_reserved")}
        </Container>
      </div>
    </footer>
  );
}
