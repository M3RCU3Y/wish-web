"use client";

import { useEffect, useRef, useState } from "react";

export function AuroraFocusGate() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isBlurActive, setIsBlurActive] = useState(true);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    setIsBlurActive(true);

    if (typeof IntersectionObserver === "undefined") {
      setIsBlurActive(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBlurActive(!entry.isIntersecting);
      },
      { rootMargin: "0px 0px -160px 0px", threshold: 0 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div aria-hidden className={`aurora-focus-gate${isBlurActive ? " aurora-focus-gate--active" : ""}`}>
        <span className="aurora-focus-gate__fog" />
      </div>
      <div ref={sentinelRef} aria-hidden className="aurora-focus-sentinel" />
    </>
  );
}
