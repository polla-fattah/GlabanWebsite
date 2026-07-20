"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { industries } from "@/lib/data/industries";
import { cn } from "@/lib/utils";
import { ExternalLink, Compass, ArrowRight } from "lucide-react";

export default function HomeIndustriesGrid() {
  return (
    <div className="flex flex-col gap-10">
      {/* 4-Row Balanced Bento Grid (10 Industries Direct Links) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((item, idx) => {
          // Row 1 anchor (idx === 0) & Row 4 anchor (idx === 9) span 2 cols on lg screens for balance
          const isFeaturedSpan = idx === 0 || idx === 9;
          const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

          return (
            <Link
              key={item.name}
              href={`/industries#${slug}`}
              className={cn(
                "group no-underline block h-full outline-none",
                isFeaturedSpan ? "lg:col-span-2" : "col-span-1",
              )}
            >
              <Card className="glb-card-link bg-carbon border border-graphite group-hover:border-smoke rounded-lg p-6 shadow-none transition-all flex flex-col justify-between h-full">
                <div className="flex flex-col gap-4">
                  {/* Card Header: Icon + Sector Code + Arrow */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-obsidian border border-graphite group-hover:border-smoke flex items-center justify-center text-base text-fog group-hover:text-white transition-colors shrink-0">
                        <item.icon />
                      </div>
                      <span className="font-mono text-[10.5px] text-fog bg-obsidian border border-graphite px-2 py-0.5 rounded-lg uppercase tracking-wider">
                        SECTOR_{String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="w-7 h-7 rounded-lg bg-obsidian border border-graphite group-hover:border-smoke flex items-center justify-center text-[11px] text-fog group-hover:text-mist transition-colors">
                      <ExternalLink />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-medium text-[16.5px] text-white m-0 mb-1.5 tracking-[-0.01em] group-hover:text-mist transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[13.5px] text-fog leading-[1.55] m-0 font-normal line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Bottom Action Footer Strip */}
      <div className="bg-obsidian border border-graphite rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-carbon border border-graphite flex items-center justify-center text-sm text-orange shrink-0">
            <Compass />
          </div>
          <div>
            <div className="text-[13px] font-medium text-white">
              Need a tailored system architecture for your specific fuel
              infrastructure?
            </div>
            <div className="text-[11px] text-fog">
              We scope, build, wire, and deploy custom hardware-integrated
              platforms across KRG.
            </div>
          </div>
        </div>

        <Link
          href="/industries"
          className="bg-orange hover:bg-orangeDark text-white font-mono font-medium text-[12px] uppercase tracking-wider px-5 py-2.5 rounded-lg no-underline transition-all shrink-0 flex items-center gap-2"
        >
          <span>See All Sector Solutions</span>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
