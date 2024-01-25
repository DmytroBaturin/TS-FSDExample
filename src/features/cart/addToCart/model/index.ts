import { useCartStore } from "@/entities/cart/store";
import { BookInfo } from "@/shared/types/book";

export const useAddToCart = (bookId: string, book: BookInfo) => {
  const isBookInCart = useCartStore((state) => state.isBookInCart);
  const { addToCart, removeFromCart } = useCartStore();

  const disabled = isBookInCart(bookId);

  const handleButtonClick = () => {
    if (disabled) {
      removeFromCart(bookId);
    } else {
      addToCart(book);
    }
  };

  return { disabled, handleButtonClick };
};
