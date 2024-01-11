import React from 'react'
import PropTypes from 'prop-types'

const shapes = { square: 'rounded-none', round: 'rounded-sm' }
const variants = {
  fill: { gray_600: 'bg-gray-600 text-gray-900' },
  outline: { gray_900: 'border-2 border-gray-900 border-solid text-gray-900' },
}
const sizes = { xs: 'p-[3px]', sm: 'p-[22px] sm:px-5' }

const Button = ({
  children,
  className = '',
  leftIcon,
  rightIcon,
  shape = 'square',
  size = 'xs',
  variant = 'fill',
  color = 'gray_600',
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ''} ${
        (size && sizes[size]) || ''
      } ${(variant && variants[variant]?.[color]) || ''}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(['square', 'round']),
  size: PropTypes.oneOf(['xs', 'sm']),
  variant: PropTypes.oneOf(['fill', 'outline']),
  color: PropTypes.oneOf(['gray_600', 'gray_900']),
}

export { Button }
