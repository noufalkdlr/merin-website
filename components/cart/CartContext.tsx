"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "@/lib/types";

const STORAGE_KEY = "lumiere-cart";

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product; qty: number }
  | { type: "REMOVE_ITEM"; slug: string }
  | { type: "INCREMENT"; slug: string }
  | { type: "DECREMENT"; slug: string }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.slug === action.product.slug);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.slug === action.product.slug ? { ...i, qty: i.qty + action.qty } : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            slug: action.product.slug,
            name: action.product.name,
            price: action.product.price,
            image: action.product.image,
            category: action.product.category,
            qty: action.qty,
          },
        ],
      };
    }
    case "REMOVE_ITEM":
      return { items: state.items.filter((i) => i.slug !== action.slug) };
    case "INCREMENT":
      return {
        items: state.items.map((i) =>
          i.slug === action.slug ? { ...i, qty: i.qty + 1 } : i,
        ),
      };
    case "DECREMENT":
      return {
        items: state.items
          .map((i) => (i.slug === action.slug ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0),
      };
    case "CLEAR":
      return { items: [] };
    case "HYDRATE":
      return { items: action.items };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isDrawerOpen: boolean;
  addItem: (product: Product, qty?: number) => void;
  removeItem: (slug: string) => void;
  incrementQty: (slug: string) => void;
  decrementQty: (slug: string) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isDrawerOpen, setIsDrawerOpen] = useReducer(
    (_state: boolean, next: boolean) => next,
    false,
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const items = JSON.parse(stored) as CartItem[];
        dispatch({ type: "HYDRATE", items });
      } catch {
        // ignore malformed cart data
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.qty, 0),
    [state.items],
  );
  const totalPrice = useMemo(
    () => state.items.reduce((sum, i) => sum + i.qty * i.price, 0),
    [state.items],
  );

  const value: CartContextValue = {
    items: state.items,
    totalItems,
    totalPrice,
    isDrawerOpen,
    addItem: (product, qty = 1) => dispatch({ type: "ADD_ITEM", product, qty }),
    removeItem: (slug) => dispatch({ type: "REMOVE_ITEM", slug }),
    incrementQty: (slug) => dispatch({ type: "INCREMENT", slug }),
    decrementQty: (slug) => dispatch({ type: "DECREMENT", slug }),
    clearCart: () => dispatch({ type: "CLEAR" }),
    openDrawer: () => setIsDrawerOpen(true),
    closeDrawer: () => setIsDrawerOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
