import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header flex items-center gap-3 justify-center py-10 mb-5 text-white   font-bold ">
      <span>TV Series</span>
      <span className={({ isActice }) => (isActice ? "text-primary" : "")}>
        Movies
      </span>
      <span>Anime</span>
    </header>
  );
};

export default Header;
