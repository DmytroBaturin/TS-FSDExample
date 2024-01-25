import { Input } from "@/shared/components/input";
import { Book } from "@/types/book";
import { Typography } from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { useSearchModel } from "@/features/book/searchBook/model";
import { Row } from "@/features/book/searchBook/ui/ui";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";

export const SearchInput = () => {
  const { setIsFocused, isFocused, value, setValue, books } = useSearchModel();

  const action = () => {
    setIsFocused(!isFocused);
    value ? setValue("") : null;
  };

  const ref = useOutsideClick(() => {
    setIsFocused(false);
  });

  return (
    <div ref={ref} className="relative w-[100%]">
      <Input
        value={value}
        onFocus={() => setIsFocused(!isFocused)}
        action={value ? <Icon name="close" /> : <Icon name="search" />}
        onClick={action}
        onChange={(e) => setValue(e.target.value)}
      />
      {isFocused ? (
        value ? (
          <div className="absolute bg-white max-h-[300px] py-1 px-2 overflow-scroll w-[100%] rounded shadow">
            {books.items?.map((book: Book) => (
              <Row book={book} key={book.id} />
            ))}
          </div>
        ) : (
          <div className="absolute bg-white flex justify-center py-2 max-h-[300px] overflow-scroll w-[100%] rounded shadow">
            <Typography size="text-sm" color="text-secondary">
              Write something to search
            </Typography>
          </div>
        )
      ) : null}
    </div>
  );
};
