import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

            <div className="port-logo">Harsh Portfolio</div>
           
                <ul className='nav-menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact me</li>
                </ul>
                <div className="nav-connect">Connect with me</div>

            </div>
      
   
  )
}

export default Navbar
