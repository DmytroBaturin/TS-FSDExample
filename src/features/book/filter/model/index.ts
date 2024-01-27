import { useBooksApi } from "@/entities/book";

export const useFilterModel = () => {
  const { getBooks } = useBooksApi();

  const handleFilter = async (orderBy: string) => {
    return await getBooks(orderBy);
  };

  return { handleFilter };
};
