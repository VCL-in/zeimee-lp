import type { Metadata } from "next";
import { columnUrl, type ColumnMeta } from "./columns";

export function createColumnMetadata(column: ColumnMeta): Metadata {
  return {
    title: column.title,
    description: column.description,
    alternates: { canonical: columnUrl(column.id) },
    openGraph: {
      title: column.title,
      description: column.description,
      url: columnUrl(column.id),
      type: "article",
      publishedTime: column.publishedAt,
      modifiedTime: column.updatedAt,
      locale: "ja_JP",
      siteName: "Zeimee",
      images: column.coverImage
        ? [
            {
              url: column.coverImage,
              width: 1200,
              height: 630,
              alt: column.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: column.title,
      description: column.description,
      images: column.coverImage ? [column.coverImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}
