'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/lib/colors';
import { faqs } from '@/lib/data/faqs';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <Header />
      <section style={{ background: colors.navy, padding: '72px 32px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeLight, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>
            FAQ
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 40, color: '#fff', margin: '0 0 12px' }}>
            Frequently asked questions
          </h1>
        </div>
      </section>

      <section style={{ maxWidth: 840, margin: '0 auto', padding: '64px 32px 96px' }}>
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.q} style={{ borderBottom: '1px solid rgba(10,25,48,.1)', padding: '20px 0' }}>
              <div
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: 16 }}
              >
                <div style={{ fontWeight: 600, fontSize: 16, color: colors.textDark }}>{f.q}</div>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    background: colors.orangeTint,
                    color: colors.orangeDark,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    flex: 'none',
                    transform: `rotate(${isOpen ? 45 : 0}deg)`,
                    transition: 'transform .15s',
                  }}
                >
                  +
                </div>
              </div>
              {isOpen && <p style={{ fontSize: 14.5, color: colors.textBody, lineHeight: 1.65, margin: '14px 0 0' }}>{f.a}</p>}
            </div>
          );
        })}
      </section>

      <section style={{ background: colors.grayBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 26, color: colors.textDark, margin: '0 0 14px' }}>
            Still have questions?
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
