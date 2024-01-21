import clsx from "clsx";

type ImageSizes = "w-1/2" | "w-1/1" | "w-1/3" | "w-1/4" | "w-1/9";
interface ImageProps {
  src?: string;
  size?: ImageSizes;
  className?: string;
}
export const Image = ({ src, size, className }: ImageProps) => {
  return <img className={clsx(size, className)} src={src} />;
};
