import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import { services } from '@/lib/data/services';

export const metadata = { title: 'Services | Glaban' };

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Services"
        title="Full lifecycle digital and physical protection"
        subtitle="We do not just sell software. We implement, integrate, secure, host, and support your systems across every branch and facility you operate."
      />

      <section className="max-w-[1280px] mx-auto pt-16 px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5">
          {services.map((s) => {
            const href =
              s.slug === 'cybersecurity' || s.slug === 'cctv-physical-security'
                ? `/${s.slug}`
                : `/services/${s.slug}`;
            return (
              <Link
                key={s.slug}
                href={href}
                className="glb-card-link block bg-white border border-navy/8 rounded-2xl p-7 no-underline"
              >
                <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-5">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/8" />
                </div>
                <div className="font-bold text-lg text-textDark mb-2.5">{s.name}</div>
                <div className="text-[14.5px] text-textBody leading-[1.6] mb-4">{s.listingDesc}</div>
                <div className="text-[13.5px] font-semibold text-orange">Learn more →</div>
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
