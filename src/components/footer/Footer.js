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
            <div className="col-xl-5 col-lg-6">
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
                <h3>Get in touch .</h3>
                <h6>
                  Get in touch with Maharsahb. We’re here to answer your
                  questions, receive your feedback,
                </h6>
                <h6>
                  and provide support regarding our trending content (+92) 332
                  495 2550
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-55">
          <div className="container">
            <div className="bottom-inner">
              <div className="social-icons">
                <Link
                  onClick={ClickHandler}
                  to="https://www.tiktok.com/@hipnocastor?_t=8mfw2Lo2mYL&_r=1"
                >
                  <i className="fa fa-tiktok"></i>
                </Link>
                <Link
                  onClick={ClickHandler}
                  to="https://www.facebook.com/abid.wehnival.9?mibextid=ZbWKwL"
                >
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link
                  onClick={ClickHandler}
                  to="https://www.instagram.com/abid5.50?igsh=Nms3b3huMnBxNTg2"
                >
                  <i className="fa fa-instagram"></i>
                </Link>
              </div>
              <div className="copyright">
                <p>
                  © Copyright 2024 by{" "}
                  <Link onClick={ClickHandler} to="/">
                    Maharsahb
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
