interface PerfumeBottleIconProps {
  size?: number;
  className?: string;
}

const PerfumeBottleIcon = ({ size = 22, className = "" }: PerfumeBottleIconProps) => (
  <svg
    width={size}
    height={size * 1.4}
    viewBox="0 0 322 628"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bottle body */}
    <path
      d="M80 250 C80 230, 100 200, 120 190 L120 160 L202 160 L202 190 C222 200, 242 230, 242 250 L242 560 C242 590, 220 610, 190 610 L132 610 C102 610, 80 590, 80 560 Z"
      fill="url(#bottle-body-grad)"
    />
    {/* Bottle neck */}
    <rect x="130" y="100" width="62" height="65" rx="6" fill="hsl(45 90% 55%)" />
    {/* Bottle cap */}
    <rect x="120" y="60" width="82" height="45" rx="8" fill="hsl(24 95% 53%)" />
    {/* Spray nozzle */}
    <rect x="150" y="30" width="22" height="35" rx="4" fill="hsl(45 90% 55%)" />
    <circle cx="161" cy="25" r="10" fill="hsl(45 90% 55%)" />
    {/* Label area */}
    <rect x="110" y="320" width="102" height="160" rx="8" fill="hsl(20 14% 4% / 0.3)" />
    {/* FF text on label */}
    <text
      x="161"
      y="420"
      textAnchor="middle"
      fill="hsl(45 90% 55%)"
      fontSize="64"
      fontWeight="bold"
      fontFamily="'Playfair Display', serif"
    >
      FF
    </text>
    <defs>
      <linearGradient id="bottle-body-grad" x1="80" y1="190" x2="242" y2="610" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(24 95% 53%)" />
        <stop offset="0.5" stopColor="hsl(12 80% 60%)" />
        <stop offset="1" stopColor="hsl(24 95% 43%)" />
      </linearGradient>
    </defs>
  </svg>
);

export default PerfumeBottleIcon;
