"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { BrandLogo } from "./BrandLogo";
import { ArrowUpRight, X } from "lucide-react";
const links = [
  ["#about", "Zeimeeとは"],
  ["#reasons", "選ばれる理由"],
  ["#tools", "導入ツール"],
  ["#cases", "導入事例"],
];
export function SiteHeader({ children, homePath = "" }: { children: ReactNode; homePath?: "" | "/" }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const destination = useRef<string | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function close(hash?: string) {
    destination.current = hash ?? null;
    dialog.current?.close();
  }
  function restore() {
    setOpen(false);
    const hash = destination.current;
    destination.current = null;
    requestAnimationFrame(() => {
      if (hash) {
        const target = document.querySelector<HTMLElement>(hash);
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          target.addEventListener(
            "blur",
            () => target.removeAttribute("tabindex"),
            { once: true },
          );
        }
      } else trigger.current?.focus();
    });
  }
  return (
    <>
      <header className="header">
        <div className="header-inner">
          {children}
          <nav className="desktop-nav" aria-label="メインナビゲーション">
            {links.map(([href, label]) => (
              <a key={href} href={`${homePath}${href}`}>
                {label}
              </a>
            ))}
          </nav>
          <a className="nav-contact" href={`${homePath}#contact`}>
            まずは相談する
            <ArrowUpRight />
          </a>
          <button
            ref={trigger}
            className="mobile-menu-button"
            type="button"
            aria-label="メニューを開く"
            aria-haspopup="dialog"
            aria-controls="site-menu"
            aria-expanded={open}
            onClick={() => {
              dialog.current?.showModal();
              setOpen(true);
            }}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="site-menu"
        className="menu-dialog"
        aria-label="サイトメニュー"
        onClose={restore}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="menu-surface">
          <div className="menu-top">
            <span className="brand">
              <BrandLogo />
            </span>
            <button
              type="button"
              aria-label="メニューを閉じる"
              onClick={() => close()}
            >
              <X />
            </button>
          </div>
          <nav aria-label="ページ内メニュー">
            {[...links, ["#contact", "事務所の課題を相談する"]].map(
              ([href, label], i) => (
                <a href={`${homePath}${href}`} key={href} onClick={() => close(homePath ? undefined : href)}>
                  <span>0{i + 1}</span>
                  {label}
                  <ArrowUpRight />
                </a>
              ),
            )}
          </nav>
          <p>
            会計の現場から、
            <br />
            仕事のしくみを変える。
          </p>
        </div>
      </dialog>
    </>
  );
}
