import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SignIntersectionSideFill = forwardRef(
  ({
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

        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM6.25 4h1.5v3.25H11v1.5H7.75V12h-1.5V4Z" />
      </svg>
    );
  },
);

SignIntersectionSideFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

SignIntersectionSideFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default SignIntersectionSideFill;
