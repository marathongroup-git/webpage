import React from 'react'
import './styles.scss'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      
    </>
  )
}

export default Layout
