import Link from "next/link";
import CatalogList from "@/components/CatalogList";
import Crest from "@/components/crest/Crest";
import Reveal from "@/components/Reveal";
import Scramble from "@/components/Scramble";
import ScrollExpand from "@/components/ScrollExpand";
import { platforms } from "@/lib/platforms";

const principles = [
  {
    label: "P-01",
    title: "Applied Intelligence",
    statement: "AI should solve problems, not create demos.",
    detail: "Every system we build ships to production.",
  },
  {
    label: "P-02",
    title: "No Prototypes",
    statement: "Production-ready is the only ready.",
    detail: "We don't build showcases. We build solutions.",
  },
  {
    label: "P-03",
    title: "Secure by Design",
    statement: "Security isn't a feature. It's the foundation.",
    detail: "Trust is engineered from the ground up.",
  },
  {
    label: "P-04",
    title: "Instant Response",
    statement: "Real-time systems for real-world impact.",
    detail: "Performance-critical when it matters most.",
  },
];

const sectors = [
  "Hospitality",
  "Retail",
  "Legal",
  "Security",
  "SMB",
  "Enterprise",
];

export default function Home() {
  return (
    <>
      {/* ————— Hero ————— */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-svh max-w-7xl grid-cols-1 items-center gap-6 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-12 lg:pt-20">
          <div className="relative z-10 lg:col-span-7">
            <p className="tech-label hero-rise text-graphite">
              <Scramble text="Beltra Industries LLC — Applied AI" duration={700} />
            </p>
            <h1
              className="display hero-rise mt-6 max-w-[12ch] text-[11vw] sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              <Scramble
                text={"Intelligent systems for real‑world operations"}
                delay={150}
                duration={1100}
              />
            </h1>
            <p
              className="hero-rise mt-8 max-w-md text-base leading-relaxed text-graphite sm:text-lg"
              style={{ animationDelay: "180ms" }}
            >
              Applied AI and software platforms spanning commerce, language,
              legal access, and security. Engineered for production — not
              demos.
            </p>
            <div
              className="hero-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "280ms" }}
            >
              <Link
                href="/platforms"
                className="tech-label border border-ink bg-ink px-7 py-4 text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Explore Platforms
              </Link>
              <Link
                href="/contact"
                className="tech-label border border-ink px-7 py-4 text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* The machined crest — drag to rotate */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[420px] lg:max-w-none">
              <Crest className="absolute inset-0" />
            </div>
            <p className="tech-label mt-2 text-center text-steel">
              Drag to rotate
            </p>
          </div>
        </div>

        {/* Sector ticker */}
        <div className="border-y border-fog py-4" aria-hidden="true">
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 items-center">
              {[...sectors, ...sectors].map((s, i) => (
                <span key={i} className="tech-label mx-8 flex items-center gap-8 text-graphite">
                  {s}
                  <span className="text-steel">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————— Immersive product zoom ————— */}
      <ScrollExpand />

      {/* ————— Operating principles ————— */}
      <section className="dark-section bg-ink py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="tech-label text-steel">
              <Scramble text="Operating Principles" duration={700} />
            </p>
            <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
              <Scramble text="How we build" delay={100} />
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px border border-hairline-dark bg-hairline-dark sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal
                key={p.label}
                delay={i * 80}
                className="reg-plate bg-ink p-8 text-fog sm:p-10"
              >
                <p className="tech-label text-steel">{p.label}</p>
                <h3 className="display mt-6 text-2xl text-paper">{p.title}</h3>
                <p className="mt-4 text-lg leading-snug text-paper/90">
                  {p.statement}
                </p>
                <p className="mt-2 text-sm text-steel">{p.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Platform catalog ————— */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="tech-label text-graphite">
                <Scramble text="The Catalog" duration={700} />
              </p>
              <h2 className="display mt-4 max-w-[11ch] text-4xl sm:text-5xl">
                <Scramble text="Five platforms. One standard." delay={100} />
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-graphite">
              Each platform is built with applied AI, designed for real-world
              deployment, and focused on solving operational challenges.
            </p>
          </Reveal>

          <div className="mt-16">
            <CatalogList platforms={platforms} />
          </div>

          <Reveal className="mt-10">
            <Link
              href="/platforms"
              className="tech-label inline-block border-b border-ink pb-1 transition-opacity hover:opacity-60"
            >
              View the full catalog →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ————— CTA ————— */}
      <section className="dark-section bg-ink py-28 text-paper sm:py-36">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="tech-label text-steel">
              <Scramble text="Let's Build Together" duration={700} />
            </p>
            <h2 className="display mt-6 text-4xl sm:text-6xl">
              <Scramble text="Ready to transform" delay={100} className="block" />
              <Scramble
                text="your operations?"
                delay={350}
                className="block text-steel"
              />
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
              Partner with us to deploy intelligent systems that deliver real
              results from day one.
            </p>
            <Link
              href="/contact"
              className="tech-label mt-12 inline-block border border-paper bg-paper px-8 py-4 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
