import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import FadeIn from "@/components/FadeIn";

import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Products & Software Modules",
  description:
    "Explore Glaban's purpose-built hardware and software suite for fuel operations: Gas Station POS, Forecourt Automation Controller, Fuel ERP, Fleet Card Management, and Bulk Gas Distribution systems.",
  keywords: [
    "Fuel ERP software modules",
    "Gas Station POS systems",
    "Forecourt controller hardware",
    "Fleet card management software",
    "Fuel quota management system",
    "Propane distribution software",
    "Petroleum software products",
  ],
  alternates: {
    canonical: "https://glaban.com/products",
  },
  openGraph: {
    title:
      "Products & Software Modules | Glaban Enterprise Fuel & Energy Platform",
    description:
      "Explore Glaban's purpose-built hardware and software suite for fuel operations across refineries, depots, and station networks.",
    url: "https://glaban.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-void min-h-screen">
      <Header />
      <PageHero
        title="Products & Platforms"
        subtitle="Purpose-built hardware and software engineered for high-availability operations across refineries, depots, and station networks."
        eyebrow="ENGINEERED SYSTEMS"
      />

      <section className="max-w-[1280px] mx-auto pt-16 px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.08} className="h-full">
              <Link
                href={`/products/${p.slug}`}
                className="group glb-card-link block bg-carbon border border-graphite rounded-lg p-6.5 no-underline transition-all shadow-none flex flex-col justify-between overflow-hidden h-full"
              >
                <div>
                  <div className="relative w-full h-[220px] rounded-lg overflow-hidden mb-5 border border-graphite bg-obsidian">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-void/90 via-void/50 to-orange/5" />
                    <div className="absolute top-3 left-3 bg-void/85 backdrop-blur-md border border-graphite text-mist font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded">
                      {p.category}
                    </div>
                  </div>
                  <div className="font-medium text-[18px] text-white mb-2.5 tracking-[-0.015em] transition-colors flex items-center justify-between">
                    <span>{p.name}</span>
                  </div>
                  <div className="text-[14px] text-fog leading-[1.6] mb-6 font-normal">
                    {p.listingDesc}
                  </div>
                </div>
                <div className="pt-4 border-t border-graphite/60 flex items-center justify-between text-[13px] font-medium text-fog group-hover:text-mist transition-colors">
                  <span>View Architecture & Specs</span>
                  <span className="flex items-center gap-1.5 text-orange group-hover:text-orangeLight transition-colors duration-200">
                    Explore{" "}
                    <ArrowRight className="text-[11px]" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-carbon border-t border-graphite py-20 text-center">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-medium text-[28px] md:text-[32px] text-white mb-3.5 tracking-[-0.022em]">
            Not sure which product fits your business?
          </h2>
          <p className="text-[16px] text-fog mb-8 max-w-[540px] mx-auto leading-[1.6]">
            Browse solutions by business problem, or talk to our team directly.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Button
              asChild
              variant="outline"
              className="bg-obsidian hover:bg-graphite border border-graphite text-mist hover:text-white font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md no-underline shadow-none transition-all"
            >
              <Link href="/solutions">Browse by Problem</Link>
            </Button>
            <Button
              asChild
              className="bg-orange hover:bg-orangeDark text-white font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md no-underline shadow-none transition-all"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
