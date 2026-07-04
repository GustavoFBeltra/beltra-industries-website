import type { Metadata } from "next";
import Scramble from "@/components/Scramble";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Beltra Industries LLC collects, uses, and protects data.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect only the information necessary to operate our website and platforms. When you contact us through our website, we collect the name, email address, and message contents you choose to provide.",
      "Our platforms each have specific data requirements based on their functionality. The data collected by a platform is described in that platform's own documentation and agreements.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "Information you submit through our contact form is used solely to respond to your inquiry. Data processed by our platforms is used solely to provide and improve those services.",
      "We do not sell personal data to third parties. We do not use your data for purposes beyond what is necessary for the functionality you requested.",
    ],
  },
  {
    title: "Data Storage & Security",
    body: [
      "Data is stored securely using industry-standard practices, including encryption at rest and in transit where applicable. We implement appropriate retention policies and delete data when it is no longer needed for the purposes it was collected.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "We use a small number of infrastructure providers (such as website hosting and email delivery) to operate this site. These providers process data only on our behalf and under their own security commitments.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on your jurisdiction, you may have rights to access, correct, or delete personal data we hold about you. To exercise these rights, contact us at contact@beltraindustries.com and we will respond promptly.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this policy as our services evolve. Material changes will be reflected on this page with an updated effective date.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about this policy or our data practices: contact@beltraindustries.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
      <p className="tech-label hero-rise text-graphite">
        <Scramble text="Legal" duration={700} />
      </p>
      <h1
        className="display hero-rise mt-6 text-4xl sm:text-6xl"
        style={{ animationDelay: "80ms" }}
      >
        <Scramble text="Privacy Policy" delay={120} />
      </h1>
      <p
        className="tech-label hero-rise mt-6 text-steel"
        style={{ animationDelay: "160ms" }}
      >
        Effective July 4, 2026 — Beltra Industries LLC
      </p>

      <div className="mt-16 space-y-12">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="border-t border-fog pt-6 text-base font-semibold">
              {s.title}
            </h2>
            {s.body.map((p, i) => (
              <p
                key={i}
                className="mt-4 text-sm leading-relaxed text-graphite"
              >
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
