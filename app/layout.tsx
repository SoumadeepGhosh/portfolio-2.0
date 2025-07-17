import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { SmoothCursor } from "@/components/magicui/smooth-cursor"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import MobileDockNavbar from "@/components/mobile-dock-navbar" // Import the new mobile dock component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Soumadeep Ghosh - Full Stack Developer Portfolio",
  description:
    "Soumadeep Ghosh's personal portfolio showcasing projects, skills, and experience as a Full Stack Developer.",
  keywords: [
    "Soumadeep Ghosh",
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "MERN Stack",
    "Java",
    "JavaScript",
  ],
  authors: [{ name: "Soumadeep Ghosh" }],
  openGraph: {
    title: "Soumadeep Ghosh - Full Stack Developer Portfolio",
    description:
      "Soumadeep Ghosh's personal portfolio showcasing projects, skills, and experience as a Full Stack Developer.",
    url: "https://your-portfolio-url.com", // Replace with your actual URL
    siteName: "Soumadeep Ghosh Portfolio",
    images: [
      {
        url: "/og-image.png", // Custom OG image
        width: 1200,
        height: 630,
        alt: "Soumadeep Ghosh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumadeep Ghosh - Full Stack Developer Portfolio",
    description:
      "Soumadeep Ghosh's personal portfolio showcasing projects, skills, and experience as a Full Stack Developer.",
    images: ["/twitter-image.png"], // Custom Twitter image
  },
  icons: {
    icon: "/favicon.ico", // Favicon
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <ScrollProgress className="top-[65px]" />
          {children}
          <Footer />
          <Toaster />
          <SmoothCursor />
          <MobileDockNavbar /> {/* Render the mobile dock here */}
        </ThemeProvider>
      </body>
    </html>
  )
}
