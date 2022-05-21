import React from "react";

const CallToAction = () => {
  return (
    <section className="call-to-action-section call-to-action-v2 wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="call-to-action-content">
              <h2>We don’t compromise with the best Hosting Solution</h2>
              <div className="xs-btn-wraper">
                <a href="#" className="btn btn-secondary">
                  Get Started
                </a>
                <a href="#" className="btn btn-outline-primary">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="icon-bg"
        style={{ backgroundImage: "url(assets/images/icon-bg-2.png)" }}
      ></div>
    </section>
  );
};

export default CallToAction;
