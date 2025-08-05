import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="RSI Chicory Home">
      <svg width="140" height="60" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .rsi-text {
              font-family: Arial, sans-serif;
              font-weight: bold;
              font-size: 40px;
            }
            .chicory-text {
              font-family: Arial, sans-serif;
              font-weight: bold;
              font-size: 14px;
              fill: #6b2b2b;
            }
            .leaf {
              fill: #7CBB4A;
            }
          `}
        </style>
        
        {/* Left Olive Branch */}
        <g transform="translate(10, 40) scale(0.8)">
          <g>
            <path className="leaf" d="M -35 20 l 15 -5" stroke="#7CBB4A" strokeWidth="4"/>
            <path className="leaf" d="M -37 10 l 15 -5" stroke="#7CBB4A" strokeWidth="4"/>
            <path className="leaf" d="M -39 0 l 15 -5" stroke="#7CBB4A" strokeWidth="4"/>
            <path className="leaf" d="M -39 -10 l 15 -5" stroke="#7CBB4A" strokeWidth="4"/>
          </g>
        </g>

        {/* Text */}
        <text x="100" y="40" textAnchor="middle" className="rsi-text">
          <tspan fill="#2E4C9E">RS</tspan>
          <tspan fill="#B81C22">I</tspan>
        </text>
        <text x="100" y="58" textAnchor="middle" className="chicory-text">CHICORY</text>

        {/* Right Olive Branch */}
        <g transform="translate(190, 40) scale(-0.8, 0.8)">
          <g>
            <path className="leaf" d="M -35 20 l 15 -5" stroke="#7CBB4A" strokeWidth="4"/>
            <path className="leaf" d="M -37 10 l 15 -5" stroke="#7CBB4A" strokeWidth="4"/>
            <path className="leaf" d="M -39 0 l 15 -5" stroke="#7CBB4A" strokeWidth="4"/>
            <path className="leaf" d="M -39 -10 l 15 -5" stroke="#7CBB4A" strokeWidth="4"/>
          </g>
        </g>
      </svg>
    </Link>
  );
};

export default Logo;
