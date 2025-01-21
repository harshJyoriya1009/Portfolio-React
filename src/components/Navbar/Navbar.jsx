import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  const [menu, setmenu] = useState("home")
  return (
    <div className='navbar'>

            <div className="port-logo">Harsh Portfolio</div>
           
                <ul className='nav-menu'>
                    <li className='hover'> <AnchorLink className='anchor-link'href='#home'> <p onClick={()=>{setmenu("home")}}>Home</p></AnchorLink></li>
                    <li className='hover'> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setmenu("about")}}>About</p></AnchorLink></li>
                    <li className='hover'> <AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>{setmenu("services")}}>Services</p></AnchorLink></li>
                    <li className='hover'> <AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>{setmenu("projects")}}>Projects</p></AnchorLink></li>
                    <li className='hover'> <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setmenu("contact")}}>Contact me</p></AnchorLink></li>
                </ul>
                <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>

            </div>
      
   
  )
}

export default Navbar
