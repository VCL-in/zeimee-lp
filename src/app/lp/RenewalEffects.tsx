"use client";

import { useEffect } from "react";

// ヘッダーの下線と、スマホの下に出す申し込みボタンの出し入れ。
export function RenewalEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".aia");
    if (!root) return;
    const header = root.querySelector<HTMLElement>(".aa-header");
    const mobileCta = root.querySelector<HTMLElement>(".aa-mcta");
    const contact = root.querySelector<HTMLElement>("#contact");

    const onScroll = () => {
      header?.classList.toggle("aa-on", window.scrollY > 40);
      if (mobileCta && contact) {
        mobileCta.classList.toggle(
          "aa-show",
          window.scrollY > 600 && contact.getBoundingClientRect().top > window.innerHeight,
        );
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
