import React from "react";
import Image from "next/image";

const Testinomial = () => {
  return (
    <section className="xs-testimonial-section testimonial-v3 wow fadeIn">
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
                  <img
                    src="assets/images/avatar/avatar-1.png"
                    alt="avatar image"
                  />
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
                  <img
                    src="assets/images/avatar/avatar-2.png"
                    alt="avatar image"
                  />
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
                  <img
                    src="assets/images/avatar/avatar-3.png"
                    alt="avatar image"
                  />
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
