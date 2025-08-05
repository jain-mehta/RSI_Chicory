// This file is the root layout for the application.
// It is required by Next.js to exist and to contain <html> and <body> tags.

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
        <body>
            {children}
        </body>
    </html>
  );
}
