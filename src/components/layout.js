
import React from "react"
import './bootstrap.min.css'
import './layout.css'
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
        <Navbar/>
        <h1>hello world </h1>
        {children}
    </>
  )
}
export default Layout
