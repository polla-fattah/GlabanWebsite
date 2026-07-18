import type { LucideIcon } from 'lucide-react';
"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Calculator, Monitor, Flame, Gauge, Truck } from "lucide-react";

interface SolutionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  spanClass: string;
  Visual: React.FC<{ className?: string }>;
}

const VisualERP: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="50,10 90,30 50,50 10,30" className="text-white/20" fill="currentColor" />
    <polygon points="50,30 90,50 50,70 10,50" className="text-white/10" fill="currentColor" />
    <polygon points="50,50 90,70 50,90 10,70" className="text-white/5" fill="currentColor" />
  </svg>
);

const VisualPOS: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="20" y="20" width="60" height="60" rx="4" />
    <line x1="20" y1="40" x2="80" y2="40" />
    <circle cx="35" cy="60" r="3" fill="currentColor" />
    <circle cx="50" cy="60" r="3" fill="currentColor" />
    <circle cx="65" cy="60" r="3" fill="currentColor" />
  </svg>
);

const VisualQuotas: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="50" cy="50" r="40" strokeDasharray="180 200" strokeDashoffset="40" className="text-orange" />
    <circle cx="50" cy="50" r="30" strokeDasharray="100 200" strokeDashoffset="20" className="text-fog" />
    <circle cx="50" cy="50" r="20" strokeDasharray="50 200" className="text-mist" />
  </svg>
);

const VisualPropane: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="30" y="20" width="40" height="70" rx="20" />
    <rect x="40" y="10" width="20" height="10" />
    <path d="M35 40 L65 40" />
  </svg>
);

const VisualDispatch: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 80 Q 50 20 80 80" strokeDasharray="4 4" />
    <circle cx="20" cy="80" r="4" fill="currentColor" />
    <circle cx="50" cy="50" r="4" fill="currentColor" className="text-orange" />
    <circle cx="80" cy="80" r="4" fill="currentColor" />
  </svg>
);

const solutionsData: SolutionItem[] = [
  {
    icon: Calculator,
    title: "Fuel ERP Platform",
    desc: "Centralised financial accounting, multi-branch inventory reconciliation, and automated invoicing.",
    href: "/products/fuel-erp",
    spanClass: "lg:col-span-3 md:col-span-2 col-span-1",
    Visual: VisualERP,
  },
  {
    icon: Monitor,
    title: "Gas Station POS & ATG",
    desc: "High-volume forecourt touch screen checkout and direct MODBUS dispenser wiring.",
    href: "/products/gas-station-pos",
    spanClass: "lg:col-span-3 md:col-span-2 col-span-1",
    Visual: VisualPOS,
  },
  {
    icon: Gauge,
    title: "Fuel Quotas & Fleet Limits",
    desc: "Automated RFID employee allocations and zero internal fuel shrinkage.",
    href: "/products/fuel-card-fleet-card-system",
    spanClass: "lg:col-span-2 md:col-span-1 col-span-1",
    Visual: VisualQuotas,
  },
  {
    icon: Flame,
    title: "Propane & Bulk Gas System",
    desc: "Industrial tonnage contract management and cylinder tracking.",
    href: "/products/bulk-gas-delivery-system",
    spanClass: "lg:col-span-2 md:col-span-1 col-span-1",
    Visual: VisualPropane,
  },
  {
    icon: Truck,
    title: "Fleet Dispatch & Tracking",
    desc: "Live GPS tracking and automated depot-to-site route planning.",
    href: "/products/delivery-dispatch-route-optimisation",
    spanClass: "lg:col-span-2 md:col-span-2 col-span-1",
    Visual: VisualDispatch,
  },
];

export default function HomeSolutionsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
      {solutionsData.map((item) => {
        const Visual = item.Visual;
        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "group no-underline block h-full outline-none",
              item.spanClass,
            )}
          >
            <Card className="relative bg-obsidian border border-graphite rounded-xl p-8 shadow-none transition-all flex flex-col justify-between gap-8 h-[320px] overflow-hidden hover:bg-white/[0.02]">
              
              {/* Abstract Visual in the Background */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 text-graphite opacity-30 group-hover:opacity-50 group-hover:text-fog transition-all duration-700 pointer-events-none">
                <Visual className="w-full h-full" />
              </div>

              <div className="relative z-10">
                <h3 className="font-medium text-[22px] text-white m-0 mb-3 leading-snug tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-fog leading-[1.6] m-0 font-normal max-w-[80%]">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-graphite flex items-center justify-between mt-auto">
                <span className="font-medium text-[13px] text-white flex items-center gap-2">
                  Explore Solution
                  <ArrowRight className="text-[11px] text-fog group-hover:text-white transition-colors" />
                </span>
                <div className="w-8 h-8 rounded-full bg-carbon border border-graphite flex items-center justify-center text-fog group-hover:text-white group-hover:border-smoke transition-colors">
                  <item.icon />
                </div>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
