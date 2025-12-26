"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Send, Linkedin, Twitter, Moon, Sun } from "lucide-react"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    } else {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    }
  }, [])

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  return (
    <footer className={`relative border-t backdrop-blur-sm transition-colors duration-300 ${
      isDarkMode
        ? "border-zinc-800 bg-black/30 text-white"
        : "border-zinc-300 bg-white/30 text-zinc-900"
    }`}>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Link href="/">
              <Image
                src={isDarkMode ? "/images/logo-light.png" : "/images/logo-dark.png"}
                alt="Beltra Industries"
                width={140}
                height={56}
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className={`mb-6 text-sm leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
              Building intelligent systems for real-world operations through applied AI and thoughtful engineering.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className={`pr-12 backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500"
                    : "bg-white/50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400"
                }`}
              />
              <Button
                type="submit"
                size="icon"
                className={`absolute right-1 top-1 h-8 w-8 rounded-full transition-transform hover:scale-105 ${
                  isDarkMode
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-black text-white hover:bg-zinc-800"
                }`}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className={`absolute -right-4 top-0 h-24 w-24 rounded-full blur-2xl ${isDarkMode ? "bg-white/5" : "bg-black/5"}`} />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Platforms</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/platforms#tab" className={`block transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"}`}>
                TAB Point of Sales
              </Link>
              <Link href="/platforms#yapr" className={`block transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"}`}>
                Yapr
              </Link>
              <Link href="/platforms#probono" className={`block transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"}`}>
                Probono AI
              </Link>
              <Link href="/platforms#thirdeye" className={`block transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"}`}>
                Third Eye Security
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/about" className={`block transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"}`}>
                About
              </Link>
              <Link href="/technology" className={`block transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"}`}>
                Technology
              </Link>
              <Link href="/industries" className={`block transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"}`}>
                Industries
              </Link>
              <Link href="/trust" className={`block transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"}`}>
                Trust & Compliance
              </Link>
              <Link href="/contact" className={`block transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"}`}>
                Contact
              </Link>
            </nav>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className={`rounded-full bg-transparent ${isDarkMode ? "border-zinc-700 hover:bg-zinc-800 hover:text-white" : "border-zinc-300 hover:bg-zinc-200 hover:text-black"}`}>
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className={isDarkMode ? "bg-zinc-900 border-zinc-700 text-white" : "bg-white border-zinc-300 text-zinc-900"}>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className={`rounded-full bg-transparent ${isDarkMode ? "border-zinc-700 hover:bg-zinc-800 hover:text-white" : "border-zinc-300 hover:bg-zinc-200 hover:text-black"}`}>
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className={isDarkMode ? "bg-zinc-900 border-zinc-700 text-white" : "bg-white border-zinc-300 text-zinc-900"}>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <address className={`space-y-2 text-sm not-italic mb-4 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
              <p>contact@beltraindustries.com</p>
            </address>
            <div className="flex items-center space-x-2">
              <Sun className={`h-4 w-4 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`} />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className={`h-4 w-4 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`} />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className={`mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row ${isDarkMode ? "border-zinc-800" : "border-zinc-300"}`}>
          <p className={`text-sm ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
            &copy; {new Date().getFullYear()} Beltra Industries LLC. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="#" className={`transition-colors ${isDarkMode ? "text-zinc-500 hover:text-white" : "text-zinc-500 hover:text-black"}`}>
              Privacy Policy
            </Link>
            <Link href="#" className={`transition-colors ${isDarkMode ? "text-zinc-500 hover:text-white" : "text-zinc-500 hover:text-black"}`}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
