import React from "react";

const AskQuestionsForm = () => {
  return (
    <section className="xs-section-padding xs-bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Have question?</h2>
              <h3 className="heading-title">
                ASK <span>A QUESTION</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="xs-form-group wow fadeInUp">
              <form
                action="#"
                method="POST"
                id="xs-contact-form"
                className="xs-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    id="xs_contact_name"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    id="xs_contact_email"
                  />
                  <input
                    type="url"
                    className="form-control"
                    name="website"
                    placeholder="Website"
                    id="xs_contact_website"
                  />
                  <textarea
                    name="massage"
                    placeholder="Question"
                    id="x_contact_massage"
                    className="form-control"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="xs-btn-wraper">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    id="xs_contact_submit"
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

export default AskQuestionsForm;
