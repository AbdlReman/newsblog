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
                <span className="number">5</span>
                <h4>Years of Working</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="wp-content about-content mb-10 ml-50  rmb-50">
              <div className="section-title mb-10">
                <h6>About</h6>
                <h2>
                  Fashion <br />
                  <span className="thin">& Beauty</span>
                </h2>
                <h6>Higher mark of Viral Content!</h6>
                <p>
                  we believe in the power of staying ahead. Our mission is to
                  bring you the freshest trends and most exciting developments
                  from around the globe. Whether it's the latest fashion craze
                  taking over Instagram, a groundbreaking tech innovation, or a
                  health trend that everyone's buzzing about, you'll find it
                  here first. We sift through the noise to bring you the trends
                  that matter, ensuring you’re always one step ahead in the
                  ever-evolving landscape of what’s popular.
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
