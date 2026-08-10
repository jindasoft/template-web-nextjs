export const revalidate = 3600;

import { Locale } from 'next-intl';
// import { getTranslations } from 'next-intl/server';

// import { host } from '@/configs/config';
// import { routing } from '@/i18n/routing';
// import { constructMetadata } from '@/utils/seo';

type Props = Readonly<{
  params: Promise<{ locale: Locale }>;
}>;

export async function generateMetadata({ params }: Props) {
  // const { locale } = await params;
  // const t = await getTranslations({ locale, namespace: 'home_page' });

  const pathname = '';
  // const currentUrl = `${host}/${locale}${pathname}`;

  // return constructMetadata({
  //   title: t('title_fallback'),
  //   description: t('description_fallback'),
  //   url: currentUrl,
  //   locale: locale,
  //   image: '/images/og-image.webp',
  // });
}

export default async function IndexPage({ params }: Props) {
  return (
    <div>
      <h1>Index Page</h1>
    </div>
  );
}
