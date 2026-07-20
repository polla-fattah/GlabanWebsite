import type { Metadata } from 'next';
import { faqs } from '@/lib/data/faqs';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description:
    'Find answers to common questions about Glaban fuel ERP implementation, gas station POS hardware integration, forecourt automation controllers, industrial cybersecurity, and support SLAs.',
  keywords: [
    'Glaban FAQ',
    'Fuel ERP questions',
    'Gas station POS integration questions',
    'Forecourt controller compatibility',
    'SCADA cybersecurity SLA',
    'Petroleum software deployment duration',
  ],
  alternates: {
    canonical: 'https://glaban.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Glaban Enterprise Fuel Platform',
    description:
      'Answers to critical technical, integration, security, and deployment questions regarding Glaban enterprise fuel software and POS hardware.',
    url: 'https://glaban.com/faq',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
