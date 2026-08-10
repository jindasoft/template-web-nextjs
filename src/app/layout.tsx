// import GoogleAnalytics from "@/core/components/generals/google_analytics";
import { ReactNode } from "react";
import "reflect-metadata";

type Props = {
  readonly children: ReactNode;
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