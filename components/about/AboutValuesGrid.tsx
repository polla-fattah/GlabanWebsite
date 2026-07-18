import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Target, Compass, MapPin, Blocks, GitBranch, FileSignature, Fuel, Settings2, Headset, Lock, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueItem {
  name: string;
  code: string;
  desc: string;
  icon: LucideIcon;
}

const valuesData: ValueItem[] = [
  {
    name: "Reliability & Uptime",
    code: "VAL_01",
    desc: "Hardware-level offline storage ensuring forecourt operations run uninterrupted during internet or power grid cutoffs.",
    icon: ShieldCheck,
  },
  {
    name: "Zero-Trust Security",
    code: "VAL_02",
    desc: "OT network segmentation, TLS 1.3 encryption, and strict role-based access control protecting critical energy infrastructure.",
    icon: Lock,
  },
  {
    name: "Practical Automation",
    code: "VAL_03",
    desc: "Replacing clipboards, physical dip-sticks, and manual cash reconciliations with automated sensor and touch POS workflows.",
    icon: Settings2,
  },
  {
    name: "Long-Term Support",
    code: "VAL_04",
    desc: "We do not build and walk away. We provide ongoing maintenance, calibration, and 24/7 emergency engineering dispatch.",
    icon: Headset,
  },
  {
    name: "Sector Understanding",
    code: "VAL_05",
    desc: "Built exclusively by engineers who understand fuel evaporation curves, dispenser pulse protocols, and KRG tax regulations.",
    icon: Fuel,
  },
  {
    name: "Total Transparency",
    code: "VAL_06",
    desc: "Clear SLAs, honest hardware scoping, and open architecture documentation with zero hidden vendor lock-ins.",
    icon: FileSignature,
  },
  {
    name: "Local KRG Expertise",
    code: "VAL_07",
    desc: "Headquartered directly in the region with immediate on-site field support across Erbil, Sulaymaniyah, Dohuk, and Kirkuk.",
    icon: MapPin,
  },
  {
    name: "Continuous Evolution",
    code: "VAL_08",
    desc: "Regular software updates, AI surveillance upgrades, and hardware compatibility improvements included across your lifecycle.",
    icon: GitBranch,
  },
];

export default function AboutValuesGrid() {
  return (
    <div className="flex flex-col gap-12">
      {/* Bento Grid: Mission, Vision, and Footprint */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mission Card */}
        <Card className="bg-carbon border border-graphite rounded-lg p-8 flex flex-col justify-between shadow-none hover:border-smoke transition-colors">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[12px] font-mono font-medium text-fog uppercase tracking-wider">
                OUR ENGINEERING MISSION
              </span>
              <Target className="text-[15px] text-orange" />
            </div>
            <h3 className="font-medium text-[20px] text-white leading-[1.4] mb-4 tracking-[-0.01em]">
              Modernising regional energy infrastructure through reliable,
              hardware-integrated software.
            </h3>
            <p className="text-[14.5px] text-fog leading-[1.65] m-0 font-normal">
              We eliminate operational shrinkage, manual paperwork, and security
              vulnerabilities by uniting custom software, OT security, and
              forecourt hardware into single cohesive systems.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-graphite flex items-center justify-between font-mono text-[11px] text-ash">
            <span>SCOPE: OIL, GAS &amp; RETAIL</span>
            <span className="text-fog">100% PURPOSE-BUILT</span>
          </div>
        </Card>

        {/* Vision Card */}
        <Card className="bg-carbon border border-graphite rounded-lg p-8 flex flex-col justify-between shadow-none hover:border-smoke transition-colors">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[12px] font-mono font-medium text-fog uppercase tracking-wider">
                LONG-TERM STRATEGIC VISION
              </span>
              <Compass className="text-[15px] text-orange" />
            </div>
            <h3 className="font-medium text-[20px] text-white leading-[1.4] mb-4 tracking-[-0.01em]">
              To become the foundational operating system for energy
              distribution across KRG and Iraq.
            </h3>
            <p className="text-[14.5px] text-fog leading-[1.65] m-0 font-normal">
              By delivering zero-downtime reliability and verifiable financial
              accuracy, we establish the standard for how fuel is tracked,
              protected, and monetized across the region.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-graphite flex items-center justify-between font-mono text-[11px] text-ash">
            <span>STABILITY GUARANTEE</span>
            <span className="text-fog">REGIONAL LEADER</span>
          </div>
        </Card>

        {/* Regional Footprint & Metrics Card */}
        <Card className="bg-carbon border border-graphite rounded-lg p-8 flex flex-col justify-between shadow-none hover:border-smoke transition-colors">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[12px] font-mono font-medium text-fog uppercase tracking-wider">
                REGIONAL DEPLOYMENT FOOTPRINT
              </span>
              <span className="font-mono text-[11px] text-ash bg-obsidian px-2 py-0.5 rounded-lg border border-graphite">
                KRG_HQ
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-obsidian border border-graphite rounded-lg p-4">
                <div className="font-mono text-[24px] font-semibold text-white mb-1">
                  1,200+
                </div>
                <div className="text-[11.5px] text-fog leading-tight font-mono">
                  Dispensers Wired &amp; Calibrated
                </div>
              </div>
              <div className="bg-obsidian border border-graphite rounded-lg p-4">
                <div className="font-mono text-[24px] font-semibold text-white mb-1">
                  &lt; 3s
                </div>
                <div className="text-[11.5px] text-fog leading-tight font-mono">
                  Forecourt POS Checkout Speed
                </div>
              </div>
              <div className="bg-obsidian border border-graphite rounded-lg p-4">
                <div className="font-mono text-[24px] font-semibold text-white mb-1">
                  30 Days
                </div>
                <div className="text-[11.5px] text-fog leading-tight font-mono">
                  Offline Buffer Storage Capacity
                </div>
              </div>
              <div className="bg-obsidian border border-graphite rounded-lg p-4">
                <div className="font-mono text-[24px] font-semibold text-white mb-1">
                  99.99%
                </div>
                <div className="text-[11.5px] text-fog leading-tight font-mono">
                  Guaranteed Operational SLA
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-graphite flex items-center justify-between text-[12px] font-mono text-fog">
            <span>Active Centers: Erbil, Sulaymaniyah, Dohuk</span>
            <MapPin className="text-orange" />
          </div>
        </Card>
      </div>

      {/* Static Core Values Showcase */}
      <div>
        <div className="mb-6 pb-4 border-b border-graphite">
          <div className="flex items-center gap-2 font-mono text-[11px] text-fog uppercase tracking-wider mb-1">
            <Blocks className="text-orange" />
            <span>ENGINEERING PRINCIPLES</span>
          </div>
          <h3 className="font-medium text-[24px] text-white m-0 tracking-[-0.015em]">
            The 8 Pillars of Glaban Engineering
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valuesData.map((val) => (
            <Card
              key={val.name}
              className="bg-carbon border border-graphite rounded-lg p-6 flex flex-col justify-between shadow-none min-h-[155px]"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="w-9 h-9 rounded-lg bg-obsidian border border-graphite flex items-center justify-center text-sm">
                    <val.icon className={cn("text-orange")} />
                  </div>
                  <span className="font-mono text-[10px] text-ash bg-obsidian px-2 py-0.5 rounded-lg border border-graphite">
                    {val.code}
                  </span>
                </div>
                <div className="font-medium text-[16px] text-white mb-2 leading-snug tracking-[-0.01em]">
                  {val.name}
                </div>
                <p className="text-[13px] text-fog leading-[1.55] m-0 font-normal">
                  {val.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
