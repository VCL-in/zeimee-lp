import type { Metadata } from "next";
import { createColumnMetadata } from "@/lib/column-metadata";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ColumnService } from "@/components/ColumnService";
import { ColumnArticle } from "@/components/ColumnArticle";
import { getColumn } from "@/lib/columns";
import {
  COMPARISON_CHECKED as CHECKED,
  comparisonServices,
  comparisonRows,
} from "@/lib/bookkeeping-comparison";
import {
  AutomationBasics,
  ComparisonMethod,
  CostComparison,
  WorkflowCase,
  PilotChecklist,
} from "@/components/ColumnComparisonGuide";
import detail from "@/components/detail.module.css";
import styles from "@/components/column.module.css";

const column = getColumn("10001");

export const metadata: Metadata = createColumnMetadata(column);

const toc = [
  { id: "ai-basics", label: "記帳自動化・AI-OCR・AI仕訳の違い" },
  { id: "types", label: "記帳自動化ツールは4タイプに分かれる" },
  { id: "checklist", label: "選ぶ前に確認したい5つのこと" },
  { id: "research-method", label: "選定基準と調査方法" },
  { id: "table", label: "11項目の比較早見表" },
  { id: "cost-example", label: "10顧問先・月1,000明細の料金例" },
  { id: "services", label: "会計事務所向け 記帳自動化ツール10選" },
  { id: "workflow-case", label: "AIの読取り後まで改善した導入事例" },
  {
    id: "zeimee-recommendation",
    label: "自事務所に合う記帳自動化を進めるために",
  },
  { id: "how-to-choose", label: "事務所のタイプ別の選び方" },
  { id: "pilot-checklist", label: "試験導入の確認シート" },
  { id: "steps", label: "導入の進め方とつまずきやすい点" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const faqs = [
  {
    question: "AI-OCRの読取精度と、仕訳の正解率は同じですか？",
    answer:
      "同じではありません。日付や金額を正しく読めても、勘定科目・税区分・補助科目が事務所の処理方針と一致するとは限りません。公表値の対象帳票や測定条件を確認し、必要な項目ごとに実データで評価してください。",
  },
  {
    question: "手書きの領収書や通帳にも対応していますか？",
    answer:
      "帳票ごとに異なります。手書き領収書や紙通帳の対応を公表するサービスもありますが、手書きの日計表や独自帳票まで読めるとは限りません。比較表の対応範囲を確認し、記載がない帳票は提供会社に問い合わせてください。",
  },
  {
    question: "無料のAIデータ化だけで記帳できますか？",
    answer:
      "無料なのがデータ化の工程だけという場合があります。freeeの新AIデータ化サービスも認定アドバイザー契約が前提で、従来の人が補正するサービスとは別です。会計ソフト・会員制度・担当者の確認まで含む総額で判断してください。",
  },
  {
    question: "記帳自動化ツールを入れれば、記帳業務はすべて自動になりますか？",
    answer:
      "いいえ。多くのサービスはデータ化や仕訳候補の作成を自動化しますが、仕訳の確認・修正、顧問先ごとのルール整備、不足資料の確認は事務所側に残ります。導入前に、どの工程が残るかを確認することが重要です。",
  },
  {
    question: "顧問先によって会計ソフトがバラバラでも使えますか？",
    answer:
      "STREAMEDのように複数の会計ソフトへ出力できるサービスもあれば、弥生・freee・マネーフォワードの記帳代行プランのように自社の会計ソフトが前提のサービスもあります。顧問先の会計ソフト構成を先に洗い出してから選ぶのがおすすめです。",
  },
  {
    question: "料金はどのように比較すればよいですか？",
    answer:
      "料金体系は、仕訳・明細ごとの従量課金、事業所ごとの課金、顧問先数無制限の定額などに分かれます。顧問先数と月間の仕訳数をもとに、自事務所の規模で試算して比較してください。",
  },
  {
    question: "AIが作った仕訳の精度はどのくらいですか？",
    answer:
      "精度は証憑の種類や顧問先の取引内容によって大きく変わります。公表値はサービスごとの条件で測定されたものなので、無料体験や試験導入で、自事務所の実際の顧問先データを使って確認するのが確実です。",
  },
  {
    question:
      "既存のツールでは対応できない業務がある場合はどうすればよいですか？",
    answer:
      "特殊な帳票や事務所独自の処理ルール、複数システム間のデータ加工などは、パッケージでは対応しきれないことがあります。その場合は、業務に合わせて仕組みを設計・開発する導入支援サービスを検討する方法があります。",
  },
];

export default function Page() {
  return (
    <ColumnArticle
      column={column}
      toc={toc}
      editorialPolicy={
        <>
          <p>
            本記事は、記帳業務のどの工程を自動化できるか、導入後にどの確認作業が残るかという視点で、各サービスの公式公開情報を調査・整理しています。
          </p>
          <p>
            他社サービスの実機比較は行っていません。掲載順は性能や品質の順位を示すものではなく、Zeimeeを含むサービスごとに適した業務と確認したい点を紹介しています。料金・機能の情報確認日は各サービス欄に記載しています。
          </p>
        </>
      }
      disclosure={
        <>
          本記事は、記事内で紹介している「Zeimee」を提供する株式会社Zeimeeが執筆・運営しています。他社サービスの情報は
          {CHECKED}
          時点の各社公式情報に基づき、出典を記載しています。料金・機能は変更される場合があります。外部への誘導リンクは設けていませんが、各社の紹介には調査した公式資料の名称と確認日を記載しています。契約前に提供会社へ最新条件をご確認ください。
        </>
      }
    >
      <div className={detail.body}>
        <section className={detail.section}>
          <p>
            記帳自動化ツールを選ぶときは、AIの有無だけでなく、顧問先の会計ソフト、帳票の種類、担当者の確認作業、仕訳を反映する方法まで揃えて比較することが大切です。
          </p>
          <p>
            この記事は、会計事務所・税理士事務所が顧問先の記帳に使う10サービスを比較します。AI-OCR・AI仕訳・人によるデータ化・自動登録を区別し、対応ソフト、料金例、導入後に残る作業から事務所に合う選び方を解説します。
          </p>
          <div className={detail.note}>
            <strong>この記事の結論</strong>
            <ul>
              <li>
                紙の証憑が多く、会計ソフトが顧問先ごとに異なる →
                証憑データ化サービス（STREAMEDなど）
              </li>
              <li>
                顧問先の会計ソフトがほぼ統一されている →
                その会計ソフトの記帳代行プラン（弥生・freee・マネーフォワード）や既存システムのAI-OCR
              </li>
              <li>
                特殊な帳票や事務所独自のルールが多く、パッケージで対応しきれない
                → 業務に合わせて設計・開発する導入支援
              </li>
            </ul>
          </div>
        </section>

        <AutomationBasics />

        <section className={detail.section} id="types">
          <h2>記帳自動化ツールは4タイプに分かれる</h2>
          <p>
            会計事務所で使われる記帳自動化の手段は、大きく次の4タイプに分けられます。
          </p>
          <h3>1. 証憑データ化サービス</h3>
          <p>
            領収書や通帳などをスキャン・撮影してアップロードすると、AIや人の確認を経て仕訳データに変換するサービスです。複数の会計ソフトに出力できるものが多く、顧問先の会計ソフトが混在している事務所でも使いやすいのが特徴です。
          </p>
          <h3>2. 会計ソフト内蔵の自動化（記帳代行プラン）</h3>
          <p>
            弥生・freee・マネーフォワードなどの会計ソフトが、会計事務所向けに提供している記帳代行用のプランや機能です。明細の自動取込や仕訳の自動登録を会計ソフト内で完結できる一方、その会計ソフトを使う顧問先が対象になります。
          </p>
          <h3>3. 会計事務所向けシステムのAI-OCR</h3>
          <p>
            JDLやMJSのシステム、TKC
            FXシリーズのAI読取りオプションなどです。必要な機器・本体システム・オプションが異なるため、既存環境で使える範囲を確認します。
          </p>
          <h3>4. 業務に合わせて設計・開発する導入支援</h3>
          <p>
            パッケージをそのまま使うのではなく、事務所の帳票や処理ルールに合わせて、AIの読み取り・仕訳候補・チェック・データ加工の仕組みを設計・開発するタイプです。対応範囲を広げられる反面、要件の整理や導入期間が必要です。
          </p>
        </section>

        <section className={detail.section} id="checklist">
          <h2>選ぶ前に確認したい5つのこと</h2>
          <ol>
            <li>
              <strong>顧問先の会計ソフト構成</strong>
              ：会計ソフトごとの顧問先数。1つに偏っていれば記帳代行プラン、混在していれば複数ソフトに出力できるサービスが候補になります。
            </li>
            <li>
              <strong>証憑の形式</strong>
              ：紙・PDF・明細データ・手書き帳票の比率。手書きや独自帳票が多いと、読み取り精度や追加の加工が課題になります。
            </li>
            <li>
              <strong>月間の仕訳数と顧問先数</strong>
              ：従量課金と定額のどちらが有利かは、処理量で変わります。
            </li>
            <li>
              <strong>確認・修正の流れ</strong>
              ：AIが作った仕訳を誰がどの画面で確認し、どう会計ソフトへ反映するか。
            </li>
            <li>
              <strong>セキュリティと顧問先データの扱い</strong>
              ：データの保存場所、アクセス権限、外部サービスへの送信範囲。
            </li>
          </ol>
        </section>

        <ComparisonMethod />

        <section className={detail.section} id="table">
          <h2>比較早見表</h2>
          <p>
            料金は{CHECKED}
            時点で調査した公式情報です。税込・税抜は明記された区分に従い、記載のない金額は税区分要確認としています。「要確認」は非対応という意味ではありません。
          </p>
          <p id="comparison-table-help" className={styles.tableHint}>
            <span aria-hidden="true">↔</span>{" "}
            表は左右にスクロールできます。料金の詳細条件は各サービスの紹介をご確認ください。
          </p>
          <div
            className={styles.tableWrap}
            role="region"
            aria-label="サービス比較表"
            aria-describedby="comparison-table-help"
            tabIndex={0}
          >
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">サービス名</th>
                  {comparisonServices.map((service, i) => (
                    <th scope="col" key={service.name}>
                      <a href={`#service-${i}`}>{service.name}</a>
                      <span>
                        {service.company.replace("（本記事の運営会社）", "")}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.key}>
                    <th scope="row">{row.label}</th>
                    {comparisonServices.map((service) => (
                      <td key={service.name}>
                        {row.key === "price"
                          ? (service.priceSummary ?? service.price)
                          : service[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <CostComparison />

        <section className={detail.section} id="services">
          <h2>会計事務所向け 記帳自動化ツール10選</h2>
          <p>
            まず本記事の運営元であるZeimeeをご紹介し、続いて各社のサービスを紹介します。掲載順は順位ではありません。
          </p>
          {comparisonServices.map((service, i) => (
            <ColumnService
              key={service.name}
              service={service}
              id={`service-${i}`}
              checked={CHECKED}
              featured={i === 0}
            />
          ))}
        </section>

        <WorkflowCase />

        <section className={detail.section} id="zeimee-recommendation">
          <h2>自事務所に合う記帳自動化を進めるために</h2>
          <p>
            記帳自動化サービスは、読み取れる帳票、対応する会計ソフト、確認・修正の進め方がそれぞれ異なります。顧問先の資料や月間の処理量、職員の作業の流れをもとに、自事務所の課題に合うサービスを比較してみてください。
          </p>
          <p>
            ツールを導入した後も、手書き帳票からの転記や、Excelでのデータ加工、会計ソフトへの取込準備が残る場合があります。こうした事務所独自の業務まで改善したい方には、
            <strong>
              現場の業務に合わせてAIの仕組みを設計・開発するZeimeeをおすすめします。
            </strong>
          </p>
          <p>
            Zeimeeは、エンジニアが実際の業務を確認し、帳票の読み取りからチェック、取込データの作成まで、必要な工程を一緒に整理します。標準的な証憑のデータ化だけが目的の場合は、既存サービスも含めてご検討ください。
          </p>
          <p>
            <Link href="/cases/field-development">
              導入事例：日計表の転記を削減し、Excelの5工程を1画面に
            </Link>
          </p>
          <Link
            className={styles.recommendBanner}
            href="/#contact"
            aria-label="ZeimeeのAI導入・開発支援の資料をダウンロード"
          >
            <Image
              className={styles.bannerArt}
              src="/images/column/zeimee-workflow-banner-v1.webp"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 824px"
            />
            <div className={styles.bannerCopy}>
              <span className={styles.bannerEyebrow}>
                ZEIMEE / AI & ACCOUNTING
              </span>
              <strong>
                その事務所のやり方に、
                <br />
                AIを合わせる。
              </strong>
              <span className={styles.bannerDescription}>
                会計事務所に特化した、AI導入・開発支援
              </span>
            </div>
            <span className={styles.bannerFooter}>
              <span>Zeimee</span>
              <span>
                資料で詳しく見る <ArrowUpRight />
              </span>
            </span>
          </Link>
        </section>

        <section className={detail.section} id="how-to-choose">
          <h2>事務所のタイプ別の選び方</h2>
          <h3>顧問先の会計ソフトが混在している事務所</h3>
          <p>
            複数の会計ソフトに出力できる証憑データ化サービスが候補です。顧問先の追加料金や従量課金の単価を、自事務所の仕訳数で試算して比較しましょう。
          </p>
          <h3>特定の会計ソフトに顧問先が集中している事務所</h3>
          <p>
            その会計ソフトの記帳代行プランや、既存システムのAI-OCRを使うと、データの受け渡しが少なく運用がシンプルになります。パートナー制度への加入条件を確認してください。
          </p>
          <h3>独自の帳票や処理ルールが多い事務所</h3>
          <p>
            手書きの日計表や顧問先独自の帳票、Excelでの加工が多い場合、パッケージのデータ化だけでは手作業が残りがちです。どの工程に時間がかかっているかを洗い出し、業務に合わせた仕組みづくりを検討する価値があります。
          </p>
        </section>

        <PilotChecklist />

        <section className={detail.section} id="steps">
          <h2>導入の進め方とつまずきやすい点</h2>
          <div className={detail.steps}>
            <div className={detail.step}>
              <h3>1. 対象業務と顧問先を決める</h3>
              <p>
                最初から全顧問先に広げず、証憑の種類が似た顧問先から試すと効果を測りやすくなります。
              </p>
            </div>
            <div className={detail.step}>
              <h3>2. 実データで試す</h3>
              <p>
                無料体験や試験導入で、実際の証憑を使って精度と確認の手間を確かめます。
              </p>
            </div>
            <div className={detail.step}>
              <h3>3. 確認と反映の流れを決める</h3>
              <p>
                誰が確認し、どのタイミングで会計ソフトへ反映するかを決め、担当者ごとのやり方のばらつきを防ぎます。
              </p>
            </div>
            <div className={detail.step}>
              <h3>4. 効果を測って広げる</h3>
              <p>
                1顧問先あたりの作業時間や修正件数を記録し、対象を広げるか判断します。
              </p>
            </div>
          </div>
          <p>
            よくあるつまずきは、データ化の後に残る「確認・修正」と「会計ソフトに合わせた加工」の工程を見落とすことです。ツールの比較だけでなく、導入後に残る作業まで含めて検討しましょう。
          </p>
        </section>

        <section className={detail.section} id="faq">
          <h2>よくある質問</h2>
          {faqs.map((f) => (
            <div className={detail.faq} key={f.question}>
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </section>

        <section className={detail.section} id="summary">
          <h2>まとめ</h2>
          <p>
            会計事務所向けの記帳自動化ツールは、証憑データ化サービス、会計ソフト内蔵の記帳代行プラン、会計事務所向けシステムのAI-OCR、業務に合わせた導入支援の4タイプに分かれます。顧問先の会計ソフト構成、証憑の形式、処理量、確認の流れを整理したうえで、自事務所に合うタイプを選ぶことが大切です。
          </p>
          <p>
            Zeimeeでは、AI導入の進め方や事例をまとめた資料を無料でお届けしています。パッケージでは対応しきれない業務がある場合は、お気軽にご相談ください。
          </p>
        </section>
      </div>
    </ColumnArticle>
  );
}
