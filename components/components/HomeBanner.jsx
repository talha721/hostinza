import React from "react";
import Image from "next/image";

import HorizontalImage from "../../public/assets/images/welcome/horizontal-shape.png";
import VerticalShape1 from "../../public/assets/images/welcome/vertical-shape-1.png";
import VerticalShape2 from "../../public/assets/images/welcome/vertical-shape-2.png";

const Banner = () => {
  return (
    <section className="xs-banner banner-v4 banner-v5 contet-to-center curve-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto align-self-center">
            <div className="xs-banner-content">
              <h2 className="banner-title wow fadeInUp">
                Find your domain and serve it to the world
              </h2>
              <form
                action="#"
                method="POST"
                className="domain-search-form version-2 wow fadeInUp"
                data-wow-duration="1s"
              >
                <input
                  type="search"
                  placeholder="Enter Address"
                  id="domain-search"
                />
                <div className="select-group">
                  <select name="domainList" multiple className="form-control">
                    <option>.com</option>
                    <option>.net</option>
                    <option>.io</option>
                    <option>.info</option>
                    <option>.store</option>
                  </select>
                </div>
                <button className="search-btn">
                  <i className="icon icon-search"></i>
                </button>
              </form>
              <ul
                className="domain-box-list wow fadeInUp"
                data-wow-duration="1.3s"
              >
                <li>
                  .com
                  <hr />
                  $10.99
                </li>
                <li>
                  .net
                  <hr />
                  $1.46
                </li>
                <li>
                  .io
                  <hr />
                  $5.50
                </li>
                <li>
                  .co
                  <hr />
                  $8.00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wave_animation_wraper">
        <div className="wave_animation">
          <div className="layer wave one" data-depth="0.20">
            <Image src={HorizontalImage} alt="horizontal shape" />
          </div>
          <div className="layer wave two" data-depth="0.6">
            <Image src={VerticalShape1} alt="vrtical shape" />
          </div>
          <div className="layer wave three" data-depth="0.4">
            <Image src={VerticalShape2} alt="vrtical shape" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
