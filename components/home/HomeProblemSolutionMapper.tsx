"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  Monitor,
  Flame,
  Gauge,
  Truck,
} from "lucide-react";

// --- DATA DEFINITIONS ---

const solutions = [
  {
    id: "erp",
    icon: Calculator,
    title: "Fuel ERP Platform",
    desc: "Centralised financial accounting, multi-branch inventory reconciliation, and automated invoicing.",
    href: "/products/fuel-erp",
    code: "SYS_01 // CORE_ERP",
    Visual: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon
          points="50,10 90,30 50,50 10,30"
          className="text-white/20"
          fill="currentColor"
        />
        <polygon
          points="50,30 90,50 50,70 10,50"
          className="text-white/10"
          fill="currentColor"
        />
        <polygon
          points="50,50 90,70 50,90 10,70"
          className="text-white/5"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "pos",
    icon: Monitor,
    title: "Gas Station POS & ATG",
    desc: "High-volume forecourt touch screen checkout and direct MODBUS dispenser wiring.",
    href: "/products/gas-station-pos",
    code: "SYS_02 // FORECOURT_POS",
    Visual: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="20" y="20" width="60" height="60" rx="4" />
        <line x1="20" y1="40" x2="80" y2="40" />
        <circle cx="35" cy="60" r="3" fill="currentColor" />
        <circle cx="50" cy="60" r="3" fill="currentColor" />
        <circle cx="65" cy="60" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "quotas",
    icon: Gauge,
    title: "Fuel Quotas & Fleet Limits",
    desc: "Automated RFID employee allocations and zero internal fuel shrinkage.",
    href: "/products/fuel-card-fleet-card-system",
    code: "SYS_03 // QUOTA_ENFORCE",
    Visual: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          strokeDasharray="180 200"
          strokeDashoffset="40"
          className="opacity-100"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          strokeDasharray="100 200"
          strokeDashoffset="20"
          className="opacity-60"
        />
        <circle
          cx="50"
          cy="50"
          r="20"
          strokeDasharray="50 200"
          className="opacity-30"
        />
      </svg>
    ),
  },
  {
    id: "propane",
    icon: Flame,
    title: "Propane & Bulk Gas System",
    desc: "Industrial tonnage contract management and cylinder tracking.",
    href: "/products/bulk-gas-delivery-system",
    code: "SYS_04 // BULK_PROPANE",
    Visual: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="30" y="20" width="40" height="70" rx="20" />
        <rect x="40" y="10" width="20" height="10" />
        <path d="M35 40 L65 40" />
      </svg>
    ),
  },
  {
    id: "dispatch",
    icon: Truck,
    title: "Fleet Dispatch & Tracking",
    desc: "Live GPS tracking and automated depot-to-site route planning.",
    href: "/products/delivery-dispatch-route-optimisation",
    code: "SYS_05 // FLEET_DISPATCH",
    Visual: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 80 Q 50 20 80 80" strokeDasharray="4 4" />
        <circle cx="20" cy="80" r="4" fill="currentColor" />
        <circle
          cx="50"
          cy="50"
          r="4"
          fill="currentColor"
          className="opacity-100"
        />
        <circle cx="80" cy="80" r="4" fill="currentColor" />
      </svg>
    ),
  },
];

