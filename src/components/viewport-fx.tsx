"use client";

import { useEffect } from "react";

/**
 * ViewportFX
 * - Adds a fixed bottom blur/gradient overlay for a dreamy edge at the bottom of the viewport.
 * - Initializes a sitewide IntersectionObserver for tasteful scroll‑reveal.
 */
export function ViewportFX() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      document.documentElement.classList.add("sr-enabled");
    }

    // Scroll reveal — observe common content blocks
    const root = document.querySelector("main");
    if (!root) return;

    // Auto-tag likely sections for reveal if not explicitly opted out
    const autoSelectors = [
      "section",
      "article",
      ".band",
      ".card",
      ".pub-highlight",
      ".notes-card",
    ].join(",");
    const auto = root.querySelectorAll<HTMLElement>(autoSelectors);
    auto.forEach((el) => {
      if (el.hasAttribute("data-no-reveal")) return;
      el.classList.add("sr-init");
    });

    const explicit = root.querySelectorAll<HTMLElement>("[data-reveal]");
    explicit.forEach((el) => el.classList.add("sr-init"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // Stagger slight delay based on element position
            const r = el.getBoundingClientRect();
            const delay = Math.min(140, Math.max(0, (r.top / window.innerHeight) * 120));
            el.style.setProperty("--sr-delay", `${Math.round(delay)}ms`);
            el.classList.add("sr-show");
            el.classList.remove("sr-init");
            observer.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    const targets = root.querySelectorAll<HTMLElement>(".sr-init");
    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (!reduceMotion) {
        document.documentElement.classList.remove("sr-enabled");
      }
    };
  }, []);

  // Bottom overlay fog + blur
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 bottom-0 z-20">
      <div className="relative h-40 sm:h-48 md:h-56 [mask-image:linear-gradient(to_top,black,transparent_70%)]">
        {/* Backdrop blur with very light tint and gradient combined (less glow, more blur) */}
        <div className="absolute inset-x-0 bottom-0 h-full frost-blur supports-[backdrop-filter]:bg-white/3 bg-white/0 bg-gradient-to-t from-indigo-900/22 via-indigo-900/10 to-transparent" />
        {/* Soft edge feather */}
        <div className="absolute inset-x-0 -bottom-1 h-8 bg-gradient-to-t from-black/12 to-transparent" />
        {/* Fine grain to avoid banding */}
        <div className="absolute inset-0 frost-noise opacity-20" />
      </div>
    </div>
  );
}
