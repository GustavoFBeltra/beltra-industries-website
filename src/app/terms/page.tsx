import type { Metadata } from "next";
import Scramble from "@/components/Scramble";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Beltra Industries website.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing beltraindustries.com, you agree to these terms. If you do not agree, please do not use the site. Individual Beltra Industries platforms are governed by their own agreements, which take precedence for those services.",
    ],
  },
  {
    title: "Use of the Site",
    body: [
      "You may use this site for lawful purposes only. You agree not to attempt to disrupt the site's operation, probe or breach its security measures, or use automated systems to scrape content beyond what is permitted in our robots.txt.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on this site — including the Beltra Industries name, crest, logos, text, images, and design — is the property of Beltra Industries LLC and protected by applicable intellectual property law. You may not reproduce or use it without prior written permission.",
    ],
  },
  {
    title: "Platform Availability",
    body: [
      "Platforms described on this site may be in active development, research, or pre-release stages. Descriptions, features, and availability are subject to change without notice and do not constitute a commitment to deliver any functionality.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "This site is provided \"as is\" without warranties of any kind, express or implied. Beltra Industries LLC does not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Beltra Industries LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These terms are governed by the laws of the United States and the state in which Beltra Industries LLC is registered, without regard to conflict-of-law principles.",
    ],
  },
  {
    title: "Contact",
    body: ["Questions about these terms: contact@beltraindustries.com."],
  },
];

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
      <p className="tech-label hero-rise text-graphite">
        <Scramble text="Legal" duration={700} />
      </p>
      <h1
        className="display hero-rise mt-6 text-4xl sm:text-6xl"
        style={{ animationDelay: "80ms" }}
      >
        <Scramble text="Terms of Service" delay={120} />
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
