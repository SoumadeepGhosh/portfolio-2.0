"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiNextdotjs } from "react-icons/si"
import { cn } from "@/lib/utils"

const icons = [
  { icon: FaReact, size: 40, color: "#61DAFB", initialX: -100, initialY: -100, orbitRadius: 150, orbitSpeed: 10 },
  { icon: FaNodeJs, size: 40, color: "#68A063", initialX: 100, initialY: -100, orbitRadius: 180, orbitSpeed: 12 },
  {
    icon: IoLogoJavascript,
    size: 40,
    color: "#F7DF1E",
    initialX: -100,
    initialY: 100,
    orbitRadius: 160,
    orbitSpeed: 9,
  },
  { icon: SiNextdotjs, size: 40, color: "#000000", initialX: 100, initialY: 100, orbitRadius: 190, orbitSpeed: 11 },
]

const FloatingIcons: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {icons.map((icon, index) => {
        const IconComponent = icon.icon
        return (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ x: icon.initialX, y: icon.initialY, opacity: 0, scale: 0.5 }}
            animate={{
              x: [
                icon.initialX,
                icon.orbitRadius * Math.cos(0),
                icon.orbitRadius * Math.cos(Math.PI),
                icon.orbitRadius * Math.cos(2 * Math.PI),
                icon.initialX,
              ],
              y: [
                icon.initialY,
                icon.orbitRadius * Math.sin(0),
                icon.orbitRadius * Math.sin(Math.PI),
                icon.orbitRadius * Math.sin(2 * Math.PI),
                icon.initialY,
              ],
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: icon.orbitSpeed,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: index * 0.5, // Stagger initial animation
            }}
            style={{
              color: icon.color,
              filter: "drop-shadow(0 0 5px rgba(0,0,0,0.5))", // Subtle shadow
            }}
          >
            <IconComponent size={icon.size} />
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingIcons
