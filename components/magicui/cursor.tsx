"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CursorProps {
  className?: string
}

const Cursor: React.FC<CursorProps> = ({ className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className={`fixed z-[9999] pointer-events-none rounded-full bg-primary opacity-70 mix-blend-difference ${className}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  )
}

export default Cursor
