import React from "react";
import "./Services.css";
import services from "../../assets/services";
const Services = () => {
  return (
    <>
      <div id="services" className="services">
        <div className="services-title">
          <h1>Services</h1>
        </div>
        <div className="services-container">
          {services.map((services, index) => {
            return (
              <div key={index} className="services-format">
                <h2>{services.s_name}</h2>
                <p>{services.s_detail}</p>
                <div className="services-readmore">
                  <p>Read more</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
