"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { track } from "@vercel/analytics";
import {
  BOOKING_URL,
  LEAD_STORAGE_KEY,
  OFFER_LABEL,
  formatDeadlineJst,
  type DocumentLead,
} from "@/lib/document-offer";

type TimerexOptions = {
  guest_company?: string;
  guest_name?: string;
  guest_email?: string;
  primary_color?: string;
  onBookingComplete?: () => void;
};

declare global {
  interface Window {
    TimerexCalendar?: (options?: TimerexOptions) => void;
  }
}

const EMBED_SRC = "https://asset.timerex.net/js/embed.js";

function readLeadRaw() {
  try {
    return sessionStorage.getItem(LEAD_STORAGE_KEY);
  } catch {
    return null;
  }
}

function parseLead(raw: string | null): DocumentLead | null {
  try {
    return raw ? (JSON.parse(raw) as DocumentLead) : null;
  } catch {
    return null;
  }
}

const subscribeNoop = () => () => {};

function splitRemaining(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return [
    Math.floor(total / 3600),
    Math.floor((total % 3600) / 60),
    total % 60,
  ].map((n) => String(n).padStart(2, "0"));
}

export function BookingOffer() {
  const leadRaw = useSyncExternalStore(subscribeNoop, readLeadRaw, () => null);
  const lead = useMemo(() => parseLead(leadRaw), [leadRaw]);
  const [now, setNow] = useState<number | null>(null);
  const [booked, setBooked] = useState(false);
  const embedded = useRef(false);

  useEffect(() => {
    const stored = parseLead(readLeadRaw());
    const tick = () => setNow(Date.now());
    const first = window.setTimeout(tick, 0);
    const timer = window.setInterval(tick, 1000);

    if (!embedded.current) {
      embedded.current = true;
      const init = () =>
        window.TimerexCalendar?.({
          guest_company: stored?.company,
          guest_name: stored?.name,
          guest_email: stored?.email,
          primary_color: "#534dff",
          onBookingComplete: () => {
            setBooked(true);
            track("booking_complete", {
              withinOffer: stored?.offerDeadline
                ? Date.now() <= Date.parse(stored.offerDeadline)
                : false,
            });
          },
        });
      if (window.TimerexCalendar) {
        init();
      } else {
        const script = document.createElement("script");
        script.id = "timerex_embed";
        script.src = EMBED_SRC;
        script.async = true;
        script.onload = init;
        document.body.appendChild(script);
      }
    }
    return () => {
      window.clearTimeout(first);
      window.clearInterval(timer);
    };
  }, []);

  const deadline = lead?.offerDeadline ? Date.parse(lead.offerDeadline) : NaN;
  const hasDeadline = Number.isFinite(deadline);
  const remaining = hasDeadline && now !== null ? deadline - now : null;
  const expired = remaining !== null && remaining <= 0;
  const [h, m, s] = splitRemaining(remaining ?? 0);

  return (
    <>
      {!expired && (
        <section className="offer-box" aria-labelledby="offer-title">
          <div className="offer-copy">
            <p id="offer-title" className="offer-title">
              24時間以内の面談予約で
              <strong>{OFFER_LABEL}！</strong>
            </p>
            <p className="offer-note">
              ※資料請求から24時間以内にご予約を完了された方が対象です。面談日は問いません。
            </p>
          </div>
          {hasDeadline && (
            <div className="offer-timer" aria-live="off">
              <span>残り時間</span>
              <p>
                <b>{h}</b>:<b>{m}</b>:<b>{s}</b>
              </p>
              <small>期限 {formatDeadlineJst(new Date(deadline))}</small>
            </div>
          )}
        </section>
      )}

      {booked ? (
        <p className="booking-done" role="status">
          ご予約ありがとうございます。確認メールをお送りしましたので、ご確認ください。
        </p>
      ) : (
        <p className="booking-heading">▼ 面談のご予約はこちら（30分・オンライン）</p>
      )}
      <div
        id="timerex_calendar"
        className="booking-calendar"
        data-url={BOOKING_URL}
      />
      <noscript>
        <a href={BOOKING_URL}>面談の予約ページを開く</a>
      </noscript>
      <p className="booking-fallback">
        カレンダーが表示されない場合は
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          こちらから予約ページを開いてください
        </a>
        。
      </p>
    </>
  );
}
