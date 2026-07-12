import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/data/services';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export const metadata = { title: 'Cybersecurity Services | Glaban' };

export default function CybersecurityPage() {
  const service = getService('cybersecurity');
  if (!service) notFound();
  return <ServiceDetailTemplate service={service} />;
}
