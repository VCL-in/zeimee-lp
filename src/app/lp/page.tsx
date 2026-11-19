import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    "時間がかかっている業務や、困っている作業をお聞かせください。対象が決まっていなくても相談できます。",
  ],
  [
    "どんな業種でも相談できますか？",
    "業種は問いません。見積・報告・議事録・問い合わせ対応など、どの会社にもある業務から始められます。",
  ],
  [
    "いま使っているツールを変える必要はありますか？",
    "ありません。ご利用中のソフトやチャットを確認し、それに合わせた連携・取込方法をご提案します。",
  ],
  [
    "AIがすべて自動で判断するのですか？",
    "AIが候補を作成し、担当者が確認・承認します。確認範囲は業務に合わせて設計します。",
  ],
  [
    "費用と導入期間はどのくらいですか？",
    "対象業務と連携要件を確認し、費用と日程をお見積もりします。",
  ],
  [
    "社内の情報はどのように扱いますか？",
    "アクセス権限、AIへの送信範囲、保存・削除条件を導入前に確認し、会社の要件に合わせて設計します。",
  ],
];
const members = [
  {
    name: "岩﨑 琉晟",
    role: "代表取締役CEO",
    title: "元LINEヤフーエンジニア",
    image: "team-iwasaki-color.jpg",
    bio: "電気通信大学で情報工学を専攻。データエンジニアを経て、LINEヤフーでAIエージェント基盤の立ち上げに従事。AIを現場の業務に定着させるため、Zeimeeを共同で創業。",
  },
  {
    name: "佐次本 脩真",
    role: "代表取締役COO",
    title: "元メルカリエンジニア",
    image: "team-ai-engineer.png",
    bio: "電気通信大学大学院 情報理工学研究科を卒業。大学院ではソフトウェア開発やAI活用の知見を深め、2025年8月から2026年4月までメルカリにてSWEとしてプロダクト開発を経験。月次業務の実務負担をAIで減らすため、Zeimeeを立ち上げる。",
  },
  {
    name: "畠山 謙人",
    role: "アドバイザー",
    title: "公認会計士・税理士",
    image: "team-tax-advisor.png",
    bio: "大和工業で連結決算等を担当後、監査法人トーマツで国内監査に従事。サイバーエージェントでは連結決算やAbemaTV経理、決算早期化を担当。税理士法人赤坂共同事務所を経て、2025年に畠山謙人税理士事務所を開業。シードスタートアップを中心に支援している。",
  },
];

const axSteps = [
  {
    name: "課題設定",
    description: "現場に入って業務を見て、AIで解くべき課題を決める。",
  },
  {
    name: "AI導入",
    description: "業務に合わせたAI・システムを設計し、開発する。",
  },
  {
    name: "業務浸透",
    description: "現場で日々使われるまで、改善と定着を続ける。",
  },
];

const businesses = [
  {
    name: "AX Solution事業",
    lead: "現場に入る開発・導入支援",
    description:
      "エンジニアが現場に入り、業務の整理から、AI・システムの設計、開発、運用改善までを担います。",
  },
  {
    name: "AI顧問",
    lead: "月額の伴走支援",
    description:
      "面談とチャットで業務を聞き、会社専用のAIツールをつくり、社員の方が使えるようになるまで伴走します。",
  },
];

