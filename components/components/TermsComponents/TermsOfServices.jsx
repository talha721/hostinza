import React from "react";

const TermsOfServices = () => {
  return (
    <section className="xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Our Terms</h2>
              <h3 className="heading-title">
                TERMS <span>OF SERVICE</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="terms-wraper wow fadeInUp">
              <h4 className="xs-title">Account Terms</h4>
              <ol className="order-list">
                <li>
                  You must be 18 years or older or at least the age of majority
                  in the jurisdiction where you reside or from which you use
                  this Service.
                </li>
                <li>
                  To access and use the Services, you must register for a
                  Hostinza account (“Account”) by providing your full legal
                  name, current address, phone number, a valid email address,
                  and any other information indicated as required. Hostinza may
                  reject your application for an Account, or cancel an existing
                  Account, for any reason, in our sole discretion.
                </li>
                <li>
                  You acknowledge that Hostinza will use the email address you
                  provide as the primary method for communication.
                </li>
                <li>
                  You are responsible for keeping your password secure. Hostinza
                  cannot and will not be liable for any loss or damage from your
                  failure to maintain the security of your Account and password.
                </li>
                <li>
                  You are responsible for all activity and content such as
                  photos, images, videos, graphics, written content, audio
                  files, code, information, or data uploaded, collected,
                  generated, stored, displayed, distributed, transmitted or
                  exhibited on or in connection with your Account (“Materials”).
                </li>
                <li>
                  A breach or violation of any term in the Terms of Service,
                  including the AUP, as determined in the sole discretion of
                  Hostinza will result in an immediate termination of your
                  services.
                </li>
              </ol>
            </div>
            <div className="terms-wraper wow fadeInUp">
              <h4 className="xs-title">Account Activation</h4>
              <ol className="order-list">
                <li>
                  Subject to section 2.1.2, the person signing up for the
                  Service will be the contracting party (“Account Owner”) for
                  the purposes of our Terms of Service and will be the person
                  who is authorized to use any corresponding account we may
                  provide to the Account Owner in connection with the Service.
                </li>
                <li>
                  If you are signing up for the Service on behalf of your
                  employer, your employer shall be the Account Owner. If you are
                  signing up for the Service on behalf of your employer, then
                  you represent and warrant that you have the authority to bind
                  your employer to our Terms of Service.
                </li>
                <li>
                  Upon completion of sign up for the Service, Hostinza will
                  create a PayPal Express Checkout account on your behalf, using
                  your email address. Depending on your location, Hostinza may
                  also create a Hostinza Payments account on your behalf.
                </li>
                <li>
                  You acknowledge that PayPal Express Checkout and/or Hostinza
                  Payments will be your default payments gateway(s) and that it
                  is your sole responsibility as the Account Owner to activate
                  and maintain these accounts. If you do not wish to keep either
                  of the payment accounts active, it is your responsibility to
                  deactivate them. For the avoidance of doubt, PayPal Express
                  Checkout is a Third Party Service, as defined in Section 15 of
                  these Terms of Service.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServices;
