"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORY_SLUGS } from "@/lib/constants";
import type { Product, ProductCategory } from "@/lib/types";
import { CategoryTabs } from "./CategoryTabs";
import { ProductGrid } from "./ProductGrid";

function isProductCategory(value: string | null): value is ProductCategory {
  return !!value && CATEGORY_SLUGS.includes(value as ProductCategory);
}

export function ShopContent({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const activeCategory = isProductCategory(searchParams.get("category"))
    ? (searchParams.get("category") as ProductCategory)
    : "all";

  const filteredProducts = useMemo(
    () =>
      activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [products, activeCategory],
  );

  return (
    <>
      <div className="mt-10">
        <CategoryTabs activeCategory={activeCategory} />
      </div>
      <div className="mt-12">
        <ProductGrid products={filteredProducts} />
      </div>
    </>
  );
}
