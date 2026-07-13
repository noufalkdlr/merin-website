"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CATEGORIES } from "@/lib/constants";
import type { ProductCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  activeCategory: ProductCategory | "all";
}

const TABS: { slug: ProductCategory | "all"; label: string; href: string }[] = [
  { slug: "all", label: "All", href: "/shop" },
  ...CATEGORIES.map((c) => ({
    slug: c.slug,
    label: c.label,
    href: `/shop?category=${c.slug}`,
  })),
];

export function CategoryTabs({ activeCategory }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-x-7 gap-y-3 border-b border-charcoal/10 pb-1">
      {TABS.map((tab) => {
        const active = tab.slug === activeCategory;
        return (
          <Link
            key={tab.slug}
            href={tab.href}
            className={cn(
              "relative pb-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors",
              active ? "text-charcoal" : "text-charcoal/45 hover:text-charcoal",
            )}
          >
            {tab.label}
            {active && (
              <motion.span
                layoutId="active-category-underline"
                className="absolute -bottom-px left-0 right-0 h-px bg-gold"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
