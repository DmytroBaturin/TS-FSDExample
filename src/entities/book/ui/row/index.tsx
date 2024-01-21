import { Card } from "@/shared/components/card";
import { Typography } from "@/shared/components/typography";
import { BookInfo } from "@/types/book";
import { Image } from "@/shared/components/image";
import { Link } from "react-router-dom";

interface BookCardProps {
  id?: string;
  book: BookInfo;
  action?: React.ReactNode;
}

export const RowBookCard = ({ book, id, action }: BookCardProps) => {
  return (
    <Card
      className="gap-4 h-[330px] items-center overflow-auto ease-in-out p-6 bg-white rounded-lg flex flex-row"
      type="w-card-column"
    >
      <Link to={`/book/${id}`}>
        <Image src={book.imageLinks?.thumbnail} className="h-64 w-[200px]" />
      </Link>
      <div className="flex flex-col gap-4">
        <Typography theme="font-bold" size="text-lg">
          {book.title}
        </Typography>
        <Typography size="text-sm">Категорії: {book.categories}</Typography>
        <Typography size="text-sm">Автори: {book.authors}</Typography>
        <Typography size="text-sm" className="text-sky-500">
          <a href={book.infoLink}>Книга в Google</a>
        </Typography>
        <div>{action}</div>
      </div>
    </Card>
  );
};
