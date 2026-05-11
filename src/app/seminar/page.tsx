import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Laptop } from "lucide-react";
import { SeminarForm } from "./SeminarForm";

export const metadata: Metadata = {
  title: "税理士特化AI Zeimee活用セミナー | Zeimee",
  description:
    "2026年5月25日21:00開催。税理士業務へのAI活用、Zeimeeでできること、導入・運用のポイントを解説するオンラインセミナーです。",
};

export default function SeminarPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#17202c]">
      <header className="border-b border-[#edf0f4] bg-white">
        <div className="mx-auto flex h-[64px] max-w-[1120px] items-center justify-between px-5">
          <Link href="/lp" className="inline-flex items-center">
            <Image
              src="/lp/zeimee-logo.png"
              alt="Zeimee"
              width={145}
              height={30}
              className="h-[28px] w-auto"
              priority
            />
          </Link>
          <a
            href="#apply"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-[3px] bg-[#17202c] px-4 text-[14px] font-bold text-white"
          >
            申し込む
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1120px] gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:py-12">
        <div>
          <div className="overflow-hidden rounded-[8px] border border-[#e1e6ee] bg-white shadow-[0_22px_58px_rgba(23,32,44,0.12)]">
            <Image
              src="/seminar/tax-ai-zeimee-seminar.png"
              alt="税理士特化AI Zeimee活用セミナー"
              width={1672}
              height={941}
              sizes="(min-width: 1024px) 680px, 100vw"
              className="aspect-[1672/941] w-full object-cover"
              priority
            />
          </div>

          <div className="mt-6">
            <h1 className="sr-only">税理士特化AI Zeimee活用セミナー</h1>
            <p className="max-w-[760px] text-[17px] font-bold leading-8 text-[#4b5565]">
              Zeimeeでできること、税理士業務へのAI活用、導入・運用のポイントをオンラインで解説します。
            </p>
            <div className="mt-5 grid gap-3 text-[15px] font-bold text-[#303b49] sm:grid-cols-3">
              <InfoLine icon={CalendarDays} text="2026年5月25日（月）" />
              <InfoLine icon={Clock3} text="21:00 開始" />
              <InfoLine icon={Laptop} text="オンライン開催" />
            </div>
          </div>
        </div>

        <aside
          id="apply"
          className="scroll-mt-8 rounded-[8px] border border-[#dfe5ee] bg-white p-5 shadow-[0_18px_44px_rgba(23,32,44,0.10)] sm:p-7 lg:sticky lg:top-6"
        >
          <div className="mb-6 border-b border-[#edf0f4] pb-5">
            <p className="text-[14px] font-extrabold text-[#1155cc]">
              オンライン開催
            </p>
            <h2 className="mt-2 text-[24px] font-extrabold leading-8">
              セミナー申し込み
            </h2>
          </div>
          <SeminarForm />
        </aside>
      </section>
    </main>
  );
}

function InfoLine({
  icon: Icon,
  text,
}: {
  icon: typeof CalendarDays;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-5 shrink-0 text-[#1155cc]" />
      <span>{text}</span>
    </div>
  );
}
