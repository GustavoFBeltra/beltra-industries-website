"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const visionStatements = [
  {
    statement: "AI should solve problems, not create demos.",
    principle: "Applied Intelligence",
    description: "Every system we build ships to production.",
  },
  {
    statement: "Production-ready is the only ready.",
    principle: "No Prototypes",
    description: "We don't build showcases. We build solutions.",
  },
  {
    statement: "Security isn't a feature. It's the foundation.",
    principle: "Secure by Design",
    description: "Trust is engineered from the ground up.",
  },
  {
    statement: "Real-time systems for real-world impact.",
    principle: "Instant Response",
    description: "Performance-critical when it matters most.",
  },
]

export function VisionStatement() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDark, setIsDark] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check theme
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % visionStatements.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + visionStatements.length) % visionStatements.length)

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = visionStatements[activeIndex]

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div ref={containerRef} className="relative w-full max-w-5xl px-4" onMouseMove={handleMouseMove}>
        {/* Oversized index number - positioned to bleed off left edge */}
        <motion.div
          className={`absolute -left-8 top-1/2 -translate-y-1/2 text-[28rem] font-bold select-none pointer-events-none leading-none tracking-tighter hidden lg:block ${
            isDark ? "text-white/[0.03]" : "text-black/[0.15]"
          }`}
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main content - asymmetric layout */}
        <div className="relative flex">
          {/* Left column - vertical text */}
          <div className={`hidden md:flex flex-col items-center justify-center pr-16 border-r ${
            isDark ? "border-zinc-700/50" : "border-zinc-400/50"
          }`}>
            <motion.span
              className={`text-xs font-mono tracking-widest uppercase ${
                isDark ? "text-zinc-400" : "text-zinc-800"
              }`}
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Our Vision
            </motion.span>

            {/* Vertical progress line */}
            <div className={`relative h-32 w-px mt-8 ${isDark ? "bg-zinc-700/50" : "bg-zinc-400/50"}`}>
              <motion.div
                className={`absolute top-0 left-0 w-full origin-top ${isDark ? "bg-white" : "bg-zinc-900"}`}
                animate={{
                  height: `${((activeIndex + 1) / visionStatements.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Center - main content */}
          <div className="flex-1 md:pl-16 py-12">
            {/* Principle badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <span className={`inline-flex items-center gap-2 text-xs font-mono rounded-full px-3 py-1 ${
                  isDark ? "text-zinc-400 border-zinc-700" : "text-zinc-800 border-black"
                } border`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white" : "bg-zinc-900"}`} />
                  {current.principle}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Statement with word reveal */}
            <div className="relative mb-12 min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className={`text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] tracking-tight ${
                    isDark ? "text-white" : "text-black"
                  }`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.statement.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.3em]"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Description row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  {/* Animated line before description */}
                  <motion.div
                    className={`w-8 h-px ${isDark ? "bg-white" : "bg-zinc-900"}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  <p className={`text-base ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>{current.description}</p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={goPrev}
                  className={`btn-icon group relative w-12 h-12 rounded-full border backdrop-blur-sm flex items-center justify-center overflow-hidden ${
                    isDark
                      ? "border-zinc-700/50 bg-white/5 hover:border-white/30 hover:bg-white/10"
                      : "border-zinc-400/50 bg-zinc-900/5 hover:border-zinc-500/50 hover:bg-zinc-900/10"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`relative z-10 transition-colors ${isDark ? "text-white" : "text-zinc-900"}`}
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={goNext}
                  className={`btn-icon group relative w-12 h-12 rounded-full border backdrop-blur-sm flex items-center justify-center overflow-hidden ${
                    isDark
                      ? "border-zinc-700/50 bg-white/5 hover:border-white/30 hover:bg-white/10"
                      : "border-zinc-400/50 bg-zinc-900/5 hover:border-zinc-500/50 hover:bg-zinc-900/10"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`relative z-10 transition-colors ${isDark ? "text-white" : "text-zinc-900"}`}
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker - subtle repeating principles */}
        <div className={`absolute -bottom-20 left-0 right-0 overflow-hidden pointer-events-none hidden lg:block ${isDark ? "opacity-[0.08]" : "opacity-[0.15]"}`}>
          <motion.div
            className={`flex whitespace-nowrap text-6xl font-bold tracking-tight ${isDark ? "text-white" : "text-black"}`}
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">
                {visionStatements.map((v) => v.principle).join(" • ")} •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
