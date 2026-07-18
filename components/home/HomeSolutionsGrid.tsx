"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SolutionItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
  code: string;
  spanClass: string;
}

const solutionsData: SolutionItem[] = [
  {
    icon: "fa-solid fa-calculator",
    title: "Fuel ERP Platform",
    desc: "Centralised financial accounting, multi-branch inventory reconciliation, and automated invoicing built specifically for KRG fuel leaders.",
    href: "/products/fuel-erp",
    code: "SYS_01 / CORE_ERP",
    spanClass: "lg:col-span-3 md:col-span-2 col-span-1",
  },
  {
    icon: "fa-solid fa-desktop",
    title: "Gas Station POS & ATG",
    desc: "High-volume forecourt touch screen checkout, instant shift cash settlement, and direct MODBUS dispenser & tank gauge wiring.",
    href: "/products/gas-station-pos",
    code: "SYS_02 / FORECOURT_POS",
    spanClass: "lg:col-span-3 md:col-span-2 col-span-1",
  },
  {
    icon: "fa-solid fa-gauge-high",
    title: "Fuel Quotas & Fleet Limits",
    desc: "Automated RFID employee and vehicle fuel allocations, automated limit verification, and zero internal fuel shrinkage.",
    href: "/products/fuel-card-fleet-card-system",
    code: "SYS_03 / QUOTA_ENFORCE",
    spanClass: "lg:col-span-2 md:col-span-1 col-span-1",
  },
  {
    icon: "fa-solid fa-fire-flame-simple",
    title: "Propane & Bulk Gas System",
    desc: "Industrial tonnage contract management, cylinder deposit tracking, and residential propane delivery scheduling.",
    href: "/products/bulk-gas-delivery-system",
    code: "SYS_04 / BULK_PROPANE",
    spanClass: "lg:col-span-2 md:col-span-1 col-span-1",
  },
  {
    icon: "fa-solid fa-truck-fast",
    title: "Fleet Dispatch & Tracking",
    desc: "Live GPS tanker tracking, automated depot-to-site route planning, and digital proof-of-delivery driver workflows.",
    href: "/products/delivery-dispatch-route-optimisation",
    code: "SYS_05 / FLEET_DISPATCH",
    spanClass: "lg:col-span-2 md:col-span-2 col-span-1",
  },
];

export default function HomeSolutionsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      {solutionsData.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            "group no-underline block h-full outline-none",
            item.spanClass,
          )}
        >
          <Card className="glb-card-link bg-obsidian border border-graphite group-hover:border-smoke rounded-lg p-6.5 shadow-none transition-all flex flex-col justify-between gap-6 h-full overflow-hidden">
            <div className="flex flex-col gap-4">
              {/* Top Header: System Code + Connected Verification Pill */}
              <div className="flex items-center justify-between border-b border-graphite pb-3.5">
                <span className="font-mono text-[11px] text-fog uppercase tracking-wider">
                  {item.code}
                </span>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-orange bg-carbon border border-graphite px-2 py-0.5 rounded-lg">
                  <i className="fa-solid fa-circle-check text-[10px]" />
                  <span>CONNECTED</span>
                </div>
              </div>

              {/* Icon & Title */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-carbon border border-graphite group-hover:border-smoke text-fog group-hover:text-white transition-colors flex items-center justify-center text-[20px] shrink-0">
                  <i className={item.icon} />
                </div>
                <div>
                  <h3 className="font-medium text-[18px] text-white m-0 mb-1.5 leading-snug tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-fog leading-[1.6] m-0 font-normal line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Action Strip */}
            <div className="pt-4 border-t border-graphite flex items-center justify-between">
              <span className="font-mono text-[11px] text-fog group-hover:text-mist transition-colors flex items-center gap-2">
                <span>Explore System Blueprint</span>
                <i className="fa-solid fa-arrow-right text-[10px] text-orange group-hover:text-orangeLight transition-colors" />
              </span>
              <span className="font-mono text-[10px] text-ash bg-carbon border border-graphite px-2 py-0.5 rounded-lg">
                MODULAR
              </span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
