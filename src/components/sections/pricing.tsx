import { Button } from "@/components/ui/button";
import {  CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import GlowingCard from "../ui/glowing-card";

const plans = [
  {
    name: "Starter",
    price: "1.5%",
    description: "Per successful transaction",
    features: [
      "No monthly fees",
      "Standard support",
      "Basic analytics",
      "Standard payouts",
    ],
  },
  {
    name: "Business",
    price: "1.2%",
    description: "Per successful transaction",
    features: [
      "Priority support",
      "Advanced analytics",
      "Same-day payouts",
      "Custom integration support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for your business",
    features: [
      "Dedicated account manager",
      "Custom integration",
      "Instant payouts",
      "Volume discounts",
    ],
  },
];

export function PricingSection() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12">
            Choose the plan that best fits your business needs
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <GlowingCard
                key={plan.name}
                fromColor={
                  plan.name === "Starter"
                    ? "#4158D0"
                    : plan.name === "Business"
                    ? "#3B82F6"
                    : "#059669"
                }
                viaColor={
                  plan.name === "Starter"
                    ? "#C850C0"
                    : plan.name === "Business"
                    ? "#8B5CF6"
                    : "#0EA5E9"
                }
                toColor={
                  plan.name === "Starter"
                    ? "#FFCC70"
                    : plan.name === "Business"
                    ? "#EC4899"
                    : "#6366F1"
                }
              >
                <div className="flex flex-col">
                  <CardHeader className="text-center">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <p className="text-sm text-muted-foreground mt-2">
                        {plan.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Choose {plan.name}</Button>
                  </CardFooter>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 