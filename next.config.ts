import type { NextConfig } from "next";
import {
  SERVICE_DOCUMENT_FILENAME,
  SERVICE_DOCUMENT_PATH,
} from "./src/lib/document-offer";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: SERVICE_DOCUMENT_PATH,
        headers: [
          {
            key: "Content-Disposition",
            value: `attachment; filename="Zeimee-service-guide.pdf"; filename*=UTF-8''${encodeURIComponent(SERVICE_DOCUMENT_FILENAME)}`,
          },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      ...["www.zeimee.com", "zeimee.jp", "www.zeimee.jp"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://zeimee.com/:path*",
        permanent: true,
      })),
      { source: "/lp", destination: "/", permanent: true },
      {
        source: "/column/accounting-firm-bookkeeping-automation-comparison",
        destination: "/column/10001",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
