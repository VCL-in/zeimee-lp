import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zeimee.com/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://zeimee.com/company",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
