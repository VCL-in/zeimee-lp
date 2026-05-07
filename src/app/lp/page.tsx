import type { Metadata } from "next";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarCheck,
  ChevronDown,
  CircleDollarSign,
  FileCheck2,
  FileText,
  ListChecks,
  Menu,
  MessageSquareText,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Upload,
  Users,
} from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "zeimee | 税理士向け月次業務自動化サービス",
  description:
    "zeimeeは、税理士事務所の記帳代行・証憑管理・消込・月次チェックをAIで支援する月次業務自動化サービスです。",
};

const contactHref = "#contact";

const featureItems = [
  { title: "AI仕訳", icon: Sparkles, description: "勘定科目と税区分を提案" },
  { title: "AI証憑解析", icon: ReceiptText, description: "証憑を読み取り取引に紐付け" },
  { title: "AI消込", icon: CircleDollarSign, description: "請求と入金を突合し、差異だけを確認" },
  { title: "月次チェック", icon: CalendarCheck, description: "残高・異常値・不足資料をチェック" },
  { title: "顧問先コミュニケーション", icon: MessageSquareText, description: "不足資料や確認事項をまとめて依頼" },
  { title: "タスク管理", icon: ListChecks, description: "顧問先ごとの進捗と未対応を一覧化" },
];

const problemCards = [
  {
    label: "仕訳",
    title: "記帳業務に時間がかかる",
    points: ["採用・教育コストが重い", "担当者ごとに判断がばらつく", "所長レビューが重い"],
    icon: FileText,
    image: "/lp/problem-journal-v2.png",
  },
  {
    label: "証憑管理",
    title: "証憑回収と紐付けが追いつかない",
    points: ["提出方法が顧問先ごとに違う", "不足証憑の確認が属人化", "取引への紐付けが大変"],
    icon: ReceiptText,
    image: "/lp/problem-evidence-v2.png",
  },
  {
    label: "消込",
    title: "消込の確認に手間がかかる",
    points: ["請求との突合に時間がかかる", "未消込に気づきにくい", "確認依頼が後手に回る"],
    icon: CircleDollarSign,
    image: "/lp/problem-reconciliation-v2.png",
  },
];

const solutionCards = [
  {
    title: "月次業務をAIで自動処理",
    text: "仕訳候補、証憑解析、消込候補をAIが作成。担当者は確認だけに集中できます。",
    image: "/lp/solution-ai-processing-v2.png",
  },
  {
    title: "税理士はAI作業をチェックするだけ",
    text: "要確認のタスクだけをToDo化。AIの処理結果を確認・承認するだけで進みます。",
    image: "/lp/solution-ai-review-v2.png",
  },
  {
    title: "証憑回収もAIが対応",
    text: "不足証憑や確認事項をAIが整理。顧問先への依頼・催促漏れを防ぎます。",
    image: "/lp/solution-client-communication-v2.png",
  },
];

const plannedItems = [
  "freee / MF 連携拡張",
  "顧問先ポータル",
  "自動リマインド",
  "月次レポート出力",
  "担当者別KPI",
  "AIチェックルール管理",
];

const faqs = [
  {
    question: "freeeやMoney Forwardと連携できますか？",
    answer:
      "はい。現在の会計ソフトの運用状況を伺いながら、連携方法と導入ステップをご案内します。",
  },
  {
    question: "顧問先も利用が必要ですか？",
    answer:
      "必ずしも必要ありません。まずは事務所側の記帳・証憑・消込業務の効率化から始められます。",
  },
  {
    question: "AIの結果はそのまま登録されますか？",
    answer:
      "原則として担当者が確認してから反映する運用を想定しています。最終判断は税理士事務所側で行えます。",
  },
];

