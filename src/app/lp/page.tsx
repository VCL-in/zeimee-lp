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

export const metadata: Metadata = {
  title: "zeimee | 税理士向け月次業務自動化サービス",
  description:
    "zeimeeは、税理士事務所の記帳代行・証憑管理・消込・月次チェックをAIで支援する月次業務自動化サービスです。",
};

const consultationHref =
  "mailto:support@zeimee.app?subject=zeimee%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87%E3%81%AE%E7%94%B3%E3%81%97%E8%BE%BC%E3%81%BF";

const featureItems = [
  { title: "AI仕訳", icon: Sparkles, description: "取引内容を読み取り、勘定科目と税区分を提案" },
  { title: "AI証憑解析", icon: ReceiptText, description: "領収書・請求書を読み取り、取引と紐付け" },
  { title: "AI消込", icon: CircleDollarSign, description: "請求と入金を突合し、差異だけを確認" },
  { title: "月次チェック", icon: CalendarCheck, description: "残高・異常値・不足資料をチェック" },
  { title: "顧問先コミュニケーション", icon: MessageSquareText, description: "不足資料や確認事項をまとめて依頼" },
  { title: "タスク管理", icon: ListChecks, description: "顧問先ごとの進捗と未対応を一覧化" },
];

const problemCards = [
  {
    label: "仕訳",
    title: "記帳に時間がかかり、レビューが月末月初に集中する",
    points: ["採用・教育コストが重い", "担当者ごとに判断がばらつく", "所長レビューの負荷が高い"],
    icon: FileText,
    image: "/lp/problem-journal-v2.png",
  },
  {
    label: "証憑管理",
    title: "証憑回収と紐付けが煩雑で、締めが後ろ倒しになる",
    points: ["提出方法が顧問先ごとに違う", "不足証憑の確認が属人化", "取引との紐付けに時間がかかる"],
    icon: ReceiptText,
    image: "/lp/problem-evidence-v2.png",
  },
  {
    label: "消込",
    title: "入金確認・名義違い・一部入金で確認作業が止まる",
    points: ["入金と請求書の突合に時間がかかる", "未消込の滞留に気づきにくい", "確認依頼が後手に回る"],
    icon: CircleDollarSign,
    image: "/lp/problem-reconciliation-v2.png",
  },
];

const solutionCards = [
  {
    title: "月次業務をAIで自動処理",
    text: "仕訳候補、証憑解析、消込候補をAIが作成。担当者は確認が必要なものだけに集中できます。",
    image: "/lp/solution-ai-processing-v2.png",
  },
  {
    title: "税理士はAI作業をチェックするだけ",
    text: "ToDoリストに要確認だけが並びます。税理士はAIの処理結果を確認・承認するだけで、月次業務が前に進みます。",
    image: "/lp/solution-ai-review-v2.png",
  },
  {
    title: "顧問先対応をスムーズに",
    text: "不足証憑や確認事項を自動で整理。顧問先への依頼・催促漏れを防ぎ、確認待ちを減らします。",
    image: "/lp/solution-client-communication-v2.png",
  },
];

