import { NextResponse } from "next/server";
import { INDUSTRIES } from "@/lib/contact-options";
import {
  BOOKING_URL,
  OFFER_LABEL,
  OFFER_WINDOW_MS,
  formatDeadlineJst,
} from "@/lib/document-offer";

const defaultRecipients = [
  "vclab.jp@gmail.com",
  "iwasaki@vclab.jp",
  "sajimoto@vclab.jp",
];
const requiredRecipients = ["iwasaki@vclab.jp"];

const discoverySourceLabels = new Map([
  ["search", "Google・Yahoo!などの検索"],
  ["ai", "ChatGPTなどのAI"],
  ["referral", "紹介"],
  ["social", "SNS"],
  ["event_article", "イベント・記事"],
  ["other", "その他"],
]);

type EmailPayload = {
  from: string;
  to: string | string[];
  reply_to?: string;
  subject: string;
  text: string;
  html: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getRecipients() {
  const configuredRecipients = process.env.CONTACT_TO_EMAILS?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const recipients = configuredRecipients?.length
    ? configuredRecipients
    : defaultRecipients;

  return [...new Set([...recipients, ...requiredRecipients])];
}

async function sendEmail(resendApiKey: string, payload: EmailPayload) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Zeimee <noreply@zeimee.com>";

  if (!resendApiKey) {
    return NextResponse.json(
      { message: "メール送信設定が未設定です。" },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);
  const company = asString(body?.company);
  const lastName = asString(body?.lastName);
  const firstName = asString(body?.firstName);
  const email = asString(body?.email);
  const phone = asString(body?.phone);
  const discoverySource = asString(body?.discoverySource);
  const discoveryQuery = asString(body?.discoveryQuery).slice(0, 500);
  const message = asString(body?.message);
  const industry = asString(body?.industry);
  const clientCount = asString(body?.clientCount);
  const kind = asString(body?.kind);
  const seminarTitle = asString(body?.seminarTitle);
  const seminarDate = asString(body?.seminarDate);
  const isSeminarApplication = kind === "seminar";
  const discoverySourceLabel =
    discoverySourceLabels.get(discoverySource) ?? "未入力";

  if (
    !company ||
    !lastName ||
    !firstName ||
    !email ||
    !phone ||
    (!isSeminarApplication &&
      Boolean(discoverySource) &&
      !discoverySourceLabels.has(discoverySource))
  ) {
    return NextResponse.json(
      { message: "必須項目を入力してください。" },
      { status: 400 },
    );
  }

  if (
    (body?.industry != null && typeof body.industry !== "string") ||
    (body?.clientCount != null && typeof body.clientCount !== "string") ||
    (industry && !INDUSTRIES.some((option) => option === industry)) ||
    (clientCount && !/^\d{1,6}$/.test(clientCount))
  ) {
    return NextResponse.json(
      { message: "業種または顧問先件数の入力内容を確認してください。" },
      { status: 400 },
    );
  }

  const name = `${lastName} ${firstName}`;
  const safeCompanyForSubject = company.replaceAll(/[\r\n]+/g, " ");
  const leadLabel = isSeminarApplication ? "セミナー申し込み" : "資料請求";
  const offerDeadline = new Date(Date.now() + OFFER_WINDOW_MS);
  const offerDeadlineLabel = `${formatDeadlineJst(offerDeadline)}（日本時間）`;
  const documentUrl = process.env.DOCUMENT_DOWNLOAD_URL?.trim();
  const submittedSeminarDetails = isSeminarApplication
    ? [
        `種別: ${leadLabel}`,
        `セミナー名: ${seminarTitle || "税理士特化AI Zeimee活用セミナー"}`,
        `開催日時: ${seminarDate || "5/25 21:00"}`,
        "",
      ]
    : [
        `種別: ${leadLabel}`,
        `${OFFER_LABEL}の予約期限: ${offerDeadlineLabel}`,
        "",
      ];
  const submittedDetails = [
    ...submittedSeminarDetails,
    `会社名: ${company}`,
    `業種: ${industry || "未入力"}`,
    `顧問先件数: ${clientCount ? `${Number(clientCount)}件` : "未入力"}`,
    `お名前: ${name}`,
    `会社のメールアドレス: ${email}`,
    `電話番号: ${phone}`,
    `流入元: ${discoverySourceLabel}`,
    `検索・AIで入力した言葉: ${discoveryQuery || "未入力"}`,
    "",
    "詳細:",
    message || "未入力",
  ].join("\n");
  const escapedSubmittedDetails = `
    <dl>
      ${
        isSeminarApplication
          ? `
            <dt>種別</dt><dd>${escapeHtml(leadLabel)}</dd>
            <dt>セミナー名</dt><dd>${escapeHtml(seminarTitle || "税理士特化AI Zeimee活用セミナー")}</dd>
            <dt>開催日時</dt><dd>${escapeHtml(seminarDate || "5/25 21:00")}</dd>
          `
          : `
            <dt>種別</dt><dd>${escapeHtml(leadLabel)}</dd>
            <dt>${escapeHtml(OFFER_LABEL)}の予約期限</dt><dd>${escapeHtml(offerDeadlineLabel)}</dd>
          `
      }
      <dt>会社名</dt><dd>${escapeHtml(company)}</dd>
      <dt>業種</dt><dd>${escapeHtml(industry || "未入力")}</dd>
      <dt>顧問先件数</dt><dd>${clientCount ? `${Number(clientCount)}件` : "未入力"}</dd>
      <dt>お名前</dt><dd>${escapeHtml(name)}</dd>
      <dt>会社のメールアドレス</dt><dd>${escapeHtml(email)}</dd>
      <dt>電話番号</dt><dd>${escapeHtml(phone)}</dd>
      <dt>流入元</dt><dd>${escapeHtml(discoverySourceLabel)}</dd>
      <dt>検索・AIで入力した言葉</dt><dd>${escapeHtml(discoveryQuery || "未入力").replaceAll("\n", "<br />")}</dd>
      <dt>詳細</dt><dd>${escapeHtml(message || "未入力").replaceAll("\n", "<br />")}</dd>
    </dl>
  `;

  const notificationText = [
    `Zeimee LPから${leadLabel}がありました。`,
    "",
    submittedDetails,
  ].join("\n");

  const notificationHtml = `
    <h1>Zeimee LPから${escapeHtml(leadLabel)}がありました</h1>
    ${escapedSubmittedDetails}
  `;

  const autoReplyText = isSeminarApplication
    ? [
        "はじめまして。",
        "Zeimee担当者と申します。",
        "",
        "この度は「税理士特化AI Zeimee活用セミナー」にお申し込みいただき、誠にありがとうございます。",
        "",
        "開催日時: 5/25 21:00",
        "開催形式: オンライン",
        "",
        "参加URLなどの詳細は、開催日が近づきましたら改めてご案内いたします。",
        "",
        "当日お会いできますことを楽しみにしております。",
        "",
        "――――――――――",
        "Zeimee担当者",
        "Zeimee",
      ].join("\n")
    : [
        `${name} 様`,
        "",
        "この度は、Zeimeeの資料をご請求いただき、誠にありがとうございます。",
        "",
        documentUrl
          ? `資料は下記URLからダウンロードいただけます。\n${documentUrl}`
          : "資料は担当者より改めてお送りいたします。",
        "",
        "■ 24時間以内のご予約で初期費用5万円割引",
        `${offerDeadlineLabel}までにオンライン面談をご予約いただいた方は、初期費用を5万円割引いたします（面談日は問いません）。`,
        "下記リンクよりご都合の良い日時をお選びください。",
        BOOKING_URL,
        "",
        "ご不明な点がございましたら、本メールにご返信ください。",
        "",
        "――――――――――",
        "Zeimee担当者",
        "Zeimee",
      ].join("\n");

  const autoReplyHtml = isSeminarApplication
    ? `
      <p>
        はじめまして。<br />
        Zeimee担当者と申します。
      </p>
      <p>この度は「税理士特化AI Zeimee活用セミナー」にお申し込みいただき、誠にありがとうございます。</p>
      <p>
        開催日時: 5/25 21:00<br />
        開催形式: オンライン
      </p>
      <p>参加URLなどの詳細は、開催日が近づきましたら改めてご案内いたします。</p>
      <p>当日お会いできますことを楽しみにしております。</p>
      <p>
        ――――――――――<br />
        Zeimee担当者<br />
        Zeimee
      </p>
    `
    : `
      <p>${escapeHtml(name)} 様</p>
      <p>この度は、Zeimeeの資料をご請求いただき、誠にありがとうございます。</p>
      <p>
        ${
          documentUrl
            ? `資料は下記URLからダウンロードいただけます。<br /><a href="${escapeHtml(documentUrl)}">${escapeHtml(documentUrl)}</a>`
            : "資料は担当者より改めてお送りいたします。"
        }
      </p>
      <p>
        <strong>■ 24時間以内のご予約で初期費用5万円割引</strong><br />
        ${escapeHtml(offerDeadlineLabel)}までにオンライン面談をご予約いただいた方は、初期費用を5万円割引いたします（面談日は問いません）。<br />
        下記リンクよりご都合の良い日時をお選びください。<br />
        <a href="${BOOKING_URL}">${BOOKING_URL}</a>
      </p>
      <p>ご不明な点がございましたら、本メールにご返信ください。</p>
      <p>
        ――――――――――<br />
        Zeimee担当者<br />
        Zeimee
      </p>
    `;

  const notificationResponse = await sendEmail(resendApiKey, {
    from,
    to: getRecipients(),
    reply_to: email,
    subject: `【Zeimee】${leadLabel}: ${safeCompanyForSubject}`,
    text: notificationText,
    html: notificationHtml,
  });

  if (!notificationResponse.ok) {
    const error = await notificationResponse.text();
    console.error("Failed to send contact email", error);

    return NextResponse.json(
      { message: "メール送信に失敗しました。" },
      { status: 502 },
    );
  }

  const autoReplyResponse = await sendEmail(resendApiKey, {
    from,
    to: email,
    subject: isSeminarApplication
      ? "【Zeimee】セミナー申し込みを受け付けました"
      : "【Zeimee】資料請求ありがとうございます（24時間以内のご予約で初期費用5万円割引）",
    text: autoReplyText,
    html: autoReplyHtml,
  });

  if (!autoReplyResponse.ok) {
    const error = await autoReplyResponse.text();
    console.error("Failed to send contact auto reply", error);

    return NextResponse.json(
      { message: "確認メールの送信に失敗しました。" },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    offerDeadline: isSeminarApplication ? null : offerDeadline.toISOString(),
  });
}
