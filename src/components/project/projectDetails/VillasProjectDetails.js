import React from "react";
import Bg from "../../../images/wp/wp-bg.png";
import abimg3 from "../../../images/wp/wp-3.png";

const VillasProjectDetails = ({ villa }) => {
  return (
    <>
      <div>
        {villa ? (
          <>
            {/* <div>
              <h1>{villa.title}</h1>
              <p>{villa.discription}</p>
            </div> */}
            <section
              id="about"
              className="wp-section pt-150 rmb-100"
              style={{ backgroundImage: `url(${Bg})` }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className=" rmb-150">
                      <img
                        src={"https:" + villa.featureImage?.fields?.file?.url}
                        alt="Wordpress"
                      />
                      <div className="flex">
                        {villa.projectGallary.map((image, index) => (
                          <img
                            key={index}
                            src={"https:" + image.fields.file.url}
                            alt={`Gallery ${index + 1}`}
                            className="m-2 "
                            style={{ width: "30%" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="wp-content ml-50 rml-0 rpt-30">
                      <div className="section-title mb-10">
                        <h6>ABOUT</h6>
                        <h2>
                          {villa.title} <br />
                          <span className="thin">Victory</span>
                        </h2>
                        <h6>welcome to hendon residence showcase</h6>
                      </div>
                      <img src={abimg3} alt="" />
                      {/* <p>{villa.projectDetails}</p> */}
                    </div>
                  </div>
                </div>
                <div className=" mt-50">
                  <p className="mt-4 leading-7">{villa.projectDetails}</p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default VillasProjectDetails;
