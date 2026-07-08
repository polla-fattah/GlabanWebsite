import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { colors } from '@/lib/colors';
import { services } from '@/lib/data/services';

export const metadata = { title: 'Services | Glaban' };

const cards = [
  ...services.slice(0, 4).map((s) => ({ icon: s.listingIcon, name: s.name, desc: s.listingDesc, href: `/services/${s.slug}` })),
  { icon: '🔐', name: 'Cybersecurity Services', desc: 'Website, server, ERP, and network security for fuel-sector businesses.', href: '/cybersecurity' },
  { icon: '🏭', name: 'Industrial & OT Cybersecurity Assessment', desc: services.find((s) => s.slug === 'industrial-ot-cybersecurity')!.listingDesc, href: '/services/industrial-ot-cybersecurity' },
  { icon: '📹', name: 'CCTV, Surveillance & Physical Security', desc: 'Camera installation, monitoring, and control-room setup for every site.', href: '/cctv-physical-security' },
  ...services.slice(5).map((s) => ({ icon: s.listingIcon, name: s.name, desc: s.listingDesc, href: `/services/${s.slug}` })),
];

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Services"
        eyebrowColor={colors.blueLight}
        title="End-to-end delivery, security, and long-term support"
        subtitle="From custom development and implementation to cybersecurity, physical security, and ongoing maintenance — we stay with you after go-live."
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 96px' }}>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="glb-card-link"
              style={{ display: 'block', background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 14, padding: 28, textDecoration: 'none' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 10, background: colors.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 18 }}>
                {c.icon}
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, color: colors.textDark, marginBottom: 10 }}>{c.name}</div>
              <div style={{ fontSize: 14.5, color: colors.textBody, lineHeight: 1.6, marginBottom: 16 }}>{c.desc}</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: colors.blue }}>Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: colors.navyMid }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: '#fff', margin: '0 0 14px' }}>
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
