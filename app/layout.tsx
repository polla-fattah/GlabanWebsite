import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glaban | Digital, Cybersecurity & Physical Security for Fuel & Energy Companies',
  description:
    'Glaban provides ERP, POS, fuel quota, propane and bulk gas delivery, location-based task management, cybersecurity, CCTV, and surveillance solutions for oil, gas, refinery, station, and energy businesses in KRG and beyond.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="font-['Inter',sans-serif] min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
