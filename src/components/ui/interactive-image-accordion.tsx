"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const accordionItems = [
  {
    id: 1,
    title: 'TAB Point of Sales',
    description: 'High-performance POS for hospitality and retail',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    href: '/platforms/tab',
  },
  {
    id: 2,
    title: 'Yapr',
    description: 'AI-powered language companion',
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop',
    href: '/platforms/yapr',
  },
  {
    id: 3,
    title: 'Probono AI',
    description: 'On-demand legal assistance platform',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    href: '/platforms/probono',
  },
  {
    id: 4,
    title: 'Third Eye Security',
    description: 'Computer vision-powered security',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
    href: '/platforms/thirdeye',
  },
  {
    id: 5,
    title: 'Growth-ly',
    description: 'Intelligent CRM for modern businesses',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    href: '/platforms/growthly',
    comingSoon: true,
  },
];

interface AccordionItemProps {
  item: typeof accordionItems[0];
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <Link
      href={item.href}
      className={`
        relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isActive ? 'w-full md:w-[350px]' : 'w-full md:w-[70px]'}
        group
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Glow effect on active */}
      <div className={`
        absolute inset-0 transition-opacity duration-500
        ${isActive ? 'opacity-100' : 'opacity-0'}
        bg-gradient-to-t from-white/10 to-transparent
      `} />

      {/* Coming Soon Badge */}
      {'comingSoon' in item && item.comingSoon && (
        <div className={`
          absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
          bg-white/10 backdrop-blur-sm border border-white/20 text-white
          transition-opacity duration-300
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}>
          Coming Soon
        </div>
      )}

      {/* Caption Text */}
      <div
        className={`
          absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${
            isActive
              ? 'bottom-6 left-6 right-6'
              : 'bottom-24 left-1/2 -translate-x-1/2'
          }
        `}
      >
        <span
          className={`
            block text-white font-semibold whitespace-nowrap
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isActive ? 'text-xl rotate-0' : 'text-base rotate-90 origin-center'}
          `}
        >
          {item.title}
        </span>

        {/* Description - only visible when active */}
        <p className={`
          text-sm text-zinc-300 mt-2 transition-all duration-300
          ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden md:block'}
        `}>
          {item.description}
        </p>
      </div>

      {/* Arrow indicator when active */}
      <div className={`
        absolute bottom-6 right-6 w-10 h-10 rounded-full
        bg-white/10 backdrop-blur-sm border border-white/20
        flex items-center justify-center
        transition-all duration-300
        ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
      `}>
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
};

export function PlatformAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Side: Text Content */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <span className={`inline-flex items-center gap-2 text-xs font-mono rounded-full px-3 py-1 mb-6 border ${
              isDark ? "text-zinc-400 border-zinc-700" : "text-zinc-800 border-black"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white" : "bg-zinc-900"}`} />
              Our Platforms
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold leading-tight tracking-tight ${
              isDark ? "text-white" : "text-black"
            }`}>
              Intelligent Systems for Every Industry
            </h2>
            <p className={`mt-6 text-lg max-w-xl mx-auto lg:mx-0 ${
              isDark ? "text-zinc-400" : "text-zinc-800"
            }`}>
              Five platforms powered by applied AI, solving real problems in commerce, language, legal access, security, and growth.
            </p>
            <div className="mt-8">
              <Link
                href="/platforms"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base rounded-xl"
              >
                Explore All Platforms
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-3/5">
            {/* Mobile: Stack vertically, Desktop: Horizontal accordion */}
            <div className="hidden md:flex flex-row items-center justify-center gap-3 p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>

            {/* Mobile fallback: Grid layout */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {accordionItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="relative h-48 rounded-xl overflow-hidden group"
                >
                  {'comingSoon' in item && item.comingSoon && (
                    <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                      Coming Soon
                    </div>
                  )}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white font-semibold text-sm">{item.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
