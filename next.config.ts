import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // GitHub avatars are the only remote images the site loads.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
