"use client";

import { useState } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

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

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setInset(percentage);
  };

  return (
    <div
      className={`relative ${aspectClass} w-full h-full overflow-hidden rounded-2xl select-none ${className}`}
      onMouseMove={onMouseMove}
      onMouseUp={() => setOnMouseDown(false)}
      onMouseLeave={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchEnd={() => setOnMouseDown(false)}
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
          onTouchStart={(e) => {
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onMouseDown={(e) => {
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onTouchEnd={() => setOnMouseDown(false)}
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
