import { useState } from "react";
import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";

interface DropdownProps {
  optionSelection: (key: string) => void;
  options: {
    [key: string]: {
      ua: string;
    };
  };
}

const DropDown = ({ optionSelection, options }: DropdownProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Вибери фільтр");
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleOptionSelection = (option: string, translate: string) => {
    optionSelection(option);
    setSelectedOption(translate);
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
        <div className="flex w-[100%] z-10 rounded shadow gap-2 p-2 bg-white absolute flex-col">
          {Object.keys(options)?.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionSelection(item, options[item].ua)}
            >
              <Typography theme="font-normal" size="text-sm">
                {options[item].ua}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
