import { NextResponse } from "next/server";

const defaultRecipients = [
  "vclab.jp@gmail.com",
  "iwasaki@vclab.jp",
  "sajimoto@vclab.jp",
];

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

  if (!company || !lastName || !firstName || !email || !phone) {
    return NextResponse.json(
      { message: "必須項目を入力してください。" },
      { status: 400 },
    );
  }

  const name = `${lastName} ${firstName}`;
  const text = [
    "Zeimee LPからお問い合わせがありました。",
    "",
    `会社名: ${company}`,
    `お名前: ${name}`,
    `会社のメールアドレス: ${email}`,
    `電話番号: ${phone}`,
    "",
    "詳細:",
    message || "未入力",
  ].join("\n");

  const html = `
    <h1>Zeimee LPからお問い合わせがありました</h1>
    <dl>
      <dt>会社名</dt><dd>${escapeHtml(company)}</dd>
      <dt>お名前</dt><dd>${escapeHtml(name)}</dd>
      <dt>会社のメールアドレス</dt><dd>${escapeHtml(email)}</dd>
      <dt>電話番号</dt><dd>${escapeHtml(phone)}</dd>
      <dt>詳細</dt><dd>${escapeHtml(message || "未入力").replaceAll("\n", "<br />")}</dd>
    </dl>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: getRecipients(),
      reply_to: email,
      subject: `【Zeimee】お問い合わせ: ${company}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Failed to send contact email", error);

    return NextResponse.json(
      { message: "メール送信に失敗しました。" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
