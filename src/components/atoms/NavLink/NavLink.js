import * as React from "react";
import { Link } from "gatsby";
import "./navLink.css";

export default function NavLink({ to, children }) {
  return (
    <Link className="nav-link" to={to}>
      {children}
    </Link>
  );
}

