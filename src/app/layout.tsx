import type { Metadata } from "next";
import "@fontsource/line-seed-jp/japanese-400.css";
import "@fontsource/line-seed-jp/japanese-700.css";
import "@fontsource/line-seed-jp/japanese-800.css";
import "@fontsource/line-seed-jp/latin-400.css";
import "@fontsource/line-seed-jp/latin-700.css";
import "@fontsource/line-seed-jp/latin-800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zeimee.com"),
  title: {
    default: "Zeimee | 税理士事務所の月次業務をAIで支援",
    template: "%s | Zeimee",
  },
  description:
    "Zeimeeは、税理士事務所の明細・証憑・未消込・要確認を一つのレビューに集約し、月次業務の判断と処理をAIで支援するサービスです。",
  verification: {
    google: "v3B1BTXFCEKFxbEFjk96Aot0uYHoBZoB7iTsmEUNQO8",
  },
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
