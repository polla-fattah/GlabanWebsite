"use client";

import React from "react";
import { Card } from "@/components/ui/card";

interface ProblemItem {
  icon: string;
  text: string;
  domain: string;
  code: string;
}

const problemsData: ProblemItem[] = [
  {
    icon: "fa-solid fa-clipboard-list",
    text: "Manual sales tracking",
    domain: "FORECOURT BOTTLENECK",
    code: "ERR_SALES",
  },
  {
    icon: "fa-solid fa-boxes-stacked",
    text: "Weak stock control",
    domain: "INVENTORY SHRINKAGE",
    code: "ERR_STOCK",
  },
  {
    icon: "fa-solid fa-gas-pump",
    text: "Uncontrolled employee fuel usage",
    domain: "INTERNAL FUEL WASTE",
    code: "ERR_QUOTA",
  },
  {
    icon: "fa-solid fa-file-invoice",
    text: "Paper-based delivery records",
    domain: "LOGISTICS BLINDSPOT",
    code: "ERR_DISPATCH",
  },
  {
    icon: "fa-solid fa-building-circle-exclamation",
    text: "Poor branch visibility",
    domain: "MULTI-SITE DISCONNECT",
    code: "ERR_GRID",
  },
  {
    icon: "fa-solid fa-chart-pie",
    text: "No central ERP reporting",
    domain: "FINANCIAL BLINDSPOT",
    code: "ERR_REPORT",
  },
  {
    icon: "fa-solid fa-unlock-keyhole",
    text: "Weak cybersecurity",
    domain: "OT & IT EXPOSURE",
    code: "ERR_CYBER",
  },
  {
    icon: "fa-solid fa-video-slash",
    text: "Poor physical security",
    domain: "SITE VULNERABILITY",
    code: "ERR_CCTV",
  },
];

export default function HomeProblemsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {problemsData.map((item, idx) => (
        <Card
          key={item.text}
          className="group bg-carbon border border-graphite hover:border-smoke rounded-lg p-6 shadow-none transition-all flex flex-col justify-between gap-6 h-full overflow-hidden"
        >
          {/* Main Body: Icon + Problem Statement */}
          <div className="flex flex-col gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-obsidian border border-graphite group-hover:border-smoke text-coral-red transition-colors flex items-center justify-center text-[18px] shrink-0">
              <i className={item.icon} />
            </div>
            <h3 className="font-medium text-[16px] text-white m-0 leading-[1.4] tracking-[-0.01em]">
              {item.text}
            </h3>
          </div>

          {/* Bottom Domain Diagnostic Pill */}
          <div className="pt-3.5 border-t border-graphite">
            <div className="font-mono text-[10.5px] text-fog bg-obsidian border border-graphite px-2.5 py-1 rounded-lg uppercase tracking-wider block text-center truncate">
              {item.domain}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
