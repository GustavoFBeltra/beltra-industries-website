"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

export type NavItem = {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: NavItem[];
};

type NavBarProps = {
  list: NavItem[];
  isDark?: boolean;
};

const NavBar = ({ list, isDark = true }: NavBarProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <MotionConfig transition={{ bounce: 0, type: "tween", duration: 0.2 }}>
      <nav className="relative">
        <ul className="flex items-center">
          {list?.map((item) => {
            return (
              <li key={item.id} className="relative">
                <Link
                  className={`
                    relative flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all
                    ${isDark
                      ? "text-zinc-400 hover:text-white hover:bg-white/5"
                      : "text-zinc-600 hover:text-black hover:bg-black/5"
                    }
                    ${hovered === item?.id
                      ? isDark ? "text-white bg-white/5" : "text-black bg-black/5"
                      : ""
                    }
                  `}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  href={item?.url}
                >
                  {item?.title}
                  {item?.dropdown && (
                    <svg
                      className={`ml-1 w-3 h-3 transition-transform ${hovered === item.id ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {hovered === item?.id && !item?.dropdown && (
                  <motion.div
                    layout
                    layoutId="nav-underline"
                    className={`absolute bottom-0 left-2 right-2 h-0.5 ${isDark ? "bg-white" : "bg-black"}`}
                  />
                )}
                {item?.dropdown && hovered === item?.id && (
                  <div
                    className="absolute left-0 top-full pt-2"
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className={`flex w-56 flex-col rounded-xl border p-2 backdrop-blur-xl ${
                        isDark
                          ? "bg-zinc-900/90 border-zinc-800"
                          : "bg-white/90 border-zinc-200"
                      }`}
                      layoutId="nav-underline"
                    >
                      {item?.items?.map((nav) => {
                        return (
                          <Link
                            key={`link-${nav?.id}`}
                            href={nav?.url}
                            className={`w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                              isDark
                                ? "text-zinc-400 hover:text-white hover:bg-white/10"
                                : "text-zinc-600 hover:text-black hover:bg-black/5"
                            }`}
                          >
                            {nav?.title}
                          </Link>
                        );
                      })}
                    </motion.div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </MotionConfig>
  );
};

export default NavBar;
