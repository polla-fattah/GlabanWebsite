'use client';

import { useState, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { colors } from '@/lib/colors';
import { CONTACT_FORM_ENDPOINT } from '@/lib/formEndpoints';

const industryOptions = ['Oil company', 'Refinery', 'Gas station', 'Propane cylinder company', 'Bulk gas delivery company', 'Fuel distribution company', 'Fuel depot', 'Industrial gas customer', 'Company with employee fuel limits', 'Other'];
const interestOptions = ['Fuel ERP', 'Gas Station POS', 'Fuel Card / Fleet Card System', 'Fuel Limit / Quota System', 'Propane Cylinder System', 'Bulk Gas Delivery System', 'Delivery Dispatch', 'Location-Based Task Management', 'CCTV and Surveillance', 'Access Control', 'Cybersecurity', 'Fleet Tracking', 'Hosting and Maintenance', 'Custom Software', 'Consultation'];
const contactMethods = ['Email', 'Phone', 'WhatsApp'];

const info = [
  { label: 'Company', value: 'Glaban' },
  { label: 'Phone', value: '+964 750 000 0000' },
  { label: 'Email', value: 'info@glaban.com' },
  { label: 'Office', value: 'Erbil, Kurdistan Region, Iraq' },
  { label: 'Working Hours', value: 'Sat–Thu, 8:00–18:00' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get('_gotcha')) return; // honeypot

    if (!data.get('name') || !data.get('company') || !data.get('phone') || !data.get('email') || !data.get('message')) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError('There was a problem sending your message. Please email us directly at info@glaban.com.');
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
            Contact
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 40, color: '#fff', margin: '0 0 16px', maxWidth: 640, lineHeight: 1.2 }}>
            Let&apos;s talk about your operation
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.65)', maxWidth: 600, lineHeight: 1.6, margin: 0 }}>
            Tell us about your business and what you need — we&apos;ll follow up within one business day.
          </p>
        </div>
      </section>

      <section className="glb-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 96px', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {info.map((c) => (
            <div key={c.label} style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 12, padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: colors.textDark, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 14, color: colors.textBody }}>{c.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', border: '1px solid rgba(10,25,48,.08)', borderRadius: 16, padding: 36 }}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="glb-label">Full Name *</label>
                  <input className="glb-input" name="name" />
                </div>
                <div>
                  <label className="glb-label">Company Name *</label>
                  <input className="glb-input" name="company" />
                </div>
              </div>
              <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="glb-label">Job Title</label>
                  <input className="glb-input" name="title" />
                </div>
                <div>
                  <label className="glb-label">Phone Number *</label>
                  <input className="glb-input" name="phone" />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="glb-label">Email Address *</label>
                <input className="glb-input" name="email" type="email" />
              </div>
              <div className="glb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="glb-label">Industry Type</label>
                  <select className="glb-select" name="industry" defaultValue={industryOptions[0]}>
                    {industryOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="glb-label">Product / Service of Interest</label>
                  <select className="glb-select" name="interest" defaultValue={interestOptions[interestOptions.length - 1]}>
                    {interestOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="glb-label">Preferred Contact Method</label>
                <select className="glb-select" name="contactMethod" defaultValue={contactMethods[0]}>
                  {contactMethods.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: 22 }}>
                <label className="glb-label">Message *</label>
                <textarea className="glb-textarea" name="message" rows={4} />
              </div>
              {error && <div style={{ color: '#C0392B', fontSize: 13.5, marginBottom: 14 }}>{error}</div>}
              <button
                type="submit"
                disabled={submitting}
                style={{ background: colors.orange, color: colors.navy, fontWeight: 600, fontSize: 15, padding: '14px 26px', borderRadius: 8, border: 'none', cursor: submitting ? 'default' : 'pointer', opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '50px 0' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: colors.orangeTint, color: colors.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, margin: '0 auto 18px' }}>
                <i className="fa-solid fa-check"></i>
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 19, color: colors.textDark, marginBottom: 8 }}>Message sent</div>
              <p style={{ fontSize: 14.5, color: colors.textBody, margin: 0 }}>Thanks for reaching out — our team will contact you within one business day.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
