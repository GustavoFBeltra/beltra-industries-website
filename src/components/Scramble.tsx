"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "0123456789";

interface ScrambleProps {
  text: string;
  className?: string;
  /** ms before the decode starts once in view */
  delay?: number;
  /** total decode time in ms */
  duration?: number;
}

/**
 * Decode-from-digits text effect: characters cycle through random numbers
 * and resolve left-to-right into the final text. The real text is rendered
 * (invisibly) underneath so layout never shifts and SEO sees the copy.
 * Runs once when scrolled into view; skipped for prefers-reduced-motion.
 */
export default function Scramble({
  text,
  className = "",
  delay = 0,
  duration = 900,
}: ScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const start = performance.now() + delay;
        const tick = (now: number) => {
          const t = (now - start) / duration;
          if (t >= 1) {
            setDisplay(null);
            return;
          }
          const resolved = t < 0 ? 0 : Math.floor(t * text.length);
          let out = "";
          for (let i = 0; i < text.length; i++) {
            const ch = text[i];
            out +=
              i < resolved || /\s/.test(ch)
                ? ch
                : GLYPHS[(Math.random() * GLYPHS.length) | 0];
          }
          setDisplay(out);
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text, delay, duration]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className={display === null ? undefined : "invisible"}>{text}</span>
      {display !== null && (
        <span aria-hidden="true" className="absolute inset-0">
          {display}
        </span>
      )}
    </span>
  );
}
