"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GripVertical, Sun, Moon } from "lucide-react";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  isMobile?: boolean;
}

function ImageComparison({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  className = "",
  isMobile = false,
}: ImageComparisonProps) {
  const aspectClass = isMobile ? "aspect-[9/19.5]" : "aspect-video";
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showDarkMode, setShowDarkMode] = useState(true);

  // Detect small screens for simplified mobile UI
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!onMouseDown) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setInset(percentage);
  };

  // Simplified toggle UI for mobile devices
  if (isSmallScreen) {
    return (
      <div className={`relative ${className}`}>
        {/* Toggle Button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setShowDarkMode(!showDarkMode)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-white text-sm font-medium transition-all hover:bg-zinc-700"
          >
            {showDarkMode ? (
              <>
                <Moon className="w-4 h-4" />
                Dark Mode
              </>
            ) : (
              <>
                <Sun className="w-4 h-4" />
                Light Mode
              </>
            )}
            <span className="text-zinc-400 ml-1">• Tap to switch</span>
          </button>
        </div>

        {/* Single Image Display */}
        <div className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl`}>
          <Image
            src={showDarkMode ? beforeImage : afterImage}
            alt={showDarkMode ? beforeAlt : afterAlt}
            width={isMobile ? 390 : 1920}
            height={isMobile ? 844 : 1080}
            className={`w-full h-full ${aspectClass} rounded-2xl border border-zinc-700 object-cover`}
          />
        </div>
      </div>
    );
  }

  // Full slider UI for desktop
  return (
    <div
      className={`relative ${aspectClass} w-full h-full overflow-hidden rounded-2xl select-none ${className}`}
      onMouseMove={onMouseMove}
      onMouseUp={() => setOnMouseDown(false)}
      onMouseLeave={() => setOnMouseDown(false)}
    >
      {/* Slider handle */}
      <div
        className="bg-white h-full w-0.5 absolute z-20 top-0 select-none"
        style={{
          left: inset + "%",
        }}
      >
        <button
          className="bg-white rounded-lg hover:scale-110 transition-all w-6 h-12 select-none -translate-y-1/2 absolute top-1/2 -ml-3 z-30 cursor-ew-resize flex justify-center items-center shadow-lg"
          onMouseDown={(e) => {
            setOnMouseDown(true);
            const rect = e.currentTarget.parentElement?.parentElement?.getBoundingClientRect();
            if (rect) {
              const x = e.clientX - rect.left;
              const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
              setInset(percentage);
            }
          }}
          onMouseUp={() => setOnMouseDown(false)}
        >
          <GripVertical className="h-4 w-4 text-zinc-600 select-none" />
        </button>
      </div>

      {/* After image (revealed by sliding) */}
      <Image
        src={afterImage}
        alt={afterAlt}
        width={isMobile ? 390 : 1920}
        height={isMobile ? 844 : 1080}
        priority
        className={`absolute left-0 top-0 z-10 w-full h-full ${aspectClass} rounded-2xl select-none border border-zinc-700`}
        style={{
          clipPath: "inset(0 0 0 " + inset + "%)",
        }}
      />

      {/* Before image (base layer) */}
      <Image
        src={beforeImage}
        alt={beforeAlt}
        width={isMobile ? 390 : 1920}
        height={isMobile ? 844 : 1080}
        priority
        className={`absolute left-0 top-0 w-full h-full ${aspectClass} rounded-2xl select-none border border-zinc-700`}
      />
    </div>
  );
}

export { ImageComparison };
