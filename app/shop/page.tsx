import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllProducts } from "@/lib/products";
import { ShopContent } from "@/components/shop/ShopContent";
import { TextReveal } from "@/components/ui/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Shop — Lumière",
  description: "Browse Lumière's full collection of hand-poured soy candles.",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionLabel text="Full Collection" index="00" />
      <TextReveal
        as="h1"
        text="Every Scent, One Shelf"
        className="mt-5 font-display text-5xl font-normal text-charcoal sm:text-6xl"
      />
      <Suspense fallback={null}>
        <ShopContent products={products} />
      </Suspense>
    </div>
  );
}
