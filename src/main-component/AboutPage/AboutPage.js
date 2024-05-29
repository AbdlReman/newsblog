import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Navbar from "../../components/Navbar/Navbar";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import About2 from "../../components/about2/about2";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import FunFact from "../../components/FunFact";
import TeamSection from "../../components/TeamSection/TeamSection";
import VideoSection from "../../components/VideoSection/VideoSection";
import { metaData } from "../../api/metaData";
import { Helmet } from "react-helmet";
import AboutSession from "../../components/about2/AboutSession";

const AboutPage = () => {
  const page = "about";
  const { title, description } = metaData(page);
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navbar />
      <PageTitle pageTitle={"About Us"} />
      <AboutSession ptClass={"pt-100"} />
      <About2 />
      {/* <FunFact fClass={"style-two pt-165 pb-125 mb-0"} /> */}

      {/*villas section */}
      <TeamSection />
      {/*villas section */}

      <VideoSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
