import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Book } from "@/entities/book";

interface CartState {
  cart: Book[];
  addToCart: (book: Book) => void;
  isBookInCart: (id: string) => boolean;
  removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartState>()(
  devtools((set, get) => ({
    cart: [],
    removeFromCart: (id: string) =>
      set((state) => {
        return {
          ...state,
          cart: state.cart.filter((book) => book.id !== id),
        };
      }),
    addToCart: (book: Book) =>
      set((state) => {
        if (state.cart.some((b) => b.id === book.id)) {
          return { ...state, cart: state.cart.filter((b) => b.id !== book.id) };
        } else {
          return { ...state, cart: [...state.cart, book] };
        }
      }),
    isBookInCart: (id: string) => {
      const state = get();
      return state.cart.some((book: Book) => book.id === id);
    },
  })),
);
