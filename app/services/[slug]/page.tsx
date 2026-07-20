import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/data/services';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getService(params.slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: service.name,
    description: service.listingDesc,
    keywords: [
      service.name,
      'Glaban engineering services',
      'petroleum IT deployment',
      'fuel system integration',
      'KRG energy engineering',
    ],
    alternates: {
      canonical: `https://glaban.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | Glaban Enterprise Fuel & Energy Platform`,
      description: service.listingDesc,
      url: `https://glaban.com/services/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.listingDesc,
    provider: {
      '@type': 'Organization',
      name: 'Glaban Technologies',
      url: 'https://glaban.com',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Kurdistan Region of Iraq (KRG) and Global',
    },
    url: `https://glaban.com/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailTemplate service={service} />
    </>
  );
}
