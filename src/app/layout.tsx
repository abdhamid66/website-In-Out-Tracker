import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'In-Out Tracker — Aplikasi Pencatat Keuangan Pribadi',
    template: '%s | In-Out Tracker',
  },
  description:
    'In-Out Tracker adalah aplikasi pencatat keuangan pribadi yang membantu Anda melacak pemasukan, pengeluaran, dan mengelola anggaran dengan mudah. Download gratis di Google Play.',
  keywords: [
    'expense tracker',
    'income tracker',
    'personal finance app',
    'budgeting app',
    'money management app',
    'finance tracker',
    'aplikasi keuangan',
    'pencatat pengeluaran',
    'manajemen keuangan',
    'android finance app',
  ],
  authors: [{ name: 'In-Out Tracker Team' }],
  creator: 'In-Out Tracker',
  publisher: 'In-Out Tracker',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://inouttracker.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    title: 'In-Out Tracker — Aplikasi Pencatat Keuangan Pribadi',
    description:
      'Kelola keuangan pribadi dengan mudah. Lacak pemasukan, pengeluaran, dan monitor saldo kapan saja. Download gratis!',
    siteName: 'In-Out Tracker',
    images: [
      {
        url: '/seo/og-image.png',
        width: 1200,
        height: 630,
        alt: 'In-Out Tracker App Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'In-Out Tracker — Aplikasi Pencatat Keuangan Pribadi',
    description: 'Kelola keuangan pribadi dengan mudah. Download gratis!',
    images: ['/seo/og-image.png'],
    creator: '@inouttracker',
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
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'Finance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'In-Out Tracker',
              description:
                'Aplikasi pencatat keuangan pribadi yang membantu Anda melacak pemasukan dan pengeluaran',
              operatingSystem: 'Android',
              applicationCategory: 'FinanceApplication',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'IDR',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '1000',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-white selection:bg-teal-100 selection:text-teal-900`} suppressHydrationWarning>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
