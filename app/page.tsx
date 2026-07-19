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
import { cn } from "@/lib/utils";
import HomeIndustriesGrid from "@/components/home/HomeIndustriesGrid";
import HomeProblemSolutionMapper from "@/components/home/HomeProblemSolutionMapper";
import { ArrowRight } from "lucide-react";

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
    title:
      "Glaban | Enterprise Fuel & Energy Operations Platform, POS & ERP Systems",
    description:
      "Purpose-built hardware and software engineered for high-availability fuel operations across refineries, depots, and station networks.",
    url: "https://glaban.com",
  },
};

export default function HomePage() {
  return (
    <div className="bg-void min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-void border-b border-graphite min-h-[calc(100vh-68px)] flex flex-col justify-center py-20 px-8">
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
            className="absolute -top-10 -left-16 w-[450px] md:w-[600px] h-[280px] bg-white/6 blur-[140px] rounded-full"
            style={{
              animation: "ambientDrift2 9s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute -bottom-10 -right-16 w-[450px] md:w-[600px] h-[280px] bg-orange/10 blur-[140px] rounded-full"
            style={{
              animation: "ambientDrift3 11s ease-in-out infinite alternate",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-orange/10 to-white/5 blur-[130px] rounded-full" />
        </div>

        <div className="max-w-[1280px] w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center">
          {/* Logo Icon placed above the hero title */}
          <div className="mb-0 opacity-95">
            <img
              src="/logo-light.png"
              alt="Glaban"
              className="h-48 w-auto object-contain dark:hidden"
            />
            <img
              src="/logo.png"
              alt="Glaban"
              className="h-48 w-auto object-contain hidden dark:block"
            />
          </div>

          {/* Centered Headline */}
          <h1 className="font-medium text-4xl sm:text-[56px] md:text-[66px] leading-[1.08] text-white tracking-[-0.03em] max-w-[960px] mx-auto m-0">
            Complete solutions for energy companies
          </h1>

          {/* Centered Subtitle (Shorter & Smaller) */}
          <p className="text-[15.5px] md:text-[16.5px] leading-[1.6] text-fog max-w-[620px] mx-auto mt-5 mb-9 m-0 font-normal">
            Integrated software, hardware, and security built for oil companies,
            refineries, forecourts, and fuel distribution networks across KRG
            and Iraq.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              asChild
              className="bg-orange hover:bg-orangeDark text-white font-medium text-[15px] px-8 py-4 h-auto rounded-lg no-underline shadow-none transition-all"
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

      {/* CAUSE & EFFECT (PROBLEMS -> SOLUTIONS) */}
      <HomeProblemSolutionMapper />

      {/* PRODUCTS HIGHLIGHT */}
      <section className="bg-void py-24 border-b border-graphite">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-5 relative z-10">
            <div className="max-w-[800px]">
              <div className="text-[12px] font-mono text-orange tracking-widest uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-orange"></span>
                Products
              </div>
              <h2 className="font-medium text-[36px] md:text-[48px] text-white tracking-[-0.02em] leading-[1.1] m-0">
                Purpose-built software for fuel operations
              </h2>
            </div>
            <Link
              href="/products"
              className="text-orange hover:text-white font-medium text-[14px] no-underline whitespace-nowrap transition-colors mb-2"
            >
              View all products →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {homeProducts.slice(0, 5).map((p, i) => {
              const isFeatured = i === 0;
              return (
                <FadeIn
                  key={p.slug}
                  delay={i * 0.08}
                  className={cn(
                    "h-full",
                    isFeatured ? "lg:col-span-2" : "col-span-1",
                  )}
                >
                  <Link
                    href={`/products/${p.slug}`}
                    className="group glb-card-link block bg-carbon border border-graphite rounded-lg p-6 lg:p-8 no-underline transition-all shadow-none flex flex-col justify-between overflow-hidden h-full relative"
                  >
                    <div className="flex flex-col h-full relative z-10">
                      <div
                        className={cn(
                          "relative w-full rounded-lg overflow-hidden mb-6 border border-graphite bg-obsidian",
                          isFeatured ? "h-[240px] lg:h-[300px]" : "h-[180px]",
                        )}
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-void/90 via-void/50 to-orange/5" />
                        <div className="absolute top-4 left-4 bg-void/85 backdrop-blur-md border border-graphite text-mist font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded">
                          {p.category}
                        </div>
                      </div>
                      <div
                        className={cn(
                          "font-medium text-white mb-3 tracking-[-0.015em] transition-colors",
                          isFeatured
                            ? "text-[24px] lg:text-[28px]"
                            : "text-[18px]",
                        )}
                      >
                        {p.name}
                      </div>
                      <div
                        className={cn(
                          "text-fog leading-relaxed mb-6",
                          isFeatured
                            ? "text-[16px] lg:text-[18px] max-w-[80%]"
                            : "text-[14px] line-clamp-3",
                        )}
                      >
                        {p.listingDesc}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-graphite/60 flex items-center justify-between text-[13px] font-medium text-fog group-hover:text-mist transition-colors relative z-10 mt-auto">
                      <span>{p.homeBenefit}</span>
                      <span className="flex items-center gap-1.5 text-orange group-hover:text-orangeLight transition-colors duration-200">
                        Explore <ArrowRight className="text-[11px]" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section className="bg-carbon py-24 border-b border-graphite">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-5 relative z-10">
            <div className="max-w-[800px]">
              <div className="text-[12px] font-mono text-orange tracking-widest uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-orange"></span>
                Services
              </div>
              <h2 className="font-medium text-[36px] md:text-[48px] text-white tracking-[-0.02em] leading-[1.1] m-0">
                Full lifecycle delivery, security, and support
              </h2>
            </div>
            <Link
              href="/services"
              className="text-orange hover:text-white font-medium text-[14px] no-underline whitespace-nowrap transition-colors mb-2"
            >
              View all services →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {services.slice(0, 4).map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.08}>
                <Link
                  href={
                    s.slug === "cybersecurity" ||
                    s.slug === "cctv-physical-security"
                      ? `/${s.slug}`
                      : `/services/${s.slug}`
                  }
                  className="group block bg-obsidian border border-graphite rounded-lg p-6 lg:p-8 no-underline transition-all hover:bg-cinder hover:border-smoke"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12 flex-1">
                      <div className="font-mono text-[18px] text-fog/50 group-hover:text-orange transition-colors">
                        0{i + 1}
                      </div>
                      <div>
                        <div className="font-medium text-[20px] md:text-[22px] text-white mb-2 group-hover:text-orange transition-colors">
                          {s.name}
                        </div>
                        <div className="text-[15px] text-fog leading-relaxed max-w-[600px] font-light">
                          {s.listingDesc}
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-graphite bg-carbon text-orange group-hover:bg-orange group-hover:text-white transition-all">
                        <ArrowRight className="text-[12px]" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-void py-24 border-b border-graphite">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="max-w-[800px] mb-16 relative z-10">
            <div className="text-[12px] font-mono text-orange tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-orange"></span>
              Industries Served
            </div>
            <h2 className="font-medium text-[36px] md:text-[48px] text-white tracking-[-0.02em] leading-[1.1] m-0">
              Trusted across the fuel and energy value chain
            </h2>
          </div>

          <HomeIndustriesGrid />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-carbon py-24 border-b border-graphite relative overflow-hidden">
        {/* Subtle blueprint accent */}
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] opacity-5 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <line x1="0" y1="50" x2="100" y2="50" />
            <line x1="50" y1="0" x2="50" y2="100" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">
          <div className="lg:w-5/12 sticky top-32">
            <div className="text-[12px] font-mono text-orange tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-orange"></span>
              Why Glaban
            </div>
            <h2 className="font-medium text-[36px] md:text-[44px] text-white tracking-[-0.02em] leading-[1.1] mb-6 m-0">
              A technology partner that understands the fuel business
            </h2>
            <p className="text-[18px] text-fog leading-relaxed font-light m-0">
              We combine deep fuel-sector experience with software, security,
              and physical protection expertise — and stay with you long after
              go-live.
            </p>
          </div>
          <div className="lg:w-7/12 flex flex-col gap-5">
            {whyUs.map((w, i) => (
              <div
                key={w}
                className="flex gap-5 items-start bg-obsidian border border-graphite rounded-lg p-6 transition-colors hover:border-smoke"
              >
                <div className="font-mono text-[14px] text-fog/50 mt-1">
                  0{i + 1}
                </div>
                <div className="text-[16px] md:text-[18px] text-white font-light leading-relaxed">
                  {w}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-void py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-carbon border border-graphite rounded-lg py-16 px-12 text-center relative overflow-hidden shadow-none">
            <div className="relative">
              <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] mb-3.5 m-0">
                Ready to modernise your operations?
              </h2>
              <p className="text-[16px] text-fog max-w-[540px] mx-auto mb-8 leading-[1.6] m-0">
                Talk to our team about ERP, security, and surveillance solutions
                built for your business.
              </p>
              <Button
                asChild
                className="bg-orange hover:bg-orangeDark text-white font-medium text-[15px] px-8 py-4 h-auto rounded-md no-underline shadow-none transition-all"
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
