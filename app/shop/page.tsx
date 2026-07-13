import type { Metadata } from "next";
import { getAllProducts, getProductsByCategory } from "@/lib/products";
import { CATEGORY_SLUGS } from "@/lib/constants";
import type { ProductCategory } from "@/lib/types";
import { CategoryTabs } from "@/components/shop/CategoryTabs";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { TextReveal } from "@/components/ui/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Shop — Lumière",
  description: "Browse Lumière's full collection of hand-poured soy candles.",
};

function isProductCategory(value: string | undefined): value is ProductCategory {
  return !!value && CATEGORY_SLUGS.includes(value as ProductCategory);
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = isProductCategory(category) ? category : "all";
  const products =
    activeCategory === "all" ? getAllProducts() : getProductsByCategory(activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionLabel text="Full Collection" index="00" />
      <TextReveal
        as="h1"
        text="Every Scent, One Shelf"
        className="mt-5 font-display text-5xl font-normal text-charcoal sm:text-6xl"
      />
      <div className="mt-10">
        <CategoryTabs activeCategory={activeCategory} />
      </div>
      <div className="mt-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
