import clsx from "clsx";
import React from "react";

type CardType = "w-card-row" | "w-card-column";
interface CardProps {
  type: CardType;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export const Card = ({ children, type, className, onClick }: CardProps) => {
  return (
    <div onClick={onClick} className={clsx(type, className)}>
      {children}
    </div>
  );
};
