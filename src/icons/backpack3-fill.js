import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Backpack3Fill = forwardRef(({
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

      <path d="M5 10v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5Z" />
      <path d="M6 2v.341a5.978 5.978 0 0 0-1.308.653l-.416-1.247a1 1 0 0 0-1.749-.284l-.77 1.027a1 1 0 0 0-.149.917l.803 2.407A5.985 5.985 0 0 0 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8c0-.771-.146-1.509-.41-2.186l.801-2.407a1 1 0 0 0-.148-.917l-.77-1.027a1 1 0 0 0-1.75.284l-.415 1.247A5.976 5.976 0 0 0 10 2.34V2a2 2 0 1 0-4 0Zm1 0a1 1 0 0 1 2 0v.083a6.04 6.04 0 0 0-2 0V2Zm5.941 2.595a6.036 6.036 0 0 0-.8-.937l.531-1.595.77 1.027-.5 1.505ZM3.86 3.658a6.031 6.031 0 0 0-.8.937L2.557 3.09l.77-1.027.532 1.595Zm.18 3.772a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.142 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.142ZM4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4Z" />
    </svg>
  );
});

Backpack3Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Backpack3Fill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Backpack3Fill;