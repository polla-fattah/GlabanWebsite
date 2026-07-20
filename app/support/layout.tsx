import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Support & Technical Help Center',
  description:
    'Access 24/7 technical support, submit high-priority incident tickets, review SLAs, and request emergency forecourt or SCADA intervention from Glaban engineering specialists.',
  keywords: [
    'Glaban technical support',
    'Gas station POS emergency help desk',
    'Forecourt controller support ticket',
    'Petroleum ERP customer portal',
    '24/7 energy IT support KRG',
    'SCADA incident response',
  ],
  alternates: {
    canonical: 'https://glaban.com/support',
  },
  openGraph: {
    title: 'Customer Support & Technical Help Center | Glaban Fuel Platform',
    description:
      'Direct access to 24/7 technical support, ticket submission, and emergency engineering assistance for Glaban enterprise fuel systems.',
    url: 'https://glaban.com/support',
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
