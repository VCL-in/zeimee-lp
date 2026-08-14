import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zeimee.com/",
      lastModified: new Date("2026-08-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://zeimee.com/company",
      lastModified: new Date("2026-08-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
