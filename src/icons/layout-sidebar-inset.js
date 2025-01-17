import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LayoutSidebarInset = forwardRef(
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

        <path d="M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
        <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
      </svg>
    );
  },
);

LayoutSidebarInset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

LayoutSidebarInset.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default LayoutSidebarInset;
