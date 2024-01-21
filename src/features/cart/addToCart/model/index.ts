import { useCartStore } from "@/store";
import { BookInfo } from "@/types/book";

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
