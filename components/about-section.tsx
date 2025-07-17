"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { profileSummary } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-foreground"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05, rotate: 2 }} // Added hover animation
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-lg overflow-hidden
          shadow-2xl dark:shadow-lg
          before:content-[''] before:absolute before:inset-0 before:rounded-lg before:p-[4px] before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-pink-500 before:z-0
          after:content-[''] after:absolute after:inset-0 after:rounded-lg after:p-[4px] after:bg-gradient-to-br after:from-blue-500 after:via-purple-500 after:to-pink-500 after:z-0 after:blur-2xl after:opacity-70"
        >
          <Image
            src="/profile-image.png" // Using the provided image
            alt="Soumadeep Ghosh Profile"
            width={320}
            height={320}
            className="relative z-10 w-full h-full object-cover rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1"
        >
          <Card className="p-6 bg-card/80 backdrop-blur-md shadow-lg glassmorphism-border text-card-foreground">
            <CardContent className="p-0 text-lg leading-relaxed">
              <p>{profileSummary}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
