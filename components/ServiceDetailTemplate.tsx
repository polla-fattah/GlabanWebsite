import Header from './Header';
import Footer from './Footer';
import DetailHero from './DetailHero';
import CTABand from './CTABand';
import { colors } from '@/lib/colors';
import type { Service } from '@/lib/data/services';

export default function ServiceDetailTemplate({ service }: { service: Service }) {
  const d = service.detail;
  return (
    <div>
      <Header />
      <DetailHero
        icon={d.icon}
        iconBg={d.iconBg}
        iconColor={d.iconColor}
        eyebrow={d.eyebrow}
        eyebrowColor={d.iconColor}
        title={service.name}
        subtitle={d.heroSubtitle}
        ctaLabel={d.ctaLabel}
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 26, color: colors.textDark, margin: '0 0 32px' }}>
          {d.sectionHeading}
        </div>

        {d.layout === 'grid' && d.items && (
          <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {d.items.map((item) => (
              <div key={item} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: colors.textDark }}>{item}</div>
              </div>
            ))}
          </div>
        )}

        {d.layout === 'steps' && d.steps && (
          <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {d.steps.map((step, i) => (
              <div key={step} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 20 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 7,
                    background: colors.navy,
                    color: colors.orangeLight,
                    fontWeight: 700,
                    fontSize: 13,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 12,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.textDark, lineHeight: 1.4 }}>{step}</div>
              </div>
            ))}
          </div>
        )}

        {d.layout === 'checklist' && d.items && (
          <>
            <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginBottom: 24 }}>
              {d.items.map((item) => (
                <div key={item} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 20, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: colors.orange, fontSize: 13, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14.5, fontWeight: 600, color: colors.textDark }}>{item}</span>
                </div>
              ))}
            </div>
            {d.disclaimer && <p style={{ fontSize: 13, color: colors.textMuted, maxWidth: 700 }}>{d.disclaimer}</p>}
          </>
        )}

        {d.layout === 'training' && d.roles && d.items && (
          <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 20, color: colors.textDark, marginBottom: 18 }}>Who we train</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {d.roles.map((r) => (
                  <span key={r} style={{ background: colors.orangeTint, color: colors.orangeDark, fontSize: 13, fontWeight: 600, padding: '7px 14px', borderRadius: 16 }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 20, color: colors.textDark, marginBottom: 18 }}>What&apos;s included</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {d.items.map((i) => (
                  <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    <span style={{ color: colors.orange, fontSize: 13, marginTop: 2 }}>✓</span>
                    <span style={{ fontSize: 14, color: colors.textBody2 }}>{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <CTABand heading={d.closingHeading} buttonLabel="Contact Us" />
      <Footer />
    </div>
  );
}
