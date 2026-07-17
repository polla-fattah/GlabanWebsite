import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/data/products';

export const metadata = { title: 'Products | Glaban' };

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Products"
        title="Purpose-built software for every part of your fuel operation"
        subtitle="From ERP and point-of-sale to fuel quotas, propane delivery, and executive dashboards — each product is designed around real fuel-sector workflows."
      />

      <section className="max-w-[1280px] mx-auto pt-16 px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="glb-card-link block bg-white border border-navy/8 rounded-2xl p-7 no-underline"
            >
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-5">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/8" />
              </div>
              <div className="text-[11.5px] font-semibold text-orangeDark tracking-[0.05em] uppercase mb-2">
                {p.category}
              </div>
              <div className="font-bold text-lg text-textDark mb-2.5">{p.name}</div>
              <div className="text-[14.5px] text-textBody leading-[1.6] mb-4">{p.listingDesc}</div>
              <div className="text-[13.5px] font-semibold text-orange">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navyMid">
        <div className="max-w-[1280px] mx-auto py-18 px-8 text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-white mb-3.5 m-0">
            Not sure which product fits your business?
          </h2>
          <p className="text-[15.5px] text-white/60 mb-6.5 m-0">
            Browse solutions by business problem, or talk to our team directly.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Button
              asChild
              variant="outline"
              className="bg-white/8 hover:bg-white/12 border-white/18 text-white font-semibold text-[15px] px-[26px] py-3.5 h-auto rounded-lg no-underline shadow-none"
            >
              <Link href="/solutions">Browse by Problem</Link>
            </Button>
            <Button
              asChild
              className="bg-orange hover:bg-orangeDark text-navy font-semibold text-[15px] px-[26px] py-3.5 h-auto rounded-lg no-underline"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
