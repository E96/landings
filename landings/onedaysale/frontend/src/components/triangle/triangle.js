import classNames from 'classnames'
import React, { PropTypes } from 'react'
import { ROOT_FONT_SIZE } from 'constants'
import './triangle.css'

const Triangle = (props) => {
  const {
    size,
    top,
    left,
    color,
    blur
  } = props
  const fontSize = size / ROOT_FONT_SIZE
  const className = classNames(
    'triangle',
    `triangle-color-${color}`,
    { 'triangle-blur': blur }
  )
  return (
    <div
      className={className}
      style={{
        fontSize: `${fontSize}rem`,
        top: `${top}px`,
        left: `${left}px`
      }}
    />
  )
}

Triangle.propTypes = {
  size: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  blur: PropTypes.bool
}

export default Triangle
