import React from "react";

export default function CTA() {
  return (
    <div className="cta2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading2">
              <h2 className="title tg-element-title">
                {" "}
                We're Committed To Businesses
              </h2>
              <div className="space16" />
              <p>
                At TechXen IT Solutions, we're dedicated to delivering
                innovative technology solutions tailored to meet the unique
                needs of businesses like yours.{" "}
              </p>
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="email" placeholder="Enter Your Email" />
                      <div className="button">
                        <button type="submit" className="theme-btn2">
                          Subscribe{" "}
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
