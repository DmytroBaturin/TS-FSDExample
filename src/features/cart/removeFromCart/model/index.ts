import { useCartStore } from "src/shared/store";

export const useRemoveFromCart = (bookId: string) => {
  const { removeFromCart } = useCartStore();
  const handleButtonClick = () => {
    removeFromCart(bookId);
  };

  return { handleButtonClick };
};
