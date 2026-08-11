export const revalidate = 3600;

import { Metadata } from "next";
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from "@/i18n/routing";

type Props = Readonly<{
  params: Promise<{ locale: Locale }>;
}>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isDefaultLocale = locale === routing.defaultLocale;
  const canonicalPath = isDefaultLocale ? "/" : `/${locale}`;
  const t = await getTranslations({ locale, namespace: 'home_page' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/",
        th: "/th",
        "x-default": "/",
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

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home_page' });

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
