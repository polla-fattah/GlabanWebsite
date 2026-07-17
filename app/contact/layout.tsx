import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Request a Demo',
  description:
    'Get in touch with Glaban engineering and sales teams to request a customized demo of our Fuel ERP, Gas Station POS, Forecourt Automation, or Industrial Cybersecurity solutions.',
  keywords: [
    'Contact Glaban',
    'Request fuel ERP demo',
    'Gas station POS quote KRG',
    'Forecourt automation consultation',
    'Petroleum IT support contact',
    'Glaban sales contact Iraq',
  ],
  alternates: {
    canonical: 'https://glaban.com/contact',
  },
  openGraph: {
    title: 'Contact Us & Request a Demo | Glaban Enterprise Fuel Platform',
    description:
      'Schedule a personalized architectural consultation or product demonstration with our petroleum and energy software specialists.',
    url: 'https://glaban.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
