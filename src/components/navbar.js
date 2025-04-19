import * as React from "react";
import { Link } from "gatsby";
import './styles/navbar.css'
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/knowlege">Knowlege</Link>
        </li>
        <li>
          <Link to="/uniform">Uniform</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
      </ul>
    </nav>
  );
}
