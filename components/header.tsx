"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-zinc-950/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Hawk<span className="text-teal-400">Tech</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider hover:text-teal-400 transition-colors"
            >
              {item}
            </Link>
          ))}
          <Button className="bg-teal-500 hover:bg-teal-400 text-zinc-900 font-medium">Get in touch</Button>
        </nav>

        <button className="md:hidden text-zinc-200 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950/95 pt-20">
          <nav className="flex flex-col items-center gap-8 p-8">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg uppercase tracking-wider hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button
              className="bg-teal-500 hover:bg-teal-400 text-zinc-900 font-medium w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
