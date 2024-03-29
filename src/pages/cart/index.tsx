import { useCartStore } from "@/entities/cart/store";
import { RowBookCard } from "@/entities/book/ui/row";
import { RemoveFromCartButton } from "@/features/cart/removeFromCart";
export const CartPage = () => {
  const { cart } = useCartStore();
  return (
    <div className="flex flex-col gap-4">
      {cart.map((book) => (
        <RowBookCard
          id={book.id}
          action={<RemoveFromCartButton id={book.id} />}
          book={book.volumeInfo}
        />
      ))}
    </div>
  );
};
