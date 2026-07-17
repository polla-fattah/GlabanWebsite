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
    <div>
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

      <section className="max-w-[1280px] mx-auto py-18 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-16 mb-18">
          <div>
            <div className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-textDark mb-5">
              {d.sectionHeading}
            </div>
            <p className="text-base text-textBody leading-[1.8] mb-8 m-0">{d.sectionBody}</p>

            <Card className="bg-grayBg border-0 rounded-2xl p-8 mb-10 shadow-none">
              <div className="text-[13px] font-bold text-orangeDark tracking-[0.05em] uppercase mb-5">
                Core Business Benefits
              </div>
              <div className="flex flex-col gap-4">
                {d.benefits.map((b) => (
                  <div key={b} className="flex gap-3 items-center">
                    <div className="w-[22px] h-[22px] rounded-full bg-orange text-white flex items-center justify-center text-[11px] shrink-0">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="text-[15px] font-semibold text-textDark">{b}</div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-xs font-semibold text-textMuted tracking-[0.05em] uppercase mb-4">
              Target Industry Segments
            </div>
            <div className="flex flex-wrap gap-2.5">
              {d.customers.map((c) => (
                <Badge
                  key={c}
                  className="bg-orangeTint hover:bg-orangeTint text-orangeDark text-[13px] font-semibold px-3.5 py-[7px] rounded-xl border-0 shadow-none"
                >
                  {c}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="bg-white border border-navy/10 rounded-2xl p-8 shadow-none">
              <div className="text-[13px] font-bold text-textDark tracking-[0.05em] uppercase mb-5">
                Technical Capabilities
              </div>
              <div className="grid grid-cols-1 gap-3.5">
                {d.features.map((f) => (
                  <div key={f} className="flex gap-3 items-start">
                    <div className="text-orange text-[11px] mt-1">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="text-[14.5px] text-textBody2 leading-[1.4]">{f}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-navy border-0 rounded-2xl p-8 text-white shadow-none">
              <div className="text-[13px] font-bold text-orangeLight tracking-[0.05em] uppercase mb-5">
                Operational Flow
              </div>
              <div className="flex flex-col gap-5">
                {d.howItWorks.map((h, i) => (
                  <div key={h} className="flex gap-4">
                    <div className="text-xl font-extrabold text-white/10 leading-none">
                      0{i + 1}
                    </div>
                    <div className="text-[14.5px] text-white/85 leading-[1.5]">{h}</div>
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
