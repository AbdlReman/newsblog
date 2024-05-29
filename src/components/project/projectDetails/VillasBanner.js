import React from "react";
import { Link } from "react-router-dom";

const VillasBanner = ({ villa }) => {
  return (
    <>
      {villa ? (
        <>
          <section
            className="banner-section mt-110 rmt-70 "
            style={{
              backgroundImage: `url(${villa.featureImage?.fields?.file?.url})`,
            }}
          >
            <div className="container">
              <div className="banner-inner">
                <div className="page-title">
                  <h2>{villa.title}</h2>
                  <span>{villa.title}</span>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {villa.pagesub}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default VillasBanner;
