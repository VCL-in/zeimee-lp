import type { NextConfig } from "next";

const companySiteOrigin =
  process.env.COMPANY_SITE_ORIGIN ?? "https://zeimee-hp.vercel.app";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/hero-ui-flow-poster.jpg",
        search: "?v=aio-v1",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/lp",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/company",
        destination: `${companySiteOrigin}/`,
      },
      {
        source: "/company/:path*",
        destination: `${companySiteOrigin}/:path*`,
      },
    ];
  },
};

export default nextConfig;
