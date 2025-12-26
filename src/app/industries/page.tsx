import Link from "next/link";

const industries = [
  {
    name: "Hospitality & Restaurants",
    description:
      "Streamlined operations for restaurants, bars, hotels, and food service establishments. Our platforms handle high-volume transactions, staff management, and real-time inventory tracking.",
    platforms: ["TAB Point of Sales"],
    challenges: [
      "High-volume transaction processing",
      "Staff scheduling and management",
      "Inventory and supply chain tracking",
      "Multi-location coordination",
    ],
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
        />
      </svg>
    ),
  },
  {
    name: "Retail & Commerce",
    description:
      "Modern point-of-sale and commerce solutions for retail environments of all sizes. From boutique shops to multi-location chains, we provide the tools to manage sales, inventory, and customer relationships.",
    platforms: ["TAB Point of Sales"],
    challenges: [
      "Omnichannel commerce integration",
      "Real-time inventory visibility",
      "Customer loyalty and engagement",
      "Payment processing flexibility",
    ],
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
  {
    name: "Legal & Public Access Services",
    description:
      "Expanding access to legal information and guidance for individuals and organizations. Our AI-powered platforms help demystify legal processes and empower informed decision-making.",
    platforms: ["Probono AI"],
    challenges: [
      "Legal complexity and accessibility",
      "Information accuracy and reliability",
      "Jurisdictional variations",
      "Privacy and confidentiality",
    ],
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
      </svg>
    ),
  },
  {
    name: "Security & Surveillance",
    description:
      "Intelligent monitoring and security systems powered by computer vision and edge computing. Real-time threat detection and comprehensive analytics for modern security operations.",
    platforms: ["Third Eye Security"],
    challenges: [
      "Real-time threat detection",
      "False positive reduction",
      "Privacy compliance",
      "Integration with existing systems",
    ],
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    name: "Small-to-Mid Enterprises",
    description:
      "Enterprise-grade tools scaled for growing businesses. We provide the same powerful capabilities used by large organizations, designed to be accessible and affordable for SMEs.",
    platforms: ["TAB Point of Sales", "Yapr"],
    challenges: [
      "Budget constraints",
      "Limited IT resources",
      "Scaling with growth",
      "Competitive differentiation",
    ],
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    name: "Enterprise & Institutional",
    description:
      "Robust solutions for large organizations with complex requirements. Multi-location deployments, advanced integrations, and enterprise-grade security and compliance.",
    platforms: ["TAB Point of Sales", "Third Eye Security", "Yapr"],
    challenges: [
      "Complex integration requirements",
      "Multi-location coordination",
      "Compliance and audit trails",
      "Custom workflow automation",
    ],
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
];

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Beltra Industries delivers intelligent solutions across diverse
              sectors. Our platforms are designed to address the unique challenges
              of each industry while maintaining our commitment to reliability,
              security, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 hover:border-[var(--accent)]/50 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold">{industry.name}</h2>
                    <p className="mt-3 text-[var(--muted)] leading-7">
                      {industry.description}
                    </p>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-[var(--foreground)]">
                        Key Challenges Addressed
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {industry.challenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="flex items-center gap-2 text-sm text-[var(--muted)]"
                          >
                            <svg
                              className="h-4 w-4 text-[var(--accent)]"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-[var(--foreground)]">
                        Relevant Platforms
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {industry.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="inline-flex items-center rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-[var(--card)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Don't see your industry?
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Our platforms are adaptable to various operational contexts.
              Contact us to discuss how Beltra Industries can address your
              specific challenges.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[var(--accent-hover)] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
