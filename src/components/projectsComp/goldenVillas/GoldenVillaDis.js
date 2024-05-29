import React from "react";
import Bg from "../../../images/wp/wp-bg.png";
import abimg1 from "../../../images/apartment/apartment2.jpg";
import abimg2 from "../../../images/wp/wp-2.png";
const GoldenVillaDis = () => {
  return (
    <section
      id="about"
      className="wp-section pt-150 rmb-100"
      // style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="wp-images rmb-150">
              <div className="experience-year">
                <span className="number">25</span>
                <h4>Years of Experience</h4>
              </div>
              <img src={abimg1} alt="Wordpress" />
              <img src={abimg2} alt="Wordpress" className="d-none" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wp-content ml-50 rml-0 rpt-30">
              <div className="section-title mb-10">
                <h2>
                  Golden
                  <span className="thin">Villas</span>
                </h2>
                <p>
                  Welcome to Golden Villas, a hallmark of a luxury lifestyle!
                </p>
              </div>
              <p>
                Golden Villas offer residences that perfectly address the
                desires of the Pakistani community. Through GV, we provide
                premium solutions to low-quality housing options, inconsistent
                quality standards, and limited integration of technology in
                Pakistan. Our villas are NOC-approved by RDA, a joint venture by
                Al Sadat Group and Victory Construction, and marketed by
                Maidaan. With diverse sizes, we fulfill the aspirations of
                Pakistani residents and overseas Pakistanis. Though we offer
                Golden Villas in the whole country, the ongoing projects are
                available at Midtown Jhelum and Airport Green Gardens
                Rawalpindi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVillaDis;
