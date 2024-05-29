import React from "react";
import abimg from "../../images/wp/wp-3.png";

const About2 = (props) => {
  return (
    <section className="about-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="about-image mr-50 rmr-0">
              <div className="experience-year">
                <span className="number">25</span>
                <h4>Years of Experience</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="wp-content about-content mb-10 ml-50  rmb-50">
              <div className="section-title mb-10">
                <h6>BEST ARCHITECT</h6>
                <h2>
                  Luxury <br />
                  <span className="thin">Villas,</span>
                </h2>
                <h6>a higher mark of lifestyle!</h6>
                <p>
                  Welcome to Victory Villas to discover your new home! Maidaan
                  provides a range of villas and houses tailored to luxury,
                  client preferences, and financial circumstances. We construct
                  villas/homes and offer them for sale as per the needs and
                  aspirations of our clients. Our villas are available in
                  multiple sizes across Pakistan. Discover Maidaan as an exact
                  destination where turnkey solutions through VV alleviate all
                  worries.
                </p>
              </div>
              {/* <img src={abimg} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
