import Header from './Header';
import Footer from './Footer';
import DetailHero from './DetailHero';
import CTABand from './CTABand';
import { colors } from '@/lib/colors';
import type { Product } from '@/lib/data/products';

export default function ProductDetailTemplate({ product }: { product: Product }) {
  const d = product.detail;
  return (
    <div>
      <Header />
      <DetailHero
        icon={d.icon}
        iconBg={d.iconBg}
        iconColor={d.iconColor}
        eyebrow={d.eyebrow}
        eyebrowColor={d.iconColor}
        title={product.name}
        subtitle={d.heroSubtitle}
        ctaLabel={d.ctaLabel}
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 56, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 24, color: colors.textDark, marginBottom: 16 }}>
              {d.sectionHeading}
            </div>
            <p style={{ fontSize: 15.5, color: colors.textBody, lineHeight: 1.7, margin: '0 0 20px' }}>{d.sectionBody}</p>
            <div style={{ fontSize: 12, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 12 }}>
              Target Customers
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {d.customers.map((c) => (
                <span key={c} style={{ background: colors.orangeTint, color: colors.orangeDark, fontSize: 12.5, fontWeight: 600, padding: '6px 12px', borderRadius: 16 }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 16 }}>
              Feature Areas
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {d.features.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: colors.orange, fontSize: 13, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14, color: colors.textBody2 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand heading={d.closingHeading} subtitle={d.closingSubtitle} buttonLabel="Contact Us" />
      <Footer />
    </div>
  );
}
