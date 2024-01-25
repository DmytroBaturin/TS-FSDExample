import { useRef, useState } from "react";
import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";

interface DropDownProps {
  options?: string[];
  optionSelection?: (option: string) => void;
}

export const DropDown = ({ options, optionSelection }: DropDownProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Вибери опцію");
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleOptionSelection = (option: string) => {
    optionSelection?.(option);
    setSelectedOption(option);
    setShowDropDown(false);
  };

  const ref = useOutsideClick(() => {
    setShowDropDown(false);
  });

  return (
    <div className="relative z-1 w-[200px]" ref={ref}>
      <Button
        color="bg-sky-200"
        className="px-6 py-2 rounded w-[100%]"
        buttonType="secondary"
        onClick={toggleDropDown}
      >
        {selectedOption}
      </Button>
      {showDropDown && (
        <div className="flex w-[100%] rounded shadow gap-2 p-2 bg-white absolute flex-col">
          {options?.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionSelection(item)}
            >
              <Typography theme="font-normal" size="text-sm">
                {item}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
