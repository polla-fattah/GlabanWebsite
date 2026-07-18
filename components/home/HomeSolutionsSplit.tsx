import type { LucideIcon } from 'lucide-react';
"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Calculator, Monitor, Gauge, Truck } from "lucide-react";

interface SolutionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  code: string;
}

const solutionsData: SolutionItem[] = [
  {
    icon: Calculator,
    title: "Fuel ERP Platform",
    desc: "Centralised financial accounting, multi-branch inventory reconciliation, and automated invoicing. Replaces fragmented spreadsheets with a single source of truth.",
    href: "/products/fuel-erp",
    code: "SYS_01 // CORE_ERP",
  },
  {
    icon: Monitor,
    title: "Gas Station POS & ATG",
    desc: "High-volume forecourt touch screen checkout and direct MODBUS dispenser wiring. Instantly transmits forecourt data to headquarters without human intervention.",
    href: "/products/gas-station-pos",
    code: "SYS_02 // FORECOURT_POS",
  },
  {
    icon: Gauge,
    title: "Fuel Quotas & Fleet Limits",
    desc: "Automated RFID employee allocations and digital fleet cards. Instantly enforces usage policies and eliminates unauthorized internal fuel shrinkage.",
    href: "/products/fuel-card-fleet-card-system",
    code: "SYS_03 // QUOTA_ENFORCE",
  },
  {
    icon: Truck,
    title: "Fleet Dispatch & Tracking",
    desc: "Live GPS tracking and automated depot-to-site route planning. Monitors tanker drops to ensure product arrives safely at its destination.",
    href: "/products/delivery-dispatch-route-optimisation",
    code: "SYS_04 // FLEET_DISPATCH",
  },
];

export default function HomeSolutionsSplit() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-8 py-24 md:py-32">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Left Side: Sticky Narrative */}
        <div className="lg:w-5/12">
          <div className="sticky top-32">
            <div className="font-mono text-[12px] text-orange tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-orange"></span>
              The Resolution
            </div>
            
            <h2 className="font-medium text-[36px] md:text-[48px] text-white leading-[1.1] tracking-[-0.02em] mb-6">
              One central nervous system for your fuel network.
            </h2>
            
            <p className="text-[18px] text-fog leading-relaxed font-light mb-8">
              Glaban replaces fragmented, vulnerable processes with deeply integrated operational modules. From the forecourt to the boardroom, we unify your data.
            </p>

            <Link 
              href="/products" 
              className="inline-flex items-center justify-center h-12 px-8 rounded bg-white text-void font-medium text-[15px] transition-colors hover:bg-fog"
            >
              Explore All Systems
            </Link>
          </div>
        </div>

        {/* Right Side: Scrolling Modules */}
        <div className="lg:w-7/12 flex flex-col gap-8 lg:pt-32">
          {solutionsData.map((item) => (
            <Link key={item.title} href={item.href} className="group outline-none">
              <Card className="bg-carbon border border-graphite rounded-xl p-8 transition-all hover:bg-obsidian hover:border-smoke overflow-hidden relative group">
                
                {/* Blueprint Background SVG */}
                <div className="absolute top-0 right-0 w-64 h-full opacity-5 pointer-events-none transition-opacity duration-500 group-hover:opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M50,20 L50,80 M20,50 L80,50" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                  <div className="w-14 h-14 shrink-0 bg-void border border-graphite rounded-lg flex items-center justify-center text-[20px] text-fog group-hover:text-white transition-colors">
                    <item.icon />
                  </div>
                  
                  <div>
                    <div className="font-mono text-[10px] text-orange tracking-widest mb-3 uppercase">
                      {item.code}
                    </div>
                    <h3 className="font-medium text-[22px] text-white leading-tight tracking-[-0.01em] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-fog leading-relaxed m-0 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
