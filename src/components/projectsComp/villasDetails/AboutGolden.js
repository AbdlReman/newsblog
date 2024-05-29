import React from "react";
import Bg from "../../../images/wp/wp-bg.png";
import abimg1 from "../../../images/apartment/apartment2.jpg";
import abimg2 from "../../../images/wp/wp-2.png";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
const AboutGolden = () => {
  return (
    <section
      id="about"
      className="wp-section pt-150 rmb-100"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="wp-images rmb-150">
              <div className="experience-year">
                <span className="number">
                  <IoCheckmarkCircle size={50} />
                </span>
                <h4> Luxury Interiors.</h4>
              </div>
              <img src={abimg1} alt="Wordpress" />
              <img src={abimg2} alt="Wordpress" className="d-none" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wp-content about-content mb-10 ml-50 pt-100 rmb-50">
              <div className="section-title mb-10">
                <h2>
                  Golden <br />
                  <span>Villas</span> <br />
                  <span className="thin">Luxurious Home</span>
                </h2>
                <h6>Best Villas </h6>
                <p>
                  Golden Villas offer residences that perfectly address the
                  desires of the Pakistani community. Through GV, we provide
                  premium solutions
                </p>

                <button className="theme-btn mt-20">
                  <Link to="/goldenvillas" className="text-white">
                    Read more
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGolden;
