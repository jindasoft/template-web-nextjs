import type { MetadataRoute } from "next";
import { host, robotsIndex } from "@/configs/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: robotsIndex ? "/" : [],
      disallow: robotsIndex ? "/private/" : "/",
    },
    sitemap: `${host}/sitemap.xml`,
  };
}