const problems = [
  {
    number: "01",
    title: "Manual Sales Tracking",
    desc: "Relying on paper logs creates a massive bottleneck at the forecourt.",
    domain: "FORECOURT BOTTLENECK",
    solutionId: "pos",
  },
  {
    number: "02",
    title: "Weak Stock Control",
    desc: "Without automated tank gauging, fuel disappears into thin air.",
    domain: "INVENTORY SHRINKAGE",
    solutionId: "erp",
  },
  {
    number: "03",
    title: "Uncontrolled Employee Fuel Usage",
    desc: "Unenforced quotas lead to massive internal fuel waste.",
    domain: "INTERNAL FUEL WASTE",
    solutionId: "quotas",
  },
  {
    number: "04",
    title: "Paper-based Delivery Records",
    desc: "Physical paperwork slows down operations and increases billing errors.",
    domain: "LOGISTICS BLINDSPOT",
    solutionId: "dispatch",
  },
  {
    number: "05",
    title: "Cylinder & Tonnage Loss",
    desc: "Inability to track industrial bulk gas contracts leads to lost revenue.",
    domain: "BULK GAS SHRINKAGE",
    solutionId: "propane",
  },
  {
    number: "06",
    title: "Poor Branch Visibility",
    desc: "Headquarters remains completely blind to operational health.",
    domain: "MULTI-SITE DISCONNECT",
    solutionId: "erp",
  },
  {
    number: "07",
    title: "Weak Cybersecurity",
    desc: "Outdated software leaves critical operational technology vulnerable.",
    domain: "OT & IT EXPOSURE",
    solutionId: "erp",
  },
  {
    number: "08",
    title: "Poor Physical Security",
    desc: "Inadequate CCTV at remote sites increases risk of theft.",
    domain: "SITE VULNERABILITY",
    solutionId: "pos",
  },
];

// --- COMPONENT ---

