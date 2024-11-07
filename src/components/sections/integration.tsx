"use client";

import GithubCardShiny from "@/components/ui/github-card-shiny";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Create code lines for the background
const codeLines = Array.from({ length: 20 }, (_, i) => ({
  width: Math.random() * 60 + 40, // Random width between 40% and 100%
  y: `${(i + 1) * 5}%`,
  delay: i * 0.1,
}));

export function IntegrationSection() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-24">
      {/* Animated Integration Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

        {/* Floating Code Lines */}
        <div className="absolute inset-0">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className="absolute h-1 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent"
              style={{
                width: `${line.width}%`,
                top: line.y,
                left: "-20%",
              }}
              animate={{
                x: ["0%", "120%"],
              }}
              transition={{
                duration: 8,
                delay: line.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Glowing Orb */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-96 w-96 rounded-full bg-[radial-gradient(circle,#3273ff_0%,transparent_70%)] blur-2xl" />
        </motion.div>

        {/* Binary Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs font-mono text-blue-500"
              style={{
                left: `${i * 10}%`,
                top: "-20px",
              }}
              animate={{
                y: ["0vh", "100vh"],
              }}
              transition={{
                duration: 5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Simple Integration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Start accepting payments in minutes with our easy-to-use API
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto max-w-3xl"
        >
          <GithubCardShiny />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Button size="lg">View Documentation</Button>
        </motion.div>
      </div>
    </div>
  );
}
