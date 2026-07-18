import Header from "./Header";
import Footer from "./Footer";
import DetailHero from "./DetailHero";
import CTABand from "./CTABand";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/lib/data/services";
import FadeIn from "@/components/FadeIn";

export default function ServiceDetailTemplate({
  service,
}: {
  service: Service;
}) {
  const d = service.detail;
  return (
    <div className="bg-void min-h-screen">
      <Header />
      <DetailHero
        icon={d.icon}
        iconBg="transparent"
        iconColor="var(--color-orange)"
        eyebrow={d.eyebrow}
        eyebrowColor="var(--color-fog)"
        title={service.name}
        subtitle={d.heroSubtitle}
        ctaLabel={d.ctaLabel}
      />

      <section className="max-w-[1280px] mx-auto py-20 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-16 mb-20">
          <FadeIn>
            <div>
              <h2 className="font-medium text-[28px] md:text-[32px] text-white tracking-[-0.022em] mb-5">
                {d.sectionHeading}
              </h2>
              <p className="text-[16px] text-mist leading-[1.75] mb-8 m-0">
                {d.sectionBody}
              </p>

              <Card className="group relative bg-carbon border border-graphite rounded-lg p-7 mb-10 shadow-none hover:border-smoke transition-all overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-[12px] font-medium text-fog tracking-[0.08em] uppercase">
                    Core Service Benefits
                  </div>
                  <span className="font-mono text-[10px] text-ash bg-obsidian border border-graphite px-2 py-0.5 rounded">
                    SVC_BENEFIT
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  {d.benefits.map((b) => (
                    <div
                      key={b}
                      className="group/item flex gap-3.5 items-center hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-obsidian border border-graphite text-orange flex items-center justify-center text-[10px] shrink-0 shadow-none group-hover/item:border-orange group-hover/item:bg-orange/10 transition-colors">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="text-[14.5px] font-normal text-white group-hover/item:text-orange transition-colors">
                        {b}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {d.roles && (
                <div className="mb-8">
                  <div className="text-[12px] font-medium text-fog tracking-[0.08em] uppercase mb-4">
                    Target User Roles
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {d.roles.map((r) => (
                      <Badge
                        key={r}
                        className="bg-white/5 hover:bg-white/10 hover:border-smoke text-mist border border-graphite text-[12.5px] font-normal px-3.5 py-1 rounded-full shadow-none transition-all cursor-default"
                      >
                        {r}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {d.disclaimer && (
                <p className="text-[13px] text-fog max-w-[700px] mt-6 leading-[1.6]">
                  {d.disclaimer}
                </p>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-6">
              <Card className="group relative bg-carbon border border-graphite rounded-lg p-7 shadow-none hover:border-smoke transition-all overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-[12px] font-medium text-fog tracking-[0.08em] uppercase">
                    Technical Scope
                  </div>
                  <span className="font-mono text-[10px] text-ash bg-obsidian border border-graphite px-2 py-0.5 rounded">
                    SCOPE_MATRIX
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3.5">
                  {(d.items || d.steps || []).map((f) => (
                    <div
                      key={f}
                      className="group/item flex gap-3 items-start hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="text-orange text-[11px] mt-1 shrink-0 transition-colors">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span className="text-[14px] text-mist leading-[1.5] group-hover/item:text-white transition-colors">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="group relative bg-carbon border border-graphite rounded-lg p-7 text-white shadow-none hover:border-smoke transition-all overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-[12px] font-medium text-fog tracking-[0.08em] uppercase">
                    Engagement Process
                  </div>
                  <span className="font-mono text-[10px] text-ash bg-obsidian border border-graphite px-2 py-0.5 rounded">
                    ENGAGE_SEQ
                  </span>
                </div>
                <div className="flex flex-col gap-5">
                  {d.howItWorks.map((h, i) => (
                    <div
                      key={h}
                      className="group/step flex gap-4 items-start hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="text-[15px] font-mono font-semibold text-smoke group-hover/step:text-orange transition-colors leading-none pt-0.5">
                        0{i + 1}
                      </div>
                      <div className="text-[14px] text-mist leading-[1.55] group-hover/step:text-white transition-colors">
                        {h}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand heading={d.closingHeading} buttonLabel={d.ctaLabel} />
      <Footer />
    </div>
  );
}
