import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  const [menu, setmenu] = useState("home")
  const menuRef= useRef();

  const openMenu=()=>{
    menuRef.current.style.right='0'
  }
  const closeMenu=()=>{
    menuRef.current.style='300px'
  }
  return (
    <div className='navbar'>

            <div className="port-logo">Harsh Portfolio</div>
            <i id='nav-open-bar' onClick={openMenu} className="fa-solid fa-bars"></i>
           
                <ul ref={menuRef} className='nav-menu'>
                <i id='nav-close-bar' onClick={closeMenu} className="fas fa-window-close"></i>
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
