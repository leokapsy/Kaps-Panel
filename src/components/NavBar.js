import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='sidenav'>
      <h3 className='logo'>Kaps Panel</h3>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/emails">Emails</Link></li>
        <li><Link to="/terminal">Terminal</Link></li>
        <li><Link to="/domains">Domains</Link></li>
        <li><Link to="/monitoring">Monitoring</Link></li>
    </ul>
    <ul className='signin'>
        <li><Link to="/logout">Logout</Link></li>
        
    </ul>

    </div>
  )
}

export default NavBar