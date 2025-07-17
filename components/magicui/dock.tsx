"use client"

import { cn } from "@/lib/utils"
import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { type PropsWithChildren, useRef } from "react"

interface DockProps extends PropsWithChildren {
  className?: string
  direction?: "top" | "bottom" | "left" | "right" | "middle"
  magnification?: number
  distance?: number
}

const Dock = ({ className, children, magnification = 60, distance = 100, ...props }: DockProps) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  const renderDock = () => {
    return (
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className={cn("mx-auto w-fit h-full flex items-end gap-2 rounded-2xl border p-2 dark:bg-black", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          // Only clone elements that are explicitly DockIcon components
          // This prevents passing mouseX to non-DockIcon children like Separator
          if (React.isValidElement(child) && (child.type as any).displayName === "DockIcon") {
            return React.cloneElement(child, {
              mouseX: mouseX,
              magnification,
              distance,
            } as any) // Cast to any to satisfy type checking for cloned props
          }
          return child // Render other children as is
        })}
      </motion.div>
    )
  }

  return renderDock()
}

interface DockIconProps extends PropsWithChildren {
  mouseX?: MotionValue // Keep optional, but it should always be provided by Dock now
  magnification?: number
  distance?: number
  className?: string
}

const DockIcon = ({ mouseX, magnification, distance, className, children }: DockIconProps) => {
  // Add displayName for identification in Dock component
  const ref = useRef<HTMLDivElement>(null)

  // Use a fallback MotionValue if mouseX is not provided (though it should be now)
  const safeMouseX = useMotionValue(Number.POSITIVE_INFINITY)

  const distanceCalc = useTransform(mouseX || safeMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distanceCalc, [-distance, 0, distance], [40, magnification, 40])
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-neutral-400/40",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export { Dock, DockIcon }
