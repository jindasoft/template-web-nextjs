import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

type Props = Readonly<{
  params: Promise<{ locale: Locale }>;
}>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isDefaultLocale = locale === routing.defaultLocale;
  const canonicalPath = isDefaultLocale ? "/about" : `/${locale}/about`;
  const t = await getTranslations({ locale, namespace: "about_page" });

  return {
    title: t("title"),
    description: t("description"),
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
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about_page" });

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}
