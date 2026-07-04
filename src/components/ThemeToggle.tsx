"use client";

import { useEffect, useState } from "react";

/**
 * Monochrome theme switch. The init script in layout.tsx sets the class
 * before first paint; this button just flips it and persists the choice.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-10 w-10 items-center justify-center text-ink transition-opacity hover:opacity-60 ${className}`}
    >
      {/* half-machined disc — fill side flips with the theme */}
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <circle
          cx="9"
          cy="9"
          r="7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d={dark ? "M9 1.5 a7.5 7.5 0 0 0 0 15 Z" : "M9 1.5 a7.5 7.5 0 0 1 0 15 Z"}
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
