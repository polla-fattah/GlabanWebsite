import Link from 'next/link';
import { colors } from '@/lib/colors';

const social = [
  { label: 'in', href: '#' },
  { label: 'FB', href: '#' },
  { label: 'X', href: '#' },
];

const productLinks = [
  { label: 'Fuel ERP Platform', href: '/products/fuel-erp' },
  { label: 'Gas Station POS', href: '/products/gas-station-pos' },
  { label: 'Fuel Card & Fleet System', href: '/products/fuel-card-fleet-card-system' },
  { label: 'Propane Cylinder Mgmt', href: '/products/propane-cylinder-management' },
  { label: 'Location-Based Task Mgmt', href: '/products/location-based-task-management' },
  { label: 'View all products', href: '/products' },
];

const serviceLinks = [
  { label: 'Cybersecurity', href: '/cybersecurity' },
  { label: 'CCTV & Physical Security', href: '/cctv-physical-security' },
  { label: 'ERP Implementation', href: '/services/erp-implementation' },
  { label: 'Hosting & Backup', href: '/services/hosting-backup-disaster-recovery' },
  { label: 'Training & Support', href: '/services/training-support' },
  { label: 'View all services', href: '/services' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Support', href: '/support' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: colors.navyDeep, borderTop: '1px solid rgba(255,255,255,.08)' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '56px 32px 32px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                color: colors.navy,
                fontSize: 15,
              }}
            >
              G
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#fff' }}>GLABAN</span>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,.55)', maxWidth: 320, margin: '0 0 20px' }}>
            Complete digital, cybersecurity, and physical security solutions for fuel, oil, gas, refinery, and energy companies across KRG and the wider region.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'rgba(255,255,255,.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'rgba(255,255,255,.6)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#fff', letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 16 }}>
            Products
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {productLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#fff', letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 16 }}>
            Services
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {serviceLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#fff', letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 16 }}>
            Company
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 20 }}>
            {companyLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,.55)', lineHeight: 1.8 }}>
            <div>info@glaban.com</div>
            <div>+964 750 7700409</div>
            <div>Glaban Office, Makhmur Road, Erbil, Kurdistan Region (KRG), Iraq</div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,.08)',
          padding: '20px 32px',
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,.4)' }}>© 2026 Glaban. All rights reserved.</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,.4)' }}>Software · Cybersecurity · Physical Security for the Energy Sector</span>
      </div>
    </footer>
  );
}
