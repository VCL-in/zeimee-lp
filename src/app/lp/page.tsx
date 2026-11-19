import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { toolPages } from "@/lib/tool-pages";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { ContactForm } from "./ContactForm";
import { RenewalEffects } from "./RenewalEffects";
import "./renewal.css";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
const members = [
  {
    name: "畠山謙人",
    role: "アドバイザー",
    title: "公認会計士・税理士",
    image: "team-tax-advisor.png",
    bio: "大和工業で連結決算等を担当後、監査法人トーマツで国内監査に従事。サイバーエージェントでは連結決算やAbemaTV経理、決算早期化を担当。税理士法人赤坂共同事務所を経て、2025年に畠山謙人税理士事務所を開業。シードスタートアップを中心に支援している。",
  },
  {
    name: "佐次本脩真",
    role: "代表取締役",
    title: "元メルカリエンジニア",
    image: "team-ai-engineer.png",
    bio: "電気通信大学大学院 情報理工学研究科を卒業。大学院ではソフトウェア開発やAI活用の知見を深め、2025年8月から2026年4月までメルカリにてSWEとしてプロダクト開発を経験。月次業務の実務負担をAIで減らすため、Zeimeeを立ち上げる。",
  },
];

const reasons = [
  {
    title: "会計業務特化のFDE",
    benefit: "会計実務がわかるから、課題がすぐに伝わる。",
  },
  {
    title: "事務所専用のカスタマイズ開発",
    benefit: "いつもの業務に合う仕組みをつくれる。",
  },
  {
    title: "対面出社でのヒアリング・開発",
    benefit: "現場を見ながら、細かな要望まで形に。",
  },
  {
    title: "対面での徹底サポート",
    benefit: "操作の不安を解消し、日々の業務に定着。",
  },
];

const tools = [
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
];

const news = [
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
];

function Logo() {
  return (
    <Image
      className="aa-logo"
      src="/lp/zeimee-logo.png"
      alt="Zeimee"
      width={1397}
      height={289}
      sizes="160px"
    />
  );
}

