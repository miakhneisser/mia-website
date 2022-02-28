import React from 'react'
import Icons from './static/icons.svg'; // Path to your icons.svg
import PropTypes from 'prop-types';

const Icon = ({ className, name, color, size, width, height, onClick }) => (
  <svg className={className} fill={color} width={width || size} height={height || size} onClick={onClick}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string
};

export default Icon;
