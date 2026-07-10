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

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 96px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {industries.map((ind) => (
          <div key={ind.name} className="glb-grid" style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 16, padding: 36, display: 'grid', gridTemplateColumns: '.6fr 1.4fr', gap: 36 }}>
            <div>
              <div style={{ fontSize: 26, color: colors.orange, marginBottom: 18 }}>
                <i className={ind.icon}></i>
              </div>
              <div style={{ fontWeight: 700, fontSize: 21, color: colors.textDark, marginBottom: 10 }}>{ind.name}</div>
              <div style={{ fontSize: 14.5, color: colors.textBody, lineHeight: 1.6 }}>{ind.desc}</div>
            </div>
            <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 10 }}>
                  Common Problems
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {ind.problems.map((p) => (
                    <div key={p} style={{ fontSize: 14, color: colors.textBody2, lineHeight: 1.5 }}>
                      • {p}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: colors.orange, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 10 }}>
                  Recommended
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {ind.recs.map((r) => (
                    <div key={r} style={{ fontSize: 14, color: colors.textBody2, lineHeight: 1.5 }}>
                      • {r}
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display: 'inline-block', marginTop: 14, fontSize: 13.5, fontWeight: 600, color: colors.orange, textDecoration: 'none' }}>
                  Talk to us about {ind.name} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
