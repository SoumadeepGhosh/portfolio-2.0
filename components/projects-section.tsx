"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { CardHoverEffect } from "@/components/ui/card-hover-effect"

export default function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-foreground"
      >
        Projects
      </motion.h2>
      <CardHoverEffect items={projects} />
    </section>
  )
}
