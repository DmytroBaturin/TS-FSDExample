import Dropdown from "@/shared/components/dropdown";
interface FilterProps {
  optionSelection: (selectedOption: string) => void;
}
export const Filter = ({ optionSelection }: FilterProps) => {
  return (
    <Dropdown
      optionSelection={optionSelection}
      options={{
        Newest: {
          ua: "Найновіше",
        },
        Relevance: {
          ua: "По рейтингу",
        },
      }}
    />
  );
};
