import { Card } from "@/shared/components/card";
import { Typography } from "@/shared/components/typography";
import { BookInfo } from "@/types/book";
import { Image } from "@/shared/components/image";
import { Link } from "react-router-dom";
import { useTruncate } from "@/shared/hooks";

interface BookCardProps {
  id?: string;
  book: BookInfo;
}

export const BookCard = ({ book, id }: BookCardProps) => {
  return (
    <Link to={`/book/${id}`}>
      <Card
        className="gap-4 h-[330px] justify-center overflow-auto ease-in-out duration-100 hover:translate-y-[-2px] p-2 bg-white rounded-lg flex flex-col"
        type="w-card-column"
      >
        <Image src={book.imageLinks?.thumbnail} size="w-1/1" className="h-64" />
        <Typography className="text-center" size="text-sm">
          {useTruncate(book.title || "", 40)}
        </Typography>
      </Card>
    </Link>
  );
};
