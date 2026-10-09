export type ColumnMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
};

// 新しい記事は先頭に追加する。一覧・サイトマップはこの配列から生成される。
export const columns: ColumnMeta[] = [
  {
    slug: "accounting-firm-bookkeeping-automation-comparison",
    title:
      "【2026年版】会計事務所向け 記帳自動化・仕訳AIツール比較10選｜STREAMED・弥生・freee・MFの違いと選び方",
    description:
      "会計事務所・税理士事務所向けの記帳自動化・仕訳AI・AI-OCRサービスを比較。STREAMED、弥生 記帳代行支援サービス、freee、マネーフォワード、JDL、MJS、TKCなどの特徴と料金、事務所に合う選び方を公式情報をもとに解説します。",
    category: "記帳自動化",
    publishedAt: "2026-10-09T00:00:00+09:00",
    updatedAt: "2026-10-09T00:00:00+09:00",
  },
];

export const COLUMN_AUTHOR = {
  name: "Zeimee編集部",
  url: "https://zeimee.com/column",
};

export function columnUrl(slug: string) {
  return `https://zeimee.com/column/${slug}`;
}

export function getColumn(slug: string) {
  const column = columns.find((c) => c.slug === slug);
  if (!column) throw new Error(`Unknown column: ${slug}`);
  return column;
}
