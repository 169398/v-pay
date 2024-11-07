/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, AlertTriangle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Create grid points for the security mesh background
const gridPoints = Array.from({ length: 50 }, (_, i) => ({
  x: Math.floor(Math.random() * 100),
  y: Math.floor(Math.random() * 100),
  delay: Math.random() * 2,
}));

export function SecuritySection() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-24">
      {/* Animated Security Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

        {/* Glowing Security Mesh */}
        <div className="absolute inset-0">
          {gridPoints.map((point, index) => (
            <motion.div
              key={index}
              className="absolute h-1 w-1 rounded-full bg-blue-500/30"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                delay: point.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Red Scanning Effect */}
        <motion.div
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
          animate={{
            top: ["0%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Shield Pulse with red gradient */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-96 w-96 rounded-full bg-[radial-gradient(circle,#ff3232_0%,transparent_70%)] blur-xl" />
        </motion.div>
      </div>

      {/* Content (existing) */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
          >
            Enterprise-Grade Security
          </motion.h2>
          {/* Rest of the content remains the same */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12"
          >
            Your security is our top priority. We implement industry-leading
            security measures to ensure your transactions are always protected.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-4">
            {/* Existing cards with added motion */}
            {[
              {
                icon: Shield,
                title: "PCI DSS Compliant",
                description: "Highest level of payment security standards",
              },
              {
                icon: Lock,
                title: "End-to-End Encryption",
                description: "256-bit SSL encryption for all transactions",
              },
              {
                icon: AlertTriangle,
                title: "Fraud Prevention",
                description: "AI-powered fraud detection system",
              },
              {
                icon: CheckCircle,
                title: "Regular Audits",
                description: "Continuous security monitoring",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="backdrop-blur-lg bg-background/20 border-white/10 hover:border-white/20 transition-colors">
                  <CardContent className="flex flex-col items-center gap-4 p-6">
                    <item.icon className="h-12 w-12 text-blue-500" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-center">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
