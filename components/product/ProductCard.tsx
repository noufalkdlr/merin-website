"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/components/cart/CartContext";
import { DURATION, EASE_LUXURY } from "@/lib/motion";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    if (!product.inStock) return;
    addItem(product, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
      className="group flex flex-col"
    >
      <div
        data-cursor="view"
        className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-dark"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[400ms] ease-out will-change-transform group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute left-3 top-3 rounded-sm bg-charcoal/85 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cream">
            Sold Out
          </div>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-base text-charcoal">{product.name}</h3>
          <p className="mt-1 text-sm text-charcoal/70">{formatPrice(product.price)}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        disabled={!product.inStock}
        data-cursor={product.inStock ? "add" : undefined}
        className="mt-3 flex h-10 w-full items-center justify-center overflow-hidden rounded-sm border border-charcoal text-xs font-medium uppercase tracking-widest text-charcoal transition-colors duration-200 hover:bg-charcoal hover:text-cream disabled:cursor-not-allowed disabled:border-charcoal/30 disabled:text-charcoal/30 disabled:hover:bg-transparent disabled:hover:text-charcoal/30"
      >
        <AnimatePresence mode="wait" initial={false}>
          {justAdded ? (
            <motion.span
              key="added"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-1.5"
            >
              <Check className="h-3.5 w-3.5" strokeWidth={2} />
              Added
            </motion.span>
          ) : (
            <motion.span
              key="add"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {product.inStock ? "Add to Cart" : "Sold Out"}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}
