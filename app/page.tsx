import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FadeIn from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import HomeIndustriesGrid from "@/components/home/HomeIndustriesGrid";
import HomeProblemsGrid from "@/components/home/HomeProblemsGrid";
import HomeSolutionsGrid from "@/components/home/HomeSolutionsGrid";

const whyUs = [
  "Deeply specialised in the fuel and energy sector",
  "Software, cybersecurity, and physical protection in one partner",
  "Direct understanding of KRG business workflows",
  "Flexible ready-made and custom-built solutions",
  "Commitment to long-term support and maintenance",
  "Hands-on staff training and implementation support",
  "Practical, results-oriented business approach",
];

const homeProducts = products.filter((p) => p.homeBenefit);

export const metadata: Metadata = {
  title: "Enterprise Fuel & Energy Operations Platform, POS & ERP Systems",
  description:
    "Glaban is the premier enterprise platform delivering gas station POS, fuel forecourt controller automation, bulk delivery ERP, location-based task management, industrial cybersecurity, and CCTV surveillance systems for refineries, stations, and energy businesses across KRG and worldwide.",
  keywords: [
    "Enterprise fuel platform",
    "Gas station POS software",
    "Forecourt controller deployment",
    "Fuel ERP modules",
    "SCADA cybersecurity protection",
    "CCTV physical security forecourt",
    "Petroleum enterprise software KRG",
    "Oil and gas digital platform",
  ],
  alternates: {
    canonical: "https://glaban.com",
  },
  openGraph: {
    title: "Glaban | Enterprise Fuel & Energy Operations Platform, POS & ERP Systems",
    description:
      "Purpose-built hardware and software engineered for high-availability fuel operations across refineries, depots, and station networks.",
    url: "https://glaban.com",
  },
};

