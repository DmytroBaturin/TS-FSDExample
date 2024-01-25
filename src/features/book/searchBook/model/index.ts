import { useState, useEffect } from "react";
import { BooksApiResponse, useBooksApi } from "@/entities/book";

export const useSearchModel = () => {
  const { searchBooks } = useBooksApi();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [books, setBooks] = useState<BooksApiResponse>({ items: [] });

  useEffect(() => {
    if (value) {
      searchBooks(value).then(setBooks);
    }
  }, [value]);

  return { value, setValue, books, setIsFocused, isFocused };
};
