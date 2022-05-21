import React from "react";
import Image from "next/image";

import BannerImage from "../../public/assets/images/welcome/banner_image-3.png";

const Banner = () => {
  return (
    <section class="xs-banner banner-v4 banner-v5 contet-to-center curve-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto align-self-center">
            <div class="xs-banner-content">
              <h2 class="banner-title wow fadeInUp">
                Find your domain and serve it to the world
              </h2>
              <form
                action="#"
                method="POST"
                class="domain-search-form version-2 wow fadeInUp"
                data-wow-duration="1s"
              >
                <input
                  type="search"
                  placeholder="Enter Address"
                  id="domain-search"
                />
                <div class="select-group">
                  <select name="domainList">
                    <option value="com" selected>.com</option>
                    <option value="net">.net</option>
                    <option value="io">.io</option>
                    <option value="info">.info</option>
                    <option value="store">.store</option>
                  </select>
                </div>
                <button class="search-btn">
                  <i class="icon icon-search"></i>
                </button>
              </form>
              <ul class="domain-box-list wow fadeInUp" data-wow-duration="1.3s">
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
      <div class="wave_animation_wraper">
        <div class="wave_animation">
          <div class="layer wave one" data-depth="0.20">
            <img
              src="assets/images/welcome/horizontal-shape.png"
              alt="horizontal shape"
            />
          </div>
          <div class="layer wave two" data-depth="0.6">
            <img
              src="assets/images/welcome/vertical-shape-1.png"
              alt="vrtical shape"
            />
          </div>
          <div class="layer wave three" data-depth="0.4">
            <img
              src="assets/images/welcome/vertical-shape-2.png"
              alt="vrtical shape"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
