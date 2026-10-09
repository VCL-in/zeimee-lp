import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { toolPages } from "@/lib/tool-pages";
import {
  BookOpen,
  ArrowUpRight,
  SlidersHorizontal,
  Handshake,
  MessagesSquare,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { ContactForm } from "./ContactForm";
import { SiteHeader } from "./SiteHeader";
import { MotionController } from "./MotionController";
import { HeroVisual } from "./HeroVisual";
import { TeamIntroduction, CompanyInformation } from "./CompanySections";

export const metadata: Metadata = {
  title: "税理士・会計事務所のAI導入・開発支援｜Zeimee",
  description:
    "会計士・税理士事務所に特化したFDE。現場の業務理解からAI・システムの設計、実装、定着まで。事務所に合う仕事のしくみを、一緒につくります。",
  alternates: { canonical: "https://zeimee.com/" },
  openGraph: {
    title: "税理士・会計事務所のAI導入・開発支援｜Zeimee",
    description:
      "会計士・税理士事務所のためのFDE。業務を理解し、つくり、使われるまで伴走する。",
    url: "https://zeimee.com/",
    locale: "ja_JP",
    type: "website",
    siteName: "Zeimee",
  },
  twitter: {
    card: "summary_large_image",
    title: "税理士・会計事務所のAI導入・開発支援｜Zeimee",
    description:
      "会計士・税理士事務所のためのFDE。業務を理解し、つくり、使われるまで伴走する。",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zeimee.com/#organization",
      name: "株式会社Zeimee",
      legalName: "株式会社Zeimee",
      url: "https://zeimee.com/",
      logo: "https://zeimee.com/lp/zeimee-logo.png",
      address: {
        "@type": "PostalAddress",
        addressCountry: "JP",
        addressRegion: "東京都",
        addressLocality: "調布市",
        streetAddress: "調布ヶ丘1-5-1 電気通信大学西11号館4階411号室",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://zeimee.com/#website",
      url: "https://zeimee.com/",
      name: "Zeimee",
      inLanguage: "ja",
      publisher: { "@id": "https://zeimee.com/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://zeimee.com/#service",
      name: "Zeimee",
      url: "https://zeimee.com/",
      serviceType: "税理士・会計事務所向けAI導入・開発支援（FDE）",
      description:
        "会計士・税理士事務所の業務を理解し、AI・システムの設計、実装、定着まで伴走するサービスです。",
      provider: { "@id": "https://zeimee.com/#organization" },
      areaServed: "JP",
    },
  ],
};

const faqs = [
  [
    "何から相談すればよいですか？",
    "資料整理や転記など、困っている業務をお聞かせください。対象が決まっていなくても相談できます。",
  ],
  [
    "いま使っている会計ソフトでも相談できますか？",
    "はい。ご利用中のソフトと対象業務を確認し、連携・取込方法をご提案します。",
  ],
  [
    "AIがすべて自動で判断するのですか？",
    "AIが候補を作成し、担当者が確認・承認します。確認範囲は事務所の業務に合わせて設計します。",
  ],
  [
    "費用と導入期間はどのくらいですか？",
    "対象業務・帳票・連携要件を確認し、費用と日程をお見積もりします。",
  ],
  [
    "顧問先の情報はどのように扱いますか？",
    "アクセス権限、AIへの送信範囲、保存・削除条件を導入前に確認し、事務所の要件に合わせて設計します。",
  ],
];
function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Zeimee トップへ">
      <BrandLogo />
    </a>
  );
}
function ContactBanner({ id }: { id: string }) {
  return (
    <section className="contact-banner" id={id} aria-label="資料ダウンロード">
      <div className="section-shell contact-banner-inner">
        <h2>
          AI導入の進め方・事例・費用感がわかる資料を無料でお届け。
          <wbr />
          今なら24時間以内の面談予約で初期費用5万円割引。
        </h2>
        <div className="contact-banner-panel">
          <a className="button" href="#contact">
            資料ダウンロード（無料）
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replaceAll("<", "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        本文へ移動
      </a>
      <SiteHeader>
        <Brand />
      </SiteHeader>
      <MotionController />
      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-layout">
            <div className="hero-message">
              <p className="eyebrow hero-enter">
                会計士・税理士事務所に特化したFDE
              </p>
              <div className="hero-copy hero-enter">
                <h1>
                  会計の現場から、
                  <br />
                  <span className="keep">手作業をゼロに。</span>
                </h1>
                <div className="hero-description">
                  <a className="button" href="#contact">
                    資料ダウンロード（無料）
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section
          className="about-section section-shell content-section"
          id="about"
        >
          <h2>Zeimeeとは</h2>
          <div className="about-grid" data-reveal>
            <div>
              <h3>あなたの事務所専属のAI開発チーム</h3>
              <p>
                会計士・税理士事務所に特化したFDE。業務の整理から、AI・システムの開発、運用改善まで支援します。
              </p>
              <p className="about-definition">
                FDE：現場の課題を、設計・開発まで担うエンジニア。
              </p>
            </div>
            <Image
              src="/lp/fieldwork-lineart.png"
              alt="資料を見ながら業務を検討する二人"
              width={1536}
              height={1024}
              sizes="(max-width: 800px) 90vw, 450px"
            />
          </div>
          <TeamIntroduction />
        </section>

        <section className="reasons-section" id="reasons">
          <div className="section-shell content-section">
            <h2>Zeimeeが選ばれる理由</h2>
            <div className="reason-grid" data-reveal>
              {[
                {
                  icon: BookOpen,
                  title: "会計業務特化のFDE",
                  benefit: "会計実務がわかるから、課題がすぐに伝わる。",
                },
                {
                  icon: SlidersHorizontal,
                  title: "事務所専用のカスタマイズ開発",
                  benefit: "いつもの業務に合う仕組みをつくれる。",
                },
                {
                  icon: MessagesSquare,
                  title: "対面出社でのヒアリング・開発",
                  benefit: "現場を見ながら、細かな要望まで形に。",
                },
                {
                  icon: Handshake,
                  title: "対面での徹底サポート",
                  benefit: "操作の不安を解消し、日々の業務に定着。",
                },
              ].map(({ icon: Icon, title, benefit }, i) => (
                <article className="reason-card" key={title}>
                  <span className="reason-index">0{i + 1}</span>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{benefit}</p>
                </article>
              ))}
            </div>
            <div className="reason-promise" data-reveal>
              <h3>
                作っておわりではなく、
                <br />
                <span>事務所に浸透するAIツールを開発</span>
              </h3>
              <Image
                src="/lp/fieldwork-lineart.png"
                alt="事務所スタッフとエンジニアが資料を見ながら相談する様子"
                width={1536}
                height={1024}
                sizes="(max-width: 800px) 90vw, 540px"
              />
            </div>
          </div>
        </section>

        <ContactBanner id="contact-first" />

        <section className="content-section section-shell" id="tools">
          <h2>導入ツール一覧</h2>
          <div className="tools-grid">
            {[
              {
                name: "記帳自動化AI",
                image: "bookkeeping",
                description:
                  "証憑から仕訳を作成。確認から会計ソフトへの反映まで支援します。",
              },
              {
                name: "生産性管理ダッシュボード",
                image: "productivity",
                description:
                  "担当者や業務ごとの作業時間を可視化。改善すべき業務が見えます。",
              },
              {
                name: "証憑収集AI",
                image: "collection",
                description:
                  "必要な資料と提出状況を一元管理。顧問先への確認の手間を減らします。",
              },
              {
                name: "顧問先管理",
                image: "clients",
                description:
                  "顧問先の情報、担当者、業務状況をひとつに。事務所内で共有できます。",
              },
              {
                name: "証憑フォルダ分けAI",
                image: "folders",
                description:
                  "証憑の内容を読み取り、自動で分類。資料整理の手間を減らします。",
              },
              {
                name: "法人税申告チェックAI",
                image: "tax-check",
                description:
                  "申告書と関連資料を照合。確認が必要な箇所を見つける作業を支援します。",
              },
              {
                name: "会計ソフト引越しAI",
                image: "migration",
                description:
                  "勘定科目やデータ形式を変換。会計ソフトの移行作業を支援します。",
              },
              {
                name: "相続税取引履歴作成AI",
                image: "inheritance",
                description:
                  "通帳の入出金を読み取り、時系列に整理。相続調査用の取引履歴を作成します。",
              },
              {
                name: "決算書作成AI",
                image: "financial-statements",
                description:
                  "会計データをもとに、貸借対照表や損益計算書を作成。決算書の作成業務を支援します。",
              },
            ].map(({ name, image, description }) => (
              <article className="tool-card" key={name} data-reveal>
                <a className="tool-card-link" href="#contact" aria-label={`${name}の資料をダウンロードする`}>
                <Image
                  className="tool-preview"
                  src={`/lp/tools/${image}.svg`}
                  alt={`${name}の画面イメージ（架空データ）`}
                  width={1000}
                  height={620}
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 340px"
                />
                <h3>{name}</h3>
                <p>{description}</p>
                </a>
                {toolPages.some((tool) => tool.slug === image) && (
                  <Link className="tool-detail-link" href={`/tools/${image}`} aria-label={`${name}の詳細を見る`}>詳しく見る <span aria-hidden="true">→</span></Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <ContactBanner id="contact-tools" />

        <section
          className="content-section section-shell listing-section"
          id="cases"
        >
          <h2>導入事例</h2>
          <a
            className="case-feature"
            href="https://prtimes.jp/main/html/rd/p/000000003.000183909.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="case-photo"
              src="/lp/seiwa-team.png"
              alt="成和税理士法人の看板前で撮影した集合写真"
              width={1950}
              height={1069}
              sizes="(max-width: 800px) 100vw, 660px"
            />
            <span className="case-category">本格検証</span>
            <h3>成和税理士法人</h3>
            <p>呉・広島の2拠点で、記帳業務のAI活用を検証。</p>
            <div className="case-meta">
              <time dateTime="2026-08-06">2026.08.06</time>
              <span>
                導入発表を読む
                <ArrowUpRight aria-hidden="true" />
              </span>
            </div>
          </a>
          <Link className="field-case-link" href="/cases/field-development">
            <span>税理士事務所のAI導入事例</span>
            <h3>日計表の転記を削減し、Excelの5工程を1画面に。</h3>
            <p>現場に合わせた個別開発で、記帳・データ加工の業務を改善。導入事例を読む →</p>
          </Link>
        </section>

        <section
          className="content-section section-shell listing-section"
          id="news"
        >
          <h2>お知らせ</h2>
          <div className="news-list">
            {[
              {
                date: "2026-08-07",
                label: "受賞",
                title: "JAFCO SEED Pitch 2026で準優勝",
                url: "https://prtimes.jp/main/html/rd/p/000000004.000183909.html",
              },
              {
                date: "2026-08-06",
                label: "資金調達",
                title: "Skyland Venturesから2,000万円を調達",
                url: "https://prtimes.jp/main/html/rd/p/000000003.000183909.html",
              },
              {
                date: "2026-05-25",
                label: "サービス",
                title: "会計AI「Zeimee」の先行提供を開始",
                url: "https://prtimes.jp/main/html/rd/p/000000002.000183909.html",
              },
            ].map(({ date, label, title, url }) => (
              <a
                className="news-item"
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="news-meta">
                  <time dateTime={date}>{date.replaceAll("-", ".")}</time>
                  <span>{label}</span>
                </div>
                <h3>{title}</h3>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="faq section-shell" id="faq">
          <div>
            <h2 data-reveal>よくある質問</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <details key={q}>
                <summary>
                  <span className="faq-number">0{i + 1}</span>
                  <h3>{q}</h3>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-shell contact-grid">
            <div className="contact-copy" data-reveal>
              <h2>資料ダウンロード</h2>
              <p>
                フォーム送信後、すぐに面談予約へ進めます。24時間以内のご予約で初期費用5万円割引。
              </p>
            </div>
            <div className="contact-panel">
              <div className="contact-form-title">
                <h3>Zeimee サービス資料（無料）</h3>
                <span>* 必須</span>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
        <CompanyInformation />
      </main>
      <footer className="footer section-shell">
        <div className="footer-top">
          <Brand />
          <a href="https://zeimee.com/company">
            会社情報
            <ArrowUpRight />
          </a>
        </div>
        <div className="footer-bottom">
          <span>株式会社Zeimee</span>
          <span>© {new Date().getFullYear()} Zeimee Inc.</span>
          <a href="#top">ページの先頭へ ↑</a>
        </div>
      </footer>
    </>
  );
}
