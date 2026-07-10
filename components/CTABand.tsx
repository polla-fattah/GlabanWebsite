import Link from 'next/link';
import { colors } from '@/lib/colors';

export default function CTABand({
  heading,
  subtitle,
  buttonLabel = 'Contact Us',
  href = '/contact',
  onDark = false,
}: {
  heading: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
  onDark?: boolean;
}) {
  return (
    <section style={{ background: onDark ? colors.navyMid : colors.grayBg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 28,
            color: onDark ? '#fff' : colors.textDark,
            margin: '0 0 14px',
          }}
        >
          {heading}
        </h2>
        {subtitle && (
          <p style={{ fontSize: 15.5, color: onDark ? 'rgba(255,255,255,.6)' : colors.textBody, margin: '0 0 26px' }}>{subtitle}</p>
        )}
        <Link
          href={href}
          style={{
            display: 'inline-block',
            background: colors.orange,
            color: colors.navy,
            fontWeight: 600,
            fontSize: 15,
            padding: '14px 26px',
            borderRadius: 8,
            textDecoration: 'none',
            marginTop: subtitle ? 0 : 8,
          }}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
