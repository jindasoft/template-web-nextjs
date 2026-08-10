// import GoogleAnalytics from "@/core/components/generals/google_analytics";
import { Metadata } from "next";
import { ReactNode } from "react";
import { host } from "@/configs/config";
import "reflect-metadata";

type Props = {
  readonly children: ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(host),
  title: {
    default: "Template Web Next.js",
    template: "%s | Template Web Next.js",
  },
  openGraph: {
    type: "website",
    siteName: "Template Web Next.js",
    title: "Template Web Next.js",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Template Web Next.js",
    images: ["/og-image.png"],
  },
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <>
      {children}
      {/* <GoogleAnalytics /> */}
    </>
  );
}
