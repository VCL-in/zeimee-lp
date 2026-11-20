import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Clock3, Laptop } from "lucide-react";
import { SiteChromeFooter, SiteChromeHeader } from "@/components/SiteChrome";
import { siteFontClass } from "@/lib/site-fonts";
import { SeminarForm } from "./SeminarForm";

export const metadata: Metadata = {
  title: {
    absolute: "税理士特化AI Zeimee活用セミナー | Zeimee",
  },
  description:
    "2026年5月25日21:00開催。税理士業務へのAI活用、Zeimeeでできること、導入・運用のポイントを解説するオンラインセミナーです。",
  alternates: {
    canonical: "/seminar",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/seminar",
    siteName: "Zeimee",
    title: "税理士特化AI Zeimee活用セミナー | Zeimee",
    description:
      "税理士業務へのAI活用、Zeimeeでできること、導入・運用のポイントを解説するオンラインセミナーです。",
    images: [
      {
        url: "/seminar/tax-ai-zeimee-seminar.png",
        width: 1672,
        height: 941,
        alt: "税理士特化AI Zeimee活用セミナー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "税理士特化AI Zeimee活用セミナー | Zeimee",
    description:
      "税理士業務へのAI活用、Zeimeeでできること、導入・運用のポイントを解説するオンラインセミナーです。",
    images: ["/seminar/tax-ai-zeimee-seminar.png"],
  },
};

export default function SeminarPage() {
  return (
    <div className={`sc ${siteFontClass}`}>
    <main className="bg-[#f4f4f4] text-[#16181c]">
      <SiteChromeHeader cta={{ href: "#apply", label: "申し込む" }} />

      <section className="mx-auto grid max-w-[1120px] gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:py-12">
        <div>
          <div className="overflow-hidden rounded-[8px] border border-[#e4e4e4] bg-white ">
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
            <p className="max-w-[760px] text-[17px] leading-8 text-[#505a63]">
              Zeimeeでできること、税理士業務へのAI活用、導入・運用のポイントをオンラインで解説します。
            </p>
            <div className="mt-5 grid gap-3 text-[15px] font-medium text-[#16181c] sm:grid-cols-3">
              <InfoLine icon={CalendarDays} text="2026年5月25日（月）" />
              <InfoLine icon={Clock3} text="21:00 開始" />
              <InfoLine icon={Laptop} text="オンライン開催" />
            </div>
          </div>
        </div>

        <aside
          id="apply"
          className="scroll-mt-24 rounded-[8px] border border-[#e4e4e4] bg-white p-5  sm:p-7 lg:sticky lg:top-[96px]"
        >
          <div className="mb-6 border-b border-[#e4e4e4] pb-5">
            <p className="text-[13px] font-medium tracking-[0.14em] text-[#767676]">
              オンライン開催
            </p>
            <h2 className="mt-2 text-[26px] font-medium leading-9">
              セミナー申し込み
            </h2>
          </div>
          <SeminarForm />
        </aside>
      </section>
    </main>
    <SiteChromeFooter />
    </div>
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
      <Icon className="size-5 shrink-0 text-[#16181c]" />
      <span>{text}</span>
    </div>
  );
}