export default function HomeProblemSolutionMapper() {
  const [activeProblemIndex, setActiveProblemIndex] = useState<number>(0);

  return (
    <section className="bg-void relative border-b border-graphite">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\"%3E%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"1\\"%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8 py-24 md:py-32">
        {/* Header */}
        <div className="max-w-[800px] mb-20 relative z-10">
          <div className="text-[12px] font-mono text-orange tracking-widest uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-orange"></span>
            Cause & Effect
          </div>
          <h2 className="font-medium text-[36px] md:text-[48px] text-white tracking-[-0.02em] leading-[1.1]">
            Mapping operational pain to unified software solutions.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 relative items-start">
          {/* Left Side: Scrollable Problems */}
          <div className="lg:w-1/2 flex flex-col relative pb-24">
            {problems.map((prob, index) => (
              <motion.div
                key={prob.number}
                onViewportEnter={() => setActiveProblemIndex(index)}
                viewport={{ amount: 0.8, margin: "-30% 0px -30% 0px" }}
                className="py-12 md:py-24 border-l border-graphite/50 pl-6 md:pl-12 relative"
              >
                {/* Timeline node */}
                <div
                  className={cn(
                    "absolute left-[-5px] top-[60px] md:top-[80px] w-2.5 h-2.5 rounded-full transition-all duration-500",
                    activeProblemIndex === index
                      ? "bg-orange shadow-[0_0_15px_rgba(255,107,0,0.5)]"
                      : "bg-orange shadow-[0_0_15px_rgba(255,107,0,0.5)] lg:bg-graphite lg:shadow-none",
                  )}
                />

                <div
                  className={cn(
                    "transition-all duration-700",
                    activeProblemIndex === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-100 translate-x-0 lg:opacity-30 lg:-translate-x-4",
                  )}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[24px] text-graphite">
                      {prob.number}
                    </span>
                    <span className="font-mono text-[10px] text-coral-red bg-coral-red/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      {prob.domain}
                    </span>
                  </div>

                  <h3 className="font-medium text-[28px] md:text-[32px] text-white leading-tight tracking-[-0.01em] mb-4">
                    {prob.title}
                  </h3>

                  <p className="text-[16px] md:text-[18px] text-fog leading-relaxed font-light mb-8">
                    {prob.desc}
                  </p>

                  {/* MOBILE ONLY INLINE SOLUTION CARD */}
                  <div className="block lg:hidden mt-8">
                    <div className="font-mono text-[11px] text-fog tracking-widest uppercase mb-4 flex items-center gap-2">
                      <ArrowRight className="text-orange" />
                      The Solution
                    </div>

                    {(() => {
                      const sol =
                        solutions.find((s) => s.id === prob.solutionId) ||
                        solutions[0];
                      const Visual = sol.Visual;
                      return (
                        <Card className="bg-orange border-none rounded-lg p-6 sm:p-8 flex flex-col relative overflow-hidden shadow-lg shadow-orange/20">
                          <div className="absolute -bottom-10 -right-10 w-48 h-48 text-white opacity-20 pointer-events-none">
                            <Visual className="w-full h-full" />
                          </div>

                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6">
                              <span className="font-mono text-[10px] sm:text-[11px] text-white/90 tracking-wider border border-white/20 bg-black/10 px-2 py-1 rounded">
                                SOLVES {prob.number}
                              </span>
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/10 border border-white/20 flex items-center justify-center text-[16px] sm:text-[20px] text-white">
                                <sol.icon />
                              </div>
                            </div>
                            <h3 className="font-medium text-[24px] sm:text-[28px] text-white leading-tight tracking-[-0.01em] mb-3 mt-auto">
                              {sol.title}
                            </h3>
                            <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed font-light mb-6">
                              {sol.desc}
                            </p>
                            <Link
                              href={sol.href}
                              className="inline-flex items-center gap-2 font-medium text-[13px] sm:text-[14px] text-white hover:text-white/80 transition-colors"
                            >
                              Explore Module{" "}
                              <ArrowRight className="text-[12px]" />
                            </Link>
                          </div>
                        </Card>
                      );
                    })()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Sticky Solution Card */}
          <div className="lg:w-1/2 hidden lg:block sticky top-40 w-full">
            <div className="font-mono text-[12px] text-fog tracking-widest uppercase mb-6 flex items-center gap-3">
              <ArrowRight className="text-orange" />
              The Glaban Solution
            </div>

            <div className="relative h-[400px]">
              {(() => {
                return problems.map((prob, index) => {
                  const sol =
                    solutions.find((s) => s.id === prob.solutionId) ||
                    solutions[0];
                  const Visual = sol.Visual;
                  const isPast = index < activeProblemIndex;
                  const isActive = index === activeProblemIndex;
                  const isFuture = index > activeProblemIndex;

                  // Calculate animation properties
                  let y: number | string = 0;
                  let scale = 1;
                  let opacity = 1;

                  if (isPast) {
                    y = -(activeProblemIndex - index) * 15; // Slide up and stack
                    scale = 1 - (activeProblemIndex - index) * 0.05; // Shrink slightly
                    opacity = Math.max(
                      0,
                      0.4 - (activeProblemIndex - index) * 0.1,
                    ); // Dim older cards
                  } else if (isActive) {
                    y = 0;
                    scale = 1;
                    opacity = 1;
                  } else if (isFuture) {
                    y = 400; // Start from bottom
                    scale = 1;
                    opacity = 0;
                  }

                  return (
                    <motion.div
                      key={prob.number}
                      initial={false}
                      animate={{ y, scale, opacity, zIndex: index }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full origin-top"
                    >
                      <Card className="bg-orange border-none rounded-lg p-10 h-[400px] flex flex-col relative overflow-hidden shadow-lg shadow-orange/20">
                        {/* Dynamic Abstract SVG Background */}
                        <div className="absolute -bottom-10 -right-10 w-72 h-72 text-white opacity-20 pointer-events-none">
                          <Visual className="w-full h-full" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-[11px] text-white/90 tracking-wider border border-white/20 bg-black/10 px-2.5 py-1 rounded">
                                SOLVES {prob.number}: {prob.title.toUpperCase()}
                              </span>
                            </div>
                            <div className="w-12 h-12 rounded-lg bg-black/10 border border-white/20 flex items-center justify-center text-[20px] text-white">
                              <sol.icon />
                            </div>
                          </div>

                          <h3 className="font-medium text-[32px] text-white leading-tight tracking-[-0.01em] mb-4 mt-auto">
                            {sol.title}
                          </h3>

                          <p className="text-[16px] text-white/90 leading-relaxed font-light mb-8 max-w-[85%]">
                            {sol.desc}
                          </p>

                          <Link
                            href={sol.href}
                            className="inline-flex items-center gap-2 font-medium text-[14px] text-white hover:text-white/80 transition-colors"
                          >
                            Explore Module{" "}
                            <ArrowRight className="text-[12px]" />
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
