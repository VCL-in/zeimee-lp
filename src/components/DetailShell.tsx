/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation replaces the previous homepage hash when returning to the contact section. */
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/app/lp/SiteHeader";
import { BrandLogo } from "@/app/lp/BrandLogo";
import styles from "./detail.module.css";
export function DetailShell({ children, label, casePage = false }: { children: ReactNode; label: string; casePage?: boolean }) {
  return <div className={styles.page}>
    <a className={styles.skip} href="#detail-main">本文へ移動</a>
    {casePage ? <SiteHeader homePath="/"><Link className="brand" href="/" aria-label="Zeimee トップへ"><BrandLogo /></Link></SiteHeader> : <header className={styles.header}><Link href="/" aria-label="Zeimee トップへ"><BrandLogo /></Link><a className={styles.button} href="/#contact">資料ダウンロード <span aria-hidden="true">↗</span></a></header>}
    <main id="detail-main" className={`${styles.main} ${casePage ? styles.caseMain : ""}`}>
      {!casePage && <nav className={styles.breadcrumb} aria-label="パンくず"><Link href="/">ホーム</Link><span aria-hidden="true">/</span><span>{label}</span></nav>}
      {children}
      <aside className={styles.cta}><h2>あなたの事務所の業務も、<br />ご相談ください。</h2><a className={styles.button} href="/#contact">資料ダウンロード（無料） <span aria-hidden="true">↗</span></a></aside>
    </main>
    <footer className={styles.footer}><Link href="/">Zeimee トップ</Link><a href="/#company-info">会社情報</a><Link href="/column">コラム</Link><Link href="/security">セキュリティ</Link><small>© 2026 株式会社Zeimee</small></footer>
  </div>;
}
