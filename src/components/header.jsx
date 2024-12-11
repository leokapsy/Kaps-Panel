import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import NavBar from './NavBar';


const Header = () => {
  const [ showNav, setShowNav] = useState(false)
  return (
    <div className='header'>
      <CiMenuFries onClick={() => setShowNav(!showNav)}/>

      {showNav &&<NavBar/>}
    </div>
  )
}

export default Header
