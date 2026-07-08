import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { colors } from '@/lib/colors';
import { solutionItems } from '@/lib/data/solutions';

export const metadata = { title: 'Solutions | Glaban' };

export default function SolutionsPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="Solutions"
        title="Tell us your problem. We'll show you the solution."
        subtitle="Browse by the challenge you're facing rather than product names."
      />

      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 32px 96px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {solutionItems.map((it) => (
          <div key={it.problem} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 14, padding: '28px 30px' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 18, color: colors.textDark, marginBottom: 8 }}>
              &quot;{it.problem}&quot;
            </div>
            <div style={{ fontSize: 15, color: colors.textBody, lineHeight: 1.6, marginBottom: 16 }}>{it.solution}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              {it.benefits.map((b) => (
                <span key={b} style={{ background: colors.orangeTint, color: colors.orangeDark, fontSize: 12.5, fontWeight: 600, padding: '6px 12px', borderRadius: 16 }}>
                  {b}
                </span>
              ))}
            </div>
            <Link href={it.href} style={{ fontSize: 13.5, fontWeight: 600, color: colors.orange, textDecoration: 'none' }}>
              See related product →
            </Link>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
