"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Real-Time Object Detection",
    description: "Identify people, vehicles, and objects instantly. Advanced neural networks deliver sub-second detection with high accuracy.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Behavioral Analysis",
    description: "Understand patterns and detect suspicious activities. AI learns normal behavior to identify anomalies automatically.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Anomaly Detection",
    description: "Spot unusual events before they become incidents. Crowd formation, abandoned objects, and perimeter breaches detected instantly.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Edge Processing",
    description: "Process video on-device for instant response. Reduce bandwidth costs and latency with intelligent edge computing.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    title: "Cloud Analytics",
    description: "Deep insights from aggregated data. Historical analysis, trend detection, and comprehensive reporting dashboards.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Alert Management",
    description: "Smart notifications that matter. Customizable rules, escalation paths, and integration with existing security systems.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
];

const industries = [
  { name: "Enterprise", description: "Corporate campuses" },
  { name: "Retail", description: "Loss prevention" },
  { name: "Property", description: "Building management" },
  { name: "Public Safety", description: "Municipal security" },
];

export default function ThirdEyePage() {
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
                Security & Surveillance
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-black"
            }`}>
              Third Eye Security
            </h1>
            <p className={`mt-4 text-xl font-medium ${isDark ? "text-zinc-400" : "text-zinc-700"}`}>
              Intelligent Visual Monitoring
            </p>
            <p className={`mt-6 text-lg leading-8 ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Computer vision-powered security and monitoring systems that combine edge computing with cloud intelligence. Third Eye delivers real-time threat detection, anomaly identification, and comprehensive surveillance analytics.
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
              Next-generation security powered by computer vision
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
              Security solutions tailored to your specific environment
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
            Ready to upgrade your security?
          </h2>
          <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
            Join our pilot program and experience the future of intelligent surveillance
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
