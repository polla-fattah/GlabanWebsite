import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import { services } from '@/lib/data/services';

export const metadata = { title: 'Services | Glaban' };

export default function ServicesPage() {
  return (
    <div className="bg-[#08090a] min-h-screen">
      <Header />
      <PageHero
        eyebrow="Services"
        title="Full lifecycle digital and physical protection"
        subtitle="We do not just sell software. We implement, integrate, secure, host, and support your systems across every branch and facility you operate."
      />

      <section className="max-w-[1280px] mx-auto pt-16 px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const href =
              s.slug === 'cybersecurity' || s.slug === 'cctv-physical-security'
                ? `/${s.slug}`
                : `/services/${s.slug}`;
            return (
              <Link
                key={s.slug}
                href={href}
                className="glb-card-link block bg-[#0f1011] border border-[#23252a] rounded-xl p-6.5 no-underline hover:border-[#383b3f] transition-all shadow-none"
              >
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden mb-5 border border-[#23252a]">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 via-transparent to-transparent" />
                </div>
                <div className="font-medium text-[18px] text-white mb-2.5 tracking-[-0.01em]">{s.name}</div>
                <div className="text-[14px] text-[#8a8f98] leading-[1.6] mb-5">{s.listingDesc}</div>
                <div className="text-[13.5px] font-medium text-[#02b8cc]">Learn more →</div>
              </Link>
            );
          })}
        </div>
      </section>

      <CTABand heading="Need a tailored service package?" subtitle="We combine software, hosting, security, and physical surveillance into single integrated contracts." />
      <Footer />
    </div>
  );
}
