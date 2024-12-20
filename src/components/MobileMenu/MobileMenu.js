import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },

  {
    id: 3,
    title: "about",
    link: "/about",
  },

  // {
  //   id: 6,
  //   title: "Victory Villas",
  //   link: "/victoryvillas",
  //   submenu: [
  //     {
  //       id: 61,
  //       title: "Silver Villas",
  //       link: "/silvervillas",
  //     },
  //     {
  //       id: 62,
  //       title: "Golden Villas",
  //       link: "/goldenvillas",
  //     },
  //     {
  //       id: 63,
  //       title: "Diamond Villas",
  //       link: "/diamondvillas",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Service",
  //   link: "/service",
  //   submenu: [
  //     {
  //       id: 71,
  //       title: "Service",
  //       link: "/services",
  //     },
  //     {
  //       id: 72,
  //       title: "Service Single",
  //       link: "/service-single/Design-&-Planning",
  //     },
  //   ],
  // },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 88,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="close" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            return (
              <ListItem
                className={item.id === openId ? "active" : null}
                key={mn}
              >
                {item.submenu ? (
                  <Fragment>
                    <Link
                      to={item.link} // Link to "/victoryvillas" page
                      onClick={() =>
                        setOpenId(openId === item.id ? 0 : item.id)
                      }
                    >
                      <p>
                        {item.title}
                        <i
                          className={
                            item.id === openId
                              ? "fa fa-angle-up"
                              : "fa fa-angle-down"
                          }
                        ></i>
                      </p>
                    </Link>
                    <Collapse
                      in={item.id === openId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List className="subMenu">
                        <Fragment>
                          {item.submenu.map((submenu, i) => {
                            return (
                              <ListItem key={i}>
                                <Link
                                  onClick={ClickHandler}
                                  className="active"
                                  to={submenu.link}
                                >
                                  {submenu.title}
                                </Link>
                              </ListItem>
                            );
                          })}
                        </Fragment>
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <Link className="active" to={item.link}>
                    {item.title}
                  </Link>
                )}
              </ListItem>
            );
          })}
        </ul>
      </div>

      <div className="navbar-header clearfix">
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuState(!menuActive)}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
