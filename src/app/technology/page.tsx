import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Scramble from "@/components/Scramble";

export const metadata: Metadata = {
  title: "Technology & R&D",
  description:
    "Purpose-built technology for production environments — applied AI, real-time systems, security by design, and edge/cloud computing.",
};

const areas = [
  {
    label: "T-01",
    title: "Applied Artificial Intelligence",
    description:
      "We build AI systems that solve real problems in production environments.",
    items: [
      {
        name: "Natural Language Processing",
        note: "Advanced language understanding and generation for human-computer interaction.",
      },
      {
        name: "Computer Vision",
        note: "Visual recognition and analysis for security, monitoring, and automation.",
      },
      {
        name: "Decision Support Systems",
        note: "AI-powered insights that help humans make better decisions faster.",
      },
      {
        name: "Human-in-the-Loop AI",
        note: "Collaborative systems that combine AI capabilities with human judgment.",
      },
    ],
  },
  {
    label: "T-02",
    title: "Real-Time Systems",
    description: "Performance-critical architectures for instant responsiveness.",
    items: [
      {
        name: "POS & Transaction Systems",
        note: "Sub-second transaction processing for commerce applications.",
      },
      {
        name: "Language Translation",
        note: "Real-time multilingual communication with minimal latency.",
      },
      {
        name: "Monitoring & Alerting",
        note: "Instant detection and notification for security and operational events.",
      },
    ],
  },
  {
    label: "T-03",
    title: "Security & Privacy by Design",
    description: "Security is foundational, not an afterthought.",
    items: [
      {
        name: "Data Minimization",
        note: "We collect only what's necessary and retain data responsibly.",
      },
      {
        name: "Secure Infrastructure",
        note: "Enterprise-grade security measures across all systems.",
      },
      {
        name: "Compliance-Aware Development",
        note: "Building with regulatory requirements in mind from day one.",
      },
    ],
  },
  {
    label: "T-04",
    title: "Edge & Cloud Computing",
    description: "Hybrid architectures that optimize for performance and scale.",
    items: [
      {
        name: "On-Device Processing",
        note: "Local computation for privacy, speed, and offline capability.",
      },
      {
        name: "Hybrid Edge/Cloud",
        note: "Intelligent workload distribution between edge and cloud.",
      },
      {
        name: "Scalable Cloud Orchestration",
        note: "Auto-scaling infrastructure that grows with demand.",
      },
    ],
  },
];

const philosophy = [
  {
    step: "01",
    title: "Rapid Prototyping",
    body: "We move quickly from concept to prototype, testing ideas in realistic conditions before committing to full development.",
  },
  {
    step: "02",
    title: "Real-World Validation",
    body: "Every system is tested in production-like environments. We believe that real users and real data are the ultimate validators.",
  },
  {
    step: "03",
    title: "Disciplined Scaling",
    body: "We scale only what works. Premature optimization is avoided in favor of proven architectures that can grow with demand.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <p className="tech-label hero-rise text-graphite">
          <Scramble text="Engineering" duration={700} />
        </p>
        <h1
          className="display hero-rise mt-6 max-w-4xl text-5xl sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          <Scramble text="Technology & R&D" delay={120} />
        </h1>
        <p
          className="hero-rise mt-8 max-w-2xl text-base leading-relaxed text-graphite sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Our technology stack is purpose-built for production environments. We
          combine cutting-edge AI with battle-tested infrastructure to deliver
          reliable, scalable solutions.
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-px border-y border-fog px-0 pb-0 sm:px-8">
        {areas.map((area, i) => (
          <Reveal
            key={area.label}
            delay={Math.min(i * 40, 120)}
            className="grid gap-8 border-b border-fog px-5 py-14 last:border-b-0 sm:px-0 lg:grid-cols-12"
          >
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] text-steel">{area.label}</p>
              <h2 className="display mt-4 max-w-sm text-2xl sm:text-3xl">
                {area.title}
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-graphite">
                {area.description}
              </p>
            </div>
            <div className="lg:col-span-7">
              <dl className="grid gap-6 sm:grid-cols-2">
                {area.items.map((item) => (
                  <div key={item.name} className="border-t border-fog pt-4">
                    <dt className="text-sm font-semibold">{item.name}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-graphite">
                      {item.note}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </section>

      {/* R&D philosophy — a real sequence, so numbered steps carry meaning */}
      <section className="dark-section bg-ink py-24 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="tech-label text-steel">R&D Philosophy</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Concept to production
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-hairline-dark bg-hairline-dark md:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.step} delay={i * 80} className="bg-ink p-8 sm:p-10">
                <p className="font-mono text-xs text-steel">STEP {p.step}</p>
                <h3 className="display mt-6 text-xl text-paper">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-steel">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
