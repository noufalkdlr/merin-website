import type { CartItem } from "./types";
import { formatPrice } from "./utils";
import { WHATSAPP_NUMBER } from "./constants";

export function buildWhatsAppMessage(items: CartItem[], total: number): string {
  const lines = items.map(
    (item, i) =>
      `${i + 1}. ${item.name} x${item.qty} - ${formatPrice(item.price * item.qty)}`,
  );

  return [
    "Hi Lumière! I'd like to place an order:",
    "",
    ...lines,
    "",
    `Total: ${formatPrice(total)}`,
    "",
    "Please confirm availability and delivery details. Thank you!",
  ].join("\n");
}

export function buildWhatsAppUrl(items: CartItem[], total: number): string {
  const message = buildWhatsAppMessage(items, total);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
