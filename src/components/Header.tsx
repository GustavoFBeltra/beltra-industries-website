"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import NavBar, { NavItem } from "@/components/ui/navbar";

const navigation: NavItem[] = [
  { id: 1, title: "Home", url: "/" },
  {
    id: 2,
    title: "Platforms",
    url: "/platforms",
    dropdown: true,
    items: [
      { id: 21, title: "TAB Point of Sales", url: "/platforms/tab" },
      { id: 22, title: "Yapr", url: "/platforms/yapr" },
      { id: 23, title: "Probono AI", url: "/platforms/probono" },
      { id: 24, title: "Third Eye Security", url: "/platforms/thirdeye" },
      { id: 25, title: "Growth-ly", url: "/platforms/growthly" },
    ],
  },
  { id: 3, title: "Technology", url: "/technology" },
  { id: 4, title: "Industries", url: "/industries" },
  { id: 5, title: "About", url: "/about" },
  { id: 6, title: "Trust", url: "/trust" },
];

const mobileNavigation = [
  { name: "Home", href: "/" },
  { name: "Platforms", href: "/platforms" },
  { name: "Technology", href: "/technology" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Trust", href: "/trust" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300">
      {/* Main navbar container */}
      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? "mt-4 max-w-4xl"
            : "mt-0 max-w-7xl"
        }`}
      >
        <nav
          className={`transition-all duration-500 ease-out ${
            isScrolled
              ? `rounded-2xl border backdrop-blur-xl ${
                  isDark
                    ? "bg-zinc-900/80 border-zinc-800"
                    : "bg-white/80 border-zinc-200"
                }`
              : `${
                  isDark
                    ? "bg-transparent"
                    : "bg-transparent"
                }`
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "h-14 px-4" : "h-[72px] px-2 lg:px-4"
            }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src={isDark ? "/images/logo-light.png" : "/images/logo-dark.png"}
                  alt="Beltra Industries"
                  width={180}
                  height={48}
                  className={`w-auto transition-all duration-500 ${
                    isScrolled ? "h-12" : "h-16"
                  }`}
                  priority
                />
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:block">
              <NavBar list={navigation} isDark={isDark} />
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className={`btn-primary inline-flex items-center justify-center text-sm rounded-lg transition-all duration-500 ${
                  isScrolled ? "px-4 py-2" : "px-5 py-2.5"
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
                    : "text-black hover:text-black hover:bg-zinc-200"
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
            <div className={`lg:hidden py-4 border-t ${isDark ? "border-zinc-800" : "border-zinc-300"} ${isScrolled ? "px-4" : "px-2"}`}>
              <div className="flex flex-col gap-2">
                {mobileNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      isDark
                        ? "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                        : "text-black hover:text-black hover:bg-zinc-200/50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary block px-4 py-3 mt-2 text-base text-center rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
