import { useState, useEffect, useCallback } from "react";
import { BooksApiResponse, useBooksApi } from "@/entities/book";
import { useDebounce } from "@/shared/hooks/useDebounce";

export const useSearchModel = () => {
  const { searchBooks } = useBooksApi();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [books, setBooks] = useState<BooksApiResponse>({ items: [] });

  const debouncedValue = useDebounce(value, 500);

  const search = useCallback(async () => {
    if (debouncedValue) {
      const books = await searchBooks(debouncedValue);
      setBooks(books);
    }
  }, [debouncedValue]);

  useEffect(() => {
    search();
  }, [debouncedValue, search]);

  return { value, setValue, books, setIsFocused, isFocused };
};
