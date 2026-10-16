import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const imageHostname = process.env.NEXT_PUBLIC_IMAGE_URL;

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: imageHostname
      ? [
          {
            protocol: "https",
            hostname: imageHostname,
            pathname: "/**",
          },
        ]
      : [],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
