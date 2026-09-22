import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Section } from '@/components/Section';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Common questions about DeliCook products — shelf life, storage, preservatives, allergens and how our Ready To Cook and Ready To Eat ranges differ.',
};

const faqs = [
  {
    q: 'What is the difference between Ready To Cook and Ready To Eat?',
    a: 'Ready To Cook products are pastes, mixes and kits where the grinding, chopping and soaking is done for you — you add your own ingredients and cook. Ready To Eat products are fully prepared dishes that only need heating before serving.',
  },
  {
    q: 'Do your products contain preservatives?',
    a: 'Our recipes are built around traditional methods and carefully selected ingredients. Please check the label on each pack for its full ingredient list.',
  },
  {
    q: 'How should I store the products?',
    a: 'Storage varies by product. Pastes and prepared items generally need refrigeration, while dry mixes keep in a cool, dry place. Each pack carries specific storage instructions.',
  },
  {
    q: 'How long do the products keep?',
    a: 'Shelf life differs across the range. The best-before date is printed on every pack — we recommend using prepared items soon after opening.',
  },
  {
    q: 'Are your products vegetarian?',
    a: 'Most of our range is vegetarian. Egg Curry Paste, Chicken Curry Paste and Fish Curry Paste are the non-vegetarian exceptions, and each is clearly marked.',
  },
  {
    q: 'Do you handle bulk or corporate orders?',
    a: 'Yes. For bulk orders, corporate partnerships or catering enquiries, get in touch and our team will work out the details with you.',
  },
  {
    q: 'Where are your products made?',
    a: 'Everything is prepared in our own kitchen using traditional recipes, with spices and produce sourced from trusted suppliers.',
  },
];

export default function FaqsPage() {
  return (
    <>
      <Breadcrumb current="FAQs" />

      <section className="pb-12 pt-8 text-center">
        <div className="shell">
          <h1 className="text-[34px] font-extrabold tracking-tight sm:text-[42px]">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
            Everything you might want to know about our products and how they work.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell mx-auto max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="card group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold">
                {faq.q}
                <span
                  className="shrink-0 text-brand-coral transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Section tone="grey">
        <h2 className="section-title">Still Have a Question?</h2>
        <p className="section-sub">
          Our team is happy to help with anything not covered here.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-gradient">
            Contact Us
          </Link>
          <a href={`mailto:${site.email}`} className="btn-outline">
            Email Support
          </a>
        </div>
      </Section>
    </>
  );
}
