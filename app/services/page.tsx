import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { colors } from '@/lib/colors';
import { services } from '@/lib/data/services';

export const metadata = { title: 'Services | Glaban' };

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Services"
        eyebrowColor={colors.orangeLight}
        title="End-to-end delivery, security, and long-term support"
        subtitle="From custom development and implementation to cybersecurity, physical security, and ongoing maintenance — we stay with you after go-live."
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 96px' }}>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={s.slug === 'cybersecurity' || s.slug === 'cctv-physical-security' ? `/${s.slug}` : `/services/${s.slug}`}
              className="glb-card-link"
              style={{ display: 'block', background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 14, padding: 28, textDecoration: 'none' }}
            >
              <div style={{ position: 'relative', width: '100%', height: 220, borderRadius: 12, overflow: 'hidden', marginBottom: 20 }}>
                <img src={s.image} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(10,25,48,0.08))' }} />
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, color: colors.textDark, marginBottom: 10 }}>{s.name}</div>
              <div style={{ fontSize: 14.5, color: colors.textBody, lineHeight: 1.6, marginBottom: 16 }}>{s.listingDesc}</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: colors.orange }}>Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: colors.navyMid }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: '#fff', margin: '0 0 14px' }}>
            Need a service package for your business?
          </h2>
          <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.6)', margin: '0 0 26px' }}>
            Tell us about your operation and we&apos;ll recommend the right mix of services.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: colors.orange, color: colors.navy, fontWeight: 600, fontSize: 15, padding: '14px 26px', borderRadius: 8, textDecoration: 'none' }}>
            Request Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
