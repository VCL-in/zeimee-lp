"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/contact-options";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.fromEntries(
            [
              "company",
              "industry",
              "clientCount",
              "lastName",
              "firstName",
              "email",
              "phone",
              "message",
            ].map((key) => [key, form.get(key)]),
          ),
        ),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(
          result?.message ??
            "送信に失敗しました。時間をおいて再度お試しください。",
        );
      }
      formElement.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "送信に失敗しました。時間をおいて再度お試しください。",
      );
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      aria-busy={status === "sending"}
    >
      <div className="form-field">
        <label htmlFor="company">
          事務所名・法人名<span className="required">*</span>
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="例）〇〇税理士事務所"
          required
          maxLength={200}
        />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="industry">業種（任意）</label>
          <select id="industry" name="industry" defaultValue="">
            <option value="">選択してください</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="clientCount">顧問先件数（任意）</label>
          <input
            id="clientCount"
            name="clientCount"
            type="number"
            min={0}
            max={999999}
            step={1}
            inputMode="numeric"
            placeholder="例）100"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="lastName">
            姓<span className="required">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            placeholder="山田"
            required
            maxLength={100}
          />
        </div>
        <div className="form-field">
          <label htmlFor="firstName">
            名<span className="required">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            placeholder="太郎"
            required
            maxLength={100}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="email">
          メールアドレス<span className="required">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          maxLength={254}
        />
      </div>
      <div className="form-field">
        <label htmlFor="phone">
          電話番号<span className="required">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="03-0000-0000"
          required
          maxLength={40}
        />
      </div>
      <div className="form-field">
        <label htmlFor="message">ご相談内容</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={5000}
          placeholder="時間がかかっている業務や、実現したいことなど。まだ具体的でなくても構いません。"
        />
      </div>
      <p className="form-note">
        ご入力いただいた情報は、お問い合わせへの対応・ご連絡に利用します。顧問先の個人情報や取引情報の記入はお控えください。
      </p>
      <button
        className="button button-dark"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "送信しています…" : "この内容で相談する"}
        <ArrowUpRight aria-hidden="true" />
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === "sent" && (
          <p className="form-status success">
            お問い合わせを受け付けました。担当者よりご連絡いたします。
          </p>
        )}
        {status === "error" && (
          <p className="form-status error">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}