export default function LandingPage() {
  return (
    <div className={`aia ${notoSansJp.variable} ${inter.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replaceAll("<", "\\u003c"),
        }}
      />
      <a className="aa-skip" href="#main">
        本文へ移動
      </a>
      <div className="aa-notice">
        <span>{news[0].title}しました</span>
        <a href={news[0].url} target="_blank" rel="noopener noreferrer">
          詳しく見る
        </a>
      </div>
      <header className="aa-header">
        <a href="#top" aria-label="Zeimee トップへ">
          <Logo />
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#about">Zeimeeとは</a>
          <a href="#reasons">選ばれる理由</a>
          <a href="#tools">導入ツール</a>
          <a href="#cases">導入事例</a>
          <a href="#news">お知らせ</a>
          <Link href="/column">コラム</Link>
        </nav>
        <a className="aa-pill aa-dark" href="#contact">
          資料DL・面談予約
        </a>
      </header>

      <main id="main">
        <section id="top">
          <div className="aa-stage">
            <div className="aa-shot aa-a" />
            <div className="aa-shot aa-b" />
            <div className="aa-shade" />
            <h1>
              <span>全ての現場に、</span>
              <span>感動されるAXを届ける。</span>
            </h1>
            <p className="aa-scroll">Scroll to Explore</p>
          </div>
        </section>

        <section className="aa-sec" id="about">
          <div className="aa-wrap" id="team">
            <div className="aa-intro">
              <h2 className="aa-h-l">
                AIに知見のある税理士と
                <br />
                エンジニアが一丸となって開発しています。
              </h2>
              <p>
                Zeimeeは、記帳・証憑回収・消込に時間を取られている税理士事務所の声をもとに開発しています。現場で起きる判断のばらつき、資料回収、確認待ちの課題に向き合い、担当者の確認・修正・承認を支援するプロダクトを目指しています。
              </p>
            </div>
            <div className="aa-people">
              {members.map((member) => (
                <article className="aa-person" key={member.name}>
                  <figure>
                    <Image
                      src={`/lp/${member.image}`}
                      alt={`${member.role} ${member.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  </figure>
                  <div>
                    <p className="aa-role">{member.role}</p>
                    <h3>{member.name}</h3>
                    <p className="aa-title">{member.title}</p>
                    <p className="aa-bio">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="aa-sec aa-pale" id="reasons">
          <div className="aa-wrap">
            <h2 className="aa-h-l">
              Zeimeeが
              <br />
              選ばれる理由
            </h2>
            <div className="aa-cards aa-four">
              {reasons.map(({ title, benefit }, i) => (
                <article className="aa-card" key={title}>
                  <p className="aa-n">0{i + 1}</p>
                  <h3>{title}</h3>
                  <p>{benefit}</p>
                </article>
              ))}
            </div>
            <div className="aa-promise">
              <h3 className="aa-h-l">
                作っておわりではなく、
                <br />
                <i>事務所に浸透するAIツールを開発</i>
              </h3>
              <a className="aa-pill aa-dark aa-arrow" href="#contact">
                資料DL・面談予約
              </a>
            </div>
          </div>
        </section>

        <section className="aa-sec" id="tools">
          <div className="aa-wrap">
            <h2 className="aa-h-xl">
              導入ツール<i>一覧</i>
            </h2>
            <div>
              <ul className="aa-list">
                {tools.map(({ name, image, description }) => {
                  const hasDetail = toolPages.some((tool) => tool.slug === image);
                  return (
                    <li key={name}>
                      <div className="aa-thumb aa-img">
                        <Image
                          src={`/lp/tools/${image}.svg`}
                          alt={`${name}の画面イメージ（架空データ）`}
                          fill
                          sizes="232px"
                        />
                      </div>
                      <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>
                      {hasDetail ? (
                        <Link
                          className="aa-more"
                          href={`/tools/${image}`}
                          aria-label={`${name}の詳細を見る`}
                        >
                          詳しく見る
                        </Link>
                      ) : (
                        <a
                          className="aa-more"
                          href="#contact"
                          aria-label={`${name}の資料DL・面談予約`}
                        >
                          資料DL・面談予約
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="aa-fine">※画面イメージは架空データです。</p>
              <div className="aa-list-foot">
                <a className="aa-pill aa-dark aa-arrow" href="#contact">
                  資料DL・面談予約
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="aa-sec aa-pale" id="cases">
          <div className="aa-wrap">
            <h2 className="aa-h-l">導入事例</h2>
            <div className="aa-news">
              <a
                className="aa-post"
                href="https://prtimes.jp/main/html/rd/p/000000003.000183909.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure>
                  <Image
                    src="/lp/seiwa-team.png"
                    alt="成和税理士法人の看板前で撮影した集合写真"
                    fill
                    sizes="(max-width: 1000px) 100vw, 680px"
                  />
                </figure>
                <div className="aa-txt">
                  <p className="aa-meta">
                    <time dateTime="2026-08-06">2026.08.06</time>
                    <span className="aa-chip">本格検証</span>
                  </p>
                  <h3>成和税理士法人</h3>
                  <p>呉・広島の2拠点で、記帳業務のAI活用を検証。</p>
                  <span className="aa-more">導入発表を読む</span>
                </div>
              </a>
              <Link className="aa-post" href="/cases/field-development">
                <figure className="aa-art">
                  <Image
                    src="/lp/fieldwork-lineart.png"
                    alt="資料を見ながら業務を検討する二人"
                    fill
                    sizes="(max-width: 1000px) 100vw, 680px"
                  />
                </figure>
                <div className="aa-txt">
                  <p className="aa-meta">
                    <span className="aa-chip">税理士事務所のAI導入事例</span>
                  </p>
                  <h3>日計表の転記を削減し、Excelの5工程を1画面に。</h3>
                  <p>
                    現場に合わせた個別開発で、記帳・データ加工の業務を改善。
                  </p>
                  <span className="aa-more">導入事例を読む</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="aa-sec" id="news">
          <div className="aa-wrap">
            <h2 className="aa-h-l">お知らせ</h2>
            <div className="aa-rows">
              {news.map(({ date, label, title, url }) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                  <time dateTime={date}>{date.replaceAll("-", ".")}</time>
                  <span>
                    <span className="aa-chip">{label}</span>
                  </span>
                  <h3>{title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="aa-sec aa-pale" id="faq">
          <div className="aa-wrap">
            <h2 className="aa-h-l">よくある質問</h2>
            <div className="aa-faq">
              {faqs.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary>
                    <h3>{q}</h3>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="aa-contact" id="contact">
          <div className="aa-wrap aa-cols">
            <div>
              <p className="aa-eyebrow">Contact</p>
              <h2 className="aa-h-l">
                資料DL・
                <br />
                面談予約
              </h2>
              <p className="aa-lede">
                フォーム送信後、資料DL・面談予約ページへ進みます。資料のダウンロードと、30分のオンライン面談のご予約ができます。24時間以内のご予約で初期費用5万円割引。
              </p>
            </div>
            <div className="aa-panel">
              <div className="aa-panel-title">
                <h3>Zeimee サービス資料（無料）</h3>
                <span>* 必須</span>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="aa-sec" id="company-info">
          <div className="aa-wrap aa-company">
            <div>
              <p className="aa-eyebrow">会社情報</p>
              <h2 className="aa-h-l">
                会計に向き合う人が、
                <br />
                もっと価値ある仕事に
                <br />
                集中できる社会へ。
              </h2>
            </div>
            <div>
              <dl className="aa-dl">
                <div>
                  <dt>会社名</dt>
                  <dd>株式会社Zeimee</dd>
                </div>
                <div>
                  <dt>代表者</dt>
                  <dd>代表取締役　佐次本 脩真</dd>
                </div>
                <div>
                  <dt>所在地</dt>
                  <dd>
                    東京都調布市調布ヶ丘1-5-1
                    <br />
                    電気通信大学 西11号館4階411号室
                  </dd>
                </div>
                <div>
                  <dt>事業内容</dt>
                  <dd>
                    月次経理AIエージェント「Zeimee」の開発・提供
                    <br />
                    会計事務所向けAI導入・FDE支援
                  </dd>
                </div>
              </dl>
              <a className="aa-pill aa-dark aa-arrow" href="#contact">
                Zeimee・FDEの資料を受け取る
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="aa-wrap">
          <div className="aa-cols">
            <a href="#top" aria-label="Zeimee トップへ">
              <Logo />
            </a>
            <div>
              <h3>サービス</h3>
              <ul>
                <li>
                  <a href="#about">Zeimeeとは</a>
                </li>
                <li>
                  <a href="#reasons">選ばれる理由</a>
                </li>
                <li>
                  <a href="#tools">導入ツール</a>
                </li>
                <li>
                  <a href="#cases">導入事例</a>
                </li>
                <li>
                  <a href="#contact">資料DL・面談予約</a>
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
                  <Link href="/company">会社情報</Link>
                </li>
                <li>
                  <Link href="/security">セキュリティ</Link>
                </li>
                <li>
                  <a href="#news">お知らせ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="aa-end">
            <p className="aa-tag">Zeimee</p>
            <p className="aa-copy">
              株式会社Zeimee　© {new Date().getFullYear()} Zeimee Inc.
            </p>
          </div>
        </div>
      </footer>

      <div className="aa-mcta">
        <a className="aa-pill aa-dark aa-arrow aa-lg" href="#contact">
          資料DL・面談予約
        </a>
      </div>
      <RenewalEffects />
    </div>
  );
}
