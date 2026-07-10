import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/lib/colors';
import { products } from '@/lib/data/products';
import { industries } from '@/lib/data/industries';

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
const homeServices = [
  { icon: 'fa-solid fa-shield-halved', name: 'Cybersecurity', desc: 'Secure your servers, ERP platforms, and critical business data.', href: '/cybersecurity' },
  { icon: 'fa-solid fa-video', name: 'CCTV & Physical Security', desc: 'Professional surveillance for stations, depots, and industrial sites.', href: '/cctv-physical-security' },
  { icon: 'fa-solid fa-gear', name: 'ERP Implementation', desc: 'Expert configuration, data migration, and deployment support.', href: '/services/erp-implementation' },
  { icon: 'fa-solid fa-chalkboard-user', name: 'Training & Support', desc: 'On-site and remote training to ensure your team is ready.', href: '/services/training-support' },
];

export default function HomePage() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          background: 'radial-gradient(ellipse at 75% -10%, #16314F 0%, #0A1930 55%, #07101F 100%)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            opacity: 0.6,
          }}
        />
        <div className="glb-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px 96px', position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(226,134,27,.12)', border: '1px solid rgba(226,134,27,.35)', padding: '7px 14px', borderRadius: 20, marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: colors.orange }} />
              <span style={{ fontSize: 13, color: colors.orangeLight, fontWeight: 600 }}>Built for the fuel &amp; energy sector</span>
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 52, lineHeight: 1.12, color: '#fff', margin: '0 0 22px', letterSpacing: '-.01em' }}>
              Complete solutions for energy companies
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,.68)', maxWidth: 560, margin: '0 0 34px' }}>
              ERP, POS, fuel quota, propane and bulk gas delivery, location-based task management, cybersecurity, CCTV, and surveillance — built for oil, gas, refinery, station, and energy businesses in KRG and beyond.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: colors.orange, color: colors.navy, fontWeight: 600, fontSize: 15.5, padding: '15px 28px', borderRadius: 8, textDecoration: 'none' }}>
                Contact Us
              </Link>
              <Link href="/solutions" style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.18)', color: '#fff', fontWeight: 600, fontSize: 15.5, padding: '15px 28px', borderRadius: 8, textDecoration: 'none' }}>
                Explore Solutions
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ background: '#0F2440', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 24, boxShadow: '0 30px 70px rgba(0,0,0,.45)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.85)' }}>Network Dashboard — Live</span>
                <span style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: 11.5, color: '#5FD68A' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5FD68A' }} />
                  Online
                </span>
              </div>
              <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                <div style={{ background: 'rgba(255,255,255,.04)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6 }}>Stations Online</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 700, color: '#fff' }}>42/44</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,.04)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6 }}>Deliveries Today</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 700, color: '#fff' }}>318</div>
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,.04)', borderRadius: 10, padding: 16, marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 10 }}>
                  <span>Fuel Quota Usage</span>
                  <span>76%</span>
                </div>
                <div style={{ height: 8, borderRadius: 5, background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}>
                  <div style={{ width: '76%', height: '100%', background: `linear-gradient(90deg, ${colors.orange}, ${colors.orangeLight})` }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <div style={{ flex: 1, background: 'rgba(226,134,27,.14)', border: '1px solid rgba(226,134,27,.3)', borderRadius: 10, padding: 12, textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: colors.orangeLight }}>Security</div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: 13, marginTop: 3 }}>No Threats</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(226,134,27,.14)', border: '1px solid rgba(226,134,27,.3)', borderRadius: 10, padding: 12, textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: colors.orangeLight }}>CCTV</div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: 13, marginTop: 3 }}>32 Cameras Live</div>
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: -22, left: -22, background: '#fff', borderRadius: 12, padding: '14px 18px', boxShadow: '0 20px 40px rgba(0,0,0,.35)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: colors.orangeTint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: colors.orangeDark }}>
                <i className="fa-solid fa-gas-pump"></i>
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#8A97A3' }}>System Uptime</div>
                <div style={{ fontWeight: 700, color: colors.textDark, fontSize: 15 }}>99.9%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto 56px', textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 12 }}>The problem</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 34, color: colors.textDark, margin: '0 0 14px', lineHeight: 1.25 }}>
            Fuel and energy operations run on too many disconnected systems
          </h2>
          <p style={{ fontSize: 16, color: colors.textBody, lineHeight: 1.6, margin: 0 }}>Manual processes and weak security create risk at every branch, station, and depot.</p>
        </div>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {problems.map((p) => (
            <div key={p.text} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 22, color: colors.orange, marginBottom: 16 }}>
                <i className={p.icon}></i>
              </div>
              <div style={{ fontWeight: 600, fontSize: 15, color: colors.textDark, lineHeight: 1.4 }}>{p.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section style={{ background: colors.navyMid }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeLight, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 12 }}>Our solutions</div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 34, color: '#fff', margin: 0, maxWidth: 600, lineHeight: 1.25 }}>
                One connected platform across every part of your operation
              </h2>
            </div>
            <Link href="/solutions" style={{ color: colors.orangeLight, fontWeight: 600, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Browse all solutions →
            </Link>
          </div>
          <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {solutionsOverview.map((s) => (
              <div key={s.text} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 20, color: colors.orangeLight, marginBottom: 12 }}>
                  <i className={s.icon}></i>
                </div>
                <div style={{ fontWeight: 600, fontSize: 14.5, color: '#fff', lineHeight: 1.35 }}>{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS HIGHLIGHT */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 12 }}>Products</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 34, color: colors.textDark, margin: 0, lineHeight: 1.25 }}>
              Purpose-built software for fuel operations
            </h2>
          </div>
          <Link href="/products" style={{ color: colors.orangeDark, fontWeight: 600, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            View all products →
          </Link>
        </div>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {homeProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="glb-card-link"
              style={{ display: 'block', background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 14, padding: 26, textDecoration: 'none' }}
            >
              <div style={{ fontSize: 24, color: colors.orange, marginBottom: 18 }}>
                <i className={p.listingIcon}></i>
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, color: colors.textDark, marginBottom: 8 }}>{p.name}</div>
              <div style={{ fontSize: 14.5, color: colors.textBody, lineHeight: 1.55, marginBottom: 14 }}>{p.listingDesc}</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: colors.orangeDark }}>{p.homeBenefit}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section style={{ background: colors.grayBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 12 }}>Services</div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 34, color: colors.textDark, margin: 0, lineHeight: 1.25 }}>
                Full lifecycle delivery, security, and support
              </h2>
            </div>
            <Link href="/services" style={{ color: colors.orangeDark, fontWeight: 600, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              View all services →
            </Link>
          </div>
          <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {homeServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="glb-card-link"
                style={{ display: 'block', background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 22, textDecoration: 'none' }}
              >
                <div style={{ fontSize: 18, color: colors.orange, marginBottom: 12 }}>
                  <i className={s.icon}></i>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: colors.textDark, marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontSize: 13.5, color: colors.textBody, lineHeight: 1.5 }}>{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto 48px', textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 12 }}>Industries served</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 34, color: colors.textDark, margin: '0 0 14px', lineHeight: 1.25 }}>
            Trusted across the fuel and energy value chain
          </h2>
        </div>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {industries.map((i) => (
            <div key={i.name} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: '18px 20px' }}>
              <div style={{ fontSize: 20, color: colors.orange, flex: 'none' }}>
                <i className={i.icon}></i>
              </div>
              <div style={{ fontWeight: 600, fontSize: 14.5, color: colors.textDark }}>{i.name}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link href="/industries" style={{ color: colors.orange, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
            See industry-specific solutions →
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: colors.navy }}>
        <div className="glb-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px', display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeLight, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 12 }}>Why Glaban</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 34, color: '#fff', margin: '0 0 18px', lineHeight: 1.25 }}>
              A technology partner that understands the fuel business
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.65)', lineHeight: 1.65, margin: 0 }}>
              We combine deep fuel-sector experience with software, security, and physical protection expertise — and stay with you long after go-live.
            </p>
          </div>
          <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {whyUs.map((w) => (
              <div key={w} style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(226,134,27,.18)', color: colors.orangeLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flex: 'none', marginTop: 2 }}>
                  ✓
                </div>
                <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,.82)', fontWeight: 500, lineHeight: 1.5 }}>{w}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ background: `linear-gradient(120deg, ${colors.navyLight}, ${colors.navy})`, borderRadius: 20, padding: '64px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(226,134,27,.18), transparent 55%)' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 32, color: '#fff', margin: '0 0 14px' }}>
              Ready to modernise your operations?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.65)', margin: '0 0 28px', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
              Talk to our team about ERP, security, and surveillance solutions built for your business.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', background: colors.orange, color: colors.navy, fontWeight: 600, fontSize: 16, padding: '16px 32px', borderRadius: 8, textDecoration: 'none' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
