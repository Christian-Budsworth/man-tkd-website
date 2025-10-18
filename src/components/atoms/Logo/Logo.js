import * as React from "react";
import "./logo.css";

export default function Logo({ src, alt = "Logo", className = "" }) {
  return <img className={`logo ${className}`.trim()} src={src} alt={alt} />;
}

