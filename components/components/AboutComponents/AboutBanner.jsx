import React from "react";
import Link from "next/link";

const AboutBanner = () => {
  return (
    <div
      className="xs-banner inner-banner contet-to-center"
      style={{
        backgroundImage:
          "url('assets/images/innerWelcome/inner-welcome-banner.jpg')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 align-self-center">
            <div className="xs-banner-content">
              <h1 className="banner-sub-title wow fadeInLeft">Who we are</h1>
              <h2
                className="banner-title wow fadeInLeft"
                data-wow-duration="1.5s"
              >
                ABOUT HOSTINZA
              </h2>
              <ul
                className="breadcrumbs list-inline wow fadeInLeft"
                data-wow-duration="2s"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="xs-overlay bg-gradient"></div>
    </div>
  );
};

export default AboutBanner;
