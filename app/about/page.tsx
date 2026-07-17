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
    <div className="bg-[#08090a] min-h-screen">
      <Header />
      <PageHero
        eyebrow="About Glaban"
        title="A technology partner built around the fuel and energy sector"
        subtitle="Glaban provides software, cybersecurity, and physical security solutions for oil, gas, refinery, station, propane, and industrial businesses across KRG and the wider region."
        centered
        maxWidth={900}
      />

      <section className="max-w-[1280px] mx-auto py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <Card className="bg-[#0f1011] border border-[#23252a] rounded-xl p-9 shadow-none hover:border-[#383b3f] transition-all">
            <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
              Mission
            </div>
            <p className="font-medium text-[18px] text-white leading-[1.55] m-0">
              To help fuel, oil, gas, and energy companies modernise their operations through reliable software, practical automation, secure systems, physical security, and long-term technical support.
            </p>
          </Card>
          <Card className="bg-[#0f1011] border border-[#23252a] rounded-xl p-9 shadow-none hover:border-[#383b3f] transition-all">
            <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
              Vision
            </div>
            <p className="font-medium text-[18px] text-white leading-[1.55] m-0">
              To become a trusted technology partner for fuel and energy businesses in KRG and the wider region.
            </p>
          </Card>
        </div>

        <div className="mb-6">
          <div className="font-medium text-[24px] text-white mb-8 text-center tracking-[-0.02em]">
            Our values
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v) => (
              <Card key={v} className="bg-[#0f1011] border border-[#23252a] rounded-xl p-5.5 text-center shadow-none hover:border-[#383b3f] transition-all">
                <div className="font-medium text-[14.5px] text-white">{v}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f1011] border-y border-[#23252a]">
        <div className="max-w-[1280px] mx-auto py-20 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-medium text-[20px] text-white mb-2.5 tracking-[-0.01em]">
              Industry focus
            </div>
            <p className="text-[15px] text-[#8a8f98] leading-[1.65] m-0">
              We build exclusively for fuel, oil, gas, refinery, and energy operations — not generic business software adapted after the fact.
            </p>
          </div>
          <div>
            <div className="font-medium text-[20px] text-white mb-2.5 tracking-[-0.01em]">
              Technical expertise
            </div>
            <p className="text-[15px] text-[#8a8f98] leading-[1.65] m-0">
              Software development, ERP, cybersecurity, and physical security under one roof, so systems work together by design.
            </p>
          </div>
          <div>
            <div className="font-medium text-[20px] text-white mb-2.5 tracking-[-0.01em]">
              Local understanding
            </div>
            <p className="text-[15px] text-[#8a8f98] leading-[1.65] m-0">
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
