import { Button } from "@/shared/components/button";
import { BookInfo } from "@/shared/types/book";
import { Typography } from "@/shared/components/typography";
import { useRemoveFromCart } from "@/features/cart/removeFromCart/model";

export const RemoveFromCartButton = (book: BookInfo) => {
  const { handleButtonClick } = useRemoveFromCart(book.id);
  return (
    <Button
      buttonType="ico"
      onClick={handleButtonClick}
      className="p-4 gap-4 bg-sky-200 rounded-lg flex items-center justify-center"
    >
      <Typography color="text-primary">Видалити з кошика</Typography>
    </Button>
  );
};
