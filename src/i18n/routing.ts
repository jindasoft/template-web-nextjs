import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en-us", "th-th"],
  defaultLocale: "en-us",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
  },
});
