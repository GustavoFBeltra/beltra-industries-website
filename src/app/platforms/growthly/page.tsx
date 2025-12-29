"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Intelligent Lead Scoring",
    description: "AI analyzes prospect behavior to prioritize your hottest leads. Focus your team's energy on opportunities most likely to close.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Automated Outreach",
    description: "Smart sequences that adapt to prospect engagement. Personalized messaging at scale without losing the human touch.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    title: "Pipeline Management",
    description: "Visual deal tracking with AI-powered forecasting. Know exactly where every opportunity stands and what's needed to close.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Contact Intelligence",
    description: "Automatically enrich contact data from across the web. Complete profiles with social links, company info, and engagement history.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Revenue Analytics",
    description: "Track every metric that matters. Conversion rates, deal velocity, rep performance, and revenue forecasting in real-time.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Seamless Integrations",
    description: "Connect with your existing tools. Email, calendar, Slack, and hundreds of other apps work together seamlessly.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

const industries = [
  { name: "SMB", description: "Growing businesses" },
  { name: "Enterprise", description: "Large sales teams" },
  { name: "SaaS", description: "Subscription businesses" },
  { name: "Agencies", description: "Service providers" },
];

export default function GrowthlyPage() {
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
                Customer Relationship Management
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-500">
                Coming Soon
              </span>
            </div>

            {/* Platform Icon */}
            <div className={`mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl ${
              isDark ? "bg-white/10 text-white" : "bg-zinc-900/10 text-zinc-900"
            }`}>
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>

            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-black"
            }`}>
              Growth-ly
            </h1>
            <p className={`mt-4 text-xl font-medium ${isDark ? "text-zinc-400" : "text-zinc-700"}`}>
              Intelligent CRM for Modern Businesses
            </p>
            <p className={`mt-6 text-lg leading-8 ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              A next-generation customer relationship management platform powered by AI. Growth-ly helps sales teams work smarter with intelligent lead scoring, automated outreach, and predictive analytics that actually drive revenue.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base rounded-xl">
                Get Notified
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
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
              Planned Features
            </h2>
            <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Everything you need to accelerate your sales
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
              Growth-ly adapts to how your team sells
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
            Be the first to know
          </h2>
          <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
            Growth-ly is currently in development. Sign up to get early access when we launch.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base rounded-xl">
              Join the Waitlist
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
