import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: "https://zeimee.com/sitemap.xml", host: "https://zeimee.com" };
}
