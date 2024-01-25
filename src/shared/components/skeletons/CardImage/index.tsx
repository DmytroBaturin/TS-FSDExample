import bookico from "@/shared/assets/icons/book.svg";
export const CardImageSkeleton = () => {
  return (
    <div className="w-[300px] h-[350px] justify-center flex p-6 bg-slate-200 rounded-lg">
      <img src={bookico} />
    </div>
  );
};
