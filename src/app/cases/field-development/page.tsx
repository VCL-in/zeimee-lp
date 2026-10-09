import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DetailShell } from "@/components/DetailShell";
import styles from "@/components/detail.module.css";
const title = "日計表の転記を削減、Excelの5工程を1画面に｜税理士事務所のAI導入事例";
const description = "広島県の税理士事務所で、日計表の転記やExcelの加工業務を改善。Zeimeeの対面ヒアリングと個別開発による、記帳・相続税取引履歴・会計ソフト移行の導入事例を紹介します。";
const url = "https://zeimee.com/cases/field-development";
const source = "https://note.com/shuma_sajimoto/n/n3824385dbdf2";
export const metadata: Metadata = { title: `${title}｜Zeimee`, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "article", publishedTime: "2026-09-09T00:00:00+09:00", authors: ["佐次本脩真"], locale: "ja_JP" } };
export default function FieldDevelopment() {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, description, mainEntityOfPage: url, datePublished: "2026-09-09T00:00:00+09:00", dateModified: "2026-09-09T00:00:00+09:00", author: { "@type": "Person", name: "佐次本脩真", url: "https://zeimee.com/#team" }, publisher: { "@type": "Organization", name: "株式会社Zeimee", url: "https://zeimee.com" }, isBasedOn: source };
  return <DetailShell label="導入事例" casePage>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <header className={styles.hero}>
      <p className={styles.eyebrow}>税理士事務所のAI導入事例</p>
      <h1>日計表の転記を削減し、<br />Excelの5工程を1画面に。</h1>
      <p className={styles.lead}>現場に合わせたAI開発で、記帳業務を改善</p>
      <p className={styles.byline}>広島県の税理士事務所</p>
      <dl className={styles.profile}>
        <div><dt>業種</dt><dd>税理士・会計事務所</dd></div>
        <div><dt>顧問先数</dt><dd>2,000件超</dd></div>
        <div><dt>支援内容</dt><dd>対面での業務ヒアリング・AIツールの個別開発</dd></div>
      </dl>
    </header>
    <figure className={styles.casePhoto}>
      <Image src="/lp/seiwa-team.png" alt="税理士事務所の皆さまとZeimeeメンバーの集合写真" width={1950} height={1069} sizes="(max-width: 1080px) 100vw, 1032px" />
    </figure>
    <div className={styles.caseSummary}>
      {[
        ["導入前の課題", "AIで読み取った日計表も、一行ずつ会計ソフトへの入力が必要。Excel間のコピー・貼り付けも負担になっていた。"],
        ["Zeimeeの支援", "エンジニア2人が約1ヶ月、現場で業務を確認。職員と試しながら、取込データの変換や帳票チェックを開発。"],
        ["導入による変化", "日計表の一行ずつの確定作業を省き、JDL向けCSV作成の5工程を1画面に集約。確認・取込までの流れを整備。"],
      ].map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
    </div>
    <article className={styles.body}>
      <section className={styles.section}>
        <p>顧問先2,000件超を支援する広島県の税理士事務所では、日計表の読み取りにAIを活用していました。一方で、読み取り後の転記や会計ソフトに合わせたデータ加工は手作業のまま。顧問先ごとに異なる帳票や処理ルールへの対応も課題でした。</p>
        <p>Zeimeeは2026年7月からエンジニア2人が現場に入り、約1ヶ月にわたって職員の方々と業務を確認。日計表変換、仕訳チェック、相続税の取引履歴作成など、実務に合わせたツールを開発しました。</p>
      </section>
      <section className={styles.section}>
        <p className={styles.eyebrow}>導入前の課題</p>
        <h2>AIの読み取り後も残っていた、転記とデータ加工</h2>
        <p>職員の方は、手書きの日計表をGeminiで読み取り、会計ソフトへの入力に活用していました。しかし、一括で取り込める形式になっておらず、一行ずつ確定する操作が必要でした。</p>
        <p>会計ソフトへの取込には、顧問先ごとの勘定科目やコードの設定も必要です。AIの読み取り結果を出力するだけでは業務は完結せず、Excelでの加工や確認に手間がかかっていました。</p>
        <p>また、AIの使い方や判断基準が個々の担当者に蓄積され、ほかの職員が同じ方法を再利用しにくい状況もありました。</p>
      </section>
      <section className={styles.section}>
        <p className={styles.eyebrow}>導入・開発の進め方</p>
        <h2>実際の帳票を見ながら、担当者と処理の流れを設計</h2>
        <p>エンジニアが事務所内で開発し、職員の方に資料の受け取り方、入力方法、確認手順をヒアリング。実際のExcelやPDFをもとに、対象業務と必要な機能を整理しました。</p>
        <p>例えば、当初「現金出納帳のチェック」と捉えていた相談は、詳しく確認すると、顧問先が入力した仕訳と提出証憑を照合する業務でした。処理の流れを一緒に確認することで、開発対象を実務に合わせて修正しました。</p>
        <p>開発したツールは職員の方と試し、帳票ごとの例外や追加要望を反映。試用と改善を繰り返しながら、日々の業務で使う形に整えました。</p>
      </section>
      <section className={styles.section}>
        <p className={styles.eyebrow}>導入したツールと業務の変化</p>
        <h2>日計表の転記を削減。CSV作成の5工程を1画面に集約</h2>
        <div className={styles.steps}>{[
          ["日計表変換：一行ずつの確定作業を省略", "手書きの日計表を読み取り、会計ソフトに取り込める形式へ変換するツールを開発。職員が一行ずつ確定していた操作を省けるようにしました。"],
          ["JDL向けCSV作成：Excelの5工程を集約", "複数のExcel間でコピーと貼り付けを繰り返していた5工程を、1画面で扱える仕組みに変更。会計ソフトへ渡すデータの加工をまとめました。"],
          ["仕訳チェック：証憑との照合を支援", "顧問先が入力した仕訳帳とレシート画像を突き合わせ、月次で確認が必要な箇所を洗い出すツールを開発しました。"],
          ["相続税取引履歴：複数口座の明細を一覧化", "金融機関ごとの取引履歴PDFを読み取り、口座をまたいで日付順に整理したExcelを出力するツールを開発しました。"],
          ["会計ソフト移行：仕訳帳の形式を変換", "TKCの仕訳帳をマネーフォワードで読み込める形式へ変換するツールを開発し、ソフト間のデータ受け渡しを支援しました。"],
        ].map(([heading, body]) => <div className={styles.step} key={heading}><h3>{heading}</h3><p>{body}</p></div>)}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.eyebrow}>運用への定着</p>
        <h2>取込前の確認と、担当者の知識を共有する仕組みを整備</h2>
        <p>日計表変換では、画像の読み取りをAI、金額の検算をプログラムで処理。検算を通過したデータを取込形式にすることで、会計ソフトへ入れる前に確認できるようにしました。</p>
        <p>また、顧問先ごとの判断基準や繰り返し使う修正内容を、ツールや処理ルールに反映。職員の方が自作していた資料せん集計ツールも共有する場所にまとめ、住所の自動入力を追加しました。</p>
        <p>開発が進むにつれ、相続や月次チェックなど、別の担当者からも業務改善の相談が寄せられるようになりました。</p>
      </section>
      <section className={styles.section}>
        <p className={styles.eyebrow}>今後の取り組み</p>
        <h2>確認が必要な業務を残しながら、自動化の範囲を広げる</h2>
        <p>紙の証憑の電子化や担当者による最終チェックは、引き続き人が担います。読み取りの誤りや、年に一度しか発生しない例外への対応も必要です。</p>
        <p>現場で得た処理ルールを次の業務に活用しながら、共通化できる機能と事務所ごとに作り込む機能を整理し、改善を続けています。</p>
      </section>
      <nav className={styles.related} aria-label="関連ツール"><Link href="/tools/bookkeeping">記帳自動化AI →</Link><Link href="/tools/collection">証憑収集AI →</Link><Link href="/tools/migration">会計ソフト引越しAI →</Link></nav>
    </article>
  </DetailShell>;
}
