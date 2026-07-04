"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const CrestScene = dynamic(() => import("./CrestScene"), { ssr: false });

/**
 * Performance shell around the 3D crest:
 * - loads only after hydration is idle (never blocks LCP)
 * - stops the render loop entirely while offscreen
 * - honors prefers-reduced-motion (no auto-rotation, drag still works)
 */
export default function Crest({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const check = () => setDark(root.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);

    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = hasIdle
      ? window.requestIdleCallback(() => setMounted(true), { timeout: 1200 })
      : window.setTimeout(() => setMounted(true), 350);

    return () => {
      mq.removeEventListener("change", onChange);
      if (hasIdle) {
        window.cancelIdleCallback(idle);
      } else {
        window.clearTimeout(idle);
      }
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-slow ${className}`}>
      {mounted && (
        <CrestScene active={inView} reducedMotion={reducedMotion} dark={dark} />
      )}
    </div>
  );
}
