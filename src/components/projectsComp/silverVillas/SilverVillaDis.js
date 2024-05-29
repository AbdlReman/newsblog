import React from "react";
import Bg from "../../../images/wp/wp-bg.png";
import abimg1 from "../../../images/apartment/apartment1.jpg";

const SilverVillaDis = () => {
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
                  Silver
                  <span className="thin">Villas</span>
                </h2>
                <p>welcome to hendon residence showcase</p>
              </div>
              <p>
                Crafted by the esteemed Victory Construction and envisioned by
                the renowned Al-Sadat, Silver Villa embodies the essence of
                contemporary living within the prestigious Victory Villas
                community. Spanning 1,250 square feet, this meticulously
                designed haven offers a seamless blend of comfort,
                functionality, and modern elegance. Silver Villa caters to the
                discerning resident, whether a young professional seeking a
                stylish retreat or a growing family desiring a vibrant
                community. Beyond your doorstep awaits an abundance of
                amenities, including a sparkling swimming pool for year-round
                enjoyment, a state-of-the-art fitness center to maintain your
                well-being, and beautifully landscaped green spaces ideal for
                relaxation or social gatherings.
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

export default SilverVillaDis;
