import React from 'react'
import './Services.css'
import services from '../../assets/services'
const Services = () => {
  return (
    <>
       {/* <div className="services">
        <div className="services-title">
            <h1>Services</h1>
        </div>
        <div className="services-container">
            {services.map((services, index)=>{
              return <div key={index} className="services-format">
                 <h2>{services. s_name}</h2>
                 <p>{services. s_detail}</p>
                 <div className="services-readmore">
                    <p>Read more</p>
                 </div>
              </div>
            })}
        </div>
       </div> */}


       <div id="services">
        <div className="services">
            <h1 className="title">Services</h1>
            <div className="servicesList">
                <div>
                    <i className="fa-solid fa-web-awesome"></i>
                    <h2>WEB DESIGNER</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam, est voluptatum accusamus a odio recusandae fugiat dignissimos vitae minima eaque nobis laboriosam distinctio temporibus quidem fuga eveniet odit. Sed!</p>
                    <a href="#">More</a>
                </div>

                <div>
                    <i className="fa-brands fa-java"></i>
                    <h2>JAVA DEVELOPER</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam, est voluptatum accusamus a odio recusandae fugiat dignissimos vitae minima eaque nobis laboriosam distinctio temporibus quidem fuga eveniet odit. Sed!</p>
                    <a href="#">More</a>
                </div>

                <div>
                    <i className="fa-solid fa-video"></i>
                    <h2>VIDEO EDITOR</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam, est voluptatum accusamus a odio recusandae fugiat dignissimos vitae minima eaque nobis laboriosam distinctio temporibus quidem fuga eveniet odit. Sed!</p>
                    <a href="#">More</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services
