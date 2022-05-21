import React from "react";

const Topbar = () => {
  return (
    <div class="xs-top-bar">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <ul class="xs-top-bar-info">
                    <li>
                        <p><i class="icon icon-phone1"></i>009-215-5596</p>
                    </li>
                    <li>
                        <a href="mailto:info@domain.com"><i class="icon icon-envelope1"></i>info@domain.com</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <ul class="top-menu">
                    <li><a href="login.html"><i class="icon icon-key2"></i> Login</a></li>
                    {/* <!-- <li><a href="signup.html">Sign Up</a></li> --> */}
                    <li><a href="support.html"><i class="icon icon-hours-support"></i> Support</a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Topbar;
