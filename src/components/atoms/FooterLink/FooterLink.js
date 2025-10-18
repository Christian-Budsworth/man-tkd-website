import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./footerLink.css";

/**
 * FooterLink
 * ----------
 * Renders an anchor that always opens in a new tab (`target="_blank"`).
 * Accepts an optional icon element (ReactNode) before the label.
 */
export const FooterLink = ({
  href,
  label,
  icon,
  shape = "rectangle",
  bold = false,
  className,
  ...rest
}) => {
  const classes = clsx(
    "footer-link",
    `footer-link--${shape}`,
    bold && "footer-link--bold",
    className
  );

  return (
    <a
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      {...rest}
    >
      {icon && <span className="footer-link__icon">{icon}</span>}
      {/* Text can be visually hidden for square links that only show an icon */}
      {shape !== "square" && <span className="footer-link__label">{label}</span>}
    </a>
  );
};

FooterLink.propTypes = {
  /** Destination URL */
  href: PropTypes.string.isRequired,
  /** Visible text (will also be used for aria‑label) */
  label: PropTypes.string.isRequired,
  /** React node shown before the text – typically an SVG icon */
  icon: PropTypes.node,
  /** Shape of the button: fixed square or fluid rectangle */
  shape: PropTypes.oneOf(["square", "rectangle"]),
  /** Optional bold label */
  bold: PropTypes.bool,
  /** Extra classNames */
  className: PropTypes.string,
};
