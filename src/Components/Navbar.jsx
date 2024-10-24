import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bordering">
      <ul>
        <li>
          <NavLink to="/" className={(e) => (e.isActive ? "reddy" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies/:id"
            className={(e) => (e.isActive ? "reddy" : "")}
          >
            movie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourites"
            className={(e) => (e.isActive ? "reddy" : "")}
          >
            favourites
          </NavLink>
        </li>
        <input type="text" placeholder="search" />
        <button>SEARCH</button>
      </ul>
    </nav>
  );
};

export default Navbar;
