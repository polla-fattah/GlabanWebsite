import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { services } from "@/lib/data/services";
import FadeIn from "@/components/FadeIn";

import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Engineering Services & Deployment Models",
  description:
    "Glaban delivers full lifecycle engineering services for fuel and energy operations: Custom Software Development, ERP Implementation, POS Forecourt Deployment, System Integration, Cybersecurity, and Physical Security.",
  keywords: [
    "Fuel engineering services",
    "Gas station POS deployment",
    "Forecourt automation installation",
    "Petroleum ERP implementation",
    "SCADA cybersecurity services KRG",
    "CCTV surveillance deployment",
    "Oil and gas software integration",
  ],
  alternates: {
    canonical: "https://glaban.com/services",
  },
  openGraph: {
    title:
      "Engineering Services & Deployment Models | Glaban Enterprise Fuel Platform",
    description:
      "Full lifecycle engineering, security, and deployment services for fuel operations across refineries, depots, and station networks.",
    url: "https://glaban.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-void min-h-screen">
      <Header />
      <PageHero
        title="Services & Lifecycle Support"
        subtitle="End-to-end deployment, custom software architecture, systems integration, and continuous infrastructure support across Iraq and KRG."
        eyebrow="PROFESSIONAL SERVICES"
      />

      <section className="max-w-[1280px] mx-auto pt-16 px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const href =
              s.slug === "cybersecurity" || s.slug === "cctv-physical-security"
                ? `/${s.slug}`
                : `/services/${s.slug}`;
            return (
              <FadeIn key={s.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={href}
                  className="group glb-card-link block bg-carbon border border-graphite rounded-lg p-6.5 no-underline transition-all shadow-none flex flex-col justify-between overflow-hidden h-full"
                >
                  <div>
                    <div className="relative w-full h-[200px] rounded-lg overflow-hidden mb-5 border border-graphite bg-obsidian">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-void/90 via-void/50 to-orange/5" />
                      <div className="absolute top-3 left-3 bg-void/85 backdrop-blur-md border border-graphite text-orange font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded">
                        SERVICE MODULE
                      </div>
                    </div>
                    <div className="font-medium text-[18px] text-white mb-2.5 tracking-[-0.015em] transition-colors flex items-center justify-between">
                      <span>{s.name}</span>
                    </div>
                    <div className="text-[14px] text-fog leading-[1.6] mb-6 font-normal">
                      {s.listingDesc}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-graphite/60 flex items-center justify-between text-[13px] font-medium text-fog group-hover:text-mist transition-colors">
                    <span>Lifecycle & Integration</span>
                    <span className="flex items-center gap-1.5 text-orange group-hover:text-orangeLight transition-colors duration-200">
                      Explore{" "}
                      <ArrowRight className="text-[11px]" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <CTABand
        heading="Need a tailored service package?"
        subtitle="We combine software, hosting, security, and physical surveillance into single integrated contracts."
      />
      <Footer />
    </div>
  );
}
