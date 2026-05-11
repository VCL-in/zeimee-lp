import { NextResponse } from "next/server";

const defaultRecipients = [
  "vclab.jp@gmail.com",
  "iwasaki@vclab.jp",
  "sajimoto@vclab.jp",
];

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

  return configuredRecipients?.length ? configuredRecipients : defaultRecipients;
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
  const message = asString(body?.message);
  const kind = asString(body?.kind);
  const seminarTitle = asString(body?.seminarTitle);
  const seminarDate = asString(body?.seminarDate);
  const isSeminarApplication = kind === "seminar";

  if (!company || !lastName || !firstName || !email || !phone) {
    return NextResponse.json(
      { message: "必須項目を入力してください。" },
      { status: 400 },
    );
  }

  const name = `${lastName} ${firstName}`;
  const safeCompanyForSubject = company.replaceAll(/[\r\n]+/g, " ");
  const leadLabel = isSeminarApplication ? "セミナー申し込み" : "お問い合わせ";
  const submittedSeminarDetails = isSeminarApplication
    ? [
        `種別: ${leadLabel}`,
        `セミナー名: ${seminarTitle || "税理士特化AI Zeimee活用セミナー"}`,
        `開催日時: ${seminarDate || "5/25 21:00"}`,
        "",
      ]
    : [];
  const submittedDetails = [
    ...submittedSeminarDetails,
    `会社名: ${company}`,
    `お名前: ${name}`,
    `会社のメールアドレス: ${email}`,
    `電話番号: ${phone}`,
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
          : ""
      }
      <dt>会社名</dt><dd>${escapeHtml(company)}</dd>
      <dt>お名前</dt><dd>${escapeHtml(name)}</dd>
      <dt>会社のメールアドレス</dt><dd>${escapeHtml(email)}</dd>
      <dt>電話番号</dt><dd>${escapeHtml(phone)}</dd>
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
        "Zeimee運営の岩崎 琉晟と申します。",
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
        "岩崎 琉晟",
        "Zeimee",
      ].join("\n")
    : [
        "はじめまして。",
        "Zeimee運営の岩崎 琉晟と申します。",
        "",
        "この度は、月次業務自動化サービス「Zeimee」へお問い合わせいただき、誠にありがとうございます。",
        "",
        "ぜひ一度、オンラインにてZeimeeのご紹介をさせていただければと思っております。",
        "",
        "お手数をおかけしますが、ご都合の良い日時をいくつかご共有いただけますでしょうか。",
        "",
        "また、下記リンクよりご都合の良い日時をご選択いただくことも可能です。",
        "https://timerex.net/s/iwasaki_871f_0eeb/8b4b43a0",
        "",
        "お忙しいところ恐縮ですが、ご確認のほどよろしくお願いいたします。",
        "",
        "――――――――――",
        "岩崎 琉晟",
        "Zeimee",
      ].join("\n");

  const autoReplyHtml = isSeminarApplication
    ? `
      <p>
        はじめまして。<br />
        Zeimee運営の岩崎 琉晟と申します。
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
        岩崎 琉晟<br />
        Zeimee
      </p>
    `
    : `
      <p>
        はじめまして。<br />
        Zeimee運営の岩崎 琉晟と申します。
      </p>
      <p>この度は、月次業務自動化サービス「Zeimee」へお問い合わせいただき、誠にありがとうございます。</p>
      <p>ぜひ一度、オンラインにてZeimeeのご紹介をさせていただければと思っております。</p>
      <p>お手数をおかけしますが、ご都合の良い日時をいくつかご共有いただけますでしょうか。</p>
      <p>
        また、下記リンクよりご都合の良い日時をご選択いただくことも可能です。<br />
        <a href="https://timerex.net/s/iwasaki_871f_0eeb/8b4b43a0">https://timerex.net/s/iwasaki_871f_0eeb/8b4b43a0</a>
      </p>
      <p>お忙しいところ恐縮ですが、ご確認のほどよろしくお願いいたします。</p>
      <p>
        ――――――――――<br />
        岩崎 琉晟<br />
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
      : "【Zeimee】お問い合わせを受け付けました",
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

  return NextResponse.json({ ok: true });
}
