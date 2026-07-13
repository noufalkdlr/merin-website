"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

export function CartIcon() {
  const { totalItems, openDrawer } = useCart();

  return (
    <button
      type="button"
      onClick={openDrawer}
      aria-label={`Open cart, ${totalItems} item${totalItems === 1 ? "" : "s"}`}
      data-cursor="view"
      className="relative flex h-10 w-10 items-center justify-center text-charcoal transition-colors hover:text-burgundy"
    >
      <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
      {totalItems > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-burgundy text-[10px] font-medium text-cream">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
}
