import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import { services } from '@/lib/data/services';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'Services | Glaban' };

export default function ServicesPage() {
  return (
    <div className="bg-[#08090a] min-h-screen">
      <Header />
      <PageHero
        title="Services & Lifecycle Support"
        subtitle="End-to-end deployment, custom software architecture, systems integration, and continuous infrastructure support across Iraq and KRG."
        eyebrow="PROFESSIONAL SERVICES"
      />

      <section className="max-w-[1280px] mx-auto pt-16 px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const href =
              s.slug === 'cybersecurity' || s.slug === 'cctv-physical-security'
                ? `/${s.slug}`
                : `/services/${s.slug}`;
            return (
              <FadeIn key={s.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={href}
                  className="group glb-card-link block bg-[#0f1011] border border-[#23252a] rounded-xl p-6.5 no-underline transition-all shadow-none flex flex-col justify-between overflow-hidden h-full"
                >
                  <div>
                    <div className="relative w-full h-[200px] rounded-lg overflow-hidden mb-5 border border-[#23252a] bg-[#161718]">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/90 via-[#08090a]/25 to-transparent" />
                      <div className="absolute top-3 left-3 bg-[#08090a]/85 backdrop-blur-md border border-[#23252a] text-[#02b8cc] font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded">
                        SERVICE MODULE
                      </div>
                    </div>
                    <div className="font-medium text-[18px] text-white mb-2.5 tracking-[-0.015em] group-hover:text-[#02b8cc] transition-colors flex items-center justify-between">
                      <span>{s.name}</span>
                    </div>
                    <div className="text-[14px] text-[#8a8f98] leading-[1.6] mb-6 font-normal">{s.listingDesc}</div>
                  </div>
                  <div className="pt-4 border-t border-[#23252a]/60 flex items-center justify-between text-[13px] font-medium text-[#02b8cc] group-hover:text-white transition-colors">
                    <span>Lifecycle & Integration</span>
                    <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-200">
                      Specs <i className="fa-solid fa-arrow-right text-[11px]" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <CTABand heading="Need a tailored service package?" subtitle="We combine software, hosting, security, and physical surveillance into single integrated contracts." />
      <Footer />
    </div>
  );
}
