import { AboutSection } from "@/components/sections/about";
import { CTASection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { IntegrationSection } from "@/components/sections/integration";
import { PricingSection } from "@/components/sections/pricing";
import { SecuritySection } from "@/components/sections/security";
import Patners from "@/components/sections/Patners";
import { PaymentCloud } from "@/components/shared/payment-cloud";
export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-between relative">
      <div className="w-full">
        <HeroSection />
        <div className="relative -mt-32">
          {" "}
          {/* Negative margin for overlap */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent to-background" />
          <AboutSection />
        </div>
        <div className="relative -mt-32">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent to-background" />
          <PaymentCloud />
        </div>
        <IntegrationSection />
        <SecuritySection />
        <Patners />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </div>
    </main>
  );
}