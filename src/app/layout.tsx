import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers/Providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Shipping Tracker',
    template: '%s | Shipping Tracker',
  },
  description:
    'Track shipment status from multiple couriers in real-time with accurate delivery updates.',
  applicationName: 'Shipping Tracker',
  keywords: [
    'shipment tracking',
    'resi',
    'tracking paket',
    'logistics',
    'courier tracking',
  ],
  authors: [{ name: 'Mico Febrian' }],
  creator: 'Mico Febrian',
  publisher: 'Shipping Tracker',
  metadataBase: new URL('https://your-domain.com'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Shipping Tracker',
    description:
      'Track shipment status from multiple couriers in real-time with accurate delivery updates.',
    siteName: 'Shipping Tracker',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shipping Tracker',
    description:
      'Track shipment status from multiple couriers in real-time with accurate delivery updates.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
