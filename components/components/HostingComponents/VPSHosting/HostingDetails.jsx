import React from "react";

const VPSHostingDetails = () => {
  return (
    <section className="xs-section-padding pt-0">
      <div className="container">
        <div className="vps-slider-wraper">
          <div className="slider-group">
            <div className="vps-slider"></div>
            <div className="slider-range clearfix">
              <div id="icon-0" className="slider-tigger">
                <h5>Basic</h5>
              </div>
              <div id="icon-1" className="slider-tigger">
                <h5>Starter</h5>
              </div>
              <div id="icon-2" className="slider-tigger">
                <h5>Enterprise</h5>
              </div>
              <div id="icon-3" className="slider-tigger">
                <h5>Business</h5>
              </div>
              <div id="icon-4" className="slider-tigger">
                <h5>Pro</h5>
              </div>
            </div>
          </div>
          <div
            className="slider-content-group"
            style={{ backgroundImage: "url(assets/images/vps/slider-bg.png)" }}
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="slider-container">
                  <p className="title xs0"></p>
                  <input type="hidden" name="title" className="title xs0" />
                  <h2 className="price xs1"></h2>
                  <input type="hidden" name="price" className="price xs1" />
                  <p className="desc xs2"></p>
                  <input type="hidden" name="desc" className="desc xs2" />
                  <a
                    className="btn btn-primary slider-btns xs12"
                    href="http://whmcs.finesttheme.com/cart.php?a=add&pid=3"
                  >
                    <span className="icon icon-checkmark"></span> Purchase Now
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="vps-pricing-list clearfix">
                  <li>
                    <h4>CPU</h4>
                    <p className="cpu xs3"></p>
                    <input type="hidden" name="cpu" className="cpu xs3" />
                  </li>
                  <li>
                    <h4>Bandwidth</h4>
                    <p className="brandwidth xs4"></p>
                    <input
                      type="hidden"
                      name="brandwidth"
                      className="brandwidth xs4"
                    />
                  </li>
                  <li>
                    <h4>Bandwidth</h4>
                    <p className="brandwidth2 xs5"></p>
                    <input
                      type="hidden"
                      name="brandwidth2"
                      className="brandwidth2 xs5"
                    />
                  </li>
                </ul>
                <ul className="vps-pricing-list clearfix">
                  <li>
                    <h4>RAM</h4>
                    <p className="ram xs6"></p>
                    <input type="hidden" name="ram" className="ram xs6" />
                  </li>
                  <li>
                    <h4>Setup</h4>
                    <p className="setup xs7"></p>
                    <input type="hidden" name="setup" className="setup xs7" />
                  </li>
                  <li>
                    <h4>Setup</h4>
                    <p className="setup2 xs8"></p>
                    <input type="hidden" name="setup2" className="setup2 xs8" />
                  </li>
                </ul>
                <ul className="vps-pricing-list clearfix">
                  <li>
                    <h4>Disk Space</h4>
                    <p className="diskspace xs9"></p>
                    <input
                      type="hidden"
                      name="diskspace"
                      className="diskspace xs9"
                    />
                  </li>
                  <li>
                    <h4>IP</h4>
                    <p className="ip_one xs10"></p>
                    <input
                      type="hidden"
                      name="ip_one"
                      className="ip_one xs10"
                    />
                  </li>
                  <li>
                    <h4>IP</h4>
                    <p className="ip_two xs11"></p>
                    <input
                      type="hidden"
                      name="ip_two"
                      className="ip_two xs11"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VPSHostingDetails;
