'use client';

import { useState, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SUPPORT_FORM_ENDPOINT } from '@/lib/formEndpoints';

const productOptions = [
  'Fuel ERP',
  'Gas Station POS',
  'Fuel Card / Fleet Card',
  'Fuel Limit / Quota',
  'Propane Cylinder System',
  'Other',
];
const issueTypes = ['Technical Issue', 'Bug Report', 'Training Request', 'Other'];
const urgencyLevels = ['Low', 'Normal', 'High / Emergency'];

const channels = [
  { label: 'Support Email', value: 'support@glaban.com' },
  { label: 'Support Phone', value: '+964 750 6611033' },
  { label: 'Working Hours', value: 'Sat–Thu, 8:00–18:00' },
  { label: 'Emergency Support', value: 'Available for critical outages' },
];

const covered = [
  'Support channels and working hours',
  'Maintenance options',
  'Update policy',
  'Bug reporting',
  'Training support',
  'Emergency support',
  'Hosting support',
  'Backup and restore support',
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
      <PageHero
        eyebrow="Support"
        title="We're here after go-live"
        subtitle="Reach our support team directly, or submit a request below."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-12">
        <div>
          <div className="flex flex-col gap-3.5 mb-8">
            {channels.map((c) => (
              <Card key={c.label} className="bg-white border border-navy/8 rounded-xl shadow-none">
                <CardHeader className="p-5 pb-1">
                  <CardTitle className="font-bold text-[15px] text-textDark">{c.label}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-sm text-textBody">{c.value}</CardContent>
              </Card>
            ))}
          </div>
          <div className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-textDark mb-3.5">
            What we cover
          </div>
          <div className="flex flex-col gap-2.5">
            {covered.map((i) => (
              <div key={i} className="flex gap-2.5 items-start">
                <div className="text-orange text-[11px] mt-1">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="text-sm text-textBody2">{i}</span>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-white border border-navy/8 rounded-2xl shadow-none">
          <CardContent className="p-9">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-textDark mb-5.5">
                  Submit a support request
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">Company Name *</Label>
                    <Input name="company" className="h-10 bg-white" />
                  </div>
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">Contact Person *</Label>
                    <Input name="contact" className="h-10 bg-white" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">Phone Number *</Label>
                    <Input name="phone" className="h-10 bg-white" />
                  </div>
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">Email *</Label>
                    <Input name="email" type="email" className="h-10 bg-white" />
                  </div>
                </div>
                <div className="mb-4">
                  <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">Product or System</Label>
                  <Select name="product" defaultValue={productOptions[0]}>
                    <SelectTrigger className="w-full bg-white h-10">
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      {productOptions.map((o) => (
                        <SelectItem key={o} value={o}>
                          {o}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">Issue Type</Label>
                    <Select name="issueType" defaultValue={issueTypes[0]}>
                      <SelectTrigger className="w-full bg-white h-10">
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        {issueTypes.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">Urgency</Label>
                    <Select name="urgency" defaultValue={urgencyLevels[1]}>
                      <SelectTrigger className="w-full bg-white h-10">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyLevels.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mb-5.5">
                  <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">Issue Description *</Label>
                  <Textarea name="description" rows={4} className="bg-white" />
                </div>
                {error && <div className="text-destructive text-[13.5px] mb-3.5">{error}</div>}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-orange hover:bg-orangeDark text-navy font-semibold text-[15px] px-[26px] py-3.5 h-auto rounded-lg"
                >
                  {submitting ? 'Sending…' : 'Submit Request'}
                </Button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-[52px] h-[52px] rounded-full bg-orangeTint text-orange flex items-center justify-center text-2xl mx-auto mb-4.5">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="font-['Plus_Jakarta_Sans'] font-bold text-[19px] text-textDark mb-2">Request received</div>
                <p className="text-[14.5px] text-textBody m-0">Our support team will contact you shortly.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
