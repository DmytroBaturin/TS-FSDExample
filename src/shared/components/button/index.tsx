import React, { ReactNode } from "react";
import { clsx } from "clsx";

type ButtonType = "primary" | "secondary" | "ico";

type ButtonColor = "black" | "green";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: ButtonColor;
  buttonType: ButtonType;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, disabled ? "bg-gray-300 text-gray-500" : "")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
