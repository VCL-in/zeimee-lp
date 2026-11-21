import { NextResponse } from "next/server";
import { faxInquiryEmail, validateFaxInquiry } from "@/lib/fax-inquiry";

// FAXを見た人の問い合わせ（/fax/setsubi・/fax/sogo・/fax/oroshi）の受け口。
// 既存の /api/contact は必須項目が違う（姓・名・メール・電話がすべて必須）ので、別に置いている。
// 宛先と差出人の決め方は /api/contact と同じ。
const defaultRecipients = [
  "vclab.jp@gmail.com",
  "iwasaki@vclab.jp",
  "sajimoto@vclab.jp",
];
const requiredRecipients = ["iwasaki@vclab.jp"];

function getRecipients() {
  const configuredRecipients = process.env.CONTACT_TO_EMAILS?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const recipients = configuredRecipients?.length
    ? configuredRecipients
    : defaultRecipients;

  return [...new Set([...recipients, ...requiredRecipients])];
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = validateFaxInquiry(body);

  if (!result.ok) {
    // 人には見えない欄が埋まっている送信は、送らずに成功として返す
    if (result.spam) return NextResponse.json({ ok: true });
    return NextResponse.json({ message: result.message }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Zeimee <noreply@zeimee.com>";

  if (!resendApiKey) {
    return NextResponse.json(
      { message: "メール送信設定が未設定です。" },
      { status: 503 },
    );
  }

  const { inquiry } = result;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: getRecipients(),
      ...(inquiry.email ? { reply_to: inquiry.email } : {}),
      ...faxInquiryEmail(inquiry),
    }),
  });

  if (!response.ok) {
    console.error("Failed to send fax inquiry email", await response.text());
    return NextResponse.json(
      { message: "送信に失敗しました。お電話かメールでご連絡ください。" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
