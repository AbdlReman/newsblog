import React from "react";

const VillasDetails = () => {
  return (
    <>
      <div className="project-single-area section-padding">
        <div className="property-single mt-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="property-single-left">
                  <div className="property-left-content">
                    <h3>
                      Sparkling Swimming Pool,{" "}
                      <span className="font-weight-light">
                        Beautifully Landscaped Green Spaces
                      </span>
                    </h3>
                    <ul>
                      <li>Modern Kitchen Appliances</li>
                      <li>Smart Home Features,</li>
                      <li> State-of-the-Art Fitness Center</li>

                      <li>Spa-like Bathroom</li>

                      {/* <li>wellnes & spa</li>
                      <li>conference</li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="property-single-right">
                  <div className="property-right-content pl-40 rpl-0">
                    <h3 className="border-text">Project complex</h3>
                    <h3>Fitness Center</h3>
                    <h3>Gourmet Kitchen</h3>
                    <h3>Hospital</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VillasDetails;
