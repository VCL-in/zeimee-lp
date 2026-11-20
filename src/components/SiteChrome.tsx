/* eslint-disable @next/next/no-html-link-for-pages -- トップの節へ戻るときは、通常のページ移動でハッシュを効かせる。 */
import Image from "next/image";
import Link from "next/link";
import "./site-chrome.css";

// 下層ページ共通のヘッダーとフッター。見た目はトップ（src/app/lp/renewal.css）に合わせている。
function Logo() {
  return (
    <Image
      className="sc-logo"
      src="/lp/zeimee-logo.png"
      alt="Zeimee"
      width={1397}
      height={289}
      sizes="160px"
    />
  );
}

export function SiteChromeHeader({
  cta = { href: "/#contact", label: "資料DL・面談予約" },
}: {
  cta?: { href: string; label: string };
}) {
  return (
    <header className="sc-header">
      <a href="/" aria-label="Zeimee トップへ">
        <Logo />
      </a>
      <nav aria-label="メインナビゲーション">
        <a href="/#about">Zeimeeとは</a>
        <a href="/#business">事業内容</a>
        <a href="/#reasons">選ばれる理由</a>
        <a href="/#cases">導入事例</a>
        <a href="/#news">お知らせ</a>
        <Link href="/column">コラム</Link>
      </nav>
      <a className="sc-pill" href={cta.href}>
        {cta.label}
      </a>
    </header>
  );
}

export function SiteChromeFooter() {
  return (
    <footer className="sc-footer">
      <div className="sc-wrap">
        <div className="sc-cols">
          <a href="/" aria-label="Zeimee トップへ">
            <Logo />
          </a>
          <div>
            <h3>サービス</h3>
            <ul>
              <li>
                <a href="/#about">Zeimeeとは</a>
              </li>
              <li>
                <a href="/#reasons">選ばれる理由</a>
              </li>
              <li>
                <a href="/#cases">導入事例</a>
              </li>
              <li>
                <a href="/#contact">資料DL・面談予約</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>会社</h3>
            <ul>
              <li>
                <Link href="/column">コラム</Link>
              </li>
              <li>
                <a href="/#company-info">会社情報</a>
              </li>
              <li>
                <Link href="/security">セキュリティ</Link>
              </li>
              <li>
                <a href="/#news">お知らせ</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="sc-copy">
          株式会社Zeimee　© {new Date().getFullYear()} Zeimee Inc.
        </p>
      </div>
    </footer>
  );
}
