"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Legal Information Access",
    description: "Instant access to legal information across multiple practice areas. Understand your rights without expensive consultations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Document Understanding",
    description: "Upload contracts, leases, and legal documents. Get plain-language explanations of complex terms and clauses.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Rights Guidance",
    description: "Step-by-step guidance through legal processes. Know your rights in employment, housing, consumer, and family matters.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Plain-Language Explanations",
    description: "No more legal jargon. Complex legal concepts explained in simple, understandable terms anyone can follow.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Jurisdiction-Aware",
    description: "Laws vary by location. Probono AI provides information specific to your state, country, and local jurisdiction.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Privacy-First Design",
    description: "Your legal matters stay private. End-to-end encryption and no data retention ensures complete confidentiality.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const industries = [
  { name: "Individuals", description: "Personal legal matters" },
  { name: "Non-Profits", description: "Community legal aid" },
  { name: "Small Business", description: "Business compliance" },
  { name: "Legal Aid", description: "Pro bono support" },
];

export default function ProbonoPage() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Status Badge */}
            <div className="flex justify-center gap-3 mb-6">
              <span className={`inline-flex items-center gap-2 text-xs font-mono rounded-full px-3 py-1 border ${
                isDark ? "text-zinc-400 border-zinc-700" : "text-zinc-800 border-black"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white" : "bg-zinc-900"}`} />
                Legal Technology
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-500">
                R&D
              </span>
            </div>

            {/* Platform Icon */}
            <div className={`mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl ${
              isDark ? "bg-white/10 text-white" : "bg-zinc-900/10 text-zinc-900"
            }`}>
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
            </div>

            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-black"
            }`}>
              Probono AI
            </h1>
            <p className={`mt-4 text-xl font-medium ${isDark ? "text-zinc-400" : "text-zinc-700"}`}>
              Democratizing Legal Access
            </p>
            <p className={`mt-6 text-lg leading-8 ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              An on-demand legal assistance platform that expands access to legal information and guidance. Probono AI uses advanced language models to help users understand their legal rights and navigate complex legal processes.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base rounded-xl">
                Join Waitlist
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/platforms" className={`inline-flex items-center justify-center px-8 py-4 text-base rounded-xl border ${
                isDark ? "border-zinc-700 text-white hover:bg-zinc-800" : "border-zinc-300 text-zinc-900 hover:bg-zinc-100"
              } transition-colors`}>
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                All Platforms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`py-24 sm:py-32 ${isDark ? "bg-zinc-900/50" : "bg-zinc-100/50"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-black"}`}>
              Key Features
            </h2>
            <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Making legal information accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`rounded-2xl border p-8 transition-colors ${
                  isDark
                    ? "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <div className={`inline-flex items-center justify-center rounded-xl p-3 ${
                  isDark ? "bg-white/10 text-white" : "bg-zinc-900/10 text-zinc-900"
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`mt-6 text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>
                  {feature.title}
                </h3>
                <p className={`mt-2 text-sm leading-6 ${isDark ? "text-zinc-400" : "text-zinc-700"}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-black"}`}>
              Who Benefits
            </h2>
            <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Expanding legal access for those who need it most
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href="/industries"
                className={`rounded-2xl border p-6 text-center transition-colors ${
                  isDark
                    ? "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50"
                    : "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>
                  {industry.name}
                </h3>
                <p className={`mt-1 text-sm ${isDark ? "text-zinc-500" : "text-zinc-600"}`}>
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-24 sm:py-32 ${isDark ? "bg-zinc-900/50" : "bg-zinc-100/50"}`}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-black"}`}>
            Interested in democratizing legal access?
          </h2>
          <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
            Join our research program and help shape the future of legal technology
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base rounded-xl">
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
