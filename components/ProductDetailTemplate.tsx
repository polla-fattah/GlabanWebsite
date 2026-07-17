import Header from './Header';
import Footer from './Footer';
import DetailHero from './DetailHero';
import CTABand from './CTABand';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/data/products';

export default function ProductDetailTemplate({ product }: { product: Product }) {
  const d = product.detail;
  return (
    <div className="bg-[#08090a] min-h-screen">
      <Header />
      <DetailHero
        icon={d.icon}
        iconBg={d.iconBg}
        iconColor={d.iconColor}
        eyebrow={d.eyebrow}
        eyebrowColor={d.iconColor}
        title={product.name}
        subtitle={d.heroSubtitle}
        ctaLabel={d.ctaLabel}
      />

      <section className="max-w-[1280px] mx-auto py-20 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-16 mb-20">
          <div>
            <h2 className="font-medium text-[28px] md:text-[32px] text-white tracking-[-0.022em] mb-5">
              {d.sectionHeading}
            </h2>
            <p className="text-[16px] text-[#d0d6e0] leading-[1.75] mb-8 m-0">{d.sectionBody}</p>

            <Card className="bg-[#0f1011] border border-[#23252a] rounded-xl p-7 mb-10 shadow-none">
              <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-5">
                Core Business Benefits
              </div>
              <div className="flex flex-col gap-4">
                {d.benefits.map((b) => (
                  <div key={b} className="flex gap-3.5 items-center">
                    <div className="w-5 h-5 rounded-full bg-[#161718] border border-[#23252a] text-[#02b8cc] flex items-center justify-center text-[10px] shrink-0 shadow-none">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="text-[14.5px] font-normal text-white">{b}</div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-4">
              Target Industry Segments
            </div>
            <div className="flex flex-wrap gap-2">
              {d.customers.map((c) => (
                <Badge
                  key={c}
                  className="bg-white/5 hover:bg-white/10 text-[#d0d6e0] border border-[#23252a] text-[12.5px] font-normal px-3.5 py-1 rounded-full shadow-none transition-colors"
                >
                  {c}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="bg-[#0f1011] border border-[#23252a] rounded-xl p-7 shadow-none">
              <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-5">
                Technical Capabilities
              </div>
              <div className="grid grid-cols-1 gap-3.5">
                {d.features.map((f) => (
                  <div key={f} className="flex gap-3 items-start">
                    <div className="text-[#02b8cc] text-[11px] mt-1 shrink-0">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="text-[14px] text-[#d0d6e0] leading-[1.5]">{f}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-[#0f1011] border border-[#23252a] rounded-xl p-7 text-white shadow-none">
              <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-5">
                Operational Flow
              </div>
              <div className="flex flex-col gap-5">
                {d.howItWorks.map((h, i) => (
                  <div key={h} className="flex gap-4 items-start">
                    <div className="text-[15px] font-mono font-semibold text-[#383b3f] leading-none pt-0.5">
                      0{i + 1}
                    </div>
                    <div className="text-[14px] text-[#d0d6e0] leading-[1.55]">{h}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTABand heading={d.closingHeading} subtitle={d.closingSubtitle} buttonLabel="Request a Demo" />
      <Footer />
    </div>
  );
}
