import React from "react";
import Bg from "../../images/team/team-bg.png";
import team1 from "../../images/team/team1.png";
import team2 from "../../images/team/team2.png";
import team3 from "../../images/team/team3.png";
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
              Victory <span className="thin">Villas</span>
            </h2>
            <h6>Realize your dream of a luxurious home.</h6>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <img src={team1} alt="Team" />
                <div className="team-des">
                  <Link to="/silvervillas" className="text-white">
                    <h3>Silver Villas</h3>
                  </Link>

                  <span>
                    Witness Classic single-storied design, Area: 1250.00 sq ft{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <img src={team2} alt="Team" />
                <div className="team-des">
                  <Link to="/goldenvillas" className="text-white">
                    <h3>Golden Villas</h3>
                  </Link>
                  <span>
                    Turn on a luxurious Double Unit Living, Area: 2120.00 sq ft{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <img src={team3} alt="Team" />
                <div className="team-des">
                  <Link to="/diamondvillas" className="text-white">
                    <h3>Daimond Villas</h3>
                  </Link>
                  <span>
                    Enjoy a Captivating Corner Location, Area: 1970.00 sq ft{" "}
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
