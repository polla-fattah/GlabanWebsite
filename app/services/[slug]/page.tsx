import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/data/services';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();
  return <ServiceDetailTemplate service={service} />;
}
