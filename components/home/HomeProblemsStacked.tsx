"use client";

import React from "react";
import { Card } from "@/components/ui/card";

interface ProblemItem {
  number: string;
  title: string;
  desc: string;
  domain: string;
}

const problemsData: ProblemItem[] = [
  {
    number: "01",
    title: "Manual Sales Tracking",
    desc: "Relying on paper logs and disconnected Excel sheets creates a massive bottleneck at the forecourt, delaying reconciliation and blinding management to real-time performance.",
    domain: "FORECOURT BOTTLENECK",
  },
  {
    number: "02",
    title: "Weak Stock Control",
    desc: "Without automated tank gauging and unified inventory software, fuel disappears into thin air. Shrinkage becomes an accepted cost of doing business rather than an actionable metric.",
    domain: "INVENTORY SHRINKAGE",
  },
  {
    number: "03",
    title: "Uncontrolled Employee Fuel Usage",
    desc: "Unenforced quotas and manual authorization for company vehicles lead to massive internal fuel waste. Without RFID or digital fleet cards, every drop is a liability.",
    domain: "INTERNAL FUEL WASTE",
  },
  {
    number: "04",
    title: "Paper-based Delivery Records",
    desc: "Relying on physical paperwork for dispatch and proof of delivery slows down operations, increases billing errors, and leaves managers guessing about tanker locations.",
    domain: "LOGISTICS BLINDSPOT",
  },
  {
    number: "05",
    title: "Poor Branch Visibility",
    desc: "Headquarters remains completely blind to operational health across branches and remote depots until the end of the month, turning proactive management into reactive firefighting.",
    domain: "MULTI-SITE DISCONNECT",
  },
  {
    number: "06",
    title: "No Central ERP Reporting",
    desc: "Financial data lives in silos. The lack of an integrated ERP means days spent manually consolidating reports instead of analyzing profitability.",
    domain: "FINANCIAL BLINDSPOT",
  },
  {
    number: "07",
    title: "Weak Cybersecurity",
    desc: "Outdated software and exposed networks leave critical operational technology (OT) and IT infrastructure vulnerable to devastating cyber attacks.",
    domain: "OT & IT EXPOSURE",
  },
  {
    number: "08",
    title: "Poor Physical Security",
    desc: "Inadequate CCTV and physical access controls at remote sites and forecourts increase the risk of theft, vandalism, and safety incidents.",
    domain: "SITE VULNERABILITY",
  },
];

export default function HomeProblemsStacked() {
  return (
    <div className="w-full max-w-[800px] mx-auto pb-32 pt-8">
      <div className="flex flex-col relative">
        {problemsData.map((item, index) => (
          <div
            key={item.number}
            className="sticky w-full mb-12"
            style={{
              top: `calc(15vh + ${index * 15}px)`,
            }}
          >
            <Card className="bg-obsidian border border-graphite rounded-xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row gap-6 relative overflow-hidden transition-all duration-300 hover:border-smoke">
              
              {/* Background Blueprint SVG (Industrial Feel) */}
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,20 L100,20 M0,40 L100,40 M0,60 L100,60 M0,80 L100,80" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M20,0 L20,100 M40,0 L40,100 M60,0 L60,100 M80,0 L80,100" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="80" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M80,20 L100,0" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Number Indicator */}
              <div className="shrink-0 flex items-start">
                <div className="font-mono text-[36px] md:text-[48px] font-light text-graphite leading-none tracking-tighter">
                  {item.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 z-10 w-full">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-coral-red bg-coral-red/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {item.domain}
                  </span>
                </div>
                
                <h3 className="font-medium text-[20px] md:text-[24px] text-white leading-tight tracking-[-0.01em] m-0">
                  {item.title}
                </h3>
                
                <p className="text-[14px] md:text-[15px] text-fog leading-relaxed m-0 font-light">
                  {item.desc}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
