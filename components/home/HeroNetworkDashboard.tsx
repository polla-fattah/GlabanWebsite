"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TabKey = "forecourt" | "quota" | "surveillance";

interface TabOption {
  id: TabKey;
  label: string;
  icon: string;
  code: string;
}

const tabs: TabOption[] = [
  {
    id: "forecourt",
    label: "Forecourt POS & ATG",
    icon: "fa-solid fa-gas-pump",
    code: "MODBUS_01",
  },
  {
    id: "quota",
    label: "Fuel Quota & Fleet",
    icon: "fa-solid fa-id-card",
    code: "RFID_SYNC",
  },
  {
    id: "surveillance",
    label: "CCTV Security Grid",
    icon: "fa-solid fa-video",
    code: "EDGE_AI_32",
  },
];

export default function HeroNetworkDashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>("forecourt");

  return (
    <div className="relative w-full">
      <Card className="bg-[#0f1011] border border-graphite rounded-lg p-6 shadow-none text-white overflow-hidden flex flex-col gap-6">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-graphite gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#e4f222] animate-pulse shrink-0" />
            <span className="font-medium text-[14px] text-white tracking-[-0.01em]">
              Network Command Center — Live
            </span>
            <span className="text-[10px] font-mono text-[#8a8f98] bg-[#161718] border border-graphite px-2 py-0.5 rounded-lg">
              GLB-SYS-01
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#e4f222] bg-[#161718] border border-graphite px-2.5 py-1 rounded-lg">
            <i className="fa-solid fa-circle-check text-[10px]" />
            <span>ALL NODES ONLINE</span>
          </div>
        </div>

        {/* Interactive Mode Navigation Tabs */}
        <div className="grid grid-cols-3 gap-2 bg-[#161718] p-1.5 border border-graphite rounded-lg">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={cn(
                  "py-2 px-2.5 rounded-lg font-mono text-[11px] transition-all flex items-center justify-center gap-2 border text-center cursor-pointer outline-none",
                  isSelected
                    ? "bg-[#0f1011] border-[#383b3f] text-white font-medium"
                    : "bg-transparent border-transparent text-[#8a8f98] hover:text-[#d0d6e0] hover:bg-[#0f1011]/50",
                )}
              >
                <i
                  className={cn(
                    tab.icon,
                    isSelected ? "text-[#e4f222]" : "text-[#8a8f98]",
                  )}
                />
                <span className="hidden sm:inline truncate">{tab.label}</span>
                <span className="sm:hidden truncate">
                  {tab.id.toUpperCase()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Telemetry Viewport */}
        <div className="min-h-[220px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeTab === "forecourt" && (
              <motion.div
                key="forecourt"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#161718] border border-graphite rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-mono text-[#8a8f98] uppercase tracking-wider">
                        STATIONS ONLINE
                      </span>
                      <span className="font-mono text-[10px] text-[#e4f222]">
                        95.4%
                      </span>
                    </div>
                    <div className="text-[26px] font-semibold text-white tracking-[-0.02em] font-mono">
                      42 / 44
                    </div>
                    <div className="text-[11px] text-[#8a8f98] font-mono mt-1">
                      KRG Active Grid Branches
                    </div>
                  </div>

                  <div className="bg-[#161718] border border-graphite rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-mono text-[#8a8f98] uppercase tracking-wider">
                        DISPENSERS WIRED
                      </span>
                      <span className="font-mono text-[10px] text-[#02b8cc]">
                        MODBUS
                      </span>
                    </div>
                    <div className="text-[26px] font-semibold text-white tracking-[-0.02em] font-mono">
                      1,240
                    </div>
                    <div className="text-[11px] text-[#8a8f98] font-mono mt-1">
                      Pulse &amp; ATG Sensors Active
                    </div>
                  </div>
                </div>

                <div className="bg-[#161718] border border-graphite rounded-lg p-4">
                  <div className="flex justify-between items-center text-[12px] font-mono mb-2">
                    <span className="text-[#8a8f98] uppercase">
                      LIVE FORECOURT THROUGHPUT LOAD
                    </span>
                    <span className="text-white font-medium">
                      318 Deliveries Today
                    </span>
                  </div>
                  <div className="h-1.5 rounded-lg bg-graphite overflow-hidden">
                    <div className="w-[82%] h-full bg-[#02b8cc]" />
                  </div>
                  <div className="flex justify-between items-center text-[10.5px] font-mono text-[#8a8f98] mt-2 pt-2 border-t border-graphite">
                    <span>TLS 1.3 ENCRYPTED EDGE BUFFER</span>
                    <span className="text-[#02b8cc]">&lt; 15ms Latency</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "quota" && (
              <motion.div
                key="quota"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#161718] border border-graphite rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-mono text-[#8a8f98] uppercase tracking-wider">
                        FLEET VEHICLES ENROLLED
                      </span>
                      <span className="font-mono text-[10px] text-[#e4f222]">
                        RFID
                      </span>
                    </div>
                    <div className="text-[26px] font-semibold text-white tracking-[-0.02em] font-mono">
                      840+
                    </div>
                    <div className="text-[11px] text-[#8a8f98] font-mono mt-1">
                      Automated Limit Verification
                    </div>
                  </div>

                  <div className="bg-[#161718] border border-graphite rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-mono text-[#8a8f98] uppercase tracking-wider">
                        POS AUTH SPEED
                      </span>
                      <span className="font-mono text-[10px] text-[#02b8cc]">
                        INSTANT
                      </span>
                    </div>
                    <div className="text-[26px] font-semibold text-white tracking-[-0.02em] font-mono">
                      &lt; 1.2s
                    </div>
                    <div className="text-[11px] text-[#8a8f98] font-mono mt-1">
                      Touch &amp; Barcode Checkout
                    </div>
                  </div>
                </div>

                <div className="bg-[#161718] border border-graphite rounded-lg p-4">
                  <div className="flex justify-between items-center text-[12px] font-mono mb-2">
                    <span className="text-[#8a8f98] uppercase">
                      MONTHLY FUEL QUOTA ALLOCATION
                    </span>
                    <span className="text-white font-medium">
                      76.4% Allocated
                    </span>
                  </div>
                  <div className="h-1.5 rounded-lg bg-graphite overflow-hidden">
                    <div className="w-[76.4%] h-full bg-[#02b8cc]" />
                  </div>
                  <div className="flex justify-between items-center text-[10.5px] font-mono text-[#8a8f98] mt-2 pt-2 border-t border-graphite">
                    <span>OFFLINE CACHE STORAGE ACTIVE</span>
                    <span className="text-[#e4f222]">
                      30-Day Buffer Protected
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "surveillance" && (
              <motion.div
                key="surveillance"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#161718] border border-graphite rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-mono text-[#8a8f98] uppercase tracking-wider">
                        CCTV PERIMETER GRID
                      </span>
                      <span className="font-mono text-[10px] text-[#e4f222]">
                        EDGE AI
                      </span>
                    </div>
                    <div className="text-[26px] font-semibold text-white tracking-[-0.02em] font-mono">
                      32 LIVE
                    </div>
                    <div className="text-[11px] text-[#8a8f98] font-mono mt-1">
                      Forecourt &amp; Tanker Feeds
                    </div>
                  </div>

                  <div className="bg-[#161718] border border-graphite rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-mono text-[#8a8f98] uppercase tracking-wider">
                        SECURITY STATUS
                      </span>
                      <span className="font-mono text-[10px] text-[#02b8cc]">
                        SECURE
                      </span>
                    </div>
                    <div className="text-[26px] font-semibold text-white tracking-[-0.02em] font-mono">
                      No Threats
                    </div>
                    <div className="text-[11px] text-[#8a8f98] font-mono mt-1">
                      OT Network Segmented
                    </div>
                  </div>
                </div>

                <div className="bg-[#161718] border border-graphite rounded-lg p-4">
                  <div className="flex justify-between items-center text-[12px] font-mono mb-2">
                    <span className="text-[#8a8f98] uppercase">
                      VIDEO &amp; AUDIT LOG RETENTION
                    </span>
                    <span className="text-white font-medium">
                      90 Days Encrypted
                    </span>
                  </div>
                  <div className="h-1.5 rounded-lg bg-graphite overflow-hidden">
                    <div className="w-[100%] h-full bg-[#02b8cc]" />
                  </div>
                  <div className="flex justify-between items-center text-[10.5px] font-mono text-[#8a8f98] mt-2 pt-2 border-t border-graphite">
                    <span>LOCAL NVR + CLOUD MIRROR</span>
                    <span className="text-[#02b8cc]">Zero Data Shrinkage</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Docked System Uptime Footer Bar */}
        <div className="bg-[#161718] border border-graphite rounded-lg p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0f1011] border border-graphite flex items-center justify-center text-sm text-[#e4f222] shrink-0">
              <i className="fa-solid fa-server" />
            </div>
            <div>
              <div className="text-[10px] text-[#8a8f98] uppercase tracking-wider">
                REGIONAL INFRASTRUCTURE SLA
              </div>
              <div className="text-[13px] font-semibold text-white flex items-center gap-2">
                <span>99.99% SYSTEM UPTIME</span>
                <span className="text-[#e4f222] text-[10px] font-normal border border-graphite bg-[#0f1011] px-1.5 py-0.5 rounded-lg">
                  GUARANTEED
                </span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-[#8a8f98] flex items-center gap-2 self-end sm:self-center">
            <i className="fa-solid fa-location-dot text-[#02b8cc]" />
            <span>Active Centers: Erbil, Sulaymaniyah, Dohuk</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
