import { ReactNode } from "react";
import { Header } from "@/shared/components/header";

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
