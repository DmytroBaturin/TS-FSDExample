import { useBooksApi } from "@/entities/book";

export const useFilterModel = () => {
  const { getBooks } = useBooksApi(); // hook

  const handleFilter = async (orderBy: string) => {
    return await getBooks(orderBy); // async
  };

  return { handleFilter };
};
