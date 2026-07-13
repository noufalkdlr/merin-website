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
  floral: "https://images.unsplash.com/photo-1572107874847-c08e806dc2db?w=1200&q=80&auto=format&fit=crop",
  woody: "https://images.unsplash.com/photo-1636401254943-be3c6fe2b0d2?w=900&q=80&auto=format&fit=crop",
  fresh: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=900&q=80&auto=format&fit=crop",
  gourmet: "https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?w=900&q=80&auto=format&fit=crop",
  spiced: "https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?w=900&q=80&auto=format&fit=crop",
  "gift-sets": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=900&q=80&auto=format&fit=crop",
};

interface Tile {
  slug: ProductCategory;
  aspect: string;
}

const COLUMNS: { tiles: Tile[]; width: string; offset: string }[] = [
  { tiles: [{ slug: "woody", aspect: "aspect-[3/4]" }], width: "w-[17%]", offset: "mt-10" },
  {
    tiles: [
      { slug: "fresh", aspect: "aspect-square" },
      { slug: "spiced", aspect: "aspect-square" },
    ],
    width: "w-[15%]",
    offset: "mt-0",
  },
  { tiles: [{ slug: "floral", aspect: "aspect-[3/5]" }], width: "w-[24%]", offset: "-mt-8" },
  {
    tiles: [
      { slug: "gourmet", aspect: "aspect-square" },
      { slug: "gift-sets", aspect: "aspect-square" },
    ],
    width: "w-[15%]",
    offset: "mt-4",
  },
];

function CategoryLabel(slug: ProductCategory) {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

function Tile({ tile, delay }: { tile: Tile; delay: number }) {
  const label = CategoryLabel(tile.slug);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay }}
    >
      <Link
        href={`/shop?category=${tile.slug}`}
        data-cursor="view"
        className={cn(
          "group relative block w-full overflow-hidden rounded-sm bg-cream-dark",
          tile.aspect,
        )}
      >
        <Image
          src={CATEGORY_IMAGES[tile.slug]}
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
    <section className="bg-cream px-6 py-24 lg:px-16 lg:py-32 xl:px-20">
      <div className="mx-auto max-w-[1920px]">
        <SectionLabel text="Shop by Scent" index="04" />
        <TextReveal
          as="h2"
          text="Find Your Signature"
          className="mt-5 font-display text-5xl font-normal text-charcoal sm:text-6xl lg:text-7xl"
        />

        <div className="mt-16 hidden items-start justify-center gap-4 lg:flex xl:gap-6">
          {COLUMNS.map((col, i) => (
            <div key={i} className={cn("flex flex-col gap-4 xl:gap-6", col.width, col.offset)}>
              {col.tiles.map((tile, j) => (
                <Tile key={tile.slug} tile={tile} delay={i * 0.08 + j * 0.08} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
          {CATEGORIES.map((category, i) => (
            <Tile
              key={category.slug}
              tile={{ slug: category.slug, aspect: "aspect-square" }}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
