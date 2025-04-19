import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";           // tiny helper for conditional classNames
import "./text.css";

export const Text = ({
  children,
  size = "medium",
  color = "default",
  bold = false,
  italic = false,
  ...props
}) => {
  const classes = clsx(
    "text",
    size !== "medium" && `text--${size}`,     // medium is the base style
    color !== "default" && `text--${color}`,
    bold && "text--bold",
    italic && "text--italic"
  );

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  bold: PropTypes.bool,
  italic: PropTypes.bool,
};
