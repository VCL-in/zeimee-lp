import type { MetadataRoute } from "next";
import { toolPages } from "@/lib/tool-pages";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/security", ...toolPages.map((t) => `/tools/${t.slug}`), "/cases/field-development"].map((path) => ({ url: `https://zeimee.com${path}`, lastModified: "2026-09-09" }));
}
