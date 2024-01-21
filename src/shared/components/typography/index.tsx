import React from "react";
import clsx from "clsx";

type TypographySizes =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl";

type TypographyColors = "text-primary" | "text-secondary";
type TypographyAlign = "text-center" | "text-left" | "text-right";
type TypographyTheme = "font-bold" | "font-normal" | "font-light";

interface TypographyProps {
  color?: TypographyColors;
  size?: TypographySizes;
  align?: TypographyAlign;
  theme?: TypographyTheme;
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({
  color,
  theme,
  size,
  className,
  children,
  align,
}: TypographyProps) => {
  return (
    <p className={clsx(className, color, size, theme, align)}>{children}</p>
  );
};
