"use client"

import type React from "react"
import { useEffect, useRef, useCallback } from "react"

interface ParticlesProps {
  className?: string
  quantity?: number
  ease?: number
  color?: string
  refresh?: boolean
}

const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  ease = 800,
  color = "#ffffff",
  refresh = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef<{ x: number | null; y: number | null }>({ x: null, y: null })
  const particles = useRef<any[]>([])
  const animationFrameId = useRef<number | null>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouse.current = { x: null, y: null }
  }, [])

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  }, [])

  const createParticles = useCallback(() => {
    particles.current = []
    const canvas = canvasRef.current
    if (!canvas) return

    for (let i = 0; i < quantity; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
      })
    }
  }, [quantity])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.current.forEach((p) => {
      // Update particle position
      p.x += p.vx
      p.y += p.vy

      // Bounce off walls
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1

      // Mouse interaction
      if (mouse.current.x !== null && mouse.current.y !== null) {
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (100 - distance) / 100 // Stronger force closer to mouse
          p.vx -= forceDirectionX * force * 0.1 // Repel
          p.vy -= forceDirectionY * force * 0.1
        }
      }

      // Ease back to normal velocity
      p.vx *= 0.99
      p.vy *= 0.99

      // Draw particle
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = `${color}${Math.floor(p.alpha * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.fill()
    })

    animationFrameId.current = requestAnimationFrame(draw)
  }, [color])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    resizeCanvas()
    createParticles()

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    animationFrameId.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [createParticles, draw, handleMouseMove, handleMouseLeave, resizeCanvas, refresh]) // Added refresh to dependency array

  return <canvas ref={canvasRef} className={className} />
}

export default Particles
