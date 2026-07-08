'use client';

import { useState, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/lib/colors';
import { SUPPORT_FORM_ENDPOINT } from '@/lib/formEndpoints';

const productOptions = ['Fuel ERP', 'Gas Station POS', 'Fuel Card / Fleet Card', 'Fuel Limit / Quota', 'Propane Cylinder System', 'Other'];
const issueTypes = ['Technical Issue', 'Bug Report', 'Training Request', 'Other'];
const urgencyLevels = ['Low', 'Normal', 'High / Emergency'];

const channels = [
  { label: 'Support Email', value: 'support@glaban.com' },
  { label: 'Support Phone', value: '+964 750 000 0001' },
  { label: 'Working Hours', value: 'Sat–Thu, 8:00–18:00' },
  { label: 'Emergency Support', value: 'Available for critical outages' },
];

const covered = [
  'Support channels and working hours', 'Maintenance options', 'Update policy', 'Bug reporting',
  'Training support', 'Emergency support', 'Hosting support', 'Backup and restore support',
];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get('_gotcha')) return;

    if (!data.get('company') || !data.get('contact') || !data.get('phone') || !data.get('email') || !data.get('description')) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      const res = await fetch(SUPPORT_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError('There was a problem sending your request. Please email us directly at support@glaban.com.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Header />
      <section style={{ background: colors.navy, padding: '72px 32px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.orangeLight, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>
            Support
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 40, color: '#fff', margin: '0 0 16px', maxWidth: 720, lineHeight: 1.2 }}>
            We&apos;re here after go-live
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.65)', maxWidth: 640, lineHeight: 1.6, margin: 0 }}>
            Reach our support team directly, or submit a request below.
          </p>
        </div>
      </section>

      <section className="glb-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 96px', display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
            {channels.map((c) => (
              <div key={c.label} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: colors.textDark, marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 14, color: colors.textBody }}>{c.value}</div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: colors.textDark, marginBottom: 14 }}>What we cover</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {covered.map((i) => (
              <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                <span style={{ color: colors.green, fontSize: 13, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 14, color: colors.textBody2 }}>{i}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 16, padding: 36 }}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: colors.textDark, marginBottom: 22 }}>
                Submit a support request
              </div>
              <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="glb-label">Company Name *</label>
                  <input className="glb-input" name="company" />
                </div>
                <div>
                  <label className="glb-label">Contact Person *</label>
                  <input className="glb-input" name="contact" />
                </div>
              </div>
              <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="glb-label">Phone Number *</label>
                  <input className="glb-input" name="phone" />
                </div>
                <div>
                  <label className="glb-label">Email *</label>
                  <input className="glb-input" name="email" type="email" />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="glb-label">Product or System</label>
                <select className="glb-select" name="product" defaultValue={productOptions[0]}>
                  {productOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="glb-label">Issue Type</label>
                  <select className="glb-select" name="issueType" defaultValue={issueTypes[0]}>
                    {issueTypes.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="glb-label">Urgency</label>
                  <select className="glb-select" name="urgency" defaultValue={urgencyLevels[1]}>
                    {urgencyLevels.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <label className="glb-label">Issue Description *</label>
                <textarea className="glb-textarea" name="description" rows={4} />
              </div>
              {error && <div style={{ color: '#C0392B', fontSize: 13.5, marginBottom: 14 }}>{error}</div>}
              <button
                type="submit"
                disabled={submitting}
                style={{ background: colors.orange, color: colors.navy, fontWeight: 600, fontSize: 15, padding: '14px 26px', borderRadius: 8, border: 'none', cursor: submitting ? 'default' : 'pointer', opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? 'Sending…' : 'Submit Request'}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: colors.greenTint, color: colors.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, margin: '0 auto 18px' }}>
                ✓
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 19, color: colors.textDark, marginBottom: 8 }}>Request received</div>
              <p style={{ fontSize: 14.5, color: colors.textBody, margin: 0 }}>Our support team will contact you shortly.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
