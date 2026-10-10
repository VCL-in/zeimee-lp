/** Copy to src/app/column/<id>/page.tsx, then register metadata in src/lib/columns.ts. */
import { ColumnArticle } from "@/components/ColumnArticle";
import {
  ColumnSection,
  ColumnNote,
  ColumnInformationTable,
  ColumnFaq,
  ColumnCta,
} from "@/components/ColumnBlocks";
import { createColumnMetadata } from "@/lib/column-metadata";
import { getColumn } from "@/lib/columns";
import detail from "@/components/detail.module.css";

// Replace with the ID registered in columns.ts before rendering this starter.
const ARTICLE_ID = "REPLACE_WITH_ARTICLE_ID";
const toc = [
  { id: "basics", label: "基本知識" },
  { id: "criteria", label: "選び方・比較ポイント" },
  { id: "steps", label: "導入の手順" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

export function generateMetadata() {
  return createColumnMetadata(getColumn(ARTICLE_ID));
}

export default function Page() {
  const column = getColumn(ARTICLE_ID);
  return (
    <ColumnArticle
      column={column}
      toc={toc}
      editorialPolicy={
        <p>【差し替え】調査方法・確認日・出典・実体験の範囲を記載。</p>
      }
    >
      <div className={detail.body}>
        <p>【差し替え】読者の悩みと、この記事でわかることを2〜3文で説明。</p>
        <ColumnNote title="この記事の結論">
          <ul>
            <li>【差し替え】結論を短く記載。</li>
          </ul>
        </ColumnNote>
        <ColumnSection id="basics" title="【差し替え】基本知識">
          <p>用語の定義・対象・できることと制約。</p>
          <h3>【差し替え】小見出し</h3>
          <p>具体例と根拠を記載。</p>
        </ColumnSection>
        <ColumnSection id="criteria" title="【差し替え】選び方・比較ポイント">
          <ColumnInformationTable
            label="【差し替え】比較表"
            headers={["確認項目", "確認すること", "判断の目安"]}
            rows={[
              [
                "【差し替え】項目",
                "公式情報で確認した事実",
                "自社で確認する条件",
              ],
            ]}
          />
        </ColumnSection>
        <ColumnSection id="steps" title="【差し替え】導入の手順">
          <ol>
            <li>対象を決める</li>
            <li>試す</li>
            <li>効果を確認する</li>
          </ol>
        </ColumnSection>
        <ColumnFaq
          items={[
            {
              question: "【差し替え】よくある質問",
              answer: "根拠のある回答。未確認の事項は明示。",
            },
          ]}
        />
        <ColumnSection id="summary" title="まとめ">
          <p>【差し替え】結論と読者の次の行動。</p>
        </ColumnSection>
        <ColumnCta />
      </div>
    </ColumnArticle>
  );
}
