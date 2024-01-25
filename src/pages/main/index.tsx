import { useEffect, useState } from "react";
import { useBooksApi, BooksApiResponse } from "@/entities/book/api";
import { BookCard } from "@/entities/book/ui/card";
import { Filter } from "@/features/book/filter";
import { useFilterModel } from "@/features/book/filter/model";
export const MainPage = () => {
  const { getBooks } = useBooksApi();
  const [books, setBooks] = useState<BooksApiResponse>({ items: [] });

  const { handleFilter } = useFilterModel();

  useEffect(() => {
    getBooks("").then((r) => {
      setBooks(r);
    });
  }, []);

  const handleFilterChange = (orderBy: string) => {
    handleFilter(orderBy).then((filteredBooks) => {
      setBooks(filteredBooks);
    });
  };

  return (
    <div className="flex flex-col gap-4 w-[100%]">
      <Filter optionSelection={handleFilterChange} />
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
