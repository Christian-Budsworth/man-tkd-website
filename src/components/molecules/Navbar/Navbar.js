import * as React from "react";
import NavLink from "../../atoms/NavLink/NavLink";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/knowlege">Knowlege</NavLink>
        </li>
        <li>
          <NavLink to="/uniform">Uniform</NavLink>
        </li>
        <li>
          <NavLink to="/classes">Classes</NavLink>
        </li>
      </ul>
    </nav>
  );
}

