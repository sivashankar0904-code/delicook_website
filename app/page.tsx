import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/Section';
import { ProductCard } from '@/components/ProductCard';
import { ClockIcon, HeartIcon, LeafIcon } from '@/components/Icons';
import { productImage, readyToCook, readyToEat } from '@/data/products';

const formats = [
  {
    title: 'Ready To Cook',
    body: 'Pastes, mixes and kits with the grinding and chopping already done. Add your ingredients and cook a proper meal in minutes.',
    href: '/ready-to-cook',
    count: readyToCook.length,
    image: productImage('sambar-mix'),
  },
  {
    title: 'Ready To Eat',
    body: 'Fully prepared dishes crafted with authentic recipes. Heat, serve and enjoy — no cooking required.',
    href: '/ready-to-eat',
    count: readyToEat.length,
    image: productImage('kambu-kool'),
  },
];

const reasons = [
  {
    Icon: LeafIcon,
    title: 'Premium Ingredients',
    body: 'Carefully selected, high-quality ingredients in every product. Hand-picked spices and farm-fresh produce sourced responsibly.',
  },
  {
    Icon: ClockIcon,
    title: 'Quick & Convenient',
    body: 'Ready in minutes. Designed for busy everyday schedules. Say goodbye to heavy prep work and dirty dishes.',
  },
  {
    Icon: HeartIcon,
    title: 'Authentic Flavors',
    body: 'Traditional South Indian recipes crafted for genuine home-cooked taste, with no shortcuts on quality.',
  },
];

// A small cross-section of the catalogue for the home page.
const featured = [
  ...readyToCook.slice(0, 2),
  ...readyToEat.slice(0, 1),
];

export default function HomePage() {
  return (
    <>
      {/* Hero. */}
      <section className="py-16 sm:py-20">
        <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-brand-coral">
              Authentic South Indian, made easy
            </p>
            <h1 className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-tight sm:text-[46px]">
              Real home-style cooking, without the hours
            </h1>
            <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-ink-muted">
              Hand-crafted pastes, mixes and ready meals made from traditional recipes.
              The grinding, soaking and slow simmering is already done — you bring the
              pan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ready-to-cook" className="btn-gradient">
                Explore Products
              </Link>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-surface-grey">
            <Image
              src={productImage('chicken-curry-paste')}
              alt="Hand-crafted South Indian curry paste"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Two formats. */}
      <Section tone="grey">
        <h2 className="section-title">Made for Easier Everyday Cooking</h2>
        <p className="section-sub">Two ways to enjoy authentic flavors.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {formats.map((format) => (
            <Link key={format.title} href={format.href} className="card group p-5 transition-shadow hover:shadow-md">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-surface-grey">
                <Image
                  src={format.image}
                  alt={format.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-[18px] font-bold transition-colors group-hover:text-brand-red">
                {format.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
                {format.body}
              </p>
              <p className="mt-3 text-[13px] font-semibold text-brand-red">
                {format.count} products →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured products. */}
      <Section tone="white">
        <h2 className="section-title">From Our Kitchen</h2>
        <p className="section-sub">
          A few of the recipes our customers come back for.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      {/* Why choose us. */}
      <Section tone="grey">
        <h2 className="section-title">Why Choose DeliCook?</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map(({ Icon, title, body }) => (
            <div key={title} className="card p-7 text-center">
              <Icon className="mx-auto h-6 w-6 text-brand-coral" />
              <h3 className="mt-4 text-[15px] font-bold">{title}</h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing CTA. */}
      <Section tone="cream">
        <h2 className="section-title">Discover the DeliCook Experience</h2>
        <p className="section-sub">
          Explore products designed to make your everyday meals more convenient,
          delicious, and absolutely stress-free.
        </p>
        <div className="mt-8 text-center">
          <Link href="/contact" className="btn-gradient">
            Get in Touch
          </Link>
        </div>
      </Section>
    </>
  );
}
