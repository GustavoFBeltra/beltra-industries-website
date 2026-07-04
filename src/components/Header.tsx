"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const navigation = [
  { name: "Platforms", href: "/platforms" },
  { name: "Technology", href: "/technology" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Trust", href: "/trust" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        open
          ? "border-fog bg-paper"
          : scrolled
            ? "border-fog bg-paper/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href="/" aria-label="Beltra Industries — home" className="flex items-center gap-3">
          <Image
            src="/images/crest-black.png"
            alt="Beltra Industries crest"
            width={100}
            height={100}
            priority
            className="h-9 w-9 object-contain dark:invert sm:h-10 sm:w-10"
          />
          <span className="tech-label text-ink">Beltra Industries</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors hover:text-ink ${
                  active ? "text-ink font-semibold" : "text-graphite"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <ThemeToggle />
          <Link
            href="/contact"
            className="tech-label border border-ink bg-ink px-5 py-3 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Get in Touch
          </Link>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        </div>
      </div>

    </header>

      {/* Mobile menu — sibling of the header so its backdrop-filter can't
          turn this fixed overlay's containing block into the header box */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-paper transition-opacity duration-300 sm:top-20 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col justify-between px-5 pb-10 pt-8"
          aria-label="Mobile"
        >
          <ul className="divide-y divide-fog border-y border-fog">
            {[{ name: "Home", href: "/" }, ...navigation].map((item, i) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group flex items-baseline justify-between py-5"
                >
                  <span className="display text-3xl">{item.name}</span>
                  <span className="tech-label text-steel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="tech-label block border border-ink bg-ink px-5 py-5 text-center text-paper"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  );
}
