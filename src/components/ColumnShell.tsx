import Link from "next/link";
import type { ReactNode } from "react";
import { siteFontClass } from "@/lib/site-fonts";
import { SiteChromeFooter, SiteChromeHeader } from "./SiteChrome";
import styles from "./column.module.css";

export function ColumnShell({
  children,
  showBottomCta = true,
}: {
  children: ReactNode;
  showBottomCta?: boolean;
}) {
  return (
    <div className={`sc ${siteFontClass} ${styles.page}`}>
      <a className="skip-link" href="#column-main">
        本文へ移動
      </a>
      <SiteChromeHeader />
      <main id="column-main" className={styles.main}>
        <nav className={styles.breadcrumb} aria-label="パンくず">
          <Link href="/">ホーム</Link>
          <span aria-hidden="true">/</span>
          <Link href="/column">コラム</Link>
        </nav>
        {children}
        {showBottomCta && (
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
            <Link className="sc-pill sc-lg sc-white sc-arrow" href="/#contact">
              資料DL・面談予約
            </Link>
          </aside>
        )}
      </main>
      <SiteChromeFooter />
    </div>
  );
}
