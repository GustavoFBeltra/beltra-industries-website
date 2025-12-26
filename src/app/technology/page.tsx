const technologies = [
  {
    title: "Applied Artificial Intelligence",
    description:
      "We build AI systems that solve real problems in production environments.",
    items: [
      {
        name: "Natural Language Processing",
        description:
          "Advanced language understanding and generation for human-computer interaction.",
      },
      {
        name: "Computer Vision",
        description:
          "Visual recognition and analysis for security, monitoring, and automation.",
      },
      {
        name: "Decision Support Systems",
        description:
          "AI-powered insights that help humans make better decisions faster.",
      },
      {
        name: "Human-in-the-Loop AI",
        description:
          "Collaborative systems that combine AI capabilities with human judgment.",
      },
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    title: "Real-Time Systems",
    description:
      "Performance-critical architectures for instant responsiveness.",
    items: [
      {
        name: "POS & Transaction Systems",
        description:
          "Sub-second transaction processing for commerce applications.",
      },
      {
        name: "Language Translation",
        description: "Real-time multilingual communication with minimal latency.",
      },
      {
        name: "Monitoring & Alerting",
        description:
          "Instant detection and notification for security and operational events.",
      },
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Security & Privacy by Design",
    description: "Security is foundational, not an afterthought.",
    items: [
      {
        name: "Data Minimization",
        description:
          "We collect only what's necessary and retain data responsibly.",
      },
      {
        name: "Secure Infrastructure",
        description:
          "Enterprise-grade security measures across all systems.",
      },
      {
        name: "Compliance-Aware Development",
        description:
          "Building with regulatory requirements in mind from day one.",
      },
    ],
    icon: (
      <svg
        className="h-8 w-8"
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
    title: "Edge & Cloud Computing",
    description:
      "Hybrid architectures that optimize for performance and scale.",
    items: [
      {
        name: "On-Device Processing",
        description:
          "Local computation for privacy, speed, and offline capability.",
      },
      {
        name: "Hybrid Edge/Cloud",
        description:
          "Intelligent workload distribution between edge and cloud.",
      },
      {
        name: "Scalable Cloud Orchestration",
        description:
          "Auto-scaling infrastructure that grows with demand.",
      },
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
];

export default function TechnologyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Technology & R&D
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Our technology stack is purpose-built for production environments.
              We combine cutting-edge AI with battle-tested infrastructure to
              deliver reliable, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {technologies.map((tech, index) => (
              <div
                key={tech.title}
                className={`flex flex-col lg:flex-row gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/3">
                  <div className="sticky top-24">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]">
                      {tech.icon}
                    </div>
                    <h2 className="mt-6 text-2xl font-bold">{tech.title}</h2>
                    <p className="mt-4 text-[var(--muted)] leading-7">
                      {tech.description}
                    </p>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {tech.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--accent)]/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="mt-2 text-sm text-[var(--muted)] leading-6">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Philosophy */}
      <section className="py-24 sm:py-32 bg-[var(--card)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              R&D Philosophy
            </h2>
            <div className="mt-12 space-y-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Rapid Prototyping</h3>
                  <p className="mt-2 text-[var(--muted)] leading-7">
                    We move quickly from concept to prototype, testing ideas in
                    realistic conditions before committing to full development.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Real-World Validation</h3>
                  <p className="mt-2 text-[var(--muted)] leading-7">
                    Every system is tested in production-like environments. We
                    believe that real users and real data are the ultimate validators.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Disciplined Scaling</h3>
                  <p className="mt-2 text-[var(--muted)] leading-7">
                    We scale only what works. Premature optimization is avoided
                    in favor of proven architectures that can grow with demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
