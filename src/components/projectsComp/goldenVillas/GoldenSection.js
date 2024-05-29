import React from "react";
import GoldenVillas from "../../../api/GoldenVillas";
import Bg from "../../../images/wp/wp-bg.png";

const GoldenSection = (props) => {
  return (
    <section
      className={`apartment-plan rpt-100 pb-70 ${props.ptClass}`}
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="row">
          {GoldenVillas.map((villa, Sitem) => (
            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
              <div className="service-item">
                <span className="number">0{villa.Id}</span>
                <img src={villa.sImg} alt="Icon" />
                <h3>{villa.sTitle}</h3>
                <p>{villa.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldenSection;