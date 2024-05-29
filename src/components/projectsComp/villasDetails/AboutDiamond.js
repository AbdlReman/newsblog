import React from "react";
import abimg1 from "../../../images/apartment/apartment3.jpg";
import abimg2 from "../../../images/wp/wp-2.png";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
const AboutDiamond = () => {
  return (
    <section className="apartment-section s2 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="wp-content about-content mb-10 ml-50 rmb-50">
              <div className="section-title ">
                <h6>BEST ARCHITECT</h6>
                <h2>
                  Daimond
                  <span className="thin">Villas</span>
                </h2>
                <h6>High-quality fixtures and amenities </h6>
                <p>
                  We offer diamond villas with luxurious double-unit living. A
                  spacious layout makes this category attractive to
                  comfort-seeking customers.
                </p>

                <button className="theme-btn mt-20">
                  <Link to="/diamondvillas" className="text-white">
                    Read more
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="wp-images rmb-150">
              <div className="experience-year">
                <span className="number">
                  <FaCheck size={58} />
                </span>
                <h4>luxurious living</h4>
              </div>
              <img src={abimg1} alt="Wordpress" />
              <img src={abimg2} alt="Wordpress" className="d-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDiamond;
