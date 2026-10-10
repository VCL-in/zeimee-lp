import type { Metadata } from "next";
import { ColumnArticle } from "@/components/ColumnArticle";
import {
  ColumnSection,
  ColumnNote,
  ColumnInformationTable,
  ColumnComparisonTable,
  ColumnFaq,
  ColumnCta,
} from "@/components/ColumnBlocks";
import { ColumnService } from "@/components/ColumnService";
import {
  comparisonServices,
  COMPARISON_CHECKED,
} from "@/lib/bookkeeping-comparison";
import type { ColumnMeta } from "@/lib/columns";
import detail from "@/components/detail.module.css";

export const metadata: Metadata = {
  title: "コラムのデザインテンプレート｜Zeimee",
  robots: { index: false, follow: false },
};
const column: ColumnMeta = {
  id: "template",
  title: "コラム記事のデザインテンプレート",
  description: "記事10001を基にした見出し・表・サービス紹介・FAQ・CTAの見本。",
  category: "デザイン確認用・本文はサンプル",
  publishedAt: "2026-10-10T00:00:00+09:00",
  updatedAt: "2026-10-10T00:00:00+09:00",
  coverDesign: {
    intro: "記事ごとにタイトル・イラスト・説明を差し替え",
    title: "会計事務所のAI活用ガイド",
    message: "基本から実践まで",
    caption: "比較記事・解説記事・導入事例に対応",
    illustration: "/images/column/bookkeeping-ai-illustration-v2.webp",
  },
};
const toc = [
  { id: "headings", label: "見出しと本文" },
  { id: "table", label: "比較表・情報表" },
  { id: "service", label: "サービス紹介" },
  { id: "steps", label: "手順・チェックリスト" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ・お問い合わせ" },
];
export default function Page() {
  return (
    <ColumnArticle
      column={column}
      toc={toc}
      structuredData={false}
      editorialPolicy={
        <p>
          これはデザイン確認用ページです。記事を書く際は、記事ごとの調査方法と根拠に差し替えます。
        </p>
      }
    >
      <div className={detail.body}>
        <p>
          今回の記事のデザインを使い回すための見本です。本文・見出し・表を入れ替えても、文字サイズ、余白、目次、サイドバー、スマホの表示を統一できます。
        </p>
        <ColumnNote title="この記事で伝える結論">
          <ul>
            <li>最初に読者の疑問への答えを短く示します。</li>
            <li>必要なブロックだけを組み合わせます。</li>
            <li>比較記事は数字付き、解説記事は数字なしのカバーにできます。</li>
          </ul>
        </ColumnNote>
        <ColumnSection id="headings" title="大見出し：記事の内容を区切る">
          <p>
            本文は一段落に一つの論点をまとめます。重要な条件は
            <strong>太字で示し</strong>、具体例や根拠を続けます。
          </p>
          <h3>小見出し：テーマを具体的に説明する</h3>
          <p>
            大見出しの中で扱う個別の論点です。説明の長さが違っても、同じ文字サイズと行間を使います。
          </p>
          <h4>補助見出し：細かな条件を整理する</h4>
          <p>
            さらに区切る必要があるときに使います。不要な見出しは増やしません。
          </p>
        </ColumnSection>
        <ColumnSection id="table" title="比較表・情報表のデザイン">
          <p>以下は表の見本です。スマホでは表の中を横にスクロールできます。</p>
          <ColumnComparisonTable
            label="サービス比較表（構成サンプル）"
            columns={[
              { id: "a", name: "サービスA" },
              { id: "b", name: "サービスB" },
              { id: "c", name: "サービスC" },
            ]}
            rows={[
              {
                label: "対象業務",
                cells: [
                  "【確認済みの情報】",
                  "【確認済みの情報】",
                  "【確認済みの情報】",
                ],
              },
              {
                label: "料金・条件",
                cells: ["【条件と金額】", "【条件と金額】", "【条件と金額】"],
              },
            ]}
          />
          <ColumnInformationTable
            label="選定ポイントの表（サンプル）"
            headers={["確認項目", "調べること", "判断の目安"]}
            rows={[
              [
                "対象業務",
                "読取り・確認・加工・反映",
                "時間のかかる工程を対象にする",
              ],
              ["対応範囲", "帳票と会計ソフト", "自社の条件で確認する"],
              ["料金", "固定費・従量費・追加条件", "同じ処理量で試算する"],
            ]}
          />
        </ColumnSection>
        <ColumnSection id="service" title="サービス紹介のデザイン">
          <p>
            記事10001のZeimee紹介を使った実際のカードです。他社の紹介には外部誘導や機能のないボタンを付けません。
          </p>
          <ColumnService
            service={comparisonServices[0]}
            id="template-service"
            checked={COMPARISON_CHECKED}
            featured
          />
        </ColumnSection>
        <ColumnSection id="steps" title="手順・チェックリストのデザイン">
          <div className={detail.steps}>
            <div className={detail.step}>
              <h3>1. 現状を整理する</h3>
              <p>対象業務・処理量・作業時間を把握します。</p>
            </div>
            <div className={detail.step}>
              <h3>2. 条件を揃えて試す</h3>
              <p>同じ資料・評価基準で結果を確認します。</p>
            </div>
            <div className={detail.step}>
              <h3>3. 次の行動を決める</h3>
              <p>実測した結果を基に導入範囲を決めます。</p>
            </div>
          </div>
          <ColumnNote title="確認すること">
            <ul>
              <li>内容と見出しが一致しているか</li>
              <li>数値に条件・出典・確認日があるか</li>
              <li>読者が次に何をすればよいかわかるか</li>
            </ul>
          </ColumnNote>
        </ColumnSection>
        <ColumnFaq
          items={[
            {
              question: "すべてのブロックを使う必要はありますか？",
              answer:
                "ありません。解説記事ならサービス紹介を省き、導入事例なら背景・改善内容・結果を中心に構成します。",
            },
            {
              question: "カバーの数字やイラストも変えられますか？",
              answer:
                "記事の設定で差し替えられます。数字を設定しなければ、通常の解説記事用のカバーになります。",
            },
          ]}
        />
        <ColumnSection id="summary" title="まとめ">
          <p>
            記事の結論と読者の次の行動をまとめ、その後にZeimeeへのお問い合わせ・資料ダウンロードを配置します。
          </p>
        </ColumnSection>
        <ColumnCta />
      </div>
    </ColumnArticle>
  );
}
