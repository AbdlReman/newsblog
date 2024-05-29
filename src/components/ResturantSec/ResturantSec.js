import React from "react";

const ResturantSec = (props) => {
  return (
    <section className="rastaurant-section mb-155 ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 pr-0">
            <div className="rastaurant-left"></div>
          </div>
          <div className="col-lg-6 pl-0">
            <div className="rastaurant-right pt-240 pb-250 rpt-140 rpb-150">
              <div className=" pl-70">
                {/* <h2 className="border-text">Amenities</h2> */}
                <h2 className="text-white">
                  Gourmet Kitchen
                  <br />
                  Fitness Center
                  <br /> Spa-like Bathroom
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResturantSec;
