import React from 'react'
import './Footer.css'
import copyRight from '../../assets/copyRight.png'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-top">
            <div className="footer-left">
                <h1>Harsh Jyoriya</h1>
                <p>I am a Frontend Developer</p>
            </div>
            <div className="footer-top-right">
                {/* <div className="footer-email-input"> */}
                {/* <i className="fa-solid fa-user"></i> */}
                    {/* <input type="email" placeholder='Enter your Email' name="email" /> */}
                {/* </div> */}
                {/* <div className="footer-enter">Enter</div> */}
            </div>
        </div>
        <hr />
        <div className="footer-bootom">
               <p className="footer-bottom-left"> www.harshJyoriyaPortfolio.com | All right reserved <img src={copyRight} style={{height:"15px", width:"15px"}}  /></p>
           <div className="footer-bootom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
           </div>
        </div>
    </div>
    </>
  )
}

export default Footer
