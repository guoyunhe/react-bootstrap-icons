import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EmojiSurprise = forwardRef(({
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

      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
      <path d="M7 5.5C7 6.328 6.552 7 6 7s-1-.672-1-1.5S5.448 4 6 4s1 .672 1 1.5Zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 4 10 4s1 .672 1 1.5ZM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  );
});

EmojiSurprise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

EmojiSurprise.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default EmojiSurprise;
