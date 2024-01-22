import { Button } from "@/shared/components/button";
import wishIcon from "@/assets/icons/header_cart.svg";
import { Image } from "@/shared/components/image";
import { BookInfo } from "@/types/book";
import { Typography } from "@/shared/components/typography";
import { useAddToCart } from "@/features/cart/addToCart/model";

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
      <Image src={wishIcon} size="w-1/1" />
    </Button>
  );
};
