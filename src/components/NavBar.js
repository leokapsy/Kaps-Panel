import React from 'react'
import { Link } from 'react-router-dom';
import { MdMonitorHeart } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { GrDomain } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";



const NavBar = () => {
  return (
    <div className='sidenav'>
      <h3 className='logo'>Kaps Panel</h3>
      <ul style={{
            
            padding: 0,
            margin: 0,
            gap: '1rem', // Spacing between links
          }}>
            <li>
              <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MdSpaceDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/email" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MdEmail />
                Emails
              </Link>
            </li>
            <li>
              <Link to="/terminal" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IoTerminal />
                Terminal
              </Link>
            </li>
            <li>
              <Link to="/domains" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GrDomain />
                Domains
              </Link>
            </li>
            <li>
              <Link to="/monitoring" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MdMonitorHeart />
                Monitoring
              </Link>
            </li>
    </ul>

    <ul className='signin'>
        <li><Link to="/logout">Logout</Link></li>
        
    </ul>

    </div>
  )
}

export default NavBar
