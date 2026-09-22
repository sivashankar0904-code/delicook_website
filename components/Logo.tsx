import Image from 'next/image';
import Link from 'next/link';

// Intrinsic size of public/logo.png, used to keep the aspect ratio correct.
const LOGO_W = 2009;
const LOGO_H = 1660;

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="DeliCook — home">
      <Image
        src="/logo.png"
        alt="DeliCook"
        width={LOGO_W}
        height={LOGO_H}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}

/** Larger, non-linked variant for the footer. */
export function LogoMono({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="DeliCook"
      width={LOGO_W}
      height={LOGO_H}
      className={`h-14 w-auto ${className}`}
    />
  );
}
