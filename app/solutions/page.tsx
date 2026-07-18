import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { solutionItems } from "@/lib/data/solutions";

import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Enterprise Solutions by Operation Size & Architecture",
  description:
    "Tailored fuel & energy technology architectures for operations of all scales: Single Station Automation, Multi-Site Chain Management, Regional Refinery & Depot SCADA, and Enterprise Fleet Operations.",
  keywords: [
    "Single gas station POS automation",
    "Multi-site fuel chain management",
    "Refinery SCADA software",
    "Bulk fuel depot automation",
    "Enterprise fleet card solutions",
    "Fuel terminal management system",
  ],
  alternates: {
    canonical: "https://glaban.com/solutions",
  },
  openGraph: {
    title: "Enterprise Solutions by Operation Size | Glaban Fuel Platform",
    description:
      "Tailored fuel & energy technology architectures for single stations, multi-site chains, refineries, depots, and enterprise fleet networks.",
    url: "https://glaban.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="bg-void min-h-screen">
      <Header />
      <PageHero
        eyebrow="Solutions"
        title="Tell us your problem. We'll show you the solution."
        subtitle="Browse by the challenge you're facing rather than product names."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 flex flex-col">
        {solutionItems.map((it) => (
          <div
            key={it.problem}
            className="border-t border-graphite py-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start"
          >
            <div className="md:w-1/2">
              <div className="text-[11px] font-mono text-fog tracking-[0.15em] uppercase mb-4">
                The Problem
              </div>
              <div className="font-medium text-[24px] md:text-[28px] text-white leading-[1.3] tracking-[-0.01em]">
                {it.problem}
              </div>
            </div>
            
            <div className="md:w-1/2 flex flex-col h-full">
              <div className="text-[11px] font-mono text-orange tracking-[0.15em] uppercase mb-4">
                The Solution
              </div>
              <div className="text-[16px] md:text-[18px] text-mist leading-[1.6] font-light mb-8">
                {it.solution}
              </div>
              <Link
                href={it.href}
                className="inline-flex items-center gap-2 font-medium text-[14px] text-white hover:text-orange transition-colors mt-auto"
              >
                Explore Solution <ArrowRight className="text-[12px]" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
