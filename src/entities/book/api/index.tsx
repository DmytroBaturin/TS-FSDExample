import { Book } from "@/shared/types/book";

export interface BooksApiResponse {
  kind?: string;
  totalItems?: number;
  items?: Book[];
}

export const useBooksApi = () => {
  const getBooks = async (): Promise<BooksApiResponse> => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=Harry&maxResults=10",
      );
      if (!response.ok) {
        new Error("Network response was not ok");
      }
      return (await response.json()) as BooksApiResponse;
    } catch (error) {
      console.error("Fetching books failed:", error);
      throw error;
    }
  };

  const getBook = async (id?: string): Promise<Book> => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`,
      );
      if (!response.ok) {
        new Error("Network response was not ok");
      }
      return (await response.json()) as Book;
    } catch (error) {
      console.error("Fetching books failed:", error);
      throw error;
    }
  };

  const searchBooks = async (query: string): Promise<BooksApiResponse> => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`,
      );
      if (!response.ok) {
        new Error("Network response was not ok");
      }
      return (await response.json()) as BooksApiResponse;
    } catch (error) {
      console.error("Fetching books failed:", error);
      throw error;
    }
  };

  return { getBooks, getBook, searchBooks };
};
