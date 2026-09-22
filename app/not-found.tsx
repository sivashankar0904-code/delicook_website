import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <div className="shell">
        <p className="text-[13px] font-semibold uppercase tracking-wider text-brand-coral">
          404
        </p>
        <h1 className="mt-3 text-[32px] font-extrabold tracking-tight sm:text-[38px]">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-[44ch] text-[15px] leading-relaxed text-ink-muted">
          The page you were looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-gradient">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
