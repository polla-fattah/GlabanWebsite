import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/data/caseStudies";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Customer Success Stories",
  description:
    "Explore real-world deployments and verifiable operational metrics across refineries, retail gas station chains, and bulk LPG distributors powered by Glaban.",
  keywords: [
    "Fuel software case studies",
    "Gas station POS customer stories",
    "Forecourt automation success metrics",
    "Refinery SCADA case study KRG",
    "Bulk propane delivery optimization",
    "Petroleum software ROI",
  ],
  alternates: {
    canonical: "https://glaban.com/case-studies",
  },
  openGraph: {
    title:
      "Case Studies & Customer Success Stories | Glaban Enterprise Fuel Platform",
    description:
      "Explore real-world fuel & energy deployments with measurable operational metrics across refineries, retail networks, and bulk fuel distributors.",
    url: "https://glaban.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#08090a] min-h-screen">
      <Header />
      <PageHero
        eyebrow="Customers & Case Studies"
        title="Real problems, real deployments"
        subtitle="Case studies are presented anonymously where customer names are not yet approved for publication."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((c) => (
          <Card
            key={c.title}
            className="bg-[#0f1011] border border-graphite rounded-lg p-8 flex flex-col shadow-none hover:border-[#383b3f] transition-all"
          >
            <div className="flex gap-2.5 mb-4">
              <Badge className="bg-white/5 hover:bg-white/10 text-[#8a8f98] border border-graphite text-[12px] font-normal px-3 py-1 rounded-full shadow-none transition-colors">
                {c.industry}
              </Badge>
            </div>
            <div className="font-medium text-[20px] text-white mb-5 tracking-[-0.01em]">
              {c.title}
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <div className="flex gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#161718] border border-graphite text-[#f43f5e] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#8a8f98] uppercase tracking-[0.08em] mb-1">
                    The Challenge
                  </div>
                  <p className="text-[14px] text-[#d0d6e0] leading-[1.6] m-0">
                    {c.problem}
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#161718] border border-graphite text-[#02b8cc] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#8a8f98] uppercase tracking-[0.08em] mb-1">
                    The Solution
                  </div>
                  <p className="text-[14px] text-[#d0d6e0] leading-[1.6] m-0">
                    {c.solution}
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#161718] border border-graphite text-[#e4f222] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#8a8f98] uppercase tracking-[0.08em] mb-1">
                    The Result
                  </div>
                  <p className="text-[14px] text-white font-medium leading-[1.6] m-0">
                    {c.result}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <CTABand
        heading="Become our next success story"
        buttonLabel="Contact Us"
      />
      <Footer />
    </div>
  );
}
