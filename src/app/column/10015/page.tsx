import Link from "next/link";
import { ColumnArticle } from "@/components/ColumnArticle";
import { ColumnReferences } from "@/components/ColumnReferences";
import {
  ColumnSection,
  ColumnNote,
  ColumnInformationTable,
  ColumnFaq,
} from "@/components/ColumnBlocks";
import { createColumnMetadata } from "@/lib/column-metadata";
import { getColumn } from "@/lib/columns";
import detail from "@/components/detail.module.css";
import {
  CHECKED,
  sourceDataRows,
  routeRows,
  methodCompareRows,
  importSpecRows,
  specMemoRows,
  toolRows,
  recheckRows,
  checklistRows,
  ledgerRows,
  linkedReferences,
  textReferences,
} from "./data";

const ARTICLE_ID = "10015";
const toc = [
  { id: "manual-work", label: "仕訳インポート変換の手作業と対象範囲" },
  { id: "two-ways", label: "生成AIの2つの使い方" },
  { id: "import-spec", label: "会計ソフトの仕訳インポート仕様" },
  { id: "conversion-steps", label: "仕訳インポート形式への変換手順" },
  { id: "handwritten-daily-report", label: "手書きの日計表・売上帳の変換" },
  { id: "pre-import-check", label: "取込前の検証チェックリスト" },
  { id: "rule-ledger", label: "顧問先ごとの変換ルール台帳" },
  { id: "limits", label: "自作の限界の見極め方" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
  { id: "references", label: "参考資料" },
];

export function generateMetadata() {
  return createColumnMetadata(getColumn(ARTICLE_ID));
}

const faqs = [
  { question: "ChatGPTにファイルをアップロードしてコード実行で変換するのは方式Aですか？", answer: "実データをサービスへ渡すため方式Aです。AIにコードだけを書かせ、実データを手元で処理する方式Bとは情報の出し方が異なります。契約と所内規程で入力可否を確認します。" },
  { question: "Power QueryとVBAはどちらを使いますか？", answer: "整形や列のピボット解除はPower Query、採番や識別フラグ等の書きにくい組立てはVBAを検討します。まずダミーと正解データで検証してください。" },
  { question: "事務所契約のAIなら実データで変換してよいですか？", answer: "契約名だけで決めず、学習利用・保存・処理先と所内規程を確認します。許可されたサービスでも、繰り返す変換はルールを手元に残す方式Bの再現性を比較します。" },
  { question: "CSVはUTF-8とShift_JISのどちらにしますか？", answer: "取込先の製品・メニューの公式仕様に合わせます。文字コードとBOMの有無を仕様メモに残し、記載がない場合はサポート確認と少量のテストを行います。" },
  { question: "会計ソフト間の移行データにも同じ手順を使えますか？", answer: "移行は科目・補助科目・開始残高・年度等の突合も必要です。この記事の顧問先資料の月次変換とは別の工程として計画します。" },
  { question: "市販の変換ツールやAI-OCRとどう使い分けますか？", answer: "定型データを既存機能で処理できれば、その検証と運用を優先します。自作は同じ形式の変換が繰り返され、確認・修正できる担当者がいる範囲から始めます。" },
  { question: "合計が合えばそのまま取り込めますか？", answer: "合計だけでは不十分です。別日付・科目・税区分や同額の重複は残り得ます。取込前の表と取込後の仕訳帳の両方で確認します。" },
];

export default function Page() {
  const column = getColumn(ARTICLE_ID);
  return (
    <ColumnArticle
      ctaDescription="業務に合わせて仕組みを作った事例と、AI導入の進め方をご案内します。"
      column={column}
      toc={toc}
      editorialPolicy={
        <>
          <p>
            本記事は、法令（e-Gov法令検索）、個人情報保護委員会・国税庁の公表資料、会計ソフト各社の公式ヘルプ、MicrosoftやGoogleなどの公式ドキュメントといった一次情報を中心に、
            {CHECKED}
            に内容を確認して作成しています。確認できなかった仕様は、本文に「確認できなかった」と記載しています。
          </p>
          <p>
            会計ソフトへの実際の取込や、変換ルール（数式・Power
            Query・VBA）の動作の実機検証は行っていません。表やプロンプトは一般的な例で、特定の事業者の実績ではありません。令和8年改正の個人情報保護法は確認日時点で未施行のため、条文は現行法で記載しています。個別の判断は、専門家や所管官庁にご確認ください。
          </p>
        </>
      }
      disclosure={
        <>
          本記事は、記事内で紹介している「Zeimee」を提供する株式会社Zeimeeが執筆・運営しています。会計ソフト各社、Microsoft、Google、Anthropicなどの情報は
          {CHECKED}
          時点の公式ヘルプ・公開情報をもとに記載し、外部への誘導リンクは設けていません。仕様は変更される場合があるため、最新の情報は各社の公式情報をご確認ください。
        </>
      }
    >
      <div className={detail.body}>
        <section className={detail.section}>
          <p>
            顧問先から届く売上集計のExcel、レジや銀行のCSV、手書き日計表の読み取り結果は、列の並びも日付や金額の書き方もばらばらで、会計ソフトの仕訳インポート形式への変換に毎月時間がかかります。
          </p>
          <p>
            この記事では、生成AIに実データを渡さずに変換ルールを作らせる手順と、会計ソフト各社の公式仕様にもとづく取込前の検証項目を解説します。
          </p>
          <ColumnNote title="この記事の結論">
            <ul>
              <li>
                先に会計ソフトの取込仕様を確認し、列順・日付形式・税区分の表記などを「取込仕様メモ」にまとめる
              </li>
              <li>
                生成AIには実データではなく、ダミーサンプルと仕様を渡して数式・Power
                Query・VBAを書かせ、手元のExcelで実行する
              </li>
              <li>
                手書き帳票は「読み取りはAI、検算はプログラム」に分け、原本照合の範囲を人が決める
              </li>
              <li>
                取込前に件数・合計・日付・科目・税区分・文字・重複を確認する。2026年10月1日以降は経過措置70%の表記に注意する
              </li>
              <li>変換ルールは顧問先ごとに台帳にし、担当者に依存させない</li>
            </ul>
          </ColumnNote>
        </section>

        <ColumnSection
          id="manual-work"
          title="仕訳インポート用CSVへの変換と対象範囲"
        >
          <p>
            この記事で扱うのは、顧問先が作ったデータを会計ソフトの取込形式に整える作業です。会計ソフトを乗り換えるデータ移行は別の確認工程が必要です。移行が目的の場合は<Link href="/tools/migration">会計ソフト引越しAI</Link>をご覧ください。
          </p>
          <ColumnInformationTable
            label="顧問先から届く元データと、変換で発生する作業（例）"
            headers={["元データの例", "変換で発生する作業"]}
            rows={sourceDataRows}
          />
          <p>
            変換の中心は列順、日付、符号、科目・補助科目、税区分、複合仕訳の行構成です。
          </p>
          <h3>仕訳として取り込むか、明細として取り込むかを先に決める</h3>
          <p>
            銀行・カード明細は標準の明細取込で足りる場合があります。freee会計の明細アップロードや、弥生のYAYOI SMART CONNECT等について、利用中の製品・口座の対応を公式情報で確認します。仕訳で取り込むか、明細から仕訳候補を作るかを先に決めます。
          </p>
          <ColumnInformationTable
            label="元データの種類と取込ルートの目安"
            headers={["元データ", "向いている取込ルート", "理由"]}
            rows={routeRows}
          />
        </ColumnSection>

        <ColumnSection
          id="two-ways"
          title="生成AIの2つの使い方：実データを渡して変換させるか、変換ルールを書かせるか"
        >
          <h3>A：実データを渡して取込形式を出力させる</h3>
          <p>
            通帳CSVや売上表をそのまま生成AIに貼り付けて取込形式で出力させる方法は手軽ですが、事務所の業務としては次の問題があります。
          </p>
          <ul>
            <li>守秘義務：法人の取引情報も税理士法38条の秘密に当たり得ます。</li>
            <li>個人情報：利用目的、学習利用、安全管理、委託・第三者提供の条件を確認します（PPCの生成AI注意喚起）。</li>
            <li>検証：行の欠落や数字の変更を目で見つけにくく、同じ指示でも出力が変わり得ます。</li>
          </ul>
          <h3>B（推奨）：ダミーサンプルで変換ルールを書かせ、手元で実行する</h3>
          <p>
            架空の取引先名・金額で作ったダミーサンプルと、列定義・取込仕様だけを渡し、Excelの数式、Power
            Query（Excelのデータ変換機能。M言語で手順を記述できる）、VBA（Excelのマクロ言語）を書かせます。実データは事務所のExcelで処理するため外部に出ず、変換ロジックが手元に残り、同じ入力なら同じ結果になります。
          </p>
          <ColumnInformationTable
            label="生成AIの2つの使い方の比較"
            headers={["観点", "A：実データを渡す", "B：変換ルールを書かせる"]}
            rows={methodCompareRows}
          />
          <ColumnNote title="「仮名化」ではなく「ダミーデータ」で作る">
            <p>
名前だけを伏せた実データでも、金額や日付から取引が特定できる場合があります。サンプルは実在しない取引先名・金額で一から作ります。法律上の加工の扱いは<Link href="/column/10009">守秘義務と入力可否の判断</Link>で確認してください。
            </p>
          </ColumnNote>
          <p>
            業務向けプランでも学習利用・保存・人の閲覧は機能と契約で確認します。確認項目は<Link href="/column/10014">AIツール選定の質問票</Link>にまとめています。
          </p>
          <p>指示の型は<Link href="/column/10003">会計事務所の生成AIの使い方</Link>も参考になります。</p>
        </ColumnSection>

        <ColumnSection
          id="import-spec"
          title="先に会計ソフトの仕訳インポート仕様を確認する（2026年10月10日確認）"
        >
          <p>
            変換ルールの基準は、取込先の会計ソフトの公式仕様です。各社の公式ヘルプから、変換に関わる要点を整理しました。
          </p>
          <ColumnInformationTable
            label={`会計ソフト別の仕訳インポート仕様の要点（${CHECKED}確認）`}
            headers={["会計ソフト", "形式・主な条件", "金額・税区分", "注意点"]}
            rows={importSpecRows}
          />
          <p>
            弥生会計・弥生会計 Next・マネーフォワード
            クラウド会計の行数・ファイルサイズ上限や文字コードは、今回再確認できた公式ページでは判断できませんでした。弥生会計の文字コードも製品・取込メニュー別にサポートへ確認し、少量のテストで検証します。freeeには取引インポートのほか、振替伝票として登録する仕訳インポートもあります。取引か伝票かを先に決め、対応する仕様を参照します。
          </p>
          <p>JDL・TKC・MJSなども、製品ごとに取込仕様が異なります。公開ページの条件をほかの製品へ流用せず、利用中の製品のマニュアルかサポートからレイアウトを取得します。</p>
          <h3>仕様書から「取込仕様メモ」を1枚作る</h3>
          <p>
            公式仕様の要点を1枚にまとめ、AIへの指示と検証の基準にします。
          </p>
          <ColumnInformationTable
            label="取込仕様メモに書く項目（例）"
            headers={["項目", "書く内容の例"]}
            rows={specMemoRows}
          />
        </ColumnSection>

        <ColumnSection
          id="conversion-steps"
          title="仕訳インポート形式への変換手順：ダミーサンプル→ルール作成→手元で実行→検証"
        >
          <p>例えば、次の架空の売上集計から3行の仕訳を作る場合を考えます。金額は単なる例で、取込先に合わせて列順・税区分・伝票の構成を変えます。</p>
          <ColumnInformationTable label="変換前（架空の入力例）" headers={["日付", "店舗", "現金売上", "カード売上", "返品"]} rows={[["2026/10/01", "店舗A", "11,000", "22,000", "▲1,100"]]} />
          <ColumnInformationTable label="変換後（架空の仕訳例。税区分は略記）" headers={["伝票", "日付", "借方", "借方税区分", "借方金額", "貸方", "貸方税区分", "貸方金額", "摘要"]} rows={[
            ["001", "2026/10/01", "現金", "対象外", "11,000", "売上高", "課税売上10%", "11,000", "店舗A・現金売上"],
            ["002", "2026/10/01", "売掛金（カード）", "対象外", "22,000", "売上高", "課税売上10%", "22,000", "店舗A・カード売上"],
            ["003", "2026/10/01", "売上高", "売上返還10%", "1,100", "現金", "対象外", "1,100", "店舗A・現金返品"],
          ]} />
          <div className={detail.steps}>
            <div className={detail.step}>
              <h3>1. 元データの列定義を書き出す</h3>
              <p>
                列名、型（日付・数値・文字）、書き方の例、空欄の有無を書きます。実際の値ではなく形式だけを書きます。
              </p>
            </div>
            <div className={detail.step}>
              <h3>2. ダミーサンプルを10行ほど作る</h3>
              <p>
                返金（マイナス）、0円、税率の混在、摘要のカンマや改行、小計行を含めます。期待する出力を担当者が手で作り、正解データとして保存します。
              </p>
            </div>
            <div className={detail.step}>
              <h3>3. 取込仕様メモと対応表を添えて変換ルールを書かせる</h3>
              <p>
                科目・税区分の対応表も渡し、数式・Power
                Query・VBAのどれで書くかとExcelのバージョンを指定します。
              </p>
            </div>
            <div className={detail.step}>
              <h3>4. ダミーで動作を確かめ、手元で実データに適用する</h3>
              <p>変換結果を正解データとセル比較やCOUNTIF等で照合します。コードに日本語のコメントと処理の説明を付けさせ、理解できない削除・上書き処理を実行しません。確認後に事務所のPCで実データを変換します。エラーが出たら値を伏せて行の形式とエラー理由だけをAIに伝え、修正してダミーで再検証します。</p>
            </div>
            <div className={detail.step}>
              <h3>5. 取込前の検証を通す</h3>
              <p>
                後述のチェックリストで件数・合計・日付・税区分などを確認します。
              </p>
            </div>
            <div className={detail.step}>
              <h3>6. 取り込み、件数と合計を照合する</h3>
              <p>
                会計ソフトの仕訳帳で件数・合計・残高を元データと照合し、確認者と確認日を記録します。
              </p>
            </div>
          </div>
          <ColumnNote title="指示の例（例えば、次のような型です）">
            <p>
              「Microsoft 365のExcelで使うPower
              Query（M言語）を書いてください。入力列は日付（例：2026/10/01）、店舗、現金売上、カード売上、返品（▲表記）です。出力列は取引日、借方科目、借方税区分、借方金額、貸方科目、貸方税区分、貸方金額、摘要の順です。1行を現金・カード・返品の最大3行に分け、現金売上は現金／売上高、カード売上は対応表どおり売掛金／売上高、現金返品は売上高／現金としてください。科目と税区分は対応表で置き換え、日付はYYYY/MM/DDにしてください。変換できない値は空欄にせず『エラー理由』列に出してください。添付：ダミーサンプル、取込仕様メモ、対応表」
            </p>
          </ColumnNote>
          <p>
            「空欄にせずエラー列に出す」と指示しておくと、変換できなかった行が気づかないまま取り込まれるのを防げます。生成AIで仕訳そのものを作る範囲は
            <Link href="/column/10021">
              ChatGPTで仕訳はどこまで作れる？AI-OCRとの使い分け
            </Link>
            で整理しています。
          </p>
          <h3>銀行・カード明細を仕訳形式に変換するときのルール</h3>
          <p>例えば銀行入金は借方が普通預金、貸方が相手科目、出金は逆にします。カードの利用は未払金等、口座引落はその消込みとして、二重に経費へ計上しない対応表を決めます。これは一般例で、実際の科目は顧問先の方針に従います。</p>
          <ColumnInformationTable label="例えば、摘要キーワードの対応表（架空）" headers={["条件", "候補", "確認条件"]} rows={[
            ["出金・電力会社コード", "水道光熱費／普通預金", "対象物件・用途を確認"],
            ["出金・家賃コード", "地代家賃／普通預金", "契約と消費税区分を確認"],
            ["カード利用・事務用品コード", "消耗品費／未払金", "用途・資産計上の要否を確認"],
            ["未一致・条件の重複", "要確認", "仮科目を作らず、理由を残す"],
          ]} />
          <p>残高による検算は<Link href="/column/10021">仕訳候補の検証方法</Link>も参照してください。</p>
          <h3>数式・Power Query・VBAの使い分け</h3>
          <ColumnInformationTable
            label="変換ルールの書き方の使い分け"
            headers={["方法", "向いている変換", "注意点"]}
            rows={toolRows}
          />
          <h3>Excel特有の落とし穴</h3>
          <ul>
            <li>
              <strong>文字コード</strong>：Power
              QueryのText/CSVコネクタは文字セットを推論せず、UTF-8はBOM付きの場合のみ推論されます。文字化けしたら読み込み時に文字コードを指定します。
            </li>
            <li>
              <strong>先頭の0</strong>
              ：データ型の自動検出は最初の200行かデータ全体が基準です。科目コード・取引先コードはテキスト型に固定します。
            </li>
            <li>
              <strong>CSVの保存</strong>
              ：CSVとして保存されるのは現在のワークシートだけです。出力用のシートを選び、指定された文字コードの形式で保存します。保存形式の名称だけで判断せず、取込仕様メモと照合します。日付書式や先頭の0は画面の表示形式のまま書き出されるため、保存後のファイルも確認します。
            </li>
          </ul>
        </ColumnSection>

        <ColumnSection
          id="handwritten-daily-report"
          title="手書きの日計表・売上帳は「読み取りはAI、検算はプログラム」に分ける"
        >
          <p>
            手書きの文字認識と構造化はAI、検算は数式・Power Queryに分けます。整った表でも読取値が正しいとは限りません。
          </p>
          <ColumnInformationTable
            label="読み取り結果をプログラムで検算する項目"
            headers={["確認内容", "確認方法"]}
            rows={recheckRows}
          />
          <p>
            合計が一致しても科目・日付・文字の誤りは残り得ます。導入時に誤り方を確認し、どの行を原本照合するかを責任者が決めます。この考え方は
            <Link href="/column/10024">
              AI-OCR導入後のダブルチェックを「要確認だけ見る」体制に
            </Link>
            でも解説しています。
          </p>
          <p>
            Zeimeeの
            <Link href="/cases/field-development">公開事例</Link>
            では、手書き日計表の一行ずつの確定作業を省きました。あわせて、JDL向けCSV作成のExcel5工程を1画面に集約しています。
          </p>
          <p>
            帳票の読み取りは実データを扱うため、認められた業務用サービスの契約・学習利用・保存・処理先を確認します。変換ルールの作成はダミーで行います（<Link href="/column/10009">守秘義務と生成AI</Link>）。取引履歴の整理例は<Link href="/column/10026">相続税申告の預金取引履歴</Link>を参照してください。
          </p>
        </ColumnSection>

        <ColumnSection
          id="pre-import-check"
          title="取込前の検証チェックリスト：件数・貸借合計・日付・科目・税区分・文字コード"
        >
          <p>
            変換したファイルは取り込む前に次の項目を確認します。確認方法を数式やPower
            Queryに組み込んでおくと、毎月同じ手順で確かめられます。
          </p>
          <ColumnInformationTable
            label="仕訳インポート前の検証チェックリスト"
            headers={["確認項目", "確認方法", "見落とした場合に起きること"]}
            rows={checklistRows}
          />
          <h3>2026年10月以降は経過措置70%の表記に注意する</h3>
          <p>
            国税庁によると、免税事業者等からの課税仕入れに係る経過措置は、2023年10月1日からの3年間が80%、2026年10月1日からの2年間が70%です。取込ファイルの税区分も取引日に応じて切り替えます。割合だけでなく同一の相手からの課税仕入れの上限など、適用要件を確認します。
          </p>
          <p>弥生会計 Nextの公式「インポートデータの記述形式（税区分）」は、税区分末尾に区分と割合を付加し、「70%」等を指定すると案内しています。未指定時は取引日付や科目設定から自動判定しますが、会計ソフトの設定が台帳の方針と合うかを確認します（2026年10月10日確認）。デスクトップ版は公式例が80%のため、最新の対応を別に確認します。</p>
          <p>
            仕訳と経過措置の適用要件は
            <Link href="/column/10008">
              インボイス7割控除（経過措置70%）の仕訳と記帳対応
            </Link>
            を参照してください。
          </p>
        </ColumnSection>

        <ColumnSection
          id="rule-ledger"
          title="顧問先ごとの仕訳インポート変換ルールを台帳にして引き継ぐ"
        >
          <p>
            変換ルールが担当者の記憶やファイルの中だけにあると、異動や退職のときに引き継げません。顧問先ごとに次の項目を台帳に残します。
          </p>
          <ColumnInformationTable
            label="変換ルール台帳に残す項目（例）"
            headers={["項目", "記録する内容"]}
            rows={ledgerRows}
          />
          <p>
            数式・クエリ・マクロは台帳と一緒に保管し、作者以外も読める状態にします。職員の確認体制も整えます（税理士法41条の2）。
          </p>
          <p>
            台帳の作り方は
            <Link href="/column/10018">顧問先別の仕訳ルール台帳の作り方</Link>
            、入力部門の工程別の分担は
            <Link href="/column/10006">記帳代行業務のAI活用</Link>
            で解説しています。
          </p>
        </ColumnSection>

        <ColumnSection
          id="limits"
          title="自作の限界を見極める：例外の増加・担当者依存・取込失敗の切り分け"
        >
          <p>次のような状態が見えたら、自作の変換ルールを見直す時期です。</p>
          <ul>
            <li>例外の分岐が増え、作成者以外は数式やマクロを読めない</li>
            <li>顧問先ごとにブックが増え、どれが最新版か分からない</li>
            <li>
              取込エラーの原因が、元データ・変換ルール・取込仕様のどこにあるか切り分けられない
            </li>
            <li>
              税制改正や会計ソフトの仕様変更のたびに、全顧問先分を直している
            </li>
          </ul>
          <p>
            選択肢は、会計ソフト標準の明細取込や自動仕訳ルールに寄せる、市販ツールを使う（
            <Link href="/column/10001">記帳自動化ツールの比較</Link>
            ）、連携方式を見直す（
            <Link href="/column/10022">CSV・API・MCPの違い</Link>
            ）、業務に合わせて仕組みを設計する外部支援を使う、などです。
          </p>
          <p>
Zeimeeは、帳票の読み取り、仕訳候補の作成、チェック、取込データ作成を業務に合わせて設計・実装する支援をしています（<Link href="/tools/bookkeeping">記帳自動化AI</Link>）。掲載例は特定の現場での開発例で、出力形式や設定により追加対応が必要です。料金は個別見積もりです。月に数件で形式が決まる顧問先なら、標準機能や数式から検討します。
          </p>
        </ColumnSection>

        <ColumnFaq items={faqs} />

        <ColumnSection id="summary" title="まとめ">
          <p>最初は形式が決まった顧問先を1件選びます。公式仕様から取込仕様メモを作り、ダミーサンプルと期待する出力を手で用意します。次に変換ルールと検証用の数式を作り、例外を含むサンプルで一致を確かめてから実データへ適用します。仕様メモ・対応表・変換ツール・確認記録をセットで台帳へ残すと、次の月も同じ基準で確認できます。</p>
        </ColumnSection>

        <ColumnReferences
          checkedAt="2026-10-10"
          primarySources={[
            {
              title: "仕訳データの項目と記述形式",
              publisher: "弥生株式会社",
              context: "弥生会計へ出力するCSVの仕様。",
            },
            {
              title: "他社会計ソフトから仕訳データを移行する",
              publisher: "freee株式会社",
              context: "仕訳データの移行と取込方法。",
            },
            {
              title: "「仕訳帳」をインポートする",
              publisher: "株式会社マネーフォワード",
              context: "クラウド会計の取込仕様と確認。",
            },
            {
              title: "生成AIサービスの利用に関する注意喚起",
              publisher: "個人情報保護委員会",
              url: "https://www.ppc.go.jp/news/careful_information/230602_AI_utilize_alert/",
              context: "CSVに含まれる個人情報の扱い。",
            },
          ]}
        >
          <p>法令・官公庁の資料</p>
          <ul>
            {linkedReferences.map((ref) => (
              <li key={ref.title}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.title}
                </a>
                （{ref.meta}）
              </li>
            ))}
          </ul>
          <p>
            会計ソフト・ツール提供会社の公式資料（外部リンクは設けていません）
          </p>
          <ul>
            {textReferences.map((ref) => (
              <li key={ref.title}>
                {ref.title}（{ref.meta}）
              </li>
            ))}
          </ul>
        </ColumnReferences>

      </div>
    </ColumnArticle>
  );
}
