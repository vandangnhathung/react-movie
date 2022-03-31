import React from "react";
import { NavLink } from "react-router-dom";
const ListLink = [
  {
    id: 1,
  },
];

const Header = () => {
  return (
    <header className="header flex items-center gap-3 justify-center py-10 mb-5 text-white   font-bold ">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
