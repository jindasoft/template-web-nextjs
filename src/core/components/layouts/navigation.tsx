"use client";

import { useTranslations } from "next-intl";
import NavigationLink from "./navigation_link";
import LocaleSwitcher from "./locale_switcher";


export default function Navigation() {
  const t = useTranslations("navigation");

  return (
    <div className="bg-slate-800">
      <nav className="container flex justify-between p-2 text-white mx-auto">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/about">{t("about")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}