import type { ProductCategory } from "./types";

export const BRAND_NAME = "Lumière";

export const WHATSAPP_NUMBER = "9746469319";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const CATEGORIES: { slug: ProductCategory; label: string }[] = [
  { slug: "floral", label: "Floral" },
  { slug: "woody", label: "Woody" },
  { slug: "fresh", label: "Fresh" },
  { slug: "gourmet", label: "Gourmet" },
  { slug: "spiced", label: "Spiced" },
  { slug: "gift-sets", label: "Gift Sets" },
];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug);
