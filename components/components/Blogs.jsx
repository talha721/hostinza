import React from "react";
import Image from "next/image";

import BlogImage4 from "../../public/assets/images/blogs/blogs-4.jpg";
import BlogImage5 from "../../public/assets/images/blogs/blogs-5.jpg";
import BlogImage6 from "../../public/assets/images/blogs/blogs-6.jpg";

const HomePageBlogs = () => {
  return (
    <section className="xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Latest Info</h2>
              <h3 className="heading-title">
                GET <span>LATEST INFO</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="xs-blog-post wow fadeInUp">
              <div className="post-image">
                <Image src={BlogImage4} alt="hosting blog images" />
              </div>
              <div className="entry-header">
                <div className="post-meta">
                  <span className="post-cat">
                    <a href="#">Cloud Hosting</a>
                  </span>
                </div>
                <h2 className="entry-title">
                  <a href="blog-single.html">Best domain name for Business</a>
                </h2>
                <div className="entry-meta">
                  <span className="meta-date">7 March, 2018</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="xs-blog-post wow fadeInUp" data-wow-duration="1.5s">
              <div className="post-image">
                <Image src={BlogImage5} alt="hosting blog images" />
              </div>
              <div className="entry-header">
                <div className="post-meta">
                  <span className="post-cat">
                    <a href="#">Reseller Hosting</a>
                  </span>
                </div>
                <h2 className="entry-title">
                  <a href="blog-single.html">
                    Best reseller hosting for start business
                  </a>
                </h2>
                <div className="entry-meta">
                  <span className="meta-date">1 June, 2017</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="xs-blog-post wow fadeInUp" data-wow-duration="2s">
              <div className="post-image">
                <Image src={BlogImage6} alt="hosting blog images" />
              </div>
              <div className="entry-header">
                <div className="post-meta">
                  <span className="post-cat">
                    <a href="#">Shared Hosting</a>
                  </span>
                </div>
                <h2 className="entry-title">
                  <a href="blog-single.html">Domain name for student</a>
                </h2>
                <div className="entry-meta">
                  <span className="meta-date">2 April, 2017</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageBlogs;
