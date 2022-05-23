import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [contactValues, setContactValues] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleSubmit = () => {
    axios
      .post("api/contact", contactValues)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <section className="xs-section-padding xs-bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Have question?</h2>
              <h3 className="heading-title">
                SEND <span>A MESSAGE</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="xs-form-group wow fadeInUp">
              <form
                method="POST"
                id="contact-form"
                className="xs-form"
                onClick={(values) => handleSubmit(values)}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    id="name"
                    onChange={(e) =>
                      setContactValues({
                        ...contactValues,
                        name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    id="email"
                    onChange={(e) =>
                      setContactValues({
                        ...contactValues,
                        email: e.target.value,
                      })
                    }
                  />
                  <input
                    type="url"
                    className="form-control"
                    name="website"
                    placeholder="Website"
                    id="website"
                    onChange={(e) =>
                      setContactValues({
                        ...contactValues,
                        website: e.target.value,
                      })
                    }
                  />
                  <textarea
                    name="massage"
                    placeholder="Question"
                    id="massage"
                    className="form-control"
                    cols="30"
                    rows="10"
                    onChange={(e) =>
                      setContactValues({
                        ...contactValues,
                        message: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="xs-btn-wraper">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    id="submit"
                    value="Submit Now"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
