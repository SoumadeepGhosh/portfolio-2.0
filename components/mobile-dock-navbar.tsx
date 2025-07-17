"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
// import { ModeToggle } from "@/components/mode-toggle" // Removed ModeToggle import
import { Icons } from "@/lib/icons"
import { navLinks } from "@/lib/data"
import { buttonVariants } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function MobileDockNavbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Map navLinks to icons for the mobile dock
  const dockNavItems = navLinks.map((link) => {
    let iconComponent: React.ElementType | null = null
    switch (link.name) {
      case "Home":
        iconComponent = Icons.home
        break
      case "About":
        iconComponent = Icons.user
        break
      case "Skills":
        iconComponent = Icons.code
        break
      case "Projects":
        iconComponent = Icons.folder
        break
      case "Education":
        iconComponent = Icons.graduationCap
        break
      case "Certifications":
        iconComponent = Icons.award
        break
      case "Testimonials":
        iconComponent = Icons.messageSquare
        break
      case "Contact":
        iconComponent = Icons.mail
        break
      default:
        iconComponent = Icons.home // Fallback icon
    }
    return {
      href: link.href,
      label: link.name,
      icon: iconComponent,
    }
  })

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <TooltipProvider>
        <Dock direction="middle" className="bg-card/80 backdrop-blur-lg border border-border shadow-lg">
          {dockNavItems.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full text-foreground hover:text-primary",
                    )}
                  >
                    {item.icon && <item.icon className="size-6" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          {/* Removed ModeToggle from here */}
        </Dock>
      </TooltipProvider>
    </div>
  )
}
