// src\components\footer\Footer.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import pImg1 from "../../images/apartment/4.jpeg";
// import pImg2 from "../../images/apartment/3.jpeg";
// import pImg3 from "../../images/apartment/4.jpeg";
// import pImg4 from "../../images/apartment/1.jpeg";
// import pImg5 from "../../images/apartment/2.jpeg";
// import pImg6 from "../../images/apartment/3.jpeg";
import CtaSection from "../CtaSection/CtaSection";

const images = [pImg1];

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const openLightbox = (index) => {
    setOpenIndex(index);
  };

  const closeLightbox = () => {
    setOpenIndex(null);
  };

  return (
    <div>
      <CtaSection />
      <footer className="footer-section pt-220">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="instagram-posts">
                {images.map((item, index) => (
                  <div className="instagram-item" key={index}>
                    <img
                      src={item}
                      alt="Instagram"
                      onClick={() => openLightbox(index)}
                    />
                    <div className="instagram-overlay">
                      <span onClick={() => openLightbox(index)}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="contact-widget">
                <h3>Get in touch for a deal today.</h3>
                <h6>
                  To accomplish luxury, functionality, and urbanized elegance,
                  contact us at (+92) 304-111-3309
                </h6>
                <h6>
                  Airport Green Gardens, near Islamabad International Airport,
                  Islamabad.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-55">
          <div className="container">
            <div className="bottom-inner">
              <div className="social-icons">
                <Link onClick={ClickHandler} to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link onClick={ClickHandler} to="/">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link onClick={ClickHandler} to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
              </div>
              <div className="copyright">
                <p>
                  © Copyright 2024 by{" "}
                  <Link onClick={ClickHandler} to="/">
                    Victory Villas
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Lightbox
          open={openIndex !== null}
          close={closeLightbox}
          slides={images.map((src) => ({ src }))}
          plugins={[Zoom]}
          currentIndex={openIndex}
        />
      </footer>
    </div>
  );
};

export default Footer;
