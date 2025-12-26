"use client";

import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";
import { useEffect, useState } from "react";

export default function FixedBackground() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initial check
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    // Watch for class changes on html element
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-0 w-full h-full z-0 pointer-events-none transition-colors duration-300 ${
        isDark ? "bg-[#0a0a0a]" : "bg-[#f5f5f5]"
      }`}
    >
      <EtheralShadow
        color={isDark ? "rgba(128, 128, 128, 1)" : "rgba(60, 60, 60, 1)"}
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
      />
    </div>
  );
}
