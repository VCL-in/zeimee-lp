import type { MetadataRoute } from "next";
import { columns } from "@/lib/columns";
import { toolPages } from "@/lib/tool-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    "",
    "/security",
    ...toolPages.map((t) => `/tools/${t.slug}`),
    "/cases/field-development",
  ].map((path) => ({
    url: `https://zeimee.com${path}`,
    lastModified: "2026-09-09",
  }));
  const latestColumn = columns[0]?.updatedAt ?? "2026-10-09";
  return [
    ...pages,
    { url: "https://zeimee.com/column", lastModified: latestColumn },
    ...columns.map((c) => ({
      url: `https://zeimee.com/column/${c.slug}`,
      lastModified: c.updatedAt,
    })),
  ];
}
