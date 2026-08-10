import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { routing } from "@/i18n/routing";

function pickPreferredLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) {
    return routing.defaultLocale;
  }

  const supported = new Set(
    routing.locales.map((locale) => locale.toLowerCase()),
  );
  const defaultLocale = routing.defaultLocale.toLowerCase();

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tagPart, ...params] = part.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const q = qParam ? Number(qParam.trim().slice(2)) : 1;
      return {
        tag: tagPart.toLowerCase(),
        q: Number.isFinite(q) ? q : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const item of ranked) {
    if (!item.tag || item.tag === "*") {
      continue;
    }

    if (supported.has(item.tag)) {
      return item.tag;
    }

    const base = item.tag.split("-")[0];
    if (supported.has(base)) {
      return base;
    }
  }

  return defaultLocale;
}

// This page only renders when the app is built statically (output: 'export')
export default async function RootPage() {
  const acceptLanguage = (await headers()).get("accept-language");
  const locale = pickPreferredLocale(acceptLanguage);

  redirect(`/${locale}`);
}