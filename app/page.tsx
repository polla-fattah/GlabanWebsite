import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/data/products';
import { industries } from '@/lib/data/industries';
import { services } from '@/lib/data/services';

const problems = [
  { icon: 'fa-solid fa-clipboard-list', text: 'Manual sales tracking' },
  { icon: 'fa-solid fa-boxes-stacked', text: 'Weak stock control' },
  { icon: 'fa-solid fa-gas-pump', text: 'Uncontrolled employee fuel usage' },
  { icon: 'fa-solid fa-file-invoice', text: 'Paper-based delivery records' },
  { icon: 'fa-solid fa-building-circle-exclamation', text: 'Poor branch visibility' },
  { icon: 'fa-solid fa-chart-pie', text: 'No central ERP reporting' },
  { icon: 'fa-solid fa-unlock-keyhole', text: 'Weak cybersecurity' },
  { icon: 'fa-solid fa-video-slash', text: 'Poor physical security' },
];

const solutionsOverview = [
  { icon: 'fa-solid fa-calculator', text: 'Fuel ERP' },
  { icon: 'fa-solid fa-desktop', text: 'Gas Station POS' },
  { icon: 'fa-solid fa-gauge-high', text: 'Fuel Quotas' },
  { icon: 'fa-solid fa-fire-flame-simple', text: 'Propane Systems' },
  { icon: 'fa-solid fa-truck', text: 'Bulk Gas Delivery' },
  { icon: 'fa-solid fa-location-dot', text: 'Task Management' },
  { icon: 'fa-solid fa-shield-halved', text: 'Cybersecurity' },
  { icon: 'fa-solid fa-video', text: 'CCTV & Surveillance' },
  { icon: 'fa-solid fa-id-badge', text: 'Access Control' },
  { icon: 'fa-solid fa-screwdriver-wrench', text: 'Asset Maintenance' },
];

const whyUs = [
  'Deeply specialised in the fuel and energy sector',
  'Software, cybersecurity, and physical protection in one partner',
  'Direct understanding of KRG business workflows',
  'Flexible ready-made and custom-built solutions',
  'Commitment to long-term support and maintenance',
  'Hands-on staff training and implementation support',
  'Practical, results-oriented business approach',
];

const homeProducts = products.filter((p) => p.homeBenefit);

