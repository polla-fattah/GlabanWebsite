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
    <div>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_75%_-10%,#16314F_0%,#0A1930_55%,#07101F_100%)]">
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="max-w-[1280px] mx-auto py-22 px-8 relative grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-14 items-center">
          <div>
            <Badge className="inline-flex items-center gap-2 bg-orange/12 hover:bg-orange/12 border border-orange/35 px-3.5 py-1.5 rounded-full mb-6 text-[13px] text-orangeLight font-semibold shadow-none">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              <span>Built for the fuel &amp; energy sector</span>
            </Badge>
            <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-4xl sm:text-[52px] leading-[1.12] text-white mb-5.5 tracking-[-0.01em]">
              Complete solutions for energy companies
            </h1>
            <p className="text-lg leading-[1.65] text-white/68 max-w-[560px] mb-8.5 m-0">
              ERP, POS, fuel quota, propane and bulk gas delivery, location-based task management, cybersecurity, CCTV, and surveillance — built for oil, gas, refinery, station, and energy businesses in KRG and beyond.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Button
                asChild
                className="bg-orange hover:bg-orangeDark text-navy font-semibold text-[15.5px] px-7 py-3.5 h-auto rounded-lg no-underline"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/8 hover:bg-white/12 border-white/18 text-white font-semibold text-[15.5px] px-7 py-3.5 h-auto rounded-lg no-underline shadow-none"
              >
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-[#0F2440] border border-white/10 rounded-2xl p-6 shadow-[0_30px_70px_rgba(0,0,0,.45)] text-white">
              <div className="flex justify-between items-center mb-4.5">
                <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-semibold text-white/85">
                  Network Dashboard — Live
                </span>
                <span className="flex gap-1.5 items-center text-[11.5px] text-[#5FD68A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5FD68A]" />
                  Online
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3.5">
                <div className="bg-white/4 rounded-lg p-4">
                  <div className="text-xs text-white/50 mb-1.5">Stations Online</div>
                  <div className="font-['Plus_Jakarta_Sans'] text-[26px] font-bold text-white">42/44</div>
                </div>
                <div className="bg-white/4 rounded-lg p-4">
                  <div className="text-xs text-white/50 mb-1.5">Deliveries Today</div>
                  <div className="font-['Plus_Jakarta_Sans'] text-[26px] font-bold text-white">318</div>
                </div>
              </div>
              <div className="bg-white/4 rounded-lg p-4 mb-3.5">
                <div className="flex justify-between text-xs text-white/50 mb-2.5">
                  <span>Fuel Quota Usage</span>
                  <span>76%</span>
                </div>
                <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                  <div className="w-[76%] h-full bg-gradient-to-r from-orange to-orangeLight" />
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="flex-1 bg-orange/14 border border-orange/30 rounded-lg p-3 text-center">
                  <div className="text-[11px] text-orangeLight">Security</div>
                  <div className="font-semibold text-white text-[13px] mt-0.5">No Threats</div>
                </div>
                <div className="flex-1 bg-orange/14 border border-orange/30 rounded-lg p-3 text-center">
                  <div className="text-[11px] text-orangeLight">CCTV</div>
                  <div className="font-semibold text-white text-[13px] mt-0.5">32 Cameras Live</div>
                </div>
              </div>
            </Card>
            <div className="absolute -bottom-5.5 -left-5.5 bg-white rounded-xl py-3.5 px-4.5 shadow-[0_20px_40px_rgba(0,0,0,.35)] flex items-center gap-2.5">
              <div className="w-8.5 h-8.5 rounded-lg bg-orangeTint flex items-center justify-center text-base text-orangeDark">
                <i className="fa-solid fa-gas-pump"></i>
              </div>
              <div>
                <div className="text-xs text-[#8A97A3]">System Uptime</div>
                <div className="font-bold text-textDark text-[15px]">99.9%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="max-w-[1280px] mx-auto py-24 px-8">
        <div className="max-w-[640px] mx-auto mb-14 text-center">
          <div className="text-[13px] font-semibold text-orangeDark tracking-[0.06em] uppercase mb-3">
            The problem
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[34px] text-textDark mb-3.5 leading-[1.25] m-0">
            Fuel and energy operations run on too many disconnected systems
          </h2>
          <p className="text-base text-textBody leading-[1.6] m-0">
            Manual processes and weak security create risk at every branch, station, and depot.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p) => (
            <Card key={p.text} className="bg-white border border-navy/8 rounded-xl p-6 shadow-none">
              <div className="text-[22px] text-orange mb-4">
                <i className={p.icon}></i>
              </div>
              <div className="font-semibold text-[15px] text-textDark leading-[1.4]">{p.text}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section className="bg-navyMid">
        <div className="max-w-[1280px] mx-auto py-24 px-8">
          <div className="flex justify-between items-end mb-11 flex-wrap gap-5">
            <div>
              <div className="text-[13px] font-semibold text-orangeLight tracking-[0.06em] uppercase mb-3">
                Our solutions
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[34px] text-white max-w-[600px] leading-[1.25] m-0">
                One connected platform across every part of your operation
              </h2>
            </div>
            <Link href="/solutions" className="text-orangeLight font-semibold text-[15px] no-underline whitespace-nowrap hover:underline">
              Browse all solutions →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {solutionsOverview.map((s) => (
              <Card key={s.text} className="bg-white/4 border border-white/8 rounded-xl p-5 shadow-none text-white">
                <div className="text-xl text-orangeLight mb-3">
                  <i className={s.icon}></i>
                </div>
                <div className="font-semibold text-[14.5px] text-white leading-[1.35]">{s.text}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS HIGHLIGHT */}
      <section className="max-w-[1280px] mx-auto py-24 px-8">
        <div className="flex justify-between items-end mb-11 flex-wrap gap-5">
          <div>
            <div className="text-[13px] font-semibold text-orangeDark tracking-[0.06em] uppercase mb-3">
              Products
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[34px] text-textDark leading-[1.25] m-0">
              Purpose-built software for fuel operations
            </h2>
          </div>
          <Link href="/products" className="text-orangeDark font-semibold text-[15px] no-underline whitespace-nowrap hover:underline">
            View all products →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5">
          {homeProducts.slice(0, 6).map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="glb-card-link block bg-white border border-navy/8 rounded-2xl p-6.5 no-underline"
            >
              <div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-4.5">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/5" />
              </div>
              <div className="font-bold text-[17px] text-textDark mb-2">{p.name}</div>
              <div className="text-[14.5px] text-textBody leading-[1.55] mb-3.5">{p.listingDesc}</div>
              <div className="text-[13.5px] font-semibold text-orangeDark">{p.homeBenefit}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section className="bg-grayBg">
        <div className="max-w-[1280px] mx-auto py-24 px-8">
          <div className="flex justify-between items-end mb-11 flex-wrap gap-5">
            <div>
              <div className="text-[13px] font-semibold text-orangeDark tracking-[0.06em] uppercase mb-3">
                Services
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[34px] text-textDark leading-[1.25] m-0">
                Full lifecycle delivery, security, and support
              </h2>
            </div>
            <Link href="/services" className="text-orangeDark font-semibold text-[15px] no-underline whitespace-nowrap hover:underline">
              View all services →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={s.slug === 'cybersecurity' || s.slug === 'cctv-physical-security' ? `/${s.slug}` : `/services/${s.slug}`}
                className="glb-card-link block bg-white border border-navy/8 rounded-xl p-5.5 no-underline"
              >
                <div className="relative w-full h-[160px] rounded-lg overflow-hidden mb-4">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/5" />
                </div>
                <div className="font-bold text-[15px] text-textDark mb-1.5">{s.name}</div>
                <div className="text-[13.5px] text-textBody leading-[1.5]">{s.listingDesc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-[1280px] mx-auto py-24 px-8">
        <div className="max-w-[640px] mx-auto mb-12 text-center">
          <div className="text-[13px] font-semibold text-orangeDark tracking-[0.06em] uppercase mb-3">
            Industries served
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[34px] text-textDark leading-[1.25] mb-3.5 m-0">
            Trusted across the fuel and energy value chain
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((i) => (
            <Card key={i.name} className="flex items-center gap-3.5 bg-white border border-navy/8 rounded-xl py-4.5 px-5 shadow-none">
              <div className="text-xl text-orange shrink-0">
                <i className={i.icon}></i>
              </div>
              <div className="font-semibold text-[14.5px] text-textDark">{i.name}</div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-7">
          <Link href="/industries" className="text-orange font-semibold text-[15px] no-underline hover:underline">
            See industry-specific solutions →
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-navy">
        <div className="max-w-[1280px] mx-auto py-24 px-8 grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-15 items-center">
          <div>
            <div className="text-[13px] font-semibold text-orangeLight tracking-[0.06em] uppercase mb-3">
              Why Glaban
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[34px] text-white leading-[1.25] mb-4.5 m-0">
              A technology partner that understands the fuel business
            </h2>
            <p className="text-base text-white/65 leading-[1.65] m-0">
              We combine deep fuel-sector experience with software, security, and physical protection expertise — and stay with you long after go-live.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
            {whyUs.map((w) => (
              <div key={w} className="flex gap-3 items-start">
                <div className="w-5.5 h-5.5 rounded-md bg-orange/18 text-orangeLight flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="text-[14.5px] text-white/82 font-medium leading-[1.5]">{w}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto py-20 px-8">
        <div className="bg-gradient-to-r from-navyLight to-navy rounded-2xl py-16 px-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(226,134,27,.18),transparent_55%)] pointer-events-none" />
          <div className="relative">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] text-white mb-3.5 m-0">
              Ready to modernise your operations?
            </h2>
            <p className="text-base text-white/65 max-w-[520px] mx-auto mb-7 m-0">
              Talk to our team about ERP, security, and surveillance solutions built for your business.
            </p>
            <Button
              asChild
              className="bg-orange hover:bg-orangeDark text-navy font-semibold text-base px-8 py-4 h-auto rounded-lg no-underline"
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
