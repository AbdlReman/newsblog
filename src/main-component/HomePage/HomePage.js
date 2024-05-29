import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
// import VideoSection from "../../components/VideoSection/VideoSection";
// import PartnerSection from "../../components/PartnerSection";
import ResturantSec from "../../components/ResturantSec/ResturantSec";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
// import FunFact from "../../components/FunFact";

import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { metaData } from "../../api/metaData";

// import Modal from "react-bootstrap/Modal";
// import RegisterButton from "../../components/Model/RegisterButton";
// import MobileRegisterButton from "../../components/Model/MobileRegisterButton";
// import { Link } from "react-router-dom";
// import { Image } from "react-bootstrap";
// import popupImage from "../../images/hero.png";

const HomePage = () => {
  const page = "home";
  const { title, description } = metaData(page);

  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;

  //     // Calculate 20% scroll position
  //     const twentyPercent = (documentHeight - windowHeight) * 0.2;

  //     if (scrollPosition >= twentyPercent) {
  //       setShowModal(true);
  //       window.removeEventListener("scroll", handleScroll);
  //       document.cookie = "modalShown=true; max-age=86400"; // Cookie expires in 1 day
  //     }
  //   };

  //   const modalShownCookie = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("modalShown="));

  //   if (!modalShownCookie) {
  //     window.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navbar hclass={"header-style-3"} topbarNone={"topbar-none"} />
      <Hero />
      <About />
      <ServiceSection ptClass={"pt-250"} />
      {/* <VideoSection />
      <PartnerSection /> */}
      <ResturantSec />
      <ProjectSection />

      {/* <FunFact /> */}

      <ContactSection />
      <Footer />
      <Scrollbar />
      {/* <Modal show={showModal} onHide={handleCloseModal} size="xl">
        <Modal.Body style={{ position: "relative", padding: 0 }}>
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3 bg-white"
            aria-label="Close"
            onClick={handleCloseModal}
          ></button>
          <Image
            className="slider-image w-100"
            src={popupImage}
            alt="partner"
          />
          <RegisterButton />

          <div
            className="d-flex justify-content-end align-items-end position-absolute p-3"
            style={{ bottom: 0, right: 0 }}
          >
            <Link
              to="/propertyKaMaidaan/"
              target="_blank"
              className="me-2 features-btn-one"
            >
              Learn More
            </Link>
          </div>
        </Modal.Body>
      </Modal> */}
    </Fragment>
  );
};

export default HomePage;
