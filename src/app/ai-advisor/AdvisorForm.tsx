"use client";

import { FormEvent, useState } from "react";
import { track } from "@vercel/analytics";
import { BOOKING_URL } from "@/lib/document-offer";
import { ADVISOR_EMPLOYEE_RANGES } from "@/lib/contact-options";

type Status = "idle" | "sending" | "sent" | "error";

// メール・X・電話など、どの経路から来たかを URL の ?utm_source= から読む。
function readSource() {
  const value = new URLSearchParams(window.location.search).get("utm_source") ?? "";
  return /^[a-z0-9_-]{1,40}$/.test(value) ? value : "";
}

export function AdvisorForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const source = readSource();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "ai_advisor",
          company: form.get("company"),
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          employees: form.get("employees"),
          message: form.get("message"),
          source,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(
          result?.message ?? "送信に失敗しました。時間をおいて、もう一度お試しください。",
        );
        return;
      }

      track("ai_advisor_request", source ? { source } : {});
      setStatus("sent");
      window.location.assign(BOOKING_URL);
    } catch {
      setStatus("error");
      setErrorMessage("送信に失敗しました。時間をおいて、もう一度お試しください。");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="aa-company">
        会社名<em>必須</em>
        <input id="aa-company" name="company" type="text" placeholder="株式会社〇〇" autoComplete="organization" required maxLength={120} />
      </label>
      <div className="aa-f2">
        <label htmlFor="aa-name">
          お名前<em>必須</em>
          <input id="aa-name" name="name" type="text" placeholder="山田 太郎" autoComplete="name" required maxLength={80} />
        </label>
        <label htmlFor="aa-phone">
          電話番号<em>必須</em>
          <input id="aa-phone" name="phone" type="tel" placeholder="03-1234-5678" autoComplete="tel" required maxLength={30} />
        </label>
      </div>
      <label htmlFor="aa-email">
        メールアドレス<em>必須</em>
        <input id="aa-email" name="email" type="email" placeholder="name@example.co.jp" autoComplete="email" required maxLength={200} />
      </label>
      <fieldset className="aa-fs">
        <legend>社員数</legend>
        <div className="aa-seg">
          {ADVISOR_EMPLOYEE_RANGES.map((range, index) => (
            <label key={range}>
              <input type="radio" name="employees" value={range} defaultChecked={index === 1} />
              <span>{range}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label htmlFor="aa-message">
        相談したいこと<em className="aa-opt">任意</em>
        <textarea id="aa-message" name="message" rows={3} maxLength={5000} placeholder="例：見積書を作るのに毎回1時間かかる" />
      </label>
      <button className="aa-btn" type="submit" disabled={status === "sending" || status === "sent"}>
        {status === "sending" ? "送信しています…" : "無料相談を申し込む"}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === "sent" && (
          <p className="aa-form-status">
            受け付けました。日時を選ぶページへ移動します。移動しない場合は
            <a href={BOOKING_URL}>こちら</a>から開いてください。
          </p>
        )}
        {status === "error" && <p className="aa-form-status aa-form-error">{errorMessage}</p>}
      </div>
      <small>入力いただいた内容は、この相談の連絡にだけ使います。</small>
    </form>
  );
}
