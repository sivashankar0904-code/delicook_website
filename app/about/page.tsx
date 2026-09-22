import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Section } from '@/components/Section';
import { ClockIcon, HeartIcon, LeafIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'DeliCook was born from a simple idea — to bring the authentic taste of home-cooked meals to every kitchen, without the hassle of lengthy preparation.',
};

const formats = [
  {
    title: 'Ready To Cook',
    body: 'Fresh ingredients prepped and portioned. Just add to your pan and cook a restaurant-quality meal in minutes. Save time grinding, chopping, and soaking.',
    href: '/ready-to-cook',
  },
  {
    title: 'Ready To Eat',
    body: 'Fully prepared meals crafted with authentic recipes. Heat, serve and enjoy anytime. Ideal for busy working professionals who refuse to compromise on health and taste.',
    href: '/ready-to-eat',
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
    body: 'Traditional recipes crafted for genuine home-cooked taste. Tested and approved by culinary experts for real local depth.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb current="About Us" />

      {/* Hero: copy left, image right. */}
      <section className="pb-16 pt-8 sm:pb-20">
        <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-[34px] font-extrabold leading-tight tracking-tight sm:text-[42px]">
              About DeliCook
            </h1>
            <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
              Making everyday cooking easier, more convenient and full of authentic
              flavors. We bring the tradition of hand-crafted recipes straight to your
              dining table.
            </p>
          </div>

          {/* TODO: replace with hero photography. */}
          <div className="placeholder-box aspect-[16/10] w-full" aria-hidden="true" />
        </div>
      </section>

      {/* Our Story: image left, copy right. */}
      <Section tone="grey">
        <h2 className="text-[26px] font-extrabold tracking-tight sm:text-[30px]">
          Our Story
        </h2>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* TODO: replace with kitchen / founder photography. */}
          <div className="placeholder-box aspect-[4/3] w-full" aria-hidden="true" />

          <div className="space-y-5 text-[14px] leading-relaxed text-ink-muted">
            <p>
              DeliCook was born from a simple idea — to bring the authentic taste of
              home-cooked meals to every kitchen, without the hassle of lengthy
              preparation. We noticed that modern life leaves little time for slow
              cooking, yet nothing compares to a real, authentic meal made with care.
            </p>
            <p>
              We craft our products with carefully selected ingredients, traditional
              recipes, and modern convenience in mind. Every product is designed to help
              you create delicious meals in minutes. From prepped masalas to fully ready
              meals, we take no shortcuts on quality.
            </p>
          </div>
        </div>
      </Section>

      {/* The two formats. */}
      <Section tone="white">
        <h2 className="section-title">Made for Easier Everyday Cooking</h2>
        <p className="section-sub">Two ways to enjoy authentic flavors.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {formats.map((format) => (
            <Link key={format.title} href={format.href} className="card group p-5 transition-shadow hover:shadow-md">
              {/* TODO: replace with format photography. */}
              <div className="placeholder-box aspect-[16/9] w-full" aria-hidden="true" />
              <h3 className="mt-5 text-[18px] font-bold transition-colors group-hover:text-brand-red">
                {format.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
                {format.body}
              </p>
            </Link>
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
          <Link href="/ready-to-cook" className="btn-gradient">
            Explore Products
          </Link>
        </div>
      </Section>
    </>
  );
}
