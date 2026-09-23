import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ContactForm } from '@/components/ContactForm';
import { Section } from '@/components/Section';
import { MailIcon, PinIcon } from '@/components/Icons';
import { productImage } from '@/data/products';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with DeliCook for questions, bulk orders, corporate partnerships or assistance with your deliveries.',
};

const channels = [
  { Icon: MailIcon, title: 'Email', value: site.email, href: `mailto:${site.email}` },
  { Icon: PinIcon, title: 'Address', value: site.addressShort, href: null },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb current="Contact Us" />

      <section className="pb-12 pt-8 text-center">
        <div className="shell">
          <h1 className="text-[36px] font-extrabold tracking-tight sm:text-[44px]">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
            We&apos;d love to hear from you. Whether you have a question or need
            assistance with your deliveries, get in touch with us.
          </p>
        </div>
      </section>

      {/* Three contact channels. */}
      <section className="pb-14">
        <div className="shell mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {channels.map(({ Icon, title, value, href }) => (
            <div key={title} className="card p-7 text-center">
              <Icon className="mx-auto h-6 w-6 text-ink" />
              <h2 className="mt-4 text-[15px] font-bold">{title}</h2>
              {href ? (
                <a
                  href={href}
                  className="mt-2 block text-[13px] text-ink-muted transition-colors hover:text-brand-red"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-2 text-[13px] text-ink-muted">{value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Form beside the map. */}
      <section className="pb-16">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <ContactForm />

          <div className="relative min-h-[320px] w-full overflow-hidden rounded-xl bg-surface-grey">
            <Image
              src={productImage('sambar-mix')}
              alt="Freshly ground sambar spice blend"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Section tone="grey">
        <h2 className="section-title">Need More Help?</h2>
        <p className="section-sub">
          Get in touch with our team for bulk orders, corporate partnerships, or
          immediate assistance.
        </p>
        <div className="mt-8 text-center">
          <a href={`mailto:${site.email}`} className="btn-outline">
            Contact Support
          </a>
        </div>
      </Section>
    </>
  );
}
