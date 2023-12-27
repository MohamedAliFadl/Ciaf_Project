import React, { Fragment } from "react";

function AboutSection1() {
  return (
    <Fragment>
      <div className="more-info about-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="more-info-content">
                <div className="row">
                  <div className="col-md-6 align-self-center">
                    <div className="right-content">
                      {/*<span>our solid background on finance</span>*/}
                      <h2>
                        Get to know about <em>Ciaf Holding</em>
                      </h2>
                      <p>
                        ‘CIAF Finance Holding’ was established in October, 2008
                        as a joint stock company under the law No.95 of 1992 of
                        the Capital Market. The Company’s authorized Capital is
                        EGP 2.5 billion and the paid-in Capital is EGP 500
                        million. ‘CIAF Finance Holding’ acts as the investment
                        arm of the Egyptian civil aviation sector.
                      </p>
                      {/*<a href="/" className="filled-button">Read More</a>*/}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="left-image">
                      <img src="assets/images/about-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutSection1;
