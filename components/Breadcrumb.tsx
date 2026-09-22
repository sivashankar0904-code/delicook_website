import Link from 'next/link';

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="shell pt-6 text-[12px] text-ink-faint">
      <ol className="flex items-center gap-1.5">
        <li>
          <Link href="/" className="transition-colors hover:text-brand-red">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-ink-muted" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}
