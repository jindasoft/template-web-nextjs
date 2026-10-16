import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import {  routing } from "@/i18n/routing";
import AboutPage from "@/modules/about/components/about_page";

type Props = Readonly<{
  params: Promise<{ locale: Locale }>;
}>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isDefaultLocale = locale === routing.defaultLocale;
  const canonicalPath = isDefaultLocale ? "/about" : `/${locale}/about`;
  const t = await getTranslations({ locale, namespace: "about_page" });
  const title = t("title");
  const description = t("description");
  // const openGraphLocale = openGraphLocales[locale] ?? "en_US";

  return {
    title: title,
    description: description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/about",
        th: "/th/about",
        "x-default": "/about",
      },
    },
    // openGraph: {
    //   locale,
    //   url: canonicalPath,
    //   title: t('title'),
    //   images: "/og-image.png",
    // },
    //  twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: ["/og-image.png"],
    // },
  };
}

export default async function About({ params }: Props) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}
