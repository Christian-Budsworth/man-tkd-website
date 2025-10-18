import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { LinkIcon } from '../LinkIcon/LinkIcon';
import './socials.css';

/**
 * Socials – renders a list of social-media link icons.
 *
 * props.links: Array of objects
 *   {
 *     to: string,          // URL
 *     external: bool,
 *     ariaLabel: string,
 *     src: string,         // image path
 *     size: 'xs'|'sm'|'md'|'lg'|'xl',
 *     shape: 'square'|'rectangle',
 *     alt: string
 *   }
 *
 * Example:
 * <Socials
 *   links={[
 *     { to:'https://youtube.com', external:true, ariaLabel:'YouTube', src:youtube },
 *     …
 *   ]}
 * />
 */
export const Socials = ({ links, className, ...rest }) => {
  const classes = clsx('socials', className);

  return (
    <div className={classes} {...rest}>
      {links.map((l) => (
        <LinkIcon
          key={l.to}
          to={l.to}
          external={l.external}
          ariaLabel={l.ariaLabel}
          iconProps={{
            src: l.src,
            size: l.size ?? 'sm',
            shape: l.shape ?? 'square',
            alt: l.alt,
          }}
        />
      ))}
    </div>
  );
};

Socials.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      external: PropTypes.bool,
      ariaLabel: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
      shape: PropTypes.oneOf(['square', 'rectangle']),
      alt: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};
