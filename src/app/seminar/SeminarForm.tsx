"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

const inputClass =
  "mt-2 h-[52px] w-full rounded-[3px] border border-[#cad3df] bg-white px-4 text-[16px] font-bold text-[#17202c] outline-none transition placeholder:text-[#a4adba] focus:border-[#1155cc] focus:ring-3 focus:ring-[#1155cc]/12";

function FieldLabel({
  children,
  required = true,
}: {
  children: string;
  required?: boolean;
}) {
  return (
    <label className="block text-[15px] font-bold text-[#17202c]">
      {children}
      {required && <span className="ml-1 text-[#d91515]">*</span>}
    </label>
  );
}

export function SeminarForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setStatus("sending");
    setErrorMessage("");

    const question = form.get("question");
    const message = question ? `事前質問: ${question}` : "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kind: "seminar",
          seminarTitle: "税理士特化AI Zeimee活用セミナー",
          seminarDate: "5/25 21:00",
          company: form.get("company"),
          lastName: form.get("lastName"),
          firstName: form.get("firstName"),
          email: form.get("email"),
          phone: form.get("phone"),
          message,
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

      formElement.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage(
        "送信に失敗しました。時間をおいて再度お試しください。",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <FieldLabel>事務所名・会社名</FieldLabel>
        <input
          required
          name="company"
          autoComplete="organization"
          placeholder="例）Zeimee税理士事務所"
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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
        <FieldLabel>メールアドレス</FieldLabel>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="例）example@zeimee.com"
          className={inputClass}
        />
      </div>

      <div>
        <FieldLabel>電話番号</FieldLabel>
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
        <FieldLabel required={false}>事前質問</FieldLabel>
        <textarea
          name="question"
          rows={4}
          placeholder="当日聞きたいことがあればご記入ください"
          className="mt-2 w-full rounded-[3px] border border-[#cad3df] bg-white px-4 py-3 text-[16px] font-bold leading-7 text-[#17202c] outline-none transition placeholder:text-[#a4adba] focus:border-[#1155cc] focus:ring-3 focus:ring-[#1155cc]/12"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-[3px] bg-[#1155cc] px-7 text-[17px] font-extrabold text-white transition hover:bg-[#0d48af] disabled:cursor-not-allowed disabled:bg-[#8aa8e6]"
      >
        {status === "sending" ? "送信中" : "申し込む"}
        <ArrowRight className="size-4" />
      </button>

      {status === "sent" && (
        <p className="rounded-[3px] bg-[#eaf7ef] px-4 py-3 text-[15px] font-bold leading-7 text-[#116b3a]">
          お申し込みを受け付けました。確認メールをご確認ください。
        </p>
      )}

      {status === "error" && (
        <p className="rounded-[3px] bg-[#fff0f0] px-4 py-3 text-[15px] font-bold leading-7 text-[#b42318]">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
