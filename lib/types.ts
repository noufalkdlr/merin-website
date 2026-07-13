export type ProductCategory =
  | "floral"
  | "woody"
  | "fresh"
  | "gourmet"
  | "spiced"
  | "gift-sets";

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
  description: string;
  inStock: boolean;
  featured: boolean;
}

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: ProductCategory;
  qty: number;
}
