import Link from "next/link";

export function BrandLogo() {
  return (
    <Link href="/" className="st-logo group" aria-label="Stajify ana sayfa">
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
      >
        <defs>
          <linearGradient id="stajify-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="52" height="52" rx="16" fill="#ecfdf5" />
        <path
          d="M18 38.5L28.5 24L36.5 33L45.5 20.5"
          fill="none"
          stroke="url(#stajify-green)"
          strokeWidth="4.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="45.5" cy="20.5" r="3.5" fill="#166534" />
      </svg>
      <span className="st-logo-wordmark">Stajify</span>
    </Link>
  );
}
