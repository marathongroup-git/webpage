import React from 'react'
import './styles.scss'

const Title = ({ children, className = 'title' }) => (
  <h1 className={className}>{children}</h1>
)

export default Title
