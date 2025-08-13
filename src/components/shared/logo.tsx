import Link from 'next/link';
import logo from "@/assets/images/RSI.png"
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="RSI Chicory Home">
      <Image
        src={logo}
        alt="RSI Chicory Logo"
        className="h-12 w-16"
      />
    </Link>
  );
};

export default Logo;
