import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './header'
import Footer from  './footer'
import NavBar from './NavBar'

const layout = () => {
  return (
    <>
        <Header/>
        <NavBar/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default layout