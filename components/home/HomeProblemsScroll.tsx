import type { LucideIcon } from 'lucide-react';
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight, Boxes, Building, ClipboardList, Fuel, Unlock, VideoOff } from "lucide-react";

interface ProblemItem {
  icon: LucideIcon;
  text: string;
  domain: string;
  solution: string;
}

const problemsData: ProblemItem[] = [
  {
    icon: ClipboardList,
    text: "Manual sales tracking and disjointed spreadsheets",
    domain: "FORECOURT BOTTLENECK",
    solution: "Gas Station POS",
  },
  {
    icon: Boxes,
    text: "Weak stock control leading to inventory shrinkage",
    domain: "INVENTORY SHRINKAGE",
    solution: "Fuel ERP Platform",
  },
  {
    icon: Fuel,
    text: "Uncontrolled employee fuel usage and quotas",
    domain: "INTERNAL FUEL WASTE",
    solution: "Fleet Card System",
  },
  {
    icon: Building,
    text: "Poor visibility across multiple branches and depots",
    domain: "MULTI-SITE DISCONNECT",
    solution: "Location-Based Task Mgmt",
  },
  {
    icon: Unlock,
    text: "Weak cybersecurity exposing critical infrastructure",
    domain: "OT & IT EXPOSURE",
    solution: "Cybersecurity",
  },
  {
    icon: VideoOff,
    text: "Poor physical security and surveillance",
    domain: "SITE VULNERABILITY",
    solution: "CCTV & Physical Security",
  },
];

export default function HomeProblemsScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-void">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Intro text on the left that fades out or stays sticky */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute left-8 md:left-16 lg:left-32 top-1/4 z-10 max-w-[400px] pointer-events-none"
        >
          <div className="text-[12px] font-medium text-fog tracking-[0.08em] uppercase mb-3">
            The Problem
          </div>
          <h2 className="font-medium text-[36px] md:text-[44px] text-white mb-4 tracking-[-0.022em] leading-[1.15]">
            Fuel operations run on disconnected systems
          </h2>
          <p className="text-[16px] text-fog leading-[1.6]">
            Manual processes and weak security create compounding risk across your entire network.
          </p>
        </motion.div>

        {/* The scrolling cards */}
        <motion.div style={{ x }} className="flex gap-6 pl-[40vw] md:pl-[35vw] lg:pl-[30vw] pt-32">
          {problemsData.map((item, idx) => (
            <Card
              key={idx}
              className="w-[320px] md:w-[380px] shrink-0 bg-carbon border border-graphite rounded-xl p-8 flex flex-col justify-between h-[420px] relative overflow-hidden group"
            >
              {/* Abstract Graphic Background (Geometric Lines) */}
              <div className="absolute right-[-40px] top-[-40px] w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" d="M10,190 L50,150 L90,170 L150,80 L190,100" />
                    <circle cx="50" cy="150" r="4" fill="currentColor" />
                    <circle cx="90" cy="170" r="4" fill="currentColor" />
                    <circle cx="150" cy="80" r="4" fill="currentColor" />
                    <path fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,4" d="M150,80 L150,190" />
                    <path fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,4" d="M90,170 L90,190" />
                 </svg>
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-obsidian border border-graphite text-coral-red flex items-center justify-center text-[20px] mb-8">
                  <item.icon />
                </div>
                
                <div className="font-mono text-[11px] text-coral-red/80 tracking-wider mb-3">
                  {item.domain}
                </div>
                
                <h3 className="font-medium text-[20px] text-white leading-[1.3] tracking-[-0.01em]">
                  {item.text}
                </h3>
              </div>

              <div className="pt-6 border-t border-graphite mt-auto">
                <div className="text-[12px] text-fog mb-2">Solved by:</div>
                <div className="font-medium text-[14px] text-orange flex items-center gap-2">
                  <ArrowRight className="text-[12px]" />
                  {item.solution}
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
