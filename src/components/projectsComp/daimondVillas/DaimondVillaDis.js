import React from "react";
import Bg from "../../../images/wp/wp-bg.png";
import abimg1 from "../../../images/apartment/apartment3.jpg";

const DaimondVillaDis = () => {
  return (
    <section
      id="about"
      className="wp-section pt-150 rmb-100"
      // style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="wp-content ml-50 rml-0 rpt-30">
              <div className="section-title mb-10">
                <h2>
                  Daimond
                  <span className="thin">Villas</span>
                </h2>
                <p>Welcome to a mark of luxury, Diamond Villas.</p>
              </div>
              <p>
                We offer diamond villas with luxurious double-unit living. A
                spacious layout makes this category attractive to
                comfort-seeking customers. It is a high blend of sophistication
                and comfort. An economical range is a particular amenity
                attractive to enthusiasts of luxury in a prime way. SV is a
                joint venture by Al Sadat Group and Victory Construction. It is
                being marketed by Maidaan. This project is a NOC approved by the
                Rawalpindi Development Authority (RDA) and presents a high
                investment ratio. Silver Villas, expanding on 2120 sq ft,
                together with high-quality construction, modern design, energy
                efficiency, and flexible floor plans, offer a gem of
                opportunity.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={abimg1} alt="Wordpress" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaimondVillaDis;