const teamCards = [
  {
    title: "アドバイザー 畠山謙人",
    role: "公認会計士・税理士",
    bio: "大和工業で連結決算等を担当後、監査法人トーマツで国内監査に従事。サイバーエージェントでは連結決算やAbemaTV経理、決算早期化を担当。税理士法人赤坂共同事務所を経て、2025年に畠山謙人税理士事務所を開業。シードスタートアップを中心に支援している。",
    image: "/lp/team-tax-advisor.png",
    objectPosition: "center 18%",
    imageClassName: "scale-[1.2]",
  },
  {
    title: "代表取締役 佐次本脩真",
    role: "元メルカリエンジニア",
    bio: "電気通信大学大学院 情報理工学研究科を卒業。大学院ではソフトウェア開発やAI活用の知見を深め、2025年8月から2026年4月までメルカリにてSWEとしてプロダクト開発を経験。月次業務の実務負担をAIで減らすため、Zeimeeを立ち上げる。",
    image: "/lp/team-ai-engineer.png",
    objectPosition: "center 20%",
    imageClassName: "",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#202936]">
      <Header />
      <Hero />
      <AccountingIntegrations />
      <Problems />
      <Solutions />
      <Features />
      <PlannedFeatures />
      <Faq />
      <TeamSection />
      <ContactBand />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eef1f5] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[62px] max-w-[1180px] items-center justify-between px-5">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-7 text-[16px] font-bold text-[#202936] lg:flex">
            <a href="#problems">課題</a>
            <a href="#solutions">解決策</a>
            <a href="#features">機能</a>
            <a href="#faq">よくある質問</a>
          </nav>
        </div>
        <div className="hidden items-center gap-5 text-[16px] font-bold lg:flex">
          <a
            href={contactHref}
            className="inline-flex h-10 items-center gap-2 rounded-[2px] bg-[#1155cc] px-5 text-white"
          >
            お問い合わせ
            <ArrowRight className="size-3.5" />
          </a>
        </div>
        <button type="button" className="lg:hidden" aria-label="メニュー">
          <Menu className="size-7" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1240px] px-5 pb-14 pt-10 lg:pb-[72px] lg:pt-12">
        <div className="mx-auto max-w-[920px] text-center">
          <h1 className="text-balance text-[25px] font-bold leading-[1.35] tracking-normal text-[#202936] sm:text-[34px] lg:text-[41px]">
            <span className="inline-block">税理士の手作業を、</span>
            <br />
            <span className="inline-block">AIで限りなくゼロへ。</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-[17px] font-bold leading-8 text-[#5c6675] sm:text-[20px] sm:leading-10">
            <span className="block">記帳・証憑・消込をAIが処理。</span>
            <span className="block">税理士はToDoを確認するだけ。</span>
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contactHref}
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-[8px] bg-[#202936] px-8 text-[15px] font-extrabold text-white shadow-[0_10px_22px_rgba(32,41,54,0.18)] sm:w-auto"
            >
              お問い合わせ
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="mx-auto mt-10 max-w-[1040px] overflow-hidden rounded-[18px] bg-[#202936] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),0_28px_70px_rgba(32,41,54,0.16)] lg:mt-12">
      <video
        className="block aspect-video w-full object-cover motion-reduce:hidden"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-ui-flow-poster.jpg?v=text-sync-v2"
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero-ui-flow-hq.mp4?v=text-sync-v2" type="video/mp4" />
      </video>
      <Image
        src="/images/hero-ui-flow-poster.jpg"
        alt="zeimeeのToDo画面とAI処理カード"
        width={1920}
        height={1080}
        sizes="(min-width: 1024px) 1040px, 100vw"
        className="hidden aspect-video w-full object-cover motion-reduce:block"
        priority
      />
    </div>
  );
}

