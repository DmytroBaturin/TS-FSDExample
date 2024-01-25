import { useCartStore } from "@/shared/store";

export const useRemoveFromCart = (bookId: string) => {
  const { removeFromCart } = useCartStore();
  const handleButtonClick = () => {
    removeFromCart(bookId);
  };

  return { handleButtonClick };
};
