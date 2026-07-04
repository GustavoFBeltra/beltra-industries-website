"use client";

import { useEffect, useRef } from "react";

/**
 * Measurement rail on the right edge (desktop only): a hairline track with
 * an ink thumb and a mono percentage readout, like a scale on a drawing.
 */
export default function ScrollRail() {
  const thumb = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (thumb.current) {
        thumb.current.style.transform = `scaleY(${p.toFixed(4)})`;
      }
      if (label.current) {
        label.current.textContent = String(Math.round(p * 100)).padStart(3, "0");
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
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 right-5 top-0 z-40 hidden w-6 flex-col items-center lg:flex"
    >
      <div className="relative mt-28 flex-1 overflow-hidden">
        <div className="absolute inset-y-0 left-1/2 w-px bg-fog" />
        <div
          ref={thumb}
          className="absolute inset-y-0 left-1/2 w-px origin-top bg-ink"
          style={{ transform: "scaleY(0)" }}
        />
      </div>
      <span
        ref={label}
        className="my-4 font-mono text-[9px] tracking-widest text-steel"
        style={{ writingMode: "vertical-rl" }}
      >
        000
      </span>
    </div>
  );
}
