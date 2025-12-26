const principles = [
  {
    title: "U.S.-Based Company",
    description:
      "Beltra Industries LLC is a registered limited liability company based in the United States. We operate under U.S. law and maintain our primary operations domestically.",
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
          d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    title: "Privacy-First Design",
    description:
      "Privacy is built into our platforms from the ground up, not added as an afterthought. We collect only the data necessary to provide our services and are transparent about how it's used.",
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
    title: "Secure Data Handling",
    description:
      "We implement industry-standard security measures to protect sensitive data. This includes encryption at rest and in transit, secure authentication, and regular security audits.",
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
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "No Data Resale",
    description:
      "We do not sell user data to third parties. Your data is used solely to provide and improve our services. This is a fundamental commitment, not a marketing promise.",
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
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
  },
  {
    title: "Compliance-Aware Architecture",
    description:
      "Our systems are designed with regulatory compliance in mind. While specific certifications vary by platform and use case, our architecture supports compliance with relevant standards.",
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
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Transparent Operations",
    description:
      "We believe in clear communication about our practices. If you have questions about how we handle data or operate our platforms, we're happy to provide detailed answers.",
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

const securityMeasures = [
  "Encryption at rest and in transit",
  "Multi-factor authentication support",
  "Regular security assessments",
  "Secure development practices",
  "Access control and audit logging",
  "Incident response procedures",
];

export default function TrustPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Trust & Compliance
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Building trust through transparency, security, and responsible
              data practices. We take our responsibilities seriously and design
              our systems accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  {principle.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-6">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-24 sm:py-32 bg-[var(--card)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              Security Measures
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)] text-center">
              We implement comprehensive security measures across all our platforms
            </p>

            <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {securityMeasures.map((measure) => (
                  <li
                    key={measure}
                    className="flex items-center gap-3 text-[var(--foreground)]"
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-[var(--accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {measure}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Practices */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              Data Practices
            </h2>
            <div className="mt-12 space-y-8">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="text-lg font-semibold">Collection</h3>
                <p className="mt-2 text-[var(--muted)] leading-7">
                  We collect only the data necessary to provide our services.
                  Each platform has specific data requirements based on its
                  functionality, and we're transparent about what we collect
                  and why.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="text-lg font-semibold">Storage</h3>
                <p className="mt-2 text-[var(--muted)] leading-7">
                  Data is stored securely using industry-standard practices.
                  We implement appropriate retention policies and delete data
                  when it's no longer needed for the purposes it was collected.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mt-2 text-[var(--muted)] leading-7">
                  Your data is used solely to provide and improve our services.
                  We don't sell data to third parties or use it for purposes
                  beyond what's necessary for platform functionality.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="text-lg font-semibold">Your Rights</h3>
                <p className="mt-2 text-[var(--muted)] leading-7">
                  We respect your rights regarding your data. Depending on your
                  jurisdiction and the specific platform, you may have rights
                  to access, correct, or delete your data. Contact us to
                  exercise these rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-24 sm:py-32 bg-[var(--card)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Questions about our practices?
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              We're committed to transparency. If you have questions about our
              security practices, data handling, or compliance, please reach out.
            </p>
            <div className="mt-10">
              <a
                href="mailto:contact@beltraindustries.com"
                className="rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[var(--accent-hover)] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
