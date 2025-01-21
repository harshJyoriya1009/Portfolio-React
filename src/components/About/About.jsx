import React from 'react'
import './About.css'
import myImage from '../../assets/myImage.jpeg'

const About = () => {
  return (
    <>
    <div className="about">
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={myImage} alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
            <img style={{height:"450px", width:"450px"}} src={myImage} alt="" />
            </div>
        
        <div className="about-right">
            <div className="about-detail">
                <p>Hi, I'm Harsh Jyoriya, a passionate and driven professional with expertise in Java programming, website building, and frontend development. With a strong foundation in engineering, I bring problem-solving and technical skills to every project I work on. My experience includes working with Microsoft Project to manage tasks efficiently, while also leveraging Adobe Photoshop and video editing tools to create visually engaging content. I am always eager to learn new technologies and push my boundaries to deliver high-quality solutions that make a difference. Let's connect!</p>
            </div>
            
            
            <div className="about-skills">
                <div className="about-skill"><p>JAVA DEVELOPER </p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>WEB DESIGNER</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>REACT JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>VIDEO EDITOR</p><hr style={{width:"50%"}} /></div>
            </div>
            </div>
            </div>
        
    
  
    <div className="about-experiences">
        <div className="about-experience">
            <h1>B.Tech</h1>
            <p>(Computer Science)</p>
        </div>
        <hr />
  
        <div className="about-experience">
            <h1>7+</h1>
            <p>(Project Complete)</p>
        </div>
        {/* <hr /> */}

        {/* <div className="about-experience">
            <h1>10+2</h1>
            <p>Schooling</p>
        </div> */}
  
      
  
    </div>
    </div>
    </>
  )
} 
  
export default About
