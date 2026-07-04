import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MediaParallax } from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import Scramble from "@/components/Scramble";

export const metadata: Metadata = {
  title: "About",
  description:
    "Beltra Industries LLC is a founder-led technology company building applied AI, automation, and intelligent software platforms for real-world deployment.",
};

const values = [
  {
    label: "V-01",
    title: "Engineering-First",
    body: "We believe great products start with great engineering. Our team prioritizes robust, scalable architectures over shortcuts.",
  },
  {
    label: "V-02",
    title: "Applied AI",
    body: "We focus on AI that solves real problems. Every algorithm and model we deploy is designed for production use, not demonstrations.",
  },
  {
    label: "V-03",
    title: "Long-Term Vision",
    body: "We build for the long term. Our platforms are designed to grow and evolve with changing technology and market demands.",
  },
  {
    label: "V-04",
    title: "Real-World Focus",
    body: "We solve real operational problems. Our platforms are tested in production environments with real users and real data.",
  },
];

const leadership = [
  {
    title: "Founder-Led Company",
    body: "Beltra Industries is founder-led with a deep commitment to technical excellence. Our leadership maintains direct involvement in product development and engineering decisions.",
  },
  {
    title: "Engineering-First Culture",
    body: "We prioritize engineering excellence in everything we do. Our team is built around technical expertise and a shared commitment to building reliable, scalable systems.",
  },
  {
    title: "Multi-Platform Ecosystem",
    body: "We're building for the long term with a multi-platform ecosystem approach. Each product is designed to stand alone while contributing to a larger vision of intelligent, interconnected systems.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <p className="tech-label hero-rise text-graphite">
          <Scramble text="The House" duration={700} />
        </p>
        <h1
          className="display hero-rise mt-6 max-w-4xl text-5xl sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          <Scramble text="About Beltra Industries" delay={120} />
        </h1>
        <p
          className="hero-rise mt-8 max-w-2xl text-base leading-relaxed text-graphite sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          We&apos;re a technology company focused on building applied AI,
          automation, and intelligent software platforms designed for
          real-world deployment across multiple industries.
        </p>
      </section>

      {/* The workshop */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <Reveal className="reg-plate relative border border-fog">
          <MediaParallax className="max-h-[440px]">
            <Image
              src="/images/workshop.png"
              alt="Machined black steel plates in a precision rack"
              width={1376}
              height={768}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="max-h-[440px] w-full object-cover"
            />
          </MediaParallax>
          <span className="tech-label absolute bottom-4 left-4 bg-black/60 px-3 py-2 text-white/80">
            The House / Est. U.S.A.
          </span>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="dark-section bg-ink py-24 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="tech-label text-steel">Our Mission</p>
            </Reveal>
            <Reveal className="lg:col-span-8" delay={80}>
              <p className="display text-2xl leading-tight text-paper sm:text-4xl">
                Beltra Industries builds intelligent platforms that reduce
                friction in complex systems.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-steel">
                Through applied AI, thoughtful engineering, and real-world
                testing. We believe technology should solve real problems for
                real people — every platform we build is designed with this
                principle at its core, from the algorithms we develop to the
                interfaces we design.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="tech-label text-graphite">Our Values</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            The principles behind
            <br />
            everything we build
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px border border-fog bg-fog sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 70} className="bg-paper p-8 sm:p-10">
              <p className="font-mono text-[10px] text-steel">{v.label}</p>
              <h3 className="display mt-5 text-2xl">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-graphite">
                {v.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="border-y border-fog py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="tech-label text-graphite">Leadership</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Built by builders
            </h2>
            <div className="mt-10 flex items-baseline gap-4 border-l-2 border-ink pl-6">
              <div>
                <p className="text-lg font-semibold">Gustavo Beltra</p>
                <p className="tech-label mt-1 text-graphite">
                  Founder — Beltra Industries LLC
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-graphite">
                  Beltra Industries is founder-led by design. Gustavo remains
                  directly involved in the engineering and product decisions
                  behind every platform in the catalog — from architecture to
                  the details of each interface.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {leadership.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <h3 className="border-t border-ink pt-5 text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-graphite">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="display text-3xl sm:text-5xl">Want to learn more?</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-graphite sm:text-base">
            Explore our platforms or get in touch to discuss how we can help
            solve your operational challenges.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/platforms"
              className="tech-label border border-ink bg-ink px-7 py-4 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              View Platforms
            </Link>
            <Link
              href="/contact"
              className="tech-label border border-ink px-7 py-4 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
