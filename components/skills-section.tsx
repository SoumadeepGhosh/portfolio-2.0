"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { getIconComponent } from "@/lib/utils" // Helper to get icon component

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="container mx-auto py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-foreground"
      >
        Skills
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
      >
        {skills.map((skill, index) => {
          const IconComponent = getIconComponent(skill.icon)
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5, boxShadow: "0 0 20px rgba(0, 123, 255, 0.5)" }} // Added glow effect
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card text-card-foreground w-32 h-32 justify-center text-center"
            >
              {IconComponent && <IconComponent className="w-12 h-12 mb-2 text-primary" />}
              <p className="text-sm font-medium text-foreground">{skill.name}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
