"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeSwitcherButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      className="relative w-8 h-8 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-300"
      type="button"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="1em"
        height="1em"
        fill="currentColor"
        strokeLinecap="round"
        className="w-full h-full text-primary" // Use text-primary to control color
        viewBox="0 0 32 32"
      >
        <defs>
          <clipPath id="theme-toggle__classic__cutout">
            <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
          </clipPath>
        </defs>
        <motion.g
          clipPath="url(#theme-toggle__classic__cutout)"
          animate={{ x: theme === "dark" ? -6 : 0 }} // Animate x to create moon effect
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <circle cx="16" cy="16" r="9.34" className="fill-current" /> {/* Sun body */}
          <g stroke="currentColor" strokeWidth="1.5">
            {" "}
            {/* Sun rays */}
            <path d="M16 5.5v-4" />
            <path d="M16 30.5v-4" />
            <path d="M1.5 16h4" />
            <path d="M26.5 16h4" />
            <path d="m23.4 8.6 2.8-2.8" />
            <path d="m5.7 26.3 2.9-2.9" />
            <path d="m5.8 5.8 2.8 2.8" />
            <path d="m23.4 23.4 2.9 2.9" />
          </g>
        </motion.g>
      </svg>
    </button>
  )
}
