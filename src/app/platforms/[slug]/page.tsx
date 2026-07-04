import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MediaParallax } from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import Scramble from "@/components/Scramble";
import { getPlatform, platforms } from "@/lib/platforms";

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const platform = getPlatform((await params).slug);
  if (!platform) return {};
  return {
    title: `${platform.name} — ${platform.tagline}`,
    description: platform.description,
  };
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const platform = getPlatform((await params).slug);
  if (!platform) notFound();

  const index = platforms.findIndex((p) => p.slug === platform.slug);
  const next = platforms[(index + 1) % platforms.length];

  return (
    <>
      {/* Spec-sheet hero */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pt-36 sm:px-8 sm:pt-44">
        {/* stamped part number */}
        <span
          aria-hidden="true"
          className="display-wide pointer-events-none absolute -right-6 -top-8 select-none text-[38vw] leading-none text-ink/[0.035] sm:text-[24rem]"
        >
          {platform.part.slice(3)}
        </span>
        <div className="hero-rise flex flex-wrap items-baseline justify-between gap-3 border-b border-fog pb-5">
          <span className="font-mono text-xs text-steel">
            {platform.part} / {platforms.length < 10 ? "0" : ""}
            {platforms.length}
          </span>
          <span className="tech-label text-graphite">{platform.category}</span>
          <span className="tech-label text-steel">{platform.status}</span>
        </div>

        <h1
          className="display hero-rise mt-10 text-5xl sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "80ms" }}
        >
          <Scramble text={platform.name} />
        </h1>
        <p
          className="tech-label hero-rise mt-5 text-graphite"
          style={{ animationDelay: "140ms" }}
        >
          <Scramble text={platform.tagline} delay={200} duration={700} />
        </p>
        <p
          className="hero-rise mt-8 max-w-2xl text-base leading-relaxed text-graphite sm:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          {platform.description}
        </p>
        <div
          className="hero-rise mb-4 mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "280ms" }}
        >
          <Link
            href={
              platform.status === "Active Development"
                ? "/contact?type=platform"
                : "/contact?type=waitlist"
            }
            className="tech-label border border-ink bg-ink px-7 py-4 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            {platform.cta}
          </Link>
          <Link
            href="/platforms"
            className="tech-label border border-ink px-7 py-4 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            All Platforms
          </Link>
        </div>
      </section>

      {/* Concept visual for platforms without product screenshots */}
      {platform.slug !== "tab" && (
        <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
          <Reveal className="reg-plate relative border border-fog">
            <MediaParallax className="max-h-[420px]">
              <Image
                src={`/images/platforms/visuals/${platform.slug}.png`}
                alt={`${platform.name} — concept visual`}
                width={1376}
                height={768}
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="max-h-[420px] w-full object-cover"
              />
            </MediaParallax>
            <span className="tech-label absolute bottom-4 left-4 bg-black/60 px-3 py-2 text-white/80">
              {platform.part} / {platform.category}
            </span>
          </Reveal>
        </section>
      )}

      {/* TAB product suite screenshots */}
      {platform.slug === "tab" && (
        <section className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
          <Reveal>
            <p className="tech-label text-graphite">Product Suite</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              One platform, every station
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="reg-plate border border-fog p-4">
              <Image
                src="/images/platforms/tab/screenshots/desktop/pos-light.png"
                alt="TAB point-of-sale terminal interface"
                width={1600}
                height={1000}
                className="w-full"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <p className="tech-label mt-4 text-graphite">
                TAB-POS / Front of House
              </p>
            </Reveal>
            <Reveal delay={80} className="reg-plate border border-fog p-4">
              <Image
                src="/images/platforms/tab/screenshots/desktop/manager-light.png"
                alt="TAB manager dashboard with analytics"
                width={1600}
                height={1000}
                className="w-full"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <p className="tech-label mt-4 text-graphite">
                TAB-Manager / Back of House
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Feature spec sheet */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="tech-label text-graphite">
            {platform.status === "Coming Soon" ? "Planned Features" : "Specifications"}
          </p>
          <h2 className="display mt-4 text-3xl sm:text-4xl">Capabilities</h2>
        </Reveal>
        <div className="mt-12 grid gap-px border border-fog bg-fog sm:grid-cols-2 lg:grid-cols-3">
          {platform.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 50} className="bg-paper p-8">
              <p className="font-mono text-[10px] text-steel">
                {platform.part}.F{String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                {f.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deployment contexts */}
      <section className="dark-section bg-ink py-24 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="tech-label text-steel">Deployed In</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              Built for the field
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-hairline-dark bg-hairline-dark sm:grid-cols-2 lg:grid-cols-4">
            {platform.industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 60} className="bg-ink p-8">
                <h3 className="display text-xl text-paper">{ind.name}</h3>
                <p className="mt-3 text-sm text-steel">{ind.note}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 text-center">
            <h2 className="display text-3xl sm:text-5xl">
              {platform.closing.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-steel sm:text-base">
              {platform.closing.body}
            </p>
            <Link
              href="/contact"
              className="tech-label mt-10 inline-block border border-paper bg-paper px-8 py-4 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Catalog pagination */}
      <Link
        href={`/platforms/${next.slug}`}
        className="group block border-b border-fog"
      >
        <div className="mx-auto flex max-w-7xl items-baseline justify-between px-5 py-10 sm:px-8">
          <span className="tech-label text-graphite">Next in catalog</span>
          <span className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-steel">{next.part}</span>
            <span className="display text-2xl transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
              {next.name} →
            </span>
          </span>
        </div>
      </Link>
    </>
  );
}
