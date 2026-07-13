import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xs shrink-0">
          <SectionLabel index="03" text="Most-Loved Scents" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-12 lg:mt-10 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-14 flex justify-center lg:mt-16">
          <Button href="/shop" variant="outline" arrow>
            Shop All
          </Button>
        </div>
      </div>
    </section>
  );
}
