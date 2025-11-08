"use client";

import { useEffect, useRef } from "react";

type StarfieldProps = {
  className?: string;
  density?: number;
  color?: string;
  lineColor?: string;
  linkDistance?: number;
  fps?: number;
  blend?: "normal" | "screen" | "lighter";
  shootingStars?: boolean;
  aurora?: boolean;
  respectReducedMotion?: boolean;
  /** Global drift speed multiplier */
  baseDrift?: number;
  /** Wave amplitude multiplier */
  waveAmp?: number;
  /** Twinkle/glint strength */
  twinkleAmp?: number;
  /** Glow strength (0.0–1.5) */
  glow?: number;
  /** Meteor spawn probability per frame */
  meteorRate?: number;
  /** Max concurrent meteors */
  maxMeteors?: number;
  /** Toggle constellation links */
  constellations?: boolean;
};

export function StarfieldConstellation({
  className,
  density = 0.1,
  color = "rgba(255,255,255,0.85)",
  lineColor = "rgba(148, 163, 184, 0.15)",
  linkDistance = 90,
  fps = 48,
  blend = "normal",
  shootingStars = true,
  aurora = true,
  respectReducedMotion = true,
  baseDrift = 1,
  waveAmp = 1.6,
  twinkleAmp = 1,
  glow = 1,
  meteorRate = 0.0035,
  maxMeteors = 2,
  constellations = true,
}: StarfieldProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = containerRef.current;
    if (!canvas || !host) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const context = ctx as CanvasRenderingContext2D;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = respectReducedMotion && media.matches;
    const onMedia = () => (reduceMotion = respectReducedMotion && media.matches);
    media.addEventListener("change", onMedia);

    let width = 0,
      height = 0,
      dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));

    type Star = {
      x: number;
      y: number;
      r: number;
      twinkle: number;
      vx: number;
      vy: number;
    };
    let starsNear: Star[] = [];
    let starsFar: Star[] = [];

    type Meteor = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      len: number;
      life: number;
      maxLife: number;
      size: number;
    };
    const meteors: Meteor[] = [];

    const ro = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      const targetW = Math.floor(width * dpr);
      const targetH = Math.floor(height * dpr);
      canvas.width = targetW;
      canvas.height = targetH;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      spawnStars();
      context.clearRect(0, 0, targetW, targetH);
    });
    ro.observe(host);

    function spawnStars() {
      const area = width * height;
      const total = Math.max(10, Math.floor((area / 10000) * density * 120));
      const nearCount = Math.floor(total * 0.4);
      const farCount = total - nearCount;
      const mk = (count: number, near: boolean) =>
        new Array(count).fill(0).map(() => {
          const rCss = (near ? 0.9 : 0.7) + Math.random() * (near ? 0.8 : 0.6);
          const r = rCss * dpr;
          const speed = (near ? 0.12 : 0.06) * dpr * baseDrift;
          const s: Star = {
            x: Math.random() * width * dpr,
            y: Math.random() * height * dpr,
            r,
            twinkle: Math.random(),
            // bias vx slightly rightward so the whole field drifts
            vx: (Math.random() - 0.35) * speed + (near ? 0.04 * speed : 0.02 * speed),
            vy: (Math.random() - 0.5) * speed,
          };
          return s;
        });
      starsNear = mk(nearCount, true);
      starsFar = mk(farCount, false);
    }

    let last = 0;
    const frameInterval = 1000 / fps;
    let raf = 0;

    function loop(t: number) {
      raf = requestAnimationFrame(loop);
      if (t - last < frameInterval) return;
      last = t;

      const W = canvas!.width;
      const H = canvas!.height;
      context.clearRect(0, 0, W, H);

      // Vignette
      const g = context.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) / 1.2);
      g.addColorStop(0, "rgba(255,255,255,0.03)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = g;
      context.fillRect(0, 0, W, H);

      const time = t * 0.001;
      const motionScale = reduceMotion ? 0.6 : 1;
      const waveX = (Math.sin(time * 0.25) * 6 + Math.sin(time * 0.71) * 2.5) * dpr * waveAmp * 0.5 * motionScale;
      const waveY = (Math.cos(time * 0.21) * 4 + Math.sin(time * 0.57) * 1.5) * dpr * waveAmp * 0.5 * motionScale;

      // Stars
      const drawLayer = (stars: Star[], alpha = 1) => {
        context.globalAlpha = alpha;
        for (const s of stars) {
          s.x += s.vx * motionScale;
          s.y += s.vy * motionScale;
          if (s.x < 0) s.x += W; else if (s.x > W) s.x -= W;
          if (s.y < 0) s.y += H; else if (s.y > H) s.y -= H;
          s.twinkle += (reduceMotion ? 0.003 : 0.006) + Math.random() * 0.0035;
          const tw = 0.7 + Math.sin(s.twinkle * Math.PI * 2) * 0.3 * twinkleAmp;
          const dx = s.x + waveX;
          const dy = s.y + waveY;
          // additive glow pass
          const prevComp = context.globalCompositeOperation;
          context.globalCompositeOperation = "lighter";
          const halo = context.createRadialGradient(dx, dy, 0, dx, dy, s.r * (4.0 + tw * 1.0));
          halo.addColorStop(0, `rgba(255,255,255,${0.22 * glow})`);
          halo.addColorStop(1, "rgba(255,255,255,0)");
          context.fillStyle = halo;
          context.beginPath();
          context.arc(dx, dy, s.r * (4.0 + tw * 1.0), 0, Math.PI * 2);
          context.fill();
          context.globalCompositeOperation = prevComp;
          // core
          context.fillStyle = color;
          context.beginPath();
          const pulse = 0.92 + Math.sin(time * 1.8 + s.twinkle * 6.283) * 0.12 * twinkleAmp;
          context.arc(dx, dy, s.r * (0.95 + tw * 0.25) * pulse, 0, Math.PI * 2);
          context.fill();
        }
        context.globalAlpha = 1;
      };
      drawLayer(starsFar, 0.85);
      drawLayer(starsNear, 1);

      // Meteors
      if (shootingStars && !reduceMotion && Math.random() < meteorRate && meteors.length < maxMeteors) {
        const startX = Math.random() * W * 0.3 - W * 0.15;
        const startY = Math.random() * H * 0.35;
        const speed = (2.5 + Math.random() * 3.5) * dpr;
        const angle = (15 + Math.random() * 35) * (Math.PI / 180);
        meteors.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          len: (90 + Math.random() * 140) * dpr,
          life: 0,
          maxLife: 260,
          size: (1.4 + Math.random() * 0.8) * dpr,
        });
      }
      if (meteors.length) {
        const prev = context.globalCompositeOperation;
        context.globalCompositeOperation = "lighter";
        for (let i = meteors.length - 1; i >= 0; i--) {
          const m = meteors[i];
          m.x += m.vx * motionScale;
          m.y += m.vy * motionScale;
          m.life++;
          const mag = Math.hypot(m.vx, m.vy) || 1;
          const ux = m.vx / mag;
          const uy = m.vy / mag;
          const tx = m.x - ux * m.len;
          const ty = m.y - uy * m.len;
          const grad = context.createLinearGradient(tx, ty, m.x, m.y);
          grad.addColorStop(0, "rgba(255,255,255,0)");
          grad.addColorStop(0.5, "rgba(255,255,255,0.18)");
          grad.addColorStop(1, "rgba(255,255,255,0.85)");
          context.strokeStyle = grad;
          context.lineWidth = Math.max(1 * dpr, 0.8);
          context.beginPath();
          context.moveTo(tx, ty);
          context.lineTo(m.x, m.y);
          context.stroke();
          const glow = context.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.size * 4);
          glow.addColorStop(0, "rgba(255,255,255,0.6)");
          glow.addColorStop(1, "rgba(255,255,255,0)");
          context.fillStyle = glow;
          context.beginPath();
          context.arc(m.x, m.y, m.size * 4, 0, Math.PI * 2);
          context.fill();
          if (m.life > m.maxLife || m.x > W + 50 * dpr || m.y > H + 50 * dpr) {
            meteors.splice(i, 1);
          }
        }
        context.globalCompositeOperation = prev;
      }

      // Constellation links
      if (constellations) {
      const cell = Math.max(40 * dpr, 1);
      const cols = Math.ceil(canvas!.width / cell);
      const rows = Math.ceil(canvas!.height / cell);
      const buckets: number[][] = Array.from({ length: cols * rows }, () => []);
      const all = starsNear.concat(starsFar);
      for (let i = 0; i < all.length; i++) {
        const s = all[i];
        const c = Math.floor(s.x / cell);
        const r = Math.floor(s.y / cell);
        const idx = r * cols + c;
        if (buckets[idx]) buckets[idx].push(i);
      }
      context.strokeStyle = lineColor;
      context.lineWidth = Math.max(0.5 * dpr, 0.35);
      const maxDist = linkDistance * dpr;
      const maxDist2 = maxDist * maxDist;
      const degree: number[] = new Array(all.length).fill(0);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const neighborhood: number[] = [];
          for (let rr = r - 1; rr <= r + 1; rr++) {
            for (let cc = c - 1; cc <= c + 1; cc++) {
              const j = rr * cols + cc;
              if (rr >= 0 && cc >= 0 && rr < rows && cc < cols && buckets[j]) {
                neighborhood.push(...buckets[j]);
              }
            }
          }
          const ids = buckets[idx];
          for (const i of ids) {
            if (degree[i] >= 2) continue;
            const a = all[i];
            const candidates: { j: number; d2: number }[] = [];
            for (const j of neighborhood) {
              if (i >= j || degree[j] >= 2) continue;
              const b = all[j];
              const dx = a.x - b.x;
              const dy = a.y - b.y;
              const d2 = dx * dx + dy * dy;
              if (d2 < maxDist2) candidates.push({ j, d2 });
            }
            candidates.sort((m, n) => m.d2 - n.d2);
            const take = Math.min(2 - degree[i], candidates.length);
            for (let k = 0; k < take; k++) {
              const { j, d2 } = candidates[k];
              const b = all[j];
              const alpha = Math.max(0.08, 1 - d2 / maxDist2) * 0.35;
              context.globalAlpha = alpha;
              context.beginPath();
              context.moveTo(a.x + waveX, a.y + waveY);
              context.lineTo(b.x + waveX, b.y + waveY);
              context.stroke();
              degree[i]++;
              degree[j]++;
              if (degree[i] >= 2) break;
            }
          }
        }
      }
      context.globalAlpha = 1;
      }

      // Aurora sweep overlay
      if (aurora) {
        const prev = context.globalCompositeOperation;
        context.globalCompositeOperation = "screen";
        const cx = (Math.sin(time * 0.15) * 0.5 + 0.5) * W;
        const cy = H * 0.4;
        const r1 = Math.max(W, H) * 0.6;
        const grad1 = context.createRadialGradient(cx, cy, 0, cx, cy, r1);
        grad1.addColorStop(0, "rgba(138,123,253,0.07)");
        grad1.addColorStop(1, "rgba(138,123,253,0)");
        context.fillStyle = grad1;
        context.beginPath();
        context.arc(cx, cy, r1, 0, Math.PI * 2);
        context.fill();

        const cx2 = (Math.cos(time * 0.11) * 0.5 + 0.5) * W;
        const cy2 = H * 0.8;
        const r2 = Math.max(W, H) * 0.5;
        const grad2 = context.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
        grad2.addColorStop(0, "rgba(56,192,181,0.06)");
        grad2.addColorStop(1, "rgba(56,192,181,0)");
        context.fillStyle = grad2;
        context.beginPath();
        context.arc(cx2, cy2, r2, 0, Math.PI * 2);
        context.fill();
        context.globalCompositeOperation = prev;
      }
    }

    raf = requestAnimationFrame(loop);

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", onVis);

    const onDpr = () => {
      dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      spawnStars();
    };
    window.addEventListener("resize", onDpr, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onDpr);
      media.removeEventListener("change", onMedia);
      ro.disconnect();
    };
  }, [
    aurora,
    baseDrift,
    blend,
    color,
    constellations,
    density,
    fps,
    glow,
    linkDistance,
    lineColor,
    maxMeteors,
    meteorRate,
    respectReducedMotion,
    shootingStars,
    twinkleAmp,
    waveAmp,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={[
        "pointer-events-none absolute inset-0 overflow-hidden rounded-full",
        className || "",
      ].join(" ")}
    >
      <canvas
        ref={ref}
        className={[
          "block h-full w-full opacity-80",
          blend === "screen"
            ? "mix-blend-screen"
            : blend === "lighter"
            ? "mix-blend-plus-lighter"
            : "mix-blend-normal",
        ].join(" ")}
      />
    </div>
  );
}
