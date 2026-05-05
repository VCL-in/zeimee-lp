"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="block text-[18px] font-bold text-[#202936]">
      {children}
      <span className="ml-1 text-[#d91515]">*</span>
    </label>
  );
}

const inputClass =
  "mt-2 h-14 w-full rounded-[2px] border border-[#cbd6e3] bg-[#f7f9fb] px-4 text-[18px] font-bold text-[#202936] outline-none transition placeholder:text-[#aeb6c0] focus:border-[#1155cc] focus:bg-white";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setErrorMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company: form.get("company"),
        lastName: form.get("lastName"),
        firstName: form.get("firstName"),
        email: form.get("email"),
        phone: form.get("phone"),
        message: form.get("message"),
      }),
    });

    if (!response.ok) {
      const result = await response.json().catch(() => null);
      setStatus("error");
      setErrorMessage(
        result?.message ?? "送信に失敗しました。時間をおいて再度お試しください。",
      );
      return;
    }

    event.currentTarget.reset();
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <div>
        <FieldLabel>会社名</FieldLabel>
        <input
          required
          name="company"
          autoComplete="organization"
          placeholder="例）Zeimee税理士事務所"
          className={inputClass}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel>お名前（姓）</FieldLabel>
          <input
            required
            name="lastName"
            autoComplete="family-name"
            placeholder="姓"
            className={inputClass}
          />
        </div>
        <div>
          <FieldLabel>お名前（名）</FieldLabel>
          <input
            required
            name="firstName"
            autoComplete="given-name"
            placeholder="名"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <FieldLabel>会社のメールアドレス</FieldLabel>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="例）example@zeimee.app"
          className={inputClass}
        />
      </div>

      <div>
        <FieldLabel>ご連絡のつく電話番号</FieldLabel>
        <input
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="例）08012345678"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-[18px] font-bold text-[#202936]">
          詳細
        </label>
        <textarea
          name="message"
          rows={6}
          placeholder="ご相談内容や現在の課題をご記入ください"
          className="mt-2 w-full rounded-[2px] border border-[#cbd6e3] bg-[#f7f9fb] px-4 py-4 text-[18px] font-bold leading-8 text-[#202936] outline-none transition placeholder:text-[#aeb6c0] focus:border-[#1155cc] focus:bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-[2px] bg-[#1155cc] px-8 text-[18px] font-bold text-white transition disabled:cursor-not-allowed disabled:bg-[#8aa8e6] sm:w-auto"
      >
        {status === "sending" ? "送信中" : "送信する"}
        <ArrowRight className="size-4" />
      </button>

      {status === "sent" && (
        <p className="text-[16px] font-bold leading-7 text-[#116b3a]">
          送信しました。担当者よりご連絡いたします。
        </p>
      )}

      {status === "error" && (
        <p className="text-[16px] font-bold leading-7 text-[#b42318]">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
