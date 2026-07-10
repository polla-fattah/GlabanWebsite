import { colors } from '@/lib/colors';

export default function PageHero({
  eyebrow,
  eyebrowColor = colors.orangeLight,
  title,
  subtitle,
  centered = false,
  maxWidth = 720,
}: {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  maxWidth?: number;
}) {
  return (
    <section style={{ background: colors.navy, padding: centered ? '72px 32px 64px' : '72px 32px 56px' }}>
      <div style={{ maxWidth: centered ? 900 : 1280, margin: '0 auto', textAlign: centered ? 'center' : 'left' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: eyebrowColor,
            letterSpacing: '.06em',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          {eyebrow}
        </div>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 40,
            color: '#fff',
            margin: subtitle ? '0 0 16px' : 0,
            maxWidth: centered ? undefined : maxWidth,
            marginLeft: centered ? 'auto' : undefined,
            marginRight: centered ? 'auto' : undefined,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,.65)',
              maxWidth: centered ? undefined : 640,
              marginLeft: centered ? 'auto' : undefined,
              marginRight: centered ? 'auto' : undefined,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
