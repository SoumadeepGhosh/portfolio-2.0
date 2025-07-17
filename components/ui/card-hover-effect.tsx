"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"; // Import shadcn Card components

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    stack: string;
    description: string;
    github?: string;
    live?: string;
    image?: string; // Added image property
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-accent block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="h-full w-full p-4 overflow-hidden relative z-20 bg-card/80 backdrop-blur-md shadow-lg glassmorphism-border text-card-foreground group-hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              {item.image && (
                <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                  {/* Changed to standard <img> tag for GIF playback */}
                  {item.image && (
                    <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                      {item.image.endsWith(".mp4") ? (
                        <video
                          src={item.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>
                  )}
                </div>
              )}
              <CardTitle className="text-foreground font-bold tracking-wide mt-4">
                {item.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm mt-2">
                {item.stack}
              </CardDescription>
              <CardDescription className="mt-4 text-muted-foreground tracking-wide leading-relaxed text-sm">
                {item.description}
              </CardDescription>
              <div className="flex mt-4 space-x-4">
                {item.github && (
                  <Link
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </Link>
                )}
                {item.live && (
                  <Link
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-1 text-sm" /> Live
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
