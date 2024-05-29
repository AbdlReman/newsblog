import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../../images/logo.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k2axmpr", "template_emlmlow", form.current, {
        publicKey: "Ym18e7kAOJhnhpSBY",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error("Failed to send Message.");
        }
      );
  };

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="container">
          <div className="top-inner">
            <div className="logo-outer">
              <div className="logo">
                <Link onClick={ClickHandler} to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
            </div>

            <ul className="header-info">
              <li>
                <i className="fa fa-map-marker"></i>
                <h6>
                  <span>Address:</span>
                  FaslaBad | Pakistan
                </h6>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <h6>
                  <span>Call Anytime:</span>

                  <a href="tel:+923041113309">(+92) 332 495 2550</a>
                </h6>
              </li>
            </ul>
            {/* <div className="languages">
              <DownloadFloorPlans />
            </div> */}
          </div>
        </div>
      </div>

      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner">
            <div className="nav-outer clearfix">
              <nav className="  main-menu navbar-expand-lg">
                <MobileMenu />
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        about
                      </Link>
                    </li>

                    {/* <li>
                      <Link onClick={ClickHandler} to="/services">
                        services
                      </Link>
                      <ul>
                        <li>
                          <Link onClick={ClickHandler} to="/services">
                            services
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/service-single/Design-&-Planning"
                          >
                            Services Single
                          </Link>
                        </li>
                      </ul>
                    </li> */}

                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="menu-icons">
              {/* <div className="nav-search ml-15">
                <button onClick={() => setSearchState(!SearchActive)}>
                  <i
                    className={`fi ti-search ${
                      SearchActive ? "ti-close" : "fi "
                    }`}
                  ></i>
                </button>
                <form
                  onSubmit={SubmitHandler}
                  className={`hide ${SearchActive ? "show" : ""}`}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchbox"
                    required=""
                  />
                  <button
                    type="submit"
                    className="searchbutton fa fa-search"
                  ></button>
                </form>
              </div> */}

              <div className="menu-sidebar">
                <button onClick={() => setMenuState(!menuActive)}>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sidebar-wrap ${menuActive ? "side-content-visible" : ""}`}
      >
        <div
          className="form-back-drop"
          onClick={() => setMenuState(!menuActive)}
        ></div>
        <section className="hidden-bar">
          <div className="inner-box text-center">
            <div
              className="cross-icon"
              onClick={() => setMenuState(!menuActive)}
            >
              <span className="fa fa-times"></span>
            </div>
            <div className="title">
              <h3>Contact Us</h3>
            </div>
            <div className="appointment-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="from_number"
                    placeholder="Phone no."
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Message"
                    name="message"
                    rows="5"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" value="Send" className="theme-btn">
                    Submit now
                  </button>
                </div>
              </form>
            </div>
            <div className="social-icons">
              <a
                href="https://twitter.com/JhelumVillas"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090550677345"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/victory.villas?igsh=czVybjl4b21ibTg1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
