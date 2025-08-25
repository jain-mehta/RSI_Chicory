import { COMPANY_ADDRESS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | RSI Chicory',
  description: `Get in touch with the RSI Chicory sales team for B2B inquiries, bulk pricing, and sample requests. Contact us via phone, email, or our online form. Located at ${COMPANY_ADDRESS}.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}