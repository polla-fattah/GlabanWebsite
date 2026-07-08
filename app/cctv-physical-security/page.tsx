import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DetailHero from '@/components/DetailHero';
import CTABand from '@/components/CTABand';
import { colors } from '@/lib/colors';

export const metadata = { title: 'CCTV & Physical Security | Glaban' };

const standard = [
  'CCTV camera installation', 'IP camera systems', 'NVR/DVR setup', 'Remote viewing configuration',
  'Camera coverage planning', 'Gate monitoring', 'Entrance and exit monitoring', 'Fuel pump area monitoring',
  'Cashier and counter monitoring', 'Warehouse and tank area monitoring', 'Alarm integration', 'Access control integration', 'Maintenance and support',
];

const advanced = [
  'Perimeter intrusion detection', 'Thermal cameras', 'Vehicle entrance monitoring',
  'Licence plate recognition', 'Restricted-zone alerts', 'Control room setup', 'Central monitoring dashboard',
];

export default function CctvPage() {
  return (
    <div>
      <Header />
      <DetailHero
        icon="fa-solid fa-video"
        iconBg="rgba(31,157,110,.18)"
        iconColor={colors.greenLight}
        eyebrow="Service · Physical Security"
        eyebrowColor={colors.greenLight}
        title="CCTV, surveillance, and physical security for every site"
        subtitle="Coverage designed around fuel operations — pump areas, cashier counters, warehouses, tanks, gates, and perimeters — with central monitoring for multi-branch visibility."
        ctaLabel="Request a Site Survey"
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 26, color: colors.textDark, margin: '0 0 32px' }}>
          Standard coverage
        </div>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 64 }}>
          {standard.map((f) => (
            <div key={f} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: colors.textDark, lineHeight: 1.5 }}>{f}</div>
            </div>
          ))}
        </div>

        <div style={{ background: colors.navyMid, borderRadius: 16, padding: 44 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 8 }}>
            For larger sites &amp; depots
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.62)', lineHeight: 1.65, maxWidth: 760, margin: '0 0 24px' }}>
            Advanced coverage for refineries, depots, and multi-branch operations that need broader perimeter and vehicle monitoring.
          </p>
          <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 32px' }}>
            {advanced.map((a) => (
              <div key={a} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: colors.greenLight, fontSize: 13, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,.78)' }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Get a coverage plan for your site" subtitle="We'll walk your site and recommend camera placement, monitoring, and integration options." />
      <Footer />
    </div>
  );
}
