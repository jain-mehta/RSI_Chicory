// This component creates a floating WhatsApp icon for direct chat access.
// It is positioned at the bottom-right of the screen for easy access on all pages.

import { WHATSAPP_NUMBER } from '@/lib/constants';
import { Button } from '../ui/button';
import Link from 'next/link';

const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello RSI Chicory, I'm interested in your products.")}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] p-0 shadow-lg transition-transform hover:scale-110 hover:bg-[#128C7E]"
      aria-label="Chat with us on WhatsApp"
    >
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-white"
          fill="currentColor"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.31 20.62C8.75 21.41 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.14C10.53 20.14 9.06 19.68 7.82 18.83L7.49 18.62L4.27 19.46L5.13 16.34L4.91 16C3.98 14.66 3.5 13.13 3.5 11.91C3.5 7.33 7.33 3.5 12.04 3.5C16.75 3.5 20.58 7.33 20.58 11.91C20.58 16.5 16.75 20.14 12.04 20.14ZM17.44 14.36C17.18 14.24 15.71 13.53 15.45 13.43C15.2 13.33 15.02 13.28 14.84 13.53C14.67 13.78 14.12 14.44 13.94 14.64C13.77 14.84 13.6 14.86 13.34 14.76C13.08 14.67 12.11 14.35 11 13.4C10.13 12.68 9.55 11.82 9.43 11.59C9.31 11.36 9.43 11.23 9.55 11.11C9.66 11 9.81 10.84 9.96 10.69C10.11 10.54 10.16 10.42 10.26 10.22C10.36 10.02 10.31 9.84 10.24 9.72C10.16 9.6 9.84 8.83 9.72 8.53C9.58 8.23 9.45 8.28 9.33 8.28C9.21 8.28 9.04 8.28 8.86 8.28C8.68 8.28 8.41 8.36 8.18 8.58C7.96 8.81 7.41 9.31 7.41 10.43C7.41 11.56 8.21 12.63 8.33 12.78C8.46 12.93 10.24 15.44 12.73 16.41C13.32 16.65 13.75 16.78 14.08 16.88C14.68 17.06 15.19 17.01 15.61 16.94C16.08 16.86 17.18 16.28 17.41 15.68C17.64 15.08 17.64 14.58 17.56 14.46C17.51 14.41 17.51 14.38 17.44 14.36Z" />
        </svg>
      </Link>
    </Button>
  );
};

export default WhatsAppButton;
