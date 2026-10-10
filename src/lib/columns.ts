export type ColumnMeta = {
  id: string;
  title: string;
  titleParts?: string[];
  description: string;
  category: string;
  coverTitle?: string;
  coverSubtitle?: string;
  coverLabel?: string;
  coverImage?: string;
  coverDesign?: {
    intro: string;
    title: string;
    count?: number;
    message: string;
    caption: string;
    illustration?: string;
  };
  publishedAt: string;
  updatedAt: string;
};

// 記事IDは10001から連番で採番し、公開後は変更・再利用しない。
// 新しい記事は先頭に追加する。一覧・サイトマップはこの配列から生成される。
export const columns: ColumnMeta[] = [
  {
    id: "10001",
    title: "記帳自動化ツールおすすめ10選を比較！選び方も解説",
    titleParts: ["記帳自動化ツール", "おすすめ10選を比較！", "選び方も解説"],
    description:
      "会計事務所・税理士事務所向けの記帳自動化ツールと導入支援10サービスを公式情報で調査比較。Zeimee、STREAMED、弥生、freeeなどの料金・対応会計ソフト・AIが担う工程・残る確認作業を整理し、事務所に合う選び方を解説します。",
    category: "記帳自動化",
    coverTitle: "記帳自動化ツール",
    coverSubtitle: "会計事務所のためのツール比較",
    coverLabel: "10の選択肢と、事務所に合う選び方",
    coverImage: "/images/column/bookkeeping-comparison-og-v2.png",
    coverDesign: {
      intro: "特徴・料金・選び方をわかりやすく解説",
      title: "記帳自動化ツール",
      count: 10,
      message: "徹底比較",
      caption: "選び方のポイントも解説",
      illustration: "/images/column/bookkeeping-ai-illustration-v2.webp",
    },
    publishedAt: "2026-10-09T00:00:00+09:00",
    updatedAt: "2026-10-10T00:00:00+09:00",
  },
];

export const COLUMN_AUTHOR = {
  name: "Zeimee編集部",
  url: "https://zeimee.com/column/10001#editorial-policy",
};

export function columnUrl(id: string) {
  return `https://zeimee.com/column/${id}`;
}

export function getColumn(id: string) {
  const column = columns.find((c) => c.id === id);
  if (!column) throw new Error(`Unknown column: ${id}`);
  return column;
}
