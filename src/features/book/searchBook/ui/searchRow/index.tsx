import { Link } from "react-router-dom";
import { Typography } from "@/shared/components/typography";
import { Book } from "@/shared/types/book";
import { useTruncate } from "@/shared/hooks/useTruncate";

interface RowProps {
  book: Book;
  key: string;
  classname?: string;
}
export const Row = ({ book, classname }: RowProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const truncateTitle = (title: string | undefined) => useTruncate(title, 40);

  return (
    <Link to={`/book/${book.id}`}>
      <div className={classname}>
        <Typography theme="font-bold" size="text-sm">
          {truncateTitle(book?.volumeInfo?.title)}
        </Typography>
        <Typography size="text-mini" color="text-secondary">
          {book.volumeInfo?.authors}
        </Typography>
      </div>
    </Link>
  );
};
