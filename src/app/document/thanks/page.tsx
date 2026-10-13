import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/app/lp/BrandLogo";
import { BookingOffer } from "./BookingOffer";
import {
  SERVICE_DOCUMENT_FILENAME,
  SERVICE_DOCUMENT_PATH,
} from "@/lib/document-offer";

export const metadata: Metadata = {
  title: "資料請求ありがとうございます｜Zeimee",
  robots: { index: false, follow: false },
};

export default function DocumentThanksPage() {
  return (
    <>
      <header className="thanks-header">
        <div className="section-shell">
          <Link className="brand" href="/" aria-label="Zeimee トップへ">
            <BrandLogo />
          </Link>
        </div>
      </header>
      <main className="thanks-page section-shell">
        <p className="thanks-badge">Thank you</p>
        <h1>資料請求ありがとうございます</h1>
        <p className="thanks-lead">
          サービス資料は下のボタンからもダウンロードできます。メールでも資料のリンクをご案内しています。
          <br />
          続けて、30分のオンライン面談をご予約いただけます。
        </p>
        <p className="thanks-download">
          <a
            className="button button-dark"
            href={SERVICE_DOCUMENT_PATH}
            download={SERVICE_DOCUMENT_FILENAME}
          >
            資料をダウンロードする（PDF）
          </a>
        </p>
        <BookingOffer />
      </main>
    </>
  );
}
