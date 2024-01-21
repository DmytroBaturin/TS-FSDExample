import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBooksApi } from "@/entities/book";
import { Typography } from "@/shared/components/typography";
import { Image } from "@/shared/components/image";
import parse from "html-react-parser";
import { useTruncate } from "@/shared/hooks";
import { CardImageSkeleton } from "@/shared/components/skeletons/CardImage";
import { AddCartButton } from "@/features";
import { Book } from "@/types/book";

export const BookPage = () => {
  const { getBook } = useBooksApi();
  const { id } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    getBook(id).then((r) => {
      setBook(r);
    });
  }, []);

  const description = book?.volumeInfo.description
    ? String(parse(book?.volumeInfo.description || ""))
    : "Without Description";
  const truncDescription = useTruncate(description || "", 400);

  return (
    <div className="rounded-lg flex bg-white p-6 w-[100%] gap-10 flex-row flex-wrap items-center m-auto justify-center">
      {book?.volumeInfo.imageLinks?.thumbnail ? (
        <Image
          src={book?.volumeInfo.imageLinks?.extraLarge}
          className="min-w-[250px]"
          size="w-1/4"
        />
      ) : (
        <CardImageSkeleton />
      )}
      <div className="flex flex-col max-w-[500px] gap-2">
        <Typography color="text-primary" size="text-xl" theme="font-bold">
          {book?.volumeInfo.title}
        </Typography>
        <Typography color="text-primary" size="text-xs" theme="font-light">
          Дата випуску: {book?.volumeInfo.publishedDate}
        </Typography>
        <div className="max-h-[300px] overflow-auto">
          <Typography color="text-secondary" size="text-xs" theme="font-light">
            {truncDescription}
          </Typography>
        </div>
        <Typography color="text-primary" size="text-xs" theme="font-light">
          Сторінки: {book?.volumeInfo.pageCount}
        </Typography>
        <Typography color="text-primary" size="text-xs" theme="font-light">
          Категорії: {book?.volumeInfo.categories}
        </Typography>
        <div className="flex gap-2">{book && <AddCartButton {...book} />}</div>
      </div>
    </div>
  );
};