export default function HomePage() {
  return (
    <div className="bg-[#08090a] min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#08090a] border-b border-graphite min-h-[calc(100vh-68px)] flex flex-col justify-center py-20 px-8">
        {/* Subtle Grid & Animated Background Light Fields */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[650px] md:w-[900px] h-[360px] pointer-events-none"
          style={{
            animation: "ambientDrift1 12s ease-in-out infinite alternate",
          }}
        >
          <div
            className="absolute -top-10 -left-16 w-[450px] md:w-[600px] h-[280px] bg-[#02b8cc]/12 blur-[140px] rounded-full"
            style={{
              animation: "ambientDrift2 9s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute -bottom-10 -right-16 w-[450px] md:w-[600px] h-[280px] bg-[#e4f222]/10 blur-[140px] rounded-full"
            style={{
              animation: "ambientDrift3 11s ease-in-out infinite alternate",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02b8cc]/10 via-[#e4f222]/8 to-[#02b8cc]/10 blur-[130px] rounded-full" />
        </div>

        <div className="max-w-[1280px] w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center">
          {/* Centered Headline */}
          <h1 className="font-medium text-4xl sm:text-[56px] md:text-[66px] leading-[1.08] text-white tracking-[-0.03em] max-w-[960px] mx-auto m-0">
            Complete solutions for energy companies
          </h1>

          {/* Centered Subtitle (Shorter & Smaller) */}
          <p className="text-[15.5px] md:text-[16.5px] leading-[1.6] text-[#8a8f98] max-w-[620px] mx-auto mt-5 mb-9 m-0 font-normal">
            Integrated software, hardware, and security built for oil companies,
            refineries, forecourts, and fuel distribution networks across KRG
            and Iraq.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              asChild
              className="bg-[#e4f222] hover:bg-[#e4f222]/90 text-[#08090a] font-medium text-[15px] px-8 py-4 h-auto rounded-lg no-underline shadow-none transition-all"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="font-medium text-[15px] px-8 py-4 h-auto rounded-lg no-underline transition-all"
            >
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-[#08090a] py-24 border-b border-graphite">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-14 text-center">
            <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
              The problem
            </div>
            <h2 className="font-medium text-[32px] md:text-[36px] text-white mb-3.5 tracking-[-0.022em] leading-[1.15] m-0">
              Fuel and energy operations run on too many disconnected systems
            </h2>
            <p className="text-[16px] text-[#8a8f98] leading-[1.6] m-0">
              Manual processes and weak security create risk at every branch,
              station, and depot.
            </p>
          </div>
          <HomeProblemsGrid />
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section className="bg-[#0f1011] border-b border-graphite">
        <div className="max-w-[1280px] mx-auto py-24 px-8">
          <div className="flex justify-between items-end mb-11 flex-wrap gap-5">
            <div>
              <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
                Our solutions
              </div>
              <h2 className="font-medium text-[32px] md:text-[36px] text-white max-w-[600px] tracking-[-0.022em] leading-[1.15] m-0">
                One connected platform across every part of your operation
              </h2>
            </div>
            <Link
              href="/solutions"
              className="text-[#02b8cc] hover:text-white font-medium text-[14px] no-underline whitespace-nowrap transition-colors"
            >
              Browse all solutions →
            </Link>
          </div>
          <HomeSolutionsGrid />
        </div>
      </section>

      {/* PRODUCTS HIGHLIGHT */}
      <section className="bg-[#08090a] py-24 border-b border-graphite">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-11 flex-wrap gap-5">
            <div>
              <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
                Products
              </div>
              <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] leading-[1.15] m-0">
                Purpose-built software for fuel operations
              </h2>
            </div>
            <Link
              href="/products"
              className="text-[#02b8cc] hover:text-white font-medium text-[14px] no-underline whitespace-nowrap transition-colors"
            >
              View all products →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeProducts.slice(0, 6).map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={`/products/${p.slug}`}
                  className="group glb-card-link block bg-[#0f1011] border border-graphite rounded-lg p-6.5 no-underline transition-all shadow-none flex flex-col justify-between overflow-hidden h-full"
                >
                  <div>
                    <div className="relative w-full h-[190px] rounded-lg overflow-hidden mb-5 border border-graphite bg-[#161718]">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#08090a]/90 via-[#08090a]/50 to-[#e4f222]/40 transition-all duration-500 group-hover:to-[#e4f222]/60" />
                      <div className="absolute top-3 left-3 bg-[#08090a]/85 backdrop-blur-md border border-graphite text-[#d0d6e0] font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded">
                        {p.category}
                      </div>
                    </div>
                    <div className="font-medium text-[18px] text-white mb-2 tracking-[-0.015em] group-hover:text-[#02b8cc] transition-colors flex items-center justify-between">
                      <span>{p.name}</span>
                    </div>
                    <div className="text-[14px] text-[#8a8f98] leading-[1.6] mb-5 line-clamp-3">
                      {p.listingDesc}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-graphite/60 flex items-center justify-between text-[13px] font-medium text-[#02b8cc] group-hover:text-white transition-colors">
                    <span>{p.homeBenefit}</span>
                    <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-200">
                      Explore{" "}
                      <i className="fa-solid fa-arrow-right text-[11px]" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section className="bg-[#0f1011] py-24 border-b border-graphite">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-11 flex-wrap gap-5">
            <div>
              <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
                Services
              </div>
              <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] leading-[1.15] m-0">
                Full lifecycle delivery, security, and support
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[#02b8cc] hover:text-white font-medium text-[14px] no-underline whitespace-nowrap transition-colors"
            >
              View all services →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(0, 4).map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={
                    s.slug === "cybersecurity" ||
                    s.slug === "cctv-physical-security"
                      ? `/${s.slug}`
                      : `/services/${s.slug}`
                  }
                  className="group glb-card-link block bg-[#161718] border border-graphite rounded-lg p-6 no-underline transition-all shadow-none flex flex-col justify-between overflow-hidden h-full"
                >
                  <div>
                    <div className="relative w-full h-[160px] rounded-lg overflow-hidden mb-4 border border-graphite bg-[#0f1011]">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#08090a]/90 via-[#08090a]/50 to-[#02b8cc]/40 transition-all duration-500 group-hover:to-[#02b8cc]/60" />
                      <div className="absolute top-2.5 left-2.5 bg-[#08090a]/85 backdrop-blur-md border border-graphite text-[#02b8cc] font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
                        SERVICE MODULE
                      </div>
                    </div>
                    <div className="font-medium text-[16px] text-white mb-2 group-hover:text-[#02b8cc] transition-colors">
                      {s.name}
                    </div>
                    <div className="text-[13.5px] text-[#8a8f98] leading-[1.55] mb-5 line-clamp-3">
                      {s.listingDesc}
                    </div>
                  </div>
                  <div className="pt-3.5 border-t border-graphite/60 flex items-center justify-between text-[12.5px] font-medium text-[#02b8cc] group-hover:text-white transition-colors">
                    <span>Lifecycle Support</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200">
                      Specs{" "}
                      <i className="fa-solid fa-arrow-right text-[10px]" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#08090a] py-24 border-b border-graphite">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-12 text-center">
            <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
              Industries served
            </div>
            <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] leading-[1.15] mb-3.5 m-0">
              Trusted across the fuel and energy value chain
            </h2>
          </div>

          <HomeIndustriesGrid />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#0f1011] py-24 border-b border-graphite">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-14 items-center">
          <div>
            <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
              Why Glaban
            </div>
            <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] leading-[1.15] mb-4.5 m-0">
              A technology partner that understands the fuel business
            </h2>
            <p className="text-[16px] text-[#8a8f98] leading-[1.65] m-0">
              We combine deep fuel-sector experience with software, security,
              and physical protection expertise — and stay with you long after
              go-live.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((w) => (
              <div key={w} className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-md bg-[#161718] border border-graphite text-[#02b8cc] flex items-center justify-center text-[10px] shrink-0 mt-0.5 shadow-none">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="text-[14px] text-[#d0d6e0] font-normal leading-[1.5]">
                  {w}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#08090a] py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-[#0f1011] border border-graphite rounded-2xl py-16 px-12 text-center relative overflow-hidden shadow-none">
            <div className="relative">
              <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] mb-3.5 m-0">
                Ready to modernise your operations?
              </h2>
              <p className="text-[16px] text-[#8a8f98] max-w-[540px] mx-auto mb-8 leading-[1.6] m-0">
                Talk to our team about ERP, security, and surveillance solutions
                built for your business.
              </p>
              <Button
                asChild
                className="bg-[#e4f222] hover:bg-[#e4f222]/90 text-[#08090a] font-medium text-[15px] px-8 py-4 h-auto rounded-md no-underline shadow-none transition-all"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
