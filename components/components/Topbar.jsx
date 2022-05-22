import React from "react";

const Topbar = () => {
  return (
    <div className="xs-top-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="xs-top-bar-info">
              <li>
                <p>
                  <i className="icon icon-phone1"></i>009-215-5596
                </p>
              </li>
              <li>
                <a href="mailto:info@domain.com">
                  <i className="icon icon-envelope1"></i>info@domain.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="top-menu">
              <li>
                <a href="login.html">
                  <i className="icon icon-key2"></i> Login
                </a>
              </li>
              {/* <!-- <li><a href="signup.html">Sign Up</a></li> --> */}
              <li>
                <a href="support.html">
                  <i className="icon icon-hours-support"></i> Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
