import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rsichicory.com'),

  /* -------- <title> (~55–60 chars, brand + core term up front) -------- */
  title: 'RSI Chicory® Bulk Manufacturer, India',

  /* -------- <meta description> (<160 chars, value prop + CTAs) -------- */
  description:
    'ISO-certified Indian producer of bulk roasted chicory cubes, granules, powder & liquid extract. Fully traceable contract-farm supply for coffee, food & beverage manufacturers worldwide.',

  /* -------- <meta keywords> (<600 chars) -------- */
  keywords:
    'RSI Chicory, RS Impex, chicory manufacturer India, bulk chicory supplier, roasted chicory cubes exporter, chicory granules wholesale, food-grade chicory powder, liquid chicory extract, contract farming chicory, traceable chicory roots, instant coffee chicory blend ingredients, organic chicory India, HACCP chicory processing, APEDA chicory exporter, custom roast chicory, bulk soluble chicory, premium chicory ingredients',

  /* -------- Open Graph -------- */
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rsichicory.com',
    siteName: 'RSI Chicory®',
    title: 'RSI Chicory® | Premium Bulk Chicory Ingredients from India',
    description:
      'Trusted B2B partner for roasted chicory cubes, granules, powder & extracts. Global export, ISO & FSSAI compliant, full traceability from farm to factory.',
    images: [
      {
        url: 'src/assets/images/About us page hero image.png',          // use a real 1200×630 hero image, not favicon
        width: 1200,
        height: 630,
        alt: 'Bulk Roasted Chicory Cubes & Powder – RSI Chicory',
      },
    ],
  },

  /* -------- Twitter Card -------- */
  twitter: {
    card: 'summary_large_image',
    title: 'RSI Chicory® | Bulk Roasted & Soluble Chicory Supplier',
    description:
      'ISO-certified Indian manufacturer exporting premium chicory ingredients for coffee & food industries.',
  },

  /* -------- Robots -------- */
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

  /* -------- Verification -------- */
  verification: {
    google: 'G-9HG8H5FS72',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-body antialiased`} suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9HG8H5FS72"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9HG8H5FS72');
          `}
        </Script>

        <div className="flex min-h-screen flex-col">
          <Header />
          {/* Vercel Analytics */}
          <Analytics />
          {/* Main Content Area */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
