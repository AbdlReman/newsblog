import React from "react";

import abimg1 from "../../images/4.jpeg";
import abimg2 from "../../images/4.jpeg";
import abimg3 from "../../images/2.jpeg";

const About = (props) => {
  return (
    <section
      id="about"
      className="wp-section pt-150 rmb-100"
      // style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="wp-images rmb-150">
              <div className="experience-year">
                <span className="number">5</span>
                <h4>Years of working</h4>
              </div>

              <img src={abimg2} alt="victory villas" />
              <img className="d-none" src={abimg1} alt="victory villas" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="wp-content ml-50 rml-0 rpt-30">
              <div className="section-title mb-10">
                <h6>ABOUT US</h6>
                <h2>
                  A Legacy of
                  <br />
                  <span className="thin">Excellence </span>
                </h2>
                <h6>Crafting Exceptional Living Experiences</h6>
              </div>
              <img src={abimg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
