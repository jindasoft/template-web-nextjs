export const revalidate = 3600;

import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Props = Readonly<{
  params: Promise<{ locale: Locale }>;
}>;

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home_page' });

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
