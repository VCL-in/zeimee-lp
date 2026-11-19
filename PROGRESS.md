# 2026-11-19: AI顧問のページ（/ai-advisor）

## Result

- 中小企業向けの「AI顧問」のページを `/ai-advisor` に追加。トップ（税理士・会計事務所向け）は変えていない。
- 見た目は、このページ専用の `ai-advisor.css`（すべて `.aia` の中だけに効く。クラス名とidには `aa-` を付けて、共通の `globals.css` の `#contact` などと重ならないようにしている）。文字は Inter と Noto Sans JP。
- 黒・白・薄い灰色だけの配色、細めの大きな見出し、角丸の枠に入れた一番上の映像、丸い小さなボタン（UPSIDERのコーポレートサイトの作りを手本にした）。
- 一番上は、現場写真にダッシュボードの画面を重ねた静止画（仮）。本番は動画に差し替える想定。
- フォームは `/api/contact` に `kind: "ai_advisor"` で送る。氏名は1つの欄、社員数は4択。`?utm_source=` を読んで、通知メールと分析イベント `ai_advisor_request` に経路として残す。
- AI顧問の申し込みには、専用の通知と自動返信を使う（資料PDFと初期費用割引の案内は付けない）。送信後はTimeRexの予約ページへ移る。
- 公開の判断が出るまで `robots: noindex, nofollow`。サイトマップにも入れていない。トップからのリンクもまだない。

## Validation

- `npm run build`: 成功。`npx eslint`（変更ファイル）と `npx tsc --noEmit`: エラーなし。
- ローカルのproduction buildを1440pxと390pxで表示。横はみ出しなし、実行時エラーなし（`/_vercel/insights/script.js` の404はローカルのため）。
- `/api/contact` の入力チェック（AI顧問の必須もれ・社員数の不正・経路の不正、既存の資料請求の必須もれ）が400を返すことを確認。
- 実メール送信と実予約は行っていない。AI顧問用の自動返信の文面は未承認の下書き。

## Release

- ブランチ: `claude/ai-advisor-lp`（未push）

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
