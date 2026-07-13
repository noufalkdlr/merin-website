"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "./CartContext";
import { formatPrice } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { DURATION, EASE_LUXURY } from "@/lib/motion";

export function CartDrawer() {
  const {
    items,
    totalPrice,
    isDrawerOpen,
    closeDrawer,
    incrementQty,
    decrementQty,
    removeItem,
  } = useCart();
  const [showEmptyNotice, setShowEmptyNotice] = useState(false);

  function handleWhatsAppOrder() {
    if (items.length === 0) {
      setShowEmptyNotice(true);
      window.setTimeout(() => setShowEmptyNotice(false), 2500);
      return;
    }
    window.open(buildWhatsAppUrl(items, totalPrice), "_blank", "noopener,noreferrer");
  }

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.base }}
            onClick={closeDrawer}
            className="fixed inset-0 z-50 bg-charcoal/50"
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
              <h2 className="font-display text-xl text-charcoal">Your Cart</h2>
              <button
                type="button"
                onClick={closeDrawer}
                aria-label="Close cart"
                className="flex h-8 w-8 items-center justify-center text-charcoal transition-colors hover:text-burgundy"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <div data-lenis-prevent className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <p className="mt-10 text-center text-sm text-charcoal/60">
                  Your cart is empty — add a candle or two to get started.
                </p>
              ) : (
                <ul className="flex flex-col gap-5">
                  {items.map((item) => (
                    <li key={item.slug} className="flex gap-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-cream-dark">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-display text-sm text-charcoal">{item.name}</p>
                          <button
                            type="button"
                            onClick={() => removeItem(item.slug)}
                            aria-label={`Remove ${item.name}`}
                            className="text-charcoal/40 transition-colors hover:text-burgundy"
                          >
                            <X className="h-4 w-4" strokeWidth={1.5} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 rounded-full border border-charcoal/15 px-2 py-1">
                            <button
                              type="button"
                              onClick={() => decrementQty(item.slug)}
                              aria-label="Decrease quantity"
                              className="flex h-5 w-5 items-center justify-center text-charcoal transition-colors hover:text-burgundy"
                            >
                              <Minus className="h-3 w-3" strokeWidth={2} />
                            </button>
                            <span className="w-4 text-center text-xs text-charcoal">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => incrementQty(item.slug)}
                              aria-label="Increase quantity"
                              className="flex h-5 w-5 items-center justify-center text-charcoal transition-colors hover:text-burgundy"
                            >
                              <Plus className="h-3 w-3" strokeWidth={2} />
                            </button>
                          </div>
                          <p className="text-sm text-charcoal/80">
                            {formatPrice(item.price * item.qty)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-charcoal/10 px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-base text-charcoal">Total</span>
                <span className="font-display text-lg text-charcoal">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <AnimatePresence>
                {showEmptyNotice && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: DURATION.fast }}
                    className="mb-3 text-center text-xs text-burgundy"
                  >
                    Your cart is empty — add something you love first.
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-medium tracking-wide text-cream transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Order via WhatsApp
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
