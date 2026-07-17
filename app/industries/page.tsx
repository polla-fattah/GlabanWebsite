import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card } from '@/components/ui/card';
import { industries } from '@/lib/data/industries';

export const metadata = { title: 'Industries | Glaban' };

import FadeIn from '@/components/FadeIn';

export default function IndustriesPage() {
  return (
    <div className="bg-[#08090a] min-h-screen">
      <Header />
      <PageHero
        eyebrow="Industries"
        eyebrowColor="#8a8f98"
        title="Built for every part of the fuel and energy value chain"
        subtitle="Each industry has different operational risks. We tailor products and services to match."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 flex flex-col gap-6">
        {industries.map((ind, idx) => (
          <FadeIn key={ind.name} delay={idx * 0.08}>
            <Card className="group glb-card-link bg-[#0f1011] border border-[#23252a] rounded-xl p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[.4fr_.6fr] gap-12 shadow-none transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#161718] border border-[#23252a] text-[#02b8cc] flex items-center justify-center text-[24px] shadow-none transition-colors duration-300">
                    <i className={ind.icon}></i>
                  </div>
                  <span className="font-mono text-[11px] text-[#383b3f] bg-[#161718] border border-[#23252a] px-2 py-1 rounded">
                    IND-0{idx + 1}
                  </span>
                </div>
              <div className="font-medium text-[26px] md:text-[28px] text-white mb-4 tracking-[-0.02em] group-hover:text-[#02b8cc] transition-colors">{ind.name}</div>
              <p className="text-[15px] text-[#8a8f98] leading-[1.7] m-0">{ind.desc}</p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-[11px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3.5">
                    Common Problems
                  </div>
                  <div className="flex flex-col gap-3">
                    {ind.problems.map((p) => (
                      <div key={p} className="text-[14px] text-[#d0d6e0] leading-[1.45] flex gap-2.5 items-start">
                        <div className="text-[#eb5757] mt-0.5 shrink-0">
                          <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3.5">
                    Recommended Solutions
                  </div>
                  <div className="flex flex-col gap-3">
                    {ind.recs.map((r) => (
                      <div key={r} className="text-[14px] text-white leading-[1.45] flex gap-2.5 items-start">
                        <div className="text-[#02b8cc] mt-0.5 shrink-0">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-[14px] font-medium text-[#02b8cc] no-underline group-hover:text-white transition-colors">
                <span>Consult with our {ind.name} experts</span>
                <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </Card>
        </FadeIn>
      ))}
      </section>

      <Footer />
    </div>
  );
}
