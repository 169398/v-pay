"use client";

import { motion } from "framer-motion";

const paymentMethods = [
  "M-Pesa",
  "Flutterwave",
  "Paystack",
  "MTN Money",
  "Airtel Money",
  "Orange Money",
  "Tigo Cash",
  "Chipper Cash",
  "OPay",
  "PalmPay",
  "Remita",
  "Interswitch",
  "Pesapal",
  "DPO",
  "Stripe",
];

// Fixed positions for beams
const beamPositions = Array.from({ length: 10 }, (_, i) => ({
  fromX: "0%",
  toX: "100%",
  y: `${(i + 1) * 10}%`,
  delay: i * 0.2,
}));

export function PaymentCloud() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-24">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
          >
            Seamless Payment Integration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Connect with multiple payment providers through a single, unified API
          </motion.p>
        </div>

        <div className="relative backdrop-blur-3xl bg-background/20 rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Payment Methods Circle */}
            <div className="w-full md:w-1/3">
              <div className="relative h-[400px] flex items-center justify-center">
                {paymentMethods.map((method, index) => {
                  const angle = (index * 360) / paymentMethods.length;
                  const radius = 150;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.div
                      key={method}
                      className="absolute text-sm font-medium bg-background/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(50,115,255,0.2)]"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, x, y }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {method}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Connection beams */}
            <motion.div
              className="absolute left-[30%] top-1/2 w-[20%] h-0.5 bg-gradient-to-r from-blue-500/80 to-purple-500/80"
              style={{
                transformOrigin: "left center"
              }}
              animate={{
                scaleX: [0.8, 1.2, 0.8],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* VPay API Button */}
            <div className="w-full md:w-1/3">
              <motion.div
                className="relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50" />
                <div className="relative rounded-full border border-white/20 bg-background/80 backdrop-blur-sm px-8 py-4 font-semibold text-xl text-center">
                  VPay API
                </div>
              </motion.div>
            </div>

            {/* Connection beam to Customer */}
            <motion.div
              className="absolute left-[63%] top-1/2 w-[20%] h-0.5 bg-gradient-to-r from-blue-500/80 to-green-500/80"
              style={{
                transformOrigin: "left center"
              }}
              animate={{
                scaleX: [0.8, 1.2, 0.8],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Customer Button */}
            <div className="w-full md:w-1/3">
              <motion.div
                className="relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-50" />
                <div className="relative rounded-full border border-white/20 bg-background/80 backdrop-blur-sm px-8 py-4 font-semibold text-xl text-center">
                  Customer
                </div>
              </motion.div>
            </div>
          </div>

          {/* Background Beams */}
          <div className="absolute inset-0 pointer-events-none">
            {beamPositions.map((beam, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                initial={{ x: beam.fromX, y: beam.y, opacity: 0 }}
                animate={{
                  x: beam.toX,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: beam.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
