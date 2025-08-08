
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import WhatsAppButton from '@/components/shared/whatsapp-button';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'RSI Chicory - B2B Chicory Manufacturer & Supplier',
  description:
    'RSI Chicory is a leading B2B manufacturer and exporter of high-quality chicory products, including roasted chicory cubes, granules, powder, and liquid extract. We specialize in contract farming and traceable quality for global food and beverage industries.',
  keywords: 'chicory manufacturer, chicory supplier, B2B chicory, roasted chicory, chicory export, RS Impex, RSI Chicory, India chicory',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.variable} font-body antialiased`} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
