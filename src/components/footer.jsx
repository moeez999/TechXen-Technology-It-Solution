import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer2 _relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo">
                <a>
                  <img src="assets/img/logo/header-logo2.png" alt="" />
                </a>
              </div>
              <div className="space20" />
              <div className="heading2">
                <p>
                  At TechXen IT Solutions, we're dedicated to delivering
                  innovative technology solutions tailored to meet the unique
                  needs of businesses like yours.{" "}
                </p>
              </div>
              <ul className="social-icon">
                <li>
                  <a>
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa-brands fa-youtube" />
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Service We Offer</h3>
              <ul className="menu-list">
                <li>
                  <a>Cloud Computing Solution</a>
                </li>
                <li>
                  <a>Cybersecurity &amp; Compliance</a>
                </li>
                <li>
                  <a>Software Development</a>
                </li>
                <li>
                  <a>It Consulting &amp; Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items pl-5">
              <h3>Useful Links</h3>
              <ul className="menu-list">
                <li>
                  <a href="about.html">About Us </a>
                </li>
                <li>
                  <a href="service.html">Our Services</a>
                </li>
                <li>
                  <a href="blog.html">Blog &amp; News</a>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>;
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
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
          </div>
        </div>
        <div className="space70" />
      </div>
      <div className="copyright-area _relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="coppyright">
                <p>Copyright @2024 TechXen.All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="coppyright right-area">
                <a>Terms &amp; Conditions</a>
                <a>Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
        <a className="arrow-up">
          <i className="fa-solid fa-arrow-up" />
        </a>
      </div>
    </div>
  );
}
