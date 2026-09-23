import Image from 'next/image';
import { productImage, type Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative aspect-square w-full bg-surface-grey">
        <Image
          src={productImage(product.slug)}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

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
