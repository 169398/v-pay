"use client";

import FooterButton from "../shared/footer-button";
import { motion } from "framer-motion";

// Create transform elements for the background
const transformElements = Array.from({ length: 20 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 20 + Math.random() * 30,
  delay: i * 0.2,
}));

export function CTASection() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

        {/* Glowing Background */}
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0%,#3273ff,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,#4158D0,transparent)]" />
        </motion.div>

        {/* Transform Elements */}
        {transformElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="border border-blue-500/20 rounded"
              style={{
                width: element.size,
                height: element.size,
              }}
            />
          </motion.div>
        ))}

        {/* Rising Particles */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-500/20"
              style={{
                left: `${i * 10 + Math.random() * 10}%`,
                bottom: "-10px",
              }}
              animate={{
                y: [0, -500],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
          >
            Ready to Transform Your Payments?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8"
          >
            Join thousands of businesses using Vpay to power their payment
            infrastructure
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <FooterButton />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
