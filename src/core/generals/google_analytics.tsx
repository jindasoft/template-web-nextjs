import Script from "next/script";

import { gaID } from "@/configs/config";

export default function GoogleAnalytics() {
  if (!gaID) {
    return null;
  }

  const gaUrl = `https://www.googletagmanager.com/gtag/js?id=${gaID}`;

  return (
    <>
      {/* Must run before the gtag.js request so it denies storage by default until CookieConsent grants it. */}
      <Script id="google-analytics-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });
        `}
      </Script>
      <Script src={gaUrl} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${gaID}');
        `}
      </Script>
    </>
  );
}
