"use client";

import { useEffect, useRef } from "react";

/**
 * Immersive scroll scene: a machined plate pinned to the viewport expands
 * from a centered card to full-bleed as the user scrolls through the
 * section, while a cinematic macro loop of milled black steel plays inside.
 * Transform-only scaling; the video pauses whenever the scene is offscreen.
 * The media is inherently dark, so colors here are literal black/white —
 * independent of the light/dark theme.
 */
export default function ScrollExpand() {
  const outer = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Play the loop only while the scene is on screen
    const vid = video.current;
    let io: IntersectionObserver | undefined;
    if (vid && !reduced) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) vid.play().catch(() => {});
          else vid.pause();
        },
        { threshold: 0.1 }
      );
      io.observe(vid);
    }

    if (reduced) {
      if (panel.current) panel.current.style.transform = "none";
      if (intro.current) intro.current.style.opacity = "0";
      return () => io?.disconnect();
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = outer.current;
      const p = panel.current;
      if (!el || !p) return;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const t = Math.min(1, Math.max(0, -rect.top / travel));
      // easeInOutQuad
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const scale = 0.42 + 0.58 * ease;
      p.style.transform = `scale3d(${scale}, ${scale}, 1)`;
      if (intro.current) {
        intro.current.style.opacity = String(Math.max(0, 1 - t * 2.5));
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
      io?.disconnect();
    };
  }, []);

  return (
    <section ref={outer} className="relative h-[240vh]" aria-label="Beltra Industries showcase">
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        {/* Intro line, fades as the plate takes over */}
        <div
          ref={intro}
          className="pointer-events-none absolute top-14 z-10 px-5 text-center sm:top-24"
        >
          <p className="tech-label text-graphite">The Standard</p>
          <p className="mt-2 text-sm text-graphite">
            Every platform machined to the same tolerance
          </p>
        </div>

        <div
          ref={panel}
          className="reg-plate relative h-full w-full overflow-hidden bg-black text-white will-change-transform"
          style={{ transform: "scale3d(0.42, 0.42, 1)", transformOrigin: "center center" }}
        >
          <video
            ref={video}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/foundry-loop.mp4"
            poster="/images/foundry.png"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Cinematic close-up of precision-machined black steel"
          />
          {/* scrims for label legibility */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-10">
            <span className="tech-label text-white/80">Beltra Industries</span>
            <span className="tech-label text-white/80">Applied AI</span>
          </div>
          <p className="tech-label absolute inset-x-0 bottom-8 px-6 text-center text-white/80 sm:bottom-10">
            Engineered for production — not demos
          </p>
        </div>
      </div>
    </section>
  );
}