export default function HomePage() {
  return (
    <div className="bg-[#08090a] min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#08090a] border-b border-[#23252a]">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="max-w-[1280px] mx-auto py-24 px-8 relative grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-14 items-center">
          <div>
            <Badge className="inline-flex items-center gap-2 bg-[#0f1011] border border-[#23252a] px-3.5 py-1.5 rounded-full mb-6 text-[12px] text-[#8a8f98] font-normal shadow-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#02b8cc]" />
              <span>Built for the fuel &amp; energy sector</span>
            </Badge>
            <h1 className="font-medium text-4xl sm:text-[54px] leading-[1.08] text-white mb-6 tracking-[-0.022em]">
              Complete solutions for energy companies
            </h1>
            <p className="text-[16px] leading-[1.65] text-[#8a8f98] max-w-[580px] mb-9 m-0">
              ERP, POS, fuel quota, propane and bulk gas delivery, location-based task management, cybersecurity, CCTV, and surveillance — built for oil, gas, refinery, station, and energy businesses in KRG and beyond.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Button
                asChild
                className="bg-[#e4f222] hover:bg-[#e4f222]/90 text-[#08090a] font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md no-underline shadow-none transition-all"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-[#0f1011] hover:bg-[#161718] border border-[#23252a] text-[#d0d6e0] hover:text-white font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md no-underline shadow-none transition-all"
              >
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-[#0f1011] border border-[#23252a] rounded-xl p-6 shadow-none text-white">
              <div className="flex justify-between items-center mb-5 pb-3 border-b border-[#23252a]">
                <span className="font-medium text-[13px] text-[#d0d6e0] tracking-[-0.01em]">
                  Network Dashboard — Live
                </span>
                <span className="flex gap-1.5 items-center text-[11.5px] text-[#27a644] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27a644]" />
                  ONLINE
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3.5">
                <div className="bg-[#161718] border border-[#23252a] rounded-lg p-4">
                  <div className="text-[11px] font-medium text-[#8a8f98] uppercase tracking-wider mb-1.5">Stations Online</div>
                  <div className="text-[26px] font-medium text-white tracking-[-0.02em] font-mono">42/44</div>
                </div>
                <div className="bg-[#161718] border border-[#23252a] rounded-lg p-4">
                  <div className="text-[11px] font-medium text-[#8a8f98] uppercase tracking-wider mb-1.5">Deliveries Today</div>
                  <div className="text-[26px] font-medium text-white tracking-[-0.02em] font-mono">318</div>
                </div>
              </div>
              <div className="bg-[#161718] border border-[#23252a] rounded-lg p-4 mb-3.5">
                <div className="flex justify-between text-[12px] text-[#8a8f98] mb-2.5 font-medium">
                  <span>Fuel Quota Usage</span>
                  <span className="font-mono text-white">76%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#23252a] overflow-hidden">
                  <div className="w-[76%] h-full bg-[#02b8cc]" />
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="flex-1 bg-[#161718] border border-[#23252a] rounded-lg p-3 text-center">
                  <div className="text-[11px] text-[#8a8f98]">Security</div>
                  <div className="font-medium text-[#27a644] text-[13px] mt-0.5">No Threats</div>
                </div>
                <div className="flex-1 bg-[#161718] border border-[#23252a] rounded-lg p-3 text-center">
                  <div className="text-[11px] text-[#8a8f98]">CCTV Status</div>
                  <div className="font-medium text-white text-[13px] mt-0.5 font-mono">32 Cameras Live</div>
                </div>
              </div>
            </Card>
            <div className="absolute -bottom-5 -left-5 bg-[#161718] border border-[#23252a] rounded-xl py-3 px-4.5 shadow-none flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0f1011] border border-[#23252a] flex items-center justify-center text-sm text-[#e4f222]">
                <i className="fa-solid fa-gas-pump"></i>
              </div>
              <div>
                <div className="text-[11px] text-[#8a8f98] uppercase tracking-wider">System Uptime</div>
                <div className="font-medium text-white text-[14px] font-mono">99.99%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-[#08090a] py-24 border-b border-[#23252a]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-14 text-center">
            <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
              The problem
            </div>
            <h2 className="font-medium text-[32px] md:text-[36px] text-white mb-3.5 tracking-[-0.022em] leading-[1.15] m-0">
              Fuel and energy operations run on too many disconnected systems
            </h2>
            <p className="text-[16px] text-[#8a8f98] leading-[1.6] m-0">
              Manual processes and weak security create risk at every branch, station, and depot.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((p) => (
              <Card key={p.text} className="bg-[#0f1011] border border-[#23252a] rounded-xl p-6 shadow-none hover:border-[#383b3f] transition-colors">
                <div className="text-[18px] text-[#02b8cc] mb-4">
                  <i className={p.icon}></i>
                </div>
                <div className="font-medium text-[14.5px] text-white leading-[1.4]">{p.text}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section className="bg-[#0f1011] border-b border-[#23252a]">
        <div className="max-w-[1280px] mx-auto py-24 px-8">
          <div className="flex justify-between items-end mb-11 flex-wrap gap-5">
            <div>
              <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
                Our solutions
              </div>
              <h2 className="font-medium text-[32px] md:text-[36px] text-white max-w-[600px] tracking-[-0.022em] leading-[1.15] m-0">
                One connected platform across every part of your operation
              </h2>
            </div>
            <Link href="/solutions" className="text-[#02b8cc] hover:text-white font-medium text-[14px] no-underline whitespace-nowrap transition-colors">
              Browse all solutions →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {solutionsOverview.map((s) => (
              <Card key={s.text} className="bg-[#161718] border border-[#23252a] rounded-xl p-5 shadow-none text-white hover:border-[#383b3f] transition-colors">
                <div className="text-lg text-[#e4f222] mb-3">
                  <i className={s.icon}></i>
                </div>
                <div className="font-medium text-[14px] text-white leading-[1.35]">{s.text}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS HIGHLIGHT */}
      <section className="bg-[#08090a] py-24 border-b border-[#23252a]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-11 flex-wrap gap-5">
            <div>
              <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
                Products
              </div>
              <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] leading-[1.15] m-0">
                Purpose-built software for fuel operations
              </h2>
            </div>
            <Link href="/products" className="text-[#02b8cc] hover:text-white font-medium text-[14px] no-underline whitespace-nowrap transition-colors">
              View all products →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeProducts.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="glb-card-link block bg-[#0f1011] border border-[#23252a] rounded-xl p-6 no-underline hover:border-[#383b3f] transition-all shadow-none"
              >
                <div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-4 border border-[#23252a]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 via-transparent to-transparent" />
                </div>
                <div className="font-medium text-[17px] text-white mb-2 tracking-[-0.01em]">{p.name}</div>
                <div className="text-[14px] text-[#8a8f98] leading-[1.55] mb-4">{p.listingDesc}</div>
                <div className="text-[13px] font-medium text-[#02b8cc]">{p.homeBenefit}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section className="bg-[#0f1011] py-24 border-b border-[#23252a]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-11 flex-wrap gap-5">
            <div>
              <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
                Services
              </div>
              <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] leading-[1.15] m-0">
                Full lifecycle delivery, security, and support
              </h2>
            </div>
            <Link href="/services" className="text-[#02b8cc] hover:text-white font-medium text-[14px] no-underline whitespace-nowrap transition-colors">
              View all services →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={s.slug === 'cybersecurity' || s.slug === 'cctv-physical-security' ? `/${s.slug}` : `/services/${s.slug}`}
                className="glb-card-link block bg-[#161718] border border-[#23252a] rounded-xl p-5 no-underline hover:border-[#383b3f] transition-all shadow-none"
              >
                <div className="relative w-full h-[150px] rounded-lg overflow-hidden mb-4 border border-[#23252a]">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 via-transparent to-transparent" />
                </div>
                <div className="font-medium text-[15px] text-white mb-1.5">{s.name}</div>
                <div className="text-[13px] text-[#8a8f98] leading-[1.5]">{s.listingDesc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#08090a] py-24 border-b border-[#23252a]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-12 text-center">
            <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
              Industries served
            </div>
            <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] leading-[1.15] mb-3.5 m-0">
              Trusted across the fuel and energy value chain
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {industries.map((i) => (
              <Card key={i.name} className="flex items-center gap-3.5 bg-[#0f1011] border border-[#23252a] rounded-xl py-4 px-5 shadow-none hover:border-[#383b3f] transition-colors">
                <div className="text-lg text-[#02b8cc] shrink-0">
                  <i className={i.icon}></i>
                </div>
                <div className="font-medium text-[14px] text-white">{i.name}</div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="text-[#02b8cc] hover:text-white font-medium text-[14px] no-underline transition-colors">
              See industry-specific solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#0f1011] py-24 border-b border-[#23252a]">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-14 items-center">
          <div>
            <div className="text-[12px] font-medium text-[#8a8f98] tracking-[0.08em] uppercase mb-3">
              Why Glaban
            </div>
            <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] leading-[1.15] mb-4.5 m-0">
              A technology partner that understands the fuel business
            </h2>
            <p className="text-[16px] text-[#8a8f98] leading-[1.65] m-0">
              We combine deep fuel-sector experience with software, security, and physical protection expertise — and stay with you long after go-live.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((w) => (
              <div key={w} className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-md bg-[#161718] border border-[#23252a] text-[#02b8cc] flex items-center justify-center text-[10px] shrink-0 mt-0.5 shadow-none">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="text-[14px] text-[#d0d6e0] font-normal leading-[1.5]">{w}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#08090a] py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-[#0f1011] border border-[#23252a] rounded-2xl py-16 px-12 text-center relative overflow-hidden shadow-none">
            <div className="relative">
              <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] mb-3.5 m-0">
                Ready to modernise your operations?
              </h2>
              <p className="text-[16px] text-[#8a8f98] max-w-[540px] mx-auto mb-8 leading-[1.6] m-0">
                Talk to our team about ERP, security, and surveillance solutions built for your business.
              </p>
              <Button
                asChild
                className="bg-[#e4f222] hover:bg-[#e4f222]/90 text-[#08090a] font-medium text-[15px] px-8 py-4 h-auto rounded-md no-underline shadow-none transition-all"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
