"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, Globe } from "lucide-react";
import { motion } from "framer-motion";

// Create beam positions for the background
const beams = Array.from({ length: 15 }, (_, i) => ({
  x: `${(i + 1) * 6}%`,
  delay: i * 0.2,
  duration: 2 + Math.random() * 2,
}));

export function AboutSection() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/90 to-background" />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0%,#3273ff,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,#4158D0,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_20%_60%,#C850C0,transparent)]" />
        </motion.div>

        {/* Vertical Beams */}
        {beams.map((beam, index) => (
          <motion.div
            key={index}
            className="absolute bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
            style={{
              left: beam.x,
              height: "100%",
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
          >
            About Vpay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12"
          >
            We&apos;re on a mission to revolutionize payments for developers
            across Africa. By providing robust, developer-friendly solutions,
            we&apos;re making it easier for businesses to accept payments and
            grow.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Built for Developers",
                description:
                  "Simple, powerful APIs designed with developer experience in mind.",
              },
              {
                icon: Code,
                title: "Easy Integration",
                description:
                  "Get started quickly with our comprehensive documentation and SDKs.",
              },
              {
                icon: Globe,
                title: "Pan-African Coverage",
                description:
                  "Accept payments from customers across multiple African countries.",
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
