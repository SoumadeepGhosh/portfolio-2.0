"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks, personalData } from "@/lib/data"
import { NewThemeSwitcher } from "@/components/ui/new-theme-switcher" // Import NewThemeSwitcher

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    navLinks.forEach((link) => {
      const element = document.getElementById(link.href.substring(1))
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.href.substring(1))
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-border py-4"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="#hero" className="text-xl font-bold text-foreground">
          {personalData.name.split(" ")[0]}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-muted-foreground hover:text-foreground transition-colors duration-300
                ${activeSection === link.href.substring(1) ? "font-semibold" : ""}`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span layoutId="underline" className="absolute left-0 top-full h-[2px] w-full bg-primary" />
              )}
            </Link>
          ))}
          {/* New Theme Switcher Button for Desktop */}
          <NewThemeSwitcher size="md" />
        </div>

        {/* Mobile Top Bar Elements */}
        <div className="md:hidden flex items-center space-x-2">
          <NewThemeSwitcher size="sm" /> {/* Mobile theme switcher at the top */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMobileMenuOpen ? "x" : "menu"}
                    initial={{ rotate: isMobileMenuOpen ? -90 : 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: isMobileMenuOpen ? 90 : -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background">
              <nav className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}
