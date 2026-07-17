import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card } from '@/components/ui/card';
import { industries } from '@/lib/data/industries';

export const metadata = { title: 'Industries | Glaban' };

export default function IndustriesPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Industries"
        eyebrowColor="var(--color-orangeLight)"
        title="Built for every part of the fuel and energy value chain"
        subtitle="Each industry has different operational risks. We tailor products and services to match."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 flex flex-col gap-6">
        {industries.map((ind) => (
          <Card key={ind.name} className="bg-white border border-navy/8 rounded-2xl p-10 grid grid-cols-1 lg:grid-cols-[.4fr_.6fr] gap-12 shadow-none">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-orangeTint text-orange flex items-center justify-center text-[28px] mb-6">
                <i className={ind.icon}></i>
              </div>
              <div className="font-extrabold text-[28px] text-textDark mb-4 font-['Plus_Jakarta_Sans']">{ind.name}</div>
              <p className="text-base text-textBody leading-[1.7] m-0">{ind.desc}</p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-textMuted tracking-[0.05em] uppercase mb-3.5">
                    Common Problems
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {ind.problems.map((p) => (
                      <div key={p} className="text-sm text-textBody2 leading-[1.4] flex gap-2 items-start">
                        <div className="text-[#E74C3C] mt-0.5">
                          <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-orange tracking-[0.05em] uppercase mb-3.5">
                    Recommended Solutions
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {ind.recs.map((r) => (
                      <div key={r} className="text-sm text-textBody2 leading-[1.4] flex gap-2 items-start">
                        <div className="text-orange mt-0.5">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/contact" className="inline-block mt-8 text-sm font-bold text-orange no-underline hover:underline">
                Consult with our {ind.name} experts →
              </Link>
            </div>
          </Card>
        ))}
      </section>

      <Footer />
    </div>
  );
}
