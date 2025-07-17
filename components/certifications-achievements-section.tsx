"use client"

import type React from "react"

import { motion } from "framer-motion"
import { certificationsAchievements } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Marquee } from "@/components/magicui/marquee" // Import Marquee

interface CertCardProps {
  title: string
  platform?: string
  date?: string
  description?: string
}

const CertCard: React.FC<CertCardProps> = ({ title, platform, date, description }) => {
  return (
    <Card
      className={
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 " +
        "border-gray-950/[.1] bg-background/60 backdrop-blur-lg hover:bg-background/80 " +
        "dark:border-gray-50/[.1] dark:bg-background/60 dark:hover:bg-background/80 shadow-lg"
      }
    >
      <CardContent className="p-0">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        {platform && <p className="text-muted-foreground text-sm">Platform: {platform}</p>}
        {date && <p className="text-muted-foreground text-xs">{date}</p>}
        {description && <p className="mt-2 text-sm text-foreground/80">{description}</p>}
      </CardContent>
    </Card>
  )
}

export default function CertificationsAchievementsSection() {
  // Split certifications into two rows for marquee
  const firstRow = certificationsAchievements.slice(0, Math.ceil(certificationsAchievements.length / 2))
  const secondRow = certificationsAchievements.slice(Math.ceil(certificationsAchievements.length / 2))

  return (
    <section id="certifications" className="container mx-auto py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-foreground"
      >
        Certifications & Achievements
      </motion.h2>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((item, index) => (
            <CertCard key={index} {...item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((item, index) => (
            <CertCard key={index} {...item} />
          ))}
        </Marquee>
        {/* Gradient overlays for fading effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  )
}
