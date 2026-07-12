import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { colors } from '@/lib/colors';
import { industries } from '@/lib/data/industries';

export const metadata = { title: 'Industries | Glaban' };

export default function IndustriesPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Industries"
        eyebrowColor={colors.orangeLight}
        title="Built for every part of the fuel and energy value chain"
        subtitle="Each industry has different operational risks. We tailor products and services to match."
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 96px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        {industries.map((ind) => (
          <div key={ind.name} className="glb-grid" style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 16, padding: 40, display: 'grid', gridTemplateColumns: '.4fr .6fr', gap: 48 }}>
            <div>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: colors.orangeTint, color: colors.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 24 }}>
                <i className={ind.icon}></i>
              </div>
              <div style={{ fontWeight: 800, fontSize: 28, color: colors.textDark, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{ind.name}</div>
              <p style={{ fontSize: 16, color: colors.textBody, lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: colors.textMuted, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 14 }}>
                    Common Problems
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {ind.problems.map((p) => (
                      <div key={p} style={{ fontSize: 14, color: colors.textBody2, lineHeight: 1.4, display: 'flex', gap: 8 }}>
                        <div style={{ color: '#E74C3C', marginTop: 2 }}>
                          <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: colors.orange, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 14 }}>
                    Recommended Solutions
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {ind.recs.map((r) => (
                      <div key={r} style={{ fontSize: 14, color: colors.textBody2, lineHeight: 1.4, display: 'flex', gap: 8 }}>
                         <div style={{ color: colors.orange, marginTop: 2 }}>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/contact" style={{ display: 'inline-block', marginTop: 32, fontSize: 14, fontWeight: 700, color: colors.orange, textDecoration: 'none' }}>
                Consult with our {ind.name} experts →
              </Link>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
