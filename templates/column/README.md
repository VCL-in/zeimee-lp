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
    titleLines: ["【見出しの1行目】", "【見出しの2行目】"],
    // 数を訴求する場合だけ count: 本文で扱う実際の数,
    // countLabel: "業務" / "項目" / "ステップ" / "選" など,
    message: "【比較・解説・導入ガイドなど】",
    caption: "【何がわかるか】",
    asset: "/images/column/assets/【作成した画像】.webp",
    assetKind: "illustration", // 現場の雰囲気を伝える記事は "photo"
  },
  publishedAt: "【実際の公開日時ISO8601】",
  updatedAt: "【実際の内容更新日時ISO8601】",
}
```

`coverDesign` の数字を省くと解説記事向けになる。カバー文言と画像は記事別に設定し、記事10001の内容を引き継がない。画像生成が必要な場合はImage機能を使う。OG画像も新記事の内容に合わせて作成する。

追加記事は白背景・紫枠・短い見出し・テーマ画像を共通のカバーに使う。記事冒頭は `ColumnCover` のHTML/CSSを描画し、一覧には同じカバーを書き出した1200×630画像を使う。既存10001は比較記事のレイアウトを維持する。`illustration` は旧データ向けの互換フィールドとして残す。

写真風の生成画像は架空の人物とダミー書類によるイメージとして扱い、顧客の写真・導入実績・実際の製品画面と説明しない。生成プロンプトと記事への割当ては `design/column-og/image-prompts-20261011.json` と `design/column-og/README.md` に記録する。

本文を確定したら `python3 design/fonts/subset_column.py` で日本語フォントを再生成する（fontToolsが必要）。本文の表データを置く `.ts` ファイルも収集対象になる。カバーのOG画像は、ローカルサーバーを起動して `node design/column-og/generate.mjs 10027` で生成できる。Playwrightが別の場所にある場合は `PLAYWRIGHT` にその `index.mjs` のパスを指定し、標準の3310番ポートと違う場合は `BASE_URL` を指定する。生成した1200×630画像は切れや文字化けを目視で確認する。

2026-10-11の25記事更新では `OUTPUT_SUFFIX=-og-v2` を指定し、`coverImage` を `<id>-og-v2.png` に合わせる。同じURLの画像キャッシュを避け、前の版も残す。

## 共通ブロック

| ブロック | 用途 | 差し替える内容 |
| --- | --- | --- |
| `ColumnArticle` | ヘッダー・目次・本文幅・サイドバー・執筆者・構造化データ・記事末尾のZeimee案内 | メタ情報、目次、調査方針、PR表示、本文、必要な場合だけ `ctaDescription` |
| `ColumnCover` | イラスト付きカバー、一覧サムネイル | `coverDesign` / `coverImage` |
| `ColumnSection` | h2付きセクション | id、見出し、本文 |
| `ColumnNote` | 結論・補足・確認事項 | タイトル、本文・箇条書き |
| `ColumnInformationTable` | 条件・手順・情報を整理する表 | caption、見出し、行 |
| `ColumnComparisonTable` | サービスが横に並ぶ比較表 | 列、比較項目、各列の値（列数を揃える） |
| `ColumnService` | 現行サービス紹介カード | 会社、工程、特徴、料金・条件、出典、確認日 |
| `ColumnFaq` | 見える質問・回答 | 質問、根拠のある回答 |
| `ColumnReferences` | 主な出典3〜4件と詳細一覧の折りたたみ | 共通の `checkedAt`、短い資料名・発行元・既存URLの `primarySources`、全出典の `children` |
| `ColumnCta` | 画像付きのZeimee資料・導入支援案内（`ColumnArticle` が自動表示） | 共通部品で管理。資料請求は `/#contact`、支援の説明は `/#about` |
| `createColumnMetadata` | canonical・OG・Twitter・robots | 記事メタ情報から生成 |

本文のh3・h4、段落、太字、箇条書きは `ColumnArticle` と `detail.body` 内で使えば共通の書式になる。手順は `detail.steps` / `detail.step` を使う。表は枠内で横スクロールし、ページ全体の横はみ出しを避ける。

記事末尾のZeimee案内は `ColumnArticle` が執筆者・編集方針の後に1回表示する。本文には `ColumnCta` を追加しない。記事に合わせた説明が必要な場合は `ColumnArticle` の `ctaDescription` に文字列を渡す。省略時は共通説明を使う。サービス資料の画像は紹介イメージ、写真風画像は生成イメージとして表示し、実際の資料表紙・顧客写真として扱わない。資料ボタンは既存フォームへの請求導線であり、その場でPDFを取得するボタンとして説明しない。

参考資料は `ColumnReferences` を使う。`checkedAt` は実際の共通確認日を `YYYY-MM-DD` で指定し、本文の主要な主張に直結する確認済み資料を3〜4件だけ短い名称で表示する。配列の先頭から機械的に選ばない。全資料の正式名・URL・参照条文・発行日・適用する版・確認範囲は `children` に残し、「出典の詳細を見る」で開けるようにする。`#references` は部品が付けるので、外側に同じIDを重ねない。

同じ確認日の反復だけを省く。データ中の `meta` をそのまま保持し、表示では `formatReferenceMeta(meta, checkedAt)` を使える。異なる確認日、発行日・公布日・施行日、現行版と未施行版の違い、「案」「会員専用」「本文未確認」などの条件は残す。他社サービスに外部リンクを設けない既存方針も維持する。確認できていない本文を主要な主張の根拠に使わない。

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
