import React from "react";
import { NavLink } from "react-router-dom";
const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "movies",
    title: "Movies",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center gap-3 justify-center py-10 mb-5 text-white   font-bold ">
      {ListLink.map((item) => (
        <NavLink
          to={item.to}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          {item.title}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
