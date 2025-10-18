import * as React from "react";
import { Link } from "gatsby";
import "./imageButton.css";

export default function ImageButton({ to, src, alt = "", children }) {
  const content = (
    <button className="image-button">
      {src ? <img className="image-button__img" src={src} alt={alt} /> : null}
      {children ? <span className="image-button__label">{children}</span> : null}
    </button>
  );
  return to ? <Link to={to}>{content}</Link> : content;
}

