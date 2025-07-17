"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa" // Using FaExternalLinkAlt for LeetCode
import { personalData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="bg-secondary text-secondary-foreground py-8 px-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </p>
          <p className="text-sm mt-1">Built with ❤️ using React & Next.js</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={personalData.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode profile"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            <FaExternalLinkAlt className="w-6 h-6" />
          </a>
        </div>
        <Button
          onClick={scrollToTop}
          variant="ghost"
          size="icon"
          className="text-secondary-foreground hover:bg-primary/20 rounded-full"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      </div>
    </motion.footer>
  )
}
