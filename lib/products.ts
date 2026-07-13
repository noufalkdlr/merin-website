import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import type { Product, ProductCategory } from "./types";

const PRODUCTS_DIR = path.join(process.cwd(), "content/products");

export const getAllProducts = cache((): Product[] => {
  const files = fs.readdirSync(PRODUCTS_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(PRODUCTS_DIR, file), "utf-8");
      const { data } = matter(raw);
      const slug = file.replace(/\.md$/, "");

      return {
        slug,
        name: data.name as string,
        price: data.price as number,
        category: data.category as ProductCategory,
        image: data.image as string,
        description: data.description as string,
        inStock: Boolean(data.inStock),
        featured: Boolean(data.featured),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
});

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((p) => p.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return getAllProducts().filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}

export function getProductsGroupedByCategory(): Record<ProductCategory, Product[]> {
  const products = getAllProducts();
  return products.reduce(
    (groups, product) => {
      groups[product.category] = [...(groups[product.category] ?? []), product];
      return groups;
    },
    {} as Record<ProductCategory, Product[]>,
  );
}
