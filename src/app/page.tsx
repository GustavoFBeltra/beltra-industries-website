import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { VisionStatement } from "@/components/ui/design-testimonial";
import { PlatformAccordion } from "@/components/ui/interactive-image-accordion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const principles = [
  {
    title: "Applied AI",
    description: "Real AI solving real problems, not demos or prototypes.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Systems",
    description: "Performance-critical architectures for instant responsiveness.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Secure Architecture",
    description: "Built for production environments with security at the core.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Production-Ready",
    description: "Every platform designed for deployment, not demonstrations.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
  },
];


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Vision */}
      <section className="py-24 bg-black/30 backdrop-blur-sm">
        <VisionStatement />
      </section>

      {/* Platform Accordion */}
      <PlatformAccordion />

      {/* Principles */}
      <section className="py-24 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Unifying Principles
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              What connects all Beltra Industries platforms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {principles.map((principle) => (
              <div key={principle.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-white/10 text-zinc-300">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg sm:text-xl text-zinc-500 mb-4 tracking-wide">
              Delivering intelligent solutions to
            </p>
            <div className="h-[100px] sm:h-[120px] flex items-center justify-center">
              <GooeyText
                texts={["Hospitality", "Retail", "Legal", "Security", "SMB", "Enterprise"]}
                morphTime={1.5}
                cooldownTime={2}
                className="w-full"
                textClassName="font-bold tracking-tight"
              />
            </div>
            <p className="text-lg sm:text-xl text-zinc-500 mt-4 tracking-wide">
              and beyond
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700 p-12 lg:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-8">
                Interested in partnering, piloting, or learning more about our platforms?
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base rounded-xl"
              >
                Contact Beltra Industries
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
