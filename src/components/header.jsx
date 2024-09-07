import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/*=====progress END=======*/}
      <div className="paginacontainer">
        <div className="progress-wrap progress-wrap2">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>
      {/*=====progress END=======*/}
      {isPreloaderVisible && (
        <div className="preloader-area">
          <div className="preloader">
            {/* Replace with your PNG logo */}
            <img
              src="assets/img/logo/preloader.png"
              alt="Logo"
              className="logo"
            />
          </div>
        </div>
      )}
      {/*=====HEADER START=======*/}
      <header>
        <div
          className="header-area header-area2 header-area-all d-none d-lg-block"
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link to="/">
                      <img src="assets/img/logo/header-logo2.png" alt="" />
                    </Link>
                  </div>
                  <div className="main-menu-ex main-menu-ex1">
                    <ul id="list-example">
                      <li>
                        <Link to="/">
                          Home <i className="fa-solid fa-angle-down" />
                        </Link>
                        <div className="tp-submenu">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="all-images-menu">
                                <div className="homemenu-thumb">
                                  <div className="img1">
                                    <img
                                      src="assets/img/demo/demo1.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="homemenu-btn">
                                    <a className="theme-btn2" href="index.html">
                                      Multi Page{" "}
                                      <i className="fa-solid fa-arrow-right" />
                                    </a>
                                    <div className="space16" />
                                    <a
                                      className="theme-btn2"
                                      href="single-index1.html"
                                      target="_blank"
                                    >
                                      One page{" "}
                                      <i className="fa-solid fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                                <div className="homemenu-thumb">
                                  <div className="img1">
                                    <img
                                      src="assets/img/demo/demo2.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="homemenu-btn">
                                    <a
                                      className="theme-btn2"
                                      href="index2.html"
                                    >
                                      Multi Page{" "}
                                      <i className="fa-solid fa-arrow-right" />
                                    </a>
                                    <div className="space16" />
                                    <a
                                      className="theme-btn2"
                                      href="single-index2.html"
                                      target="_blank"
                                    >
                                      One page{" "}
                                      <i className="fa-solid fa-arrow-right" />
                                    </a>{" "}
                                  </div>
                                </div>
                                <div className="homemenu-thumb">
                                  <div className="img1">
                                    <img
                                      src="assets/img/demo/demo3.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="homemenu-btn">
                                    <a
                                      className="theme-btn2"
                                      href="index3.html"
                                    >
                                      Multi Page{" "}
                                      <i className="fa-solid fa-arrow-right" />
                                    </a>
                                    <div className="space16" />
                                    <a
                                      className="theme-btn2"
                                      href="single-index3.html"
                                      target="_blank"
                                    >
                                      One page{" "}
                                      <i className="fa-solid fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="homemenu-thumb"
                                  style={{ margin: 0 }}
                                >
                                  <div className="img1">
                                    <img
                                      src="assets/img/demo/demo4.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="homemenu-btn">
                                    <a
                                      className="theme-btn2"
                                      href="index5.html"
                                    >
                                      Multi Page{" "}
                                      <i className="fa-solid fa-arrow-right" />
                                    </a>
                                    <div className="space16" />
                                    <a
                                      className="theme-btn2"
                                      href="single-index5.html"
                                      target="_blank"
                                    >
                                      One page{" "}
                                      <i className="fa-solid fa-arrow-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="#about"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="#service"
                        >
                          Service
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="#work"
                        >
                          Works
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="#team"
                        >
                          Team
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="#tes"
                        >
                          Testimonial
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header2-buttons">
                    <div className="contact-3 d-lg-block d-none">
                      <div className="consulting2">
                        <div className="search-icon header__search header-search-btn">
                          <a href="#">
                            <i className="fa-solid fa-magnifying-glass" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* header search start */}
                    <div className="header-search-form-wrapper">
                      <div className="tx-search-close tx-close">
                        <i className="fa-solid fa-xmark" />
                      </div>
                      <div className="header-search-container">
                        <form role="search" className="search-form">
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Search …"
                            defaultValue=""
                            name="s"
                          />
                          <button type="submit" className="search-submit">
                            <i className="fa-solid fa-magnifying-glass" />
                          </button>
                        </form>
                      </div>
                    </div>
                    {/* header search end */}
                    <div className="body-overlay" />
                    {/* slide bar end */}
                    <div className="button">
                      <a className="theme-btn2" href="contact.html">
                        Get A Quote{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*=====HEADER END=======*/}
      {/*=====Mobile header start=======*/}
      <div className="mobile-header mobile-header-main d-block d-lg-none ">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <a href="index1.html">
                  <img src="assets/img/logo/header-logo2.png" alt="" />
                </a>
              </div>
              <div className="mobile-nav-icon">
                <i className="fa-duotone fa-bars-staggered" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-sidebar d-block d-lg-none">
        <div className="logo-m">
          <a href="index.html">
            <img src="assets/img/logo/header-logo2.png" alt="" />
          </a>
        </div>
        <div className="menu-close">
          <i className="fa-solid fa-xmark" />
        </div>
        <div className="mobile-nav">
          <ul>
            <li className="has-dropdown">
              <a href="#">Home </a>
              <ul className="sub-menu">
                <li className="has-dropdown has-dropdown1">
                  <a href="#">Multipage</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="index2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="index3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="index4.html">Home 4</a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown has-dropdown1">
                  <a href="#">Landing Page</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="single-index1.html">Home 1</a>
                    </li>
                    <li>
                      <a href="single-index2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="single-index3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="single-index4.html">Home 4 </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li className="has-dropdown">
              <a href="#">Service</a>
              <ul className="sub-menu">
                <li>
                  <a href="service.html">Service</a>
                </li>
                <li>
                  <a href="service-details-left.html">Service Left</a>
                </li>
                <li>
                  <a href="service-details-right.html">Service Right</a>
                </li>
                <li>
                  <a href="service-details.html">Service Details</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="team.html">Team</a>
                </li>
                <li>
                  <a href="testimonial.html">Testimonial</a>
                </li>
                <li>
                  <a href="error.html">404</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="#">Blog</a>
              <ul className="sub-menu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-details-left.html">Details Left</a>
                </li>
                <li>
                  <a href="blog-details-right.html">Details Right</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="#">Project</a>
              <ul className="sub-menu">
                <li>
                  <a href="project.html">Project</a>
                </li>
                <li>
                  <a href="project-details-left.html">Project Left</a>
                </li>
                <li>
                  <a href="project-details-right.html">Project Right</a>
                </li>
                <li>
                  <a href="project-details.html">Project Details</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="mobile-button">
            <a className="theme-btn2" href="service.html">
              Learn More{" "}
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>
          </div>
          <div className="single-footer-items">
            <h3>Contact Us</h3>
            <div className="contact-box">
              <div className="icon">
                <img src="assets/img/icons/footer1-icon1.png" alt="" />
              </div>
              <div className="pera">
                <a href="tel:0500222333">0500 222 333</a>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon">
                <img src="assets/img/icons/footer1-icon2.png" alt="" />
              </div>
              <div className="pera">
                <a href="tel:0356588547">03 5658 8547</a>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon">
                <img src="assets/img/icons/footer1-icon3.png" alt="" />
              </div>
              <div className="pera">
                <a href="mailto:admin@techxen.org">admin@techxen.org</a>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon">
                <img src="assets/img/icons/footer1-icon4.png" alt="" />
              </div>
              <div className="pera">
                <a href="mailto:admin@techxen.org">www.techxen.org</a>
              </div>
            </div>
          </div>
          <div className="contact-infos">
            <h3>Our Location</h3>
            <ul className="social-icon">
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*=====Mobile header end=======*/}
    </>
  );
};

export default Header;
