import type { Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card overflow-hidden transition-shadow hover:shadow-md">
      {/* TODO: replace with product photography once shot. */}
      <div className="placeholder-box aspect-[4/3] rounded-none" aria-hidden="true" />

      <div className="p-5">
        <h3 className="text-[16px] font-bold text-ink">{product.name}</h3>
        {product.localName && (
          <p className="mt-0.5 text-[12px] text-brand-coral">{product.localName}</p>
        )}
        <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
          {product.description}
        </p>
      </div>
    </article>
  );
}
