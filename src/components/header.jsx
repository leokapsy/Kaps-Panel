import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";

import NavBar from './NavBar';


const Header = () => {
  
  return (
  <div className="container">
  <NavBar/>
    <div className='header'> 
      <MdSpaceDashboard />     
       
    </div>
  </div>
  )
}

export default Header
