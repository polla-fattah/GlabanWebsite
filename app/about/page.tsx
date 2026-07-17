import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import { Card } from '@/components/ui/card';

export const metadata = { title: 'About Us | Glaban' };

const values = [
  'Reliability',
  'Security',
  'Practical solutions',
  'Long-term support',
  'Business understanding',
  'Transparency',
  'Local expertise',
  'Continuous improvement',
];

export default function AboutPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="About Glaban"
        title="A technology partner built around the fuel and energy sector"
        subtitle="Glaban provides software, cybersecurity, and physical security solutions for oil, gas, refinery, station, propane, and industrial businesses across KRG and the wider region."
        centered
        maxWidth={900}
      />

      <section className="max-w-[1280px] mx-auto py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-18">
          <Card className="bg-white border border-navy/8 rounded-2xl p-9 shadow-none">
            <div className="text-[13px] font-semibold text-orangeDark tracking-[0.05em] uppercase mb-3">
              Mission
            </div>
            <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[19px] text-textDark leading-[1.5] m-0">
              To help fuel, oil, gas, and energy companies modernise their operations through reliable software, practical automation, secure systems, physical security, and long-term technical support.
            </p>
          </Card>
          <Card className="bg-white border border-navy/8 rounded-2xl p-9 shadow-none">
            <div className="text-[13px] font-semibold text-orangeDark tracking-[0.05em] uppercase mb-3">
              Vision
            </div>
            <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[19px] text-textDark leading-[1.5] m-0">
              To become a trusted technology partner for fuel and energy businesses in KRG and the wider region.
            </p>
          </Card>
        </div>

        <div className="mb-6">
          <div className="font-['Plus_Jakarta_Sans'] font-bold text-[26px] text-textDark mb-8 text-center">
            Our values
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4.5">
            {values.map((v) => (
              <Card key={v} className="bg-white border border-navy/8 rounded-xl p-5.5 text-center shadow-none">
                <div className="font-bold text-[15px] text-textDark">{v}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navyMid">
        <div className="max-w-[1280px] mx-auto py-18 px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-white mb-2.5">
              Industry focus
            </div>
            <p className="text-[14.5px] text-white/60 leading-[1.65] m-0">
              We build exclusively for fuel, oil, gas, refinery, and energy operations — not generic business software adapted after the fact.
            </p>
          </div>
          <div>
            <div className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-white mb-2.5">
              Technical expertise
            </div>
            <p className="text-[14.5px] text-white/60 leading-[1.65] m-0">
              Software development, ERP, cybersecurity, and physical security under one roof, so systems work together by design.
            </p>
          </div>
          <div>
            <div className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-white mb-2.5">
              Local understanding
            </div>
            <p className="text-[14.5px] text-white/60 leading-[1.65] m-0">
              We understand the operational, regulatory, and connectivity realities of running a fuel business in KRG and the region.
            </p>
          </div>
        </div>
      </section>

      <CTABand heading="Let's talk about your operation" buttonLabel="Contact Us" />
      <Footer />
    </div>
  );
}
