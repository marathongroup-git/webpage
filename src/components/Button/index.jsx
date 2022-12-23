import React from 'react'
import './styles.scss'

const Button = props => {
  const { children, className = 'button', type = 'button' } = props
  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
