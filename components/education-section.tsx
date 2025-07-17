"use client"

import { motion } from "framer-motion"
import { education } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export default function EducationSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="education" className="container mx-auto py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-foreground"
      >
        Education
      </motion.h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full hidden md:block"></div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center md:items-start w-full mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 relative">
              <div className="md:absolute md:right-[-1.5rem] md:top-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full bg-primary z-10 hidden md:block"></div>
              <Card className="p-6 shadow-lg w-full max-w-md bg-card text-card-foreground">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-foreground">{edu.institution}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{edu.location}</p>
                  <p className="text-foreground font-medium">{edu.degree}</p>
                  {edu.gpa && <p className="text-muted-foreground text-sm">{edu.gpa}</p>}
                  {edu.percentage && <p className="text-muted-foreground text-sm">{edu.percentage}</p>}
                  <p className="text-muted-foreground text-xs mt-2">{edu.period}</p>
                </CardContent>
              </Card>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-start md:pl-8 relative">
              {/* Empty div for spacing on alternating sides */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
