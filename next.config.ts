
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // This is required to get the lang parameter in the page props
  // and to generate static pages for each language.
  // We can't use the i18n support from Next.js because it doesn't
  // work with the app router yet.
  async rewrites() {
    return [
      {
        source: '/:lang(en|es|fr|de|ar|zh)/:path*',
        destination: '/:path*',
      },
    ]
  },
};

export default nextConfig;
