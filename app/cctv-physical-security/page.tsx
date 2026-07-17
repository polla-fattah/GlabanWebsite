import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/data/services';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CCTV & Physical Surveillance Systems for Forecourts & Refineries',
  description:
    'High-definition industrial surveillance, ANPR license plate recognition, thermal imaging, and physical security systems engineered for hazardous forecourts, bulk depots, and refinery perimeters.',
  keywords: [
    'CCTV security gas stations',
    'Forecourt physical surveillance',
    'ANPR license plate recognition fuel',
    'Explosion proof cameras petroleum',
    'Refinery perimeter security KRG',
    'Bulk depot surveillance system',
  ],
  alternates: {
    canonical: 'https://glaban.com/cctv-physical-security',
  },
  openGraph: {
    title: 'CCTV & Physical Surveillance Systems | Glaban Enterprise Fuel Platform',
    description:
      'Industrial-grade physical surveillance and AI-powered monitoring for gas stations, bulk depots, and refineries.',
    url: 'https://glaban.com/cctv-physical-security',
  },
};

export default function CctvPage() {
  const service = getService('cctv-physical-security');
  if (!service) notFound();
  return <ServiceDetailTemplate service={service} />;
}
