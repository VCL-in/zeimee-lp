"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { BOOKING_URL } from "@/lib/document-offer";
import {
  FAX_HONEYPOT_FIELD,
  FAX_INDUSTRIES,
  FAX_WISHES,
  validateFaxInquiry,
  type FaxIndustryKey,
  type FaxWish,
} from "@/lib/fax-inquiry";
import styles from "./fax.module.css";

const FALLBACK_ERROR =
  "送信に失敗しました。時間をおいてもう一度お試しいただくか、お電話・メールでご連絡ください。";

export function FaxInquiryForm({ industry }: { industry: FaxIndustryKey }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "sent") doneRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = new FormData(event.currentTarget);
    const payload = {
      industry,
      ...Object.fromEntries(
        [
          "company",
          "name",
          "phone",
          "email",
          "wish",
          "message",
          FAX_HONEYPOT_FIELD,
        ].map((key) => [key, String(form.get(key) ?? "")]),
      ),
    };
    // サーバーと同じ検証を先にかけて、電話もメールも空のときなどはその場で伝える
    const checked = validateFaxInquiry(payload);
    if (!checked.ok && !checked.spam) {
      setStatus("error");
      setErrorMessage(checked.message);
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch("/api/fax-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.message ?? FALLBACK_ERROR);
      track("fax_inquiry", {
        industry,
        industryLabel: FAX_INDUSTRIES[industry].label,
        wish: String(form.get("wish") ?? ""),
      });
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : FALLBACK_ERROR,
      );
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.done} ref={doneRef} tabIndex={-1} role="status">
        <h3>お問い合わせありがとうございます</h3>
        <p>1営業日以内に、岩﨑からご連絡します。</p>
        <p>
          このまま日時を決めたい方は、30分のオンライン面談をご予約いただけます。
        </p>
        <a
          className={styles.submit}
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("fax_booking_click", { industry })}
        >
          面談の日時を予約する
        </a>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-busy={status === "sending"}
      noValidate
    >
      <div className={styles.field}>
        <label htmlFor="fax-company">
          会社名<em>必須</em>
        </label>
        <input
          id="fax-company"
          name="company"
          autoComplete="organization"
          placeholder="例）株式会社〇〇"
          required
          maxLength={200}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="fax-name">
          お名前<em>必須</em>
        </label>
        <input
          id="fax-name"
          name="name"
          autoComplete="name"
          placeholder="例）山田 太郎"
          required
          maxLength={100}
        />
      </div>
      <fieldset className={styles.group}>
        <legend>
          ご連絡先<em>どちらか1つは必須</em>
        </legend>
        <div className={styles.field}>
          <label htmlFor="fax-phone">電話番号</label>
          <input
            id="fax-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="例）03-0000-0000"
            maxLength={40}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="fax-email">メールアドレス</label>
          <input
            id="fax-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="例）you@example.com"
            maxLength={254}
          />
        </div>
      </fieldset>
      <fieldset className={styles.group}>
        <legend>ご希望</legend>
        <div className={styles.choices}>
          {(Object.keys(FAX_WISHES) as FaxWish[]).map((wish, i) => (
            <label key={wish}>
              <input
                type="radio"
                name="wish"
                value={wish}
                defaultChecked={i === 0}
              />
              <span>{FAX_WISHES[wish].label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className={styles.field}>
        <label htmlFor="fax-message">ひとこと（任意）</label>
        <textarea
          id="fax-message"
          name="message"
          rows={3}
          maxLength={2000}
          placeholder="ご連絡のつきやすい時間帯など"
        />
      </div>
      {/* 人には見えない欄。機械の送信を見分けるために置いている */}
      <div className={styles.trap} aria-hidden="true">
        <label htmlFor="fax-website">この欄は空のままにしてください</label>
        <input
          id="fax-website"
          name={FAX_HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div aria-live="polite" aria-atomic="true">
        {status === "error" && <p className={styles.error}>{errorMessage}</p>}
      </div>
      <button
        className={styles.submit}
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "送信しています…" : "この内容で送る"}
      </button>
      <p className={styles.formNote}>
        ご入力いただいた情報は、このお問い合わせへのご連絡にだけ使います。
      </p>
    </form>
  );
}
