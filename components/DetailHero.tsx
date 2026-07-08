import Link from 'next/link';
import { colors } from '@/lib/colors';

export default function DetailHero({
  icon,
  iconBg,
  iconColor,
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  ctaLabel,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
}) {
  return (
    <section style={{ background: colors.navy, padding: '72px 32px 64px' }}>
      <div className="glb-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
              }}
            >
              <i className={icon} style={{ color: iconColor }} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: eyebrowColor, letterSpacing: '.06em', textTransform: 'uppercase' }}>{eyebrow}</div>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 38, color: '#fff', margin: '0 0 16px', maxWidth: 680, lineHeight: 1.2 }}>
            {title}
          </h1>
          <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.65)', maxWidth: 620, lineHeight: 1.65, margin: 0 }}>{subtitle}</p>
        </div>
        <Link
          href="/contact"
          style={{
            background: colors.orange,
            color: colors.navy,
            fontWeight: 600,
            fontSize: 15,
            padding: '14px 26px',
            borderRadius: 8,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
