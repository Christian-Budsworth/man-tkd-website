import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './icon.css';

/**
 * Usage:
 * <Icon name="facebook" size="sm" shape="square" alt="Facebook logo" />
 *
 * The component expects image files in /public/images or /src/images.
 * It constructs the src as `/images/{name}.{ext}`.
 */
export const Icon = ({
  src,
  size = 'md',
  shape = 'square',
  alt = '',
  ...props
}) => {

  const classes = clsx(
    'icon',
    size && `icon--${size}`,
    shape && `icon--${shape}`
  );
 
  return (
    /* eslint-disable-next-line jsx-a11y/alt-text */
    <img src={src} className={classes} alt={alt} {...props} />
  );
};

Icon.propTypes = {
  name:  PropTypes.string.isRequired, 
  size:  PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  shape: PropTypes.oneOf(['square', 'rectangle']),
  alt:   PropTypes.string,                     
};
