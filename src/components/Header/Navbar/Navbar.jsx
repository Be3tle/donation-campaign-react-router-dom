import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 pt-5">
      <div className="flex-1">
        <Logo></Logo>
      </div>
      <div className="flex-none">
        <ul className="lg:menu-horizontal px-1 gap-2 lg:gap-5 text-sm font-normal lg:text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500 underline font-semibold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500 underline font-semibold "
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/stats"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500 underline font-semibold"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
