import React from "react";
import Image from "next/image";
import Link from "next/link";

import PricingFeatures from "../../../public/assets/images/pricing/pricing-feature.svg";

const AffiliatePricing = () => {
  return (
    <section className="pricing-section xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Affiliate Program</h2>
              <h3 className="heading-title">
                HOW <span>AFFILIATE WORKS</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="pricing-matrix wow fadeIn">
          <div className="row no-gutters">
            <div className="col-lg-3">
              <div className="pricing-matrix-item">
                <div className="d-lg-block d-md-none d-none">
                  <div className="pricing-image">
                    <Image src={PricingFeatures} alt="pricing image" />
                  </div>
                  <div className="gap"></div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">Visits per month </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">Total Sites </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">Hosting type </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">Local storage</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">Bandwidth per month</span>
                  </div>
                  <div className="gap"></div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">Dev, Stage, Prod </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">Transferable Sites </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">Multisite ready </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">PHP 7 ready </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature">LargeFS </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="pricing-matrix-slider owl-carousel">
                <div className="pricing-matrix-item">
                  <div className="pricing-feature-group">
                    <h4 className="xs-title">Regular</h4>
                    <div className="pricing-body">
                      <p>The High performance cloud platform ever</p>
                      <div className="pricing-price">
                        <h2>
                          <sup>$</sup>29
                        </h2>
                      </div>
                      <Link href="#">
                        <a className="btn btn-primary">Buy Now</a>
                      </Link>
                    </div>
                  </div>
                  <div className="gap"></div>
                  <div className="pricing-feature-item">
                    <div className="pricing-feature d-lg-none d-sm-block">
                      Visits per month
                    </div>
                    <div className="pricing-feature">Up to 25000</div>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Total Sites
                    </span>
                    <span className="pricing-feature">1</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Hosting type
                    </span>
                    <span className="pricing-feature">Shared</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Local storage
                    </span>
                    <span className="pricing-feature">50 GB</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Bandwidth per month
                    </span>
                    <span className="pricing-feature">256 GB</span>
                  </div>
                  <div className="gap"></div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Dev, Stage, Prod
                    </span>
                    <span className="pricing-feature"></span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Transferable Sites
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Multisite ready
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      PHP 7 ready
                    </span>
                    <span className="pricing-feature"></span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      LargeFS
                    </span>
                    <span className="pricing-feature"></span>
                  </div>
                </div>
                <div className="pricing-matrix-item">
                  <div className="pricing-feature-group">
                    <h4 className="xs-title">Standard</h4>
                    <div className="pricing-body">
                      <p>The High performance cloud platform ever</p>
                      <div className="pricing-price">
                        <h2>
                          <sup>$</sup>39
                        </h2>
                      </div>
                      <Link href="#">
                        <a className="btn btn-primary">Buy Now</a>
                      </Link>
                    </div>
                  </div>
                  <div className="gap"></div>
                  <div className="pricing-feature-item">
                    <div className="pricing-feature d-lg-none d-sm-block">
                      Visits per month
                    </div>
                    <div className="pricing-feature">Up to 50000</div>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Total Sites
                    </span>
                    <span className="pricing-feature">3</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Hosting type
                    </span>
                    <span className="pricing-feature">Shared</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Local storage
                    </span>
                    <span className="pricing-feature">100 GB</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Bandwidth per month
                    </span>
                    <span className="pricing-feature">512 GB</span>
                  </div>
                  <div className="gap"></div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Dev, Stage, Prod
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Transferable Sites
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Multisite ready
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      PHP 7 ready
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      LargeFS
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                </div>
                <div className="pricing-matrix-item">
                  <div className="pricing-feature-group">
                    <h4 className="xs-title">Plus</h4>
                    <div className="pricing-body">
                      <p>The High performance cloud platform ever</p>
                      <div className="pricing-price">
                        <h2>
                          <sup>$</sup>49
                        </h2>
                      </div>
                      <Link href="#">
                        <a className="btn btn-primary">Buy Now</a>
                      </Link>
                    </div>
                  </div>
                  <div className="gap"></div>
                  <div className="pricing-feature-item">
                    <div className="pricing-feature d-lg-none d-sm-block">
                      Visits per month
                    </div>
                    <div className="pricing-feature">Unlimited</div>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Total Sites
                    </span>
                    <span className="pricing-feature">5</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Hosting type
                    </span>
                    <span className="pricing-feature">Shared</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Local storage
                    </span>
                    <span className="pricing-feature">500 GB</span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Bandwidth per month
                    </span>
                    <span className="pricing-feature">1 TB</span>
                  </div>
                  <div className="gap"></div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Dev, Stage, Prod
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Transferable Sites
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      Multisite ready
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      PHP 7 ready
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div className="pricing-feature-item">
                    <span className="pricing-feature d-lg-none d-sm-block">
                      LargeFS
                    </span>
                    <span className="pricing-feature">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliatePricing;
