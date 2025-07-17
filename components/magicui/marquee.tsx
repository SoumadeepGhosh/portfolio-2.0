"use client"

import { cn } from "@/lib/utils"
import type React from "react"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  [key: string]: any
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full overflow-hidden [--duration:30s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      <div
        className={cn("flex w-full flex-shrink-0 justify-around gap-[--gap]", {
          "animate-marquee flex-row": !vertical,
          "animate-marquee-vertical flex-col": vertical,
          "group-hover:paused": pauseOnHover,
          "animate-marquee-reverse flex-row": reverse && !vertical,
          "animate-marquee-vertical-reverse flex-col": reverse && vertical,
        })}
      >
        {children}
      </div>
      <div
        className={cn("flex w-full flex-shrink-0 justify-around gap-[--gap]", {
          "animate-marquee flex-row": !vertical,
          "animate-marquee-vertical flex-col": vertical,
          "group-hover:paused": pauseOnHover,
          "animate-marquee-reverse flex-row": reverse && !vertical,
          "animate-marquee-vertical-reverse flex-col": reverse && vertical,
        })}
        aria-hidden={true}
      >
        {children}
      </div>
    </div>
  )
}
