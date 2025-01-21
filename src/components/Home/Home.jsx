import React from 'react'
import './Home.css'
import myImage from '../../assets/myImage.jpeg'

const Home = () => {
  return (
    <>
    <div className="home">
        <div className="image">
        <img src={myImage} alt="" />
        </div>
        <h1>Hi, my name is <span>Harsh Jyoriya</span></h1>
        <p>I am a Frontend developer from India</p>
        <div className="home-action">
            <div className="home-connect">Connect with me</div>
            <div className="home-resume">My resume</div>
        </div>
    </div>
    </>
  )
}

export default Home
