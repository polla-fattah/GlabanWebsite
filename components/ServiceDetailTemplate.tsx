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
        iconBg="transparent"
        iconColor={colors.orange}
        eyebrow={d.eyebrow}
        eyebrowColor={colors.orangeLight}
        title={service.name}
        subtitle={d.heroSubtitle}
        ctaLabel={d.ctaLabel}
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 64, marginBottom: 72 }}>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: colors.textDark, marginBottom: 20 }}>
              {d.sectionHeading}
            </div>
            <p style={{ fontSize: 16, color: colors.textBody, lineHeight: 1.8, margin: '0 0 32px' }}>{d.sectionBody}</p>

            <div style={{ background: colors.grayBg, borderRadius: 16, padding: 32, marginBottom: 40 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.orangeDark, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 20 }}>
                Core Service Benefits
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {d.benefits.map((b) => (
                  <div key={b} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: colors.orange, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flex: 'none' }}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: colors.textDark }}>{b}</div>
                  </div>
                ))}
              </div>
            </div>

            {d.roles && (
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: colors.textMuted, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 16 }}>
                  Target User Roles
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {d.roles.map((r) => (
                    <span key={r} style={{ background: colors.orangeTint, color: colors.orangeDark, fontSize: 13, fontWeight: 600, padding: '7px 14px', borderRadius: 12 }}>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {d.disclaimer && <p style={{ fontSize: 13, color: colors.textMuted, maxWidth: 700, marginTop: 24 }}>{d.disclaimer}</p>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
             <div style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 16, padding: 32 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: colors.textDark, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 20 }}>
                  Technical Scope
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 14 }}>
                  {(d.items || d.steps || []).map((f) => (
                    <div key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ color: colors.orange, fontSize: 11, marginTop: 4 }}>
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span style={{ fontSize: 14.5, color: colors.textBody2, lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: colors.navy, borderRadius: 16, padding: 32, color: '#fff' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: colors.orangeLight, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 20 }}>
                  Engagement Process
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {d.howItWorks.map((h, i) => (
                    <div key={h} style={{ display: 'flex', gap: 16 }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,.1)', lineHeight: 1 }}>
                        0{i + 1}
                      </div>
                      <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,.85)', lineHeight: 1.5 }}>{h}</div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </section>

      <CTABand heading={d.closingHeading} buttonLabel={d.ctaLabel} />
      <Footer />
    </div>
  );
}
