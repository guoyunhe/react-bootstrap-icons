import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Transparency = forwardRef(({
  color, size, title, ...rest
}, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      {title ? <title>{title}</title> : null}

      <path d="M0 6.5a6.5 6.5 0 0 1 12.346-2.846 6.5 6.5 0 1 1-8.691 8.691A6.5 6.5 0 0 1 0 6.5Zm5.144 6.358a5.5 5.5 0 1 0 7.714-7.714 6.5 6.5 0 0 1-7.714 7.714Zm-.733-1.269c.363.15.746.261 1.144.33l-1.474-1.474c.069.398.18.78.33 1.144Zm2.614.386a5.47 5.47 0 0 0 1.173-.242L4.374 7.91a5.958 5.958 0 0 0-.296 1.118l2.947 2.947Zm2.157-.672c.297-.166.577-.36.838-.576L5.418 6.126a6.016 6.016 0 0 0-.587.826l4.35 4.351Zm1.545-1.284c.216-.26.41-.54.576-.837L6.953 4.83a5.97 5.97 0 0 0-.827.587l4.6 4.602Zm1.006-1.822c.121-.374.204-.766.242-1.172L9.028 4.078c-.386.063-.76.163-1.118.296l3.823 3.824Zm.186-2.642a5.463 5.463 0 0 0-.33-1.144 5.46 5.46 0 0 0-1.144-.33l1.474 1.474Z" />
    </svg>
  );
});

Transparency.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Transparency.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Transparency;
