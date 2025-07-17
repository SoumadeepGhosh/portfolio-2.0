"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const symbols = [
  { char: "{", x: "10%", y: "20%", delay: 0.5, duration: 3 },
  { char: "}", x: "90%", y: "80%", delay: 1, duration: 3.5 },
  { char: "[", x: "20%", y: "70%", delay: 1.5, duration: 4 },
  { char: "]", x: "80%", y: "30%", delay: 2, duration: 4.5 },
  { char: "(", x: "40%", y: "10%", delay: 2.5, duration: 3 },
  { char: ")", x: "60%", y: "90%", delay: 3, duration: 3.5 },
  { char: ";", x: "5%", y: "50%", delay: 3.5, duration: 4 },
  { char: "<", x: "95%", y: "50%", delay: 4, duration: 4.5 },
  { char: "/>", x: "30%", y: "40%", delay: 0.8, duration: 3.2 },
  { char: "=", x: "70%", y: "60%", delay: 1.2, duration: 3.8 },
]

const AnimatedSymbols: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("relative w-full h-full pointer-events-none", className)}>
      {symbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl font-bold text-code-symbol opacity-0"
          style={{ left: symbol.x, top: symbol.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.1, 0.2, 0.1, 0], scale: [0.5, 1, 1.2, 1, 0.5] }}
          transition={{
            duration: symbol.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: symbol.delay,
          }}
        >
          {symbol.char}
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedSymbols
