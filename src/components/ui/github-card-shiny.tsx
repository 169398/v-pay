"use client";

import { useCallback, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

export default function GithubCardShiny({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current) {
      return;
    }

    const { width, height } = overlayRef.current?.getBoundingClientRect() ?? {};
    const xOffset = x - width / 2;
    const yOffset = y - height / 2;

    overlayRef.current?.style.setProperty("--x", `${xOffset}px`);
    overlayRef.current?.style.setProperty("--y", `${yOffset}px`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative w-full max-w-3xl overflow-hidden rounded-md border border-border bg-zinc-700 p-8 text-zinc-200 shadow-lg",
        className
      )}
    >
      <div
        ref={overlayRef}
        className="-z-1 absolute h-96 w-96 rounded-full bg-white opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-20"
        style={{
          transform: "translate(var(--x), var(--y))",
        }}
      />

      <div className="font-mono text-lg">
        vpay.config.ts
        <div className="text-sm text-zinc-400">Integration Steps</div>
      </div>

      <div className="z-10 mt-12 flex w-full min-w-fit flex-col gap-4 rounded-md bg-zinc-600 p-6 shadow-2xl">
        {[
          {
            title: "Install VPay SDK",
            time: "npm install @vpay/sdk",
          },
          {
            title: "Initialize VPay",
            time: "apiKey setup",
          },
          {
            title: "Create Payment",
            time: "amount & currency",
          },
          {
            title: "Handle Response",
            time: "process payment",
          },
        ].map((step) => (
          <div className="flex w-full items-center gap-4" key={step.title}>
            <CheckCircle2 className="h-6 w-6 flex-shrink-0 fill-green-400 text-zinc-600" />
            <strong className="text-base md:text-lg md:flex-shrink-0">
              {step.title}
            </strong>
            <span className="ml-auto inline-block flex-shrink-0 text-sm opacity-75">
              {step.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
