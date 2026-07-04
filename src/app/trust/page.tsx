import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Scramble from "@/components/Scramble";

export const metadata: Metadata = {
  title: "Trust & Compliance",
  description:
    "Building trust through transparency, security, and responsible data practices at Beltra Industries.",
};

const principles = [
  {
    title: "U.S.-Based Company",
    body: "Beltra Industries LLC is a registered limited liability company based in the United States. We operate under U.S. law and maintain our primary operations domestically.",
  },
  {
    title: "Privacy-First Design",
    body: "Privacy is built into our platforms from the ground up, not added as an afterthought. We collect only the data necessary to provide our services and are transparent about how it's used.",
  },
  {
    title: "Secure Data Handling",
    body: "We implement industry-standard security measures to protect sensitive data. This includes encryption at rest and in transit, secure authentication, and regular security audits.",
  },
  {
    title: "No Data Resale",
    body: "We do not sell user data to third parties. Your data is used solely to provide and improve our services. This is a fundamental commitment, not a marketing promise.",
  },
  {
    title: "Compliance-Aware Architecture",
    body: "Our systems are designed with regulatory compliance in mind. While specific certifications vary by platform and use case, our architecture supports compliance with relevant standards.",
  },
  {
    title: "Transparent Operations",
    body: "We believe in clear communication about our practices. If you have questions about how we handle data or operate our platforms, we're happy to provide detailed answers.",
  },
];

const security = [
  "Encryption at rest and in transit",
  "Multi-factor authentication support",
  "Regular security assessments",
  "Secure development practices",
  "Access control and audit logging",
  "Incident response procedures",
];

const dataPractices = [
  {
    title: "Collection",
    body: "We collect only the data necessary to provide our services. Each platform has specific data requirements based on its functionality, and we're transparent about what we collect and why.",
  },
  {
    title: "Storage",
    body: "Data is stored securely using industry-standard practices. We implement appropriate retention policies and delete data when it's no longer needed for the purposes it was collected.",
  },
  {
    title: "Usage",
    body: "Your data is used solely to provide and improve our services. We don't sell data to third parties or use it for purposes beyond what's necessary for platform functionality.",
  },
  {
    title: "Your Rights",
    body: "We respect your rights regarding your data. Depending on your jurisdiction and the specific platform, you may have rights to access, correct, or delete your data. Contact us to exercise these rights.",
  },
];

export default function TrustPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <p className="tech-label hero-rise text-graphite">
          <Scramble text="Commitments" duration={700} />
        </p>
        <h1
          className="display hero-rise mt-6 max-w-4xl text-5xl sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          <Scramble text="Trust & Compliance" delay={120} />
        </h1>
        <p
          className="hero-rise mt-8 max-w-2xl text-base leading-relaxed text-graphite sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Building trust through transparency, security, and responsible data
          practices. We take our responsibilities seriously and design our
          systems accordingly.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-px border border-fog bg-fog sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              delay={Math.min(i * 50, 150)}
              className="bg-paper p-8"
            >
              <h2 className="border-t-2 border-ink pt-4 text-base font-semibold">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dark-section bg-ink py-24 text-paper sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="tech-label text-steel">Security Measures</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              Engineered in, not bolted on
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-steel">
              We implement comprehensive security measures across all our
              platforms.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="divide-y divide-hairline-dark border-y border-hairline-dark">
              {security.map((s, i) => (
                <li key={s} className="flex items-baseline gap-6 py-4">
                  <span className="font-mono text-[10px] text-steel">
                    SM-{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-paper/90">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="tech-label text-graphite">Data Practices</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            How we handle data
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {dataPractices.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <h3 className="display border-t border-ink pt-5 text-xl">
                {d.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-graphite">
                {d.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="reg-plate mt-24 border border-fog p-10 text-center sm:p-16">
          <h2 className="display text-3xl sm:text-4xl">
            Questions about our practices?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-graphite">
            We&apos;re committed to transparency. If you have questions about
            our security practices, data handling, or compliance, please reach
            out.
          </p>
          <a
            href="mailto:contact@beltraindustries.com"
            className="tech-label mt-10 inline-block border border-ink bg-ink px-7 py-4 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Contact Us
          </a>
        </Reveal>
      </section>
    </>
  );
}
