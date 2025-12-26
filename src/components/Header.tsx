"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Platforms", href: "/platforms" },
  { name: "Technology", href: "/technology" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Trust", href: "/trust" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Hide header when scrolling down (past 100px)
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      {/* Hover trigger zone at top of screen */}
      <div
        className="fixed top-0 left-0 right-0 h-4 z-50"
        onMouseEnter={() => setIsHovered(true)}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          isDark
            ? "bg-[#0a0a0a]/80 border-b border-zinc-800/50"
            : "bg-white/80 border-b border-zinc-300/50"
        } ${
          isVisible || isHovered ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={isDark ? "/images/logo-light.png" : "/images/logo-dark.png"}
                alt="Beltra Industries"
                width={180}
                height={48}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isDark
                  ? "text-black bg-white hover:bg-zinc-200"
                  : "text-white bg-black hover:bg-zinc-800"
              }`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors ${
                isDark
                  ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  : "text-zinc-600 hover:text-black hover:bg-zinc-200"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${isDark ? "border-zinc-800" : "border-zinc-300"}`}>
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isDark
                      ? "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                      : "text-zinc-600 hover:text-black hover:bg-zinc-200/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`block px-4 py-3 mt-2 text-base font-semibold text-center rounded-lg transition-colors ${
                  isDark
                    ? "text-black bg-white hover:bg-zinc-200"
                    : "text-white bg-black hover:bg-zinc-800"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
