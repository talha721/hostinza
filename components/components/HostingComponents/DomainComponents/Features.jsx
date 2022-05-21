import React from "react";

const Features = () => {
  return (
    <div className="xs-feature-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="xs-feature-group wow fadeInLeft">
              <div className="media">
                <div className="feature-img d-flex">
                  <img
                    src="assets/images/feature-icon-1.png"
                    alt="hosting feature img"
                  />
                </div>
                <div className="media-body feature-content">
                  <h4 className="xs-title">Add Web Hosting from us</h4>
                  <p>
                    Choose from a range web hosting packages We designed it to
                    fit budget.
                  </p>
                  <div className="xs-btn-wraper">
                    <a href="#" className="btn btn-secondary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <span className="icon icon-hosting watermark-icon"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="xs-feature-group wow fadeInRight">
              <div className="media">
                <div className="feature-img d-flex">
                  <img
                    src="assets/images/feature-icon-2.png"
                    alt="hosting feature img"
                  />
                </div>
                <div className="media-body feature-content">
                  <h4 className="xs-title">Transfer your domain to us</h4>
                  <p>
                    Transfer now to extend your domain by 1 year! Its so easy.
                  </p>
                  <div className="xs-btn-wraper">
                    <a href="#" className="btn btn-secondary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <span className="icon icon-domian watermark-icon"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
