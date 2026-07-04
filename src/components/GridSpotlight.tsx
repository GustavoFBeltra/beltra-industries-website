"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor-following reveal on the blueprint grid: a soft circle around the
 * pointer where the grid lines sharpen, like a loupe over a drawing.
 * Mouse-only (skipped on touch devices), rAF-throttled.
 */
export default function GridSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;

    let x = -500;
    let y = -500;
    let raf = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      x = -500;
      y = -500;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="spot-mask absolute inset-0">
      <div className="grid-spotlight absolute -inset-[96px]" />
    </div>
  );
}
