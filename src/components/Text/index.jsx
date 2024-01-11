import React from 'react'

const sizeClasses = {
  txtCommissionerSemiBold43: 'font-commissioner font-semibold',
  txtArialMT21: 'font-arial font-normal',
  txtArialMT26: 'font-arial font-normal',
  txtArialBoldMT68: 'font-arial font-bold',
  txtInterSemiBold33: 'font-inter font-semibold',
  txtArialBoldMT25: 'font-arial font-bold',
  txtArialMT25: 'font-arial font-normal',
  txtArialMT19: 'font-arial font-normal',
  txtArialItalicMT25: 'font-arial font-normal italic',
}

const Text = ({ children, className = '', size, as, ...restProps }) => {
  const Component = as || 'p'

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  )
}

export { Text }
