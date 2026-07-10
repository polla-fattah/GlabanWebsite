import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { colors } from '@/lib/colors';
import { products } from '@/lib/data/products';

export const metadata = { title: 'Products | Glaban' };

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Products"
        title="Purpose-built software for every part of your fuel operation"
        subtitle="From ERP and point-of-sale to fuel quotas, propane delivery, and executive dashboards — each product is designed around real fuel-sector workflows."
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 96px' }}>
        <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="glb-card-link"
              style={{ display: 'block', background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 14, padding: 28, textDecoration: 'none' }}
            >
              <div style={{ fontSize: 24, color: colors.orange, marginBottom: 20 }}>
                <i className={p.listingIcon}></i>
              </div>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: colors.orangeDark, letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 8 }}>
                {p.category}
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, color: colors.textDark, marginBottom: 10 }}>{p.name}</div>
              <div style={{ fontSize: 14.5, color: colors.textBody, lineHeight: 1.6, marginBottom: 16 }}>{p.listingDesc}</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: colors.orange }}>Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: colors.navyMid }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: '#fff', margin: '0 0 14px' }}>
            Not sure which product fits your business?
          </h2>
          <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.6)', margin: '0 0 26px' }}>
            Browse solutions by business problem, or talk to our team directly.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/solutions"
              style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.18)', color: '#fff', fontWeight: 600, fontSize: 15, padding: '14px 26px', borderRadius: 8, textDecoration: 'none' }}
            >
              Browse by Problem
            </Link>
            <Link href="/contact" style={{ background: colors.orange, color: colors.navy, fontWeight: 600, fontSize: 15, padding: '14px 26px', borderRadius: 8, textDecoration: 'none' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
