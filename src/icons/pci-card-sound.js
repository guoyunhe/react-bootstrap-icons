import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PciCardSound = forwardRef(({
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

      <path d="M7.562 7.39 8 7.04v1.92l-.438-.35a.5.5 0 0 0-.312-.11H6.5v-1h.75a.5.5 0 0 0 .312-.11Z" />
      <path d="M.5 1a.5.5 0 0 0 0 1H1v12.5a.5.5 0 0 0 1 0V12h13.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H2V1.5a.5.5 0 0 0-.5-.5h-1Zm11.619 3.881c.1.115.194.238.28.367.484.726.768 1.7.768 2.752 0 1.051-.284 2.026-.768 2.752-.086.13-.18.252-.28.367l-.71-.71c.055-.064.107-.135.158-.212.36-.54.6-1.315.6-2.197 0-.882-.24-1.657-.6-2.198a2.57 2.57 0 0 0-.157-.212l.709-.709Zm-1.375 4.863L10 9c.057 0 .17-.035.291-.217.12-.178.209-.454.209-.783 0-.33-.09-.605-.209-.783C10.17 7.035 10.057 7 10 7l.744-.744c.15.113.278.254.38.406.242.364.376.839.376 1.338 0 .5-.134.974-.377 1.338a1.653 1.653 0 0 1-.379.406ZM9 6v4a.5.5 0 0 1-.812.39L7.075 9.5H6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h1.075l1.113-.89A.5.5 0 0 1 9 6Z" />
      <path d="M6.5 12.5H3v1a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 .5-.5v-1Zm.5 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z" />
    </svg>
  );
});

PciCardSound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

PciCardSound.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default PciCardSound;
