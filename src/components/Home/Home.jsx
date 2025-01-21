import React from 'react'
import './Home.css'
import myImage from '../../assets/myImage.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
  return (
    <>
    <div id='home' className="home">
        <div className="image">
        <img src={myImage} alt="" />
        </div>
        <h1>Hi, my name is <span>Harsh Jyoriya</span></h1>
        <p>I am a Frontend developer from India</p>
        <div className="home-action">
            <div className="home-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="home-resume">My resume</div>
        </div>
    </div>
    </>
  )
}

export default Home
