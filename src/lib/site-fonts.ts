import { Inter, Noto_Sans_JP } from "next/font/google";

// トップと下層ページで共通の書体。
export const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});
export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const siteFontClass = `${notoSansJp.variable} ${inter.variable}`;
