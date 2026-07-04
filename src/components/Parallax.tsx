"use client";

import { useEffect, useRef, type ReactNode } from "react";

function useReducedMotion() {
  const reduced = useRef(false);
  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);
  return reduced;
}

/**
 * Scroll parallax: translates its content against scroll direction at
 * `speed` (0–1) relative to the element's distance from viewport center.
 * Optional `fade` dims the content as it leaves the top of the viewport.
 * Transform/opacity only — compositor-cheap on mobile.
 */
export default function Parallax({
  speed = 0.12,
  fade = false,
  className = "",
  children,
}: {
  speed?: number;
  fade?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (reduced.current) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Skip work when far offscreen
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      const offset = rect.top + rect.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
      if (fade) {
        el.style.opacity = String(
          Math.max(0, 1 - Math.max(0, -rect.top) / 500)
        );
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed, fade, reduced]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Parallax drift inside a cropped media plate: the child is oversized and
 * slides gently within the frame as the plate crosses the viewport.
 */
export function MediaParallax({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = outer.current;
    const media = inner.current;
    if (!el || !media) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (reduced.current) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      // progress: -1 (entering at bottom) … 1 (leaving at top)
      const progress =
        (rect.top + rect.height / 2 - vh / 2) / ((vh + rect.height) / 2);
      media.style.transform = `translate3d(0, ${(progress * 6).toFixed(2)}%, 0) scale(1.13)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div ref={outer} className={`overflow-hidden ${className}`}>
      <div ref={inner} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
