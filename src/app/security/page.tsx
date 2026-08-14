import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "セキュリティと承認",
  description:
    "Zeimeeにおけるデータの扱い、AI処理、人による確認・承認、会計ソフトへの反映、失敗時の管理方針を説明します。",
  alternates: {
    canonical: "/security",
  },
  openGraph: {
    url: "/security",
    title: "セキュリティと承認 | Zeimee",
    description:
      "Zeimeeにおけるデータの扱い、AI処理、人による確認・承認、会計ソフトへの反映、失敗時の管理方針。",
  },
};

const principles = [
  {
    title: "データの境界",
    text: "税理士事務所を基本のデータ境界とし、顧問先ごとの処理を事業所単位で分けて扱います。担当する業務に必要な範囲へ処理を限定します。",
  },
  {
    title: "会計ソフトの認証情報",
    text: "会計ソフトとの連携に使う認証情報は、画面や通常の処理記録へ表示せず、保護された領域を通じて扱います。",
  },
  {
    title: "AIに渡す情報",
    text: "AI処理では、目的に不要な個人情報や取引情報を含めないよう、処理ごとに必要な情報へ絞ります。",
  },
  {
    title: "人によるレビュー",
    text: "AIが作成した仕訳・消込・証憑紐付け等の候補は、担当者が確認し、必要に応じて修正・却下・承認できます。",
  },
  {
    title: "承認と外部反映の区別",
    text: "Zeimee内で承認された状態と、会計ソフトへの反映が完了した状態を分けて管理します。承認済みであっても、反映完了とは限りません。",
  },
  {
    title: "失敗時の扱い",
    text: "会計ソフトへの反映に失敗した処理は成功として扱わず、エラー、再実行、人による確認の対象として分離します。",
  },
  {
    title: "処理の記録",
    text: "担当者による承認と会計ソフトへの反映を別の段階として記録し、処理の経過を追えることを前提に設計しています。",
  },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white text-[#202936]">
      <header className="border-b border-[#e7ebf0]">
        <div className="mx-auto flex h-16 max-w-[1040px] items-center justify-between px-5">
          <Link href="/" className="text-[24px] font-extrabold tracking-tight">
            Zeimee
          </Link>
          <Link
            href="/#contact"
            className="rounded-[4px] bg-[#1155cc] px-5 py-2.5 text-[14px] font-bold text-white"
          >
            お問い合わせ
          </Link>
        </div>
      </header>

      <section className="bg-[#f4f7fb] py-20 sm:py-24">
        <div className="mx-auto max-w-[900px] px-5">
          <ShieldCheck className="size-12 text-[#1155cc]" aria-hidden="true" />
          <p className="mt-6 text-[14px] font-bold uppercase tracking-[0.18em] text-[#1155cc]">
            Security and approval
          </p>
          <h1 className="mt-4 text-balance text-[36px] font-bold leading-tight sm:text-[48px]">
            セキュリティと承認の考え方
          </h1>
          <p className="mt-8 max-w-[820px] text-[18px] leading-9 text-[#4f5a69]">
            Zeimeeは、税理士事務所を基本のデータ境界とし、顧問先単位の処理を事業所ごとに分けて扱います。会計ソフトの認証情報は保護された領域で管理し、AIが作った仕訳・消込・証憑紐付け等の候補は、必要に応じて担当者が確認・修正・却下できます。Zeimee内の承認と会計ソフトへの反映完了は別に記録し、反映失敗は成功として扱いません。
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[900px] px-5">
          <h2 className="text-[30px] font-bold">7つの基本方針</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[8px] border border-[#e0e6ee] p-6 sm:p-7"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[#1155cc]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-[19px] font-bold">{principle.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#5c6675]">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-12 rounded-[8px] bg-[#f4f7fb] p-7 sm:p-9">
            <h2 className="text-[22px] font-bold">対象範囲とお問い合わせ</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#5c6675]">
              このページは、Zeimeeのデータ境界、AI処理、人による承認、会計ソフトへの反映管理に関する基本方針を説明するものです。個別の利用環境、会計ソフト、対象機能によって運用は異なります。導入時の確認事項はお問い合わせください。
            </p>
            <p className="mt-4 text-[14px] font-bold text-[#7a8492]">
              内容確認日: 2026年8月14日
            </p>
          </aside>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 text-[15px] font-bold text-[#1155cc]"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Zeimeeトップへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
