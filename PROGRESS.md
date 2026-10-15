# 2026-10-15: 資料DL・面談予約とチラシA/Bテスト

## Result

- LPのフォーム送信成功時は、自動ダウンロードせず `/document/thanks` に進む。
- 資料PDFは完了ページのダウンロードボタンから取得する。
- LP、ヘッダー、関連ページの問い合わせ導線を「資料DL・面談予約」に統一。
- チラシAは `/document/thanks?flyer=A`、Bは `/?flyer=B` に着地。
- `flyer_landing`、`document_request`、既存の `booking_complete` に `experiment: 202610_ai_advisor` と `variant: A|B` を付ける。
- 識別情報は当該タブのsessionStorageで保持する。分析イベントに氏名・メール・電話番号は含めない。
- LPから完了ページへの移動時も版を維持する。ブラウザ再読込による同版の流入イベントの重複を抑える。
- 初回流入イベントはSDKキューを初期化してから送る。NextのAnalyticsの遅延ハイドレーションでイベントが欠落しないようにした。

## Validation

- `npm run build`: 成功（TypeScriptを含む、44ページ生成）。
- `npm run lint`: エラーなし。既存のdesign/配下に未使用変数の警告4件。
- `node --test tests/flyer-experiment.test.mjs`: 7件成功（Node 24）。
- `git diff --check`: 成功。
- ローカルproduction buildをブラウザから操作して成功・エラー・再試行を確認。
- テスト用リバースプロキシで `/api/contact` の成功・失敗応答だけを模擬。既存メール送信処理は変更・実行していない。
- 送信成功時のPDF取得0件、完了画面のダウンロード操作後1件を確認。
- 完了ページに `?flyer=B` が保持され、資料請求イベントにもBが入ることを確認。
- 新規タブでA/Bの流入イベントをローカルのテレメトリー収集器で確認。
- デスクトップおよび390px幅でボタンと完了ページを確認。
- 実予約は作成していない。TimeRexの完了コールバックによる予約完了計測と、本番Analyticsへの受信確認は公開後の確認対象。

## Release

- ブランチ: `codex/flyer-ab-document-flow`
- push・本番反映は未実施。親のAGENTS.mdに従い、差分レビュー後にユーザーへpush確認する。
- 公開後、A/BのURL表示とAnalyticsのカスタムイベント受信を確認してからチラシを配布する。

## Tradeoffs

- Aのページには現行の「資料請求ありがとうございます」と割引案内も出る。今回は予約・LPのページ全体を比較する。
- 別端末・別ブラウザの予約、外部予約ページへ移動した後の完了、電話での相談は、上記のブラウザイベントだけではA/Bへ結び付かない。
