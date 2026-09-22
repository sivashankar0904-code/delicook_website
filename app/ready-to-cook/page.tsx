import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ProductCard } from '@/components/ProductCard';
import { Section } from '@/components/Section';
import { readyToCook } from '@/data/products';

export const metadata: Metadata = {
  title: 'Ready To Cook',
  description:
    'Hand-crafted South Indian pastes, mixes and kits — sambar and rasam mixes, curry pastes, kulambu and more. The prep is done; you bring the pan.',
};

export default function ReadyToCookPage() {
  return (
    <>
      <Breadcrumb current="Ready To Cook" />

      <section className="pb-12 pt-8 text-center">
        <div className="shell">
          <h1 className="text-[34px] font-extrabold tracking-tight sm:text-[42px]">
            Ready To Cook
          </h1>
          <p className="mx-auto mt-4 max-w-[56ch] text-[15px] leading-relaxed text-ink-muted">
            Fresh ingredients prepped and portioned. The grinding, soaking and chopping
            is already done — add to your pan and cook a proper home-style meal in
            minutes.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {readyToCook.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <Section tone="cream">
        <h2 className="section-title">Prefer It Already Cooked?</h2>
        <p className="section-sub">
          Our Ready To Eat range is fully prepared — heat, serve and enjoy.
        </p>
        <div className="mt-8 text-center">
          <Link href="/ready-to-eat" className="btn-gradient">
            View Ready To Eat
          </Link>
        </div>
      </Section>
    </>
  );
}
