"use client"

import type React from "react"
import { useEffect, useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface CodeLine {
  id: string
  content: React.ReactNode
  x: number
  y: number
  delay: number
  duration: number
  opacity: number
}

const generateRandomCodeSnippet = (): React.ReactNode => {
  const keywords = [
    "const",
    "let",
    "var",
    "function",
    "class",
    "import",
    "export",
    "return",
    "if",
    "else",
    "for",
    "while",
  ]
  const types = ["string", "number", "boolean", "void", "any"]
  const functions = ["console.log", "fetch", "useEffect", "useState", "render"]
  const variables = ["data", "item", "result", "count", "index", "user", "config"]
  const operators = ["=", "==", "===", "+", "-", "*", "/", "%"]
  const symbols = ["{", "}", "(", ")", "[", "]", ";", ".", ","]
  const comments = ["// This is a comment", "/* Multi-line comment */"]
  const strings = [`"hello world"`, `'example'`, "`template literal`"]

  const parts: { text: string; type: string }[] = []

  const addPart = (text: string, type: string) => parts.push({ text, type })
  const addSpace = () => addPart(" ", "plain")

  const randomChoice = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

  const r = Math.random()
  if (r < 0.2) {
    addPart(randomChoice(keywords), "keyword")
    addSpace()
    addPart(randomChoice(variables), "variable")
    addPart(randomChoice(operators), "operator")
    addPart(randomChoice(strings), "string")
    addPart(randomChoice(symbols), "symbol")
  } else if (r < 0.4) {
    addPart(randomChoice(functions), "function")
    addPart(randomChoice(symbols), "symbol") // (
    addPart(randomChoice(variables), "variable")
    addPart(randomChoice(symbols), "symbol") // )
    addPart(randomChoice(symbols), "symbol") // {
    addSpace()
    addPart(randomChoice(comments), "comment")
    addSpace()
    addPart(randomChoice(symbols), "symbol") // }
  } else if (r < 0.6) {
    addPart(randomChoice(keywords), "keyword")
    addSpace()
    addPart(randomChoice(variables), "variable")
    addPart(": ", "plain")
    addPart(randomChoice(types), "type")
    addPart(randomChoice(operators), "operator")
    addPart(Math.floor(Math.random() * 100).toString(), "number")
    addPart(randomChoice(symbols), "symbol")
  } else if (r < 0.8) {
    addPart(randomChoice(comments), "comment")
  } else {
    addPart(randomChoice(keywords), "keyword")
    addSpace()
    addPart(randomChoice(variables), "variable")
    addPart(randomChoice(operators), "operator")
    addPart(Math.random() > 0.5 ? "true" : "false", "boolean")
    addPart(randomChoice(symbols), "symbol")
  }

  return (
    <>
      {parts.map((part, i) => (
        <span key={i} className={`text-code-${part.type}`}>
          {part.text}
        </span>
      ))}
    </>
  )
}

const CodeBackground: React.FC<{ className?: string }> = ({ className }) => {
  const [lines, setLines] = useState<CodeLine[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const addLine = useCallback(() => {
    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const containerHeight = containerRef.current.offsetHeight

    const newId = Math.random().toString(36).substring(2, 9)
    const newX = Math.random() * containerWidth * 0.8 + containerWidth * 0.1 // Avoid edges
    const newY = Math.random() * containerHeight * 0.8 + containerHeight * 0.1
    const newDelay = Math.random() * 5 // Max 5 seconds delay
    const newDuration = Math.random() * 5 + 5 // 5-10 seconds animation
    const newOpacity = Math.random() * 0.3 + 0.1 // 0.1-0.4 opacity

    setLines((prevLines) => [
      ...prevLines,
      {
        id: newId,
        content: generateRandomCodeSnippet(),
        x: newX,
        y: newY,
        delay: newDelay,
        duration: newDuration,
        opacity: newOpacity,
      },
    ])
  }, [])

  useEffect(() => {
    // Initial lines
    for (let i = 0; i < 20; i++) {
      addLine()
    }

    const interval = setInterval(() => {
      addLine()
      // Remove old lines to prevent memory issues
      setLines((prevLines) => prevLines.filter((line) => line.delay + line.duration > Date.now() / 1000 - 10))
    }, 1000) // Add a new line every second

    return () => clearInterval(interval)
  }, [addLine])

  return (
    <div ref={containerRef} className={cn("relative w-full h-full overflow-hidden", className)}>
      <AnimatePresence>
        {lines.map((line) => (
          <motion.div
            key={line.id}
            initial={{ opacity: 0, x: line.x, y: line.y }}
            animate={{
              opacity: line.opacity,
              x: line.x + (Math.random() - 0.5) * 50,
              y: line.y + (Math.random() - 0.5) * 50,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute whitespace-nowrap text-sm font-mono"
            style={{
              left: line.x,
              top: line.y,
              pointerEvents: "none",
            }}
          >
            {line.content}
          </motion.div>
        ))}
      </AnimatePresence>
      {/* Blinking Terminal Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 block rounded-sm w-[3px] h-6 bg-code-cursor z-30"
      ></motion.span>
    </div>
  )
}

export default CodeBackground
