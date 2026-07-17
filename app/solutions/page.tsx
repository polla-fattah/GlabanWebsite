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
    <div className="bg-[#08090a] min-h-screen">
      <Header />
      <PageHero
        eyebrow="Solutions"
        title="Tell us your problem. We'll show you the solution."
        subtitle="Browse by the challenge you're facing rather than product names."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 flex flex-col gap-4">
        {solutionItems.map((it) => (
          <Card key={it.problem} className="bg-[#0f1011] border border-[#23252a] rounded-xl py-6 px-7 shadow-none hover:border-[#383b3f] transition-all">
            <div className="font-medium text-lg text-white mb-2 tracking-[-0.01em]">
              &quot;{it.problem}&quot;
            </div>
            <div className="text-[15px] text-[#d0d6e0] leading-[1.65] mb-4">{it.solution}</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {it.benefits.map((b) => (
                <Badge
                  key={b}
                  className="bg-white/5 hover:bg-white/10 text-[#8a8f98] border border-[#23252a] text-[12px] font-normal px-3 py-1 rounded-full shadow-none transition-colors"
                >
                  {b}
                </Badge>
              ))}
            </div>
            <Link href={it.href} className="text-[13.5px] font-medium text-[#02b8cc] no-underline hover:underline">
              See related product →
            </Link>
          </Card>
        ))}
      </section>

      <Footer />
    </div>
  );
}
