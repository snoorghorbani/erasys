import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["@repo/ui", "@repo/api", "@repo/assets"],
	experimental: {
		externalDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.hunqz.com",
				pathname: "/img/usr/original/0x0/**",
			},
		],
	},
};

export default nextConfig;
