import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...["www.zeimee.com", "zeimee.jp", "www.zeimee.jp"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://zeimee.com/:path*",
        permanent: true,
      })),
      { source: "/lp", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
