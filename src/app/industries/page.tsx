import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Scramble from "@/components/Scramble";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Beltra Industries delivers intelligent solutions across hospitality, retail, legal services, security, SMB, and enterprise sectors.",
};

const industries = [
  {
    label: "S-01",
    name: "Hospitality & Restaurants",
    description:
      "Streamlined operations for restaurants, bars, hotels, and food service establishments. Our platforms handle high-volume transactions, staff management, and real-time inventory tracking.",
    challenges: [
      "High-volume transaction processing",
      "Staff scheduling and management",
      "Inventory and supply chain tracking",
      "Multi-location coordination",
    ],
    platforms: [{ name: "TAB Point of Sales", slug: "tab" }],
  },
  {
    label: "S-02",
    name: "Retail & Commerce",
    description:
      "Modern point-of-sale and commerce solutions for retail environments of all sizes. From boutique shops to multi-location chains, we provide the tools to manage sales, inventory, and customer relationships.",
    challenges: [
      "Omnichannel commerce integration",
      "Real-time inventory visibility",
      "Customer loyalty and engagement",
      "Payment processing flexibility",
    ],
    platforms: [{ name: "TAB Point of Sales", slug: "tab" }],
  },
  {
    label: "S-03",
    name: "Legal & Public Access Services",
    description:
      "Expanding access to legal information and guidance for individuals and organizations. Our AI-powered platforms help demystify legal processes and empower informed decision-making.",
    challenges: [
      "Legal complexity and accessibility",
      "Information accuracy and reliability",
      "Jurisdictional variations",
      "Privacy and confidentiality",
    ],
    platforms: [{ name: "Probono AI", slug: "probono" }],
  },
  {
    label: "S-04",
    name: "Security & Surveillance",
    description:
      "Intelligent monitoring and security systems powered by computer vision and edge computing. Real-time threat detection and comprehensive analytics for modern security operations.",
    challenges: [
      "Real-time threat detection",
      "False positive reduction",
      "Privacy compliance",
      "Integration with existing systems",
    ],
    platforms: [{ name: "Third Eye Security", slug: "thirdeye" }],
  },
  {
    label: "S-05",
    name: "Small-to-Mid Enterprises",
    description:
      "Enterprise-grade tools scaled for growing businesses. We provide the same powerful capabilities used by large organizations, designed to be accessible and affordable for SMEs.",
    challenges: [
      "Budget constraints",
      "Limited IT resources",
      "Scaling with growth",
      "Competitive differentiation",
    ],
    platforms: [
      { name: "TAB Point of Sales", slug: "tab" },
      { name: "Yapr", slug: "yapr" },
    ],
  },
  {
    label: "S-06",
    name: "Enterprise & Institutional",
    description:
      "Robust solutions for large organizations with complex requirements. Multi-location deployments, advanced integrations, and enterprise-grade security and compliance.",
    challenges: [
      "Complex integration requirements",
      "Multi-location coordination",
      "Compliance and audit trails",
      "Custom workflow automation",
    ],
    platforms: [
      { name: "TAB Point of Sales", slug: "tab" },
      { name: "Third Eye Security", slug: "thirdeye" },
      { name: "Yapr", slug: "yapr" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <p className="tech-label hero-rise text-graphite">
          <Scramble text="Sectors Served" duration={700} />
        </p>
        <h1
          className="display hero-rise mt-6 max-w-4xl text-5xl sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          <Scramble text="Industries We Serve" delay={120} />
        </h1>
        <p
          className="hero-rise mt-8 max-w-2xl text-base leading-relaxed text-graphite sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Beltra Industries delivers intelligent solutions across diverse
          sectors. Our platforms are designed to address the unique challenges
          of each industry while maintaining our commitment to reliability,
          security, and performance.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="space-y-px border border-fog bg-fog">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.label}
              delay={Math.min(i * 40, 120)}
              className="grid gap-8 bg-paper p-8 sm:p-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <p className="font-mono text-[10px] text-steel">{ind.label}</p>
                <h2 className="display mt-4 text-2xl sm:text-3xl">
                  {ind.name}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-graphite">
                  {ind.description}
                </p>
              </div>
              <div className="lg:col-span-4">
                <h3 className="tech-label text-graphite">
                  Key Challenges Addressed
                </h3>
                <ul className="mt-4 space-y-2">
                  {ind.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-sm text-graphite"
                    >
                      <span className="text-steel">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3">
                <h3 className="tech-label text-graphite">Relevant Platforms</h3>
                <ul className="mt-4 space-y-2">
                  {ind.platforms.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/platforms/${p.slug}`}
                        className="tech-label inline-block border-b border-steel pb-0.5 text-ink transition-colors hover:border-ink"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dark-section bg-ink py-24 text-paper sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="display text-3xl sm:text-5xl">
              Don&apos;t see your industry?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-steel sm:text-base">
              Our platforms are adaptable to various operational contexts.
              Contact us to discuss how Beltra Industries can address your
              specific challenges.
            </p>
            <Link
              href="/contact"
              className="tech-label mt-10 inline-block border border-paper bg-paper px-8 py-4 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
