import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "セキュリティと承認 | Zeimee", alternates: { canonical: "https://zeimee.com/security" } };
export default function SecurityPage() {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "64px 24px", lineHeight: 2 }}>
      <Link href="/">Zeimee トップへ</Link>
      <h1 style={{ fontSize: 32, margin: "32px 0" }}>セキュリティと承認の考え方</h1>
      <p>Zeimeeは、税理士事務所を基本のデータ境界とし、顧問先単位の処理を事業所ごとに分けて扱います。会計ソフトの認証情報は保護された領域で管理し、AIが作った仕訳・消込・証憑紐付け等の候補は、必要に応じて担当者が確認・修正・却下できます。Zeimee内の承認と会計ソフトへの反映完了は別に記録し、反映失敗は成功として扱いません。</p>
      <h2 style={{ fontSize: 26, marginTop: 40 }}>7つの基本方針</h2>
      {[
        ["データの境界", "税理士事務所を基本のデータ境界とし、顧問先ごとの処理を事業所単位で分けて扱います。担当する業務に必要な範囲へ処理を限定します。"],
        ["会計ソフトの認証情報", "会計ソフトとの連携に使う認証情報は、画面や通常の処理記録へ表示せず、保護された領域を通じて扱います。"],
        ["AIに渡す情報", "AI処理では、目的に不要な個人情報や取引情報を含めないよう、処理ごとに必要な情報へ絞ります。"],
        ["人によるレビュー", "AIが作成した仕訳・消込・証憑紐付け等の候補は、担当者が確認し、必要に応じて修正・却下・承認できます。"],
        ["承認と外部反映の区別", "Zeimee内で承認された状態と、会計ソフトへの反映が完了した状態を分けて管理します。承認済みであっても、反映完了とは限りません。"],
        ["失敗時の扱い", "会計ソフトへの反映に失敗した処理は成功として扱わず、エラー、再実行、人による確認の対象として分離します。"],
        ["処理の記録", "担当者による承認と会計ソフトへの反映を別の段階として記録し、処理の経過を追えることを前提に設計しています。"],
      ].map(([title, body]) => <section key={title} style={{ marginTop: 28 }}><h3 style={{ fontSize: 20 }}>{title}</h3><p>{body}</p></section>)}
      <h2 style={{ fontSize: 26, marginTop: 40 }}>対象範囲とお問い合わせ</h2>
      <p>このページは、Zeimeeのデータ境界、AI処理、人による承認、会計ソフトへの反映管理に関する基本方針を説明するものです。個別の利用環境、会計ソフト、対象機能によって運用は異なります。導入時の確認事項はお問い合わせください。</p>
      <p style={{ marginBlock: 24 }}>内容確認日: 2026年8月28日</p>
      <Link href="/#contact">お問い合わせ</Link>
    </main>
  );
}
