import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const platforms = [
  {
    name: "TAB Point of Sales",
    description:
      "High-performance point-of-sale and operations platform for hospitality and retail.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    href: "/platforms#tab",
  },
  {
    name: "Yapr",
    description:
      "AI-powered language companion for real-time communication, learning, and accessibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    href: "/platforms#yapr",
  },
  {
    name: "Probono AI",
    description:
      "On-demand legal assistance platform expanding access to legal information and guidance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    href: "/platforms#probono",
  },
  {
    name: "Third Eye Security",
    description:
      "Computer vision–powered security and monitoring systems using edge and cloud intelligence.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "/platforms#thirdeye",
  },
];

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

const industries = [
  { name: "Hospitality", icon: "🍽️" },
  { name: "Retail", icon: "🛒" },
  { name: "Legal", icon: "⚖️" },
  { name: "Security", icon: "🔒" },
  { name: "SMB", icon: "🏢" },
  { name: "Enterprise", icon: "🏛️" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Platform Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Platforms
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Intelligent solutions designed for real-world deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.href}
                className="group relative p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-zinc-300 group-hover:bg-white/20 transition-colors">
                    {platform.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/platforms"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white font-medium transition-colors"
            >
              View All Platforms
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industries Served
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Delivering intelligent solutions across diverse sectors
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-3 px-5 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full hover:border-zinc-700 transition-colors"
              >
                <span className="text-xl">{industry.icon}</span>
                <span className="text-sm font-medium text-zinc-300">{industry.name}</span>
              </div>
            ))}
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
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-white rounded-xl hover:bg-zinc-200 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
