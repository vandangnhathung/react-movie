import React from "react";
import { NavLink } from "react-router-dom";
const ListLink = [
  {
    id: 1,
    to: "/",
  },
  {
    id: 2,
    to: "movies",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center gap-3 justify-center py-10 mb-5 text-white   font-bold ">
    {ListLink.map(item) => {
      return (

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>)
    }}
     
    </header>
  );
};

export default Header;
