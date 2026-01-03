"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AppShowcase, defaultTabApps } from "@/components/ui/app-showcase";

const features = [
  {
    title: "Real-Time Transactions",
    description: "Process payments instantly with sub-second response times. Support for all major payment methods including contactless, chip, and mobile wallets.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Inventory Management",
    description: "Track stock levels in real-time across all locations. Automated reorder alerts and supplier integration keep your shelves stocked.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Staff Management",
    description: "Schedule shifts, track hours, and manage permissions. Built-in time clock and performance analytics for your team.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive reporting with real-time insights. Track sales trends, peak hours, and customer behavior patterns.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Multi-Location Support",
    description: "Manage multiple stores from a single dashboard. Centralized reporting and inventory visibility across all locations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: "Offline-First Architecture",
    description: "Keep operating even when internet goes down. Automatic sync when connection is restored ensures no lost transactions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
];

const industries = [
  { name: "Hospitality", description: "Restaurants, bars, and cafes" },
  { name: "Retail", description: "Stores and boutiques" },
  { name: "Quick Service", description: "Fast food and takeaway" },
  { name: "Food Trucks", description: "Mobile vendors" },
];

export default function TABPage() {
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
                Commerce & Operations
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500">
                Active Development
              </span>
            </div>

            {/* Platform Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src={isDark ? "/images/platforms/tab/logo/dark.png" : "/images/platforms/tab/logo/light.png"}
                alt="TAB Point of Sales"
                width={400}
                height={160}
                className="h-24 w-auto"
                priority
              />
            </div>

            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-black"
            }`}>
              TAB Point of Sales
            </h1>
            <p className={`mt-4 text-xl font-medium ${isDark ? "text-zinc-400" : "text-zinc-700"}`}>
              High-Performance Commerce Platform
            </p>
            <p className={`mt-6 text-lg leading-8 ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              A comprehensive point-of-sale and operations platform built for the demanding environments of hospitality and retail. TAB delivers real-time transaction processing, inventory management, and analytics with enterprise-grade reliability.
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

      {/* App Showcase */}
      <section className={`py-24 sm:py-32 ${isDark ? "bg-zinc-900/50" : "bg-zinc-100/50"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-black"}`}>
              Complete Product Suite
            </h2>
            <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Explore our integrated applications with light and dark mode support
            </p>
          </div>
          <AppShowcase apps={defaultTabApps} />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-black"}`}>
              Platform Features
            </h2>
            <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Everything you need to run your business efficiently
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
              TAB is designed to meet the specific needs of high-volume environments
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
            Ready to modernize your operations?
          </h2>
          <p className={`mt-4 text-lg ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
            Get in touch to learn how TAB can transform your business
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
