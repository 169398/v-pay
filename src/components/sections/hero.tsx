import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { Globe as GlobeComponent } from "../shared/globe";

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
              Empowering Developers in Africa with Seamless Payments
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground md:text-xl">
              V-Pay makes it easy to integrate payments, manage recurring
              revenue, and handle subscriptions effortlessly.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Learn More
            </Button>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <Shield className="h-5 w-5 text-primary" />
                <p className="text-sm">Secure Transactions</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <Zap className="h-5 w-5 text-primary" />
                <p className="text-sm">Instant Payouts</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <Globe className="h-5 w-5 text-primary" />
                <p className="text-sm">Pan-African Coverage</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-50">
        <GlobeComponent />
      </div>
    </div>
  );
}
