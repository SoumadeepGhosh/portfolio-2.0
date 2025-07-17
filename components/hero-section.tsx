"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { personalData } from "@/lib/data";
import SpotlightBackground from "@/components/ui/spotlight-background";
import { useRef } from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button"; // Import ShimmerButton
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"; // Import InteractiveHoverButton

export default function HeroSection() {
  const staticWords = [
    { text: "Hi," },
    { text: "I'm" },
    { text: personalData.name.split(" ")[0], className: "text-primary" },
    { text: personalData.name.split(" ")[1] + "," },
  ];

  const dynamicRoles = personalData.dynamicRoles.map((role) => ({
    text: role,
    className: "text-gradient-blue-purple", // Apply gradient class
  }));

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Light beam effect
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]); // Animate from top to bottom

  return (
    <section
      id="hero"
      ref={targetRef}
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4 pt-20 bg-gradient-to-br from-background-start to-background-end"
    >
      {/* Spotlight Background */}
      <SpotlightBackground className="absolute inset-0 z-0" />

      {/* Light Beam Effect */}
      <motion.div
        className="absolute left-1/2 w-1 h-[150vh] bg-gradient-to-b from-blue-400/50 via-purple-400/50 to-transparent z-10 pointer-events-none"
        style={{ y, x: "-50%" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-20 flex flex-col items-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <TypewriterEffectSmooth
            staticWords={staticWords}
            dynamicWords={dynamicRoles}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Building scalable applications and solving real-world problems with
          passion.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4"
        >
          <Link href="#contact">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Contact
              </span>
            </ShimmerButton>
          </Link>
          <a
            href={personalData.resumeDownloadLink}
            download="Soumadeep_Ghosh_Resume.pdf"
          >
            <InteractiveHoverButton className="px-6 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Download Resume
            </InteractiveHoverButton>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
