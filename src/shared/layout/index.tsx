import { ReactNode } from "react";
import { Header } from "@/widgets/header";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl p-5 flex justify-center flex-col m-auto">
        {children}
      </div>
    </>
  );
};
