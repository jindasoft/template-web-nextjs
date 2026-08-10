import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGE_URL || "localhost",
        port: "",
        pathname: "/**",
      },
    ],
  },
	async redirects() {
		return [
			{
				source: '/en/:path*',
				destination: '/:path*',
				permanent: true,
			},
		];
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