const plannedItems = [
  "freee / MF 連携の拡張",
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
    question: "顧問先にもzeimeeを使ってもらう必要がありますか？",
    answer:
      "必ずしも必要ありません。まずは事務所側の記帳・証憑・消込業務の効率化から始められます。",
  },
  {
    question: "AIの結果はそのまま登録されますか？",
    answer:
      "原則として担当者が確認してから反映する運用を想定しています。最終判断は税理士事務所側で行えます。",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#202936]">
      <Header />
      <Hero />
      <LogoStrip />
      <Problems />
      <Solutions />
      <Features />
      <PlannedFeatures />
      <Voices />
      <Faq />
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
          <nav className="hidden items-center gap-7 text-[13px] font-bold text-[#202936] lg:flex">
            <a href="#problems">課題</a>
            <a href="#solutions">解決策</a>
            <a href="#features">機能</a>
            <a href="#voices">導入事例</a>
            <a href="#faq">よくある質問</a>
          </nav>
        </div>
        <div className="hidden items-center gap-5 text-[13px] font-bold lg:flex">
          <Link href="/login">ログイン</Link>
          <a
            href={consultationHref}
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
          <h1 className="text-[25px] font-bold leading-[1.35] tracking-normal text-[#202936] sm:text-[34px] lg:text-[41px]">
            税理士の手作業を、
            <br className="hidden sm:block" />
            AIで限りなくゼロへ。
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-[12px] font-bold leading-6 text-[#5c6675] sm:text-[13px] sm:leading-7">
            記帳・証憑・消込・月次チェックをAIが自動処理。
            <br className="hidden sm:block" />
            税理士はToDoを確認するだけで、月次業務を前に進められます。
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={consultationHref}
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-[8px] bg-[#202936] px-8 text-[15px] font-extrabold text-white shadow-[0_10px_22px_rgba(32,41,54,0.18)] sm:w-auto"
            >
              無料相談を申し込む
              <ArrowRight className="size-4" />
            </a>
            <a
              href={consultationHref}
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-[8px] border border-[#202936] bg-white px-8 text-[15px] font-extrabold text-[#202936] shadow-[0_6px_14px_rgba(32,41,54,0.08)] sm:w-auto"
            >
              資料請求
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

function LogoStrip() {
  const logos = [
    "freee",
    "Money Forward",
    "弥生",
    "Gmail",
    "Slack",
    "LINE",
    "Chatwork",
    "Dropbox",
    "Google Drive",
    "Supabase",
    "Vercel",
    "Resend",
  ];

  return (
    <section className="border-y border-[#eef1f5] bg-white py-7">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-x-10 gap-y-5 px-5 text-center text-[18px] font-extrabold text-[#607083] sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo) => (
          <div key={logo} className="opacity-80">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problems" className="relative overflow-hidden bg-[#3d444f] pb-20 pt-28 text-white">
      <DiagonalTop />
      <div className="mx-auto max-w-[1180px] px-5">
        <p className="text-[13px] font-bold text-white/25">Problems</p>
        <h2 className="mt-5 text-[24px] font-extrabold tracking-normal">
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
              <span className="mt-5 inline-block rounded-[2px] bg-[#10a6b7] px-3 py-1 text-[11px] font-bold">
                {card.label}
              </span>
              <h3 className="mt-4 text-[17px] font-extrabold leading-7">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-2 text-[13px] font-bold leading-6 text-white/82">
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
      <div className="mx-auto max-w-[1020px] px-5">
        <h2 className="text-center text-[24px] font-extrabold tracking-normal">
          その課題、月次業務SaaS Zeimeeで解決できます。
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {solutionCards.map((card) => (
            <article key={card.title}>
              <SolutionImage src={card.image} title={card.title} />
              <h3 className="mt-6 text-[18px] font-extrabold leading-7">
                {card.title}
              </h3>
              <p className="mt-3 text-[13px] font-medium leading-7 text-[#5c6675]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-14 grid max-w-[590px] grid-cols-[1fr_1.2fr] overflow-hidden rounded-[2px] border border-[#dfe5ec] bg-white">
          <div className="p-7">
            <p className="text-[20px] font-extrabold leading-8">
              月次業務診断
              <br />
              はじめました
            </p>
            <div className="mt-5 flex items-center gap-3 text-[12px] font-bold text-[#778292]">
              <span>supported by</span>
              <span className="text-[#1155cc]">freee</span>
              <span className="text-[#1155cc]">MF</span>
            </div>
          </div>
          <div className="bg-[#eef2f7] p-5">
            <div className="rounded-[3px] bg-white p-4 shadow-sm">
              <MiniProgress label="記帳" value="78%" />
              <MiniProgress label="証憑" value="64%" />
              <MiniProgress label="消込" value="82%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-[920px] px-5">
        <h2 className="text-center text-[24px] font-extrabold tracking-normal">
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
        <h2 className="text-center text-[24px] font-extrabold tracking-normal">
          提供予定の機能
        </h2>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {plannedItems.map((item, index) => (
            <div key={item} className="rounded-[3px] bg-white p-7 shadow-sm">
              <div className="flex h-[112px] items-center justify-center rounded-[2px] bg-[#f5f7fa]">
                <PlannedIllustration index={index} />
              </div>
              <h3 className="mt-5 text-center text-[15px] font-extrabold leading-6">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voices() {
  const voices = [
    ["税理士法人AMS", "月次業務の時間が約40%削減"],
    ["会計事務所 税理士館", "確認漏れが減り、品質が安定"],
    ["C税理士事務所", "少人数でも顧問先対応を拡大"],
  ];

  return (
    <section id="voices" className="bg-white py-24">
      <div className="mx-auto max-w-[1020px] px-5">
        <h2 className="max-w-[720px] text-[28px] font-extrabold leading-10 tracking-normal">
          月次業務に強く課題を感じた税理士事務所と開発を進めています
        </h2>
        <p className="mt-5 max-w-[760px] text-[13px] font-medium leading-7 text-[#5c6675]">
          Zeimeeは、記帳代行・証憑管理・消込に時間を取られている事務所の声をもとに、毎月の業務を「処理」から「確認」へ変えるプロダクトとして開発しています。
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {voices.map(([office, result], index) => (
            <article key={office} className="overflow-hidden rounded-[3px] bg-[#f2f4f7]">
              <div className="flex h-[250px] items-end justify-center bg-gradient-to-b from-[#f7f9fc] to-[#dfe6ef]">
                <AvatarFigure index={index} />
              </div>
              <div className="p-5">
                <p className="text-[13px] font-bold text-[#7b8593]">{office}</p>
                <h3 className="mt-2 text-[18px] font-extrabold leading-7">
                  {result}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <h3 className="mt-16 text-center text-[20px] font-extrabold">
          Zeimee お客さまの声
        </h3>
        <div className="mt-8 grid gap-7 lg:grid-cols-3">
          {voices.map(([office, result]) => (
            <article key={`${office}-case`} className="rounded-[3px] bg-[#f2f4f7] p-5">
              <div className="h-28 rounded-[2px] bg-white p-4">
                <p className="text-[13px] font-extrabold text-[#1155cc]">
                  {office}
                </p>
              </div>
              <h4 className="mt-5 text-[16px] font-extrabold leading-7">
                「{result}。月次締め前の慌ただしさが減りました」
              </h4>
              <p className="mt-4 text-[12px] font-medium text-[#6b7482]">
                導入インタビュー
              </p>
            </article>
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
        <h2 className="text-center text-[24px] font-extrabold tracking-normal">
          よくある質問
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[3px] bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[17px] font-extrabold">
                {faq.question}
                <ChevronDown className="size-5 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-[13px] font-medium leading-7 text-[#5c6675]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-[920px] gap-8 rounded-[4px] border border-[#dfe5ec] p-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:p-10">
        <div className="hidden lg:block">
          <DesktopMock compact />
        </div>
        <div>
          <h2 className="text-[20px] font-extrabold leading-8">
            Zeimee導入の検討や、製品の詳細などお気軽にお問い合わせください
          </h2>
          <a
            href={consultationHref}
            className="mt-7 inline-flex h-12 items-center gap-3 rounded-[2px] bg-[#1155cc] px-7 text-[14px] font-bold text-white"
          >
            お問い合わせ
            <ArrowRight className="size-4" />
          </a>
        </div>
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
        <div className="mt-14 grid gap-10 text-[13px] font-bold text-white/55 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="製品" items={["機能", "導入事例", "料金", "セキュリティ"]} />
          <FooterColumn title="サポート" items={["無料相談", "資料請求", "ヘルプセンター", "お問い合わせ"]} />
          <FooterColumn title="会社情報" items={["運営会社", "採用情報", "プライバシー", "利用規約"]} />
          <div className="lg:text-right">
            <a
              href={consultationHref}
              className="inline-flex h-11 items-center gap-3 rounded-[2px] border border-white/40 px-5 text-white"
            >
              お問い合わせ
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <p className="mt-16 text-[12px] font-medium text-white/35">
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

function DesktopMock({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`${compact ? "relative" : "absolute right-0 top-0"} rounded-[16px] border-[7px] border-[#242b35] bg-white shadow-[0_26px_60px_rgba(32,41,54,0.18)] ${
        compact ? "relative h-[180px] w-full max-w-[330px]" : "h-[360px] w-[560px] max-w-full"
      }`}
    >
      <div className="mx-auto h-4 w-28 rounded-b-xl bg-[#242b35]" />
      <div className="grid h-[calc(100%-16px)] grid-cols-[120px_1fr]">
        <div className="bg-[#f0f4fa] p-4">
          <Logo />
          {["仕訳", "証憑", "消込", "月次"].map((item, index) => (
            <div
              key={item}
              className={`mt-4 rounded-[3px] px-3 py-2 text-[12px] font-bold ${
                index === 0 ? "bg-[#1155cc] text-white" : "text-[#657083]"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="p-5">
          <p className="text-[16px] font-extrabold">月次ダッシュボード</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {["2,845件", "82%", "18件"].map((value) => (
              <div key={value} className="rounded-[4px] border border-[#e2e7ef] p-3">
                <p className="text-[11px] font-bold text-[#7b8593]">今月</p>
                <p className="mt-2 text-[20px] font-extrabold text-[#202936]">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[4px] border border-[#e2e7ef] p-4">
            <MiniProgress label="記帳・仕訳" value="79%" />
            <MiniProgress label="証憑解析" value="75%" />
            <MiniProgress label="消込" value="82%" />
          </div>
        </div>
      </div>
    </div>
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
      <h3 className="mt-5 text-center text-[16px] font-extrabold">{title}</h3>
      <p className="mx-auto mt-3 max-w-[210px] text-center text-[12px] font-medium leading-6 text-[#667083]">
        {description}
      </p>
    </article>
  );
}

function SolutionImage({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative h-[170px] overflow-hidden rounded-[3px] bg-[#eef2f7]">
      <Image
        src={src}
        alt={`${title}のイメージ`}
        fill
        sizes="(min-width: 1024px) 300px, 100vw"
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

function AvatarFigure({ index }: { index: number }) {
  const colors = ["#1f3557", "#4d5663", "#c19061"];

  return (
    <div className="relative h-[210px] w-[150px]">
      <div className="absolute left-10 top-2 size-16 rounded-full bg-[#f1d8c4]" />
      <div
        className="absolute bottom-0 left-5 h-36 w-28 rounded-t-[44px]"
        style={{ backgroundColor: colors[index] }}
      />
      <div className="absolute bottom-4 left-0 h-24 w-8 rotate-[-18deg] rounded-full bg-[#f1d8c4]" />
      <div className="absolute bottom-4 right-0 h-24 w-8 rotate-[18deg] rounded-full bg-[#f1d8c4]" />
    </div>
  );
}

function MiniProgress({ label, value }: { label: string; value: string }) {
  const width = Number(value.replace("%", ""));

  return (
    <div className="mb-3 last:mb-0">
      <div className="mb-1.5 flex justify-between text-[11px] font-bold text-[#5c6675]">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#e1e7ef]">
        <div className="h-1.5 rounded-full bg-[#1155cc]" style={{ width: `${width}%` }} />
      </div>
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

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-5 text-white">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
