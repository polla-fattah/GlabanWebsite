import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/lib/colors';
import { caseStudies } from '@/lib/data/caseStudies';

export const metadata = { title: 'Customers & Case Studies | Glaban' };

export default function CaseStudiesPage() {
  return (
    <div>
      <Header />
      <section style={{ background: colors.navy, padding: '72px 32px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeLight, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>
            Customers &amp; Case Studies
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 40, color: '#fff', margin: '0 0 16px', maxWidth: 720, lineHeight: 1.2 }}>
            Real problems, real deployments
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.65)', maxWidth: 640, lineHeight: 1.6, margin: 0 }}>
            Case studies are presented anonymously where customer names are not yet approved for publication.
          </p>
        </div>
      </section>

      <section className="glb-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 96px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {caseStudies.map((c) => (
          <div key={c.title} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 16, padding: 32 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              <span style={{ background: colors.orangeTint, color: colors.orangeDark, fontSize: 12, fontWeight: 600, padding: '6px 12px', borderRadius: 16 }}>
                {c.industry}
              </span>
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 19, color: colors.textDark, marginBottom: 14 }}>{c.title}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: colors.textBody, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>Problem</div>
            <p style={{ fontSize: 14.5, color: colors.textBody2, lineHeight: 1.6, margin: '0 0 14px' }}>{c.problem}</p>
            <div style={{ fontSize: 12, fontWeight: 600, color: colors.textBody, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>Solution</div>
            <p style={{ fontSize: 14.5, color: colors.textBody2, lineHeight: 1.6, margin: '0 0 14px' }}>{c.solution}</p>
            <div style={{ fontSize: 12, fontWeight: 600, color: colors.textBody, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>Result</div>
            <p style={{ fontSize: 14.5, color: colors.green, fontWeight: 600, lineHeight: 1.6, margin: 0 }}>{c.result}</p>
          </div>
        ))}
      </section>

      <section style={{ background: colors.grayBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: colors.textDark, margin: '0 0 14px' }}>
            Become our next success story
          </h2>
          <Link href="/contact" style={{ display: 'inline-block', background: colors.orange, color: colors.navy, fontWeight: 600, fontSize: 15, padding: '14px 26px', borderRadius: 8, textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
