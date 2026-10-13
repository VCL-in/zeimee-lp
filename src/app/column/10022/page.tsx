import Link from "next/link";
import { ColumnArticle } from "@/components/ColumnArticle";
import { ColumnReferences, formatReferenceMeta } from "@/components/ColumnReferences";
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
  riskLevelRows,
  methodRows,
  vendorRows,
  preImportRows,
  statusRows,
  incidentRows,
  guidelineRows,
  chooseRows,
  linkedReferences,
  textReferences,
} from "./data";

const ARTICLE_ID = "10022";
const toc = [
  { id: "risk-levels", label: "「読む・提案する・反映する」でリスクが変わる" },
  { id: "four-methods", label: "会計ソフトとAIの連携方法4つを比較" },
  { id: "vendor-status", label: "会計ソフト別のAPI・MCPの提供状況" },
  { id: "csv-import-start", label: "CSV取込から始める理由と取込前の確認" },
  { id: "credentials-and-scope", label: "認証情報・最小権限・顧問先の分離" },
  { id: "approval-vs-reflection", label: "承認と会計ソフトへの反映を分ける" },
  { id: "incident-scenarios", label: "起こりうる事故と予防策（想定例）" },
  { id: "guidelines", label: "AI事業者ガイドラインとMCP仕様の注意点" },
  { id: "how-to-choose", label: "事務所の状況別の選び方" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
  { id: "references", label: "参考資料" },
];

export function generateMetadata() {
  return createColumnMetadata(getColumn(ARTICLE_ID));
}

const faqs = [
  {
    question: "MCPとAPIの違いは何ですか？",
    answer:
      "APIはソフトの機能をプログラムから呼ぶ窓口で、MCPはAIアプリ等に外部のツールを共通の形で公開する規約です。MCPサーバーが裏で会計APIを呼ぶこともあり、両者は組み合わせられます。操作をAIに選ばせるか、毎回人が承認するかは、接続先とアプリの設計によります。",
  },
  {
    question: "タイムアウトした仕訳登録は、そのまま再実行してよいですか？",
    answer:
      "再実行する前に会計ソフト側を照合します。応答がなくても登録が済んでいる場合があり、全件の再送は二重登録につながります。結果不明と未登録の確認済みを分け、一部だけ登録された場合は未登録の行だけを対象にします。",
  },
  {
    question: "AIに会計ソフトのログインID・パスワードを渡してもよいですか？",
    answer:
      "渡さないでください。各社の公式の認可方式（OAuth 2.0やAPIキー）で必要なスコープだけを許可し、キーやトークンは保護された場所で管理します。",
  },
  {
    question: "TKC・JDL・MJSを使う事務所でもAI連携はできますか？",
    answer:
      "公式の取込経路を使えば、AIで作った取込用データを活かせます。TKCは外部の汎用AIから接続するMCPサーバーを提供しないと発表しています。JDL・MJSの公開API・MCPは確認できませんでしたが、非対応とは限らないため、サポート窓口に確認してください。",
  },
  {
    question: "AIで会計ソフトと連携することに、顧問先の同意は必要ですか？",
    answer: (
      <>
        個人情報の取扱い、委託、利用規約の観点から確認が必要です。マネーフォワードの利用特約は、顧問先などへのスコープ設定の説明と同意を求めています。詳しくは
        <Link href="/column/10013">AI利用に顧問先の同意は必要？</Link>
        で解説しています。
      </>
    ),
  },
];

export default function Page() {
  const column = getColumn(ARTICLE_ID);
  return (
    <ColumnArticle
      column={column}
      toc={toc}
      editorialPolicy={
        <>
          <p>
            本記事は、法令（e-Gov法令検索）、個人情報保護委員会、総務省・経済産業省、AIセーフティ・インスティテュートの公表資料と、会計ソフト各社の公式ヘルプ・プレスリリース・開発者向け資料、MCP仕様といった一次情報を中心に、
            {CHECKED}
            に内容を確認して作成しています。公式情報で確認できなかった機能は、本文に「確認できなかった」と記載しており、非対応を意味するものではありません。
          </p>
          <p>
            各社のAPI・MCPへの実際の接続や、取込機能の実機検証は行っていません。事故の表は仕組みから考えた想定例で、実際の事例や件数ではありません。令和8年改正の個人情報保護法は確認日時点で主要部分が未施行のため、現行法と分けて記載しています。個別の判断は、専門家や所管官庁にご確認ください。
          </p>
        </>
      }
      disclosure={
        <>
          本記事は、記事内で紹介している「Zeimee」を提供する株式会社Zeimeeが執筆・運営しています。freee、マネーフォワード、弥生、TKC、JDL、MJSなどの情報は
          {CHECKED}
          時点の公式ヘルプ・公開情報をもとに記載し、外部への誘導リンクは設けていません。提供状況や利用条件は変更される場合があるため、最新の情報は各社の公式情報をご確認ください。
        </>
      }
    >
      <div className={detail.body}>
        <section className={detail.section}>
          <p>
            AIで作った仕訳候補は、会計ソフトへの入れ方で手間とリスクが変わります。CSV・API・MCPの選び方と権限・承認を整理します。
          </p>
          <p>
            会計ソフト別の提供状況は
            {CHECKED}
            時点の情報です。
          </p>
          <ColumnNote title="この記事の結論">
            <ul>
              <li>
                AIの出力は「提案」までにとどめ、会計ソフトへの反映（書き込み）は担当者の承認の後に置く
              </li>
              <li>
                API・MCPを使うなら、公式の認可方式、最小権限、対象の顧問先（事業所）の固定を先に決める
              </li>
              <li>
                「承認済み」と「反映完了」を分けて記録し、反映失敗や二重登録を見逃さない
              </li>
            </ul>
          </ColumnNote>
        </section>

        <ColumnSection
          id="risk-levels"
          title="会計ソフトとAIの連携は「読む・提案する・反映する」でリスクが変わる"
        >
          <p>AIの操作を3段階に分けて整理します。</p>
          <ColumnInformationTable
            label="AIにさせる操作の3段階と必要な確認"
            headers={["段階", "例", "起こりうる影響", "必要な権限", "人の確認"]}
            rows={riskLevelRows}
          />
          <p>
            出力は候補として確認し、反映は承認後に行います。反映後の誤りには訂正が必要です。
          </p>
          <p>
            顧問先の事業所を切り替える作業では「正しい仕訳を別の顧問先に反映する」誤りにも注意します。
          </p>
          <p>
            この記事は方式の選択と権限・承認の設計に絞ります。取込用CSVの作り方は
            <Link href="/column/10015">仕訳インポート形式への変換手順</Link>
            で解説しています。
          </p>
        </ColumnSection>

        <ColumnSection
          id="four-methods"
          title="会計ソフトとAIの連携方法4つを比較｜CSV取込・API・MCP・会計ソフト内蔵のAI"
        >
          <p>
            ここではCSV取込・API・MCP・内蔵AIの4つの観点で比べます。APIとMCPは排他的な方式ではなく、MCPサーバーが会計APIを呼ぶ構成もあります。どの層で権限と承認を管理するかを見ながら選びます。
          </p>
          <p>
            少量の試験はCSV、定型処理の継続はAPI、AIアプリから会計機能を呼ぶ用途はMCPが候補です。内蔵AIで目的を満たせるかも確認します。
          </p>
          <ColumnInformationTable
            label="会計ソフトとAIの連携方法4つの比較"
            headers={[
              "比較項目",
              "CSV取込",
              "API",
              "MCP",
              "会計ソフト内蔵のAI",
            ]}
            rows={methodRows}
          />
          <h3>CSV取込：人がファイルを確かめてから入れられる</h3>
          <p>
            AIで取込形式のファイルを作り、人が中身を確かめて読み込みます。弥生会計（デスクトップ版）の公式ヘルプは、取込前のバックアップと再取込時の重複に注意を促しています。マネーフォワード
            クラウド会計は、直近10件のインポート履歴から一括削除できます。
          </p>
          <h3>API：会計ソフトの機能をプログラムから呼び出す</h3>
          <p>
            APIはプログラムから機能を呼び出す窓口です。freeeやTKCでは利用条件に応じて審査や契約が必要です。マネーフォワード
            クラウド会計APIは、仕訳の読み取りと書き込みでスコープ（許可する操作の範囲）が分かれ、作成・更新・削除のAPIがあります。
          </p>
          <p>
            APIでもAIに操作を選ばせる構成は作れます。「APIだから必ず決まった操作だけをする」とは限らず、プログラム側の入力検証・承認・重複防止を確認します。
          </p>
          <h3>MCP：外部の機能をAIアプリ等に共通の形で公開する</h3>
          <p>
            MCP（Model Context
            Protocol）は、AIアプリ等と外部システムをつなぐ標準で、Anthropicが2024年11月25日に公開しました。AIがツールを選ぶ使い方を想定しますが、利用者との確認の仕方を一律には定めていません。MCP仕様（2026-07-28版）は、人が呼び出しを拒否できる状態や重要な操作前の確認を推奨しています。マネーフォワードのMCPサーバー利用特約も、意図しない編集・削除が起こりうるとして、更新前のバックアップを求めています。
          </p>
          <h3>会計ソフト内蔵のAI：人の確認を前提にした設計の例がある</h3>
          <p>
            TKCの「FXエージェント」の発表は、人の確認・承認を特長に挙げています。弥生会計
            Nextの「AI取引入力β版」も仕訳のプレビュー確認・修正に対応します。帳票や手順に合わせられる幅は製品次第です。
          </p>
        </ColumnSection>

        <ColumnSection
          id="vendor-status"
          title="会計ソフト別のAPI・MCPの提供状況と利用条件（2026年10月10日確認）"
        >
          <p>
            主な会計ソフトの公式情報の確認結果です。「確認できなかった」は公式情報で見つけられなかったという意味で、非対応とは限りません。
          </p>
          <ColumnInformationTable
            label={`会計ソフト別の取込・API・MCP・AI機能（${CHECKED}確認）`}
            headers={[
              "会計ソフト",
              "仕訳の取込",
              "API",
              "MCP",
              "AI機能・利用条件の注意",
            ]}
            rows={vendorRows}
          />
          <p>
            TKCの5月27日の発表は、FXエージェントを9月末から順次提供開始する予定としていました。発表時の予定と、自所の契約で現在使える機能は分けて確認してください。
          </p>
        </ColumnSection>

        <ColumnSection
          id="csv-import-start"
          title="会計事務所ではCSV取込から始めるのが現実的な理由と、取込前の確認"
        >
          <p>
            開発・契約の準備を抑えて試すなら、対応するCSV・Excel取込が起点になります。TKCには審査・契約を前提とするAPIもあり、ソフト名だけで方式を決める必要はありません。freee・マネーフォワードでも、CSV取込で確認手順を固めてからAPI等を検討できます。取込前には次の項目を確認します。
          </p>
          <ColumnInformationTable
            label="取込前チェックリスト（例）"
            headers={["確認項目", "確認すること"]}
            rows={preImportRows}
          />
          <p>
            公開している導入事例では、広島県の税理士事務所で、手書き日計表の読み取り後に残っていた一行ずつの確定作業を省き、JDL向けCSV作成のExcel5工程を1画面にまとめました。読み取りはAI、金額の検算はプログラムが担い、取込前にデータを確認できるようにしています（
            <Link href="/cases/field-development">
              日計表の転記を削減、Excelの5工程を1画面に
            </Link>
            ）。CSVの検証手順の詳細は
            <Link href="/column/10015">仕訳インポート形式への変換手順</Link>
            を参考にしてください。
          </p>
        </ColumnSection>

        <ColumnSection
          id="credentials-and-scope"
          title="認証情報をAIに渡さない｜最小権限と顧問先単位の分離"
        >
          <h3>ログインID・パスワードはAIに渡さない</h3>
          <p>
            プロンプトや共有シートにログインID・パスワードを書かず、公式の認可方式で接続し、キー・トークンは保護された場所で管理します。MCPのSecurity
            Best
            Practicesは、MCPサーバー向けに発行されていないトークンの受け入れ（token
            passthrough）を禁止しています。
          </p>
          <h3>権限は読み取りから始め、書き込みを分ける</h3>
          <p>
            マネーフォワード
            クラウド会計APIでは仕訳の読み取り（mfc/accounting/journal.read）と書き込み（mfc/accounting/journal.write）が別のスコープで、同社は一部のMCPクライアントが不要なスコープを要求することがあると注意しています。個人情報保護委員会のガイドライン（通則編）10-6はアクセス制御を、Q&amp;A
            10-18はアクセス権限の最小化や権限管理の定期的な実施を挙げています。
          </p>
          <p>
            スコープ、利用者の権限、MCPサーバーが公開するツール、AIアプリの確認設定は別々に点検します。例えば書き込みスコープに作成・更新・削除がまとめられていると、スコープだけで削除を禁止できません。サーバー側の許可操作と実行前の検証で制限できなければ、読み取りのみから始めます。
          </p>
          <h3>顧問先（事業所）単位で対象を固定する</h3>
          <p>
            マネーフォワードのAPIキー認証は一度の認証で複数の事業者を操作でき、事業者番号の指定が必須です。freee-mcpは「現在の事業所」を切り替えて使います。作業ごとに対象の事業所を1つに固定し、反映の前に事業所名を確認してください。
          </p>
          <p>
            対象を画面で固定するだけでは権限の分離を保証できません。実行時にも、利用者がその顧問先を扱えることと、登録先のIDが承認対象と一致することを確認します。参照だけの接続も、取得した情報がAI側へ渡る範囲を点検します。
          </p>
          <h3>利用規約の義務と顧問先への説明</h3>
          <p>
            マネーフォワードのMCPサーバー利用特約は、AIツール側の学習無効化（オプトアウト）の確認と、顧問先などの役務提供先へのスコープ設定の説明・同意取得を求めています。個人情報保護委員会も2023年6月2日の注意喚起で、個人データが機械学習などに使われないか十分確認するよう示しています。確認項目は
            <Link href="/column/10004">会計事務所の生成AIセキュリティ対策</Link>
            、ベンダーへの質問は
            <Link href="/column/10014">
              AIツール選定セキュリティチェックシート
            </Link>
            を参考にしてください。
          </p>
        </ColumnSection>

        <ColumnSection
          id="approval-vs-reflection"
          title="承認と会計ソフトへの反映を分ける設計｜反映失敗と取り消しの手順"
        >
          <p>
            承認と反映完了は別の状態です。例えば弥生会計Nextでエラー行を除いて取り込んだ場合、その行は承認済みでも未反映です。状態を分けて記録すると計上漏れに気づけます。
          </p>
          <ColumnInformationTable
            label="仕訳候補の状態の分け方（例）"
            headers={["状態", "意味", "次に行うこと"]}
            rows={statusRows}
          />
          <p>
            承認は、対象の顧問先・期間・科目・税区分・金額を含む具体的な内容に対して行います。承認後にそれらを変更した場合は、再確認・再承認します。一部反映と結果不明を「未登録の確認済み」とまとめないことも、二重登録を防ぐための設計例です。
          </p>
          <p>
            Zeimeeも
            <Link href="/security">セキュリティと承認の考え方</Link>
            で、承認と会計ソフトへの反映完了を別の段階として管理・記録し、反映失敗を成功として扱わない方針を示しています。
          </p>
          <h3>再実行による二重登録を防ぐ</h3>
          <p>
            結果がわからないまま再実行すると二重登録が起こりえます。元データの番号などの一意のIDで反映前に取込済みかを確認し、反映後は会計ソフト側と件数・金額を照合します。
          </p>
          <h3>取り消しは履歴が残る方法で行う</h3>
          <p>
            優良な電子帳簿の要件（電子帳簿保存法施行規則第5条第5項第1号イ）は、訂正・削除の事実と内容を確認できるシステムの使用を求めています。過少申告加算税の軽減（同法第8条第4項）のための要件で全事業者の義務ではありませんが、履歴が残る方法で訂正すると後から経緯を説明しやすくなります。
          </p>
          <h3>処理記録に残す項目</h3>
          <ul>
            <li>誰が：作成者（AI・プログラムを含む）、確認者、承認者</li>
            <li>いつ・どこに：作成・承認・反映の日時、顧問先（事業所）</li>
            <li>何を：元データのファイル名・ID、使ったAIやプログラム</li>
            <li>結果：反映した件数・金額、エラーの内容</li>
          </ul>
          <p>
            記録には必要な識別子と結果を残し、認証キー・トークン・証憑の生データをそのまま出力しないようにします。閲覧できる人と保存期間も決め、個人情報を含むファイル名は管理用IDに置き換えます。
          </p>
        </ColumnSection>

        <ColumnSection
          id="incident-scenarios"
          title="AIと会計ソフトの連携で起こりうる事故と予防策（想定例）"
        >
          <p>
            次の表は仕組みから考えた想定例で、実際の事故事例や件数ではありません。
          </p>
          <ColumnInformationTable
            label="起こりうる事故と予防策（想定例）"
            headers={[
              "事故（想定）",
              "想定される経路",
              "予防策",
              "起きたときの初動",
            ]}
            rows={incidentRows}
          />
          <p>
            間接プロンプトインジェクションは、Webサイトやファイルなど外部の内容に含まれる指示でAIの動作が変わる攻撃で、OWASP
            Top 10 for LLM
            2025のLLM01で定義されています。LLM06（過剰な権限）の対策には、権限の最小化や影響の大きい操作の承認が挙げられています。freeeはリモート版の開始時に、誤ったURLの登録による情報漏えいのおそれを注意喚起しています。
          </p>
          <h3>別の顧問先に登録してしまった場合の考え方</h3>
          <p>
            個人の取引先名や給与などの個人データを別の顧問先へ登録した場合は、漏えいに当たりうるため責任者へ報告します。法定報告の要否と期限は
            <Link href="/column/10011">個人情報保護法と会計事務所のAI利用</Link>
            の確認項目を用い、判断に迷えば委員会や専門家に確認します。税理士法38条の守秘義務との関係は
            <Link href="/column/10009">税理士の守秘義務と生成AI</Link>
            で整理しています。
          </p>
        </ColumnSection>

        <ColumnSection
          id="guidelines"
          title="AI事業者ガイドライン第1.2版とMCP仕様が示すAIエージェントの注意点"
        >
          <p>
            総務省・経済産業省のAI事業者ガイドライン第1.2版（2026年3月31日）は、AIエージェントの意図しない注文・ファイル削除や、外部との連携によるデータ送信のリスクを挙げています（別添1
            p.19、p.21）。次の表は所内ルールへの落とし込み例です。
          </p>
          <ColumnInformationTable
            label="指針の記述と事務所の運用ルールの例"
            headers={["指針の記述", "出典", "事務所の運用ルールの例"]}
            rows={guidelineRows}
          />
          <p>
            AISIの評価観点ガイド第1.20版（2026年7月7日）も「観測と制御」を追加しています。ツールの定義・権限・記録は定期的に見直します。
          </p>
        </ColumnSection>

        <ColumnSection
          id="how-to-choose"
          title="事務所の状況別の選び方｜会計ソフトとAIの連携の導入前チェックリスト"
        >
          <p>
            方式は、会計ソフトの公式の取込経路から順に検討します。導入前に次の項目を確認してください。
          </p>
          <ColumnInformationTable
            label="会計ソフトとAIの連携の導入前チェックリスト"
            headers={["確認項目", "確認すること"]}
            rows={chooseRows}
          />
          <h3>状況別の進め方の例</h3>
          <ul>
            <li>
              CSV中心の事務所：例えば、AIで取込用ファイルを作り、取込前チェックを自動化し、取込は人が行う
            </li>
            <li>
              freee・マネーフォワード中心の事務所：例えば、読み取りのスコープだけでAPI・MCPを試し、書き込みは承認済みの仕訳に限る
            </li>
            <li>
              TKC中心の事務所：例えば、内蔵のAIエージェントの提供状況と公式の連携サービスを確認する
            </li>
          </ul>
          <p>
            内製・外注・パッケージの比較は
            <Link href="/column/10017">
              会計事務所のAI導入は内製・外注・パッケージのどれ？
            </Link>
            、事務所内のルールづくりは
            <Link href="/column/10023">
              税理士事務所の生成AI利用規程の作り方
            </Link>
            を参考にしてください。
          </p>
          <p>
            Zeimeeは業務に合わせた取込データ作成・承認・反映の仕組みを設計・実装し、導入後も改善します（料金は個別見積もり）。内蔵AIや手作業のCSV取込で足りる場合は、個別開発が向かないことがあります。
          </p>
        </ColumnSection>

        <ColumnFaq items={faqs} />

        <ColumnSection id="summary" title="まとめ">
          <ul>
            <li>
              「読む・提案する・反映する」を分け、反映（書き込み）は担当者の承認の後に置く
            </li>
            <li>
              方式は、公式の取込経路 → 権限の最小化と顧問先の固定 →
              取り消しの手順 → 処理記録の順に決める
            </li>
            <li>
              承認と反映完了を分けて記録し、反映失敗や二重登録を見逃さない
            </li>
            <li>提供状況は変わりやすいため、確認日を残して定期的に見直す</li>
          </ul>
        </ColumnSection>

        <ColumnReferences
          checkedAt="2026-10-10"
          primarySources={[
            {
              title: "MCP仕様：Tools・Security Best Practices",
              publisher: "Model Context Protocol",
              context: "ツールの権限と安全な連携設計",
            },
            {
              title: "MCPサーバー利用特約",
              publisher: "株式会社マネーフォワード",
              context: "会計ソフト側の利用条件",
            },
            {
              title: "AI事業者ガイドライン（第1.2版）",
              publisher: "総務省・経済産業省",
              url: "https://www.soumu.go.jp/main_content/001064279.pdf",
              context: "AIエージェントのリスクと管理",
            },
            {
              title: "個人情報保護法ガイドライン（通則編）",
              publisher: "個人情報保護委員会",
              url: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/",
              context: "認証・アクセス管理と委託先の監督",
            },
          ]}
          note="API・MCPの実機検証は行っていません。令和8年改正の個人情報保護法は、未施行の主要部分を現行法と区別しています。"
        >
          <p>法令・官公庁の資料</p>
          <ul>
            {linkedReferences.map((ref) => (
              <li key={ref.title}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.title}
                </a>
                （{formatReferenceMeta(ref.meta, "2026-10-10")}）
              </li>
            ))}
          </ul>
          <p>
            会計ソフト・ツール提供会社などの公式資料（外部リンクは設けていません）
          </p>
          <ul>
            {textReferences.map((ref) => (
              <li key={ref.title}>
                {ref.title}（{formatReferenceMeta(ref.meta, "2026-10-10")}）
              </li>
            ))}
          </ul>
        </ColumnReferences>

      </div>
    </ColumnArticle>
  );
}
