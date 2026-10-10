# コラム記事デザインテンプレート v1

記事 `/column/10001` を基準にした、Zeimeeコラムの共通デザイン。記事ごとにCSSを追加せず、必要なブロックを組み合わせる。

- 基準記事: `/column/10001`
- デザイン見本: `/design/column-template`（noindex、一覧・サイトマップには登録しない）
- 執筆ひな形: `templates/column/page.tsx`（この場所ではルートとして公開されない）
- 共通スタイル: `src/components/column.module.css` と `detail.module.css`

## 新しい記事を作る手順

1. `src/lib/columns.ts` で未使用のIDを確認し、次のIDを採番する。現在の次候補は `10027`。公開後のIDは変更・再利用しない。
2. 同ファイルの `columns` に記事のメタデータを追加する。タイトル・説明・カテゴリ・公開日・実際の更新日・記事固有のOG画像を設定する。
3. `templates/column/page.tsx` を `src/app/column/<id>/page.tsx` にコピーし、`ARTICLE_ID` を設定する。
4. サンプル文言を置き換え、不要なブロックを削除する。目次の `id` と見出しの `id` を揃える。
5. 調査方法・確認日・出典・実体験の範囲を `editorialPolicy` に記載する。PRや運営会社のサービスを紹介する場合は `disclosure` も設定する。
6. ビルド・Lint、PCとスマホの見た目、目次リンク・CTA・表の横スクロールを確認する。登録した記事は一覧・関連記事・サイトマップに自動反映される。

```ts
{
  id: "10027", // 採番時に未使用か確認
  title: "【記事のタイトル】",
  description: "【読者・記事でわかること・範囲】",
  category: "【カテゴリ】",
  coverImage: "/images/column/10027-og.png", // 実際に作成する1200×630画像
  coverDesign: {
    intro: "【カバーの補助説明】",
    title: "【短いテーマ名】",
    // 比較記事のみ count: 実際の掲載サービス数,
    message: "【比較・解説・導入ガイドなど】",
    caption: "【何がわかるか】",
    illustration: "/images/column/【作成したイラスト】.webp",
  },
  publishedAt: "【実際の公開日時ISO8601】",
  updatedAt: "【実際の内容更新日時ISO8601】",
}
```

`coverDesign` の数字を省くと解説記事向けになる。カバー文言と画像は記事別に設定し、記事10001の内容を引き継がない。画像生成が必要な場合はImage機能を使う。OG画像も新記事の内容に合わせて作成する。

本文を確定したら `python3 design/fonts/subset_column.py` で日本語フォントを再生成する（fontToolsが必要）。本文の表データを置く `.ts` ファイルも収集対象になる。カバーのOG画像は、ローカルサーバーを起動して `node design/column-og/generate.mjs 10027` で生成できる。Playwrightが別の場所にある場合は `PLAYWRIGHT` にその `index.mjs` のパスを指定し、標準の3310番ポートと違う場合は `BASE_URL` を指定する。生成した1200×630画像は切れや文字化けを目視で確認する。

## 共通ブロック

| ブロック | 用途 | 差し替える内容 |
| --- | --- | --- |
| `ColumnArticle` | ヘッダー・目次・本文幅・サイドバー・執筆者・構造化データ | メタ情報、目次、調査方針、PR表示、本文 |
| `ColumnCover` | イラスト付きカバー、一覧サムネイル | `coverDesign` / `coverImage` |
| `ColumnSection` | h2付きセクション | id、見出し、本文 |
| `ColumnNote` | 結論・補足・確認事項 | タイトル、本文・箇条書き |
| `ColumnInformationTable` | 条件・手順・情報を整理する表 | caption、見出し、行 |
| `ColumnComparisonTable` | サービスが横に並ぶ比較表 | 列、比較項目、各列の値（列数を揃える） |
| `ColumnService` | 現行サービス紹介カード | 会社、工程、特徴、料金・条件、出典、確認日 |
| `ColumnFaq` | 見える質問・回答 | 質問、根拠のある回答 |
| `ColumnCta` | 問い合わせ・資料ダウンロード | 説明文。送信先は `/#contact` |
| `createColumnMetadata` | canonical・OG・Twitter・robots | 記事メタ情報から生成 |

本文のh3・h4、段落、太字、箇条書きは `ColumnArticle` と `detail.body` 内で使えば共通の書式になる。手順は `detail.steps` / `detail.step` を使う。表は枠内で横スクロールし、ページ全体の横はみ出しを避ける。

## 記事タイプごとの構成

- **比較記事**: 導入・結論 → 定義 → 選定基準 → 比較表 → 各サービス（Zeimeeが対象なら先頭）→ 選び方 → Zeimeeの推薦 → FAQ → まとめ・CTA。
- **解説記事**: 導入・結論 → 定義 → できること・制約 → 手順 → 具体例 → FAQ → まとめ・CTA。
- **導入事例**: 対象・背景 → 導入前の課題 → 改善した工程 → 根拠のある結果 → 残る確認作業 → まとめ・CTA。

## 維持するルール

- 色・文字サイズ・余白は共通CSSを使い、記事ごとの見た目を統一する。
- 競合への外部リンク、候補登録・比較チェックなど機能のないボタンを追加しない。
- `ColumnService` の `featured` はZeimeeだけに設定する。他社の出典URLは根拠管理用に保持できるが、画面では資料名と確認日を表示する。
- 未確認の精度・口コミ評価・実測結果・監修者は作らない。テンプレートは調査の代わりにはならない。
- 料金は税込・税抜、対象数量、契約条件、確認日を記載する。
- FAQは本文として表示し、FAQPageや架空の評価schemaは追加しない。
- デザイン見本は構造化データを出さず、記事一覧・サイトマップに混ぜない。
