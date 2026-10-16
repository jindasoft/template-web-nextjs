import type { MetadataRoute } from "next";
import type { Locale } from "next-intl";
import { host } from "@/configs/config";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    ...getEntries("/"),
    ...getEntries("/about"),
  ];
}

function getEntries(href: string) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)]),
      ),
    },
  }));
}

function getUrl(href: string, locale: Locale) {
  const pathname = getPathname({
    locale,
    href: href as Parameters<typeof getPathname>[0]["href"],
  });
  return host + pathname;
}
