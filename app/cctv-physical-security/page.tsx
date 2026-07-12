import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/data/services';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export const metadata = { title: 'CCTV & Physical Security | Glaban' };

export default function CctvPage() {
  const service = getService('cctv-physical-security');
  if (!service) notFound();
  return <ServiceDetailTemplate service={service} />;
}
