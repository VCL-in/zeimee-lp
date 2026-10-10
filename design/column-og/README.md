# コラムのサムネイル制作記録

2026-10-11、ユーザー提供の見本に合わせて10002〜10026の25枚を更新した。白背景・太い紫枠・上部説明・大きな短見出しを共通とし、実際に本文で扱う数がある記事だけ大きな数字を置く。参照画像は `reference-thumbnail.png`。既存10001の比較カバーは維持する。

## 素材と割当て

画像は組み込みの `image_gen.imagegen` で生成した。写真は架空の人物とダミーの書類によるイメージで、実際の顧客・導入実績・会計ソフト画面ではない。写真領域には小さく「生成イメージ」と表示する。写真6枚はWebPへ最適化し、イラスト3枚は透明PNGのまま使用する。プロンプト全文は `image-prompts-20261011.json`。

| 素材（public/images/column/assets/） | 記事ID |
| --- | --- |
| ai-accountant-illustration.png | 10002・10003・10008・10016・10017・10018・10020・10021 |
| security-illustration.png | 10004・10009・10010・10011・10013・10014・10023・10025 |
| ai-adoption-photo.webp | 10005 |
| bookkeeping-team-photo.webp | 10006 |
| year-end-photo.webp | 10007 |
| tax-documents-photo.webp | 10012 |
| data-link-illustration.png | 10015・10019・10022 |
| quality-review-photo.webp | 10024 |
| inheritance-records-photo.webp | 10026 |

写真は導入打合せ、記帳チーム、年末調整、確定申告の資料整理、品質チェック、相続の預金履歴整理に使用する。説明図が適する記事には会計AI・セキュリティ・データ連携のイラストを割り当てる。

## 書き出し

記事冒頭は `src/components/ColumnCover.tsx` と共通CSSで描画し、一覧とOGには同じカバーを1200×630で書き出した `<id>-og-v2.png` を使用する。コピーと画像は `src/lib/columns.ts` の `coverDesign` と `coverImage` に設定する。旧版の画像は残し、画像URLを変更して一覧のキャッシュを避ける。

```sh
BASE_URL=http://localhost:3311 OUTPUT_SUFFIX=-og-v2 PLAYWRIGHT=/path/to/playwright/index.mjs node design/column-og/generate.mjs 10002 10003 10004 10005 10006 10007 10008 10009 10010 10011 10012 10013 10014 10015 10016 10017 10018 10019 10020 10021 10022 10023 10024 10025 10026
```

生成スクリプトはフォントと画像のデコードを待ってからカバー要素を撮影する。写真の切り抜き、文字の折返し、数字と単位、枠内の収まりを確認してから採用する。

## 確認結果

- 25枚すべて1200×630で出力し、一覧のOG画像URLを新しい版へ更新した。
- 全25記事をPC幅1440px、スマホ幅390px・360pxで確認。カバー文字の枠外への欠け、ページの横はみ出し、画像読み込み失敗は0件。
- 一覧は3幅すべて26記事・26画像を表示し、横はみ出し0。既存10001の比較カバーも表示を確認した。
- ブラウザの実行時エラー0。記事タイトル・説明文・日時と本文は今回変更していない。
- 数値と訴求を本文と独立照合した。例: 質問票42問、規程10項目、チェック3層。
- 全25枚の見た目は `thumbnail-contact-sheet-v2.jpg`、イラストと写真の代表例は `thumbnail-preview-v2.png`。
- 詳細確認記録: `/Users/ryu/work/.codex-handoff/returns/zeimee-column-20261010/thumbnail-verification-v2.json`。
- `npm run build` 成功（44静的ページ・TypeScript診断なし）、`npm run lint` はエラー0。既存のFigmaデザイン用JSに未使用変数の警告4件がある。
