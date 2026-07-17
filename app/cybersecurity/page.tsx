import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/data/services';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Cybersecurity & SCADA Protection',
  description:
    'Protect critical energy infrastructure, forecourt controllers, SCADA networks, and refinery endpoints against targeted cyber threats with specialized OT and IT security solutions.',
  keywords: [
    'Industrial cybersecurity oil and gas',
    'SCADA network protection KRG',
    'Forecourt OT cybersecurity',
    'Refinery endpoint security',
    'Petroleum infrastructure cyber defense',
    'Energy sector cybersecurity Iraq',
  ],
  alternates: {
    canonical: 'https://glaban.com/cybersecurity',
  },
  openGraph: {
    title: 'Industrial Cybersecurity & SCADA Protection | Glaban Enterprise Fuel Platform',
    description:
      'Specialized operational technology (OT) and IT cybersecurity engineering engineered to protect refineries, forecourts, and energy infrastructure.',
    url: 'https://glaban.com/cybersecurity',
  },
};

export default function CybersecurityPage() {
  const service = getService('cybersecurity');
  if (!service) notFound();
  return <ServiceDetailTemplate service={service} />;
}
