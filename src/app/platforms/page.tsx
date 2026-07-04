import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Scramble from "@/components/Scramble";
import { platforms } from "@/lib/platforms";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "The Beltra Industries catalog — applied AI platforms for commerce, language, legal access, security, and growth.",
};

export default function PlatformsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <p className="tech-label hero-rise text-graphite">
          <Scramble
            text={`The Catalog — ${platforms.length} Platforms`}
            duration={700}
          />
        </p>
        <h1
          className="display hero-rise mt-6 max-w-4xl text-5xl sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          <Scramble text="Our Platforms" delay={120} />
        </h1>
        <p
          className="hero-rise mt-8 max-w-xl text-base leading-relaxed text-graphite sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          A centralized hub showcasing all Beltra Industries products. Each
          platform is built with applied AI, designed for real-world
          deployment, and focused on solving operational challenges.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-px border border-fog bg-fog md:grid-cols-2">
          {platforms.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 60}
              className={`bg-paper ${i === platforms.length - 1 ? "md:col-span-2" : ""}`}
            >
              <Link
                href={`/platforms/${p.slug}`}
                className="group flex h-full flex-col p-8 transition-colors hover:bg-ink hover:text-paper sm:p-10"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-steel">{p.part}</span>
                  <span className="tech-label text-steel">{p.status}</span>
                </div>
                <h2 className="display mt-10 text-3xl sm:text-4xl">{p.name}</h2>
                <p className="tech-label mt-3 text-graphite transition-colors group-hover:text-steel">
                  {p.category}
                </p>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-graphite transition-colors group-hover:text-fog">
                  {p.description}
                </p>
                <span className="tech-label mt-auto pt-8 text-ink transition-colors group-hover:text-paper">
                  {p.cta} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="reg-plate mt-24 border border-fog p-10 text-center sm:p-16">
          <p className="tech-label text-graphite">Coming Soon</p>
          <h2 className="display mt-6 text-3xl sm:text-4xl">
            The catalog is growing
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-graphite">
            Additional platforms are currently in research and development.
            Stay tuned for announcements on new solutions designed to solve
            real-world operational challenges.
          </p>
          <Link
            href="/contact"
            className="tech-label mt-10 inline-block border border-ink bg-ink px-7 py-4 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Get Notified
          </Link>
        </Reveal>
      </section>
    </>
  );
}
