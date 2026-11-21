import assert from "node:assert/strict";
import { test } from "node:test";
import {
  FAX_CONTACT,
  FAX_HONEYPOT_FIELD,
  FAX_INDUSTRIES,
  FAX_INDUSTRY_KEYS,
  faxInquiryEmail,
  faxInquirySubject,
  validateFaxInquiry,
} from "../src/lib/fax-inquiry.ts";

// 検証と通知メールの組み立てだけを確かめる。メールは送らない。
const valid = {
  industry: "setsubi",
  company: "株式会社テスト設備",
  name: "山田 太郎",
  phone: "03-1234-5678",
  email: "",
  wish: "trial",
  message: "",
};

test("電話だけ・メールだけのどちらでも受け付ける", () => {
  const byPhone = validateFaxInquiry(valid);
  assert.equal(byPhone.ok, true);
  const byMail = validateFaxInquiry({ ...valid, phone: "", email: "yamada@example.com" });
  assert.equal(byMail.ok, true);
  assert.equal(byMail.inquiry.email, "yamada@example.com");
});

test("電話もメールも空なら弾く", () => {
  const result = validateFaxInquiry({ ...valid, phone: "  ", email: "" });
  assert.equal(result.ok, false);
  assert.match(result.message, /どちらか/);
});

test("会社名かお名前が空なら弾く", () => {
  assert.equal(validateFaxInquiry({ ...valid, company: " " }).ok, false);
  assert.equal(validateFaxInquiry({ ...valid, name: "" }).ok, false);
});

test("業界が3つ以外・ご希望が2つ以外・形のおかしい連絡先は弾く", () => {
  for (const industry of ["kensetsu", "", undefined, 1, "__proto__"]) {
    assert.equal(validateFaxInquiry({ ...valid, industry }).ok, false);
  }
  assert.equal(validateFaxInquiry({ ...valid, wish: "buy" }).ok, false);
  assert.equal(validateFaxInquiry({ ...valid, wish: "toString" }).ok, false);
  assert.equal(validateFaxInquiry({ ...valid, email: "yamada" }).ok, false);
  assert.equal(validateFaxInquiry({ ...valid, phone: "123" }).ok, false);
  assert.equal(validateFaxInquiry(null).ok, false);
  assert.equal(validateFaxInquiry({ ...valid, message: "あ".repeat(2001) }).ok, false);
});

test("人には見えない欄が埋まっていたら、機械の送信として扱う", () => {
  const result = validateFaxInquiry({ ...valid, [FAX_HONEYPOT_FIELD]: "https://spam.example" });
  assert.deepEqual(result, { ok: false, spam: true });
});

test("件名で FAX・業界・ご希望・会社名が分かる", () => {
  const { inquiry } = validateFaxInquiry({ ...valid, company: "株式会社〇〇" });
  assert.equal(faxInquirySubject(inquiry), "【FAX／設備工事】お試し希望：株式会社〇〇");
  const doc = validateFaxInquiry({ ...valid, industry: "oroshi", wish: "document", company: "卸\r\n商事" });
  assert.equal(faxInquirySubject(doc.inquiry), "【FAX／卸】資料希望：卸 商事");
  assert.match(faxInquirySubject({ ...inquiry, industry: "sogo" }), /^【FAX／総合工事】/);
});

test("通知メールの本文は入力をそのまま載せ、HTMLは無害にする", () => {
  const { inquiry } = validateFaxInquiry({ ...valid, company: "<b>テスト</b>", message: "午後に\n電話ください" });
  const mail = faxInquiryEmail(inquiry);
  assert.match(mail.text, /会社名: <b>テスト<\/b>/);
  assert.match(mail.text, /電話番号: 03-1234-5678/);
  assert.match(mail.text, /メールアドレス: 未入力/);
  assert.ok(!mail.html.includes("<b>テスト"));
  assert.match(mail.html, /午後に<br \/>電話ください/);
});

test("ページの文言：3業界がそろい、氏名と連絡先が決まりどおり", () => {
  assert.deepEqual(Object.keys(FAX_INDUSTRIES), [...FAX_INDUSTRY_KEYS]);
  for (const d of Object.values(FAX_INDUSTRIES)) {
    assert.equal(d.human.length, 4);
    assert.equal(d.ai.length, 3);
    assert.match(d.basis, /当社の試算/);
  }
  assert.equal(FAX_CONTACT.tel, "050-8894-3394");
  assert.equal(FAX_CONTACT.mail, "iwasaki@vclab.jp");
  assert.match(FAX_CONTACT.sender, /岩﨑 琉晟/);
});
