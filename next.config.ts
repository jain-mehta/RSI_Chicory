import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
  experimental: {
    allowedDevOrigins: ["*"],
  },
  async headers() {
    return [
      /* 1️⃣  Serve sitemap.xml with correct headers */
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
        ],
      },
      /* 2️⃣  Add X-Robots-Tag to EVERY route */
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
