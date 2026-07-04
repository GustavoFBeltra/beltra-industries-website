import type { Metadata } from "next";
import Scramble from "@/components/Scramble";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Interested in partnering, piloting, or learning more about Beltra Industries platforms? Get in touch.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="tech-label hero-rise text-graphite">
            <Scramble text="Direct Line" duration={700} />
          </p>
          <h1
            className="display hero-rise mt-6 text-5xl sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            <Scramble text="Contact Us" delay={120} />
          </h1>
          <p
            className="hero-rise mt-8 max-w-md text-base leading-relaxed text-graphite sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Interested in partnering, piloting, or learning more about our
            platforms? We&apos;d love to hear from you.
          </p>
          <div
            className="hero-rise mt-12 border-t border-fog pt-8"
            style={{ animationDelay: "240ms" }}
          >
            <p className="tech-label text-graphite">Or reach us directly</p>
            <a
              href="mailto:contact@beltraindustries.com"
              className="mt-3 inline-block border-b border-ink pb-1 text-lg font-semibold transition-opacity hover:opacity-60"
            >
              contact@beltraindustries.com
            </a>
          </div>
        </div>

        <div
          className="hero-rise lg:col-span-7"
          style={{ animationDelay: "200ms" }}
        >
          <ContactForm defaultType={type} />
        </div>
      </div>
    </section>
  );
}
