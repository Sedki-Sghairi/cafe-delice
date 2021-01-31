
import React from "react"
import './bootstrap.min.css'
import './layout.css'
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
export default Layout
