import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import AboutValuesGrid from "@/components/about/AboutValuesGrid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us & Engineering Heritage",
  description:
    "Learn about Glaban's mission, engineering rigor, and deep regional roots in the Kurdistan Region of Iraq (KRG). We unite industrial software, cybersecurity, and physical surveillance into single-partner reliability.",
  keywords: [
    "About Glaban",
    "Glaban engineering heritage",
    "Kurdistan energy technology partner",
    "KRG oil and gas IT company",
    "Petroleum software company Iraq",
    "Industrial software engineering KRG",
  ],
  alternates: {
    canonical: "https://glaban.com/about",
  },
  openGraph: {
    title: "About Us & Engineering Heritage | Glaban Enterprise Fuel Platform",
    description:
      "Deeply rooted in the energy sector with uncompromising engineering standards, Glaban delivers mission-critical software and security across KRG and beyond.",
    url: "https://glaban.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-void min-h-screen text-white">
      <Header />
      <PageHero
        eyebrow="ENGINEERING HERITAGE"
        eyebrowColor="var(--color-fog)"
        title="A technology partner built specifically around fuel and energy operations"
        subtitle="Glaban provides integrated software, cybersecurity, and physical surveillance systems for oil, gas, refinery, station, propane, and industrial businesses across KRG and the wider region."
        centered
        maxWidth={920}
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24">
        <AboutValuesGrid />
      </section>

      <section className="bg-carbon border-y border-graphite">
        <div className="max-w-[1280px] mx-auto py-20 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-fog uppercase tracking-wider mb-2">
              <i className="fa-solid fa-industry" />
              <span>SECTOR SPECIALIZATION</span>
            </div>
            <div className="font-medium text-[20px] text-white mb-2.5 tracking-[-0.01em]">
              Dedicated Industry Focus
            </div>
            <p className="text-[15px] text-fog leading-[1.65] m-0 font-normal">
              We build exclusively for fuel, oil, gas, refinery, and energy
              operations — not generic business software adapted or patched
              after the fact.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-fog uppercase tracking-wider mb-2">
              <i className="fa-solid fa-microchip" />
              <span>UNIFIED ARCHITECTURE</span>
            </div>
            <div className="font-medium text-[20px] text-white mb-2.5 tracking-[-0.01em]">
              Full Technical Integration
            </div>
            <p className="text-[15px] text-fog leading-[1.65] m-0 font-normal">
              Software development, ERP, cybersecurity, and physical
              surveillance under one roof, guaranteeing that forecourt sensors
              and cloud databases work together natively by design.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-fog uppercase tracking-wider mb-2">
              <i className="fa-solid fa-location-dot" />
              <span>REGIONAL PRESENCE</span>
            </div>
            <div className="font-medium text-[20px] text-white mb-2.5 tracking-[-0.01em]">
              Direct Local Understanding
            </div>
            <p className="text-[15px] text-fog leading-[1.65] m-0 font-normal">
              Headquartered right here in KRG, we understand the operational,
              regulatory, and internet connectivity realities of running a 24/7
              fuel distribution business in the region.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        heading="Let's inspect and modernise your operations"
        subtitle="Schedule an on-site scoping audit with our senior engineering team across Erbil, Sulaymaniyah, or Dohuk."
        buttonLabel="Contact Engineering & Support"
      />
      <Footer />
    </div>
  );
}
