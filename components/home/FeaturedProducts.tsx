import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="bg-cream px-6 py-24 lg:px-16 lg:py-32 xl:px-20">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <TextReveal
            as="h2"
            text="Bestsellers"
            className="font-display text-6xl font-normal leading-none text-charcoal sm:text-7xl lg:text-8xl"
          />
          <div className="max-w-xs shrink-0">
            <SectionLabel index="03" text="Most-Loved Scents" />
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              Chosen by hundreds of rooms before yours.
            </p>
            <Link
              href="/shop"
              className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.15em] text-charcoal underline decoration-1 underline-offset-4 transition-opacity hover:opacity-60"
            >
              Shop All
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:mt-20 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
