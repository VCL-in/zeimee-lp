/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation replaces the previous homepage hash when returning to the contact section. */
import Link from "next/link";
import type { ReactNode } from "react";
import { siteFontClass } from "@/lib/site-fonts";
import { SiteChromeFooter, SiteChromeHeader } from "./SiteChrome";
import styles from "./detail.module.css";
export function DetailShell({ children, label, casePage = false }: { children: ReactNode; label: string; casePage?: boolean }) {
  return <div className={`sc ${siteFontClass} ${styles.page}`}>
    <a className={styles.skip} href="#detail-main">本文へ移動</a>
    <SiteChromeHeader />
    <main id="detail-main" className={`${styles.main} ${casePage ? styles.caseMain : ""}`}>
      <nav className={styles.breadcrumb} aria-label="パンくず"><Link href="/">ホーム</Link><span aria-hidden="true">/</span><span>{label}</span></nav>
      {children}
    </main>
    <aside className={styles.cta}><h2>あなたの現場の業務も、<br />ご相談ください。</h2><a className="sc-pill sc-lg sc-white sc-arrow" href="/#contact">資料DL・面談予約</a></aside>
    <SiteChromeFooter />
  </div>;
}
