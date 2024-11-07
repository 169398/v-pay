"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useEffect } from "react";

const COLORS_TOP = ["#3273ff", "#4158D0", "#C850C0", "#3B82F6"];

export function HeroSection() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen overflow-hidden px-4 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <span className="inline-block text-sm border p-2 px-4 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35] mb-6">
            Now Live in Africa
          </span>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Empowering Developers in Africa with Seamless Payments
            </h1>
            <p className="mx-auto max-w-2xl text-gray-400 md:text-xl">
              Vpay makes it easy to integrate payments, manage recurring
              revenue, and handle subscriptions effortlessly.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.button
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex items-center gap-2 rounded-full bg-gray-950/10 px-8 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              Get Started
              <ArrowRight className="transition-transform group-hover:-rotate-45" />
            </motion.button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Learn More
            </Button>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Card className="bg-gray-950/30 border-gray-800">
              <CardContent className="flex items-center gap-4 p-4">
                <Shield className="h-5 w-5 text-[#3273ff]" />
                <p className="text-sm text-gray-300">Secure Transactions</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950/30 border-gray-800">
              <CardContent className="flex items-center gap-4 p-4">
                <Zap className="h-5 w-5 text-[#3273ff]" />
                <p className="text-sm text-gray-300">Instant Payouts</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-950/30 border-gray-800">
              <CardContent className="flex items-center gap-4 p-4">
                <Globe className="h-5 w-5 text-[#3273ff]" />
                <p className="text-sm text-gray-300">Pan-African Coverage</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full overflow-hidden">
         
        </div>
      </div>
    </motion.section>
  );
}
