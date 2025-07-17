"use client"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export const TypewriterEffectSmooth = ({
  staticWords,
  dynamicWords,
  className,
  cursorClassName,
}: {
  staticWords: {
    text: string
    className?: string
  }[]
  dynamicWords: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [displayedStaticSentence, setDisplayedStaticSentence] = useState<{ text: string; className?: string }[]>([])
  const [displayedDynamicWord, setDisplayedDynamicWord] = useState<{ text: string; className?: string }>({
    text: "",
  })
  const [currentDynamicWordIndex, setCurrentDynamicWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isStaticTypingComplete, setIsStaticTypingComplete] = useState(false)

  useEffect(() => {
    if (!staticWords || staticWords.length === 0 || !dynamicWords || dynamicWords.length === 0) return

    const typingSpeed = 100 // ms per character
    const deletingSpeed = 50 // ms per character
    const delayBeforeDeleting = 1500 // ms
    const delayBeforeTypingNext = 500 // ms

    let timeout: NodeJS.Timeout

    const typeStaticWords = () => {
      let currentStaticCharIndex = 0
      let currentStaticWordIdx = 0
      const tempSentence: { text: string; className?: string }[] = []

      const typeNextStaticChar = () => {
        if (currentStaticWordIdx < staticWords.length) {
          const currentStaticWord = staticWords[currentStaticWordIdx].text
          if (currentStaticCharIndex < currentStaticWord.length) {
            tempSentence[currentStaticWordIdx] = {
              text: currentStaticWord.substring(0, currentStaticCharIndex + 1),
              className: staticWords[currentStaticWordIdx].className,
            }
            setDisplayedStaticSentence([...tempSentence])
            currentStaticCharIndex++
            timeout = setTimeout(typeNextStaticChar, typingSpeed)
          } else {
            currentStaticWordIdx++
            currentStaticCharIndex = 0
            if (currentStaticWordIdx < staticWords.length) {
              tempSentence.push({ text: "", className: staticWords[currentStaticWordIdx].className }) // Prepare for next word
              timeout = setTimeout(typeNextStaticChar, typingSpeed / 2) // Small delay between static words
            } else {
              setIsStaticTypingComplete(true)
              setCurrentCharIndex(0) // Reset for dynamic word
              setDisplayedDynamicWord({
                text: "",
                className: dynamicWords[currentDynamicWordIndex].className,
              }) // Initialize dynamic word
              timeout = setTimeout(handleDynamicTyping, delayBeforeTypingNext)
            }
          }
        }
      }
      typeNextStaticChar()
    }

    const handleDynamicTyping = () => {
      const currentDynamicWord = dynamicWords[currentDynamicWordIndex].text

      if (!isDeleting && currentCharIndex < currentDynamicWord.length) {
        // Typing dynamic word
        setDisplayedDynamicWord({
          text: currentDynamicWord.substring(0, currentCharIndex + 1),
          className: dynamicWords[currentDynamicWordIndex].className,
        })
        setCurrentCharIndex((prev) => prev + 1)
        timeout = setTimeout(handleDynamicTyping, typingSpeed)
      } else if (isDeleting && currentCharIndex > 0) {
        // Deleting dynamic word
        setDisplayedDynamicWord({
          text: currentDynamicWord.substring(0, currentCharIndex - 1),
          className: dynamicWords[currentDynamicWordIndex].className,
        })
        setCurrentCharIndex((prev) => prev - 1)
        timeout = setTimeout(handleDynamicTyping, deletingSpeed)
      } else if (!isDeleting && currentCharIndex === currentDynamicWord.length) {
        // Done typing dynamic word, start deleting after a delay
        timeout = setTimeout(() => setIsDeleting(true), delayBeforeDeleting)
      } else if (isDeleting && currentCharIndex === 0) {
        // Done deleting dynamic word, move to next dynamic word
        setIsDeleting(false)
        setCurrentDynamicWordIndex((prev) => (prev + 1) % dynamicWords.length)
        setDisplayedDynamicWord({
          text: "", // Clear current dynamic word for next typing cycle
          className: dynamicWords[(currentDynamicWordIndex + 1) % dynamicWords.length].className,
        })
        timeout = setTimeout(handleDynamicTyping, delayBeforeTypingNext) // Start typing next dynamic word
      }
    }

    if (!isStaticTypingComplete) {
      typeStaticWords()
    } else {
      handleDynamicTyping()
    }

    return () => clearTimeout(timeout)
  }, [currentCharIndex, currentDynamicWordIndex, isDeleting, isStaticTypingComplete, staticWords, dynamicWords])

  const renderStaticWords = () => {
    return (
      <motion.div className="flex flex-wrap justify-center space-x-1">
        <AnimatePresence>
          {displayedStaticSentence.map((word, idx) => (
            <motion.span
              key={`static-${idx}-${word.text}`} // Use a stable key
              className={cn("text-center text-3xl md:text-4xl lg:text-6xl font-bold text-foreground", word.className)}
            >
              {word.text}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    )
  }

  const renderDynamicWord = () => {
    return (
      <motion.div className="flex justify-center items-center mt-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={displayedDynamicWord.text} // Key for AnimatePresence to detect changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "text-center text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent", // Apply gradient classes here
              displayedDynamicWord.className,
            )}
          >
            {displayedDynamicWord.text}
          </motion.span>
        </AnimatePresence>
        {isStaticTypingComplete && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className={cn("block rounded-sm w-[4px] h-8 md:h-10 lg:h-12 bg-blue-500 ml-1", cursorClassName)}
          ></motion.span>
        )}
      </motion.div>
    )
  }

  return (
    <div className={cn("flex flex-col justify-center items-center", className)}>
      {renderStaticWords()}
      {renderDynamicWord()}
    </div>
  )
}
