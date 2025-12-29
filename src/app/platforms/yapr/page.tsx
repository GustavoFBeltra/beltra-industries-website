"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Real-Time Translation",
    description: "Instant translation across 100+ languages with context-aware accuracy. Perfect for live conversations and meetings.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
  {
    title: "Speech-to-Text",
    description: "Advanced voice recognition that handles accents, dialects, and background noise. Transcribe meetings and conversations effortlessly.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Language Learning",
    description: "AI-powered tutoring that adapts to your level. Practice conversations, get pronunciation feedback, and track progress.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Accessibility Tools",
    description: "Breaking barriers for the deaf and hard of hearing. Real-time captions, sign language interpretation, and audio descriptions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Context-Aware AI",
    description: "Understands idioms, cultural nuances, and domain-specific terminology. Medical, legal, and technical translations done right.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Multi-Modal Input",
    description: "Voice, text, images, and documents. Translate menus, signs, and handwritten notes with your camera.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
];

const industries = [
  { name: "Education", description: "Schools and universities" },
  { name: "Travel", description: "Tourism and hospitality" },
  { name: "Healthcare", description: "Patient communication" },
  { name: "Business", description: "Global teams" },
];

export default function YaprPage() {
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
                Language & Communication
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500">
                Active Development
              </span>
            </div>

            {/* Platform Icon */}
            <div className={`mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl ${
              isDark ? "bg-white/10 text-white" : "bg-zinc-900/10 text-zinc-900"
            }`}>
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </div>

            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-black"
            }`}>
              Yapr
            </h1>
            <p className={`mt-4 text-xl font-medium ${isDark ? "text-zinc-400" : "text-zinc-700"}`}>
              AI-Powered Language Companion
            </p>
            <p className={`mt-6 text-lg leading-8 ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Breaking down language barriers with real-time AI-powered translation and communication assistance. Yapr enables seamless cross-language interaction for learning, accessibility, and professional communication.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base rounded-xl">
                Request Access
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
              Powerful language tools for every situation
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
              Built For Your Industry
            </h2>
            <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Yapr adapts to the unique language needs of different sectors
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
            Ready to break language barriers?
          </h2>
          <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
            Get in touch to learn how Yapr can connect your world
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
