import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.jpg'
import call_icon from '../../assets/call_icon.png'
import location_icon from '../../assets/location_icon.png'

const Contact = () => {
  return (
    <>
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Contact me</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Goo..</h1>
                <p>I am always avaliable for work</p>
                <div className="contact-details">
                    
                    <div className="contact-detail">
                    <i className="fa-solid fa-envelope"></i>  <p>harshjyoriya639@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                    <i className="fa-solid fa-phone"></i><p>6969696969</p>

                    </div>

                    <div className="contact-detail">
                    <i className="fa-solid fa-location-dot"></i> <p>India</p>

                    </div>

                </div>
            </div>
            <form action="" className="contact-right">
                <label htmlFor="">Enter your name</label>
                <input type="text" name="name" placeholder='Enter your name' id="" />
                <label htmlFor="">Enter your Email</label>
                <input type="email" name="email" placeholder='Enter your Email' id="" />
                <label htmlFor="">Write your Message</label>
                <textarea type="text" name="name" rows="7" placeholder='Enter your Message' id="" />
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>

    </div>
    </>
  )
}

export default Contact
