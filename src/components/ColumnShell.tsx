import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/app/lp/SiteHeader";
import { BrandLogo } from "@/app/lp/BrandLogo";
import styles from "./column.module.css";

export function ColumnShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#column-main">
        本文へ移動
      </a>
      <SiteHeader homePath="/">
        <Link className="brand" href="/" aria-label="Zeimee トップへ">
          <BrandLogo />
        </Link>
      </SiteHeader>
      <main id="column-main" className={styles.main}>
        <nav className={styles.breadcrumb} aria-label="パンくず">
          <Link href="/">ホーム</Link>
          <span aria-hidden="true">/</span>
          <Link href="/column">コラム</Link>
        </nav>
        {children}
        <aside className={styles.bottomCta} aria-label="Zeimeeの資料案内">
          <div>
            <p className={styles.eyebrow}>NEXT STEP</p>
            <h2>
              あなたの事務所に合う、
              <br />
              AI活用の進め方を。
            </h2>
            <p>
              現場に合わせた業務改善の考え方と導入事例を、資料にまとめました。
            </p>
          </div>
          <Link className={styles.ctaButton} href="/#contact">
            資料をダウンロード <ArrowUpRight />
          </Link>
        </aside>
      </main>
      <footer className={styles.footer}>
        <Link
          className={styles.footerBrand}
          href="/"
          aria-label="Zeimee トップへ"
        >
          <BrandLogo />
        </Link>
        <nav aria-label="フッターナビゲーション">
          <Link href="/column">コラム</Link>
          <Link href="/security">セキュリティ</Link>
          <Link href="/#company-info">会社情報</Link>
        </nav>
        <small>© 2026 株式会社Zeimee</small>
      </footer>
    </div>
  );
}
