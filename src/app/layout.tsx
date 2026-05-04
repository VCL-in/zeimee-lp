import type { Metadata } from "next";
import "@fontsource/line-seed-jp/japanese-400.css";
import "@fontsource/line-seed-jp/japanese-700.css";
import "@fontsource/line-seed-jp/japanese-800.css";
import "@fontsource/line-seed-jp/latin-400.css";
import "@fontsource/line-seed-jp/latin-700.css";
import "@fontsource/line-seed-jp/latin-800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "zeimee | 税理士向け月次業務自動化サービス",
  description:
    "zeimeeは、税理士事務所の記帳代行・証憑管理・消込・月次チェックをAIで支援する月次業務自動化サービスです。",
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
