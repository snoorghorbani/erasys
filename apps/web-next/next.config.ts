import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui", "@repo/shared"],
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
