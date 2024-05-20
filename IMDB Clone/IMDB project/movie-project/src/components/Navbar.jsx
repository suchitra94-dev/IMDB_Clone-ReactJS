import React from "react";
import Logo from "../movie.jpg";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex border space-x-8 items-center">
        <img className="w-[50px]" src={Logo} />
        <Link to="/" className="text-blue-400/100 font-bold text-xl">
          Movies
        </Link>
        <Link to="/watchlist" className="text-blue-400/100 font-bold text-xl">
          Watchlist
        </Link>
      </div>
    </>
  );
};

export default Navbar;
