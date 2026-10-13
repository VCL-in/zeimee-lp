export const BOOKING_URL = "https://timerex.net/s/iwasaki_871f_0eeb/8b4b43a0";
export const OFFER_WINDOW_MS = 24 * 60 * 60 * 1000;
export const OFFER_LABEL = "初期費用5万円割引";
export const LEAD_STORAGE_KEY = "zeimee:document-lead";
export const SERVICE_DOCUMENT_PATH = "/documents/zeimee-service-guide.pdf";
export const SERVICE_DOCUMENT_FILENAME = "Zeimee サービス資料.pdf";
export const SERVICE_DOCUMENT_URL = `https://zeimee.com${SERVICE_DOCUMENT_PATH}`;

export type DocumentLead = {
  company: string;
  name: string;
  email: string;
  offerDeadline: string;
};

export function formatDeadlineJst(date: Date) {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
