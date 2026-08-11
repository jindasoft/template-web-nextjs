// src/app/[locale]/layout.tsx
import { Poppins, Noto_Sans_Thai } from 'next/font/google';
import { Metadata } from 'next';
import { Locale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { host } from '@/configs/config';
import Navigation from '@/core/components/layouts/navigation';
import { routing } from '@/i18n/routing';
import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
});

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const siteTitle = t('title');

  return {
    metadataBase: new URL(host),
    title: {
      default: siteTitle,
      template: `%s | ${siteTitle}`,
    },
    openGraph: {
      type: 'website',
      siteName: siteTitle,
      title: siteTitle,
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      images: ['/og-image.png'],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const supportedLocales = routing.locales as ReadonlyArray<Locale>;

  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${poppins.variable} ${notoSansThai.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
