import React from 'react'
import './styles.scss'

const Text = ({ style, children, className = 'text' }) => {
  return <p style={style} className={className}>{children}</p>
}

export default Text