function AccountingIntegrations() {
  return (
    <section className="border-y border-[#eef1f5] bg-white py-10">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="grid grid-cols-1 gap-x-16 gap-y-9 sm:grid-cols-3">
          <div className="flex items-center justify-center">
            <Image
              src="/lp/freee-logo.png"
              alt="freee"
              width={450}
              height={184}
              className="h-[66px] w-auto"
            />
          </div>
          <div className="flex items-center justify-center text-center text-[34px] font-bold leading-tight text-[#005bac]">
            Money
            <br />
            Forward
          </div>
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <span className="text-[34px] font-bold text-[#c4cbd5]">弥生会計</span>
            <span className="text-[13px] font-bold text-[#b1bac6]">対応予定</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problems" className="relative overflow-hidden bg-[#3d444f] pb-20 pt-28 text-white">
      <DiagonalTop />
      <div className="mx-auto max-w-[1180px] px-5">
        <p className="text-[16px] font-bold text-white/25">Problems</p>
        <h2 className="mt-5 text-[29px] font-bold tracking-normal">
          こんな課題ありませんか？
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {problemCards.map((card) => (
            <article key={card.label} className="rounded-[3px] bg-[#4a515d] p-6">
              <div className="relative h-[190px] overflow-hidden rounded-[2px] bg-white">
                <Image
                  src={card.image}
                  alt={`${card.label}の課題を表すイラスト`}
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-contain"
                />
              </div>
              <span className="mt-5 inline-block rounded-[2px] bg-[#10a6b7] px-3 py-1 text-[13px] font-bold">
                {card.label}
              </span>
              <h3 className="mt-4 text-balance text-[20px] font-bold leading-7">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-2 text-[16px] font-bold leading-6 text-white/82">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span>・</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-balance text-center text-[29px] font-bold leading-9 tracking-normal">
          Zeimeeで月次業務を解決
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-3 xl:gap-12">
          {solutionCards.map((card) => (
            <article key={card.title}>
              <SolutionImage src={card.image} title={card.title} />
              <h3 className="mt-6 text-balance text-[22px] font-bold leading-8">
                {card.title}
              </h3>
              <p className="mt-3 text-[16px] font-thin leading-8 text-[#5c6675]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-[920px] px-5">
        <h2 className="text-center text-[29px] font-bold tracking-normal">
          提供中の機能
        </h2>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlannedFeatures() {
  return (
    <section className="bg-[#f2f4f7] py-24">
      <div className="mx-auto max-w-[920px] px-5">
        <h2 className="text-center text-[29px] font-bold tracking-normal">
          提供予定の機能
        </h2>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {plannedItems.map((item, index) => (
            <div key={item} className="rounded-[3px] bg-white p-7 shadow-sm">
              <div className="flex h-[112px] items-center justify-center rounded-[2px] bg-[#f5f7fa]">
                <PlannedIllustration index={index} />
              </div>
              <h3 className="mt-5 text-center text-[18px] font-bold leading-6">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-[#f2f4f7] py-24">
      <div className="mx-auto max-w-[920px] px-5">
        <h2 className="text-center text-[29px] font-bold tracking-normal">
          よくある質問
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[3px] bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-balance text-[20px] font-bold">
                {faq.question}
                <ChevronDown className="size-5 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-[16px] font-thin leading-7 text-[#5c6675]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-balance text-[31px] font-bold leading-[1.35] tracking-normal text-[#202936] sm:text-[40px]">
            AIに知見のある税理士とエンジニアが一丸となって開発しています。
          </h2>
          <p className="mx-auto mt-8 max-w-[860px] text-[18px] font-thin leading-9 text-[#202936]">
            Zeimeeは、記帳・証憑回収・消込に時間を取られている税理士事務所の声をもとに開発しています。現場で起きる判断のばらつき、資料回収、確認待ちの課題に向き合い、税理士が確認と顧問先対応に集中できるプロダクトを目指しています。
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-[960px] gap-8 md:grid-cols-2 lg:gap-10">
          {teamCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-5"
            >
              <div className="relative aspect-[5/6] overflow-hidden rounded-[8px] bg-[#f2f5fa]">
                <Image
                  src={card.image}
                  alt={`${card.title} ${card.role}`}
                  fill
                  sizes="(min-width: 1024px) 460px, (min-width: 768px) 50vw, 100vw"
                  className={`object-cover ${card.imageClassName}`}
                  style={{ objectPosition: card.objectPosition }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent px-6 pb-7 pt-28 sm:px-7">
                  <p className="text-[21px] font-bold leading-7 text-[#202936] sm:text-[22px]">
                    {card.title}
                  </p>
                  <p className="mt-2 text-[16px] font-bold leading-6 text-[#202936]/75 sm:text-[17px]">
                    {card.role}
                  </p>
                </div>
              </div>
              <div className="flex-1 rounded-[8px] bg-[#f4f6f9] px-6 py-6 sm:px-7">
                <p className="text-[15px] font-thin leading-8 text-[#4b5563] sm:text-[16px]">
                  {card.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-[760px] px-5">
        <h2 className="text-balance text-[36px] font-bold leading-[1.35] tracking-normal text-[#202936] sm:text-[46px]">
          Zeimeeへのお問い合わせ
        </h2>
        <p className="mt-8 text-[18px] font-bold leading-8 text-[#202936]">
          Zeimeeにご関心をお寄せいただきありがとうございます。
        </p>
        <p className="mt-5 text-[18px] font-bold leading-8 text-[#202936]">
          導入相談、デモ、料金や機能のご質問など、お気軽にお問い合わせください。
          <br className="hidden sm:block" />
          内容に応じて担当者よりご連絡します。
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#252b34] pb-24 pt-32 text-white">
      <DiagonalTop light />
      <div className="mx-auto max-w-[1180px] px-5">
        <Logo light />
        <div className="mt-14 grid gap-10 text-[16px] font-bold text-white/55 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-5 text-white">会社情報</p>
            <dl className="space-y-3">
              <div>
                <dt className="sr-only">会社名</dt>
                <dd>株式会社Vibe Coding Lab</dd>
              </div>
              <div>
                <dt className="sr-only">所在地</dt>
                <dd>東京都調布市調布ヶ丘1-5-1 電気通信大学西11号館4階411号室</dd>
              </div>
              <div>
                <dt className="sr-only">代表者</dt>
                <dd>代表取締役 佐次本脩真</dd>
              </div>
              <div>
                <dt className="sr-only">取締役</dt>
                <dd>取締役 岩崎琉晟</dd>
              </div>
            </dl>
          </div>
          <div className="lg:text-right">
            <a
              href={contactHref}
              className="inline-flex h-11 items-center gap-3 rounded-[2px] border border-white/40 px-5 text-white"
            >
              お問い合わせ
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <p className="mt-16 text-[14px] font-thin text-white/35">
          © 2026 Zeimee
        </p>
      </div>
    </footer>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/lp" className="inline-flex items-center">
      <Image
        src="/lp/zeimee-logo.png"
        alt="Zeimee"
        width={145}
        height={30}
        className={`h-[28px] w-auto ${light ? "[filter:brightness(0)_invert(1)]" : ""}`}
        priority={!light}
      />
    </Link>
  );
}

function FeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <article className="rounded-[3px] bg-[#f4f6f9] p-6">
      <div className="flex h-[138px] items-center justify-center rounded-[2px] bg-white">
        <div className="rounded-[4px] border border-[#dce4ef] bg-[#f8fafc] p-5">
          <Icon className="size-10 text-[#1155cc]" />
        </div>
      </div>
      <h3 className="mt-5 text-center text-[19px] font-bold">{title}</h3>
      <p className="mx-auto mt-3 max-w-[210px] text-center text-[14px] font-thin leading-6 text-[#667083]">
        {description}
      </p>
    </article>
  );
}

function SolutionImage({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative h-[220px] overflow-hidden rounded-[3px] bg-[#eef2f7]">
      <Image
        src={src}
        alt={`${title}のイメージ`}
        fill
        sizes="(min-width: 1280px) 370px, (min-width: 1024px) 31vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function PlannedIllustration({ index }: { index: number }) {
  const icons = [Upload, Bell, FileCheck2, CalendarCheck, Users, ShieldCheck];
  const Icon = icons[index] ?? Sparkles;

  return (
    <div className="rounded-full bg-white p-5 shadow-sm">
      <Icon className="size-9 text-[#1155cc]" />
    </div>
  );
}

function DiagonalTop({ light = false }: { light?: boolean }) {
  return (
    <div
      aria-hidden
      className={`absolute left-0 top-0 h-20 w-full ${
        light ? "bg-white" : "bg-white"
      }`}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 18%, 0 100%)" }}
    />
  );
}
