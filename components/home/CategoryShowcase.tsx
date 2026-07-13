"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { CATEGORIES } from "@/lib/constants";
import type { ProductCategory } from "@/lib/types";
import { TextReveal } from "@/components/ui/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DURATION, EASE_LUXURY } from "@/lib/motion";
import { cn } from "@/lib/utils";

const CATEGORY_IMAGES: Record<ProductCategory, string> = {
  floral: "https://images.unsplash.com/photo-1514436598301-27a65f40469f?q=80&w=814&auto=format&fit=crop",
  woody: "https://images.unsplash.com/photo-1636401254943-be3c6fe2b0d2?w=900&q=80&auto=format&fit=crop",
  fresh: "https://images.unsplash.com/photo-1610410863509-aa6ee0b12d76?q=80&w=774&auto=format&fit=crop",
  gourmet: "https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?w=900&q=80&auto=format&fit=crop",
  spiced: "https://images.unsplash.com/photo-1636714528228-f469eefb3eef?q=80&w=846&auto=format&fit=crop",
  "gift-sets": "https://images.unsplash.com/photo-1636714586239-59d77eba799b?q=80&w=1548&auto=format&fit=crop",
};

interface GridTile {
  slug: ProductCategory;
  className: string;
}

const GRID_TILES: GridTile[] = [
  { slug: "woody", className: "col-start-1 row-span-2" },
  { slug: "fresh", className: "col-start-2 row-start-1" },
  { slug: "spiced", className: "col-start-2 row-start-2" },
  { slug: "floral", className: "col-start-3 row-span-2" },
  { slug: "gourmet", className: "col-start-4 row-start-1" },
  { slug: "gift-sets", className: "col-start-4 row-start-2" },
];

function CategoryLabel(slug: ProductCategory) {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

function Tile({
  slug,
  className,
  delay,
}: {
  slug: ProductCategory;
  className?: string;
  delay: number;
}) {
  const label = CategoryLabel(slug);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay }}
      className={cn("relative", className)}
    >
      <Link
        href={`/shop?category=${slug}`}
        data-cursor="view"
        className="group relative block h-full w-full overflow-hidden rounded-sm bg-cream-dark"
      >
        <Image
          src={CATEGORY_IMAGES[slug]}
          alt={label}
          fill
          sizes="(min-width: 1024px) 20vw, 45vw"
          className="object-cover transition-transform duration-[500ms] ease-out will-change-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-[0.15em] text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {label}
        </span>
      </Link>
    </motion.div>
  );
}

export function CategoryShowcase() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel text="Shop by Scent" index="04" />


        <div className="mt-8 hidden h-[560px] grid-cols-[1.15fr_1fr_1.65fr_1fr] grid-rows-2 gap-2 lg:mt-10 lg:grid xl:h-[620px] xl:gap-3">
          {GRID_TILES.map((tile, i) => (
            <Tile key={tile.slug} slug={tile.slug} className={tile.className} delay={i * 0.06} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
          {CATEGORIES.map((category, i) => (
            <Tile
              key={category.slug}
              slug={category.slug}
              className="aspect-square"
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
