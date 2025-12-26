import Link from "next/link";

const platforms = [
  {
    id: "tab",
    name: "TAB Point of Sales",
    tagline: "High-Performance Commerce Platform",
    description:
      "A comprehensive point-of-sale and operations platform built for the demanding environments of hospitality and retail. TAB delivers real-time transaction processing, inventory management, and analytics with enterprise-grade reliability.",
    focusArea: "Commerce & Operations",
    status: "Active Development",
    statusColor: "bg-yellow-500/10 text-yellow-500",
    features: [
      "Real-time transaction processing",
      "Inventory management",
      "Staff and shift management",
      "Analytics and reporting",
      "Multi-location support",
      "Offline-first architecture",
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
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    id: "yapr",
    name: "Yapr",
    tagline: "AI-Powered Language Companion",
    description:
      "Breaking down language barriers with real-time AI-powered translation and communication assistance. Yapr enables seamless cross-language interaction for learning, accessibility, and professional communication.",
    focusArea: "Language & Communication",
    status: "Active Development",
    statusColor: "bg-yellow-500/10 text-yellow-500",
    features: [
      "Real-time translation",
      "Speech-to-text processing",
      "Language learning assistance",
      "Accessibility features",
      "Context-aware translations",
      "Multi-modal input support",
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
          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
        />
      </svg>
    ),
  },
  {
    id: "probono",
    name: "Probono AI",
    tagline: "Democratizing Legal Access",
    description:
      "An on-demand legal assistance platform that expands access to legal information and guidance. Probono AI uses advanced language models to help users understand their legal rights and navigate complex legal processes.",
    focusArea: "Legal Technology",
    status: "R&D",
    statusColor: "bg-purple-500/10 text-purple-500",
    features: [
      "Legal information access",
      "Document understanding",
      "Rights and process guidance",
      "Plain-language explanations",
      "Jurisdiction-aware responses",
      "Privacy-first design",
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
    id: "thirdeye",
    name: "Third Eye Security",
    tagline: "Intelligent Visual Monitoring",
    description:
      "Computer vision-powered security and monitoring systems that combine edge computing with cloud intelligence. Third Eye delivers real-time threat detection, anomaly identification, and comprehensive surveillance analytics.",
    focusArea: "Security & Surveillance",
    status: "R&D",
    statusColor: "bg-purple-500/10 text-purple-500",
    features: [
      "Real-time object detection",
      "Behavioral analysis",
      "Anomaly detection",
      "Edge processing",
      "Cloud analytics",
      "Alert management",
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
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function PlatformsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Platforms
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A centralized hub showcasing all Beltra Industries products.
              Each platform is built with applied AI, designed for real-world
              deployment, and focused on solving operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {platforms.map((platform, index) => (
              <div
                key={platform.id}
                id={platform.id}
                className={`scroll-mt-24 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 lg:p-12 ${
                  index % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                  <div className="flex-shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]">
                      {platform.icon}
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 flex-1">
                    <div className="flex flex-wrap items-center gap-4">
                      <h2 className="text-2xl font-bold">{platform.name}</h2>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${platform.statusColor}`}
                      >
                        {platform.status}
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-medium text-[var(--accent)]">
                      {platform.tagline}
                    </p>

                    <p className="mt-4 text-[var(--muted)] leading-7">
                      {platform.description}
                    </p>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-[var(--foreground)]">
                        Focus Area
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {platform.focusArea}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-[var(--foreground)]">
                        Key Features
                      </h3>
                      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {platform.features.map((feature) => (
                          <li
                            key={feature}
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
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
                      >
                        Request Access
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 sm:py-32 bg-[var(--card)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Additional platforms are currently in research and development.
              Stay tuned for announcements on new solutions designed to solve
              real-world operational challenges.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--background)] transition-colors"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
