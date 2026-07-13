import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-20 text-center text-sm text-charcoal/60">
        No candles in this category just yet — check back soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
