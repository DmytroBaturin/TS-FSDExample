import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  action?: ReactNode;
}
export const Input = ({
  action,
  icon,
  onChange,
  value,
  onFocus,
  onClick,
}: InputProps) => {
  return (
    <div className="flex relative w-[100%]">
      <div>{icon}</div>
      <input
        onFocus={onFocus}
        className="flex border-[1.5px] border-gray-200 w-[100%] rounded px-3 py-2"
        value={value}
        onChange={onChange}
      />
      <div className="absolute right-[20px] w-[22px] top-1/4" onClick={onClick}>
        {action}
      </div>
    </div>
  );
};
