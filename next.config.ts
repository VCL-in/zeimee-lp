import type { NextConfig } from "next";

const companySiteOrigin =
  process.env.COMPANY_SITE_ORIGIN ?? "https://zeimee-hp.vercel.app";

const nextConfig: NextConfig = {
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
