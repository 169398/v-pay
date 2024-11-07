"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I integrate Vpay?",
    answer: "Integration is simple with our comprehensive SDKs and API documentation. We provide libraries for popular frameworks and detailed guides to help you get started quickly.",
  },
  {
    question: "Is my data secure with Vpay?",
    answer: "Yes, we implement bank-grade security measures including end-to-end encryption, PCI DSS compliance, and continuous security monitoring to ensure your data is always protected.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support a wide range of payment methods including cards, bank transfers, mobile money, and USSD across multiple African countries.",
  },
  {
    question: "How long do payouts take?",
    answer: "Standard payouts are processed within 24-48 hours. Business and Enterprise plans have access to faster payout options, including same-day and instant payouts.",
  },
  {
    question: "Do you provide technical support?",
    answer: "Yes, we provide technical support through multiple channels. All plans include basic support, while Business and Enterprise plans include priority support and dedicated account managers.",
  },
];

// Create floating question marks for background
const questionMarks = Array.from({ length: 15 }, (_, i) => ({
  x: Math.floor(Math.random() * 100),
  y: Math.floor(Math.random() * 100),
  scale: 0.5 + Math.random() * 0.5,
  delay: i * 0.2,
}));

export function FAQSection() {
  return (
    <div className="relative w-full overflow-hidden bg-black/95 py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        
        {/* Glowing Background */}
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0%,#3273ff10,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,#4158D010,transparent)]" />
        </motion.div>

        {/* Floating Question Marks */}
        {questionMarks.map((mark, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl font-serif text-blue-500/5"
            style={{
              left: `${mark.x}%`,
              top: `${mark.y}%`,
              scale: mark.scale,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              delay: mark.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ?
          </motion.div>
        ))}
      </div>

      {/* Content Section */}
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Find answers to common questions about Vpay
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="backdrop-blur-sm bg-black/40 border-white/5 mb-4 rounded-lg"
              >
                <AccordionTrigger className="text-left px-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}