"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const SpotlightBackground: React.FC<{ className?: string }> = ({ className }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const getSpotColors = () => {
    if (theme === "dark") {
      return [
        {
          id: 1,
          x: "20%",
          y: "20%",
          size: 400,
          color: "rgba(50, 50, 150, 0.1)", // Darker Blue
          animation: {
            x: ["20%", "80%", "20%"],
            y: ["20%", "80%", "20%"],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          },
          transition: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        },
        {
          id: 2,
          x: "80%",
          y: "30%",
          size: 350,
          color: "rgba(150, 50, 150, 0.1)", // Darker Purple
          animation: {
            x: ["80%", "10%", "80%"],
            y: ["30%", "70%", "30%"],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.25, 0.1],
          },
          transition: { duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
        },
        {
          id: 3,
          x: "50%",
          y: "90%",
          size: 500,
          color: "rgba(100, 150, 150, 0.1)", // Darker Teal
          animation: {
            x: ["50%", "20%", "50%"],
            y: ["90%", "10%", "90%"],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.35, 0.1],
          },
          transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 },
        },
      ]
    } else {
      // Light mode colors
      return [
        {
          id: 1,
          x: "20%",
          y: "20%",
          size: 400,
          color: "rgba(100, 100, 255, 0.1)", // Blue
          animation: {
            x: ["20%", "80%", "20%"],
            y: ["20%", "80%", "20%"],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          },
          transition: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        },
        {
          id: 2,
          x: "80%",
          y: "30%",
          size: 350,
          color: "rgba(200, 100, 255, 0.1)", // Purple
          animation: {
            x: ["80%", "10%", "80%"],
            y: ["30%", "70%", "30%"],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.25, 0.1],
          },
          transition: { duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
        },
        {
          id: 3,
          x: "50%",
          y: "90%",
          size: 500,
          color: "rgba(150, 200, 255, 0.1)", // Light Blue
          animation: {
            x: ["50%", "20%", "50%"],
            y: ["90%", "10%", "90%"],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.35, 0.1],
          },
          transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 },
        },
      ]
    }
  }

  const spots = getSpotColors()

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {spots.map((spot) => (
        <motion.div
          key={spot.id}
          className="absolute rounded-full filter blur-3xl"
          style={{
            width: spot.size,
            height: spot.size,
            background: spot.color,
            left: spot.x,
            top: spot.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={spot.animation}
          transition={spot.transition}
        />
      ))}
    </div>
  )
}

export default SpotlightBackground
