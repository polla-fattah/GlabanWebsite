import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/lib/colors';

export const metadata = { title: 'About Us | Glaban' };

const values = ['Reliability', 'Security', 'Practical solutions', 'Long-term support', 'Business understanding', 'Transparency', 'Local expertise', 'Continuous improvement'];

export default function AboutPage() {
  return (
    <div>
      <Header />
      <section style={{ background: colors.navy, padding: '72px 32px 64px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeLight, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>
            About Glaban
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 38, color: '#fff', margin: '0 0 18px', lineHeight: 1.25 }}>
            A technology partner built around the fuel and energy sector
          </h1>
          <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.65)', lineHeight: 1.7, margin: 0 }}>
            Glaban provides software, cybersecurity, and physical security solutions for oil, gas, refinery, station, propane, and industrial businesses across KRG and the wider region.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px' }}>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 72 }}>
          <div style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 16, padding: 36 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 12 }}>
              Mission
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 19, color: colors.textDark, lineHeight: 1.5, margin: 0 }}>
              To help fuel, oil, gas, and energy companies modernise their operations through reliable software, practical automation, secure systems, physical security, and long-term technical support.
            </p>
          </div>
          <div style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 16, padding: 36 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 12 }}>
              Vision
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 19, color: colors.textDark, lineHeight: 1.5, margin: 0 }}>
              To become a trusted technology partner for fuel and energy businesses in KRG and the wider region.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 26, color: colors.textDark, marginBottom: 32, textAlign: 'center' }}>
            Our values
          </div>
          <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {values.map((v) => (
              <div key={v} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 22, textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: colors.textDark }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: colors.navyMid }}>
        <div className="glb-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 10 }}>Industry focus</div>
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.6)', lineHeight: 1.65, margin: 0 }}>
              We build exclusively for fuel, oil, gas, refinery, and energy operations — not generic business software adapted after the fact.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 10 }}>Technical expertise</div>
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.6)', lineHeight: 1.65, margin: 0 }}>
              Software development, ERP, cybersecurity, and physical security under one roof, so systems work together by design.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 10 }}>Local understanding</div>
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.6)', lineHeight: 1.65, margin: 0 }}>
              We understand the operational, regulatory, and connectivity realities of running a fuel business in KRG and the region.
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: colors.textDark, margin: '0 0 14px' }}>
          Let&apos;s talk about your operation
        </h2>
        <Link href="/contact" style={{ display: 'inline-block', background: colors.orange, color: colors.navy, fontWeight: 600, fontSize: 15, padding: '14px 26px', borderRadius: 8, textDecoration: 'none' }}>
          Contact Us
        </Link>
      </section>

      <Footer />
    </div>
  );
}
