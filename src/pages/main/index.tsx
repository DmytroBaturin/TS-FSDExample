import { useEffect, useState } from "react";
import { useBooksApi, BooksApiResponse } from "@/entities/book/api";
import { BookCard } from "@/entities/book/ui/card";

export const MainPage = () => {
  const { getBooks } = useBooksApi();

  const [books, setBooks] = useState<BooksApiResponse>({ items: [] });

  useEffect(() => {
    getBooks().then((r) => {
      setBooks(r);
    });
  }, []);

  return (
    <div className="border-gray-100">
      <div className="w-[100%] grid grid-cols-autofill justify-center m-auto gap-2">
        {books ? (
          books.items?.map((book) => (
            <BookCard id={book.id} key={book.id} book={book.volumeInfo} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
