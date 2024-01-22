import React, { ReactNode } from "react";
import { clsx } from "clsx";

type ButtonType = "primary" | "secondary" | "ico";

type ButtonColor =
  | "bg-btn_disabled"
  | "bg-btn_primary"
  | "bg-btn_secondary"
  | "bg-sky-200";
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
  color,
}: ButtonProps) => {
  const buttonColorClass = disabled ? "bg-btn_disabled" : color;

  const buttonClasses = clsx(className, buttonColorClass);

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
