import React from "react";
import Image from "next/image";

import Avatar1 from "../../../public/assets/images/avatar/avatar-1.png";
import Avatar2 from "../../../public/assets/images/avatar/avatar-2.png";
import Avatar3 from "../../../public/assets/images/avatar/avatar-3.png";

const Testinomial = () => {
  return (
    <section className="xs-testimonial-section testimonial-v5 wow fadeIn">
      <div className="container">
        <div className="xs-testimonial-slider testimonial-slider owl-carousel">
          <div className="xs-testimonial-item">
            <div className="testimonial-content">
              <p>
                Our best-in-class WordPress solution with additio nal optiz
                ation to make an running a WooCommerce
              </p>
              <div className="commentor-bio media">
                <div className="d-flex round-avatar">
                  <Image src={Avatar1} alt="avatar image" priority />
                </div>
                <div className="media-body align-self-center">
                  <h4 className="commentor-title">Richard I Jones</h4>
                  <p className="commentor-info">WWW Realty</p>
                  <i className="icon icon-quote"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="xs-testimonial-item">
            <div className="testimonial-content">
              <p>
                Our best-in-class WordPress solution with additio nal optiz
                ation to make an running a WooCommerce
              </p>
              <div className="commentor-bio media">
                <div className="d-flex round-avatar">
                  <Image src={Avatar2} alt="avatar image" priority />
                </div>
                <div className="media-body align-self-center">
                  <h4 className="commentor-title">Cecilia H King</h4>
                  <p className="commentor-info">The White Rabbit</p>
                  <i className="icon icon-quote"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="xs-testimonial-item">
            <div className="testimonial-content">
              <p>
                Our best-in-class WordPress solution with additio nal optiz
                ation to make an running a WooCommerce
              </p>
              <div className="commentor-bio media">
                <div className="d-flex round-avatar">
                  <Image src={Avatar3} alt="avatar image" priority />
                </div>
                <div className="media-body align-self-center">
                  <h4 className="commentor-title">Joe D Walczak</h4>
                  <p className="commentor-info">Hechinger</p>
                  <i className="icon icon-quote"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testinomial;
