import type { Metadata } from "next";
import "@fontsource/line-seed-jp/japanese-400.css";
import "@fontsource/line-seed-jp/japanese-700.css";
import "@fontsource/line-seed-jp/japanese-800.css";
import "@fontsource/line-seed-jp/latin-400.css";
import "@fontsource/line-seed-jp/latin-700.css";
import "@fontsource/line-seed-jp/latin-800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "税理士・会計事務所のAI導入・開発支援｜Zeimee",
  description:
    "会計士事務所・税理士事務所に特化したFDE。現場の業務理解からAIの設計・実装、導入後の改善まで、Zeimeeが伴走します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
