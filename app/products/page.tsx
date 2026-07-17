import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data/products';

export const metadata = { title: 'Products | Glaban' };

export default function ProductsPage() {
  return (
    <div className="bg-[#08090a] min-h-screen">
      <Header />
      <PageHero
        eyebrow="Products"
        title="Purpose-built software for every part of your fuel operation"
        subtitle="From ERP and point-of-sale to fuel quotas, propane delivery, and executive dashboards — each product is designed around real fuel-sector workflows."
      />

      <section className="max-w-[1280px] mx-auto pt-16 px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="glb-card-link block bg-[#0f1011] border border-[#23252a] rounded-xl p-6.5 no-underline hover:border-[#383b3f] transition-all shadow-none"
            >
              <div className="relative w-full h-[220px] rounded-lg overflow-hidden mb-5 border border-[#23252a]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 via-transparent to-transparent" />
              </div>
              <div className="text-[11px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-2">
                {p.category}
              </div>
              <div className="font-medium text-[18px] text-white mb-2.5 tracking-[-0.01em]">{p.name}</div>
              <div className="text-[14px] text-[#8a8f98] leading-[1.6] mb-5">{p.listingDesc}</div>
              <div className="text-[13.5px] font-medium text-[#02b8cc]">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#0f1011] border-t border-[#23252a] py-20 text-center">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-medium text-[28px] md:text-[32px] text-white mb-3.5 tracking-[-0.022em]">
            Not sure which product fits your business?
          </h2>
          <p className="text-[16px] text-[#8a8f98] mb-8 max-w-[540px] mx-auto leading-[1.6]">
            Browse solutions by business problem, or talk to our team directly.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Button
              asChild
              variant="outline"
              className="bg-[#161718] hover:bg-[#23252a] border border-[#23252a] text-[#d0d6e0] hover:text-white font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md no-underline shadow-none transition-all"
            >
              <Link href="/solutions">Browse by Problem</Link>
            </Button>
            <Button
              asChild
              className="bg-[#e4f222] hover:bg-[#e4f222]/90 text-[#08090a] font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md no-underline shadow-none transition-all"
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
