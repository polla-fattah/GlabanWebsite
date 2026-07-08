import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DetailHero from '@/components/DetailHero';
import CTABand from '@/components/CTABand';
import { colors } from '@/lib/colors';

export const metadata = { title: 'Cybersecurity Services | Glaban' };

const coreServices = [
  'Website security review', 'Server hardening', 'Admin panel protection', 'ERP and POS access control',
  'Database backup strategy', 'Access control review', 'Network security guidance', 'Email security',
  'Incident response', 'Security awareness training', 'Security monitoring', 'Vulnerability review',
];

const otItems = [
  'Industrial network review', 'Remote access security review', 'Pump and tank system exposure review',
  'CCTV/NVR network security review', 'Network segmentation guidance', 'Backup and recovery review',
  'Access control review', 'Security documentation', 'Risk assessment', 'Recommendations report',
];

export default function CybersecurityPage() {
  return (
    <div>
      <Header />
      <DetailHero
        icon="fa-solid fa-shield-halved"
        iconBg="rgba(47,111,224,.18)"
        iconColor={colors.blueLight}
        eyebrow="Service · Cybersecurity"
        eyebrowColor={colors.blueLight}
        title="Protect the systems your fuel business runs on"
        subtitle="From your website to your ERP and POS access controls, we harden the systems that keep your operation running — and cover the industrial networks unique to fuel and energy sites."
        ctaLabel="Request a Security Review"
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 26, color: colors.textDark, margin: '0 0 32px' }}>
          Cybersecurity services
        </div>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 64 }}>
          {coreServices.map((f) => (
            <div key={f} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: colors.textDark, lineHeight: 1.5 }}>{f}</div>
            </div>
          ))}
        </div>

        <div style={{ background: colors.navyMid, borderRadius: 16, padding: 44 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(31,157,110,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>
              🏭
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff' }}>Industrial &amp; OT Cybersecurity Assessment</div>
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.62)', lineHeight: 1.65, maxWidth: 760, margin: '0 0 24px' }}>
            A dedicated assessment and protection service covering the operational technology unique to fuel and energy sites — pump and tank system exposure, CCTV/NVR networks, and remote access.
          </p>
          <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 32px' }}>
            {otItems.map((o) => (
              <div key={o} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: colors.greenLight, fontSize: 13, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,.78)' }}>{o}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.4)', margin: '20px 0 0' }}>
            This is an assessment and protection service; it does not include industrial engineering or control-system reconfiguration.
          </p>
        </div>
      </section>

      <CTABand heading="Get a security review of your systems" subtitle="We'll review your current setup and recommend practical, prioritised improvements." />
      <Footer />
    </div>
  );
}
