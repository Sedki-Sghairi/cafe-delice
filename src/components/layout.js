
import React from "react"
import './bootstrap.min.css'
import { FaCoffee } from 'react-icons/fa';
const Layout = ({ children }) => {
  return (
    <>
        <h1>hello world <FaCoffee /></h1>
        {children}
    </>
  )
}
export default Layout
