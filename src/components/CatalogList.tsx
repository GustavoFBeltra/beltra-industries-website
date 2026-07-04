"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import type { Platform } from "@/lib/platforms";

/**
 * The homepage catalog rows, with a floating preview plate that follows the
 * cursor while hovering a row (desktop pointer devices only).
 */
export default function CatalogList({ platforms }: { platforms: Platform[] }) {
  const [preview, setPreview] = useState<string | null>(null);
  const [finePointer, setFinePointer] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  function onMove(e: React.MouseEvent) {
    pos.current = { x: e.clientX, y: e.clientY };
    if (!raf.current) {
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        const el = frame.current;
        if (el) {
          el.style.transform = `translate3d(${pos.current.x + 28}px, ${
            pos.current.y - 90
          }px, 0)`;
        }
      });
    }
  }

  return (
    <div onMouseMove={finePointer ? onMove : undefined}>
      <ul className="border-t border-fog">
        {platforms.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={i * 60}>
            <Link
              href={`/platforms/${p.slug}`}
              onMouseEnter={() => finePointer && setPreview(p.slug)}
              onMouseLeave={() => setPreview(null)}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-b border-fog py-7 transition-colors hover:bg-ink hover:text-paper sm:grid-cols-[80px_1fr_auto_auto] sm:gap-x-8 sm:px-4"
            >
              <span className="font-mono text-xs text-steel">{p.part}</span>
              <span>
                <span className="display block text-2xl transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                  {p.name}
                </span>
                <span className="mt-1 block text-sm text-graphite transition-colors group-hover:text-steel">
                  {p.summary}
                </span>
              </span>
              <span className="tech-label hidden text-graphite transition-colors group-hover:text-steel md:block">
                {p.category}
              </span>
              <span className="tech-label justify-self-end text-steel">
                {p.status}
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      {/* Floating preview plate */}
      {finePointer && (
        <div
          ref={frame}
          aria-hidden="true"
          className={`pointer-events-none fixed left-0 top-0 z-40 w-64 border border-fog bg-black shadow-2xl transition-opacity duration-200 ${
            preview ? "opacity-100" : "opacity-0"
          }`}
        >
          {platforms.map((p) => (
            <Image
              key={p.slug}
              src={`/images/platforms/visuals/${p.slug}.png`}
              alt=""
              width={512}
              height={286}
              sizes="256px"
              className={`h-36 w-full object-cover ${
                preview === p.slug ? "block" : "hidden"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
