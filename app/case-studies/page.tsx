import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { caseStudies } from '@/lib/data/caseStudies';

export const metadata = { title: 'Customers & Case Studies | Glaban' };

export default function CaseStudiesPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Customers & Case Studies"
        title="Real problems, real deployments"
        subtitle="Case studies are presented anonymously where customer names are not yet approved for publication."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((c) => (
          <Card key={c.title} className="bg-white border border-navy/8 rounded-2xl p-8 flex flex-col shadow-none">
            <div className="flex gap-2.5 mb-4">
              <Badge className="bg-orangeTint hover:bg-orangeTint text-orangeDark text-xs font-semibold px-3 py-1.5 rounded-full border-0 shadow-none">
                {c.industry}
              </Badge>
            </div>
            <div className="font-['Plus_Jakarta_Sans'] font-bold text-[19px] text-textDark mb-5">
              {c.title}
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-textBody uppercase tracking-[0.05em] mb-1">
                    The Challenge
                  </div>
                  <p className="text-sm text-textBody2 leading-[1.6] m-0">{c.problem}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-orange/10 text-orange flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-textBody uppercase tracking-[0.05em] mb-1">
                    The Solution
                  </div>
                  <p className="text-sm text-textBody2 leading-[1.6] m-0">{c.solution}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-orange/10 text-orange flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-textBody uppercase tracking-[0.05em] mb-1">
                    The Result
                  </div>
                  <p className="text-sm text-orangeDark font-semibold leading-[1.6] m-0">{c.result}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <CTABand heading="Become our next success story" buttonLabel="Contact Us" />
      <Footer />
    </div>
  );
}
