import Link from 'next/link';
import { legalLinks, quickLinks, site } from '@/data/site';
import { LogoMono } from './Logo';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './Icons';

const socials = [
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
  { label: 'YouTube', href: '#', Icon: YoutubeIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <LogoMono />
          <p className="mt-4 max-w-[26ch] text-[13px] leading-relaxed text-ink-muted">
            {site.footerBlurb}
          </p>
        </div>

        <div>
          <h2 className="text-[15px] font-semibold text-ink">Quick Links</h2>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-ink-muted transition-colors hover:text-brand-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[15px] font-semibold text-ink">Get in Touch</h2>
          <ul className="mt-4 space-y-2.5 text-[13px] text-ink-muted">
            <li>
              Email:{' '}
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-brand-red"
              >
                {site.email}
              </a>
            </li>
            <li>
              Phone:{' '}
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="transition-colors hover:text-brand-red"
              >
                {site.phone}
              </a>
            </li>
            <li className="max-w-[28ch] leading-relaxed">Address: {site.address}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[15px] font-semibold text-ink">Legal &amp; Policy</h2>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-ink-muted transition-colors hover:text-brand-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-brand-coral hover:text-brand-red"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-5 text-[12px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} DeliCook India. All rights reserved.</p>
          <p>Designed with love for healthy kitchens.</p>
        </div>
      </div>
    </footer>
  );
}
