// FAXを見た人のための問い合わせページ（/fax/setsubi・/fax/sogo・/fax/oroshi）の文言と、
// 問い合わせ（/api/fax-inquiry）の検証・通知メールの組み立て。送信はしない（送るのは route.ts）。
// 元はFAX原稿（zeimee-strategy の 2026-11-20-three-industry-fax/build.py の INDUSTRIES）。
// 時間の数字はすべて当社の試算。実測が取れたら、FAX原稿と一緒にここを書き換える。
// tests/ から node で直接読むので、このファイルは "@/..." の import を使わない。

export const FAX_INDUSTRY_KEYS = ["setsubi", "sogo", "oroshi"] as const;
export type FaxIndustryKey = (typeof FAX_INDUSTRY_KEYS)[number];

export type FaxIndustry = {
  /** 通知メールの件名・計測に使う業界名 */
  label: string;
  /** 見出しの「{task}を、AIで短くします」 */
  task: string;
  unit: string;
  before: string;
  after: string;
  /** 今、人がやっている作業4つ（\n は、FAX原稿と同じ位置の改行） */
  human: [string, string, string, string];
  /** AIが代わる作業3つ */
  ai: [string, string, string];
  /** 人に残る作業1つ */
  left: string;
  tool: string;
  basis: string;
  /** 申し出の「{offer}で、実際に何時間になるか」 */
  offer: string;
  /** お借りする資料の呼び名 */
  borrow: string;
};

export const FAX_INDUSTRIES: Record<FaxIndustryKey, FaxIndustry> = {
  setsubi: {
    label: "設備工事",
    task: "図面からの積算・見積書づくり",
    unit: "1物件あたり",
    before: "8時間",
    after: "2時間",
    human: ["図面を\n読む", "数量を\n拾う", "単価を\n入れる", "見積書に\nまとめる"],
    ai: ["図面を\n読む", "数量を\n拾う", "見積書の\n下書きを作る"],
    left: "確かめて\n直す",
    tool: "図面のPDFを入れると、AIが数量を拾い、見積書の下書きまで作ります。人は、できた下書きを確かめて直すだけ。今お使いの積算ソフトは、そのままで構いません。",
    basis:
      "1物件の拾いと見積書づくりを8時間、AIの下書きの確認と手直しを2時間と置いた、当社の試算です。",
    offer: "御社の図面1枚",
    borrow: "図面",
  },
  sogo: {
    label: "総合工事",
    task: "現場監督の書類づくり",
    unit: "監督1人・1日あたり",
    before: "2時間",
    after: "30分",
    human: [
      "前の書類を\n探す",
      "現場の情報を\n書き写す",
      "様式に\n合わせて作る",
      "確かめて\n出す",
    ],
    ai: ["前の書類を\n探す", "現場の情報を\n書き写す", "様式に\n合わせて作る"],
    left: "確かめて\n出す",
    tool: "現場の情報を入れると、AIが安全書類・工程表・日報の集計を、御社の様式で下書きします。監督は、できた下書きを確かめて出すだけ。今お使いの様式は、そのままで構いません。",
    basis:
      "監督1人が書類に使う時間を1日2時間、AIの下書きの確認を30分と置いた、当社の試算です。",
    offer: "御社の書類1種類",
    borrow: "書類",
  },
  oroshi: {
    label: "卸",
    task: "FAX・メールで届く注文の入力",
    unit: "1日100件の場合",
    before: "5時間",
    after: "1時間",
    human: [
      "注文書を\n読む",
      "品番を\n探す",
      "販売管理に\n打ち込む",
      "確かめて\n登録する",
    ],
    ai: ["注文書を\n読む", "品番を\n当てる", "入力の\n下書きを作る"],
    left: "確かめて\n登録する",
    tool: "届いたFAXやメールの注文書を、AIが読み取り、品番と数量を当てて、入力の下書きまで作ります。人は、できた下書きを確かめて登録するだけ。今お使いの販売管理は、そのままで構いません。",
    basis:
      "1件の入力を3分、AIの下書きの確認を1件30秒と置いた、当社の試算です。",
    offer: "御社の注文書数枚",
    borrow: "注文書",
  },
};

export function isFaxIndustryKey(value: unknown): value is FaxIndustryKey {
  return (
    typeof value === "string" &&
    (FAX_INDUSTRY_KEYS as readonly string[]).includes(value)
  );
}

