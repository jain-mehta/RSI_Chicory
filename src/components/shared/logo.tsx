import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="RSI Chicory Home">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <path d="M12 2L1 9L12 22L23 9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 9L12 12L1 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12.5L12 16L19 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="hidden text-xl font-bold text-foreground sm:inline-block">
        RSI Chicory
      </span>
    </Link>
  );
};

export default Logo;
