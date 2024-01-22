import { Typography } from "../typography";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="p-5 bg-white flex justify-center shadow-md">
      <div className="flex items-center justify-between w-4/5">
        <Typography theme="font-bold" size="text-lg">
          <Link to="/">Logo</Link>
        </Typography>
        <div className="flex items-center gap-[50px]">
          <Typography theme="font-light" size="text-sm">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-primary"
              }
              to="/"
            >
              Головна
            </NavLink>
          </Typography>
          <Typography theme="font-light" size="text-sm">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-primary"
              }
              to="/cart"
            >
              Кошик
            </NavLink>
          </Typography>
        </div>
      </div>
    </div>
  );
};
