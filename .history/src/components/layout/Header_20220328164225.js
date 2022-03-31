import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header flex items-center gap-3 justify-center py-10 mb-5 text-white   font-bold ">
      <NavLink className={({ isActice }) => (isActice ? "text-primary" : "")}>
        Home
      </NavLink>
      <NavLink className={({ isActice }) => (isActice ? "text-primary" : "")}>
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
