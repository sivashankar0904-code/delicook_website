'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav } from '@/data/site';
import { Logo } from './Logo';
import { CloseIcon, MenuIcon } from './Icons';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile sheet whenever navigation lands on a new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`text-[14px] transition-colors hover:text-brand-red ${
                isActive(item.href) ? 'font-semibold text-brand-red' : 'text-ink-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-gradient px-5 py-2 text-[14px]">
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-md p-2 text-ink hover:bg-surface-grey lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-white lg:hidden">
          <nav className="shell flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`py-2.5 text-[15px] ${
                  isActive(item.href) ? 'font-semibold text-brand-red' : 'text-ink-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gradient mt-3 mb-2 w-full">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