const reasons = [
  {
    title: "貴社専用のカスタマイズ開発",
    benefit: "いつもの業務に合う仕組みをつくれる。",
  },
  {
    title: "対面出社でのヒアリング・開発",
    benefit: "現場を見ながら、細かな要望まで形に。",
  },
  {
    title: "地方対面FDEの信頼と実績",
    benefit: "広島の成和税理士法人など、地方の現場に入って開発してきました。",
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
      <header className="aa-header">
        <a href="#top" aria-label="Zeimee トップへ">
          <Logo />
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#about">Zeimeeとは</a>
          <a href="#business">事業内容</a>
          <a href="#reasons">選ばれる理由</a>
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
            <video
              className="aa-vid"
              data-src="/lp/hero-field.mp4"
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              tabIndex={-1}
            />
            <div className="aa-shade" />
            <h1>
              <span>全ての現場に、</span>
              <span>感動されるAXを届ける。</span>
            </h1>
            <p className="aa-scroll">Scroll to Explore</p>
          </div>
        </section>

        <section className="aa-sec aa-pale aa-lead-sec" id="about">
          <div className="aa-wrap aa-ax">
            <div className="aa-ax-copy">
              <h2 className="aa-h-xl">
                あなたの会社の、
                <br />
                AX専門部隊に
                <br />
                なります。
              </h2>
              <p>
                AXには、課題設定・AI導入・業務浸透の3つが要ります。Zeimeeは現場に入り、この3つをすべて担います。作っておわりではなく、日々の業務に定着するところまで伴走します。
              </p>
              <a className="aa-pill aa-dark aa-arrow aa-lg" href="#contact">
                資料DL・面談予約
              </a>
            </div>
            <div className="aa-ax-fig">
              <svg
                viewBox="0 0 700 560"
                role="img"
                aria-label="課題設定、AI導入、業務浸透の3つの円が右上へ連なり、その全体をZeimeeの範囲を示す線が囲んでいる図"
              >
                <g transform="rotate(-35.2 350 280)">
                  <ellipse className="aa-ax-orbit" cx="350" cy="280" rx="330" ry="152" />
                  <line className="aa-ax-axis" x1="62" y1="280" x2="638" y2="280" />
                </g>
                <circle className="aa-ax-c" cx="180" cy="400" r="110" />
                <circle className="aa-ax-c" cx="350" cy="280" r="110" />
                <circle className="aa-ax-c aa-ax-last" cx="520" cy="160" r="110" />
                {axSteps.map(({ name }, i) => (
                  <g key={name} transform={`translate(${180 + i * 170} ${400 - i * 120})`}>
                    <text className="aa-ax-num" y="-26" textAnchor="middle">
                      0{i + 1}
                    </text>
                    <text className="aa-ax-name" y="14" textAnchor="middle">
                      {name}
                    </text>
                  </g>
                ))}
                <circle className="aa-ax-dot" cx="262" cy="156" r="4" />
                <line className="aa-ax-lead" x1="262" y1="156" x2="150" y2="84" />
                <line className="aa-ax-lead" x1="150" y1="84" x2="40" y2="84" />
                <text className="aa-ax-label" x="40" y="70">
                  Zeimeeが担う範囲
                </text>
              </svg>
              <ol className="aa-ax-notes">
                {axSteps.map(({ name, description }, i) => (
                  <li key={name}>
                    <span className="aa-n">0{i + 1}</span>
                    <b>{name}</b>
                    <span>{description}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="aa-sec" id="business">
          <div className="aa-wrap">
            <h2 className="aa-h-l">事業内容</h2>
            <div className="aa-biz">
              {businesses.map(({ name, lead, description }, i) => (
                <article key={name}>
                  <p className="aa-n">0{i + 1}</p>
                  <h3>{name}</h3>
                  <p className="aa-biz-lead">{lead}</p>
                  <p className="aa-biz-desc">{description}</p>
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
            <div className="aa-cards">
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
                <i>現場に浸透するAIツールを開発</i>
              </h3>
              <a className="aa-pill aa-dark aa-arrow" href="#contact">
                資料DL・面談予約
              </a>
            </div>
          </div>
        </section>

        <section className="aa-sec" id="cases">
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
              <article className="aa-post">
                <figure className="aa-art">
                  <Image
                    src="/lp/case-rikimaru-logo.png"
                    alt="力丸公認会計士事務所のロゴ"
                    fill
                    sizes="(max-width: 1000px) 100vw, 460px"
                  />
                </figure>
                <div className="aa-txt">
                  <p className="aa-meta">
                    <span>福岡県</span>
                    <span className="aa-chip">会計事務所</span>
                  </p>
                  <h3>力丸公認会計士事務所</h3>
                  <p>
                    顧問先・担当者ごとの生産性管理や、毎月の記帳業務をAIにより効率化。
                  </p>
                </div>
              </article>
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

        <section className="aa-sec aa-pale" id="team">
          <div className="aa-wrap">
            <h2 className="aa-h-l">メンバー</h2>
            <div className="aa-people">
              {members.map((member) => (
                <article className="aa-person" key={member.name}>
                  <figure>
                    <Image
                      src={`/lp/${member.image}`}
                      alt={`${member.role} ${member.name}`}
                      fill
                      sizes="(max-width: 1000px) 100vw, 460px"
                    />
                  </figure>
                  <div>
                    <p className="aa-role">{member.role}</p>
                    <h3>{member.name}</h3>
                    {member.title && <p className="aa-title">{member.title}</p>}
                    {member.bio && <p className="aa-bio">{member.bio}</p>}
                  </div>
                </article>
              ))}
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
                フォーム送信後、資料DL・面談予約ページへ進みます。資料のダウンロードと、30分のオンライン面談のご予約ができます。
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
                AXで、
                <br />
                日本全体を
                <br />
                アップデートする。
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
                  <dd>
                    代表取締役CEO　岩﨑 琉晟
                    <br />
                    代表取締役COO　佐次本 脩真
                  </dd>
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
                    AX Solution事業
                    <br />
                    AI顧問
                  </dd>
                </div>
              </dl>
              <a className="aa-pill aa-dark aa-arrow" href="#contact">
                資料DL・面談予約
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
