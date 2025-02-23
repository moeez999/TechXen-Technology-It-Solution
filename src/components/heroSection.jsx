import React from "react";

export default function HeroSection() {
  return (
    <>
      {/*=====HERO AREA START=======*/}
      <div className="hero2" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-heading">
                <span
                  className="span"
                  data-aos="zoom-in-right"
                  data-aos-duration={700}
                >
                  <img src="assets/img/icons/span2.png" alt="" /> TechXen
                  Technology &amp; It Solution
                </span>
                <h1 className="title tg-element-title">
                  Empowering Your Digital Journey With TechXen
                </h1>
              </div>
              <div className="row _relative">
                <div className="col-lg-9">
                  <div className="hero2-tags">
                    <ul>
                      <li>
                        <a href="#">Software Development</a>
                      </li>
                      <li>
                        <a href="#">Cloud Solution</a>
                      </li>
                      <li>
                        <a href="#">It Solution</a>
                      </li>
                      <li>
                        <a href="#">Data Analytics</a>
                      </li>
                      <li>
                        <a href="#">Technology</a>
                      </li>
                      <li>
                        <a href="#">Cyber Security</a>
                      </li>
                      <li>
                        <a href="#">Consulting Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="circle-shapes">
                    <div className="shape1 shape-animaiton4">
                      <img src="assets/img/shapes/hero2-shape1.png" alt="" />
                    </div>
                    <div className="shape2">
                      <a href="#">
                        <img src="assets/img/shapes/hero2-shape2.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero2-main-imges">
                <div className="image1">
                  <img src="assets/img/hero/hero2-main-img1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero2-main-imge2">
          <img src="assets/img/hero/hero2-main-img2.png" alt="" />
        </div>
      </div>
      {/*=====HERO AREA END=======*/}
    </>
  );
}
