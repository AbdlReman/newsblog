import React from "react";
import Bg from "../../images/team/team-bg.png";
import team1 from "../../images/apartment/4.jpeg";
import team2 from "../../images/apartment/1.jpeg";
import team3 from "../../images/apartment/3.jpeg";
import { Link } from "react-router-dom";

const TeamSection = (props) => {
  return (
    <section
      className="team-section mb-240"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="team-wrap">
        <div className="container">
          <div className="section-title text-white text-center mb-55">
            <h2>
              trend <span className="thin">Hub</span>
            </h2>
            <h6>Realize your dream of a luxurious home.</h6>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <img src={team1} alt="Team" />
                <div className="team-des">
                  <Link to="/about" className="text-white">
                    <h3>About US</h3>
                  </Link>

                  <span>
                    Learn about our mission to bring you the latest trends
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <img src={team2} alt="Team" />
                <div className="team-des">
                  <Link to="/contact" className="text-white">
                    <h3>Contact us</h3>
                  </Link>
                  <span>
                    Get in touch . We’re here to answer your questions,
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <img src={team3} alt="Team" />
                <div className="team-des">
                  <Link to="/blog" className="text-white">
                    <h3>Our Blogs</h3>
                  </Link>
                  <span>
                    Stay updated with Maharsahb' blog. Dive into articles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
