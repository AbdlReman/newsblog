import React from "react";
import Projects from "../../api/Projects";

const ProjectSection = (props) => {
  return (
    <section className="apartment-section text-center ">
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            Choose <span className="thin">Victory Villas</span>
          </h2>
          <p>Distinctive Living Options to Suit Your Style</p>
        </div>
        <div className="apartment-carousel">
          <div className="row">
            {Projects.slice(0, 3).map((project, i) => (
              <div className="col col-lg-4 col-md-6 col-12" key={i}>
                <div className="apartment-item">
                  <div className="apartment-img">
                    <img src={project.pImg} alt="Apartment" />
                  </div>
                  <div className="apartment-content">
                    <img src={project.ssIcon} alt="Icon" />
                    <h3>{project.pTitle}</h3>
                    {/* <span>from {project.width} m2</span> */}
                    <p>{project.des} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
