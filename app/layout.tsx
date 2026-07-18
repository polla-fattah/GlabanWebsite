import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://glaban.com'),
  title: {
    default: 'Glaban | Enterprise Fuel & Energy Operations Platform, POS & ERP',
    template: '%s | Glaban Enterprise Fuel & Energy Platform',
  },
  description:
    'Purpose-built enterprise software, gas station POS, forecourt controller automation, fuel quota management, propane distribution ERP, fleet card systems, industrial cybersecurity, and CCTV physical surveillance for oil, gas, refinery, depot, and energy businesses in KRG and globally.',
  keywords: [
    'Fuel ERP software',
    'Gas station POS system',
    'Forecourt automation controller',
    'Fleet card management system',
    'Fuel quota management software',
    'Propane bulk gas distribution ERP',
    'SCADA industrial cybersecurity',
    'Petroleum logistics software',
    'C-store forecourt automation',
    'CCTV physical security energy sector',
    'Oil and gas enterprise software KRG',
    'Kurdistan fuel management software',
    'Refinery management system',
    'Glaban Technologies',
  ],
  authors: [{ name: 'Glaban Engineering Team', url: 'https://glaban.com' }],
  creator: 'Glaban Technologies',
  publisher: 'Glaban Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://glaban.com',
    title: 'Glaban | Enterprise Fuel & Energy Operations Platform, POS & ERP',
    description:
      'Purpose-built enterprise software, gas station POS, forecourt controller automation, fleet management, industrial cybersecurity, and CCTV physical surveillance for fuel and energy operations.',
    siteName: 'Glaban Enterprise Fuel & Energy Platform',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Glaban Enterprise Fuel & Energy Operations Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glaban | Enterprise Fuel & Energy Operations Platform, POS & ERP',
    description:
      'Purpose-built enterprise software, gas station POS, forecourt controller automation, and industrial cybersecurity for oil, gas, and energy companies.',
    creator: '@glaban_tech',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://glaban.com',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Glaban Technologies',
  url: 'https://glaban.com',
  logo: 'https://glaban.com/logo.png',
  description:
    'Enterprise software, POS, forecourt automation, industrial cybersecurity, and CCTV physical security systems for fuel and energy companies.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Kurdistan Region of Iraq (KRG)',
    addressCountry: 'IQ',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales and technical support',
    email: 'info@glaban.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/glaban',
    'https://twitter.com/glaban_tech',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Glaban Enterprise Fuel & Energy Platform',
  url: 'https://glaban.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://glaban.com/products?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} font-['Inter',sans-serif] min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
