import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { solutionItems } from '@/lib/data/solutions';

export const metadata = { title: 'Solutions | Glaban' };

export default function SolutionsPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Solutions"
        title="Tell us your problem. We'll show you the solution."
        subtitle="Browse by the challenge you're facing rather than product names."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 flex flex-col gap-4">
        {solutionItems.map((it) => (
          <Card key={it.problem} className="bg-white border border-navy/8 rounded-[14px] py-7 px-7.5 shadow-none">
            <div className="font-['Plus_Jakarta_Sans'] font-semibold text-lg text-textDark mb-2">
              &quot;{it.problem}&quot;
            </div>
            <div className="text-[15px] text-textBody leading-[1.6] mb-4">{it.solution}</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {it.benefits.map((b) => (
                <Badge
                  key={b}
                  className="bg-orangeTint hover:bg-orangeTint text-orangeDark text-[12.5px] font-semibold px-3 py-1.5 rounded-full border-0 shadow-none"
                >
                  {b}
                </Badge>
              ))}
            </div>
            <Link href={it.href} className="text-[13.5px] font-semibold text-orange no-underline hover:underline">
              See related product →
            </Link>
          </Card>
        ))}
      </section>

      <Footer />
    </div>
  );
}
