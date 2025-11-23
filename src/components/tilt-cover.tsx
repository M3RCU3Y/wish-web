"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useCallback, useEffect, useRef } from "react";

type TiltCoverProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function TiltCover({ src, alt, width, height }: TiltCoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(false);

  const resetTilt = useCallback(() => {
    if (!innerRef.current) {
      return;
    }
    innerRef.current.style.setProperty("--tilt-rotate-x", "0deg");
    innerRef.current.style.setProperty("--tilt-rotate-y", "0deg");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = (matches = mediaQuery.matches) => {
      prefersReducedMotion.current = matches;
      if (matches) {
        resetTilt();
      }
    };

    update();

    const listener = (event: MediaQueryListEvent) => {
      update(event.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, [resetTilt]);

  const handleMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (
      prefersReducedMotion.current ||
      !containerRef.current ||
      !innerRef.current
    ) {
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const normalizedX = (x / rect.width - 0.5) * 2;
    const normalizedY = (y / rect.height - 0.5) * 2;

    const rotateY = normalizedX * 12;
    const rotateX = -normalizedY * 12;

    innerRef.current.style.setProperty("--tilt-rotate-x", `${rotateX}deg`);
    innerRef.current.style.setProperty("--tilt-rotate-y", `${rotateY}deg`);
  }, []);

  const handleLeave = useCallback(() => {
    if (prefersReducedMotion.current) {
      return;
    }
    resetTilt();
  }, [resetTilt]);

  return (
    <div
      ref={containerRef}
      className="tilt-cover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div ref={innerRef} className="tilt-cover__inner">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="latest-pub-card__cover-image"
        />
      </div>
    </div>
  );
}
