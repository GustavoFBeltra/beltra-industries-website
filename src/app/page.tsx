"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import { VisionStatement } from "@/components/ui/design-testimonial";
import { PlatformAccordion } from "@/components/ui/interactive-image-accordion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Home() {
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
      {/* Hero Section */}
      <HeroSection />

      {/* Vision */}
      <section className="py-24">
        <VisionStatement />
      </section>

      {/* Platform Accordion */}
      <PlatformAccordion />

      {/* Industries */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className={`text-lg sm:text-xl mb-4 tracking-wide ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Delivering intelligent solutions to
            </p>
            <div className="h-[100px] sm:h-[120px] flex items-center justify-center">
              <GooeyText
                texts={["Hospitality", "Retail", "Legal", "Security", "SMB", "Enterprise"]}
                morphTime={1.5}
                cooldownTime={2}
                className="w-full"
                textClassName="font-bold tracking-tight"
              />
            </div>
            <p className={`text-lg sm:text-xl mt-4 tracking-wide ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              and beyond
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Subtle label */}
            <span className={`inline-flex items-center gap-2 text-xs font-mono rounded-full px-3 py-1 mb-8 border ${
              isDark ? "text-zinc-400 border-zinc-700" : "text-zinc-800 border-black"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white/50" : "bg-zinc-900/50"}`} />
              Let&apos;s Build Together
            </span>

            {/* Main headline */}
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${isDark ? "text-white" : "text-black"}`}>
              Ready to transform
              <br />
              <span className={isDark ? "text-zinc-500" : "text-zinc-800"}>your operations?</span>
            </h2>

            {/* Subtext */}
            <p className={`text-lg max-w-xl mx-auto mb-12 leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
              Partner with us to deploy intelligent systems that deliver real results from day one.
            </p>

            {/* Interactive Button */}
            <Link href="/contact">
              <InteractiveHoverButton
                text="Get in Touch"
                className={`w-44 px-6 py-4 text-base ${
                  isDark
                    ? "border-zinc-700 bg-zinc-900 hover:border-zinc-600 text-white"
                    : "border-zinc-300 bg-white hover:border-zinc-400 text-zinc-900"
                }`}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
