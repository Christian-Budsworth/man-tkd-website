import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../atoms/Icon/Icon';
import clsx from 'clsx';
import './linkIcon.css';

/**
 * LinkIcon – wraps an <Icon> with an anchor (or any passthrough component)
 *
 * Props:
 * - to        string   required – URL or route
 * - external  bool     optional – opens in new tab when true
 * - iconProps object   optional – forwarded to <Icon>
 * - className string   optional – extra classes for the wrapper
 * - ariaLabel string   required if no visible text
 *
 * Usage:
 * <LinkIcon
 *   to="https://www.youtube.com"
 *   external
 *   ariaLabel="Visit our YouTube channel"
 *   iconProps={{ src: youtube, size: 'sm' }}
 * />
 */
export const LinkIcon = ({
  to,
  external = false,
  iconProps,
  className,
  ariaLabel,
  ...rest
}) => {
  const combinedClasses = clsx('link-icon', className);

  const sharedProps = {
    href: to,
    className: combinedClasses,
    'aria-label': ariaLabel,
    ...rest,
  };

  return external ? (
    <a {...sharedProps} target="_blank" rel="noopener noreferrer">
      <Icon {...iconProps} />
    </a>
  ) : (
    // If you’re using React-Router or Gatsby, replace <a> with <Link>
    <a {...sharedProps}>
      <Icon {...iconProps} />
    </a>
  );
};

LinkIcon.propTypes = {
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  iconProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    shape: PropTypes.oneOf(['square', 'rectangle']),
    alt: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

function removeDuplicates(nums) {
  let newArray = []
  for (let i=0; i < nums.length; i++) {
      if (!newArray.some(x => x === nums[i])) {
          newArray.push(nums[i])
      }
  }
  return newArray
};