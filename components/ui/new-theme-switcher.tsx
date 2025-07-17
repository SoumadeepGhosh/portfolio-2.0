"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { motion, useSpring } from "framer-motion" // Removed useMotionValue, useRef
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  )
}

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  )
}

interface NewThemeSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

export function NewThemeSwitcher({ size = "md", className, ...props }: NewThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const thumbX = useSpring(0, {
    stiffness: 700,
    damping: 30,
  })

  useEffect(() => {
    setMounted(true)
    const thumbOffset = size === "sm" ? 18 : size === "md" ? 22 : 26 // Approximate offset for thumb to move to right
    thumbX.set(theme === "dark" ? thumbOffset : 2) // 2px padding on left
  }, [mounted, thumbX, size, theme])

  if (!mounted) return null

  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  const sizeClasses = {
    sm: "w-10 h-6",
    md: "w-12 h-7",
    lg: "w-14 h-8",
  }

  const thumbSizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  }

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  return (
    <div
      className={cn(
        "relative flex items-center rounded-full p-[2px] cursor-pointer transition-colors duration-300",
        isDark ? "bg-gray-700" : "bg-gray-200",
        sizeClasses[size],
        className,
      )}
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      tabIndex={0}
      {...props}
    >
      <motion.div
        className={cn(
          "absolute rounded-full bg-white shadow-md flex items-center justify-center",
          thumbSizeClasses[size],
        )}
        style={{ x: thumbX }} // Animate 'x' (translateX) property
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        {isDark ? (
          <MoonIcon className={cn("text-gray-700", iconSizeClasses[size])} />
        ) : (
          <SunIcon className={cn("text-yellow-500", iconSizeClasses[size])} />
        )}
      </motion.div>
      {/* Icons for visual cue in the track, but not interactive */}
      <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
        <SunIcon
          className={cn(
            "text-yellow-500 transition-opacity duration-300",
            isDark ? "opacity-0" : "opacity-100",
            iconSizeClasses[size],
          )}
        />
        <MoonIcon
          className={cn(
            "text-gray-700 transition-opacity duration-300",
            isDark ? "opacity-100" : "opacity-0",
            iconSizeClasses[size],
          )}
        />
      </div>
    </div>
  )
}
