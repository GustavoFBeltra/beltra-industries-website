"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { platforms } from "@/lib/platforms";

interface Entry {
  label: string;
  hint: string;
  href: string;
}

const entries: Entry[] = [
  { label: "Home", hint: "NAV", href: "/" },
  { label: "Platforms", hint: "NAV", href: "/platforms" },
  ...platforms.map((p) => ({
    label: p.name,
    hint: p.part,
    href: `/platforms/${p.slug}`,
  })),
  { label: "Technology & R&D", hint: "NAV", href: "/technology" },
  { label: "Industries", hint: "NAV", href: "/industries" },
  { label: "About", hint: "NAV", href: "/about" },
  { label: "Trust & Compliance", hint: "NAV", href: "/trust" },
  { label: "Contact", hint: "NAV", href: "/contact" },
  { label: "Privacy Policy", hint: "LEGAL", href: "/privacy" },
  { label: "Terms of Service", hint: "LEGAL", href: "/terms" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = entries.filter((e) =>
    e.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  if (!open) return null;

  function go(href: string) {
    close();
    router.push(href);
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-ink/40 px-5 pt-[18vh] backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div
        className="reg-plate w-full max-w-lg border border-fog bg-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-fog px-5">
          <span className="tech-label text-steel">GO TO</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setIndex((i) => Math.min(i + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setIndex((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter" && results[index]) {
                go(results[index].href);
              }
            }}
            placeholder="Search pages…"
            className="w-full bg-transparent py-4 font-mono text-sm text-ink placeholder:text-steel focus:outline-none"
          />
          <kbd className="tech-label text-steel">ESC</kbd>
        </div>
        <ul className="max-h-72 overflow-y-auto py-2">
          {results.length === 0 && (
            <li className="tech-label px-5 py-4 text-steel">No matches</li>
          )}
          {results.map((e, i) => (
            <li key={e.href}>
              <button
                type="button"
                onClick={() => go(e.href)}
                onMouseEnter={() => setIndex(i)}
                className={`flex w-full items-baseline justify-between px-5 py-3 text-left text-sm transition-colors ${
                  i === index ? "bg-ink text-paper" : "text-ink"
                }`}
              >
                {e.label}
                <span
                  className={`font-mono text-[10px] tracking-widest ${
                    i === index ? "text-paper/60" : "text-steel"
                  }`}
                >
                  {e.hint}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
