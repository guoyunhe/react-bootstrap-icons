import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DuffleFill = forwardRef(({
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

      <path d="M5.007 4.097c.008-.097.016-.197.027-.298.05-.464.141-.979.313-1.45.169-.465.432-.933.853-1.249 1.115-.836 2.485-.836 3.6 0 .42.316.684.784.853 1.25.171.47.263.985.313 1.449.01.1.02.2.027.298 1.401.194 2.65.531 3.525 1.012 2.126 1.169 1.446 6.095 1.089 8.018a.954.954 0 0 1-.95.772H1.343a.954.954 0 0 1-.95-.772c-.357-1.923-1.037-6.85 1.09-8.018.873-.48 2.123-.818 3.524-1.012ZM4.05 5.633a21.876 21.876 0 0 0-1.565.352l-.091.026-.034.01a.5.5 0 0 0 .282.959l.005-.002.02-.005.08-.023a20.874 20.874 0 0 1 1.486-.334A20.942 20.942 0 0 1 8 6.25c1.439 0 2.781.183 3.767.367a20.854 20.854 0 0 1 1.567.356l.02.005.004.001a.5.5 0 0 0 .283-.959h-.003l-.006-.002-.025-.007a14.787 14.787 0 0 0-.43-.113 21.87 21.87 0 0 0-1.226-.265A21.939 21.939 0 0 0 8 5.25c-1.518 0-2.926.192-3.95.383ZM6.8 1.9c-.203.153-.377.42-.513.791a5.258 5.258 0 0 0-.265 1.292 34.54 34.54 0 0 1 1.374-.076c.866-.022 1.742.003 2.584.076a5.258 5.258 0 0 0-.266-1.292c-.135-.372-.309-.638-.513-.791-.76-.57-1.64-.57-2.4 0Z" />
    </svg>
  );
});

DuffleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

DuffleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default DuffleFill;
