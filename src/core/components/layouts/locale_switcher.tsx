"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./locale_switcher_select";

export default function LocaleSwitcher() {
  const t = useTranslations("locale_switcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect value={locale} label={t("label")}>
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {t(`locales.${locale}`)}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