export const FAX_CONTACT = {
  tel: "050-8894-3394",
  mail: "iwasaki@vclab.jp",
  company: "株式会社Zeimee",
  sender: "代表取締役 岩﨑 琉晟",
  address: "東京都調布市調布ヶ丘1-5-1 電気通信大学西11号館4階411号室",
} as const;

export const FAX_WISHES = {
  trial: { label: "無料でお試ししたい", subject: "お試し希望" },
  document: { label: "まず資料だけほしい", subject: "資料希望" },
} as const;
export type FaxWish = keyof typeof FAX_WISHES;

/** 人には見えない欄。埋まっていたら機械の送信とみなす */
export const FAX_HONEYPOT_FIELD = "website";

export type FaxInquiry = {
  industry: FaxIndustryKey;
  company: string;
  name: string;
  phone: string;
  email: string;
  wish: FaxWish;
  message: string;
};

export type FaxInquiryResult =
  | { ok: true; inquiry: FaxInquiry }
  | { ok: false; spam: true }
  | { ok: false; spam?: false; message: string };

const LIMITS = {
  company: 200,
  name: 100,
  phone: 40,
  email: 254,
  message: 2000,
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isWish(value: string): value is FaxWish {
  return Object.hasOwn(FAX_WISHES, value);
}

export function validateFaxInquiry(body: unknown): FaxInquiryResult {
  const data =
    body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  if (asString(data[FAX_HONEYPOT_FIELD])) return { ok: false, spam: true };

  const industry = data.industry;
  const company = asString(data.company);
  const name = asString(data.name);
  const phone = asString(data.phone);
  const email = asString(data.email);
  const wish = asString(data.wish);
  const message = asString(data.message);

  if (!isFaxIndustryKey(industry)) {
    return {
      ok: false,
      message: "ページを開き直して、もう一度お試しください。",
    };
  }
  if (!company || !name) {
    return { ok: false, message: "会社名とお名前を入力してください。" };
  }
  if (!phone && !email) {
    return {
      ok: false,
      message: "電話番号かメールアドレスの、どちらかを入力してください。",
    };
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "メールアドレスの形をご確認ください。" };
  }
  if (phone && phone.replaceAll(/\D/g, "").length < 9) {
    return { ok: false, message: "電話番号をご確認ください。" };
  }
  if (!isWish(wish)) {
    return { ok: false, message: "ご希望を選んでください。" };
  }
  if (
    company.length > LIMITS.company ||
    name.length > LIMITS.name ||
    phone.length > LIMITS.phone ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return { ok: false, message: "入力が長すぎます。短くしてお試しください。" };
  }

  return {
    ok: true,
    inquiry: { industry, company, name, phone, email, wish, message },
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/** 例：「【FAX／設備工事】お試し希望：株式会社〇〇」 */
export function faxInquirySubject(inquiry: FaxInquiry) {
  const company = inquiry.company.replaceAll(/[\r\n]+/g, " ");
  return `【FAX／${FAX_INDUSTRIES[inquiry.industry].label}】${FAX_WISHES[inquiry.wish].subject}：${company}`;
}

export function faxInquiryEmail(inquiry: FaxInquiry) {
  const industry = FAX_INDUSTRIES[inquiry.industry];
  const rows: [string, string][] = [
    ["経路", `FAX（${industry.label}）　zeimee.com/fax/${inquiry.industry}`],
    ["ご希望", FAX_WISHES[inquiry.wish].label],
    ["会社名", inquiry.company],
    ["お名前", inquiry.name],
    ["電話番号", inquiry.phone || "未入力"],
    ["メールアドレス", inquiry.email || "未入力"],
    ["ひとこと", inquiry.message || "未入力"],
  ];
  const heading = `FAXの問い合わせページ（${industry.label}）から送信がありました。`;
  return {
    subject: faxInquirySubject(inquiry),
    text: [heading, "", ...rows.map(([k, v]) => `${k}: ${v}`)].join("\n"),
    html: `<p>${escapeHtml(heading)}</p><dl>${rows
      .map(
        ([k, v]) =>
          `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v).replaceAll("\n", "<br />")}</dd>`,
      )
      .join("")}</dl>`,
  };
}
