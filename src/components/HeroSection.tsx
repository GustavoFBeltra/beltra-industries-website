"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
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
    <section className="relative w-full h-screen">
      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 mt-16 sm:mt-20 lg:mt-24"
          >
            <Image
              src={isDark ? "/images/logo-light.png" : "/images/logo-dark.png"}
              alt="Beltra Industries"
              width={800}
              height={320}
              className="h-80 sm:h-96 lg:h-[28rem] w-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-4xl ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            Building intelligent systems for{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
              isDark ? "from-zinc-300 to-white" : "from-zinc-600 to-black"
            }`}>
              real-world operations
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Applied AI and software platforms spanning commerce, language, legal
            access, and security.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/platforms"
              className={`inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5 ${
                isDark
                  ? "text-black bg-white hover:bg-zinc-200 shadow-white/20 hover:shadow-white/30"
                  : "text-white bg-black hover:bg-zinc-800 shadow-black/20 hover:shadow-black/30"
              }`}
            >
              Explore Our Platforms
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 ${
                isDark
                  ? "text-zinc-300 bg-white/5 border border-zinc-700 hover:bg-white/10 hover:border-zinc-600"
                  : "text-zinc-700 bg-black/5 border border-zinc-300 hover:bg-black/10 hover:border-zinc-400"
              }`}
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
        </div>
      </div>

    </section>
  );
}
