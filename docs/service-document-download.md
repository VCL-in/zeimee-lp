# サービス資料のダウンロード

- Status: Active（配布方法・検証記録）
- Owner: 株式会社Zeimee
- Last updated: 2026-10-14
- Next review: 配布資料を差し替えるとき
- Evidence: ユーザー指定PDF、フォーム・API・ブラウザの検証結果

## 配布するファイル

`public/documents/zeimee-service-guide.pdf` はユーザー提供のサービス資料PDFを無変更で配置したもの。15ページ、14,425,182 bytes。提供元と配置先・ブラウザ保存ファイルのSHA-256が一致する。

公開パスは `/documents/zeimee-service-guide.pdf`、保存ファイル名は `Zeimee サービス資料.pdf`。添付ダウンロードのContent-Dispositionと日本語ファイル名を設定し、PDFにはX-Robots-Tag: noindexを付ける。

## 利用者の流れ

1. 既存の資料DL案内から資料請求フォームへ進む。
2. フォーム送信が成功した後、PDFのダウンロードを開始する。
3. 既存の完了・面談予約ページへ進む。そこからも同じPDFをダウンロードできる。
4. 資料請求の確認メール（テキスト・HTML）にも同じ公開PDFのリンクを入れる。

通知・確認メール送信に失敗した場合はダウンロードや完了画面への遷移を開始せず、従来どおりフォームにエラーを表示する。セミナー申し込みの返信には資料リンクを追加しない。配布先はdocument-offer.tsの共通定数で管理し、DOCUMENT_DOWNLOAD_URLの環境設定は使わない。

## 検証

- build成功（44ページ）、Lintエラー0（既存警告4件）、差分の空白チェック成功。
- APIのメール送信をスタブ化し、通常資料請求の両メール形式のPDFリンクと予約期限、セミナー申し込みの既存動作を確認。
- 1440px・390pxでフォーム送信APIをモックして、自動保存、完了ページへの遷移、再ダウンロードを確認。保存したPDFは提供元と完全一致し、日本語ファイル名が正常。
- 送信失敗時はフォームに留まり、PDFを保存しない。横はみ出し・実行時エラー0。
- PDFのHTTP200、application/pdf、Content-Disposition、noindex、サイズとハッシュを確認。
- 実メール送信と実際の面談予約は行っていない。

検証記録はhandoffの `service-download-qa-20261014.json`、代表画面は `service-download-thanks-1440.png` と `service-download-thanks-390.png`。
