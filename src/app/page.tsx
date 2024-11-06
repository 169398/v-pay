import { HeroSection } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-between">
      <HeroSection />
    </main>
  );
}