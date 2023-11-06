import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SuitcaseFill = forwardRef(({
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

      <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V3h1.5A1.5 1.5 0 0 1 13 4.5v9a1.5 1.5 0 0 1-1.004 1.416A1 1 0 1 1 10 15H6a1 1 0 1 1-1.997-.084A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3H6V.5ZM9 1H7v2h2V1ZM6 5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2.5 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2.5 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Z" />
    </svg>
  );
});

SuitcaseFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

SuitcaseFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default SuitcaseFill;
