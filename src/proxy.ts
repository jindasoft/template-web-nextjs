import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(en|th)/:path*",
    "/((?!api|trpc|_next|_vercel|.*\\.(?:ico|png|jpg|jpeg|webp|svg|css|js|woff2?|txt|json)).*)",
  ],
};
