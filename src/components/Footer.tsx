import Link from "next/link";
import Image from "next/image";
import { platforms } from "@/lib/platforms";

const company = [
  { name: "About", href: "/about" },
  { name: "Technology", href: "/technology" },
  { name: "Industries", href: "/industries" },
  { name: "Trust & Compliance", href: "/trust" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="dark-section border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/images/crest-white.png"
              alt="Beltra Industries crest"
              width={100}
              height={100}
              className="h-16 w-16 object-contain dark:invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
              Building intelligent systems for real-world operations through
              applied AI and thoughtful engineering.
            </p>
            <a
              href="mailto:contact@beltraindustries.com"
              className="tech-label mt-8 inline-block border-b border-steel pb-1 text-paper transition-colors hover:border-paper"
            >
              contact@beltraindustries.com
            </a>
          </div>

          <div className="lg:col-span-4">
            <h3 className="tech-label text-steel">Platforms</h3>
            <ul className="mt-5 space-y-3">
              {platforms.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/platforms/${p.slug}`}
                    className="group flex items-baseline gap-3 text-sm text-paper/80 transition-colors hover:text-paper"
                  >
                    <span className="font-mono text-[10px] text-steel">
                      {p.part}
                    </span>
                    {p.name}
                    {p.status === "Coming Soon" && (
                      <span className="tech-label text-[9px] text-steel">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="tech-label text-steel">Company</h3>
            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/80 transition-colors hover:text-paper"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Wordmark echo */}
      <div className="overflow-hidden border-t border-hairline-dark" aria-hidden="true">
        <p className="display-wide select-none whitespace-nowrap text-center text-[17vw] leading-none text-paper/[0.06]">
          BELTRA
        </p>
      </div>

      <div className="border-t border-hairline-dark">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-[10px] tracking-widest text-steel">
            © {new Date().getFullYear()} BELTRA INDUSTRIES LLC. ALL RIGHTS
            RESERVED.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-mono text-[10px] tracking-widest text-steel transition-colors hover:text-paper"
            >
              PRIVACY
            </Link>
            <Link
              href="/terms"
              className="font-mono text-[10px] tracking-widest text-steel transition-colors hover:text-paper"
            >
              TERMS
            </Link>
            <span className="hidden font-mono text-[10px] tracking-widest text-steel sm:inline">
              EST. U.S.A. — BUILT FOR PRODUCTION
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
