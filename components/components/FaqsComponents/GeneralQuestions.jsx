import React from "react";

const GeneralQuestions = () => {
  return (
    <section className="xs-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="xs-heading wow fadeIn">
              <h2 className="heading-sub-title">Common FAQs</h2>
              <h3 className="heading-title">
                GENERAL <span>QUESTION</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div id="accordion" className="xs-accordion" role="tablist">
              <div className="card isActive">
                <div className="card-header" role="tab" id="headingOne">
                  <a
                    data-toggle="collapse"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Do you offer managed hosting?
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      No, its completely unmanaged — if you experience issues
                      with your server, you can reach out to our support team.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How to buy a domain in cheap price?
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod brunch
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do I set up a URL redirect for a domain?
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingFour">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How can I change the nameservers for my domain?
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod brunch
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingFive">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How do I generate a CSR code?
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingFive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="accordion-two" className="xs-accordion" role="tablist">
              <div className="card">
                <div className="card-header" role="tab" id="headingSix">
                  <a
                    data-toggle="collapse"
                    className="collapsed"
                    href="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How to set up Free Email Forwarding
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingSix"
                  data-parent="#accordion-two"
                >
                  <div className="card-body">
                    <p>
                      No, its completely unmanaged — if you experience issues
                      with your server, you can reach out to our support team.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingSeven">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    How do I transfer a domain?
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingSeven"
                  data-parent="#accordion-two"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod brunch
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingEight">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    How to transfer an existing hosting account?
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseEight"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingEight"
                  data-parent="#accordion-two"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingNine">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    How do I renew my domain?
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseNine"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingNine"
                  data-parent="#accordion-two"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod brunch
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTen">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    How does WhoisGuard work for keep secure?
                    <i className="icon icon-chevron-down"></i>
                  </a>
                </div>
                <div
                  id="collapseTen"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTen"
                  data-parent="#accordion-two"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin.
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

export default GeneralQuestions;
