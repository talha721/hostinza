import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [contactValues, setContactValues] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const onSubmit = (data) => {
    axios
      .post("api/contact", data)
      .then((response) => {
        document.getElementById("contact-form").reset();
        toast.success("Thankyou For Contacting Us! We'll Contact You ASAP.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error("Something Went Wrong! Please Try Again Later.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
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
                onSubmit={handleSubmit(onSubmit)}
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
                    {...register("name", { required: true })}
                    minLength="3"
                    maxLength="15"
                  />
                  <span className="text-danger mt-0">
                    {errors.name?.type === "required" && "Name is required"}
                  </span>
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
                    {...register("email", {
                      required: true,
                      pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/",
                    })}
                  />
                  <span className="text-danger mt-0">
                    {errors.email?.type === "required" && "Email is required"}
                  </span>
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
                    {...register("website", { required: true })}
                  />
                  <span className="text-danger mt-0">
                    {errors.website?.type === "required" && "URL is required"}
                  </span>
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
                    {...register("message", { required: true })}
                    minLength="15"
                    maxLength="100"
                  ></textarea>
                  <span className="text-danger mt-0">
                    {errors.message?.type === "required" &&
                      "Question is required! Please ask your question."}
                  </span>
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
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{ width: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
