import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() =>
  import("@/pages/main").then((module) => ({ default: module.MainPage })),
);
const CartPage = lazy(() =>
  import("@/pages/cart").then((module) => ({ default: module.CartPage })),
);
const BookPage = lazy(() =>
  import("@/pages/book").then((module) => ({ default: module.BookPage })),
);

export const withRouter = () => {
  //
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/book/:id" element={<BookPage />} />
    </Routes>
  );
};
