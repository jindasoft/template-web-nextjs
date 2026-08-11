import Script from "next/script";

import { gaID } from "@/configs/config";

export default function GoogleAnalytics() {
  const gaUrl = `https://www.googletagmanager.com/gtag/js?id=${gaID}`;
  return (
    <>
      <Script src={gaUrl} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaID}');
        `}
      </Script>
    </>
  );
}
