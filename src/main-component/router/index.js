import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage/HomePage";
// import HomePage2 from "../HomePage2/HomePage2";
import AboutPage from "../AboutPage/AboutPage";
// import ServicePage from "../ServicePage/ServicePage";
// import ServiceSinglePage from "../ServiceSinglePage/ServiceSinglePage";

// import ProjectSinglePage from "../ProjectSinglePage/ProjectSinglePage";
import BlogPage from "../BlogPage/BlogPage";
import BlogDetails from "../BlogDetails/BlogDetails";
import ContactPage from "../ContactPage/ContactPage";

import "bootstrap/dist/css/bootstrap.min.css";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          {/* <Route path="home2" element={<HomePage2 />} /> */}
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="victoryvillas" element={<ProjectPage />} />
          <Route path="silvervillas" element={<SilverVilla />} />
          <Route path="goldenvillas" element={<GoldenVilla />} />
          <Route path="diamondvillas" element={<DiamondVilla />} /> */}

          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />
          {/* <Route path="projects" element={<Project />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
