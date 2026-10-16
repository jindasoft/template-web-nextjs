import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "th"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about": "/about",
  },
});

export const openGraphLocales: Record<string, string> = {
  en: "en_US",
  th: "th_TH",
};
