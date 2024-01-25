import { Button } from "@/shared/components/button";
import { BookInfo } from "@/shared/types/book";
import { Typography } from "@/shared/components/typography";
import { useAddToCart } from "@/features/cart/addToCart/model";
import Icon from "@/shared/components/icon";

export const AddCartButton = (book: BookInfo) => {
  const { disabled, handleButtonClick } = useAddToCart(book.id, book);
  return (
    <Button
      buttonType="ico"
      onClick={handleButtonClick}
      disabled={disabled}
      color="bg-sky-200"
      className="p-4 gap-4 rounded-lg flex items-center justify-center"
    >
      <Typography color="text-primary">До кошику</Typography>
      <Icon name="cart" />
    </Button>
  );
};
