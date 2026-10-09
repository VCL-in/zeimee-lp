"use client";
import { useEffect } from "react";
export function MotionController() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    let observer: IntersectionObserver | undefined;
    function configure() {
      observer?.disconnect();
      if (media.matches) {
        nodes.forEach((n) => (n.dataset.revealState = "visible"));
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).dataset.revealState = "visible";
              observer?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -35px 0px" },
      );
      nodes.forEach((n) => {
        if (
          n.dataset.revealState === "visible" ||
          n.getBoundingClientRect().top < innerHeight * 0.95
        ) {
          n.dataset.revealState = "visible";
        } else {
          n.dataset.revealState = "pending";
          observer?.observe(n);
        }
      });
    }
    function focus(e: FocusEvent) {
      const n = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-reveal]",
      );
      if (n) n.dataset.revealState = "visible";
    }
    configure();
    media.addEventListener("change", configure);
    document.addEventListener("focusin", focus);
    return () => {
      observer?.disconnect();
      media.removeEventListener("change", configure);
      document.removeEventListener("focusin", focus);
    };
  }, []);
  return null;
}
